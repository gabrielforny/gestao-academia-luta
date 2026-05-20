import {
  PlanoService
} from "./chunk-SHWR7DTN.js";
import {
  FinanceiroService
} from "./chunk-LXEKVDDV.js";
import {
  ModalidadeService
} from "./chunk-FSZKUW37.js";
import {
  AlunoService
} from "./chunk-RY6KEV5S.js";
import {
  AuthService
} from "./chunk-UDQ4RXGC.js";
import {
  environment
} from "./chunk-RZVP4UO7.js";
import {
  RouterLink
} from "./chunk-CPMJ3O6H.js";
import {
  CommonModule,
  DatePipe,
  HttpClient,
  computed,
  inject,
  signal,
  ɵsetClassDebugInfo,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵclassProp,
  ɵɵconditional,
  ɵɵdefineComponent,
  ɵɵdefineInjectable,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnamespaceHTML,
  ɵɵnamespaceSVG,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind4,
  ɵɵproperty,
  ɵɵpureFunction0,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIdentity,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2
} from "./chunk-7TD4H62Z.js";
import "./chunk-7G5TR5RR.js";

// src/app/core/services/dashboard.service.ts
var DashboardService = class _DashboardService {
  constructor() {
    this.http = inject(HttpClient);
  }
  getResumo() {
    return this.http.get(`${environment.apiUrl}/api/dashboard/resumo`);
  }
  static {
    this.\u0275fac = function DashboardService_Factory(t) {
      return new (t || _DashboardService)();
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _DashboardService, factory: _DashboardService.\u0275fac, providedIn: "root" });
  }
};

