import {
  AcademiaService
} from "./chunk-CBN6KQ7U.js";
import {
  SignalrService
} from "./chunk-2WRRX2YG.js";
import {
  ToastService
} from "./chunk-3XU5ZCND.js";
import {
  AuthService
} from "./chunk-UDQ4RXGC.js";
import {
  environment
} from "./chunk-RZVP4UO7.js";
import {
  NavigationEnd,
  Router,
  RouterLink,
  RouterLinkActive,
  RouterOutlet
} from "./chunk-CPMJ3O6H.js";
import {
  CommonModule,
  HttpClient,
  NgTemplateOutlet,
  Subject,
  computed,
  effect,
  filter,
  inject,
  signal,
  takeUntil,
  ɵsetClassDebugInfo,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵclassMapInterpolate1,
  ɵɵclassProp,
  ɵɵconditional,
  ɵɵdefineComponent,
  ɵɵdefineInjectable,
  ɵɵelement,
  ɵɵelementContainer,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnamespaceHTML,
  ɵɵnamespaceSVG,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵpureFunction1,
  ɵɵreference,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtemplateRefExtractor,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-7TD4H62Z.js";
import {
  __spreadProps,
  __spreadValues
} from "./chunk-7G5TR5RR.js";

// src/app/core/services/layout.service.ts
var LayoutService = class _LayoutService {
  constructor() {
    this.sidebarAberta = signal(false);
  }
  toggleSidebar() {
    this.sidebarAberta.update((v) => !v);
  }
  fecharSidebar() {
    this.sidebarAberta.set(false);
  }
  static {
    this.\u0275fac = function LayoutService_Factory(t) {
      return new (t || _LayoutService)();
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _LayoutService, factory: _LayoutService.\u0275fac, providedIn: "root" });
  }
};

