# Mapa de Testes — Academia Fight SaaS

> Atualizado em: 2026-05-21
> Stack: .NET 9 + Flutter · Backend: xUnit (integração) · Mobile: testes manuais por tela

---

## 1. Backend — Testes Automatizados (xUnit)

**Setup:** `WebApplicationFactory` + EF InMemory + Hangfire.InMemory  
**Total:** 46 testes `[Fact]`  
**Localização:** `backend/tests/AcademiaFight.Tests/`

---

### 1.1 Auth (`Auth/AuthTests.cs`) — 12 testes

| # | Teste | Cobertura |
|---|-------|-----------|
| 1 | Register_DeveRetornarSucesso | POST /api/auth/register — fluxo feliz |
| 2 | Register_EmailDuplicado_DeveRetornarErro | Unicidade de e-mail por academia |
| 3 | Login_DeveRetornarTokens | POST /api/auth/login — tokens JWT + refresh |
| 4 | Login_SenhaErrada_DeveRetornarErro | Credencial inválida |
| 5 | Login_UsuarioInexistente_DeveRetornarErro | E-mail não cadastrado |
| 6 | RefreshToken_DeveRetornarNovosTokens | POST /api/auth/refresh — renovação |
| 7 | RefreshToken_Invalido_DeveRetornarErro | Refresh token adulterado |
| 8 | RefreshToken_Expirado_DeveRetornarErro | TTL expirado |
| 9 | PrimeiroAcesso_DeveDefinirSenha | POST /api/auth/primeiro-acesso |
| 10 | PrimeiroAcesso_TokenInvalido_DeveRetornarErro | Token de convite inválido |
| 11 | AlterarSenha_DeveAtualizarComSucesso | POST /api/auth/alterar-senha |
| 12 | AlterarSenha_SenhaAtualErrada_DeveRetornarErro | Validação de senha atual |

---

### 1.2 Alunos (`Alunos/AlunoTests.cs`) — 12 testes

| # | Teste | Cobertura |
|---|-------|-----------|
| 1 | CriarAluno_DeveRetornarSucesso | POST /api/alunos — fluxo feliz |
| 2 | CriarAluno_SemEmail_DeveRetornarSucesso | Aluno sem e-mail (campos opcionais) |
| 3 | CriarAluno_NomeDuplicado_DeveRetornarErro | Unicidade por academia |
| 4 | ListarAlunos_DeveRetornarListaPaginada | GET /api/alunos |
| 5 | BuscarAluno_DeveRetornarDetalhes | GET /api/alunos/{id} |
| 6 | BuscarAluno_OutraAcademia_DeveRetornarNaoEncontrado | Isolamento multi-tenant |
| 7 | AtualizarAluno_DeveRetornarSucesso | PUT /api/alunos/{id} |
| 8 | DesativarAluno_DeveRetornarSucesso | DELETE (soft) /api/alunos/{id} |
| 9 | VincularPlano_DeveRetornarSucesso | POST /api/alunos/{id}/plano |
| 10 | ConsultarFinanceiro_DeveRetornarParcelas | GET /api/alunos/{id}/financeiro |
| 11 | MarcarPresenca_DeveRetornarSucesso | POST /api/presencas |
| 12 | ListarPresencas_DeveRetornarHistorico | GET /api/alunos/{id}/presencas |

---

### 1.3 Turmas (`Turmas/TurmaTests.cs`) — 10 testes

| # | Teste | Cobertura |
|---|-------|-----------|
| 1 | CriarTurma_DeveRetornarSucesso | POST /api/turmas — fluxo feliz |
| 2 | CriarTurma_ProfessorInexistente_DeveRetornarErro | FK professor válido |
| 3 | CriarTurma_ModalidadeInexistente_DeveRetornarErro | FK modalidade válida |
| 4 | ListarTurmas_DeveRetornarLista | GET /api/turmas |
| 5 | BuscarTurma_DeveRetornarDetalhes | GET /api/turmas/{id} |
| 6 | AtualizarTurma_DeveRetornarSucesso | PUT /api/turmas/{id} |
| 7 | InativarTurma_DeveRetornarSucesso | DELETE (soft) /api/turmas/{id} |
| 8 | MatricularAluno_DeveRetornarSucesso | POST /api/matriculas |
| 9 | MatricularAluno_JaMatriculado_DeveRetornarErro | Duplicidade de matrícula |
| 10 | DesmatricularAluno_DeveRetornarSucesso | DELETE /api/matriculas/{id} |

---

### 1.4 Financeiro (`Financeiro/FinanceiroTests.cs`) — 12 testes

