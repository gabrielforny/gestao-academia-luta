import {
  FuncionarioService
} from "./chunk-RPV7F5F2.js";
import "./chunk-RZVP4UO7.js";
import {
  ActivatedRoute,
  Router,
  RouterLink
} from "./chunk-QYA4BMW3.js";
import {
  CommonModule,
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
  ɵɵsanitizeUrl,
  ɵɵstyleProp,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-YRJQ7ZE3.js";
import "./chunk-7G5TR5RR.js";

// src/app/features/funcionarios/pages/detalhe/funcionario-detalhe.component.ts
var _c0 = () => [1, 2, 3];
var _c1 = (a0) => ["/app/funcionarios", a0, "editar"];
function FuncionarioDetalheComponent_Conditional_0_For_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "div", 3);
  }
}
function FuncionarioDetalheComponent_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 0);
    \u0275\u0275element(1, "div", 1);
    \u0275\u0275elementStart(2, "div", 2);
    \u0275\u0275repeaterCreate(3, FuncionarioDetalheComponent_Conditional_0_For_4_Template, 1, 0, "div", 3, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(3);
    \u0275\u0275repeater(\u0275\u0275pureFunction0(0, _c0));
  }
}
function FuncionarioDetalheComponent_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 0)(1, "div", 4)(2, "p");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "button", 5);
    \u0275\u0275listener("click", function FuncionarioDetalheComponent_Conditional_1_Template_button_click_4_listener() {
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
    \u0275\u0275textInterpolate(ctx_r1.erro() || "Funcion\xE1rio n\xE3o encontrado.");
  }
}
function FuncionarioDetalheComponent_Conditional_2_Conditional_22_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 20);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.funcionario().email);
  }
}
function FuncionarioDetalheComponent_Conditional_2_Conditional_27_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 24)(1, "span", 25);
    \u0275\u0275text(2, "Telefone");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "a", 28);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(4, "svg", 29);
    \u0275\u0275element(5, "path", 30);
    \u0275\u0275elementEnd();
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275property("href", ctx_r1.wppLink(ctx_r1.funcionario().telefone), \u0275\u0275sanitizeUrl);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", ctx_r1.funcionario().telefone, " ");
  }
}
function FuncionarioDetalheComponent_Conditional_2_Conditional_33_For_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 32);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const t_r4 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(t_r4);
  }
}
function FuncionarioDetalheComponent_Conditional_2_Conditional_33_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 27)(1, "h3", 22);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 31);
    \u0275\u0275repeaterCreate(4, FuncionarioDetalheComponent_Conditional_2_Conditional_33_For_5_Template, 2, 1, "span", 32, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("Turmas vinculadas (", ctx_r1.funcionario().turmasVinculadas.length, ")");
    \u0275\u0275advance(2);
    \u0275\u0275repeater(ctx_r1.funcionario().turmasVinculadas);
  }
}
function FuncionarioDetalheComponent_Conditional_2_Conditional_34_For_5_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(0, "svg", 36);
    \u0275\u0275element(1, "polyline", 37);
    \u0275\u0275elementEnd();
  }
}
function FuncionarioDetalheComponent_Conditional_2_Conditional_34_For_5_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(0, "svg", 38);
    \u0275\u0275element(1, "line", 39)(2, "line", 40);
    \u0275\u0275elementEnd();
  }
}
function FuncionarioDetalheComponent_Conditional_2_Conditional_34_For_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 35);
    \u0275\u0275template(1, FuncionarioDetalheComponent_Conditional_2_Conditional_34_For_5_Conditional_1_Template, 2, 0, ":svg:svg", 36)(2, FuncionarioDetalheComponent_Conditional_2_Conditional_34_For_5_Conditional_2_Template, 3, 0);
    \u0275\u0275elementStart(3, "span");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const modulo_r5 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275classProp("perm-ativa", ctx_r1.temPermissao(modulo_r5));
    \u0275\u0275advance();
    \u0275\u0275conditional(1, ctx_r1.temPermissao(modulo_r5) ? 1 : 2);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(modulo_r5);
  }
}
function FuncionarioDetalheComponent_Conditional_2_Conditional_34_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 27)(1, "h3", 22);
    \u0275\u0275text(2, "Permiss\xF5es de acesso");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 33);
    \u0275\u0275repeaterCreate(4, FuncionarioDetalheComponent_Conditional_2_Conditional_34_For_5_Template, 5, 4, "div", 34, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275repeater(ctx_r1.modulos);
  }
}
function FuncionarioDetalheComponent_Conditional_2_Conditional_35_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 27)(1, "h3", 22);
    \u0275\u0275text(2, "Permiss\xF5es de acesso");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 41);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(4, "svg", 42);
    \u0275\u0275element(5, "path", 43)(6, "polyline", 44);
    \u0275\u0275elementEnd();
    \u0275\u0275text(7, " Administrador \u2014 acesso total a todos os m\xF3dulos ");
    \u0275\u0275elementEnd()();
  }
}
function FuncionarioDetalheComponent_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 0)(1, "div", 6)(2, "button", 7);
    \u0275\u0275listener("click", function FuncionarioDetalheComponent_Conditional_2_Template_button_click_2_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.voltar());
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(3, "svg", 8);
    \u0275\u0275element(4, "polyline", 9);
    \u0275\u0275elementEnd();
    \u0275\u0275text(5, " Voltar para Funcion\xE1rios ");
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(6, "div", 10)(7, "a", 11);
    \u0275\u0275text(8, "Editar");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(9, "div", 12)(10, "div", 13);
    \u0275\u0275text(11);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "div", 14)(13, "div", 15)(14, "h1", 16);
    \u0275\u0275text(15);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "span", 17);
    \u0275\u0275text(17);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "span", 18);
    \u0275\u0275text(19);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(20, "div", 19);
    \u0275\u0275text(21);
    \u0275\u0275elementEnd();
    \u0275\u0275template(22, FuncionarioDetalheComponent_Conditional_2_Conditional_22_Template, 2, 1, "div", 20);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(23, "div", 21)(24, "h3", 22);
    \u0275\u0275text(25, "Dados pessoais");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(26, "div", 23);
    \u0275\u0275template(27, FuncionarioDetalheComponent_Conditional_2_Conditional_27_Template, 7, 2, "div", 24);
    \u0275\u0275elementStart(28, "div", 24)(29, "span", 25);
    \u0275\u0275text(30, "Data de admiss\xE3o");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(31, "span", 26);
    \u0275\u0275text(32);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275template(33, FuncionarioDetalheComponent_Conditional_2_Conditional_33_Template, 6, 1, "div", 27)(34, FuncionarioDetalheComponent_Conditional_2_Conditional_34_Template, 6, 0, "div", 27)(35, FuncionarioDetalheComponent_Conditional_2_Conditional_35_Template, 8, 0);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(7);
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(19, _c1, ctx_r1.funcionario().id));
    \u0275\u0275advance(3);
    \u0275\u0275styleProp("background", "linear-gradient(135deg," + ctx_r1.perfilCor(ctx_r1.funcionario().perfil) + "," + ctx_r1.perfilCor(ctx_r1.funcionario().perfil) + "99)");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.avatarInicial(ctx_r1.funcionario().nome), " ");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r1.funcionario().nome);
    \u0275\u0275advance();
    \u0275\u0275classProp("ativo", ctx_r1.funcionario().ativo);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.funcionario().ativo ? "Ativo" : "Inativo");
    \u0275\u0275advance();
    \u0275\u0275styleProp("background", ctx_r1.perfilCor(ctx_r1.funcionario().perfil) + "22")("color", ctx_r1.perfilCor(ctx_r1.funcionario().perfil));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.funcionario().perfil, " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.funcionario().cargo);
    \u0275\u0275advance();
    \u0275\u0275conditional(22, ctx_r1.funcionario().email ? 22 : -1);
    \u0275\u0275advance(5);
    \u0275\u0275conditional(27, ctx_r1.funcionario().telefone ? 27 : -1);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r1.formatarData(ctx_r1.funcionario().dataAdmissao));
    \u0275\u0275advance();
    \u0275\u0275conditional(33, ctx_r1.funcionario().turmasVinculadas.length > 0 ? 33 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(34, ctx_r1.funcionario().perfil !== "Admin" ? 34 : 35);
  }
}
var MODULOS = [
  "Alunos",
  "Turmas",
  "Hor\xE1rios",
  "Presen\xE7as",
  "Gradua\xE7\xE3o",
  "Ranking",
  "Planos",
  "Financeiro",
  "Contratos",
  "Relat\xF3rios",
  "Catraca",
  "Configura\xE7\xF5es"
];
var FuncionarioDetalheComponent = class _FuncionarioDetalheComponent {
  constructor() {
    this.funcionarioService = inject(FuncionarioService);
    this.route = inject(ActivatedRoute);
    this.router = inject(Router);
    this.funcionario = signal(null);
    this.carregando = signal(true);
    this.erro = signal("");
    this.modulos = MODULOS;
  }
  ngOnInit() {
    const id = this.route.snapshot.paramMap.get("id");
    this.funcionarioService.getById(id).subscribe({
      next: (res) => {
        this.funcionario.set(res.dados ?? null);
        this.carregando.set(false);
      },
      error: () => {
        this.erro.set("Funcion\xE1rio n\xE3o encontrado.");
        this.carregando.set(false);
      }
    });
  }
  perfilCor(perfil) {
    const map = { Admin: "#a855f7", Professor: "#3b82f6", Recepcionista: "#22c55e" };
    return map[perfil] ?? "#94a3b8";
  }
  avatarInicial(nome) {
    return (nome ?? "F").charAt(0).toUpperCase();
  }
  formatarData(d) {
    if (!d)
      return "\u2014";
    const [y, m, day] = d.split("T")[0].split("-");
    return `${day}/${m}/${y}`;
  }
  temPermissao(modulo) {
    return this.funcionario()?.permissoes?.[modulo] === true;
  }
  wppLink(telefone) {
    return `https://wa.me/55${telefone.replace(/\D/g, "")}`;
  }
  voltar() {
    this.router.navigate(["/app/funcionarios"]);
  }
  static {
    this.\u0275fac = function FuncionarioDetalheComponent_Factory(t) {
      return new (t || _FuncionarioDetalheComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _FuncionarioDetalheComponent, selectors: [["app-funcionario-detalhe"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 3, vars: 1, consts: [[1, "page-container"], [1, "skeleton-header"], [1, "skeleton-list"], [1, "skeleton-row"], [1, "error-card"], [1, "btn-secondary", 2, "margin-top", "12px", 3, "click"], [2, "display", "flex", "align-items", "center", "justify-content", "space-between", "margin-bottom", "20px", "flex-wrap", "wrap", "gap", "10px"], [1, "btn-ghost-back", 3, "click"], ["width", "16", "height", "16", "fill", "none", "stroke", "currentColor", "stroke-width", "2", "viewBox", "0 0 24 24"], ["points", "15 18 9 12 15 6"], [2, "display", "flex", "gap", "8px"], [1, "btn-secondary", 3, "routerLink"], [1, "perfil-header"], [1, "perfil-avatar"], [1, "perfil-header-info"], [2, "display", "flex", "align-items", "center", "gap", "10px", "flex-wrap", "wrap"], [2, "font-size", "1.4rem", "font-weight", "700", "margin", "0", "color", "var(--app-text-1)"], [1, "status-badge"], [1, "perfil-badge"], [2, "font-size", "14px", "color", "var(--app-text-2)", "margin-top", "4px"], [2, "font-size", "13px", "color", "var(--app-text-3)", "margin-top", "4px"], [1, "secao-card", 2, "margin-top", "20px"], [1, "secao-titulo"], [1, "dados-grid"], [1, "dado-item"], [1, "dado-label"], [1, "dado-valor"], [1, "secao-card", 2, "margin-top", "16px"], ["target", "_blank", "rel", "noopener", 1, "wpp-link", 3, "href"], ["width", "13", "height", "13", "viewBox", "0 0 24 24", "fill", "currentColor"], ["d", "M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"], [2, "display", "flex", "flex-wrap", "wrap", "gap", "8px"], [1, "info-chip"], [1, "permissoes-grid"], [1, "perm-item", 3, "perm-ativa"], [1, "perm-item"], ["width", "14", "height", "14", "fill", "none", "stroke", "#22c55e", "stroke-width", "2.5", "viewBox", "0 0 24 24"], ["points", "20 6 9 17 4 12"], ["width", "14", "height", "14", "fill", "none", "stroke", "#94a3b8", "stroke-width", "2", "viewBox", "0 0 24 24"], ["x1", "18", "y1", "6", "x2", "6", "y2", "18"], ["x1", "6", "y1", "6", "x2", "18", "y2", "18"], [2, "display", "flex", "align-items", "center", "gap", "8px", "padding", "8px 0", "font-size", "13px", "color", "var(--app-text-2)"], ["width", "16", "height", "16", "fill", "none", "stroke", "#a855f7", "stroke-width", "2", "viewBox", "0 0 24 24"], ["d", "M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"], ["points", "9 12 11 14 15 10"]], template: function FuncionarioDetalheComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275template(0, FuncionarioDetalheComponent_Conditional_0_Template, 5, 1, "div", 0)(1, FuncionarioDetalheComponent_Conditional_1_Template, 6, 1)(2, FuncionarioDetalheComponent_Conditional_2_Template, 36, 21);
      }
      if (rf & 2) {
        \u0275\u0275conditional(0, ctx.carregando() ? 0 : ctx.erro() || !ctx.funcionario() ? 1 : 2);
      }
    }, dependencies: [CommonModule, RouterLink], styles: [".btn-ghost-back[_ngcontent-%COMP%] { display:inline-flex; align-items:center; gap:6px; background:none; border:none; cursor:pointer; font-size:13px; font-weight:500; color:var(--app-text-2); padding:6px 10px; border-radius:6px; transition:all 0.15s; }\n  .btn-ghost-back[_ngcontent-%COMP%]:hover { background:var(--app-border-light); color:var(--app-text-1); }\n\n  .perfil-header[_ngcontent-%COMP%] { display:flex; align-items:flex-start; gap:20px; background:var(--app-surface); border:1px solid var(--app-border); border-radius:12px; padding:24px; flex-wrap:wrap; }\n  .perfil-avatar[_ngcontent-%COMP%] { width:68px; height:68px; border-radius:50%; color:#fff; display:flex; align-items:center; justify-content:center; font-size:26px; font-weight:700; flex-shrink:0; }\n  .perfil-header-info[_ngcontent-%COMP%] { flex:1; min-width:0; }\n\n  .status-badge[_ngcontent-%COMP%] { font-size:11px; font-weight:600; padding:3px 10px; border-radius:99px; }\n  .status-badge.ativo[_ngcontent-%COMP%] { background:rgba(34,197,94,0.15); color:#22c55e; }\n  .status-badge[_ngcontent-%COMP%]:not(.ativo) { background:rgba(148,163,184,0.15); color:#94a3b8; }\n  .perfil-badge[_ngcontent-%COMP%] { font-size:11px; font-weight:600; padding:3px 10px; border-radius:99px; }\n  .info-chip[_ngcontent-%COMP%] { font-size:12px; font-weight:500; padding:3px 10px; border-radius:99px; background:var(--app-bg); border:1px solid var(--app-border); color:var(--app-text-2); }\n\n  .secao-card[_ngcontent-%COMP%] { background:var(--app-surface); border:1px solid var(--app-border); border-radius:10px; padding:20px; }\n  .secao-titulo[_ngcontent-%COMP%] { font-size:13px; font-weight:600; color:var(--app-text-1); margin:0 0 14px; text-transform:uppercase; letter-spacing:0.04em; }\n  .dados-grid[_ngcontent-%COMP%] { display:grid; grid-template-columns:repeat(auto-fill,minmax(220px,1fr)); gap:12px; }\n  .dado-item[_ngcontent-%COMP%] { display:flex; flex-direction:column; gap:2px; }\n  .dado-label[_ngcontent-%COMP%] { font-size:11px; color:var(--app-text-3); font-weight:500; }\n  .dado-valor[_ngcontent-%COMP%] { font-size:14px; color:var(--app-text-1); font-weight:500; }\n\n  .permissoes-grid[_ngcontent-%COMP%] { display:grid; grid-template-columns:repeat(auto-fill,minmax(150px,1fr)); gap:8px; }\n  .perm-item[_ngcontent-%COMP%] { display:flex; align-items:center; gap:8px; padding:8px 12px; border-radius:8px; border:1px solid var(--app-border); font-size:13px; color:var(--app-text-2); background:var(--app-bg); }\n  .perm-ativa[_ngcontent-%COMP%] { border-color:rgba(34,197,94,0.3); color:var(--app-text-1); background:rgba(34,197,94,0.05); }\n\n  .wpp-link[_ngcontent-%COMP%] { display:inline-flex; align-items:center; gap:5px; color:#25d366; text-decoration:none; font-size:14px; font-weight:500; }\n  .wpp-link[_ngcontent-%COMP%]:hover { text-decoration:underline; }"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(FuncionarioDetalheComponent, { className: "FuncionarioDetalheComponent" });
})();
export {
  FuncionarioDetalheComponent
};
//# sourceMappingURL=chunk-RHQVGUB7.js.map
