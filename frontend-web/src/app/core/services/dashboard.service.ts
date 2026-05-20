import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import { BaseResponse } from '../models/auth.model';

export interface DashboardResumoDto {
  totalAlunos: number;
  turmasAtivas: number;
  presencasHoje: number;
  alunosInadimplentes: number;
  proximasAulas: ProximaAulaDto[];
}

export interface FrequenciaDiariaDto {
  data: string;
  total: number;
}

export interface ProximaAulaDto {
  horarioId: string;
  turma: string;
  modalidade: string;
  horaInicio: string;
  horaFim: string;
  sala?: string;
  totalAlunos: number;
  capacidadeMaxima: number;
}

@Injectable({ providedIn: 'root' })
export class DashboardService {
  private readonly http = inject(HttpClient);

  getResumo(): Observable<BaseResponse<DashboardResumoDto>> {
    return this.http.get<BaseResponse<DashboardResumoDto>>(
      `${environment.apiUrl}/api/dashboard/resumo`
    );
  }

  getFrequencia(dias = 14): Observable<BaseResponse<FrequenciaDiariaDto[]>> {
    return this.http.get<BaseResponse<FrequenciaDiariaDto[]>>(
      `${environment.apiUrl}/api/dashboard/frequencia?dias=${dias}`
    );
  }
}