| # | Teste | Cobertura |
|---|-------|-----------|
| 1 | CriarPlano_DeveRetornarSucesso | POST /api/planos — fluxo feliz |
| 2 | ListarPlanos_DeveRetornarLista | GET /api/planos |
| 3 | AtualizarPlano_DeveRetornarSucesso | PUT /api/planos/{id} |
| 4 | GerarParcela_DeveRetornarSucesso | Geração automática de cobrança |
| 5 | ListarParcelas_DeveRetornarListaPaginada | GET /api/financeiro |
| 6 | RegistrarPagamento_DeveRetornarSucesso | POST /api/financeiro/{id}/pagar |
| 7 | RegistrarPagamento_ParcelaJaPaga_DeveRetornarErro | Idempotência de pagamento |
| 8 | CancelarParcela_DeveRetornarSucesso | DELETE (soft) /api/financeiro/{id} |
| 9 | ConsultarInadimplentes_DeveRetornarLista | GET /api/financeiro/inadimplentes |
| 10 | RelatorioMensal_DeveRetornarAgregados | GET /api/financeiro/relatorio |
| 11 | IsolamentoMultiTenant_Financeiro | Parcelas de outra academia inacessíveis |
| 12 | GerarCobranca_PlanoSemVencimento_DeveUsarDefault | Dia de vencimento padrão |

---

### Módulos sem cobertura automatizada (backlog)

| Módulo | Controllers/Services existentes | Prioridade |
|--------|--------------------------------|------------|
| Graduação | GraduacaoController + GraduacaoService | Alta |
| Faixas | FaixaController + FaixaService | Alta |
| Funcionários | FuncionariosController + FuncionarioService | Alta |
| Presença (Catraca/QR) | CatracaController + CatracaService | Média |
| Modalidades | ModalidadeController + ModalidadeService | Média |
| Contratos | ContratoController + ContratoService | Média |
| Horários | HorarioController + HorarioService | Média |
| Ranking/XP | RankingController + RankingService + XpService | Baixa |
| Notificações | NotificacaoController + NotificacaoService | Baixa |
| Dashboard | DashboardController + DashboardService | Baixa |
| Conquistas | — + ConquistaService | Baixa |

---

## 2. Mobile — Testes Manuais por Tela (Flutter)

**Ambiente:** Emulador / dispositivo físico · API: `http://localhost:5246`  
**Total de telas:** 39 arquivos Dart

---

### 2.1 Fluxo de Autenticação

| Tela | Arquivo | Cenários a testar | Status |
|------|---------|-------------------|--------|
| Splash | `screens/splash_screen.dart` | Redireciona auth → /login, logado → /admin/dashboard | ✅ |
| Login | `screens/auth/login_screen.dart` | Login admin válido; login professor; login aluno; senha errada; campo vazio | ✅ |
| Cadastro | `screens/auth/cadastro_screen.dart` | Criar academia; subdomínio auto-gerado; validações; e-mail duplicado | ✅ |
| Esqueci senha | `screens/auth/esqueci_senha_screen.dart` | Envio de e-mail; e-mail inválido | ⚠️ não testado |
| Primeiro acesso | `screens/auth/primeiro_acesso_screen.dart` | Token válido → definir senha; token inválido | ✅ |
| Alterar senha | `screens/alterar_senha_screen.dart` | Senha atual correta; senha atual errada; senhas não coincidem | ⚠️ não testado |

---

### 2.2 Área Admin

#### Dashboard
| Tela | Arquivo | Cenários | Status |
|------|---------|----------|--------|
| Dashboard | `screens/admin/dashboard_screen.dart` | Cards KPI; onboarding 5 passos (modalidade→plano→professor→turma→aluno); setup completo oculta onboarding | ✅ |

**Onboarding — Checklist de steps:**
- [ ] Step 1: Criar modalidade (bottom sheet, erro real exibido)
- [ ] Step 2: Criar plano de mensalidade (bottom sheet, erro real exibido)
- [ ] Step 3: Cadastrar professor → navega `/admin/equipe/novo`
- [ ] Step 4: Criar turma → navega `/admin/turmas`
- [ ] Step 5: Cadastrar aluno → navega `/admin/alunos/novo`

#### Alunos
| Tela | Arquivo | Cenários | Status |
|------|---------|----------|--------|
| Lista alunos | `screens/admin/alunos_screen.dart` | Listar; buscar; filtrar ativos/inativos | ✅ |
| Detalhe aluno | `screens/admin/aluno_detalhe_screen.dart` | Ver dados; financeiro; presenças; graduações | ✅ |
| Criar aluno | `screens/admin/aluno_criar_screen.dart` | Máscara telefone `(XX) XXXXX-XXXX`; máscara data `DD/MM/AAAA`; seleção de plano; campos obrigatórios; salvar | ✅ |

