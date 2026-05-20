import {
  NIVEL_CONFIG,
  NivelBadgeComponent,
  RankingService
} from "./chunk-BIXVYFE5.js";
import {
  TurmaService
} from "./chunk-MTMOQ3LO.js";
import {
  FormsModule,
  NgControlStatus,
  NgModel,
  NgSelectOption,
  SelectControlValueAccessor,
  ɵNgSelectMultipleOption
} from "./chunk-27M3W3DT.js";
import {
  SignalrService
} from "./chunk-YDDXEPZY.js";
import {
  AuthService
} from "./chunk-64K7TRDC.js";
import "./chunk-RZVP4UO7.js";
import {
  RouterLink
} from "./chunk-QYA4BMW3.js";
import {
  CommonModule,
  NgIf,
  signal,
  ɵsetClassDebugInfo,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵclassProp,
  ɵɵconditional,
  ɵɵdefineComponent,
  ɵɵdirectiveInject,
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
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate3
} from "./chunk-YRJQ7ZE3.js";
import {
  __spreadProps,
  __spreadValues
} from "./chunk-7G5TR5RR.js";

// src/app/shared/components/podium/podium.component.ts
function PodiumComponent_div_0_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 5)(1, "div", 6);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 7);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275element(5, "app-nivel-badge", 8);
    \u0275\u0275elementStart(6, "div", 9);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "div", 10)(9, "span", 11);
    \u0275\u0275text(10, "\u{1F948}");
    \u0275\u0275elementEnd();
    \u0275\u0275text(11, " 2\xBA");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275styleProp("border-color", ctx_r0.cor(ctx_r0.top3[1].nivel));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.inicial(ctx_r0.top3[1].nomeAluno));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r0.top3[1].nomeAluno);
    \u0275\u0275advance();
    \u0275\u0275property("nivel", ctx_r0.top3[1].nivel);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", ctx_r0.top3[1].xpPeriodo, " XP");
  }
}
function PodiumComponent_div_0_div_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 12)(1, "div", 13);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 7);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275element(5, "app-nivel-badge", 8);
    \u0275\u0275elementStart(6, "div", 9);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "div", 14)(9, "span", 11);
    \u0275\u0275text(10, "\u{1F947}");
    \u0275\u0275elementEnd();
    \u0275\u0275text(11, " 1\xBA");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275styleProp("border-color", ctx_r0.cor(ctx_r0.top3[0].nivel));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.inicial(ctx_r0.top3[0].nomeAluno));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r0.top3[0].nomeAluno);
    \u0275\u0275advance();
    \u0275\u0275property("nivel", ctx_r0.top3[0].nivel);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", ctx_r0.top3[0].xpPeriodo, " XP");
  }
}
function PodiumComponent_div_0_div_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 15)(1, "div", 6);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 7);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275element(5, "app-nivel-badge", 8);
    \u0275\u0275elementStart(6, "div", 9);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "div", 16)(9, "span", 11);
    \u0275\u0275text(10, "\u{1F949}");
    \u0275\u0275elementEnd();
    \u0275\u0275text(11, " 3\xBA");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275styleProp("border-color", ctx_r0.cor(ctx_r0.top3[2].nivel));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.inicial(ctx_r0.top3[2].nomeAluno));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r0.top3[2].nomeAluno);
    \u0275\u0275advance();
    \u0275\u0275property("nivel", ctx_r0.top3[2].nivel);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", ctx_r0.top3[2].xpPeriodo, " XP");
  }
}
function PodiumComponent_div_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 1);
    \u0275\u0275template(1, PodiumComponent_div_0_div_1_Template, 12, 6, "div", 2)(2, PodiumComponent_div_0_div_2_Template, 12, 6, "div", 3)(3, PodiumComponent_div_0_div_3_Template, 12, 6, "div", 4);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.top3[1]);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.top3[0]);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.top3[2]);
  }
}
var PodiumComponent = class _PodiumComponent {
  constructor() {
    this.top3 = [];
  }
  inicial(nome) {
    return (nome ?? "U").charAt(0).toUpperCase();
  }
  cor(nivel) {
    return NIVEL_CONFIG[nivel]?.cor ?? "#6366f1";
  }
  static {
    this.\u0275fac = function PodiumComponent_Factory(t) {
      return new (t || _PodiumComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _PodiumComponent, selectors: [["app-podium"]], inputs: { top3: "top3" }, standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 1, vars: 1, consts: [["class", "podium", 4, "ngIf"], [1, "podium"], ["class", "podium-slot silver", 4, "ngIf"], ["class", "podium-slot gold", 4, "ngIf"], ["class", "podium-slot bronze", 4, "ngIf"], [1, "podium-slot", "silver"], [1, "podium-avatar"], [1, "podium-name"], [3, "nivel"], [1, "podium-xp"], [1, "podium-base", "silver-base"], [1, "podium-medal"], [1, "podium-slot", "gold"], [1, "podium-avatar", "gold-ring"], [1, "podium-base", "gold-base"], [1, "podium-slot", "bronze"], [1, "podium-base", "bronze-base"]], template: function PodiumComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275template(0, PodiumComponent_div_0_Template, 4, 3, "div", 0);
      }
      if (rf & 2) {
        \u0275\u0275property("ngIf", ctx.top3.length);
      }
    }, dependencies: [CommonModule, NgIf, NivelBadgeComponent], styles: ["\n\n.podium[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-end;\n  justify-content: center;\n  gap: 12px;\n  margin-bottom: 24px;\n}\n.podium-slot[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 4px;\n  animation: _ngcontent-%COMP%_scale-in 0.4s ease;\n}\n@keyframes _ngcontent-%COMP%_scale-in {\n  from {\n    transform: scale(0);\n    opacity: 0;\n  }\n  to {\n    transform: scale(1);\n    opacity: 1;\n  }\n}\n.podium-avatar[_ngcontent-%COMP%] {\n  width: 52px;\n  height: 52px;\n  border-radius: 50%;\n  background: #e0e7ff;\n  color: #4f46e5;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-weight: 700;\n  font-size: 1.1rem;\n  border: 3px solid;\n}\n.gold[_ngcontent-%COMP%]   .podium-avatar[_ngcontent-%COMP%] {\n  width: 64px;\n  height: 64px;\n  font-size: 1.3rem;\n}\n.podium-name[_ngcontent-%COMP%] {\n  font-size: 0.75rem;\n  font-weight: 600;\n  color: var(--app-text-1);\n  text-align: center;\n  max-width: 80px;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n.podium-xp[_ngcontent-%COMP%] {\n  font-size: 0.7rem;\n  color: var(--app-text-3);\n}\n.podium-base[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 4px;\n  padding: 6px 12px;\n  border-radius: 8px 8px 0 0;\n  font-size: 0.75rem;\n  font-weight: 700;\n  margin-top: 4px;\n}\n.gold-base[_ngcontent-%COMP%] {\n  background: #fef3c7;\n  color: #92400e;\n  padding: 10px 16px;\n}\n.silver-base[_ngcontent-%COMP%] {\n  background: #f1f5f9;\n  color: #475569;\n}\n.bronze-base[_ngcontent-%COMP%] {\n  background: #fff7ed;\n  color: #92400e;\n}\n.podium-medal[_ngcontent-%COMP%] {\n  font-size: 1rem;\n}\n/*# sourceMappingURL=podium.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(PodiumComponent, { className: "PodiumComponent" });
})();

// src/app/features/ranking/pages/leaderboard/leaderboard.component.ts
var _forTrack0 = ($index, $item) => $item.id;
var _forTrack1 = ($index, $item) => $item.alunoId;
var _c0 = () => [1, 2, 3, 4, 5];
var _c1 = () => [];
var _c2 = (a0) => ["/app/ranking/perfil", a0];
function LeaderboardComponent_For_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 9);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const t_r1 = ctx.$implicit;
    \u0275\u0275property("value", t_r1.id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(t_r1.nome);
  }
}
function LeaderboardComponent_Conditional_18_For_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "div", 11);
  }
}
function LeaderboardComponent_Conditional_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 10);
    \u0275\u0275repeaterCreate(1, LeaderboardComponent_Conditional_18_For_2_Template, 1, 0, "div", 11, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275repeater(\u0275\u0275pureFunction0(0, _c0));
  }
}
function LeaderboardComponent_Conditional_19_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 12);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(1, "svg", 13);
    \u0275\u0275element(2, "circle", 14)(3, "line", 15)(4, "line", 16);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(5, "p");
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "button", 17);
    \u0275\u0275listener("click", function LeaderboardComponent_Conditional_19_Template_button_click_7_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.carregar());
    });
    \u0275\u0275text(8, "Tentar novamente");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(ctx_r2.erro());
  }
}
function LeaderboardComponent_Conditional_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 18);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(1, "svg", 19);
    \u0275\u0275element(2, "path", 20);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(3, "p");
    \u0275\u0275text(4, "Nenhum treino registrado ainda.");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p", 21);
    \u0275\u0275text(6, "As presen\xE7as aparecer\xE3o aqui automaticamente.");
    \u0275\u0275elementEnd()();
  }
}
function LeaderboardComponent_Conditional_21_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-podium", 22);
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275property("top3", ctx_r2.top3);
  }
}
function LeaderboardComponent_Conditional_21_For_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td")(2, "strong");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "td")(5, "div", 27)(6, "div", 28);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "span", 29);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(10, "td");
    \u0275\u0275element(11, "app-nivel-badge", 30);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "td")(13, "strong");
    \u0275\u0275text(14);
    \u0275\u0275elementEnd();
    \u0275\u0275text(15, " XP");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "td");
    \u0275\u0275text(17);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "td");
    \u0275\u0275text(19);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "td")(21, "a", 31);
    \u0275\u0275text(22, "Ver perfil");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const item_r4 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275classProp("minha-linha", item_r4.alunoId === (ctx_r2.usuarioLogado == null ? null : ctx_r2.usuarioLogado.sub));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("#", item_r4.posicao, "");
    \u0275\u0275advance(3);
    \u0275\u0275styleProp("border-color", ctx_r2.nivelCor(item_r4.nivel));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r2.avatarInicial(item_r4.nomeAluno));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(item_r4.nomeAluno);
    \u0275\u0275advance(2);
    \u0275\u0275property("nivel", item_r4.nivel);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(item_r4.xpPeriodo);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("", item_r4.xpTotal, " XP");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("\u{1F3C5} ", item_r4.totalConquistas, "");
    \u0275\u0275advance(2);
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(12, _c2, item_r4.alunoId));
  }
}
function LeaderboardComponent_Conditional_21_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, LeaderboardComponent_Conditional_21_Conditional_0_Template, 1, 1, "app-podium", 22);
    \u0275\u0275elementStart(1, "div", 23)(2, "table", 24)(3, "thead")(4, "tr")(5, "th");
    \u0275\u0275text(6, "#");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "th");
    \u0275\u0275text(8, "Aluno");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "th");
    \u0275\u0275text(10, "N\xEDvel");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "th");
    \u0275\u0275text(12, "XP no Per\xEDodo");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "th");
    \u0275\u0275text(14, "XP Total");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "th");
    \u0275\u0275text(16, "Conquistas");
    \u0275\u0275elementEnd();
    \u0275\u0275element(17, "th");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(18, "tbody");
    \u0275\u0275repeaterCreate(19, LeaderboardComponent_Conditional_21_For_20_Template, 23, 14, "tr", 25, _forTrack1);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(21, "div", 26);
    \u0275\u0275text(22);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_2_0;
    let tmp_3_0;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275conditional(0, ctx_r2.top3.length >= 2 ? 0 : -1);
    \u0275\u0275advance(19);
    \u0275\u0275repeater((tmp_2_0 = (tmp_2_0 = ctx_r2.leaderboard()) == null ? null : tmp_2_0.items) !== null && tmp_2_0 !== void 0 ? tmp_2_0 : \u0275\u0275pureFunction0(4, _c1));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate3(" ", (tmp_3_0 = ctx_r2.leaderboard()) == null ? null : tmp_3_0.totalParticipantes, " participantes \xB7 P\xE1gina ", (tmp_3_0 = ctx_r2.leaderboard()) == null ? null : tmp_3_0.pagina, " de ", (tmp_3_0 = ctx_r2.leaderboard()) == null ? null : tmp_3_0.totalPaginas, " ");
  }
}
var LeaderboardComponent = class _LeaderboardComponent {
  constructor(rankingService, turmaService, authService, signalr) {
    this.rankingService = rankingService;
    this.turmaService = turmaService;
    this.authService = authService;
    this.signalr = signalr;
    this.periodo = signal("mensal");
    this.turmaId = signal("");
    this.leaderboard = signal(null);
    this.turmas = signal([]);
    this.carregando = signal(true);
    this.erro = signal("");
  }
  ngOnInit() {
    this.turmaService.getAll({ ativo: true }).subscribe((r) => this.turmas.set(r.dados ?? []));
    this.carregar();
    this.conectarSignalR();
  }
  ngOnDestroy() {
    this.signalr.stopConnection();
  }
  conectarSignalR() {
    const user = this.authService.currentUser();
    if (!user)
      return;
    const token = localStorage.getItem("af_access_token") ?? "";
    const academiaId = user.academia_id ?? "";
    if (!academiaId)
      return;
    this.signalr.startConnection(academiaId, token).then(() => {
      this.signalr.onRankingAtualizado((item) => {
        const lb = this.leaderboard();
        if (!lb)
          return;
        const items = lb.items.map((i) => i.alunoId === item.alunoId ? __spreadValues(__spreadValues({}, i), item) : i);
        this.leaderboard.set(__spreadProps(__spreadValues({}, lb), { items }));
      });
    }).catch(() => {
    });
  }
  carregar() {
    this.carregando.set(true);
    this.erro.set("");
    const obs = this.turmaId() ? this.rankingService.getLeaderboardTurma(this.turmaId(), this.periodo()) : this.rankingService.getLeaderboardAcademia(this.periodo());
    obs.subscribe({
      next: (lb) => {
        this.leaderboard.set(lb);
        this.carregando.set(false);
      },
      error: (err) => {
        const status = err?.status ?? 0;
        if (status === 0) {
          this.erro.set("N\xE3o foi poss\xEDvel conectar ao servidor.");
        } else {
          this.erro.set(`Erro ao carregar ranking (${status}).`);
        }
        this.carregando.set(false);
      }
    });
  }
  get top3() {
    return this.leaderboard()?.items.slice(0, 3) ?? [];
  }
  get restante() {
    return this.leaderboard()?.items.slice(3) ?? [];
  }
  alternarPeriodo(p) {
    this.periodo.set(p);
    this.carregar();
  }
  alternarTurma(id) {
    this.turmaId.set(id);
    this.carregar();
  }
  avatarInicial(nome) {
    return (nome ?? "U").charAt(0).toUpperCase();
  }
  nivelCor(nivel) {
    return NIVEL_CONFIG[nivel]?.cor ?? "#6366f1";
  }
  get usuarioLogado() {
    return this.authService.currentUser();
  }
  static {
    this.\u0275fac = function LeaderboardComponent_Factory(t) {
      return new (t || _LeaderboardComponent)(\u0275\u0275directiveInject(RankingService), \u0275\u0275directiveInject(TurmaService), \u0275\u0275directiveInject(AuthService), \u0275\u0275directiveInject(SignalrService));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _LeaderboardComponent, selectors: [["app-leaderboard"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 22, vars: 6, consts: [[1, "page-container"], [1, "page-header"], [1, "page-title"], [1, "page-subtitle"], [1, "filters-row"], [1, "tabs", 2, "margin-bottom", "0", "border-bottom", "none"], [1, "tab", 3, "click"], [1, "form-input", 2, "max-width", "220px", 3, "ngModelChange", "ngModel"], ["value", ""], [3, "value"], [1, "skeleton-list"], [1, "skeleton-row"], [1, "empty-state", 2, "gap", "16px"], ["width", "48", "height", "48", "fill", "none", "stroke", "currentColor", "stroke-width", "1.5", "viewBox", "0 0 24 24", 2, "color", "var(--color-danger, #ef4444)"], ["cx", "12", "cy", "12", "r", "10"], ["x1", "12", "y1", "8", "x2", "12", "y2", "12"], ["x1", "12", "y1", "16", "x2", "12.01", "y2", "16"], [1, "btn-secondary", 3, "click"], [1, "empty-state"], ["width", "48", "height", "48", "fill", "none", "stroke", "currentColor", "stroke-width", "1.5", "viewBox", "0 0 24 24"], ["d", "M12 2l2.4 7.4H22l-6.2 4.5 2.4 7.4L12 17l-6.2 4.3 2.4-7.4L2 9.4h7.6z"], [2, "font-size", "13px", "color", "var(--color-text-secondary)"], [3, "top3"], [1, "table-wrapper"], [1, "data-table"], [3, "minha-linha"], [1, "summary-card", 2, "margin-top", "12px"], [2, "display", "flex", "align-items", "center", "gap", "10px"], [1, "presenca-avatar", 2, "border", "2px solid"], [1, "font-medium"], [3, "nivel"], [1, "action-link", 3, "routerLink"]], template: function LeaderboardComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div")(3, "h1", 2);
        \u0275\u0275text(4, "Ranking");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(5, "p", 3);
        \u0275\u0275text(6, "Classifica\xE7\xE3o dos alunos da academia");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(7, "div", 4)(8, "div", 5)(9, "button", 6);
        \u0275\u0275listener("click", function LeaderboardComponent_Template_button_click_9_listener() {
          return ctx.alternarPeriodo("mensal");
        });
        \u0275\u0275text(10, "Mensal");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(11, "button", 6);
        \u0275\u0275listener("click", function LeaderboardComponent_Template_button_click_11_listener() {
          return ctx.alternarPeriodo("historico");
        });
        \u0275\u0275text(12, "Hist\xF3rico");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(13, "select", 7);
        \u0275\u0275listener("ngModelChange", function LeaderboardComponent_Template_select_ngModelChange_13_listener($event) {
          return ctx.alternarTurma($event);
        });
        \u0275\u0275elementStart(14, "option", 8);
        \u0275\u0275text(15, "Academia inteira");
        \u0275\u0275elementEnd();
        \u0275\u0275repeaterCreate(16, LeaderboardComponent_For_17_Template, 2, 2, "option", 9, _forTrack0);
        \u0275\u0275elementEnd()();
        \u0275\u0275template(18, LeaderboardComponent_Conditional_18_Template, 3, 1, "div", 10)(19, LeaderboardComponent_Conditional_19_Template, 9, 1)(20, LeaderboardComponent_Conditional_20_Template, 7, 0)(21, LeaderboardComponent_Conditional_21_Template, 23, 5);
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        let tmp_4_0;
        \u0275\u0275advance(9);
        \u0275\u0275classProp("active", ctx.periodo() === "mensal");
        \u0275\u0275advance(2);
        \u0275\u0275classProp("active", ctx.periodo() === "historico");
        \u0275\u0275advance(2);
        \u0275\u0275property("ngModel", ctx.turmaId());
        \u0275\u0275advance(3);
        \u0275\u0275repeater(ctx.turmas());
        \u0275\u0275advance(2);
        \u0275\u0275conditional(18, ctx.carregando() ? 18 : ctx.erro() ? 19 : !((tmp_4_0 = ctx.leaderboard()) == null ? null : tmp_4_0.items == null ? null : tmp_4_0.items.length) ? 20 : 21);
      }
    }, dependencies: [CommonModule, FormsModule, NgSelectOption, \u0275NgSelectMultipleOption, SelectControlValueAccessor, NgControlStatus, NgModel, RouterLink, NivelBadgeComponent, PodiumComponent], styles: [".minha-linha[_ngcontent-%COMP%] { background: rgba(99,102,241,0.06); font-weight: 600; }"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(LeaderboardComponent, { className: "LeaderboardComponent" });
})();
export {
  LeaderboardComponent
};
//# sourceMappingURL=chunk-CZMOGPAP.js.map
