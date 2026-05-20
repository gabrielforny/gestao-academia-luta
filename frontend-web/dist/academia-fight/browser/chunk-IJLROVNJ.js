import {
  GraduacaoService
} from "./chunk-PF2XG5IY.js";
import {
  TurmaService
} from "./chunk-MTMOQ3LO.js";
import {
  ModalidadeService
} from "./chunk-UVWEWDTF.js";
import "./chunk-RZVP4UO7.js";
import {
  ActivatedRoute,
  Router,
  RouterLink
} from "./chunk-QYA4BMW3.js";
import {
  CommonModule,
  forkJoin,
  inject,
  signal,
  ɵsetClassDebugInfo,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵclassProp,
  ɵɵconditional,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnamespaceHTML,
  ɵɵnamespaceSVG,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵpureFunction0,
  ɵɵpureFunction1,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIdentity,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵstyleProp,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-YRJQ7ZE3.js";
import "./chunk-7G5TR5RR.js";

// src/app/features/modalidades/pages/detalhe/modalidade-detalhe.component.ts
var _forTrack0 = ($index, $item) => $item.id;
var _c0 = () => [1, 2, 3];
var _c1 = (a0) => ["/app/modalidades", a0, "editar"];
var _c2 = (a0) => ["/app/turmas", a0];
function ModalidadeDetalheComponent_Conditional_0_For_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "div", 3);
  }
}
function ModalidadeDetalheComponent_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 0);
    \u0275\u0275element(1, "div", 1);
    \u0275\u0275elementStart(2, "div", 2);
    \u0275\u0275repeaterCreate(3, ModalidadeDetalheComponent_Conditional_0_For_4_Template, 1, 0, "div", 3, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(3);
    \u0275\u0275repeater(\u0275\u0275pureFunction0(0, _c0));
  }
}
function ModalidadeDetalheComponent_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 0)(1, "div", 4)(2, "p");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "button", 5);
    \u0275\u0275listener("click", function ModalidadeDetalheComponent_Conditional_1_Template_button_click_4_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.voltar());
    });
    \u0275\u0275text(5, "\u2190 Voltar");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r1.erro() || "Modalidade n\xE3o encontrada.");
  }
}
function ModalidadeDetalheComponent_Conditional_2_Conditional_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 18);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.modalidade().descricao);
  }
}
function ModalidadeDetalheComponent_Conditional_2_Conditional_34_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 25)(1, "p", 28);
    \u0275\u0275text(2, "Nenhuma faixa cadastrada para esta modalidade.");
    \u0275\u0275elementEnd()();
  }
}
function ModalidadeDetalheComponent_Conditional_2_Conditional_35_For_2_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 34);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const f_r4 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(f_r4.descricao);
  }
}
function ModalidadeDetalheComponent_Conditional_2_Conditional_35_For_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 30);
    \u0275\u0275element(1, "div", 31);
    \u0275\u0275elementStart(2, "div", 32)(3, "div", 33);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275template(5, ModalidadeDetalheComponent_Conditional_2_Conditional_35_For_2_Conditional_5_Template, 2, 1, "div", 34);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "span", 35);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    let tmp_15_0;
    const f_r4 = ctx.$implicit;
    const i_r5 = ctx.$index;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275styleProp("background", ctx_r1.corFaixa(f_r4.cor));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(f_r4.nome);
    \u0275\u0275advance();
    \u0275\u0275conditional(5, f_r4.descricao ? 5 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("#", (tmp_15_0 = f_r4.ordem) !== null && tmp_15_0 !== void 0 ? tmp_15_0 : i_r5 + 1, "");
  }
}
function ModalidadeDetalheComponent_Conditional_2_Conditional_35_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 29);
    \u0275\u0275repeaterCreate(1, ModalidadeDetalheComponent_Conditional_2_Conditional_35_For_2_Template, 8, 5, "div", 30, _forTrack0);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r1.faixas());
  }
}
function ModalidadeDetalheComponent_Conditional_2_Conditional_42_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 25)(1, "p", 28);
    \u0275\u0275text(2, "Nenhuma turma vinculada a esta modalidade.");
    \u0275\u0275elementEnd()();
  }
}
function ModalidadeDetalheComponent_Conditional_2_Conditional_43_For_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 38);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td", 39);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "td", 39);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "td", 39);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "td")(10, "span", 40);
    \u0275\u0275text(11);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(12, "td", 41)(13, "a", 42);
    \u0275\u0275text(14, "Ver turma");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    let tmp_14_0;
    const t_r6 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(t_r6.nome);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(t_r6.professorNome);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate((tmp_14_0 = t_r6.nivel) !== null && tmp_14_0 !== void 0 ? tmp_14_0 : "\u2014");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(t_r6.capacidadeMaxima);
    \u0275\u0275advance(2);
    \u0275\u0275classProp("badge-success", t_r6.ativo)("badge-neutral", !t_r6.ativo);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", t_r6.ativo ? "Ativa" : "Inativa", " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(10, _c2, t_r6.id));
  }
}
function ModalidadeDetalheComponent_Conditional_2_Conditional_43_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 36)(1, "table", 37)(2, "thead")(3, "tr")(4, "th");
    \u0275\u0275text(5, "Turma");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "th");
    \u0275\u0275text(7, "Professor");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "th");
    \u0275\u0275text(9, "N\xEDvel");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "th");
    \u0275\u0275text(11, "Capacidade");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "th");
    \u0275\u0275text(13, "Status");
    \u0275\u0275elementEnd();
    \u0275\u0275element(14, "th");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(15, "tbody");
    \u0275\u0275repeaterCreate(16, ModalidadeDetalheComponent_Conditional_2_Conditional_43_For_17_Template, 15, 12, "tr", null, _forTrack0);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(16);
    \u0275\u0275repeater(ctx_r1.turmas());
  }
}
function ModalidadeDetalheComponent_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 0)(1, "div", 6)(2, "button", 7);
    \u0275\u0275listener("click", function ModalidadeDetalheComponent_Conditional_2_Template_button_click_2_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.voltar());
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(3, "svg", 8);
    \u0275\u0275element(4, "polyline", 9);
    \u0275\u0275elementEnd();
    \u0275\u0275text(5, " Voltar para Modalidades ");
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(6, "a", 10);
    \u0275\u0275text(7, "Editar");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "div", 11)(9, "div", 12);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(10, "svg", 13);
    \u0275\u0275element(11, "path", 14);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(12, "div")(13, "div", 15)(14, "h1", 16);
    \u0275\u0275text(15);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "span", 17);
    \u0275\u0275text(17);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(18, ModalidadeDetalheComponent_Conditional_2_Conditional_18_Template, 2, 1, "p", 18);
    \u0275\u0275elementStart(19, "div", 19)(20, "span", 20)(21, "strong");
    \u0275\u0275text(22);
    \u0275\u0275elementEnd();
    \u0275\u0275text(23, " faixas");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "span", 20)(25, "strong");
    \u0275\u0275text(26);
    \u0275\u0275elementEnd();
    \u0275\u0275text(27, " turma(s)");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(28, "div", 21)(29, "div", 22)(30, "h3", 23);
    \u0275\u0275text(31, "Sistema de Faixas");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(32, "a", 24);
    \u0275\u0275text(33, "Gerenciar faixas");
    \u0275\u0275elementEnd()();
    \u0275\u0275template(34, ModalidadeDetalheComponent_Conditional_2_Conditional_34_Template, 3, 0, "div", 25)(35, ModalidadeDetalheComponent_Conditional_2_Conditional_35_Template, 3, 0);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(36, "div", 26)(37, "div", 22)(38, "h3", 23);
    \u0275\u0275text(39, "Turmas desta modalidade");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(40, "a", 27);
    \u0275\u0275text(41, "+ Nova turma");
    \u0275\u0275elementEnd()();
    \u0275\u0275template(42, ModalidadeDetalheComponent_Conditional_2_Conditional_42_Template, 3, 0, "div", 25)(43, ModalidadeDetalheComponent_Conditional_2_Conditional_43_Template, 18, 0);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(6);
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(10, _c1, ctx_r1.modalidade().id));
    \u0275\u0275advance(9);
    \u0275\u0275textInterpolate(ctx_r1.modalidade().nome);
    \u0275\u0275advance();
    \u0275\u0275classProp("ativo", ctx_r1.modalidade().ativo);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.modalidade().ativo ? "Ativa" : "Arquivada");
    \u0275\u0275advance();
    \u0275\u0275conditional(18, ctx_r1.modalidade().descricao ? 18 : -1);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r1.faixas().length);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r1.turmas().length);
    \u0275\u0275advance(8);
    \u0275\u0275conditional(34, ctx_r1.faixas().length === 0 ? 34 : 35);
    \u0275\u0275advance(8);
    \u0275\u0275conditional(42, ctx_r1.turmas().length === 0 ? 42 : 43);
  }
}
var ModalidadeDetalheComponent = class _ModalidadeDetalheComponent {
  constructor() {
    this.modalidadeService = inject(ModalidadeService);
    this.graduacaoService = inject(GraduacaoService);
    this.turmaService = inject(TurmaService);
    this.route = inject(ActivatedRoute);
    this.router = inject(Router);
    this.modalidade = signal(null);
    this.faixas = signal([]);
    this.turmas = signal([]);
    this.carregando = signal(true);
    this.erro = signal("");
  }
  ngOnInit() {
    const id = this.route.snapshot.paramMap.get("id");
    forkJoin({
      modalidade: this.modalidadeService.getById(id),
      faixas: this.graduacaoService.getFaixasByModalidade(id),
      turmas: this.turmaService.getAll({ modalidadeId: id })
    }).subscribe({
      next: (res) => {
        this.modalidade.set(res.modalidade.dados ?? null);
        this.faixas.set(res.faixas.dados ?? []);
        this.turmas.set(res.turmas.dados ?? []);
        this.carregando.set(false);
      },
      error: () => {
        this.erro.set("Erro ao carregar modalidade.");
        this.carregando.set(false);
      }
    });
  }
  corFaixa(cor) {
    return cor ?? "#94a3b8";
  }
  voltar() {
    this.router.navigate(["/app/modalidades"]);
  }
  static {
    this.\u0275fac = function ModalidadeDetalheComponent_Factory(t) {
      return new (t || _ModalidadeDetalheComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ModalidadeDetalheComponent, selectors: [["app-modalidade-detalhe"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 3, vars: 1, consts: [[1, "page-container"], [1, "skeleton-header"], [1, "skeleton-list"], [1, "skeleton-row"], [1, "error-card"], [1, "btn-secondary", 2, "margin-top", "12px", 3, "click"], [2, "display", "flex", "align-items", "center", "justify-content", "space-between", "margin-bottom", "20px", "flex-wrap", "wrap", "gap", "10px"], [1, "btn-ghost-back", 3, "click"], ["width", "16", "height", "16", "fill", "none", "stroke", "currentColor", "stroke-width", "2", "viewBox", "0 0 24 24"], ["points", "15 18 9 12 15 6"], [1, "btn-secondary", 3, "routerLink"], [1, "mod-header"], [1, "mod-icon"], ["width", "28", "height", "28", "fill", "none", "stroke", "currentColor", "stroke-width", "1.75", "viewBox", "0 0 24 24"], ["d", "M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"], [2, "display", "flex", "align-items", "center", "gap", "10px", "flex-wrap", "wrap"], [2, "font-size", "1.5rem", "font-weight", "700", "margin", "0", "color", "var(--app-text-1)"], [1, "status-badge"], [2, "font-size", "14px", "color", "var(--app-text-2)", "margin", "6px 0 0"], [2, "display", "flex", "gap", "20px", "margin-top", "10px", "flex-wrap", "wrap"], [1, "stat-chip"], [1, "secao-card", 2, "margin-top", "20px"], [2, "display", "flex", "align-items", "center", "justify-content", "space-between", "margin-bottom", "16px", "flex-wrap", "wrap", "gap", "8px"], [1, "secao-titulo", 2, "margin", "0"], ["routerLink", "/app/graduacao/faixas", 1, "btn-secondary", 2, "font-size", "12px", "padding", "5px 12px"], [1, "empty-state", 2, "padding", "20px 0"], [1, "secao-card", 2, "margin-top", "16px"], ["routerLink", "/app/turmas/nova", 1, "btn-secondary", 2, "font-size", "12px", "padding", "5px 12px"], [2, "margin", "0", "font-size", "13px", "color", "var(--app-text-3)"], [1, "faixas-lista"], [1, "faixa-item"], [1, "faixa-dot"], [2, "flex", "1"], [2, "font-size", "14px", "font-weight", "600", "color", "var(--app-text-1)"], [2, "font-size", "12px", "color", "var(--app-text-3)"], [1, "ordem-badge"], [1, "table-wrapper"], [1, "data-table"], [1, "font-medium"], [2, "font-size", "13px", "color", "var(--app-text-2)"], [1, "badge"], [2, "text-align", "right"], [1, "btn-secondary", 2, "font-size", "12px", "padding", "4px 10px", 3, "routerLink"]], template: function ModalidadeDetalheComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275template(0, ModalidadeDetalheComponent_Conditional_0_Template, 5, 1, "div", 0)(1, ModalidadeDetalheComponent_Conditional_1_Template, 6, 1)(2, ModalidadeDetalheComponent_Conditional_2_Template, 44, 12);
      }
      if (rf & 2) {
        \u0275\u0275conditional(0, ctx.carregando() ? 0 : ctx.erro() || !ctx.modalidade() ? 1 : 2);
      }
    }, dependencies: [CommonModule, RouterLink], styles: [".btn-ghost-back[_ngcontent-%COMP%] { display:inline-flex; align-items:center; gap:6px; background:none; border:none; cursor:pointer; font-size:13px; font-weight:500; color:var(--app-text-2); padding:6px 10px; border-radius:6px; transition:all 0.15s; }\n  .btn-ghost-back[_ngcontent-%COMP%]:hover { background:var(--app-border-light); color:var(--app-text-1); }\n\n  .mod-header[_ngcontent-%COMP%] { display:flex; align-items:flex-start; gap:20px; background:var(--app-surface); border:1px solid var(--app-border); border-radius:12px; padding:24px; flex-wrap:wrap; }\n  .mod-icon[_ngcontent-%COMP%] { width:64px; height:64px; border-radius:14px; background:rgba(99,102,241,0.12); color:#6366f1; display:flex; align-items:center; justify-content:center; flex-shrink:0; }\n\n  .status-badge[_ngcontent-%COMP%] { font-size:11px; font-weight:600; padding:3px 10px; border-radius:99px; }\n  .status-badge.ativo[_ngcontent-%COMP%] { background:rgba(34,197,94,0.15); color:#22c55e; }\n  .status-badge[_ngcontent-%COMP%]:not(.ativo) { background:rgba(148,163,184,0.15); color:#94a3b8; }\n\n  .stat-chip[_ngcontent-%COMP%] { font-size:13px; color:var(--app-text-2); }\n  .stat-chip[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] { color:var(--app-text-1); font-weight:700; }\n\n  .secao-card[_ngcontent-%COMP%] { background:var(--app-surface); border:1px solid var(--app-border); border-radius:10px; padding:20px; }\n  .secao-titulo[_ngcontent-%COMP%] { font-size:13px; font-weight:600; color:var(--app-text-1); margin:0 0 14px; text-transform:uppercase; letter-spacing:0.04em; }\n\n  .faixas-lista[_ngcontent-%COMP%] { display:flex; flex-direction:column; gap:8px; }\n  .faixa-item[_ngcontent-%COMP%] { display:flex; align-items:center; gap:14px; padding:10px 12px; background:var(--app-bg); border:1px solid var(--app-border); border-radius:8px; }\n  .faixa-dot[_ngcontent-%COMP%] { width:20px; height:20px; border-radius:50%; border:2px solid rgba(0,0,0,0.1); flex-shrink:0; }\n  .ordem-badge[_ngcontent-%COMP%] { font-size:11px; font-weight:600; color:var(--app-text-3); background:var(--app-border-light); padding:2px 8px; border-radius:99px; flex-shrink:0; }\n\n  .badge[_ngcontent-%COMP%] { font-size:11px; font-weight:600; padding:2px 8px; border-radius:99px; }\n  .badge-success[_ngcontent-%COMP%] { background:rgba(34,197,94,0.15); color:#22c55e; }\n  .badge-neutral[_ngcontent-%COMP%] { background:rgba(148,163,184,0.15); color:#94a3b8; }"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ModalidadeDetalheComponent, { className: "ModalidadeDetalheComponent" });
})();
export {
  ModalidadeDetalheComponent
};
//# sourceMappingURL=chunk-IJLROVNJ.js.map