#### Turmas
| Tela | Arquivo | Cenários | Status |
|------|---------|----------|--------|
| Lista turmas | `screens/admin/turmas_screen.dart` | Listar; filtrar por modalidade | ✅ |
| Detalhe turma | `screens/admin/turma_detalhe_screen.dart` | Alunos matriculados; horários; matricular aluno | ✅ |

#### Equipe (Funcionários)
| Tela | Arquivo | Cenários | Status |
|------|---------|----------|--------|
| Lista equipe | `screens/admin/equipe_screen.dart` | Listar professores e admins | ✅ |
| Criar funcionário | `screens/admin/equipe_criar_screen.dart` | Criar professor; criar admin; envio de e-mail primeiro acesso | ⚠️ não testado |

#### Financeiro
| Tela | Arquivo | Cenários | Status |
|------|---------|----------|--------|
| Financeiro admin | `screens/admin/financeiro_screen.dart` | Listar parcelas; filtrar; registrar pagamento; status (pendente/pago/atrasado) | ⚠️ não testado |

#### Relatórios & Extras
| Tela | Arquivo | Cenários | Status |
|------|---------|----------|--------|
| Relatório anual | `screens/admin/relatorio_anual_screen.dart` | Gráfico receita por mês | ⚠️ não testado |
| Relatório presenças | `screens/admin/relatorio_presencas_screen.dart` | Presenças por turma/período | ⚠️ não testado |
| Aniversariantes | `screens/admin/aniversariantes_screen.dart` | Lista do mês | ⚠️ não testado |
| Faixas | `screens/admin/faixas_screen.dart` | Listar faixas; criar; editar ordem | ⚠️ não testado |
| Modelos contrato | `screens/admin/modelos_contrato_screen.dart` | Listar modelos; criar; preview PDF | ⚠️ não testado |
| Configurações | `screens/admin/configuracoes_screen.dart` | Dados academia; logo; notificações FCM | ⚠️ não testado |

---

### 2.3 Área Professor

| Tela | Arquivo | Cenários | Status |
|------|---------|----------|--------|
| Minhas turmas | `screens/professor/prof_turmas_screen.dart` | Ver turmas do professor logado | ⚠️ não testado |
| Horários | `screens/professor/prof_horarios_screen.dart` | Agenda semanal | ⚠️ não testado |
| Chamada | `screens/professor/prof_presenca_screen.dart` | Marcar presença de alunos; QR scan | ⚠️ não testado |
| Histórico chamada | `screens/professor/prof_presenca_historico_screen.dart` | Ver presenças passadas | ⚠️ não testado |
| Graduação | `screens/professor/prof_graduacao_screen.dart` | Graduar aluno; selecionar nova faixa | ⚠️ não testado |
| Perfil professor | `screens/professor/prof_perfil_screen.dart` | Ver/editar dados; alterar senha | ⚠️ não testado |

---

### 2.4 Área Aluno

| Tela | Arquivo | Cenários | Status |
|------|---------|----------|--------|
| Perfil | `screens/aluno/aluno_perfil_screen.dart` | Dados pessoais; faixa atual | ✅ |
| Horários | `screens/aluno/aluno_horarios_screen.dart` | Ver horários das turmas matriculadas | ⚠️ não testado |
| Presenças | `screens/aluno/aluno_presencas_screen.dart` | Histórico; frequência % | ⚠️ não testado |
| Financeiro aluno | `screens/aluno/aluno_financeiro_screen.dart` | Parcelas pendentes; histórico pagamentos | ⚠️ não testado |
| Ranking | `screens/aluno/aluno_ranking_screen.dart` | Posição; XP; top alunos | ⚠️ não testado |
| Graduações | `screens/aluno/aluno_graduacoes_screen.dart` | Histórico de faixas | ⚠️ não testado |
| Conquistas | `screens/aluno/aluno_conquistas_screen.dart` | Badges desbloqueados | ⚠️ não testado |

---

### 2.5 Compartilhadas

| Tela | Arquivo | Cenários | Status |
|------|---------|----------|--------|
| QR Scan | `screens/shared/qr_scan_screen.dart` | Ler QR da catraca; erro câmera | ⚠️ não testado |
| Notificações | `screens/notificacoes_screen.dart` | Listar push; marcar lida | ⚠️ não testado |

---

## 3. Rotas Mobile (GoRouter)

