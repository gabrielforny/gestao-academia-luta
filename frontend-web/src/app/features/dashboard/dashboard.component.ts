import { Component, inject, signal, computed, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { AuthService } from '../../core/services/auth.service';
import { DashboardService, DashboardResumoDto } from '../../core/services/dashboard.service';
import { AlunoService } from '../../core/services/aluno.service';
import { AniversarianteDto } from '../../core/models/aluno.model';
import { ModalidadeService } from '../../core/services/modalidade.service';
import { PlanoService } from '../../core/services/plano.service';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
  readonly authService = inject(AuthService);
  private readonly dashboardService = inject(DashboardService);
  private readonly alunoService = inject(AlunoService);
  private readonly modalidadeService = inject(ModalidadeService);
  private readonly planoService = inject(PlanoService);

  readonly resumo = signal<DashboardResumoDto | null>(null);
  readonly aniversariantes = signal<AniversarianteDto[]>([]);
  readonly carregando = signal(true);
  readonly erro = signal('');

  readonly temModalidades = signal(false);
  readonly temPlanos = signal(false);

  readonly passos = computed(() => [
    {
      id: 'modalidade',
      titulo: 'Crie uma modalidade',
      descricao: 'Ex: Jiu-Jitsu, Muay Thai, Boxe. As turmas dependem das modalidades.',
      link: '/app/modalidades',
      linkLabel: 'Criar modalidade',
      feito: this.temModalidades(),
    },
    {
      id: 'plano',
      titulo: 'Crie um plano de mensalidade',
      descricao: 'Defina os valores e periodicidade dos planos que seus alunos podem contratar.',
      link: '/app/planos',
      linkLabel: 'Criar plano',
      feito: this.temPlanos(),
    },
    {
      id: 'turma',
      titulo: 'Monte uma turma',
      descricao: 'Agrupe alunos por modalidade, nível e horário.',
      link: '/app/turmas/novo',
      linkLabel: 'Criar turma',
      feito: (this.resumo()?.turmasAtivas ?? 0) > 0,
    },
    {
      id: 'aluno',
      titulo: 'Cadastre seu primeiro aluno',
      descricao: 'Agora que a estrutura está pronta, comece a matricular!',
      link: '/app/alunos/novo',
      linkLabel: 'Cadastrar aluno',
      feito: (this.resumo()?.totalAlunos ?? 0) > 0,
    },
  ]);

  readonly setupCompleto = computed(() => this.passos().every(p => p.feito));
  readonly passosFeitos = computed(() => this.passos().filter(p => p.feito).length);

  readonly mesNomes = ['Janeiro','Fevereiro','Março','Abril','Maio','Junho','Julho','Agosto','Setembro','Outubro','Novembro','Dezembro'];
  readonly mesAtual = new Date().getMonth();

  ngOnInit(): void {
    this.carregar();
    this.alunoService.getAniversariantes().subscribe({
      next: (res) => this.aniversariantes.set(res.dados ?? []),
    });
    this.modalidadeService.getAll().subscribe({
      next: (res) => this.temModalidades.set((res.dados?.length ?? 0) > 0),
    });
    this.planoService.listar().subscribe({
      next: (res) => this.temPlanos.set((res.dados?.length ?? 0) > 0),
    });
  }

  carregar(): void {
    this.carregando.set(true);
    this.erro.set('');
    this.dashboardService.getResumo().subscribe({
      next: (res) => { this.resumo.set(res.dados ?? null); this.carregando.set(false); },
      error: () => { this.erro.set('Erro ao carregar dados.'); this.carregando.set(false); },
    });
  }
}