// src/app/shared/layout/sidebar/sidebar.component.ts
var _forTrack0 = ($index, $item) => $item.rota;
var _c0 = (a0) => ({ $implicit: a0 });
function SidebarComponent_For_7_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainer(0);
  }
}
function SidebarComponent_For_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 5);
    \u0275\u0275template(1, SidebarComponent_For_7_ng_container_1_Template, 1, 0, "ng-container", 15);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const item_r2 = ctx.$implicit;
    \u0275\u0275nextContext();
    const iconeTpl_r3 = \u0275\u0275reference(23);
    \u0275\u0275property("routerLink", item_r2.rota)("routerLinkActiveOptions", item_r2.linkOptions);
    \u0275\u0275advance();
    \u0275\u0275property("ngTemplateOutlet", iconeTpl_r3)("ngTemplateOutletContext", \u0275\u0275pureFunction1(5, _c0, item_r2.icone));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", item_r2.label, " ");
  }
}
function SidebarComponent_For_10_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainer(0);
  }
}
function SidebarComponent_For_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 5);
    \u0275\u0275template(1, SidebarComponent_For_10_ng_container_1_Template, 1, 0, "ng-container", 15);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const item_r4 = ctx.$implicit;
    \u0275\u0275nextContext();
    const iconeTpl_r3 = \u0275\u0275reference(23);
    \u0275\u0275property("routerLink", item_r4.rota)("routerLinkActiveOptions", item_r4.linkOptions);
    \u0275\u0275advance();
    \u0275\u0275property("ngTemplateOutlet", iconeTpl_r3)("ngTemplateOutletContext", \u0275\u0275pureFunction1(5, _c0, item_r4.icone));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", item_r4.label, " ");
  }
}
function SidebarComponent_ng_template_22_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(0, "svg", 16);
    \u0275\u0275element(1, "path", 17);
    \u0275\u0275elementEnd();
  }
}
function SidebarComponent_ng_template_22_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(0, "svg", 16);
    \u0275\u0275element(1, "path", 18);
    \u0275\u0275elementEnd();
  }
}
function SidebarComponent_ng_template_22_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(0, "svg", 16);
    \u0275\u0275element(1, "path", 19);
    \u0275\u0275elementEnd();
  }
}
function SidebarComponent_ng_template_22_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(0, "svg", 16);
    \u0275\u0275element(1, "circle", 20)(2, "path", 21);
    \u0275\u0275elementEnd();
  }
}
function SidebarComponent_ng_template_22_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(0, "svg", 16);
    \u0275\u0275element(1, "path", 22)(2, "polyline", 23);
    \u0275\u0275elementEnd();
  }
}
function SidebarComponent_ng_template_22_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(0, "svg", 16);
    \u0275\u0275element(1, "path", 24)(2, "path", 25);
    \u0275\u0275elementEnd();
  }
}
function SidebarComponent_ng_template_22_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(0, "svg", 16);
    \u0275\u0275element(1, "path", 26);
    \u0275\u0275elementEnd();
  }
}
function SidebarComponent_ng_template_22_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(0, "svg", 16);
    \u0275\u0275element(1, "path", 27)(2, "polyline", 28);
    \u0275\u0275elementEnd();
  }
}
function SidebarComponent_ng_template_22_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(0, "svg", 16);
    \u0275\u0275element(1, "rect", 29)(2, "path", 30)(3, "circle", 31)(4, "path", 32)(5, "line", 33)(6, "line", 34);
    \u0275\u0275elementEnd();
  }
}
function SidebarComponent_ng_template_22_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(0, "svg", 16);
    \u0275\u0275element(1, "rect", 35)(2, "path", 36);
    \u0275\u0275elementEnd();
  }
}
function SidebarComponent_ng_template_22_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(0, "svg", 16);
    \u0275\u0275element(1, "rect", 37)(2, "path", 38);
    \u0275\u0275elementEnd();
  }
}
function SidebarComponent_ng_template_22_Conditional_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(0, "svg", 16);
    \u0275\u0275element(1, "line", 39)(2, "path", 40);
    \u0275\u0275elementEnd();
  }
}
function SidebarComponent_ng_template_22_Conditional_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(0, "svg", 16);
    \u0275\u0275element(1, "path", 41)(2, "polyline", 42)(3, "line", 43)(4, "line", 44)(5, "polyline", 45);
    \u0275\u0275elementEnd();
  }
}
function SidebarComponent_ng_template_22_Conditional_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(0, "svg", 16);
    \u0275\u0275element(1, "rect", 46)(2, "rect", 47)(3, "rect", 48);
    \u0275\u0275elementEnd();
  }
}
function SidebarComponent_ng_template_22_Conditional_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(0, "svg", 16);
    \u0275\u0275element(1, "circle", 49)(2, "path", 50);
    \u0275\u0275elementEnd();
  }
}
function SidebarComponent_ng_template_22_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, SidebarComponent_ng_template_22_Conditional_0_Template, 2, 0, ":svg:svg", 16)(1, SidebarComponent_ng_template_22_Conditional_1_Template, 2, 0, ":svg:svg", 16)(2, SidebarComponent_ng_template_22_Conditional_2_Template, 2, 0, ":svg:svg", 16)(3, SidebarComponent_ng_template_22_Conditional_3_Template, 3, 0, ":svg:svg", 16)(4, SidebarComponent_ng_template_22_Conditional_4_Template, 3, 0, ":svg:svg", 16)(5, SidebarComponent_ng_template_22_Conditional_5_Template, 3, 0, ":svg:svg", 16)(6, SidebarComponent_ng_template_22_Conditional_6_Template, 2, 0, ":svg:svg", 16)(7, SidebarComponent_ng_template_22_Conditional_7_Template, 3, 0, ":svg:svg", 16)(8, SidebarComponent_ng_template_22_Conditional_8_Template, 7, 0, ":svg:svg", 16)(9, SidebarComponent_ng_template_22_Conditional_9_Template, 3, 0, ":svg:svg", 16)(10, SidebarComponent_ng_template_22_Conditional_10_Template, 3, 0, ":svg:svg", 16)(11, SidebarComponent_ng_template_22_Conditional_11_Template, 3, 0, ":svg:svg", 16)(12, SidebarComponent_ng_template_22_Conditional_12_Template, 6, 0, ":svg:svg", 16)(13, SidebarComponent_ng_template_22_Conditional_13_Template, 4, 0, ":svg:svg", 16)(14, SidebarComponent_ng_template_22_Conditional_14_Template, 3, 0, ":svg:svg", 16);
  }
  if (rf & 2) {
    const icone_r5 = ctx.$implicit;
    \u0275\u0275conditional(0, icone_r5 === "home" ? 0 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(1, icone_r5 === "user-group" ? 1 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(2, icone_r5 === "users-group" ? 2 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(3, icone_r5 === "clock" ? 3 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(4, icone_r5 === "check-circle" ? 4 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(5, icone_r5 === "academic-cap" ? 5 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(6, icone_r5 === "trophy" ? 6 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(7, icone_r5 === "shield-check" ? 7 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(8, icone_r5 === "identification" ? 8 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(9, icone_r5 === "lock-open" ? 9 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(10, icone_r5 === "planos" ? 10 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(11, icone_r5 === "currency" ? 11 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(12, icone_r5 === "document-text" ? 12 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(13, icone_r5 === "chart-bar" ? 13 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(14, icone_r5 === "cog" ? 14 : -1);
  }
}
var SidebarComponent = class _SidebarComponent {
  constructor() {
    this.authService = inject(AuthService);
    this.layoutService = inject(LayoutService);
    this.academiaService = inject(AcademiaService);
    this.router = inject(Router);
    this.destroy$ = new Subject();
    this.academiaName = signal("Academia Fight");
    this.exactMatch = {
      paths: "exact",
      queryParams: "ignored",
      fragment: "ignored",
      matrixParams: "ignored"
    };
    this.subsetMatch = {
      paths: "subset",
      queryParams: "ignored",
      fragment: "ignored",
      matrixParams: "ignored"
    };
    this.navItems = [
      { label: "Dashboard", rota: "/app/dashboard", icone: "home", linkOptions: this.exactMatch },
      { label: "Alunos", rota: "/app/alunos", icone: "user-group", linkOptions: this.subsetMatch, permissao: "Alunos" },
      { label: "Turmas", rota: "/app/turmas", icone: "users-group", linkOptions: this.subsetMatch, permissao: "Turmas" },
      { label: "Hor\xE1rios", rota: "/app/horarios", icone: "clock", linkOptions: this.subsetMatch, permissao: "Hor\xE1rios" },
      { label: "Presen\xE7as", rota: "/app/presencas", icone: "check-circle", linkOptions: this.subsetMatch, permissao: "Presen\xE7as" },
      { label: "Gradua\xE7\xE3o", rota: "/app/graduacao", icone: "academic-cap", linkOptions: this.subsetMatch, permissao: "Gradua\xE7\xE3o" },
      { label: "Ranking", rota: "/app/ranking", icone: "trophy", linkOptions: this.subsetMatch, permissao: "Ranking" },
      { label: "Planos", rota: "/app/planos", icone: "planos", linkOptions: this.subsetMatch, permissao: "Planos" },
      { label: "Financeiro", rota: "/app/financeiro", icone: "currency", linkOptions: this.subsetMatch, permissao: "Financeiro" },
      { label: "Contratos", rota: "/app/contratos", icone: "document-text", linkOptions: this.subsetMatch, permissao: "Contratos" },
      { label: "Relat\xF3rios", rota: "/app/relatorios", icone: "chart-bar", linkOptions: this.subsetMatch, permissao: "Relat\xF3rios" }
    ];
    this.navItemsConfig = [
      { label: "Catraca", rota: "/app/catraca", icone: "lock-open", linkOptions: this.subsetMatch, permissao: "Catraca" },
      { label: "Modalidades", rota: "/app/modalidades", icone: "shield-check", linkOptions: this.subsetMatch, roles: ["Admin"] },
      { label: "Funcion\xE1rios", rota: "/app/funcionarios", icone: "identification", linkOptions: this.subsetMatch, roles: ["Admin"] },
      { label: "Configura\xE7\xF5es", rota: "/app/configuracoes", icone: "cog", linkOptions: this.subsetMatch, permissao: "Configura\xE7\xF5es" }
    ];
  }
  ngOnInit() {
    this.academiaService.getCurrent().subscribe({
      next: (res) => {
        if (res.dados?.nome)
          this.academiaName.set(res.dados.nome);
      }
    });
    this.router.events.pipe(filter((e) => e instanceof NavigationEnd), takeUntil(this.destroy$)).subscribe(() => this.layoutService.fecharSidebar());
  }
  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }
  itemVisivel(item) {
    const user = this.authService.currentUser();
    const perfil = user?.perfil ?? "";
    if (item.roles && !item.roles.includes(perfil))
      return false;
    if (perfil === "Admin")
      return true;
    if (!item.permissao)
      return true;
    return user?.permissoes?.[item.permissao] === true;
  }
  get navItemsVisiveis() {
    return this.navItems.filter((item) => this.itemVisivel(item));
  }
  get navItemsConfigVisiveis() {
    return this.navItemsConfig.filter((item) => this.itemVisivel(item));
  }
  brandMark() {
    return (this.academiaName() || "A").charAt(0).toUpperCase();
  }
  sair() {
    this.authService.logout();
  }
  static {
    this.\u0275fac = function SidebarComponent_Factory(t) {
      return new (t || _SidebarComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _SidebarComponent, selectors: [["app-sidebar"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 24, vars: 7, consts: [["iconeTpl", ""], [1, "sidebar"], [1, "sidebar-brand"], [1, "brand-mark"], [1, "sidebar-nav"], ["routerLinkActive", "active", 1, "nav-link", 3, "routerLink", "routerLinkActiveOptions"], [1, "nav-separator"], [1, "sidebar-footer"], [1, "user-avatar"], [1, "user-info"], [1, "user-name"], [1, "user-role"], ["type", "button", "title", "Sair", 1, "logout-btn", 3, "click"], ["width", "15", "height", "15", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "1.75", "stroke-linecap", "round", "stroke-linejoin", "round"], ["d", "M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4M16 17l5-5-5-5M21 12H9"], [4, "ngTemplateOutlet", "ngTemplateOutletContext"], ["width", "16", "height", "16", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "1.75", "stroke-linecap", "round", "stroke-linejoin", "round"], ["d", "M3 12l9-9 9 9M5 10v10h5v-5h4v5h5V10"], ["d", "M16 7a4 4 0 1 1-8 0 4 4 0 0 1 8 0zM3 21v-1a7 7 0 0 1 14 0v1"], ["d", "M16 7a4 4 0 1 1-8 0 4 4 0 0 1 8 0zM3 21v-1a7 7 0 0 1 14 0v1M21 21v-1a5 5 0 0 0-3-4.58"], ["cx", "12", "cy", "12", "r", "9"], ["d", "M12 7v5l3 3"], ["d", "M22 11.08V12a10 10 0 1 1-5.93-9.14"], ["points", "22 4 12 14.01 9 11.01"], ["d", "M22 10v6M2 10l10-5 10 5-10 5z"], ["d", "M6 12v5c3 3 9 3 12 0v-5"], ["d", "M6 9H4a2 2 0 0 1-2-2V5h4M18 9h2a2 2 0 0 0 2-2V5h-4M8 21h8M12 17v4M5 5h14v6a7 7 0 0 1-14 0V5z"], ["d", "M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"], ["points", "9 12 11 14 15 10"], ["x", "2", "y", "7", "width", "20", "height", "14", "rx", "2"], ["d", "M16 3H8a2 2 0 0 0-2 2v2h12V5a2 2 0 0 0-2-2z"], ["cx", "9", "cy", "13", "r", "2"], ["d", "M5 20c0-2 2-3 4-3s4 1 4 3"], ["x1", "15", "y1", "12", "x2", "19", "y2", "12"], ["x1", "15", "y1", "16", "x2", "17", "y2", "16"], ["x", "3", "y", "11", "width", "18", "height", "11", "rx", "2"], ["d", "M7 11V7a5 5 0 0 1 9.9-1"], ["x", "2", "y", "5", "width", "20", "height", "14", "rx", "2"], ["d", "M2 10h20"], ["x1", "12", "y1", "1", "x2", "12", "y2", "23"], ["d", "M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"], ["d", "M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"], ["points", "14 2 14 8 20 8"], ["x1", "16", "y1", "13", "x2", "8", "y2", "13"], ["x1", "16", "y1", "17", "x2", "8", "y2", "17"], ["points", "10 9 9 9 8 9"], ["x", "3", "y", "3", "width", "4", "height", "18", "rx", "1"], ["x", "10", "y", "8", "width", "4", "height", "13", "rx", "1"], ["x", "17", "y", "13", "width", "4", "height", "8", "rx", "1"], ["cx", "12", "cy", "12", "r", "3"], ["d", "M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z"]], template: function SidebarComponent_Template(rf, ctx) {
      if (rf & 1) {
        const _r1 = \u0275\u0275getCurrentView();
        \u0275\u0275elementStart(0, "aside", 1)(1, "div", 2)(2, "span", 3);
        \u0275\u0275text(3);
        \u0275\u0275elementEnd();
        \u0275\u0275text(4);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(5, "nav", 4);
        \u0275\u0275repeaterCreate(6, SidebarComponent_For_7_Template, 3, 7, "a", 5, _forTrack0);
        \u0275\u0275element(8, "div", 6);
        \u0275\u0275repeaterCreate(9, SidebarComponent_For_10_Template, 3, 7, "a", 5, _forTrack0);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(11, "div", 7)(12, "div", 8);
        \u0275\u0275text(13);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(14, "div", 9)(15, "span", 10);
        \u0275\u0275text(16);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(17, "span", 11);
        \u0275\u0275text(18);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(19, "button", 12);
        \u0275\u0275listener("click", function SidebarComponent_Template_button_click_19_listener() {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.sair());
        });
        \u0275\u0275namespaceSVG();
        \u0275\u0275elementStart(20, "svg", 13);
        \u0275\u0275element(21, "path", 14);
        \u0275\u0275elementEnd()()()();
        \u0275\u0275template(22, SidebarComponent_ng_template_22_Template, 15, 15, "ng-template", null, 0, \u0275\u0275templateRefExtractor);
      }
      if (rf & 2) {
        let tmp_6_0;
        let tmp_7_0;
        let tmp_8_0;
        \u0275\u0275classProp("aberta", ctx.layoutService.sidebarAberta());
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate(ctx.brandMark());
        \u0275\u0275advance();
        \u0275\u0275textInterpolate1(" ", ctx.academiaName(), " ");
        \u0275\u0275advance(2);
        \u0275\u0275repeater(ctx.navItemsVisiveis);
        \u0275\u0275advance(3);
        \u0275\u0275repeater(ctx.navItemsConfigVisiveis);
        \u0275\u0275advance(4);
        \u0275\u0275textInterpolate1(" ", ((tmp_6_0 = (tmp_6_0 = ctx.authService.currentUser()) == null ? null : tmp_6_0.nome) !== null && tmp_6_0 !== void 0 ? tmp_6_0 : "U").charAt(0).toUpperCase(), " ");
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate((tmp_7_0 = (tmp_7_0 = ctx.authService.currentUser()) == null ? null : tmp_7_0.nome) !== null && tmp_7_0 !== void 0 ? tmp_7_0 : "Usu\xE1rio");
        \u0275\u0275advance(2);
        \u0275\u0275textInterpolate((tmp_8_0 = (tmp_8_0 = ctx.authService.currentUser()) == null ? null : tmp_8_0.perfil) !== null && tmp_8_0 !== void 0 ? tmp_8_0 : "Usu\xE1rio");
      }
    }, dependencies: [CommonModule, NgTemplateOutlet, RouterLink, RouterLinkActive], styles: ['\n\n[_nghost-%COMP%] {\n  display: block;\n  height: 100%;\n  --bg-2: #111111;\n  --bg-3: #161616;\n  --fg: #fafaf7;\n  --fg-2: #c9c8c2;\n  --fg-3: #8a8985;\n  --line: #232323;\n  --accent: #ff4d2e;\n}\nhtml:not(.dark)[_nghost-%COMP%], html:not(.dark)   [_nghost-%COMP%] {\n  --bg-2: #ffffff;\n  --bg-3: #f8fafc;\n  --fg: #1e293b;\n  --fg-2: #475569;\n  --fg-3: #94a3b8;\n  --line: #e2e8f0;\n  --accent: #6366f1;\n}\n.sidebar[_ngcontent-%COMP%] {\n  width: 220px;\n  height: 100%;\n  background: var(--bg-2);\n  border-right: 1px solid var(--line);\n  display: flex;\n  flex-direction: column;\n  flex-shrink: 0;\n  font-family:\n    "Inter",\n    system-ui,\n    -apple-system,\n    sans-serif;\n  -webkit-font-smoothing: antialiased;\n}\n.sidebar-brand[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  padding: 20px 16px 18px;\n  border-bottom: 1px solid var(--line);\n  font-weight: 700;\n  font-size: 16px;\n  letter-spacing: -0.02em;\n  color: var(--fg);\n}\n.brand-mark[_ngcontent-%COMP%] {\n  width: 22px;\n  height: 22px;\n  border-radius: 5px;\n  background: var(--accent);\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  color: #0a0a0a;\n  font-size: 13px;\n  font-weight: 800;\n  flex-shrink: 0;\n}\n.sidebar-nav[_ngcontent-%COMP%] {\n  flex: 1;\n  padding: 10px;\n  display: flex;\n  flex-direction: column;\n  gap: 2px;\n  overflow-y: auto;\n}\n.nav-link[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  padding: 9px 12px;\n  border-radius: 7px;\n  font-size: 14px;\n  color: var(--fg-3);\n  text-decoration: none;\n  transition: background 120ms ease, color 120ms ease;\n}\n.nav-link[_ngcontent-%COMP%]:hover {\n  background: rgba(128, 128, 128, 0.08);\n  color: var(--fg-2);\n}\n.nav-link.active[_ngcontent-%COMP%] {\n  background: rgba(99, 102, 241, 0.12);\n  color: var(--fg);\n}\n.nav-link[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  flex-shrink: 0;\n}\n.nav-link.active[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  color: var(--accent);\n}\n.sidebar-footer[_ngcontent-%COMP%] {\n  padding: 14px 12px;\n  border-top: 1px solid var(--line);\n  display: flex;\n  align-items: center;\n  gap: 10px;\n}\n.user-avatar[_ngcontent-%COMP%] {\n  width: 32px;\n  height: 32px;\n  border-radius: 50%;\n  background: var(--accent);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 13px;\n  font-weight: 700;\n  color: #0a0a0a;\n  flex-shrink: 0;\n}\n.user-info[_ngcontent-%COMP%] {\n  flex: 1;\n  min-width: 0;\n}\n.user-name[_ngcontent-%COMP%] {\n  display: block;\n  font-size: 13px;\n  font-weight: 500;\n  color: var(--fg);\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.user-role[_ngcontent-%COMP%] {\n  display: block;\n  font-size: 11px;\n  color: var(--fg-3);\n  margin-top: 1px;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.logout-btn[_ngcontent-%COMP%] {\n  width: 30px;\n  height: 30px;\n  border: none;\n  background: transparent;\n  cursor: pointer;\n  color: var(--fg-3);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  border-radius: 6px;\n  transition: background 120ms ease, color 120ms ease;\n  flex-shrink: 0;\n}\n.logout-btn[_ngcontent-%COMP%]:hover {\n  background: rgba(128, 128, 128, 0.1);\n  color: var(--fg);\n}\n@media (max-width: 768px) {\n  .sidebar[_ngcontent-%COMP%] {\n    position: fixed;\n    left: 0;\n    top: 0;\n    height: 100%;\n    z-index: 200;\n    transform: translateX(-100%);\n    transition: transform 220ms ease;\n    box-shadow: 4px 0 24px rgba(0, 0, 0, 0.3);\n  }\n  .sidebar.aberta[_ngcontent-%COMP%] {\n    transform: translateX(0);\n  }\n}\n/*# sourceMappingURL=sidebar.component.css.map */', ".nav-separator[_ngcontent-%COMP%] { height: 1px; background: var(--color-border, rgba(255,255,255,0.08)); margin: 8px 12px; }"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(SidebarComponent, { className: "SidebarComponent" });
})();

// src/app/core/services/theme.service.ts
var ThemeService = class _ThemeService {
  constructor() {
    this.isDark = signal(localStorage.getItem("theme") !== "light");
    document.documentElement.classList.toggle("dark", this.isDark());
    effect(() => {
      const dark = this.isDark();
      document.documentElement.classList.toggle("dark", dark);
      localStorage.setItem("theme", dark ? "dark" : "light");
    });
  }
  toggle() {
    this.isDark.update((v) => !v);
  }
  static {
    this.\u0275fac = function ThemeService_Factory(t) {
      return new (t || _ThemeService)();
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _ThemeService, factory: _ThemeService.\u0275fac, providedIn: "root" });
  }
};

// src/app/core/services/notificacao.service.ts
var NotificacaoService = class _NotificacaoService {
  constructor() {
    this.http = inject(HttpClient);
    this.base = `${environment.apiUrl}/notificacoes`;
  }
  listar() {
    return this.http.get(this.base);
  }
  marcarLida(id) {
    return this.http.patch(`${this.base}/${id}/lida`, {});
  }
  marcarTodasLidas() {
    return this.http.post(`${this.base}/marcar-todas-lidas`, {});
  }
  excluir(id) {
    return this.http.delete(`${this.base}/${id}`);
  }
  static {
    this.\u0275fac = function NotificacaoService_Factory(t) {
      return new (t || _NotificacaoService)();
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _NotificacaoService, factory: _NotificacaoService.\u0275fac, providedIn: "root" });
  }
};

// src/app/shared/layout/topbar/topbar.component.ts
var _forTrack02 = ($index, $item) => $item.id;
function TopbarComponent_Conditional_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(0, "svg", 12);
    \u0275\u0275element(1, "circle", 22)(2, "line", 23)(3, "line", 24)(4, "line", 25)(5, "line", 26)(6, "line", 27)(7, "line", 28)(8, "line", 29)(9, "line", 30);
    \u0275\u0275elementEnd();
  }
}
function TopbarComponent_Conditional_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(0, "svg", 12);
    \u0275\u0275element(1, "path", 31);
    \u0275\u0275elementEnd();
  }
}
function TopbarComponent_Conditional_21_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 16);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.naoLidas() > 9 ? "9+" : ctx_r0.naoLidas());
  }
}
function TopbarComponent_Conditional_22_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 38);
    \u0275\u0275listener("click", function TopbarComponent_Conditional_22_Conditional_5_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.marcarTodasLidas());
    });
    \u0275\u0275text(1, "Marcar todas como lidas");
    \u0275\u0275elementEnd();
  }
}
function TopbarComponent_Conditional_22_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 37);
    \u0275\u0275element(1, "div", 39)(2, "div", 39);
    \u0275\u0275elementEnd();
  }
}
function TopbarComponent_Conditional_22_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 40);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(1, "svg", 41);
    \u0275\u0275element(2, "path", 15);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(3, "p");
    \u0275\u0275text(4, "Nenhuma notifica\xE7\xE3o");
    \u0275\u0275elementEnd()();
  }
}
function TopbarComponent_Conditional_22_Conditional_8_For_2_Conditional_11_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 56);
    \u0275\u0275listener("click", function TopbarComponent_Conditional_22_Conditional_8_For_2_Conditional_11_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r5);
      const n_r6 = \u0275\u0275nextContext().$implicit;
      const ctx_r0 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r0.marcarLida(n_r6.id));
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(1, "svg", 57);
    \u0275\u0275element(2, "polyline", 58);
    \u0275\u0275elementEnd()();
  }
}
function TopbarComponent_Conditional_22_Conditional_8_For_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 44)(1, "div", 45);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 46)(4, "div", 47);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div", 48);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "div", 49);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "div", 50);
    \u0275\u0275template(11, TopbarComponent_Conditional_22_Conditional_8_For_2_Conditional_11_Template, 3, 0, "button", 51);
    \u0275\u0275elementStart(12, "button", 52);
    \u0275\u0275listener("click", function TopbarComponent_Conditional_22_Conditional_8_For_2_Template_button_click_12_listener() {
      const n_r6 = \u0275\u0275restoreView(_r4).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r0.excluir(n_r6.id));
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(13, "svg", 53);
    \u0275\u0275element(14, "line", 54)(15, "line", 55);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const n_r6 = ctx.$implicit;
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275classProp("notif-nao-lida", !n_r6.lida);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r0.iconeTipo(n_r6.tipoLabel));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(n_r6.titulo);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(n_r6.mensagem);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(n_r6.tempoRelativo);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(11, !n_r6.lida ? 11 : -1);
  }
}
function TopbarComponent_Conditional_22_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 42);
    \u0275\u0275repeaterCreate(1, TopbarComponent_Conditional_22_Conditional_8_For_2_Template, 16, 7, "div", 43, _forTrack02);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r0.notifVisiveis());
  }
}
function TopbarComponent_Conditional_22_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 32);
    \u0275\u0275listener("click", function TopbarComponent_Conditional_22_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.fecharNotificacoes());
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(1, "div", 33)(2, "div", 34)(3, "span", 35);
    \u0275\u0275text(4, "Notifica\xE7\xF5es");
    \u0275\u0275elementEnd();
    \u0275\u0275template(5, TopbarComponent_Conditional_22_Conditional_5_Template, 2, 0, "button", 36);
    \u0275\u0275elementEnd();
    \u0275\u0275template(6, TopbarComponent_Conditional_22_Conditional_6_Template, 3, 0, "div", 37)(7, TopbarComponent_Conditional_22_Conditional_7_Template, 5, 0)(8, TopbarComponent_Conditional_22_Conditional_8_Template, 3, 0);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(5);
    \u0275\u0275conditional(5, ctx_r0.naoLidas() > 0 ? 5 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(6, ctx_r0.carregandoNotif() ? 6 : ctx_r0.notifVisiveis().length === 0 ? 7 : 8);
  }
}
function TopbarComponent_Conditional_31_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 59);
    \u0275\u0275listener("click", function TopbarComponent_Conditional_31_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r7);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.fecharDropdown());
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(1, "div", 60)(2, "div", 61)(3, "div", 62);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 63);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "div", 64)(8, "a", 65);
    \u0275\u0275listener("click", function TopbarComponent_Conditional_31_Template_a_click_8_listener() {
      \u0275\u0275restoreView(_r7);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.fecharDropdown());
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(9, "svg", 66);
    \u0275\u0275element(10, "circle", 67)(11, "path", 68);
    \u0275\u0275elementEnd();
    \u0275\u0275text(12, " Meu perfil ");
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(13, "button", 69);
    \u0275\u0275listener("click", function TopbarComponent_Conditional_31_Template_button_click_13_listener() {
      \u0275\u0275restoreView(_r7);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.sair());
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(14, "svg", 70);
    \u0275\u0275element(15, "path", 71);
    \u0275\u0275elementEnd();
    \u0275\u0275text(16, " Sair ");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    let tmp_1_0;
    let tmp_2_0;
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate((tmp_1_0 = ctx_r0.authService.currentUser()) == null ? null : tmp_1_0.nome);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate((tmp_2_0 = ctx_r0.authService.currentUser()) == null ? null : tmp_2_0.email);
  }
}
var TopbarComponent = class _TopbarComponent {
  constructor() {
    this.authService = inject(AuthService);
    this.router = inject(Router);
    this.themeService = inject(ThemeService);
    this.layoutService = inject(LayoutService);
    this.notifService = inject(NotificacaoService);
    this.signalrService = inject(SignalrService);
    this.dropdownAberto = signal(false);
    this.notifAberto = signal(false);
    this.notificacoes = signal([]);
    this.carregandoNotif = signal(false);
    this.naoLidas = computed(() => this.notificacoes().filter((n) => !n.lida && n.titulo !== "_dedup").length);
    this.notifVisiveis = computed(() => this.notificacoes().filter((n) => n.titulo !== "_dedup"));
    this.uuidRegex = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i;
  }
  ngOnInit() {
    this.notifService.listar().subscribe({
      next: (r) => this.notificacoes.set(r.dados ?? [])
    });
    const token = this.authService.getAccessToken();
    const user = this.authService.currentUser();
    if (token && user?.academia_id) {
      this.signalrService.startConnection(user.academia_id, token).then(() => {
        this.signalrService.onNovaNotificacao(() => {
          this.notifService.listar().subscribe({
            next: (r) => this.notificacoes.set(r.dados ?? [])
          });
        });
      }).catch(() => {
      });
    }
  }
  get breadcrumb() {
    const url = this.router.url.split("?")[0];
    const segmentos = url.split("/").filter((s) => Boolean(s) && s !== "app" && !this.uuidRegex.test(s));
    if (segmentos.length === 0)
      return "Dashboard";
    const mapa = {
      dashboard: "Dashboard",
      alunos: "Alunos",
      funcionarios: "Professores & Funcion\xE1rios",
      modalidades: "Modalidades",
      turmas: "Turmas",
      horarios: "Hor\xE1rios",
      presencas: "Presen\xE7as",
      graduacao: "Gradua\xE7\xE3o",
      ranking: "Ranking",
      perfil: "Perfil Gamificado",
      configuracoes: "Configura\xE7\xF5es",
      "forgot-password": "Recuperar senha",
      novo: "Novo",
      editar: "Editar",
      historico: "Hist\xF3rico",
      faixas: "Faixas",
      registrar: "Registrar",
      detalhe: "Detalhe",
      catraca: "Catraca"
    };
    return segmentos.map((s) => mapa[s] ?? s).join(" / ");
  }
  alternarDropdown() {
    this.dropdownAberto.update((v) => !v);
    if (this.notifAberto())
      this.notifAberto.set(false);
  }
  fecharDropdown() {
    this.dropdownAberto.set(false);
  }
  abrirNotificacoes() {
    const abrindo = !this.notifAberto();
    this.notifAberto.set(abrindo);
    if (this.dropdownAberto())
      this.dropdownAberto.set(false);
    if (abrindo)
      this.carregarNotificacoes();
  }
  fecharNotificacoes() {
    this.notifAberto.set(false);
  }
  carregarNotificacoes() {
    this.carregandoNotif.set(true);
    this.notifService.listar().subscribe({
      next: (r) => {
        this.notificacoes.set(r.dados ?? []);
        this.carregandoNotif.set(false);
      },
      error: () => this.carregandoNotif.set(false)
    });
  }
  marcarLida(id) {
    this.notifService.marcarLida(id).subscribe({
      next: () => this.notificacoes.update((list) => list.map((n) => n.id === id ? __spreadProps(__spreadValues({}, n), { lida: true }) : n))
    });
  }
  marcarTodasLidas() {
    this.notifService.marcarTodasLidas().subscribe({
      next: () => this.notificacoes.update((list) => list.map((n) => __spreadProps(__spreadValues({}, n), { lida: true })))
    });
  }
  excluir(id) {
    this.notifService.excluir(id).subscribe({
      next: () => this.notificacoes.update((list) => list.filter((n) => n.id !== id))
    });
  }
  iconeTipo(tipo) {
    if (tipo === "aniversario")
      return "\u{1F382}";
    if (tipo === "alerta")
      return "\u26A0\uFE0F";
    return "\u2139\uFE0F";
  }
  sair() {
    this.fecharDropdown();
    this.authService.logout();
  }
  static {
    this.\u0275fac = function TopbarComponent_Factory(t) {
      return new (t || _TopbarComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _TopbarComponent, selectors: [["app-topbar"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 32, vars: 8, consts: [[1, "topbar"], ["type", "button", "aria-label", "Menu", 1, "hamburger-btn", 3, "click"], ["width", "20", "height", "20", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2", "stroke-linecap", "round"], ["x1", "3", "y1", "6", "x2", "21", "y2", "6"], ["x1", "3", "y1", "12", "x2", "21", "y2", "12"], ["x1", "3", "y1", "18", "x2", "21", "y2", "18"], [1, "topbar-breadcrumb"], ["width", "14", "height", "14", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "1.5", "stroke-linecap", "round"], ["d", "M9 18l6-6-6-6"], [1, "topbar-page"], [1, "topbar-actions"], ["type", "button", 1, "notif-btn", 3, "click", "title"], ["width", "18", "height", "18", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "1.75", "stroke-linecap", "round", "stroke-linejoin", "round"], [1, "notif-wrap"], ["type", "button", "title", "Notifica\xE7\xF5es", 1, "notif-btn", 3, "click"], ["d", "M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"], [1, "notif-badge"], [1, "dropdown-wrap"], ["type", "button", 1, "user-btn", 3, "click"], [1, "user-avatar"], [1, "user-name"], ["d", "M19 9l-7 7-7-7"], ["cx", "12", "cy", "12", "r", "5"], ["x1", "12", "y1", "1", "x2", "12", "y2", "3"], ["x1", "12", "y1", "21", "x2", "12", "y2", "23"], ["x1", "4.22", "y1", "4.22", "x2", "5.64", "y2", "5.64"], ["x1", "18.36", "y1", "18.36", "x2", "19.78", "y2", "19.78"], ["x1", "1", "y1", "12", "x2", "3", "y2", "12"], ["x1", "21", "y1", "12", "x2", "23", "y2", "12"], ["x1", "4.22", "y1", "19.78", "x2", "5.64", "y2", "18.36"], ["x1", "18.36", "y1", "5.64", "x2", "19.78", "y2", "4.22"], ["d", "M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"], [1, "notif-overlay", 3, "click"], [1, "notif-panel"], [1, "notif-panel-header"], [1, "notif-panel-title"], [1, "notif-mark-all"], [1, "notif-loading"], [1, "notif-mark-all", 3, "click"], [1, "notif-skeleton"], [1, "notif-empty"], ["width", "32", "height", "32", "fill", "none", "stroke", "currentColor", "stroke-width", "1.5", "viewBox", "0 0 24 24", 2, "color", "var(--app-text-3)"], [1, "notif-list"], [1, "notif-item", 3, "notif-nao-lida"], [1, "notif-item"], [1, "notif-icone"], [1, "notif-conteudo"], [1, "notif-titulo"], [1, "notif-mensagem"], [1, "notif-tempo"], [1, "notif-acoes"], ["title", "Marcar como lida", 1, "notif-acao-btn"], ["title", "Remover", 1, "notif-acao-btn", "notif-acao-del", 3, "click"], ["width", "12", "height", "12", "fill", "none", "stroke", "currentColor", "stroke-width", "2", "viewBox", "0 0 24 24"], ["x1", "18", "y1", "6", "x2", "6", "y2", "18"], ["x1", "6", "y1", "6", "x2", "18", "y2", "18"], ["title", "Marcar como lida", 1, "notif-acao-btn", 3, "click"], ["width", "12", "height", "12", "fill", "none", "stroke", "currentColor", "stroke-width", "2.5", "viewBox", "0 0 24 24"], ["points", "20 6 9 17 4 12"], [1, "dropdown-overlay", 3, "click"], [1, "dropdown-menu"], [1, "dropdown-header"], [1, "dropdown-user-name"], [1, "dropdown-email"], [1, "dropdown-items"], ["routerLink", "/app/configuracoes", 1, "dropdown-link", 3, "click"], ["width", "14", "height", "14", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "1.75", "stroke-linecap", "round"], ["cx", "12", "cy", "8", "r", "4"], ["d", "M6 20v-1a6 6 0 0 1 12 0v1"], ["type", "button", 1, "dropdown-link", "danger", 3, "click"], ["width", "14", "height", "14", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "1.75", "stroke-linecap", "round", "stroke-linejoin", "round"], ["d", "M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4M16 17l5-5-5-5M21 12H9"]], template: function TopbarComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "header", 0)(1, "button", 1);
        \u0275\u0275listener("click", function TopbarComponent_Template_button_click_1_listener() {
          return ctx.layoutService.toggleSidebar();
        });
        \u0275\u0275namespaceSVG();
        \u0275\u0275elementStart(2, "svg", 2);
        \u0275\u0275element(3, "line", 3)(4, "line", 4)(5, "line", 5);
        \u0275\u0275elementEnd()();
        \u0275\u0275namespaceHTML();
        \u0275\u0275elementStart(6, "nav", 6)(7, "span");
        \u0275\u0275text(8, "Tatame");
        \u0275\u0275elementEnd();
        \u0275\u0275namespaceSVG();
        \u0275\u0275elementStart(9, "svg", 7);
        \u0275\u0275element(10, "path", 8);
        \u0275\u0275elementEnd();
        \u0275\u0275namespaceHTML();
        \u0275\u0275elementStart(11, "span", 9);
        \u0275\u0275text(12);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(13, "div", 10)(14, "button", 11);
        \u0275\u0275listener("click", function TopbarComponent_Template_button_click_14_listener() {
          return ctx.themeService.toggle();
        });
        \u0275\u0275template(15, TopbarComponent_Conditional_15_Template, 10, 0, ":svg:svg", 12)(16, TopbarComponent_Conditional_16_Template, 2, 0);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(17, "div", 13)(18, "button", 14);
        \u0275\u0275listener("click", function TopbarComponent_Template_button_click_18_listener() {
          return ctx.abrirNotificacoes();
        });
        \u0275\u0275namespaceSVG();
        \u0275\u0275elementStart(19, "svg", 12);
        \u0275\u0275element(20, "path", 15);
        \u0275\u0275elementEnd();
        \u0275\u0275template(21, TopbarComponent_Conditional_21_Template, 2, 1, "span", 16);
        \u0275\u0275elementEnd();
        \u0275\u0275template(22, TopbarComponent_Conditional_22_Template, 9, 2);
        \u0275\u0275elementEnd();
        \u0275\u0275namespaceHTML();
        \u0275\u0275elementStart(23, "div", 17)(24, "button", 18);
        \u0275\u0275listener("click", function TopbarComponent_Template_button_click_24_listener() {
          return ctx.alternarDropdown();
        });
        \u0275\u0275elementStart(25, "div", 19);
        \u0275\u0275text(26);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(27, "span", 20);
        \u0275\u0275text(28);
        \u0275\u0275elementEnd();
        \u0275\u0275namespaceSVG();
        \u0275\u0275elementStart(29, "svg", 7);
        \u0275\u0275element(30, "path", 21);
        \u0275\u0275elementEnd()();
        \u0275\u0275template(31, TopbarComponent_Conditional_31_Template, 17, 2);
        \u0275\u0275elementEnd()()();
      }
      if (rf & 2) {
        let tmp_5_0;
        let tmp_6_0;
        \u0275\u0275advance(12);
        \u0275\u0275textInterpolate(ctx.breadcrumb);
        \u0275\u0275advance(2);
        \u0275\u0275property("title", ctx.themeService.isDark() ? "Tema claro" : "Tema escuro");
        \u0275\u0275advance();
        \u0275\u0275conditional(15, ctx.themeService.isDark() ? 15 : 16);
        \u0275\u0275advance(6);
        \u0275\u0275conditional(21, ctx.naoLidas() > 0 ? 21 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(22, ctx.notifAberto() ? 22 : -1);
        \u0275\u0275advance(4);
        \u0275\u0275textInterpolate(((tmp_5_0 = (tmp_5_0 = ctx.authService.currentUser()) == null ? null : tmp_5_0.nome) !== null && tmp_5_0 !== void 0 ? tmp_5_0 : "U").charAt(0).toUpperCase());
        \u0275\u0275advance(2);
        \u0275\u0275textInterpolate((tmp_6_0 = (tmp_6_0 = ctx.authService.currentUser()) == null ? null : tmp_6_0.nome) !== null && tmp_6_0 !== void 0 ? tmp_6_0 : "Usu\xE1rio");
        \u0275\u0275advance(3);
        \u0275\u0275conditional(31, ctx.dropdownAberto() ? 31 : -1);
      }
    }, dependencies: [CommonModule, RouterLink], styles: ['\n\n[_nghost-%COMP%] {\n  display: block;\n  --bg-2: #111111;\n  --fg: #fafaf7;\n  --fg-2: #c9c8c2;\n  --fg-3: #8a8985;\n  --line: #232323;\n  --accent: #ff4d2e;\n}\nhtml:not(.dark)[_nghost-%COMP%], html:not(.dark)   [_nghost-%COMP%] {\n  --bg-2: #ffffff;\n  --fg: #1e293b;\n  --fg-2: #475569;\n  --fg-3: #94a3b8;\n  --line: #e2e8f0;\n  --accent: #6366f1;\n}\n.topbar[_ngcontent-%COMP%] {\n  height: 56px;\n  background: var(--bg-2);\n  border-bottom: 1px solid var(--line);\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 0 24px;\n  flex-shrink: 0;\n  font-family:\n    "Inter",\n    system-ui,\n    -apple-system,\n    sans-serif;\n  -webkit-font-smoothing: antialiased;\n}\n.hamburger-btn[_ngcontent-%COMP%] {\n  display: none;\n  width: 36px;\n  height: 36px;\n  background: transparent;\n  border: none;\n  cursor: pointer;\n  color: var(--fg-3);\n  align-items: center;\n  justify-content: center;\n  border-radius: 8px;\n  transition: background 120ms ease, color 120ms ease;\n  flex-shrink: 0;\n  margin-right: 4px;\n}\n.hamburger-btn[_ngcontent-%COMP%]:hover {\n  background: rgba(128, 128, 128, 0.1);\n  color: var(--fg-2);\n}\n@media (max-width: 768px) {\n  .hamburger-btn[_ngcontent-%COMP%] {\n    display: flex;\n  }\n  .topbar[_ngcontent-%COMP%] {\n    padding: 0 12px;\n  }\n  .user-name[_ngcontent-%COMP%] {\n    display: none;\n  }\n}\n.topbar-breadcrumb[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  font-size: 14px;\n  color: var(--fg-3);\n}\n.topbar-page[_ngcontent-%COMP%] {\n  color: var(--fg);\n  font-weight: 500;\n}\n.topbar-actions[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 4px;\n}\n.notif-btn[_ngcontent-%COMP%] {\n  position: relative;\n  width: 36px;\n  height: 36px;\n  background: transparent;\n  border: none;\n  cursor: pointer;\n  color: var(--fg-3);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  border-radius: 8px;\n  transition: background 120ms ease, color 120ms ease;\n}\n.notif-btn[_ngcontent-%COMP%]:hover {\n  background: rgba(128, 128, 128, 0.1);\n  color: var(--fg-2);\n}\n.notif-badge[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 4px;\n  right: 4px;\n  min-width: 16px;\n  height: 16px;\n  background: #ef4444;\n  border-radius: 99px;\n  font-size: 10px;\n  font-weight: 700;\n  color: #fff;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: 0 3px;\n  line-height: 1;\n}\n.notif-wrap[_ngcontent-%COMP%] {\n  position: relative;\n}\n.notif-overlay[_ngcontent-%COMP%] {\n  position: fixed;\n  inset: 0;\n  z-index: 10;\n}\n.notif-panel[_ngcontent-%COMP%] {\n  position: absolute;\n  right: 0;\n  top: calc(100% + 8px);\n  width: 340px;\n  background: var(--bg-2);\n  border: 1px solid var(--line);\n  border-radius: 12px;\n  z-index: 20;\n  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.4);\n  overflow: hidden;\n}\n.notif-panel-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 14px 16px 12px;\n  border-bottom: 1px solid var(--line);\n}\n.notif-panel-title[_ngcontent-%COMP%] {\n  font-size: 14px;\n  font-weight: 700;\n  color: var(--fg);\n}\n.notif-mark-all[_ngcontent-%COMP%] {\n  font-size: 11px;\n  font-weight: 500;\n  color: var(--accent);\n  background: none;\n  border: none;\n  cursor: pointer;\n  padding: 2px 0;\n}\n.notif-mark-all[_ngcontent-%COMP%]:hover {\n  opacity: 0.75;\n}\n.notif-list[_ngcontent-%COMP%] {\n  max-height: 360px;\n  overflow-y: auto;\n}\n.notif-item[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  gap: 10px;\n  padding: 12px 14px;\n  border-bottom: 1px solid var(--line);\n  transition: background 100ms;\n}\n.notif-item[_ngcontent-%COMP%]:last-child {\n  border-bottom: none;\n}\n.notif-nao-lida[_ngcontent-%COMP%] {\n  background: rgba(99, 102, 241, 0.05);\n}\n.notif-icone[_ngcontent-%COMP%] {\n  font-size: 20px;\n  flex-shrink: 0;\n  margin-top: 1px;\n}\n.notif-conteudo[_ngcontent-%COMP%] {\n  flex: 1;\n  min-width: 0;\n}\n.notif-titulo[_ngcontent-%COMP%] {\n  font-size: 13px;\n  font-weight: 600;\n  color: var(--fg);\n  margin-bottom: 2px;\n}\n.notif-mensagem[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: var(--fg-2);\n  line-height: 1.5;\n}\n.notif-tempo[_ngcontent-%COMP%] {\n  font-size: 11px;\n  color: var(--fg-3);\n  margin-top: 4px;\n}\n.notif-acoes[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 4px;\n  flex-shrink: 0;\n}\n.notif-acao-btn[_ngcontent-%COMP%] {\n  background: none;\n  border: 1px solid transparent;\n  border-radius: 4px;\n  cursor: pointer;\n  padding: 4px;\n  color: var(--fg-3);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  transition: all 0.12s;\n}\n.notif-acao-btn[_ngcontent-%COMP%]:hover {\n  background: rgba(128, 128, 128, 0.1);\n  border-color: rgba(128, 128, 128, 0.2);\n  color: var(--fg);\n}\n.notif-acao-del[_ngcontent-%COMP%]:hover {\n  color: #ef4444;\n  border-color: rgba(239, 68, 68, 0.3);\n  background: rgba(239, 68, 68, 0.08);\n}\n.notif-empty[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  padding: 32px 16px;\n  gap: 8px;\n}\n.notif-empty[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 13px;\n  color: var(--fg-3);\n  margin: 0;\n}\n.notif-loading[_ngcontent-%COMP%] {\n  padding: 12px 14px;\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n}\n.notif-skeleton[_ngcontent-%COMP%] {\n  height: 48px;\n  background: rgba(128, 128, 128, 0.1);\n  border-radius: 8px;\n  animation: _ngcontent-%COMP%_pulse 1.4s ease-in-out infinite;\n}\n@keyframes _ngcontent-%COMP%_pulse {\n  0%, 100% {\n    opacity: 1;\n  }\n  50% {\n    opacity: 0.4;\n  }\n}\n.dropdown-wrap[_ngcontent-%COMP%] {\n  position: relative;\n}\n.user-btn[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  padding: 4px 8px 4px 4px;\n  background: transparent;\n  border: none;\n  cursor: pointer;\n  border-radius: 8px;\n  transition: background 120ms ease;\n  color: var(--fg-3);\n}\n.user-btn[_ngcontent-%COMP%]:hover {\n  background: rgba(128, 128, 128, 0.1);\n}\n.user-avatar[_ngcontent-%COMP%] {\n  width: 30px;\n  height: 30px;\n  border-radius: 50%;\n  background: var(--accent);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 12px;\n  font-weight: 700;\n  color: #0a0a0a;\n  flex-shrink: 0;\n}\n.user-name[_ngcontent-%COMP%] {\n  font-size: 14px;\n  font-weight: 500;\n  color: var(--fg);\n  max-width: 120px;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n.dropdown-overlay[_ngcontent-%COMP%] {\n  position: fixed;\n  inset: 0;\n  z-index: 10;\n}\n.dropdown-menu[_ngcontent-%COMP%] {\n  position: absolute;\n  right: 0;\n  top: calc(100% + 8px);\n  width: 200px;\n  background: var(--bg-2);\n  border: 1px solid var(--line);\n  border-radius: 10px;\n  z-index: 20;\n  overflow: hidden;\n  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.5);\n}\n.dropdown-header[_ngcontent-%COMP%] {\n  padding: 12px 16px;\n  border-bottom: 1px solid var(--line);\n}\n.dropdown-user-name[_ngcontent-%COMP%] {\n  font-size: 13px;\n  font-weight: 600;\n  color: var(--fg);\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n.dropdown-email[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: var(--fg-3);\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  margin-top: 2px;\n}\n.dropdown-items[_ngcontent-%COMP%] {\n  padding: 6px;\n}\n.dropdown-link[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  padding: 8px 10px;\n  font-size: 13px;\n  color: var(--fg-2);\n  text-decoration: none;\n  border-radius: 6px;\n  transition: background 120ms ease;\n  cursor: pointer;\n  border: none;\n  background: transparent;\n  width: 100%;\n  text-align: left;\n  font-family: inherit;\n}\n.dropdown-link[_ngcontent-%COMP%]:hover {\n  background: rgba(128, 128, 128, 0.1);\n}\n.dropdown-link.danger[_ngcontent-%COMP%] {\n  color: #ff6b6b;\n}\n.dropdown-link.danger[_ngcontent-%COMP%]:hover {\n  background: rgba(255, 77, 46, 0.1);\n}\n/*# sourceMappingURL=topbar.component.css.map */'] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(TopbarComponent, { className: "TopbarComponent" });
})();

// src/app/shared/components/toast/toast.component.ts
var _forTrack03 = ($index, $item) => $item.id;
function ToastComponent_For_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 2);
    \u0275\u0275listener("click", function ToastComponent_For_2_Template_div_click_0_listener() {
      const t_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.toastService.remove(t_r2.id));
    });
    \u0275\u0275elementStart(1, "span", 3);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 4);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const t_r2 = ctx.$implicit;
    \u0275\u0275classMapInterpolate1("toast toast-", t_r2.type, "");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(t_r2.type === "success" ? "\u2713" : t_r2.type === "error" ? "\u2715" : "\u2139");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(t_r2.message);
  }
}
var ToastComponent = class _ToastComponent {
  constructor() {
    this.toastService = inject(ToastService);
  }
  static {
    this.\u0275fac = function ToastComponent_Factory(t) {
      return new (t || _ToastComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ToastComponent, selectors: [["app-toast"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 3, vars: 0, consts: [[1, "toast-container"], ["role", "alert", 3, "class"], ["role", "alert", 3, "click"], [1, "toast-icon"], [1, "toast-msg"]], template: function ToastComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0);
        \u0275\u0275repeaterCreate(1, ToastComponent_For_2_Template, 5, 5, "div", 1, _forTrack03);
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        \u0275\u0275advance();
        \u0275\u0275repeater(ctx.toastService.toasts());
      }
    }, styles: ["\n\n.toast-container[_ngcontent-%COMP%] {\n  position: fixed;\n  bottom: 24px;\n  right: 24px;\n  z-index: 9999;\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n  pointer-events: none;\n}\n.toast[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  padding: 13px 18px;\n  border-radius: 10px;\n  font-size: 14px;\n  font-weight: 500;\n  box-shadow: 0 4px 24px rgba(0, 0, 0, 0.18);\n  cursor: pointer;\n  pointer-events: all;\n  animation: _ngcontent-%COMP%_toastIn 0.25s ease;\n  max-width: 380px;\n}\n.toast-success[_ngcontent-%COMP%] {\n  background: #16a34a;\n  color: #fff;\n}\n.toast-error[_ngcontent-%COMP%] {\n  background: #dc2626;\n  color: #fff;\n}\n.toast-info[_ngcontent-%COMP%] {\n  background: #4f46e5;\n  color: #fff;\n}\n.toast-icon[_ngcontent-%COMP%] {\n  font-size: 15px;\n  font-weight: 700;\n  flex-shrink: 0;\n}\n.toast-msg[_ngcontent-%COMP%] {\n  line-height: 1.4;\n}\n@keyframes _ngcontent-%COMP%_toastIn {\n  from {\n    opacity: 0;\n    transform: translateY(10px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n/*# sourceMappingURL=toast.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ToastComponent, { className: "ToastComponent" });
})();

// src/app/shared/layout/shell/shell.component.ts
function ShellComponent_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 4);
    \u0275\u0275listener("click", function ShellComponent_Conditional_2_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.layoutService.fecharSidebar());
    });
    \u0275\u0275elementEnd();
  }
}
var ShellComponent = class _ShellComponent {
  constructor() {
    this.layoutService = inject(LayoutService);
  }
  static {
    this.\u0275fac = function ShellComponent_Factory(t) {
      return new (t || _ShellComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ShellComponent, selectors: [["app-shell"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 8, vars: 1, consts: [[1, "shell"], [1, "sidebar-overlay"], [1, "shell-main"], [1, "shell-content"], [1, "sidebar-overlay", 3, "click"]], template: function ShellComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0);
        \u0275\u0275element(1, "app-sidebar");
        \u0275\u0275template(2, ShellComponent_Conditional_2_Template, 1, 0, "div", 1);
        \u0275\u0275elementStart(3, "div", 2);
        \u0275\u0275element(4, "app-topbar");
        \u0275\u0275elementStart(5, "main", 3);
        \u0275\u0275element(6, "router-outlet");
        \u0275\u0275elementEnd()()();
        \u0275\u0275element(7, "app-toast");
      }
      if (rf & 2) {
        \u0275\u0275advance(2);
        \u0275\u0275conditional(2, ctx.layoutService.sidebarAberta() ? 2 : -1);
      }
    }, dependencies: [RouterOutlet, SidebarComponent, TopbarComponent, ToastComponent], styles: ["\n\n[_nghost-%COMP%] {\n  display: block;\n}\n.shell[_ngcontent-%COMP%] {\n  display: flex;\n  height: 100vh;\n  background: var(--app-bg, #0a0a0a);\n  overflow: hidden;\n}\n.shell-main[_ngcontent-%COMP%] {\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n  min-width: 0;\n  overflow: hidden;\n}\n.shell-content[_ngcontent-%COMP%] {\n  flex: 1;\n  overflow-y: auto;\n  padding: 32px;\n  background: var(--app-content-bg, #f8fafc);\n}\n.sidebar-overlay[_ngcontent-%COMP%] {\n  display: none;\n}\n@media (max-width: 768px) {\n  .shell-content[_ngcontent-%COMP%] {\n    padding: 16px;\n  }\n  .sidebar-overlay[_ngcontent-%COMP%] {\n    display: block;\n    position: fixed;\n    inset: 0;\n    z-index: 199;\n    background: rgba(0, 0, 0, 0.45);\n  }\n}\n/*# sourceMappingURL=shell.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ShellComponent, { className: "ShellComponent" });
})();
export {
  ShellComponent
};
//# sourceMappingURL=chunk-TL6NCNIW.js.map