// src/app/features/dashboard/dashboard.component.ts
var _forTrack0 = ($index, $item) => $item.id;
var _forTrack1 = ($index, $item) => $item.horarioId;
var _c0 = () => [1, 2, 3, 4];
function DashboardComponent_Conditional_15_For_14_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(0, "svg", 21);
    \u0275\u0275element(1, "path", 26);
    \u0275\u0275elementEnd();
  }
}
function DashboardComponent_Conditional_15_For_14_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
  }
  if (rf & 2) {
    const i_r1 = \u0275\u0275nextContext().$index;
    \u0275\u0275textInterpolate1(" ", i_r1 + 1, " ");
  }
}
function DashboardComponent_Conditional_15_For_14_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 25);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const passo_r2 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275property("routerLink", passo_r2.link);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("", passo_r2.linkLabel, " \u2192");
  }
}
function DashboardComponent_Conditional_15_For_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 19)(1, "div", 20);
    \u0275\u0275template(2, DashboardComponent_Conditional_15_For_14_Conditional_2_Template, 2, 0, ":svg:svg", 21)(3, DashboardComponent_Conditional_15_For_14_Conditional_3_Template, 1, 1);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 22)(5, "div", 23);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "div", 24);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(9, DashboardComponent_Conditional_15_For_14_Conditional_9_Template, 2, 2, "a", 25);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const passo_r2 = ctx.$implicit;
    const i_r1 = ctx.$index;
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275classProp("feito", passo_r2.feito)("bloqueado", !passo_r2.feito && i_r1 > 0 && !ctx_r2.passos()[i_r1 - 1].feito);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(2, passo_r2.feito ? 2 : 3);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(passo_r2.titulo);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(passo_r2.descricao);
    \u0275\u0275advance();
    \u0275\u0275conditional(9, !passo_r2.feito ? 9 : -1);
  }
}
function DashboardComponent_Conditional_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 8)(1, "div", 10)(2, "div", 11);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(3, "svg", 12);
    \u0275\u0275element(4, "path", 13);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(5, "div")(6, "div", 14);
    \u0275\u0275text(7, "Primeiros passos");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "div", 15);
    \u0275\u0275text(9, "Siga a ordem abaixo para configurar sua academia.");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "div", 16);
    \u0275\u0275text(11);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(12, "div", 17);
    \u0275\u0275repeaterCreate(13, DashboardComponent_Conditional_15_For_14_Template, 10, 8, "div", 18, _forTrack0);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(11);
    \u0275\u0275textInterpolate2("", ctx_r2.passosFeitos(), "/", ctx_r2.passos().length, "");
    \u0275\u0275advance(2);
    \u0275\u0275repeater(ctx_r2.passos());
  }
}
function DashboardComponent_Conditional_16_For_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "div", 27);
  }
}
function DashboardComponent_Conditional_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 9);
    \u0275\u0275repeaterCreate(1, DashboardComponent_Conditional_16_For_2_Template, 1, 0, "div", 27, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275repeater(\u0275\u0275pureFunction0(0, _c0));
  }
}
function DashboardComponent_Conditional_17_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 28)(1, "p");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "button", 29);
    \u0275\u0275listener("click", function DashboardComponent_Conditional_17_Template_button_click_3_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.carregar());
    });
    \u0275\u0275text(4, "Tentar novamente");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r2.erro());
  }
}
function DashboardComponent_Conditional_18_Conditional_58_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 57)(1, "div", 66)(2, "span", 67);
    \u0275\u0275text(3, "Recebido");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span", 68);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "div", 66)(7, "span", 67);
    \u0275\u0275text(8, "Pendente");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "span", 69);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(11, "div", 66)(12, "span", 67);
    \u0275\u0275text(13, "Em atraso");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "span", 70);
    \u0275\u0275text(15);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r2.formatarMoeda(ctx_r2.resumoFin().totalRecebidoMes));
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r2.formatarMoeda(ctx_r2.resumoFin().totalPendenteMes));
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r2.formatarMoeda(ctx_r2.resumoFin().totalAtrasado));
  }
}
function DashboardComponent_Conditional_18_Conditional_69_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 62);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(1, "svg", 71);
    \u0275\u0275element(2, "path", 43);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(3, "span");
    \u0275\u0275text(4, "Nenhum pagamento pendente");
    \u0275\u0275elementEnd()();
  }
}
function DashboardComponent_Conditional_18_Conditional_70_For_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 73)(1, "div", 75)(2, "div", 76);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 77);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "span", 78);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "span", 79);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    let tmp_12_0;
    const p_r6 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate((tmp_12_0 = (tmp_12_0 = p_r6.nomeAluno) !== null && tmp_12_0 !== void 0 ? tmp_12_0 : p_r6.descricao) !== null && tmp_12_0 !== void 0 ? tmp_12_0 : "\u2014");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("Venc: ", ctx_r2.formatarData(p_r6.dataVencimento), "");
    \u0275\u0275advance();
    \u0275\u0275classProp("atrasado", p_r6.status === "Atrasado");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(p_r6.status);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r2.formatarMoeda(p_r6.valor));
  }
}
function DashboardComponent_Conditional_18_Conditional_70_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 74);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2("+", ctx_r2.pagamentosFiltrados().length - 5, " pagamentos \xB7 Total: ", ctx_r2.formatarMoeda(ctx_r2.totalFiltrado()), "");
  }
}
function DashboardComponent_Conditional_18_Conditional_70_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 74);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("Total: ", ctx_r2.formatarMoeda(ctx_r2.totalFiltrado()), "");
  }
}
function DashboardComponent_Conditional_18_Conditional_70_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 72);
    \u0275\u0275repeaterCreate(1, DashboardComponent_Conditional_18_Conditional_70_For_2_Template, 10, 6, "div", 73, _forTrack0);
    \u0275\u0275template(3, DashboardComponent_Conditional_18_Conditional_70_Conditional_3_Template, 2, 2, "div", 74)(4, DashboardComponent_Conditional_18_Conditional_70_Conditional_4_Template, 2, 1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r2.pagamentosFiltrados().slice(0, 5));
    \u0275\u0275advance(2);
    \u0275\u0275conditional(3, ctx_r2.pagamentosFiltrados().length > 5 ? 3 : 4);
  }
}
function DashboardComponent_Conditional_18_Conditional_82_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 62);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(1, "svg", 71);
    \u0275\u0275element(2, "rect", 4)(3, "line", 5)(4, "line", 6)(5, "line", 7);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(6, "span");
    \u0275\u0275text(7, "Nenhuma aula agendada para hoje");
    \u0275\u0275elementEnd()();
  }
}
function DashboardComponent_Conditional_18_Conditional_83_For_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 81)(1, "div", 82)(2, "span", 83);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span", 84);
    \u0275\u0275text(5, "\u2013");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "span", 85);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "div", 86)(9, "div", 87);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "div", 88);
    \u0275\u0275text(12);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(13, "div", 89)(14, "span", 90);
    \u0275\u0275text(15);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "span", 91);
    \u0275\u0275text(17);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const aula_r7 = ctx.$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(aula_r7.horaInicio);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(aula_r7.horaFim);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(aula_r7.turma);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2("", aula_r7.modalidade, "", aula_r7.sala ? " \xB7 " + aula_r7.sala : "", "");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(aula_r7.totalAlunos);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("/", aula_r7.capacidadeMaxima, "");
  }
}
function DashboardComponent_Conditional_18_Conditional_83_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 80);
    \u0275\u0275repeaterCreate(1, DashboardComponent_Conditional_18_Conditional_83_For_2_Template, 18, 7, "div", 81, _forTrack1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r2.resumo().proximasAulas);
  }
}
function DashboardComponent_Conditional_18_Conditional_84_For_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 95)(1, "div", 96);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 97);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "span", 98);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const a_r8 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(a_r8.nome.charAt(0).toUpperCase());
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(a_r8.nome);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("dia ", a_r8.diaNascimento, "");
  }
}
function DashboardComponent_Conditional_18_Conditional_84_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 65)(1, "div", 51)(2, "div", 52);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(3, "svg", 53);
    \u0275\u0275element(4, "path", 92);
    \u0275\u0275elementEnd();
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(6, "span", 93);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "div", 94);
    \u0275\u0275repeaterCreate(9, DashboardComponent_Conditional_18_Conditional_84_For_10_Template, 7, 3, "div", 95, _forTrack0);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" Aniversariantes de ", ctx_r2.mesNomes[ctx_r2.mesAtual], " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r2.aniversariantes().length);
    \u0275\u0275advance(2);
    \u0275\u0275repeater(ctx_r2.aniversariantes());
  }
}
function DashboardComponent_Conditional_18_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 9)(1, "div", 30)(2, "div", 31);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(3, "svg", 32);
    \u0275\u0275element(4, "path", 33);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(5, "div", 34)(6, "div", 35);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "div", 36);
    \u0275\u0275text(9, "Alunos ativos");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "a", 37);
    \u0275\u0275text(11, "Ver todos \u2192");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(12, "div", 38)(13, "div", 31);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(14, "svg", 32);
    \u0275\u0275element(15, "rect", 39)(16, "path", 40);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(17, "div", 34)(18, "div", 35);
    \u0275\u0275text(19);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "div", 36);
    \u0275\u0275text(21, "Turmas ativas");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(22, "a", 41);
    \u0275\u0275text(23, "Ver turmas \u2192");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(24, "div", 42)(25, "div", 31);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(26, "svg", 32);
    \u0275\u0275element(27, "path", 43);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(28, "div", 34)(29, "div", 35);
    \u0275\u0275text(30);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(31, "div", 36);
    \u0275\u0275text(32, "Presen\xE7as hoje");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(33, "a", 44);
    \u0275\u0275text(34, "Ver presen\xE7as \u2192");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(35, "div", 45)(36, "div", 31);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(37, "svg", 32);
    \u0275\u0275element(38, "path", 46)(39, "circle", 47)(40, "line", 48);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(41, "div", 34)(42, "div", 35);
    \u0275\u0275text(43);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(44, "div", 36);
    \u0275\u0275text(45, "Sem turma");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(46, "a", 37);
    \u0275\u0275text(47, "Verificar \u2192");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(48, "div", 49)(49, "div", 50)(50, "div", 51)(51, "div", 52);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(52, "svg", 53);
    \u0275\u0275element(53, "line", 54)(54, "path", 55);
    \u0275\u0275elementEnd();
    \u0275\u0275text(55);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(56, "a", 56);
    \u0275\u0275text(57, "Ver detalhes \u2192");
    \u0275\u0275elementEnd()();
    \u0275\u0275template(58, DashboardComponent_Conditional_18_Conditional_58_Template, 16, 3, "div", 57);
    \u0275\u0275elementStart(59, "div", 58)(60, "span", 59);
    \u0275\u0275text(61, "Pagamentos a vencer");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(62, "div", 60)(63, "button", 61);
    \u0275\u0275listener("click", function DashboardComponent_Conditional_18_Template_button_click_63_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.filtroPag.set("hoje"));
    });
    \u0275\u0275text(64, "Hoje");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(65, "button", 61);
    \u0275\u0275listener("click", function DashboardComponent_Conditional_18_Template_button_click_65_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.filtroPag.set("semana"));
    });
    \u0275\u0275text(66, "7 dias");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(67, "button", 61);
    \u0275\u0275listener("click", function DashboardComponent_Conditional_18_Template_button_click_67_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.filtroPag.set("mes"));
    });
    \u0275\u0275text(68, "M\xEAs");
    \u0275\u0275elementEnd()()();
    \u0275\u0275template(69, DashboardComponent_Conditional_18_Conditional_69_Template, 5, 0, "div", 62)(70, DashboardComponent_Conditional_18_Conditional_70_Template, 5, 1);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(71, "div", 63)(72, "div", 51)(73, "div", 52);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(74, "svg", 53);
    \u0275\u0275element(75, "rect", 4)(76, "line", 5)(77, "line", 6)(78, "line", 7);
    \u0275\u0275elementEnd();
    \u0275\u0275text(79, " Aulas de hoje ");
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(80, "a", 64);
    \u0275\u0275text(81, "Ver hor\xE1rios \u2192");
    \u0275\u0275elementEnd()();
    \u0275\u0275template(82, DashboardComponent_Conditional_18_Conditional_82_Template, 8, 0, "div", 62)(83, DashboardComponent_Conditional_18_Conditional_83_Template, 3, 0);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(84, DashboardComponent_Conditional_18_Conditional_84_Template, 11, 2, "div", 65);
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(ctx_r2.resumo().totalAlunos);
    \u0275\u0275advance(12);
    \u0275\u0275textInterpolate(ctx_r2.resumo().turmasAtivas);
    \u0275\u0275advance(11);
    \u0275\u0275textInterpolate(ctx_r2.resumo().presencasHoje);
    \u0275\u0275advance(13);
    \u0275\u0275textInterpolate(ctx_r2.resumo().alunosInadimplentes);
    \u0275\u0275advance(12);
    \u0275\u0275textInterpolate1(" Financeiro \u2014 ", ctx_r2.mesNomes[ctx_r2.mesAtual], " ");
    \u0275\u0275advance(3);
    \u0275\u0275conditional(58, ctx_r2.resumoFin() ? 58 : -1);
    \u0275\u0275advance(5);
    \u0275\u0275classProp("ativo", ctx_r2.filtroPag() === "hoje");
    \u0275\u0275advance(2);
    \u0275\u0275classProp("ativo", ctx_r2.filtroPag() === "semana");
    \u0275\u0275advance(2);
    \u0275\u0275classProp("ativo", ctx_r2.filtroPag() === "mes");
    \u0275\u0275advance(2);
    \u0275\u0275conditional(69, ctx_r2.pagamentosFiltrados().length === 0 ? 69 : 70);
    \u0275\u0275advance(13);
    \u0275\u0275conditional(82, ctx_r2.resumo().proximasAulas.length === 0 ? 82 : 83);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(84, ctx_r2.aniversariantes().length > 0 ? 84 : -1);
  }
}
var DashboardComponent = class _DashboardComponent {
  constructor() {
    this.authService = inject(AuthService);
    this.dashboardService = inject(DashboardService);
    this.alunoService = inject(AlunoService);
    this.modalidadeService = inject(ModalidadeService);
    this.planoService = inject(PlanoService);
    this.financeiroService = inject(FinanceiroService);
    this.resumo = signal(null);
    this.resumoFin = signal(null);
    this.pagamentosMes = signal([]);
    this.aniversariantes = signal([]);
    this.carregando = signal(true);
    this.erro = signal("");
    this.filtroPag = signal("hoje");
    this.temModalidades = signal(false);
    this.temPlanos = signal(false);
    this.hoje = /* @__PURE__ */ new Date();
    this.anoAtual = this.hoje.getFullYear();
    this.mesAtualNum = this.hoje.getMonth() + 1;
    this.pagamentosFiltrados = computed(() => {
      const pags = this.pagamentosMes().filter((p) => p.status === "Pendente" || p.status === "Atrasado");
      const filtro = this.filtroPag();
      const hojeStr = this.hoje.toISOString().split("T")[0];
      if (filtro === "hoje") {
        return pags.filter((p) => p.dataVencimento === hojeStr);
      }
      if (filtro === "semana") {
        const fim = new Date(this.hoje);
        fim.setDate(fim.getDate() + 7);
        const fimStr = fim.toISOString().split("T")[0];
        return pags.filter((p) => p.dataVencimento && p.dataVencimento <= fimStr && p.dataVencimento >= hojeStr);
      }
      return pags;
    });
    this.totalFiltrado = computed(() => this.pagamentosFiltrados().reduce((s, p) => s + p.valor, 0));
    this.passos = computed(() => [
      {
        id: "modalidade",
        titulo: "Crie uma modalidade",
        descricao: "Ex: Jiu-Jitsu, Muay Thai, Boxe. As turmas dependem das modalidades.",
        link: "/app/modalidades",
        linkLabel: "Criar modalidade",
        feito: this.temModalidades()
      },
      {
        id: "plano",
        titulo: "Crie um plano de mensalidade",
        descricao: "Defina os valores e periodicidade dos planos que seus alunos podem contratar.",
        link: "/app/planos",
        linkLabel: "Criar plano",
        feito: this.temPlanos()
      },
      {
        id: "turma",
        titulo: "Monte uma turma",
        descricao: "Agrupe alunos por modalidade, n\xEDvel e hor\xE1rio.",
        link: "/app/turmas/novo",
        linkLabel: "Criar turma",
        feito: (this.resumo()?.turmasAtivas ?? 0) > 0
      },
      {
        id: "aluno",
        titulo: "Cadastre seu primeiro aluno",
        descricao: "Agora que a estrutura est\xE1 pronta, comece a matricular!",
        link: "/app/alunos/novo",
        linkLabel: "Cadastrar aluno",
        feito: (this.resumo()?.totalAlunos ?? 0) > 0
      }
    ]);
    this.setupCompleto = computed(() => this.passos().every((p) => p.feito));
    this.passosFeitos = computed(() => this.passos().filter((p) => p.feito).length);
    this.mesNomes = ["Janeiro", "Fevereiro", "Mar\xE7o", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"];
    this.mesAtual = (/* @__PURE__ */ new Date()).getMonth();
  }
  get primeiroNome() {
    return this.authService.currentUser()?.nome?.split(" ")[0] ?? "usu\xE1rio";
  }
  ngOnInit() {
    this.carregar();
    this.alunoService.getAniversariantes().subscribe({
      next: (res) => this.aniversariantes.set(res.dados ?? [])
    });
    this.modalidadeService.getAll().subscribe({
      next: (res) => this.temModalidades.set((res.dados?.length ?? 0) > 0)
    });
    this.planoService.listar().subscribe({
      next: (res) => this.temPlanos.set((res.dados?.length ?? 0) > 0)
    });
    this.financeiroService.getResumo(this.anoAtual, this.mesAtualNum).subscribe({
      next: (res) => this.resumoFin.set(res.dados ?? null)
    });
    this.financeiroService.listar({ ano: this.anoAtual, mes: this.mesAtualNum, pageSize: 200 }).subscribe({
      next: (res) => this.pagamentosMes.set(res.dados ?? [])
    });
  }
  carregar() {
    this.carregando.set(true);
    this.erro.set("");
    this.dashboardService.getResumo().subscribe({
      next: (res) => {
        this.resumo.set(res.dados ?? null);
        this.carregando.set(false);
      },
      error: () => {
        this.erro.set("Erro ao carregar dados.");
        this.carregando.set(false);
      }
    });
  }
  formatarMoeda(v) {
    return v.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });
  }
  formatarData(d) {
    if (!d)
      return "\u2014";
    const [y, m, day] = d.split("-");
    return `${day}/${m}/${y}`;
  }
  static {
    this.\u0275fac = function DashboardComponent_Factory(t) {
      return new (t || _DashboardComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _DashboardComponent, selectors: [["app-dashboard"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 19, vars: 9, consts: [[1, "dash-page"], [1, "dash-header"], [1, "dash-header-date"], ["width", "14", "height", "14", "fill", "none", "stroke", "currentColor", "stroke-width", "2", "viewBox", "0 0 24 24"], ["x", "3", "y", "4", "width", "18", "height", "18", "rx", "2"], ["x1", "16", "y1", "2", "x2", "16", "y2", "6"], ["x1", "8", "y1", "2", "x2", "8", "y2", "6"], ["x1", "3", "y1", "10", "x2", "21", "y2", "10"], [1, "onboarding-card"], [1, "metrics-grid"], [1, "onboarding-header"], [1, "onboarding-icon"], ["width", "18", "height", "18", "fill", "none", "stroke", "currentColor", "stroke-width", "2", "viewBox", "0 0 24 24"], ["d", "M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"], [1, "onboarding-titulo"], [1, "onboarding-subtitulo"], [1, "onboarding-progresso"], [1, "onboarding-steps"], [1, "onboarding-step", 3, "feito", "bloqueado"], [1, "onboarding-step"], [1, "step-numero"], ["width", "14", "height", "14", "fill", "none", "stroke", "currentColor", "stroke-width", "2.5", "viewBox", "0 0 24 24"], [1, "step-corpo"], [1, "step-titulo"], [1, "step-descricao"], [1, "step-btn", 3, "routerLink"], ["d", "M5 13l4 4L19 7"], [1, "metric-card", "skeleton-pulse", 2, "height", "110px"], [1, "error-card"], [1, "btn-secondary", 3, "click"], [1, "metric-card", "mc-indigo"], [1, "mc-icon"], ["width", "20", "height", "20", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "1.75"], ["d", "M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z"], [1, "mc-body"], [1, "mc-value"], [1, "mc-label"], ["routerLink", "/app/alunos", 1, "mc-link"], [1, "metric-card", "mc-emerald"], ["x", "2", "y", "7", "width", "20", "height", "14", "rx", "2"], ["d", "M16 3H8a2 2 0 0 0-2 2v2h12V5a2 2 0 0 0-2-2z"], ["routerLink", "/app/turmas", 1, "mc-link"], [1, "metric-card", "mc-amber"], ["d", "M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"], ["routerLink", "/app/presencas", 1, "mc-link"], [1, "metric-card", "mc-rose"], ["d", "M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"], ["cx", "9", "cy", "7", "r", "4"], ["x1", "23", "y1", "11", "x2", "17", "y2", "11"], [1, "dash-row"], [1, "dash-card", "fin-card"], [1, "dash-card-header"], [2, "display", "flex", "align-items", "center", "gap", "8px"], ["width", "15", "height", "15", "fill", "none", "stroke", "currentColor", "stroke-width", "2", "viewBox", "0 0 24 24"], ["x1", "12", "y1", "1", "x2", "12", "y2", "23"], ["d", "M17 5H9.5a3.5 3.5 0 000 7h5a3.5 3.5 0 010 7H6"], ["routerLink", "/app/financeiro", 1, "dash-link"], [1, "fin-resumo"], [1, "fin-previsao-header"], [1, "fin-previsao-titulo"], [1, "filtro-tabs"], [1, "filtro-tab", 3, "click"], [1, "fin-empty"], [1, "dash-card", "aulas-card"], ["routerLink", "/app/horarios", 1, "dash-link"], [1, "dash-card", 2, "margin-top", "16px"], [1, "fin-item"], [1, "fin-label"], [1, "fin-valor", "fin-ok"], [1, "fin-valor", "fin-warn"], [1, "fin-valor", "fin-danger"], ["width", "24", "height", "24", "fill", "none", "stroke", "currentColor", "stroke-width", "1.5", "viewBox", "0 0 24 24", 2, "color", "var(--fg-3)"], [1, "fin-lista"], [1, "fin-pag-row"], [1, "fin-mais"], [2, "flex", "1", "min-width", "0"], [1, "fin-pag-nome"], [1, "fin-pag-data"], [1, "fin-pag-status"], [1, "fin-pag-valor"], [1, "aulas-lista"], [1, "aula-card"], [1, "aula-hora"], [1, "aula-inicio"], [1, "aula-sep"], [1, "aula-fim"], [1, "aula-info"], [1, "aula-turma"], [1, "aula-meta"], [1, "aula-alunos"], [1, "aula-num"], [1, "aula-cap"], ["d", "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 14c-3.31 0-6-2.69-6-6s2.69-6 6-6 6 2.69 6 6-2.69 6-6 6z"], [1, "dash-badge"], [1, "aniversariantes-lista"], [1, "aniversariante-row"], [1, "aniversariante-avatar"], [1, "aniversariante-nome"], [1, "aniversariante-data"]], template: function DashboardComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div")(3, "h1");
        \u0275\u0275text(4);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(5, "p");
        \u0275\u0275text(6, "Aqui est\xE1 o resumo da sua academia hoje.");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(7, "div", 2);
        \u0275\u0275namespaceSVG();
        \u0275\u0275elementStart(8, "svg", 3);
        \u0275\u0275element(9, "rect", 4)(10, "line", 5)(11, "line", 6)(12, "line", 7);
        \u0275\u0275elementEnd();
        \u0275\u0275text(13);
        \u0275\u0275pipe(14, "date");
        \u0275\u0275elementEnd()();
        \u0275\u0275template(15, DashboardComponent_Conditional_15_Template, 15, 2, "div", 8)(16, DashboardComponent_Conditional_16_Template, 3, 1, "div", 9)(17, DashboardComponent_Conditional_17_Template, 5, 1)(18, DashboardComponent_Conditional_18_Template, 85, 15);
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        \u0275\u0275advance(4);
        \u0275\u0275textInterpolate1("Ol\xE1, ", ctx.primeiroNome, " \u{1F44B}");
        \u0275\u0275advance(9);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind4(14, 4, ctx.hoje, "EEEE, d 'de' MMMM", "", "pt-BR"), " ");
        \u0275\u0275advance(2);
        \u0275\u0275conditional(15, !ctx.carregando() && !ctx.setupCompleto() ? 15 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(16, ctx.carregando() ? 16 : ctx.erro() ? 17 : ctx.resumo() ? 18 : -1);
      }
    }, dependencies: [CommonModule, DatePipe, RouterLink], styles: ['\n\n[_nghost-%COMP%] {\n  display: block;\n  --fg: var(--app-text-1);\n  --fg-2: var(--app-text-2);\n  --fg-3: var(--app-text-3);\n  --line: var(--app-border);\n  font-family:\n    "Inter",\n    system-ui,\n    -apple-system,\n    sans-serif;\n  -webkit-font-smoothing: antialiased;\n  color: var(--fg);\n}\n.dash-page[_ngcontent-%COMP%] {\n  max-width: 1100px;\n  margin: 0 auto;\n}\n.dash-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  justify-content: space-between;\n  margin-bottom: 24px;\n  flex-wrap: wrap;\n  gap: 10px;\n}\n.dash-header[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  font-size: 22px;\n  font-weight: 700;\n  letter-spacing: -0.02em;\n  color: var(--fg);\n}\n.dash-header[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 13px;\n  color: var(--fg-3);\n  margin-top: 3px;\n}\n.dash-header-date[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  font-size: 12px;\n  color: var(--fg-3);\n  font-weight: 500;\n  background: var(--app-surface);\n  border: 1px solid var(--line);\n  padding: 6px 12px;\n  border-radius: 8px;\n  white-space: nowrap;\n}\n.metrics-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(4, 1fr);\n  gap: 14px;\n  margin-bottom: 20px;\n}\n@media (max-width: 1024px) {\n  .metrics-grid[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(2, 1fr);\n  }\n}\n@media (max-width: 600px) {\n  .metrics-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n}\n.metric-card[_ngcontent-%COMP%] {\n  background: var(--app-surface);\n  border: 1px solid var(--line);\n  border-radius: 14px;\n  padding: 18px 20px;\n  display: flex;\n  align-items: center;\n  gap: 14px;\n  position: relative;\n  overflow: hidden;\n  transition: box-shadow 0.2s;\n}\n.metric-card[_ngcontent-%COMP%]::before {\n  content: "";\n  position: absolute;\n  left: 0;\n  top: 0;\n  bottom: 0;\n  width: 4px;\n  border-radius: 14px 0 0 14px;\n}\n.metric-card[_ngcontent-%COMP%]:hover {\n  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.06);\n}\n.mc-indigo[_ngcontent-%COMP%]::before {\n  background: #6366f1;\n}\n.mc-emerald[_ngcontent-%COMP%]::before {\n  background: #10b981;\n}\n.mc-amber[_ngcontent-%COMP%]::before {\n  background: #f59e0b;\n}\n.mc-rose[_ngcontent-%COMP%]::before {\n  background: #f43f5e;\n}\n.mc-icon[_ngcontent-%COMP%] {\n  width: 44px;\n  height: 44px;\n  border-radius: 12px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-shrink: 0;\n}\n.mc-indigo[_ngcontent-%COMP%]   .mc-icon[_ngcontent-%COMP%] {\n  background: rgba(99, 102, 241, 0.12);\n  color: #6366f1;\n}\n.mc-emerald[_ngcontent-%COMP%]   .mc-icon[_ngcontent-%COMP%] {\n  background: rgba(16, 185, 129, 0.12);\n  color: #10b981;\n}\n.mc-amber[_ngcontent-%COMP%]   .mc-icon[_ngcontent-%COMP%] {\n  background: rgba(245, 158, 11, 0.12);\n  color: #f59e0b;\n}\n.mc-rose[_ngcontent-%COMP%]   .mc-icon[_ngcontent-%COMP%] {\n  background: rgba(244, 63, 94, 0.12);\n  color: #f43f5e;\n}\n.mc-body[_ngcontent-%COMP%] {\n  flex: 1;\n  min-width: 0;\n}\n.mc-value[_ngcontent-%COMP%] {\n  font-size: 28px;\n  font-weight: 700;\n  letter-spacing: -0.03em;\n  color: var(--fg);\n  line-height: 1;\n}\n.mc-label[_ngcontent-%COMP%] {\n  font-size: 11px;\n  text-transform: uppercase;\n  letter-spacing: 0.06em;\n  color: var(--fg-3);\n  margin-top: 4px;\n  font-weight: 500;\n}\n.mc-link[_ngcontent-%COMP%] {\n  font-size: 11px;\n  font-weight: 600;\n  color: var(--fg-3);\n  text-decoration: none;\n  white-space: nowrap;\n  align-self: flex-end;\n  transition: color 0.15s;\n}\n.mc-link[_ngcontent-%COMP%]:hover {\n  color: var(--fg);\n}\n.dash-row[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 16px;\n  margin-bottom: 16px;\n}\n@media (max-width: 860px) {\n  .dash-row[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n}\n.dash-card[_ngcontent-%COMP%] {\n  background: var(--app-surface);\n  border: 1px solid var(--line);\n  border-radius: 14px;\n  overflow: hidden;\n}\n.dash-card-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 14px 18px;\n  border-bottom: 1px solid var(--line);\n  font-size: 13px;\n  font-weight: 600;\n  color: var(--fg);\n  gap: 10px;\n}\n.dash-link[_ngcontent-%COMP%] {\n  font-size: 12px;\n  font-weight: 500;\n  color: var(--fg-3);\n  text-decoration: none;\n  white-space: nowrap;\n}\n.dash-link[_ngcontent-%COMP%]:hover {\n  color: var(--fg);\n}\n.dash-badge[_ngcontent-%COMP%] {\n  font-size: 11px;\n  font-weight: 700;\n  padding: 2px 8px;\n  border-radius: 99px;\n  background: rgba(99, 102, 241, 0.1);\n  color: #6366f1;\n}\n.fin-card[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n}\n.fin-resumo[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  padding: 14px 18px;\n  gap: 12px;\n  border-bottom: 1px solid var(--line);\n}\n.fin-item[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 3px;\n}\n.fin-label[_ngcontent-%COMP%] {\n  font-size: 10px;\n  text-transform: uppercase;\n  letter-spacing: 0.06em;\n  color: var(--fg-3);\n  font-weight: 500;\n}\n.fin-valor[_ngcontent-%COMP%] {\n  font-size: 14px;\n  font-weight: 700;\n}\n.fin-ok[_ngcontent-%COMP%] {\n  color: #16a34a;\n}\n.fin-warn[_ngcontent-%COMP%] {\n  color: #d97706;\n}\n.fin-danger[_ngcontent-%COMP%] {\n  color: #dc2626;\n}\n.fin-previsao-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 12px 18px 8px;\n}\n.fin-previsao-titulo[_ngcontent-%COMP%] {\n  font-size: 12px;\n  font-weight: 600;\n  color: var(--fg-2);\n  text-transform: uppercase;\n  letter-spacing: 0.05em;\n}\n.filtro-tabs[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 4px;\n}\n.filtro-tab[_ngcontent-%COMP%] {\n  font-size: 11px;\n  font-weight: 600;\n  padding: 3px 10px;\n  border-radius: 6px;\n  border: 1px solid var(--line);\n  background: none;\n  cursor: pointer;\n  color: var(--fg-3);\n  transition: all 0.15s;\n}\n.filtro-tab.ativo[_ngcontent-%COMP%] {\n  background: rgba(99, 102, 241, 0.1);\n  border-color: rgba(99, 102, 241, 0.3);\n  color: #6366f1;\n}\n.filtro-tab[_ngcontent-%COMP%]:hover:not(.ativo) {\n  background: var(--app-bg);\n}\n.fin-empty[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 8px;\n  padding: 24px;\n  color: var(--fg-3);\n  font-size: 13px;\n}\n.fin-lista[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  overflow-y: auto;\n  max-height: 240px;\n}\n.fin-pag-row[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  padding: 10px 18px;\n  border-bottom: 1px solid var(--line);\n  flex-wrap: nowrap;\n}\n.fin-pag-row[_ngcontent-%COMP%]:last-child {\n  border-bottom: none;\n}\n.fin-pag-nome[_ngcontent-%COMP%] {\n  font-size: 13px;\n  font-weight: 600;\n  color: var(--fg);\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.fin-pag-data[_ngcontent-%COMP%] {\n  font-size: 11px;\n  color: var(--fg-3);\n  margin-top: 1px;\n}\n.fin-pag-status[_ngcontent-%COMP%] {\n  font-size: 10px;\n  font-weight: 700;\n  padding: 2px 7px;\n  border-radius: 99px;\n  white-space: nowrap;\n  background: rgba(245, 158, 11, 0.12);\n  color: #d97706;\n}\n.fin-pag-status.atrasado[_ngcontent-%COMP%] {\n  background: rgba(239, 68, 68, 0.12);\n  color: #dc2626;\n}\n.fin-pag-valor[_ngcontent-%COMP%] {\n  font-size: 13px;\n  font-weight: 700;\n  color: var(--fg);\n  white-space: nowrap;\n  flex-shrink: 0;\n}\n.fin-mais[_ngcontent-%COMP%] {\n  padding: 8px 18px;\n  font-size: 11px;\n  color: var(--fg-3);\n  border-top: 1px solid var(--line);\n  font-weight: 500;\n}\n.aulas-card[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n}\n.aulas-lista[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  padding: 8px 0;\n}\n.aula-card[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  padding: 12px 18px;\n  border-bottom: 1px solid var(--line);\n  transition: background 0.15s;\n}\n.aula-card[_ngcontent-%COMP%]:last-child {\n  border-bottom: none;\n}\n.aula-card[_ngcontent-%COMP%]:hover {\n  background: rgba(99, 102, 241, 0.03);\n}\n.aula-hora[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  width: 52px;\n  flex-shrink: 0;\n}\n.aula-inicio[_ngcontent-%COMP%] {\n  font-size: 14px;\n  font-weight: 700;\n  color: #6366f1;\n}\n.aula-sep[_ngcontent-%COMP%] {\n  font-size: 10px;\n  color: var(--fg-3);\n  line-height: 1;\n}\n.aula-fim[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: var(--fg-3);\n}\n.aula-info[_ngcontent-%COMP%] {\n  flex: 1;\n  min-width: 0;\n}\n.aula-turma[_ngcontent-%COMP%] {\n  font-size: 13px;\n  font-weight: 600;\n  color: var(--fg);\n}\n.aula-meta[_ngcontent-%COMP%] {\n  font-size: 11px;\n  color: var(--fg-3);\n  margin-top: 2px;\n}\n.aula-alunos[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: baseline;\n  gap: 1px;\n  flex-shrink: 0;\n}\n.aula-num[_ngcontent-%COMP%] {\n  font-size: 16px;\n  font-weight: 700;\n  color: var(--fg);\n}\n.aula-cap[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: var(--fg-3);\n}\n.aniversariantes-lista[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  padding: 4px 0;\n}\n.aniversariante-row[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  padding: 10px 16px;\n  border-bottom: 1px solid var(--line);\n}\n.aniversariante-row[_ngcontent-%COMP%]:last-child {\n  border-bottom: none;\n}\n.aniversariante-avatar[_ngcontent-%COMP%] {\n  width: 32px;\n  height: 32px;\n  border-radius: 50%;\n  background: rgba(99, 102, 241, 0.15);\n  color: #6366f1;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 13px;\n  font-weight: 700;\n  flex-shrink: 0;\n}\n.aniversariante-nome[_ngcontent-%COMP%] {\n  flex: 1;\n  font-size: 13px;\n  font-weight: 500;\n  color: var(--fg);\n}\n.aniversariante-data[_ngcontent-%COMP%] {\n  font-size: 12px;\n  font-weight: 600;\n  color: #6366f1;\n  background: rgba(99, 102, 241, 0.1);\n  padding: 2px 8px;\n  border-radius: 99px;\n}\n.onboarding-card[_ngcontent-%COMP%] {\n  background: var(--app-surface);\n  border: 1px solid var(--line);\n  border-radius: 14px;\n  margin-bottom: 20px;\n  overflow: hidden;\n}\n.onboarding-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 14px;\n  padding: 16px 20px;\n  border-bottom: 1px solid var(--line);\n}\n.onboarding-icon[_ngcontent-%COMP%] {\n  width: 36px;\n  height: 36px;\n  border-radius: 10px;\n  background: rgba(99, 102, 241, 0.12);\n  border: 1px solid rgba(99, 102, 241, 0.25);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: #6366f1;\n  flex-shrink: 0;\n}\n.onboarding-titulo[_ngcontent-%COMP%] {\n  font-size: 14px;\n  font-weight: 600;\n  color: var(--fg);\n}\n.onboarding-subtitulo[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: var(--fg-3);\n  margin-top: 2px;\n}\n.onboarding-progresso[_ngcontent-%COMP%] {\n  margin-left: auto;\n  font-size: 13px;\n  font-weight: 700;\n  color: #6366f1;\n  background: rgba(99, 102, 241, 0.1);\n  border: 1px solid rgba(99, 102, 241, 0.2);\n  padding: 4px 12px;\n  border-radius: 99px;\n  white-space: nowrap;\n}\n.onboarding-steps[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n}\n.onboarding-step[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 14px;\n  padding: 13px 20px;\n  border-bottom: 1px solid var(--line);\n  transition: background 0.15s;\n}\n.onboarding-step[_ngcontent-%COMP%]:last-child {\n  border-bottom: none;\n}\n.onboarding-step[_ngcontent-%COMP%]:not(.feito):not(.bloqueado):hover {\n  background: rgba(255, 255, 255, 0.02);\n}\n.step-numero[_ngcontent-%COMP%] {\n  width: 26px;\n  height: 26px;\n  border-radius: 50%;\n  background: rgba(99, 102, 241, 0.12);\n  border: 1.5px solid rgba(99, 102, 241, 0.3);\n  color: #6366f1;\n  font-size: 12px;\n  font-weight: 700;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-shrink: 0;\n}\n.onboarding-step.feito[_ngcontent-%COMP%]   .step-numero[_ngcontent-%COMP%] {\n  background: rgba(34, 197, 94, 0.12);\n  border-color: rgba(34, 197, 94, 0.3);\n  color: #16a34a;\n}\n.onboarding-step.bloqueado[_ngcontent-%COMP%] {\n  opacity: 0.45;\n}\n.step-corpo[_ngcontent-%COMP%] {\n  flex: 1;\n  min-width: 0;\n}\n.step-titulo[_ngcontent-%COMP%] {\n  font-size: 13px;\n  font-weight: 600;\n  color: var(--fg);\n}\n.onboarding-step.feito[_ngcontent-%COMP%]   .step-titulo[_ngcontent-%COMP%] {\n  text-decoration: line-through;\n  color: var(--fg-3);\n}\n.step-descricao[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: var(--fg-3);\n  margin-top: 2px;\n}\n.step-btn[_ngcontent-%COMP%] {\n  flex-shrink: 0;\n  font-size: 12px;\n  font-weight: 600;\n  color: #6366f1;\n  background: rgba(99, 102, 241, 0.1);\n  border: 1px solid rgba(99, 102, 241, 0.25);\n  padding: 6px 14px;\n  border-radius: 8px;\n  text-decoration: none;\n  white-space: nowrap;\n  transition: all 0.15s;\n}\n.step-btn[_ngcontent-%COMP%]:hover {\n  background: rgba(99, 102, 241, 0.18);\n  border-color: rgba(99, 102, 241, 0.4);\n}\n.onboarding-step.bloqueado[_ngcontent-%COMP%]   .step-btn[_ngcontent-%COMP%] {\n  pointer-events: none;\n}\n@media (max-width: 600px) {\n  .step-descricao[_ngcontent-%COMP%] {\n    display: none;\n  }\n  .step-btn[_ngcontent-%COMP%] {\n    font-size: 11px;\n    padding: 5px 10px;\n  }\n}\n/*# sourceMappingURL=dashboard.component.css.map */'] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(DashboardComponent, { className: "DashboardComponent" });
})();
export {
  DashboardComponent
};
//# sourceMappingURL=chunk-C4VIZBCK.js.map