```
/splash
/login
/cadastrar
/primeiro-acesso
/esqueci-senha
/alterar-senha
/scan-qr

# Admin Shell (5 tabs)
/admin/dashboard
  /admin/configuracoes
  /admin/faixas
  /admin/contratos
  /admin/aniversariantes
/admin/alunos
  /admin/alunos/novo
  /admin/alunos/:id
/admin/turmas
  /admin/turmas/relatorio
  /admin/turmas/:id
/admin/equipe
  /admin/equipe/novo
/admin/financeiro
  /admin/financeiro/relatorio

# Professor Shell (5 tabs)
/professor/turmas
/professor/horarios
  /professor/horarios/:id/presencas
/professor/presenca
/professor/graduacao
/professor/perfil

# Aluno Shell (5 tabs)
/aluno/perfil
  /aluno/perfil/graduacoes
/aluno/horarios
/aluno/presencas
/aluno/financeiro
/aluno/ranking
  /aluno/ranking/conquistas
```

---

## 4. Controllers & Services — Cobertura por Módulo

| Módulo | Controller | Service | Testes Backend | Telas Mobile |
|--------|------------|---------|---------------|--------------|
| Auth | AuthController | AuthService | ✅ 12 | ✅ Login/Cadastro/PrimeiroAcesso |
| Alunos | AlunoController | — | ✅ 12 | ✅ Lista/Detalhe/Criar |
| Turmas | TurmaController | TurmaService | ✅ 10 | ✅ Lista/Detalhe |
| Matrículas | MatriculaController | MatriculaService | ✅ (em TurmaTests) | ✅ (em Detalhe Turma) |
| Financeiro | FinanceiroController | FinanceiroService | ✅ 12 | ⚠️ não testado |
| Planos | PlanoController | PlanoService | ✅ (em FinanceiroTests) | ✅ (onboarding sheet) |
| Modalidades | ModalidadeController | ModalidadeService | ❌ sem testes | ✅ (onboarding sheet) |
| Funcionários | FuncionariosController | FuncionarioService | ❌ sem testes | ⚠️ equipe_criar não testado |
| Graduação | GraduacaoController | GraduacaoService | ❌ sem testes | ⚠️ não testado |
| Faixas | FaixaController | FaixaService | ❌ sem testes | ⚠️ não testado |
| Presença | PresencaController | PresencaService | ✅ (em AlunoTests) | ⚠️ não testado |
| Catraca/QR | CatracaController | CatracaService | ❌ sem testes | ⚠️ não testado |
| Horários | HorarioController | HorarioService | ❌ sem testes | ⚠️ não testado |
| Contratos | ContratoController | ContratoService | ❌ sem testes | ⚠️ não testado |
| Ranking/XP | RankingController | RankingService + XpService | ❌ sem testes | ⚠️ não testado |
| Notificações | NotificacaoController | NotificacaoService | ❌ sem testes | ⚠️ não testado |
| Dashboard | DashboardController | DashboardService | ❌ sem testes | ✅ KPIs + onboarding |
| Academia | AcademiaController | AcademiaService | ❌ sem testes | ⚠️ configurações não testado |
| Conquistas | — | ConquistaService | ❌ sem testes | ⚠️ não testado |
| Usuários | UsuariosController | UsuarioService | ❌ sem testes | — |
| Modelos Contrato | ModeloContratoController | ModeloContratoService | ❌ sem testes | ⚠️ não testado |

---

## 5. Bugs Corrigidos (histórico recente)

| Data | Bug | Arquivo | Fix |
|------|-----|---------|-----|
| 2026-05-21 | `ArgumentNullException("value")` no login de aluno sem e-mail | `TokenService.cs` | `usuario.Email ?? string.Empty` antes de criar Claims |
| 2026-05-21 | `RefreshToken` falhava para usuário sem e-mail | `AuthService.cs` | Busca por `sub` (GUID) em vez de e-mail |
| 2026-05-21 | "Erro de conexão" mascarava erros reais nos bottom sheets | `dashboard_screen.dart` | `on DioException catch` + extração de `mensagem` |
| 2026-05-21 | Onboarding sem passo de professor bloqueava criação de turma | `dashboard_screen.dart` | Step 3 "Cadastre um professor" adicionado |
| 2026-05-21 | Campos telefone/data sem máscara no cadastro de aluno | `aluno_criar_screen.dart` | `_PhoneMaskFormatter` + `_DateMaskFormatter` |

---

## 6. Próximos passos sugeridos

### Alta prioridade
- [ ] Testes de integração: Funcionários / Graduação / Faixas
- [ ] Testar manualmente: `equipe_criar_screen` (criar professor + primeiro acesso)
- [ ] Testar manualmente: `financeiro_screen` (admin e aluno)

### Média prioridade
- [ ] Testes de integração: Modalidades / Horários / Presença (catraca)
- [ ] Testar manualmente: área professor completa (chamada, graduação)
- [ ] Testar manualmente: tela de faixas admin

### Baixa prioridade
- [ ] Testes de integração: Ranking / XP / Conquistas / Notificações
- [ ] FCM push notifications (requer projeto Firebase configurado)
- [ ] Telas de contratos (modelo + assinatura digital)
