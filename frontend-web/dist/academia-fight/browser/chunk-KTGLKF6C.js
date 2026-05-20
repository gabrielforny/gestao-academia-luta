import {
  ModeloContratoService
} from "./chunk-WIR67AHK.js";
import {
  ContratoService
} from "./chunk-WG3326B2.js";
import {
  NivelBadgeComponent,
  RankingService
} from "./chunk-4XDIJ2YJ.js";
import {
  PresencaService
} from "./chunk-2KPND5UV.js";
import {
  GraduacaoService
} from "./chunk-YRGTKKTY.js";
import {
  UsuarioService
} from "./chunk-VQGWIR3Q.js";
import {
  DefaultValueAccessor,
  FormsModule,
  MinValidator,
  NgControlStatus,
  NgModel,
  NgSelectOption,
  NumberValueAccessor,
  SelectControlValueAccessor,
  ɵNgSelectMultipleOption
} from "./chunk-7HGCDVPZ.js";
import {
  ToastService
} from "./chunk-3XU5ZCND.js";
import {
  FinanceiroService
} from "./chunk-LXEKVDDV.js";
import {
  ModalidadeService
} from "./chunk-FSZKUW37.js";
import {
  AlunoService
} from "./chunk-RY6KEV5S.js";
import "./chunk-RZVP4UO7.js";
import {
  ActivatedRoute,
  DomSanitizer,
  Router,
  RouterLink
} from "./chunk-CPMJ3O6H.js";
import {
  CommonModule,
  NgClass,
  computed,
  inject,
  signal,
  ɵsetClassDebugInfo,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵclassMap,
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
  ɵɵsanitizeHtml,
  ɵɵsanitizeUrl,
  ɵɵstyleProp,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2
} from "./chunk-7TD4H62Z.js";
import "./chunk-7G5TR5RR.js";

// src/app/features/alunos/pages/detalhe/aluno-detalhe.component.ts
var _forTrack0 = ($index, $item) => $item.modalidadeId;
var _forTrack1 = ($index, $item) => $item.id;
var _c0 = () => [1, 2, 3];
var _c1 = (a0) => ["/app/alunos", a0, "editar"];
var _c2 = () => [1, 2, 3, 4];
var _c3 = () => [1, 2];
function AlunoDetalheComponent_Conditional_0_For_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "div", 3);
  }
}
function AlunoDetalheComponent_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 0);
    \u0275\u0275element(1, "div", 1);
    \u0275\u0275elementStart(2, "div", 2);
    \u0275\u0275repeaterCreate(3, AlunoDetalheComponent_Conditional_0_For_4_Template, 1, 0, "div", 3, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(3);
    \u0275\u0275repeater(\u0275\u0275pureFunction0(0, _c0));
  }
}
function AlunoDetalheComponent_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 0)(1, "div", 4)(2, "p");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "button", 5);
    \u0275\u0275listener("click", function AlunoDetalheComponent_Conditional_1_Template_button_click_4_listener() {
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
    \u0275\u0275textInterpolate(ctx_r1.erro() || "Aluno n\xE3o encontrado.");
  }
}
function AlunoDetalheComponent_Conditional_2_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 11);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(1, "svg", 27);
    \u0275\u0275element(2, "path", 28);
    \u0275\u0275elementEnd();
    \u0275\u0275text(3, " Entrar em contato ");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275property("href", ctx_r1.wppLink(ctx_r1.aluno().telefone), \u0275\u0275sanitizeUrl);
  }
}
function AlunoDetalheComponent_Conditional_2_Conditional_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 20);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("Matr\xEDcula: ", ctx_r1.aluno().matricula, "");
  }
}
function AlunoDetalheComponent_Conditional_2_Conditional_21_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 29);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275styleProp("background", ctx_r1.faixaCor(ctx_r1.aluno().faixaAtualCor) + "22")("color", ctx_r1.faixaCor(ctx_r1.aluno().faixaAtualCor))("border", "1px solid " + ctx_r1.faixaCor(ctx_r1.aluno().faixaAtualCor) + "55");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.aluno().faixaAtualNome, " ");
  }
}
function AlunoDetalheComponent_Conditional_2_Conditional_22_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-nivel-badge", 22);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275property("nivel", ctx_r1.perfil().nivel);
  }
}
function AlunoDetalheComponent_Conditional_2_Conditional_23_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 23);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.aluno().email);
  }
}
function AlunoDetalheComponent_Conditional_2_Conditional_35_Conditional_21_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "div", 60);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275styleProp("background", ctx_r1.faixaCor(ctx_r1.aluno().faixaAtualCor));
  }
}
function AlunoDetalheComponent_Conditional_2_Conditional_35_Conditional_48_For_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 62)(1, "div", 63);
    \u0275\u0275element(2, "div", 64);
    \u0275\u0275elementStart(3, "div")(4, "div", 65);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div", 66);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(8, "button", 67);
    \u0275\u0275listener("click", function AlunoDetalheComponent_Conditional_2_Conditional_35_Conditional_48_For_5_Template_button_click_8_listener() {
      const g_r6 = \u0275\u0275restoreView(_r5).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r1.abrirModalGraduacao(g_r6.modalidadeId));
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(9, "svg", 47);
    \u0275\u0275element(10, "line", 48)(11, "line", 49);
    \u0275\u0275elementEnd();
    \u0275\u0275text(12, " Graduar ");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const g_r6 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(4);
    \u0275\u0275advance(2);
    \u0275\u0275styleProp("background", ctx_r1.faixaCor(g_r6.corFaixa));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(g_r6.nomeModalidade);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2("", g_r6.nomeFaixa, " \xB7 ", ctx_r1.formatarData(g_r6.dataExame), "");
  }
}
function AlunoDetalheComponent_Conditional_2_Conditional_35_Conditional_48_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 55)(1, "h3", 57);
    \u0275\u0275text(2, "Gradua\xE7\xF5es por modalidade");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 61);
    \u0275\u0275repeaterCreate(4, AlunoDetalheComponent_Conditional_2_Conditional_35_Conditional_48_For_5_Template, 13, 5, "div", 62, _forTrack0);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(4);
    \u0275\u0275repeater(ctx_r1.graduacoesPorModalidade());
  }
}
function AlunoDetalheComponent_Conditional_2_Conditional_35_Conditional_53_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 59)(1, "span", 68);
    \u0275\u0275text(2, "Telefone");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 69);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r1.aluno().telefone);
  }
}
function AlunoDetalheComponent_Conditional_2_Conditional_35_Conditional_54_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 59)(1, "span", 68);
    \u0275\u0275text(2, "Data de nascimento");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 69);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r1.formatarData(ctx_r1.aluno().dataNascimento));
  }
}
function AlunoDetalheComponent_Conditional_2_Conditional_35_Conditional_55_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 59)(1, "span", 68);
    \u0275\u0275text(2, "Tipo de plano");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 69);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r1.aluno().tipoPlano);
  }
}
function AlunoDetalheComponent_Conditional_2_Conditional_35_Conditional_56_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 59)(1, "span", 68);
    \u0275\u0275text(2, "Contato de emerg\xEAncia");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 69);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate2("", ctx_r1.aluno().contatoEmergenciaNome, "", ctx_r1.aluno().contatoEmergenciaTelefone ? " \xB7 " + ctx_r1.aluno().contatoEmergenciaTelefone : "", "");
  }
}
function AlunoDetalheComponent_Conditional_2_Conditional_35_Conditional_57_For_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 20);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const t_r7 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(t_r7);
  }
}
function AlunoDetalheComponent_Conditional_2_Conditional_35_Conditional_57_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 56)(1, "h3", 57);
    \u0275\u0275text(2, "Turmas vinculadas");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 70);
    \u0275\u0275repeaterCreate(4, AlunoDetalheComponent_Conditional_2_Conditional_35_Conditional_57_For_5_Template, 2, 1, "span", 20, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(4);
    \u0275\u0275repeater(ctx_r1.aluno().turmas);
  }
}
function AlunoDetalheComponent_Conditional_2_Conditional_35_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 26)(1, "div", 30)(2, "div", 31)(3, "div", 32);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(4, "svg", 33);
    \u0275\u0275element(5, "path", 34)(6, "circle", 35);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(7, "div")(8, "div", 36);
    \u0275\u0275text(9, "Turmas");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "div", 37);
    \u0275\u0275text(11);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(12, "div", 38)(13, "div", 39);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(14, "svg", 33);
    \u0275\u0275element(15, "circle", 40)(16, "path", 41);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(17, "div", 42)(18, "div", 36);
    \u0275\u0275text(19, "Faixa atual");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "div", 43);
    \u0275\u0275template(21, AlunoDetalheComponent_Conditional_2_Conditional_35_Conditional_21_Template, 1, 2, "div", 44);
    \u0275\u0275elementStart(22, "div", 45);
    \u0275\u0275text(23);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "button", 46);
    \u0275\u0275listener("click", function AlunoDetalheComponent_Conditional_2_Conditional_35_Template_button_click_24_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.abrirModalGraduacao());
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(25, "svg", 47);
    \u0275\u0275element(26, "line", 48)(27, "line", 49);
    \u0275\u0275elementEnd();
    \u0275\u0275text(28, " Graduar ");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(29, "div", 31)(30, "div", 50);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(31, "svg", 33);
    \u0275\u0275element(32, "polygon", 51);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(33, "div")(34, "div", 36);
    \u0275\u0275text(35, "XP Total");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(36, "div", 37);
    \u0275\u0275text(37);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(38, "div", 31)(39, "div", 52);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(40, "svg", 33);
    \u0275\u0275element(41, "path", 53)(42, "polyline", 54);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(43, "div")(44, "div", 36);
    \u0275\u0275text(45, "N\xEDvel");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(46, "div", 45);
    \u0275\u0275text(47);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275template(48, AlunoDetalheComponent_Conditional_2_Conditional_35_Conditional_48_Template, 6, 0, "div", 55);
    \u0275\u0275elementStart(49, "div", 56)(50, "h3", 57);
    \u0275\u0275text(51, "Dados pessoais");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(52, "div", 58);
    \u0275\u0275template(53, AlunoDetalheComponent_Conditional_2_Conditional_35_Conditional_53_Template, 5, 1, "div", 59)(54, AlunoDetalheComponent_Conditional_2_Conditional_35_Conditional_54_Template, 5, 1, "div", 59)(55, AlunoDetalheComponent_Conditional_2_Conditional_35_Conditional_55_Template, 5, 1, "div", 59)(56, AlunoDetalheComponent_Conditional_2_Conditional_35_Conditional_56_Template, 5, 2, "div", 59);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(57, AlunoDetalheComponent_Conditional_2_Conditional_35_Conditional_57_Template, 6, 0, "div", 56);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_4_0;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(11);
    \u0275\u0275textInterpolate(ctx_r1.aluno().turmas.length);
    \u0275\u0275advance(10);
    \u0275\u0275conditional(21, ctx_r1.aluno().faixaAtualCor ? 21 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate((tmp_4_0 = ctx_r1.aluno().faixaAtualNome) !== null && tmp_4_0 !== void 0 ? tmp_4_0 : "\u2014");
    \u0275\u0275advance(14);
    \u0275\u0275textInterpolate(ctx_r1.aluno().xpTotal);
    \u0275\u0275advance(10);
    \u0275\u0275textInterpolate(ctx_r1.aluno().nivel);
    \u0275\u0275advance();
    \u0275\u0275conditional(48, ctx_r1.graduacoesPorModalidade().length > 0 ? 48 : -1);
    \u0275\u0275advance(5);
    \u0275\u0275conditional(53, ctx_r1.aluno().telefone ? 53 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(54, ctx_r1.aluno().dataNascimento ? 54 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(55, ctx_r1.aluno().tipoPlano ? 55 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(56, ctx_r1.aluno().contatoEmergenciaNome ? 56 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(57, ctx_r1.aluno().turmas.length > 0 ? 57 : -1);
  }
}
function AlunoDetalheComponent_Conditional_2_Conditional_36_Conditional_12_For_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "div", 3);
  }
}
function AlunoDetalheComponent_Conditional_2_Conditional_36_Conditional_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 2);
    \u0275\u0275repeaterCreate(1, AlunoDetalheComponent_Conditional_2_Conditional_36_Conditional_12_For_2_Template, 1, 0, "div", 3, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275repeater(\u0275\u0275pureFunction0(0, _c2));
  }
}
function AlunoDetalheComponent_Conditional_2_Conditional_36_Conditional_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 76)(1, "p");
    \u0275\u0275text(2, "Nenhuma presen\xE7a encontrada no per\xEDodo.");
    \u0275\u0275elementEnd()();
  }
}
function AlunoDetalheComponent_Conditional_2_Conditional_36_Conditional_14_For_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 81)(1, "div", 82);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(2, "svg", 83);
    \u0275\u0275element(3, "polyline", 84);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(4, "div", 85)(5, "div", 79);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "div", 86);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "div", 87);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const p_r9 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(4);
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(p_r9.nomeTurma);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(p_r9.horaCheckin ? p_r9.horaCheckin.substring(0, 5) : "");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.formatarData(p_r9.data));
  }
}
function AlunoDetalheComponent_Conditional_2_Conditional_36_Conditional_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 77)(1, "div", 78)(2, "span", 79);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "div", 80);
    \u0275\u0275repeaterCreate(5, AlunoDetalheComponent_Conditional_2_Conditional_36_Conditional_14_For_6_Template, 11, 3, "div", 81, _forTrack1);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate2("", ctx_r1.presencas().length, " presen\xE7a", ctx_r1.presencas().length !== 1 ? "s" : "", "");
    \u0275\u0275advance(2);
    \u0275\u0275repeater(ctx_r1.presencas());
  }
}
function AlunoDetalheComponent_Conditional_2_Conditional_36_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 26)(1, "div", 71)(2, "div", 72)(3, "label", 73);
    \u0275\u0275text(4, "De");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "input", 74);
    \u0275\u0275listener("ngModelChange", function AlunoDetalheComponent_Conditional_2_Conditional_36_Template_input_ngModelChange_5_listener($event) {
      \u0275\u0275restoreView(_r8);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.presencasDe.set($event));
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "div", 72)(7, "label", 73);
    \u0275\u0275text(8, "At\xE9");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "input", 74);
    \u0275\u0275listener("ngModelChange", function AlunoDetalheComponent_Conditional_2_Conditional_36_Template_input_ngModelChange_9_listener($event) {
      \u0275\u0275restoreView(_r8);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.presencasAte.set($event));
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "button", 75);
    \u0275\u0275listener("click", function AlunoDetalheComponent_Conditional_2_Conditional_36_Template_button_click_10_listener() {
      \u0275\u0275restoreView(_r8);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.carregarPresencas(ctx_r1.aluno().id));
    });
    \u0275\u0275text(11, "Filtrar");
    \u0275\u0275elementEnd()();
    \u0275\u0275template(12, AlunoDetalheComponent_Conditional_2_Conditional_36_Conditional_12_Template, 3, 1, "div", 2)(13, AlunoDetalheComponent_Conditional_2_Conditional_36_Conditional_13_Template, 3, 0)(14, AlunoDetalheComponent_Conditional_2_Conditional_36_Conditional_14_Template, 7, 2);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(5);
    \u0275\u0275property("ngModel", ctx_r1.presencasDe());
    \u0275\u0275advance(4);
    \u0275\u0275property("ngModel", ctx_r1.presencasAte());
    \u0275\u0275advance(3);
    \u0275\u0275conditional(12, ctx_r1.carregandoPresencas() ? 12 : ctx_r1.presencas().length === 0 ? 13 : 14);
  }
}
function AlunoDetalheComponent_Conditional_2_Conditional_37_Conditional_1_For_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "div", 3);
  }
}
function AlunoDetalheComponent_Conditional_2_Conditional_37_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 2);
    \u0275\u0275repeaterCreate(1, AlunoDetalheComponent_Conditional_2_Conditional_37_Conditional_1_For_2_Template, 1, 0, "div", 3, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275repeater(\u0275\u0275pureFunction0(0, _c2));
  }
}
function AlunoDetalheComponent_Conditional_2_Conditional_37_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 76)(1, "p");
    \u0275\u0275text(2, "Nenhum pagamento registrado para este aluno.");
    \u0275\u0275elementEnd()();
  }
}
function AlunoDetalheComponent_Conditional_2_Conditional_37_Conditional_3_For_37_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
  }
  if (rf & 2) {
    const p_r10 = \u0275\u0275nextContext().$implicit;
    const ctx_r1 = \u0275\u0275nextContext(4);
    \u0275\u0275textInterpolate1(" \xB7 Pago: ", ctx_r1.formatarData(p_r10.dataPagamento), " ");
  }
}
function AlunoDetalheComponent_Conditional_2_Conditional_37_Conditional_3_For_37_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
  }
  if (rf & 2) {
    const p_r10 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275textInterpolate1(" \xB7 ", p_r10.formaPagamento, " ");
  }
}
function AlunoDetalheComponent_Conditional_2_Conditional_37_Conditional_3_For_37_Conditional_13_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 103);
    \u0275\u0275listener("click", function AlunoDetalheComponent_Conditional_2_Conditional_37_Conditional_3_For_37_Conditional_13_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r11);
      const p_r10 = \u0275\u0275nextContext().$implicit;
      const ctx_r1 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r1.marcarPagamentoPago(p_r10));
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(1, "svg", 104);
    \u0275\u0275element(2, "polyline", 84);
    \u0275\u0275elementEnd();
    \u0275\u0275text(3, " Pagar ");
    \u0275\u0275elementEnd();
  }
}
function AlunoDetalheComponent_Conditional_2_Conditional_37_Conditional_3_For_37_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 97)(1, "div", 42)(2, "div", 79);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 98);
    \u0275\u0275text(5);
    \u0275\u0275template(6, AlunoDetalheComponent_Conditional_2_Conditional_37_Conditional_3_For_37_Conditional_6_Template, 1, 1)(7, AlunoDetalheComponent_Conditional_2_Conditional_37_Conditional_3_For_37_Conditional_7_Template, 1, 1);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "div", 99)(9, "span", 100);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "span", 101);
    \u0275\u0275text(12);
    \u0275\u0275elementEnd();
    \u0275\u0275template(13, AlunoDetalheComponent_Conditional_2_Conditional_37_Conditional_3_For_37_Conditional_13_Template, 4, 0, "button", 102);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const p_r10 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(4);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(p_r10.descricao || p_r10.tipo);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" Venc: ", ctx_r1.formatarData(p_r10.dataVencimento), " ");
    \u0275\u0275advance();
    \u0275\u0275conditional(6, p_r10.dataPagamento ? 6 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(7, p_r10.formaPagamento ? 7 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275classMap(ctx_r1.badgeStatusPag(p_r10.status));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(p_r10.status);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.formatarMoeda(p_r10.valor));
    \u0275\u0275advance();
    \u0275\u0275conditional(13, p_r10.status === "Pendente" || p_r10.status === "Atrasado" ? 13 : -1);
  }
}
function AlunoDetalheComponent_Conditional_2_Conditional_37_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 88)(1, "div", 31)(2, "div", 52);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(3, "svg", 33);
    \u0275\u0275element(4, "polyline", 84);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(5, "div")(6, "div", 36);
    \u0275\u0275text(7, "Total pago");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "div", 89);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(10, "div", 31)(11, "div", 50);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(12, "svg", 33);
    \u0275\u0275element(13, "circle", 90)(14, "polyline", 91);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(15, "div")(16, "div", 36);
    \u0275\u0275text(17, "Pendente");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "div", 89);
    \u0275\u0275text(19);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(20, "div", 31)(21, "div", 92);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(22, "svg", 33);
    \u0275\u0275element(23, "circle", 90)(24, "line", 93)(25, "line", 94);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(26, "div")(27, "div", 36);
    \u0275\u0275text(28, "Em atraso");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(29, "div", 89);
    \u0275\u0275text(30);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(31, "div", 77)(32, "div", 95)(33, "span", 79);
    \u0275\u0275text(34, "Hist\xF3rico de pagamentos");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(35, "div", 96);
    \u0275\u0275repeaterCreate(36, AlunoDetalheComponent_Conditional_2_Conditional_37_Conditional_3_For_37_Template, 14, 9, "div", 97, _forTrack1);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(9);
    \u0275\u0275textInterpolate(ctx_r1.formatarMoeda(ctx_r1.totalPago()));
    \u0275\u0275advance(10);
    \u0275\u0275textInterpolate(ctx_r1.formatarMoeda(ctx_r1.totalPendente()));
    \u0275\u0275advance(11);
    \u0275\u0275textInterpolate(ctx_r1.formatarMoeda(ctx_r1.totalAtrasado()));
    \u0275\u0275advance(6);
    \u0275\u0275repeater(ctx_r1.pagamentos());
  }
}
function AlunoDetalheComponent_Conditional_2_Conditional_37_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 26);
    \u0275\u0275template(1, AlunoDetalheComponent_Conditional_2_Conditional_37_Conditional_1_Template, 3, 1, "div", 2)(2, AlunoDetalheComponent_Conditional_2_Conditional_37_Conditional_2_Template, 3, 0)(3, AlunoDetalheComponent_Conditional_2_Conditional_37_Conditional_3_Template, 38, 3);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275conditional(1, ctx_r1.carregandoPagamentos() ? 1 : ctx_r1.pagamentos().length === 0 ? 2 : 3);
  }
}
function AlunoDetalheComponent_Conditional_2_Conditional_38_Conditional_1_For_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "div", 3);
  }
}
function AlunoDetalheComponent_Conditional_2_Conditional_38_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 2);
    \u0275\u0275repeaterCreate(1, AlunoDetalheComponent_Conditional_2_Conditional_38_Conditional_1_For_2_Template, 1, 0, "div", 3, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275repeater(\u0275\u0275pureFunction0(0, _c0));
  }
}
function AlunoDetalheComponent_Conditional_2_Conditional_38_Conditional_2_Conditional_38_For_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 108)(1, "span");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 109);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const c_r12 = ctx.$implicit;
    \u0275\u0275property("title", c_r12.descricao);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(c_r12.iconeUrl);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(c_r12.nome);
  }
}
function AlunoDetalheComponent_Conditional_2_Conditional_38_Conditional_2_Conditional_38_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 55)(1, "h3", 57);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 70);
    \u0275\u0275repeaterCreate(4, AlunoDetalheComponent_Conditional_2_Conditional_38_Conditional_2_Conditional_38_For_5_Template, 5, 3, "div", 108, _forTrack1);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(4);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("Conquistas (", ctx_r1.perfil().conquistasDesbloqueadas.length, ")");
    \u0275\u0275advance(2);
    \u0275\u0275repeater(ctx_r1.perfil().conquistasDesbloqueadas);
  }
}
function AlunoDetalheComponent_Conditional_2_Conditional_38_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 30)(1, "div", 31)(2, "div", 32);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(3, "svg", 33);
    \u0275\u0275element(4, "polyline", 105);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(5, "div")(6, "div", 36);
    \u0275\u0275text(7, "Posi\xE7\xE3o global");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "div", 37);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(10, "div", 31)(11, "div", 106);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(12, "svg", 33);
    \u0275\u0275element(13, "path", 34)(14, "circle", 35);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(15, "div")(16, "div", 36);
    \u0275\u0275text(17, "Posi\xE7\xE3o na turma");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "div", 37);
    \u0275\u0275text(19);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(20, "div", 31)(21, "div", 50);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(22, "svg", 33);
    \u0275\u0275element(23, "polygon", 51);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(24, "div")(25, "div", 36);
    \u0275\u0275text(26, "XP este m\xEAs");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(27, "div", 37);
    \u0275\u0275text(28);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(29, "div", 31)(30, "div", 92);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(31, "svg", 33);
    \u0275\u0275element(32, "path", 107);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(33, "div")(34, "div", 36);
    \u0275\u0275text(35, "Sequ\xEAncia");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(36, "div", 37);
    \u0275\u0275text(37);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275template(38, AlunoDetalheComponent_Conditional_2_Conditional_38_Conditional_2_Conditional_38_Template, 6, 1, "div", 55);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(9);
    \u0275\u0275textInterpolate1("#", ctx_r1.perfil().posicaoGlobal, "");
    \u0275\u0275advance(10);
    \u0275\u0275textInterpolate(ctx_r1.perfil().posicaoTurma > 0 ? "#" + ctx_r1.perfil().posicaoTurma : "\u2014");
    \u0275\u0275advance(9);
    \u0275\u0275textInterpolate(ctx_r1.perfil().xpMensal);
    \u0275\u0275advance(9);
    \u0275\u0275textInterpolate1("", ctx_r1.perfil().sequenciaAtual, " dias");
    \u0275\u0275advance();
    \u0275\u0275conditional(38, ctx_r1.perfil().conquistasDesbloqueadas.length > 0 ? 38 : -1);
  }
}
function AlunoDetalheComponent_Conditional_2_Conditional_38_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 76)(1, "p");
    \u0275\u0275text(2, "Dados de ranking n\xE3o dispon\xEDveis.");
    \u0275\u0275elementEnd()();
  }
}
function AlunoDetalheComponent_Conditional_2_Conditional_38_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 26);
    \u0275\u0275template(1, AlunoDetalheComponent_Conditional_2_Conditional_38_Conditional_1_Template, 3, 1, "div", 2)(2, AlunoDetalheComponent_Conditional_2_Conditional_38_Conditional_2_Template, 39, 5)(3, AlunoDetalheComponent_Conditional_2_Conditional_38_Conditional_3_Template, 3, 0);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275conditional(1, ctx_r1.carregandoPerfil() ? 1 : ctx_r1.perfil() ? 2 : 3);
  }
}
function AlunoDetalheComponent_Conditional_2_Conditional_39_Conditional_1_Conditional_7_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r15 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 122);
    \u0275\u0275listener("click", function AlunoDetalheComponent_Conditional_2_Conditional_39_Conditional_1_Conditional_7_Conditional_0_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r15);
      const ctx_r1 = \u0275\u0275nextContext(5);
      return \u0275\u0275resetView(ctx_r1.enviarWppContrato());
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(1, "svg", 123);
    \u0275\u0275element(2, "path", 28);
    \u0275\u0275elementEnd();
    \u0275\u0275text(3, " Enviar via WhatsApp ");
    \u0275\u0275elementEnd();
  }
}
function AlunoDetalheComponent_Conditional_2_Conditional_39_Conditional_1_Conditional_7_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(0, "svg", 115);
    \u0275\u0275element(1, "polyline", 84);
    \u0275\u0275elementEnd();
    \u0275\u0275text(2, " Copiado! ");
  }
}
function AlunoDetalheComponent_Conditional_2_Conditional_39_Conditional_1_Conditional_7_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(0, "svg", 115);
    \u0275\u0275element(1, "rect", 124)(2, "path", 125);
    \u0275\u0275elementEnd();
    \u0275\u0275text(3, " Copiar link ");
  }
}
function AlunoDetalheComponent_Conditional_2_Conditional_39_Conditional_1_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r14 = \u0275\u0275getCurrentView();
    \u0275\u0275template(0, AlunoDetalheComponent_Conditional_2_Conditional_39_Conditional_1_Conditional_7_Conditional_0_Template, 4, 0, "button", 121);
    \u0275\u0275elementStart(1, "button", 75);
    \u0275\u0275listener("click", function AlunoDetalheComponent_Conditional_2_Conditional_39_Conditional_1_Conditional_7_Template_button_click_1_listener() {
      \u0275\u0275restoreView(_r14);
      const ctx_r1 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r1.copiarLinkContrato());
    });
    \u0275\u0275template(2, AlunoDetalheComponent_Conditional_2_Conditional_39_Conditional_1_Conditional_7_Conditional_2_Template, 3, 0)(3, AlunoDetalheComponent_Conditional_2_Conditional_39_Conditional_1_Conditional_7_Conditional_3_Template, 4, 0);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(4);
    \u0275\u0275conditional(0, ctx_r1.aluno().telefone ? 0 : -1);
    \u0275\u0275advance();
    \u0275\u0275classProp("btn-copiado", ctx_r1.linkCopiado());
    \u0275\u0275advance();
    \u0275\u0275conditional(2, ctx_r1.linkCopiado() ? 2 : 3);
  }
}
function AlunoDetalheComponent_Conditional_2_Conditional_39_Conditional_1_Conditional_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " \u23F3 Aguardando assinatura do aluno ");
  }
}
function AlunoDetalheComponent_Conditional_2_Conditional_39_Conditional_1_Conditional_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " \u2713 Assinado por ");
    \u0275\u0275elementStart(1, "strong");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275text(3);
  }
  if (rf & 2) {
    const det_r16 = \u0275\u0275nextContext();
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(det_r16.nomeAssinou);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" em ", ctx_r1.formatarDataHora(det_r16.dataAssinatura), " ");
  }
}
function AlunoDetalheComponent_Conditional_2_Conditional_39_Conditional_1_Conditional_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " \u2715 Contrato cancelado ");
  }
}
function AlunoDetalheComponent_Conditional_2_Conditional_39_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r13 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 110)(1, "div", 111)(2, "button", 7);
    \u0275\u0275listener("click", function AlunoDetalheComponent_Conditional_2_Conditional_39_Conditional_1_Template_button_click_2_listener() {
      \u0275\u0275restoreView(_r13);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.fecharContratoInline());
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(3, "svg", 112);
    \u0275\u0275element(4, "polyline", 9);
    \u0275\u0275elementEnd();
    \u0275\u0275text(5, " Voltar para lista ");
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(6, "div", 113);
    \u0275\u0275template(7, AlunoDetalheComponent_Conditional_2_Conditional_39_Conditional_1_Conditional_7_Template, 4, 4, "button", 114);
    \u0275\u0275elementStart(8, "button", 75);
    \u0275\u0275listener("click", function AlunoDetalheComponent_Conditional_2_Conditional_39_Conditional_1_Template_button_click_8_listener() {
      \u0275\u0275restoreView(_r13);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.imprimirContrato());
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(9, "svg", 115);
    \u0275\u0275element(10, "polyline", 116)(11, "path", 117)(12, "rect", 118);
    \u0275\u0275elementEnd();
    \u0275\u0275text(13, " Imprimir ");
    \u0275\u0275elementEnd()()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(14, "div", 119);
    \u0275\u0275template(15, AlunoDetalheComponent_Conditional_2_Conditional_39_Conditional_1_Conditional_15_Template, 1, 0)(16, AlunoDetalheComponent_Conditional_2_Conditional_39_Conditional_1_Conditional_16_Template, 4, 2)(17, AlunoDetalheComponent_Conditional_2_Conditional_39_Conditional_1_Conditional_17_Template, 1, 0);
    \u0275\u0275elementEnd();
    \u0275\u0275element(18, "div", 120);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const det_r16 = ctx;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(7);
    \u0275\u0275conditional(7, det_r16.status === 1 ? 7 : -1);
    \u0275\u0275advance(7);
    \u0275\u0275classProp("status-assinado", det_r16.status === 2)("status-cancelado", det_r16.status === 3);
    \u0275\u0275advance();
    \u0275\u0275conditional(15, det_r16.status === 1 ? 15 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(16, det_r16.status === 2 ? 16 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(17, det_r16.status === 3 ? 17 : -1);
    \u0275\u0275advance();
    \u0275\u0275property("innerHTML", ctx_r1.contratoConteudoSafe(), \u0275\u0275sanitizeHtml);
  }
}
function AlunoDetalheComponent_Conditional_2_Conditional_39_Conditional_2_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 128);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(4);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.erroContratos());
  }
}
function AlunoDetalheComponent_Conditional_2_Conditional_39_Conditional_2_Conditional_9_For_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "div", 129);
  }
}
function AlunoDetalheComponent_Conditional_2_Conditional_39_Conditional_2_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 2);
    \u0275\u0275repeaterCreate(1, AlunoDetalheComponent_Conditional_2_Conditional_39_Conditional_2_Conditional_9_For_2_Template, 1, 0, "div", 129, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275repeater(\u0275\u0275pureFunction0(0, _c3));
  }
}
function AlunoDetalheComponent_Conditional_2_Conditional_39_Conditional_2_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 76)(1, "p", 130);
    \u0275\u0275text(2, "Nenhum contrato vinculado a este aluno.");
    \u0275\u0275elementEnd()();
  }
}
function AlunoDetalheComponent_Conditional_2_Conditional_39_Conditional_2_Conditional_11_Conditional_0_For_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "div", 3);
  }
}
function AlunoDetalheComponent_Conditional_2_Conditional_39_Conditional_2_Conditional_11_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 2);
    \u0275\u0275repeaterCreate(1, AlunoDetalheComponent_Conditional_2_Conditional_39_Conditional_2_Conditional_11_Conditional_0_For_2_Template, 1, 0, "div", 3, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275repeater(\u0275\u0275pureFunction0(0, _c0));
  }
}
function AlunoDetalheComponent_Conditional_2_Conditional_39_Conditional_2_Conditional_11_Conditional_1_For_15_Template(rf, ctx) {
  if (rf & 1) {
    const _r18 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr")(1, "td", 66);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td")(4, "span", 133);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "td", 134);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "td", 134);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "td", 135)(11, "button", 136);
    \u0275\u0275listener("click", function AlunoDetalheComponent_Conditional_2_Conditional_39_Conditional_2_Conditional_11_Conditional_1_For_15_Template_button_click_11_listener() {
      const c_r19 = \u0275\u0275restoreView(_r18).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(6);
      return \u0275\u0275resetView(ctx_r1.verContratoInline(c_r19.id));
    });
    \u0275\u0275text(12, "Ver contrato");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    let tmp_15_0;
    let tmp_19_0;
    const c_r19 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(6);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate((tmp_15_0 = c_r19.nomeModalidade) !== null && tmp_15_0 !== void 0 ? tmp_15_0 : "\u2014");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngClass", ctx_r1.badgeClassContrato(c_r19.status));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(c_r19.statusLabel);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.formatarData(c_r19.criadoEm));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate((tmp_19_0 = c_r19.nomeAssinou) !== null && tmp_19_0 !== void 0 ? tmp_19_0 : "\u2014");
  }
}
function AlunoDetalheComponent_Conditional_2_Conditional_39_Conditional_2_Conditional_11_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 131)(1, "table", 132)(2, "thead")(3, "tr")(4, "th");
    \u0275\u0275text(5, "Modalidade");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "th");
    \u0275\u0275text(7, "Status");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "th");
    \u0275\u0275text(9, "Criado em");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "th");
    \u0275\u0275text(11, "Assinado por");
    \u0275\u0275elementEnd();
    \u0275\u0275element(12, "th");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(13, "tbody");
    \u0275\u0275repeaterCreate(14, AlunoDetalheComponent_Conditional_2_Conditional_39_Conditional_2_Conditional_11_Conditional_1_For_15_Template, 13, 5, "tr", null, _forTrack1);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(5);
    \u0275\u0275advance(14);
    \u0275\u0275repeater(ctx_r1.contratos());
  }
}
function AlunoDetalheComponent_Conditional_2_Conditional_39_Conditional_2_Conditional_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, AlunoDetalheComponent_Conditional_2_Conditional_39_Conditional_2_Conditional_11_Conditional_0_Template, 3, 1, "div", 2)(1, AlunoDetalheComponent_Conditional_2_Conditional_39_Conditional_2_Conditional_11_Conditional_1_Template, 16, 0);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(4);
    \u0275\u0275conditional(0, ctx_r1.carregandoContratoDetalhe() ? 0 : 1);
  }
}
function AlunoDetalheComponent_Conditional_2_Conditional_39_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r17 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 126)(1, "span", 87);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "button", 127);
    \u0275\u0275listener("click", function AlunoDetalheComponent_Conditional_2_Conditional_39_Conditional_2_Template_button_click_3_listener() {
      \u0275\u0275restoreView(_r17);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.abrirModalNovoContrato());
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(4, "svg", 115);
    \u0275\u0275element(5, "line", 48)(6, "line", 49);
    \u0275\u0275elementEnd();
    \u0275\u0275text(7, " Gerar contrato ");
    \u0275\u0275elementEnd()();
    \u0275\u0275template(8, AlunoDetalheComponent_Conditional_2_Conditional_39_Conditional_2_Conditional_8_Template, 2, 1, "div", 128)(9, AlunoDetalheComponent_Conditional_2_Conditional_39_Conditional_2_Conditional_9_Template, 3, 1, "div", 2)(10, AlunoDetalheComponent_Conditional_2_Conditional_39_Conditional_2_Conditional_10_Template, 3, 0)(11, AlunoDetalheComponent_Conditional_2_Conditional_39_Conditional_2_Conditional_11_Template, 2, 1);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", ctx_r1.contratos().length, " contrato(s)");
    \u0275\u0275advance(6);
    \u0275\u0275conditional(8, ctx_r1.erroContratos() ? 8 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(9, ctx_r1.carregandoContratos() ? 9 : ctx_r1.contratos().length === 0 ? 10 : 11);
  }
}
function AlunoDetalheComponent_Conditional_2_Conditional_39_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 26);
    \u0275\u0275template(1, AlunoDetalheComponent_Conditional_2_Conditional_39_Conditional_1_Template, 19, 9, "div", 110)(2, AlunoDetalheComponent_Conditional_2_Conditional_39_Conditional_2_Template, 12, 3);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_2_0;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275conditional(1, (tmp_2_0 = ctx_r1.contratoDetalhe()) ? 1 : 2, tmp_2_0);
  }
}
function AlunoDetalheComponent_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 0)(1, "div", 6)(2, "button", 7);
    \u0275\u0275listener("click", function AlunoDetalheComponent_Conditional_2_Template_button_click_2_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.voltar());
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(3, "svg", 8);
    \u0275\u0275element(4, "polyline", 9);
    \u0275\u0275elementEnd();
    \u0275\u0275text(5, " Voltar para Alunos ");
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(6, "div", 10);
    \u0275\u0275template(7, AlunoDetalheComponent_Conditional_2_Conditional_7_Template, 4, 1, "a", 11);
    \u0275\u0275elementStart(8, "a", 12);
    \u0275\u0275text(9, "Editar aluno");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(10, "div", 13)(11, "div", 14);
    \u0275\u0275text(12);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "div", 15)(14, "div", 16)(15, "h1", 17);
    \u0275\u0275text(16);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "span", 18);
    \u0275\u0275text(18);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(19, "div", 19);
    \u0275\u0275template(20, AlunoDetalheComponent_Conditional_2_Conditional_20_Template, 2, 1, "span", 20)(21, AlunoDetalheComponent_Conditional_2_Conditional_21_Template, 2, 7, "span", 21)(22, AlunoDetalheComponent_Conditional_2_Conditional_22_Template, 1, 1, "app-nivel-badge", 22);
    \u0275\u0275elementEnd();
    \u0275\u0275template(23, AlunoDetalheComponent_Conditional_2_Conditional_23_Template, 2, 1, "p", 23);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(24, "div", 24)(25, "button", 25);
    \u0275\u0275listener("click", function AlunoDetalheComponent_Conditional_2_Template_button_click_25_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.tabAtiva.set("info"));
    });
    \u0275\u0275text(26, "Informa\xE7\xF5es");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(27, "button", 25);
    \u0275\u0275listener("click", function AlunoDetalheComponent_Conditional_2_Template_button_click_27_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.tabAtiva.set("presencas"));
    });
    \u0275\u0275text(28, "Presen\xE7as");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(29, "button", 25);
    \u0275\u0275listener("click", function AlunoDetalheComponent_Conditional_2_Template_button_click_29_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.tabAtiva.set("financeiro"));
    });
    \u0275\u0275text(30, "Financeiro");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(31, "button", 25);
    \u0275\u0275listener("click", function AlunoDetalheComponent_Conditional_2_Template_button_click_31_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.tabAtiva.set("ranking"));
    });
    \u0275\u0275text(32, "Ranking & XP");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(33, "button", 25);
    \u0275\u0275listener("click", function AlunoDetalheComponent_Conditional_2_Template_button_click_33_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      ctx_r1.tabAtiva.set("contratos");
      return \u0275\u0275resetView(ctx_r1.carregarContratos(ctx_r1.aluno().id));
    });
    \u0275\u0275text(34, "Contratos");
    \u0275\u0275elementEnd()();
    \u0275\u0275template(35, AlunoDetalheComponent_Conditional_2_Conditional_35_Template, 58, 11, "div", 26)(36, AlunoDetalheComponent_Conditional_2_Conditional_36_Template, 15, 3, "div", 26)(37, AlunoDetalheComponent_Conditional_2_Conditional_37_Template, 4, 1, "div", 26)(38, AlunoDetalheComponent_Conditional_2_Conditional_38_Template, 4, 1, "div", 26)(39, AlunoDetalheComponent_Conditional_2_Conditional_39_Template, 3, 1, "div", 26);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(7);
    \u0275\u0275conditional(7, ctx_r1.aluno().telefone ? 7 : -1);
    \u0275\u0275advance();
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(26, _c1, ctx_r1.aluno().id));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r1.avatarInicial(ctx_r1.aluno().nome));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r1.aluno().nome);
    \u0275\u0275advance();
    \u0275\u0275classProp("ativo", ctx_r1.aluno().ativo);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.aluno().ativo ? "Ativo" : "Inativo");
    \u0275\u0275advance(2);
    \u0275\u0275conditional(20, ctx_r1.aluno().matricula ? 20 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(21, ctx_r1.aluno().faixaAtualNome ? 21 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(22, ctx_r1.perfil() ? 22 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(23, ctx_r1.aluno().email ? 23 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275classProp("active", ctx_r1.tabAtiva() === "info");
    \u0275\u0275advance(2);
    \u0275\u0275classProp("active", ctx_r1.tabAtiva() === "presencas");
    \u0275\u0275advance(2);
    \u0275\u0275classProp("active", ctx_r1.tabAtiva() === "financeiro");
    \u0275\u0275advance(2);
    \u0275\u0275classProp("active", ctx_r1.tabAtiva() === "ranking");
    \u0275\u0275advance(2);
    \u0275\u0275classProp("active", ctx_r1.tabAtiva() === "contratos");
    \u0275\u0275advance(2);
    \u0275\u0275conditional(35, ctx_r1.tabAtiva() === "info" ? 35 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(36, ctx_r1.tabAtiva() === "presencas" ? 36 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(37, ctx_r1.tabAtiva() === "financeiro" ? 37 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(38, ctx_r1.tabAtiva() === "ranking" ? 38 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(39, ctx_r1.tabAtiva() === "contratos" ? 39 : -1);
  }
}
function AlunoDetalheComponent_Conditional_3_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 141);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.erroCriacaoContrato());
  }
}
function AlunoDetalheComponent_Conditional_3_For_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 146);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const m_r21 = ctx.$implicit;
    \u0275\u0275property("value", m_r21.id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(m_r21.nome);
  }
}
function AlunoDetalheComponent_Conditional_3_Conditional_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 147);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(1, "svg", 112);
    \u0275\u0275element(2, "circle", 90)(3, "line", 93)(4, "line", 94);
    \u0275\u0275elementEnd();
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", ctx_r1.contratoAvisoExistente(), " ");
  }
}
function AlunoDetalheComponent_Conditional_3_For_25_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 146);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const m_r22 = ctx.$implicit;
    \u0275\u0275property("value", m_r22.id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(m_r22.nome);
  }
}
function AlunoDetalheComponent_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r20 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 137);
    \u0275\u0275listener("click", function AlunoDetalheComponent_Conditional_3_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r20);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.modalContratoAberto.set(false));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(1, "div", 138)(2, "div", 139)(3, "h3");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "button", 140);
    \u0275\u0275listener("click", function AlunoDetalheComponent_Conditional_3_Template_button_click_5_listener() {
      \u0275\u0275restoreView(_r20);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.modalContratoAberto.set(false));
    });
    \u0275\u0275text(6, "\u2715");
    \u0275\u0275elementEnd()();
    \u0275\u0275template(7, AlunoDetalheComponent_Conditional_3_Conditional_7_Template, 2, 1, "div", 141);
    \u0275\u0275elementStart(8, "div", 142)(9, "div", 143)(10, "label", 73);
    \u0275\u0275text(11, "Modalidade");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "select", 144);
    \u0275\u0275listener("ngModelChange", function AlunoDetalheComponent_Conditional_3_Template_select_ngModelChange_12_listener($event) {
      \u0275\u0275restoreView(_r20);
      const ctx_r1 = \u0275\u0275nextContext();
      ctx_r1.contratoModalidadeId.set($event);
      return \u0275\u0275resetView(ctx_r1.onContratoModalidadeChange());
    });
    \u0275\u0275elementStart(13, "option", 145);
    \u0275\u0275text(14, "Sem modalidade espec\xEDfica");
    \u0275\u0275elementEnd();
    \u0275\u0275repeaterCreate(15, AlunoDetalheComponent_Conditional_3_For_16_Template, 2, 2, "option", 146, _forTrack1);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(17, AlunoDetalheComponent_Conditional_3_Conditional_17_Template, 6, 1, "div", 147);
    \u0275\u0275elementStart(18, "div", 148)(19, "label", 73);
    \u0275\u0275text(20, "Modelo de contrato");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "select", 144);
    \u0275\u0275listener("ngModelChange", function AlunoDetalheComponent_Conditional_3_Template_select_ngModelChange_21_listener($event) {
      \u0275\u0275restoreView(_r20);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.contratoModeloId.set($event));
    });
    \u0275\u0275elementStart(22, "option", 145);
    \u0275\u0275text(23, "Template padr\xE3o");
    \u0275\u0275elementEnd();
    \u0275\u0275repeaterCreate(24, AlunoDetalheComponent_Conditional_3_For_25_Template, 2, 2, "option", 146, _forTrack1);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(26, "div", 149)(27, "button", 75);
    \u0275\u0275listener("click", function AlunoDetalheComponent_Conditional_3_Template_button_click_27_listener() {
      \u0275\u0275restoreView(_r20);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.modalContratoAberto.set(false));
    });
    \u0275\u0275text(28, "Cancelar");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(29, "button", 150);
    \u0275\u0275listener("click", function AlunoDetalheComponent_Conditional_3_Template_button_click_29_listener() {
      \u0275\u0275restoreView(_r20);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.criarContrato());
    });
    \u0275\u0275text(30);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    let tmp_1_0;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1("Gerar contrato para ", (tmp_1_0 = ctx_r1.aluno()) == null ? null : tmp_1_0.nome, "");
    \u0275\u0275advance(3);
    \u0275\u0275conditional(7, ctx_r1.erroCriacaoContrato() ? 7 : -1);
    \u0275\u0275advance(5);
    \u0275\u0275property("ngModel", ctx_r1.contratoModalidadeId());
    \u0275\u0275advance(3);
    \u0275\u0275repeater(ctx_r1.modalidades());
    \u0275\u0275advance(2);
    \u0275\u0275conditional(17, ctx_r1.contratoAvisoExistente() ? 17 : -1);
    \u0275\u0275advance(4);
    \u0275\u0275property("ngModel", ctx_r1.contratoModeloId());
    \u0275\u0275advance(3);
    \u0275\u0275repeater(ctx_r1.modelos());
    \u0275\u0275advance(5);
    \u0275\u0275property("disabled", ctx_r1.criandoContrato());
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.criandoContrato() ? "Gerando..." : ctx_r1.contratoAvisoExistente() ? "Confirmar e substituir" : "Gerar contrato", " ");
  }
}
function AlunoDetalheComponent_Conditional_4_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 151);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.erroGrad());
  }
}
function AlunoDetalheComponent_Conditional_4_For_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 146);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const m_r24 = ctx.$implicit;
    \u0275\u0275property("value", m_r24.id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(m_r24.nome);
  }
}
function AlunoDetalheComponent_Conditional_4_For_25_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 146);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const f_r25 = ctx.$implicit;
    \u0275\u0275property("value", f_r25.id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(f_r25.nome);
  }
}
function AlunoDetalheComponent_Conditional_4_For_38_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 146);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const p_r26 = ctx.$implicit;
    \u0275\u0275property("value", p_r26.id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(p_r26.nome);
  }
}
function AlunoDetalheComponent_Conditional_4_Conditional_47_Template(rf, ctx) {
  if (rf & 1) {
    const _r27 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 143)(1, "label", 73);
    \u0275\u0275text(2, "Valor da cobran\xE7a (R$) *");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "input", 159);
    \u0275\u0275listener("ngModelChange", function AlunoDetalheComponent_Conditional_4_Conditional_47_Template_input_ngModelChange_3_listener($event) {
      \u0275\u0275restoreView(_r27);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.gradValorCobranca.set($event));
    });
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275property("ngModel", ctx_r1.gradValorCobranca());
  }
}
function AlunoDetalheComponent_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r23 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 137);
    \u0275\u0275listener("click", function AlunoDetalheComponent_Conditional_4_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r23);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.modalGraduacaoAberto.set(false));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(1, "div", 138)(2, "div", 139)(3, "h3");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "button", 140);
    \u0275\u0275listener("click", function AlunoDetalheComponent_Conditional_4_Template_button_click_5_listener() {
      \u0275\u0275restoreView(_r23);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.modalGraduacaoAberto.set(false));
    });
    \u0275\u0275text(6, "\u2715");
    \u0275\u0275elementEnd()();
    \u0275\u0275template(7, AlunoDetalheComponent_Conditional_4_Conditional_7_Template, 2, 1, "div", 151);
    \u0275\u0275elementStart(8, "div", 142)(9, "div", 152)(10, "div", 143)(11, "label", 73);
    \u0275\u0275text(12, "Modalidade *");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "select", 144);
    \u0275\u0275listener("ngModelChange", function AlunoDetalheComponent_Conditional_4_Template_select_ngModelChange_13_listener($event) {
      \u0275\u0275restoreView(_r23);
      const ctx_r1 = \u0275\u0275nextContext();
      ctx_r1.gradModalidadeId.set($event);
      return \u0275\u0275resetView(ctx_r1.onGradModalidadeChange());
    });
    \u0275\u0275elementStart(14, "option", 145);
    \u0275\u0275text(15, "Selecione...");
    \u0275\u0275elementEnd();
    \u0275\u0275repeaterCreate(16, AlunoDetalheComponent_Conditional_4_For_17_Template, 2, 2, "option", 146, _forTrack1);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(18, "div", 143)(19, "label", 73);
    \u0275\u0275text(20, "Nova gradua\xE7\xE3o *");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "select", 153);
    \u0275\u0275listener("ngModelChange", function AlunoDetalheComponent_Conditional_4_Template_select_ngModelChange_21_listener($event) {
      \u0275\u0275restoreView(_r23);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.gradFaixaId.set($event));
    });
    \u0275\u0275elementStart(22, "option", 145);
    \u0275\u0275text(23);
    \u0275\u0275elementEnd();
    \u0275\u0275repeaterCreate(24, AlunoDetalheComponent_Conditional_4_For_25_Template, 2, 2, "option", 146, _forTrack1);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(26, "div", 152)(27, "div", 143)(28, "label", 73);
    \u0275\u0275text(29, "Data do exame *");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(30, "input", 154);
    \u0275\u0275listener("ngModelChange", function AlunoDetalheComponent_Conditional_4_Template_input_ngModelChange_30_listener($event) {
      \u0275\u0275restoreView(_r23);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.gradData.set($event));
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(31, "div", 143)(32, "label", 73);
    \u0275\u0275text(33, "Professor respons\xE1vel *");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(34, "select", 144);
    \u0275\u0275listener("ngModelChange", function AlunoDetalheComponent_Conditional_4_Template_select_ngModelChange_34_listener($event) {
      \u0275\u0275restoreView(_r23);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.gradProfessorId.set($event));
    });
    \u0275\u0275elementStart(35, "option", 145);
    \u0275\u0275text(36, "Selecione...");
    \u0275\u0275elementEnd();
    \u0275\u0275repeaterCreate(37, AlunoDetalheComponent_Conditional_4_For_38_Template, 2, 2, "option", 146, _forTrack1);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(39, "div", 143)(40, "label", 73);
    \u0275\u0275text(41, "Observa\xE7\xF5es");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(42, "textarea", 155);
    \u0275\u0275listener("ngModelChange", function AlunoDetalheComponent_Conditional_4_Template_textarea_ngModelChange_42_listener($event) {
      \u0275\u0275restoreView(_r23);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.gradObservacoes.set($event));
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(43, "div", 156)(44, "label", 157);
    \u0275\u0275text(45, "Gerar cobran\xE7a financeira");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(46, "input", 158);
    \u0275\u0275listener("change", function AlunoDetalheComponent_Conditional_4_Template_input_change_46_listener() {
      \u0275\u0275restoreView(_r23);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.gradGerarCobranca.set(!ctx_r1.gradGerarCobranca()));
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275template(47, AlunoDetalheComponent_Conditional_4_Conditional_47_Template, 4, 1, "div", 143);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(48, "div", 149)(49, "button", 75);
    \u0275\u0275listener("click", function AlunoDetalheComponent_Conditional_4_Template_button_click_49_listener() {
      \u0275\u0275restoreView(_r23);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.modalGraduacaoAberto.set(false));
    });
    \u0275\u0275text(50, "Cancelar");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(51, "button", 150);
    \u0275\u0275listener("click", function AlunoDetalheComponent_Conditional_4_Template_button_click_51_listener() {
      \u0275\u0275restoreView(_r23);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.registrarGraduacao());
    });
    \u0275\u0275text(52);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    let tmp_1_0;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1("Registrar gradua\xE7\xE3o \u2014 ", (tmp_1_0 = ctx_r1.aluno()) == null ? null : tmp_1_0.nome, "");
    \u0275\u0275advance(3);
    \u0275\u0275conditional(7, ctx_r1.erroGrad() ? 7 : -1);
    \u0275\u0275advance(6);
    \u0275\u0275property("ngModel", ctx_r1.gradModalidadeId());
    \u0275\u0275advance(3);
    \u0275\u0275repeater(ctx_r1.modalidades());
    \u0275\u0275advance(5);
    \u0275\u0275property("ngModel", ctx_r1.gradFaixaId())("disabled", ctx_r1.faixasGrad().length === 0);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.gradModalidadeId() ? "Selecione a faixa..." : "Selecione a modalidade primeiro");
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r1.faixasGrad());
    \u0275\u0275advance(6);
    \u0275\u0275property("ngModel", ctx_r1.gradData());
    \u0275\u0275advance(4);
    \u0275\u0275property("ngModel", ctx_r1.gradProfessorId());
    \u0275\u0275advance(3);
    \u0275\u0275repeater(ctx_r1.professores());
    \u0275\u0275advance(5);
    \u0275\u0275property("ngModel", ctx_r1.gradObservacoes());
    \u0275\u0275advance(2);
    \u0275\u0275property("for", "chk-grad-cobranca");
    \u0275\u0275advance(2);
    \u0275\u0275property("id", "chk-grad-cobranca")("checked", ctx_r1.gradGerarCobranca());
    \u0275\u0275advance();
    \u0275\u0275conditional(47, ctx_r1.gradGerarCobranca() ? 47 : -1);
    \u0275\u0275advance(4);
    \u0275\u0275property("disabled", ctx_r1.registrandoGrad());
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.registrandoGrad() ? "Registrando..." : "Confirmar gradua\xE7\xE3o", " ");
  }
}
var AlunoDetalheComponent = class _AlunoDetalheComponent {
  constructor() {
    this.alunoService = inject(AlunoService);
    this.presencaService = inject(PresencaService);
    this.rankingService = inject(RankingService);
    this.financeiroService = inject(FinanceiroService);
    this.graduacaoService = inject(GraduacaoService);
    this.toastService = inject(ToastService);
    this.modalidadeService = inject(ModalidadeService);
    this.usuarioService = inject(UsuarioService);
    this.contratoService = inject(ContratoService);
    this.modeloContratoService = inject(ModeloContratoService);
    this.sanitizer = inject(DomSanitizer);
    this.route = inject(ActivatedRoute);
    this.router = inject(Router);
    this.aluno = signal(null);
    this.perfil = signal(null);
    this.presencas = signal([]);
    this.pagamentos = signal([]);
    this.carregando = signal(true);
    this.carregandoPerfil = signal(false);
    this.carregandoPresencas = signal(false);
    this.carregandoPagamentos = signal(false);
    this.erro = signal("");
    this.tabAtiva = signal("info");
    this.presencasDe = signal(this.primeiroDiaMes());
    this.presencasAte = signal((/* @__PURE__ */ new Date()).toISOString().split("T")[0]);
    this.contratos = signal([]);
    this.carregandoContratos = signal(false);
    this.erroContratos = signal("");
    this.contratoDetalhe = signal(null);
    this.contratoConteudoSafe = signal("");
    this.carregandoContratoDetalhe = signal(false);
    this.linkCopiado = signal(false);
    this.modalContratoAberto = signal(false);
    this.criandoContrato = signal(false);
    this.erroCriacaoContrato = signal("");
    this.contratoModalidadeId = signal("");
    this.contratoAvisoExistente = signal("");
    this.modelos = signal([]);
    this.contratoModeloId = signal("");
    this.graduacoes = signal([]);
    this.carregandoGraduacoes = signal(false);
    this.graduacoesPorModalidade = computed(() => {
      const map = /* @__PURE__ */ new Map();
      for (const g of this.graduacoes()) {
        const existing = map.get(g.modalidadeId);
        if (!existing || g.dataExame > existing.dataExame) {
          map.set(g.modalidadeId, g);
        }
      }
      return Array.from(map.values());
    });
    this.modalidades = signal([]);
    this.professores = signal([]);
    this.faixasGrad = signal([]);
    this.modalGraduacaoAberto = signal(false);
    this.gradModalidadeId = signal("");
    this.gradFaixaId = signal("");
    this.gradProfessorId = signal("");
    this.gradData = signal((/* @__PURE__ */ new Date()).toISOString().split("T")[0]);
    this.gradObservacoes = signal("");
    this.gradGerarCobranca = signal(false);
    this.gradValorCobranca = signal("");
    this.registrandoGrad = signal(false);
    this.erroGrad = signal("");
    this.graduacaoOk = signal(false);
    this.totalPago = computed(() => this.pagamentos().filter((p) => p.status === "Pago").reduce((s, p) => s + p.valor, 0));
    this.totalPendente = computed(() => this.pagamentos().filter((p) => p.status === "Pendente").reduce((s, p) => s + p.valor, 0));
    this.totalAtrasado = computed(() => this.pagamentos().filter((p) => p.status === "Atrasado").reduce((s, p) => s + p.valor, 0));
  }
  ngOnInit() {
    const id = this.route.snapshot.paramMap.get("id");
    this.alunoService.getById(id).subscribe({
      next: (res) => {
        this.aluno.set(res.dados ?? null);
        this.carregando.set(false);
        if (res.dados) {
          this.carregarPerfil(id);
          this.carregarPresencas(id);
          this.carregarPagamentos(id);
          this.carregarGraduacoes(id);
        }
      },
      error: () => {
        this.erro.set("Aluno n\xE3o encontrado.");
        this.carregando.set(false);
      }
    });
    this.modalidadeService.getAll().subscribe({ next: (r) => this.modalidades.set(r.dados ?? []) });
    this.usuarioService.getProfessores().subscribe({ next: (r) => this.professores.set(r.dados ?? []) });
    this.modeloContratoService.listar().subscribe({ next: (r) => this.modelos.set(r.dados ?? []) });
  }
  carregarPerfil(id) {
    this.carregandoPerfil.set(true);
    this.rankingService.getPerfilGamificado(id).subscribe({
      next: (p) => {
        this.perfil.set(p);
        this.carregandoPerfil.set(false);
      },
      error: () => this.carregandoPerfil.set(false)
    });
  }
  carregarPresencas(id) {
    this.carregandoPresencas.set(true);
    this.presencaService.getHistorico(id, this.presencasDe(), this.presencasAte()).subscribe({
      next: (res) => {
        this.presencas.set(res.dados ?? []);
        this.carregandoPresencas.set(false);
      },
      error: () => this.carregandoPresencas.set(false)
    });
  }
  carregarPagamentos(id) {
    this.carregandoPagamentos.set(true);
    this.financeiroService.listarPorAluno(id).subscribe({
      next: (res) => {
        this.pagamentos.set(res.dados ?? []);
        this.carregandoPagamentos.set(false);
      },
      error: () => this.carregandoPagamentos.set(false)
    });
  }
  marcarPagamentoPago(p) {
    const hoje = (/* @__PURE__ */ new Date()).toISOString().split("T")[0];
    this.financeiroService.atualizar(p.id, { status: 1, dataPagamento: hoje }).subscribe({
      next: () => this.carregarPagamentos(this.aluno().id)
    });
  }
  wppLink(telefone) {
    return `https://wa.me/55${telefone.replace(/\D/g, "")}`;
  }
  // ─── Contratos ───────────────────────────────────────────────
  carregarContratos(alunoId) {
    this.carregandoContratos.set(true);
    this.contratoDetalhe.set(null);
    this.contratoService.listar(alunoId).subscribe({
      next: (res) => {
        this.contratos.set(res.dados ?? []);
        this.carregandoContratos.set(false);
      },
      error: () => {
        this.erroContratos.set("Erro ao carregar contratos.");
        this.carregandoContratos.set(false);
      }
    });
  }
  abrirModalNovoContrato() {
    this.contratoModalidadeId.set("");
    this.contratoModeloId.set("");
    this.erroCriacaoContrato.set("");
    this.contratoAvisoExistente.set("");
    this.modalContratoAberto.set(true);
  }
  onContratoModalidadeChange() {
    const modalidadeId = this.contratoModalidadeId();
    if (!modalidadeId) {
      this.contratoAvisoExistente.set("");
      return;
    }
    const existente = this.contratos().find((c) => c.modalidadeId === modalidadeId && c.status !== 3);
    if (existente) {
      const status = existente.status === 2 ? "assinado" : "pendente";
      this.contratoAvisoExistente.set(`J\xE1 existe um contrato ${status} para esta modalidade. Ao confirmar, ele ser\xE1 descartado e substitu\xEDdo.`);
    } else {
      this.contratoAvisoExistente.set("");
    }
  }
  criarContrato() {
    const id = this.aluno()?.id;
    if (!id)
      return;
    this.criandoContrato.set(true);
    this.erroCriacaoContrato.set("");
    this.contratoService.criar({
      alunoId: id,
      modalidadeId: this.contratoModalidadeId() || void 0,
      modeloContratoId: this.contratoModeloId() || void 0
    }).subscribe({
      next: (res) => {
        this.criandoContrato.set(false);
        if (res.sucesso) {
          this.modalContratoAberto.set(false);
          this.carregarContratos(id);
        } else {
          this.erroCriacaoContrato.set(res.mensagem ?? "Erro ao criar contrato.");
        }
      },
      error: (err) => {
        this.criandoContrato.set(false);
        this.erroCriacaoContrato.set(err.error?.mensagem ?? "Erro ao criar contrato.");
      }
    });
  }
  verContratoInline(contratoId) {
    this.carregandoContratoDetalhe.set(true);
    this.contratoDetalhe.set(null);
    this.contratoService.obter(contratoId).subscribe({
      next: (res) => {
        if (res.dados) {
          this.contratoDetalhe.set(res.dados);
          this.contratoConteudoSafe.set(this.sanitizer.bypassSecurityTrustHtml(res.dados.conteudoHtml));
        }
        this.carregandoContratoDetalhe.set(false);
      },
      error: () => this.carregandoContratoDetalhe.set(false)
    });
  }
  fecharContratoInline() {
    this.contratoDetalhe.set(null);
  }
  linkPublicoContrato() {
    const token = this.contratoDetalhe()?.tokenPublico;
    return token ? `${window.location.origin}/assinar/${token}` : "";
  }
  copiarLinkContrato() {
    navigator.clipboard.writeText(this.linkPublicoContrato()).then(() => {
      this.linkCopiado.set(true);
      setTimeout(() => this.linkCopiado.set(false), 2500);
    });
  }
  enviarWppContrato() {
    const detalhe = this.contratoDetalhe();
    if (!detalhe || !this.aluno()?.telefone)
      return;
    const telefone = this.aluno().telefone.replace(/\D/g, "");
    const link = this.linkPublicoContrato();
    const texto = encodeURIComponent(`Ol\xE1 ${detalhe.nomeAluno}, segue o link para assinar seu contrato:
${link}`);
    window.open(`https://wa.me/55${telefone}?text=${texto}`, "_blank");
  }
  imprimirContrato() {
    const html = this.contratoDetalhe()?.conteudoHtml ?? "";
    const janela = window.open("", "_blank", "width=800,height=900");
    if (!janela)
      return;
    janela.document.write(`<!DOCTYPE html><html lang="pt-BR"><head><meta charset="UTF-8"><title>Contrato</title><style>body{font-family:Arial,sans-serif;padding:40px 60px;font-size:14px;line-height:1.7;color:#111;}h2{font-size:20px;margin-bottom:12px;}h3{font-size:15px;margin:20px 0 8px;}p{margin-bottom:6px;}hr{border:none;border-top:1px solid #ccc;margin:16px 0;}</style></head><body>${html}</body></html>`);
    janela.document.close();
    janela.onload = () => {
      janela.print();
    };
  }
  badgeClassContrato(status) {
    if (status === 2)
      return "badge-ct-assinado";
    if (status === 3)
      return "badge-ct-cancelado";
    return "badge-ct-pendente";
  }
  carregarGraduacoes(id) {
    this.carregandoGraduacoes.set(true);
    this.graduacaoService.getHistoricoAluno(id).subscribe({
      next: (r) => {
        this.graduacoes.set(r.dados ?? []);
        this.carregandoGraduacoes.set(false);
      },
      error: () => this.carregandoGraduacoes.set(false)
    });
  }
  // ─── Graduation ──────────────────────────────────────────────
  abrirModalGraduacao(modalidadePreSelecionada) {
    this.gradModalidadeId.set(modalidadePreSelecionada ?? "");
    this.gradFaixaId.set("");
    this.gradProfessorId.set("");
    this.gradData.set((/* @__PURE__ */ new Date()).toISOString().split("T")[0]);
    this.gradObservacoes.set("");
    this.gradGerarCobranca.set(false);
    this.gradValorCobranca.set("");
    this.erroGrad.set("");
    this.graduacaoOk.set(false);
    this.faixasGrad.set([]);
    this.modalGraduacaoAberto.set(true);
    if (modalidadePreSelecionada)
      this.onGradModalidadeChange();
  }
  onGradModalidadeChange() {
    const mid = this.gradModalidadeId();
    this.gradFaixaId.set("");
    this.faixasGrad.set([]);
    if (!mid)
      return;
    this.graduacaoService.getFaixasByModalidade(mid).subscribe({
      next: (r) => this.faixasGrad.set(r.dados ?? [])
    });
  }
  registrarGraduacao() {
    const alunoId = this.aluno()?.id;
    if (!alunoId)
      return;
    if (!this.gradFaixaId()) {
      this.erroGrad.set("Selecione a faixa/gradua\xE7\xE3o.");
      return;
    }
    if (!this.gradProfessorId()) {
      this.erroGrad.set("Selecione o professor respons\xE1vel.");
      return;
    }
    if (!this.gradData()) {
      this.erroGrad.set("Informe a data do exame.");
      return;
    }
    this.registrandoGrad.set(true);
    this.erroGrad.set("");
    const req = {
      alunoId,
      faixaId: this.gradFaixaId(),
      professorId: this.gradProfessorId(),
      dataExame: this.gradData(),
      aprovado: true,
      observacoes: this.gradObservacoes() || void 0
    };
    this.graduacaoService.registrar(req).subscribe({
      next: (res) => {
        this.registrandoGrad.set(false);
        if (res.sucesso) {
          this.modalGraduacaoAberto.set(false);
          if (this.gradGerarCobranca() && this.gradValorCobranca()) {
            const valor = parseFloat(this.gradValorCobranca().replace(",", "."));
            if (valor > 0) {
              const faixaNome = this.faixasGrad().find((f) => f.id === this.gradFaixaId())?.nome ?? "Gradua\xE7\xE3o";
              const hoje = /* @__PURE__ */ new Date();
              const dataVencimento = `${hoje.getFullYear()}-${String(hoje.getMonth() + 1).padStart(2, "0")}-${String(hoje.getDate()).padStart(2, "0")}`;
              const pag = {
                alunoId,
                tipo: 5,
                status: 2,
                valor,
                descricao: `Gradua\xE7\xE3o - ${faixaNome}`,
                dataVencimento
              };
              this.financeiroService.criar(pag).subscribe();
            }
          }
          this.toastService.success("Gradua\xE7\xE3o registrada com sucesso!");
          this.recarregarAluno();
          this.carregarPagamentos(alunoId);
          this.carregarGraduacoes(alunoId);
        } else {
          this.erroGrad.set(res.mensagem ?? "Erro ao registrar.");
        }
      },
      error: (err) => {
        this.registrandoGrad.set(false);
        this.erroGrad.set(err.error?.mensagem ?? "Erro ao registrar.");
      }
    });
  }
  recarregarAluno() {
    const id = this.route.snapshot.paramMap.get("id");
    this.alunoService.getById(id).subscribe({ next: (r) => this.aluno.set(r.dados ?? null) });
  }
  // ─── Utils ───────────────────────────────────────────────────
  voltar() {
    this.router.navigate(["/app/alunos"]);
  }
  avatarInicial(nome) {
    return (nome ?? "A").charAt(0).toUpperCase();
  }
  faixaCor(cor) {
    return cor ?? "#94a3b8";
  }
  formatarData(d) {
    if (!d)
      return "\u2014";
    const [y, m, day] = d.split("-");
    return `${day}/${m}/${y}`;
  }
  formatarDataHora(d) {
    if (!d)
      return "\u2014";
    return new Date(d).toLocaleString("pt-BR");
  }
  formatarMoeda(valor) {
    return valor.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });
  }
  badgeStatusPag(status) {
    const map = {
      Pago: "badge-pag-pago",
      Pendente: "badge-pag-pendente",
      Atrasado: "badge-pag-atrasado",
      Cancelado: "badge-pag-cancelado"
    };
    return map[status] ?? "";
  }
  primeiroDiaMes() {
    const now = /* @__PURE__ */ new Date();
    return `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, "0")}-01`;
  }
  static {
    this.\u0275fac = function AlunoDetalheComponent_Factory(t) {
      return new (t || _AlunoDetalheComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AlunoDetalheComponent, selectors: [["app-aluno-detalhe"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 5, vars: 3, consts: [[1, "page-container"], [1, "skeleton-header"], [1, "skeleton-list"], [1, "skeleton-row"], [1, "error-card"], [1, "btn-secondary", 2, "margin-top", "12px", 3, "click"], [2, "display", "flex", "align-items", "center", "justify-content", "space-between", "margin-bottom", "20px", "flex-wrap", "wrap", "gap", "10px"], [1, "btn-ghost-back", 3, "click"], ["width", "16", "height", "16", "fill", "none", "stroke", "currentColor", "stroke-width", "2", "viewBox", "0 0 24 24"], ["points", "15 18 9 12 15 6"], [2, "display", "flex", "gap", "8px", "align-items", "center", "flex-wrap", "wrap"], ["target", "_blank", "rel", "noopener", 1, "btn-wpp-contato", 3, "href"], [1, "btn-secondary", 3, "routerLink"], [1, "perfil-header"], [1, "perfil-avatar"], [1, "perfil-header-info"], [2, "display", "flex", "align-items", "center", "gap", "10px", "flex-wrap", "wrap"], [2, "font-size", "1.5rem", "font-weight", "700", "margin", "0", "color", "var(--app-text-1)"], [1, "status-badge"], [2, "display", "flex", "align-items", "center", "gap", "8px", "margin-top", "6px", "flex-wrap", "wrap"], [1, "info-chip"], [1, "faixa-chip", 3, "background", "color", "border"], [3, "nivel"], [2, "font-size", "13px", "color", "var(--app-text-3)", "margin", "6px 0 0"], [1, "tabs", 2, "margin-top", "24px"], [1, "tab", 3, "click"], [1, "tab-content"], ["width", "15", "height", "15", "viewBox", "0 0 24 24", "fill", "currentColor"], ["d", "M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"], [1, "faixa-chip"], [1, "info-cards-row"], [1, "info-card"], [1, "info-card-icon", 2, "background", "rgba(99,102,241,0.1)", "color", "#6366f1"], ["width", "18", "height", "18", "fill", "none", "stroke", "currentColor", "stroke-width", "2", "viewBox", "0 0 24 24"], ["d", "M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"], ["cx", "9", "cy", "7", "r", "4"], [1, "info-card-label"], [1, "info-card-value"], [1, "info-card", 2, "cursor", "default"], [1, "info-card-icon", 2, "background", "rgba(168,85,247,0.1)", "color", "#a855f7"], ["cx", "12", "cy", "8", "r", "6"], ["d", "M15.477 12.89L17 22l-5-3-5 3 1.523-9.11"], [2, "flex", "1", "min-width", "0"], [2, "display", "flex", "align-items", "center", "gap", "8px", "flex-wrap", "wrap"], [2, "width", "14px", "height", "14px", "border-radius", "50%", "border", "2px solid rgba(0,0,0,0.15)", "flex-shrink", "0", 3, "background"], [1, "info-card-value", 2, "font-size", "14px"], ["title", "Registrar gradua\xE7\xE3o", 1, "btn-grad-mini", 3, "click"], ["width", "12", "height", "12", "fill", "none", "stroke", "currentColor", "stroke-width", "2", "viewBox", "0 0 24 24"], ["x1", "12", "y1", "5", "x2", "12", "y2", "19"], ["x1", "5", "y1", "12", "x2", "19", "y2", "12"], [1, "info-card-icon", 2, "background", "rgba(245,158,11,0.1)", "color", "#f59e0b"], ["points", "12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"], [1, "info-card-icon", 2, "background", "rgba(34,197,94,0.1)", "color", "#22c55e"], ["d", "M22 11.08V12a10 10 0 1 1-5.93-9.14"], ["points", "22 4 12 14.01 9 11.01"], [1, "secao-card", 2, "margin-top", "16px"], [1, "secao-card"], [1, "secao-titulo"], [1, "dados-grid"], [1, "dado-item"], [2, "width", "14px", "height", "14px", "border-radius", "50%", "border", "2px solid rgba(0,0,0,0.15)", "flex-shrink", "0"], [1, "graduacoes-lista"], [1, "graduacao-row"], [2, "display", "flex", "align-items", "center", "gap", "10px", "flex", "1", "min-width", "0"], [2, "width", "16px", "height", "16px", "border-radius", "50%", "border", "2px solid rgba(0,0,0,0.15)", "flex-shrink", "0"], [2, "font-size", "14px", "font-weight", "600", "color", "var(--app-text-1)"], [2, "font-size", "12px", "color", "var(--app-text-2)"], ["title", "Nova gradua\xE7\xE3o nesta modalidade", 1, "btn-grad-mini", 3, "click"], [1, "dado-label"], [1, "dado-valor"], [2, "display", "flex", "flex-wrap", "wrap", "gap", "8px"], [2, "display", "flex", "align-items", "flex-end", "gap", "12px", "flex-wrap", "wrap", "margin-bottom", "16px"], [1, "form-group", 2, "margin", "0"], [1, "form-label"], ["type", "date", 1, "form-input", 2, "max-width", "160px", 3, "ngModelChange", "ngModel"], [1, "btn-secondary", 3, "click"], [1, "empty-state"], [1, "secao-card", 2, "padding", "0", "overflow", "hidden"], [2, "padding", "14px 16px", "border-bottom", "1px solid var(--app-border)", "display", "flex", "justify-content", "space-between", "align-items", "center"], [2, "font-size", "13px", "font-weight", "600", "color", "var(--app-text-1)"], [1, "presencas-lista-detalhe"], [1, "presenca-row"], [1, "presenca-check-icon"], ["width", "14", "height", "14", "fill", "none", "stroke", "#22c55e", "stroke-width", "2.5", "viewBox", "0 0 24 24"], ["points", "20 6 9 17 4 12"], [2, "flex", "1"], [2, "font-size", "12px", "color", "var(--app-text-3)"], [2, "font-size", "13px", "color", "var(--app-text-2)"], [1, "info-cards-row", 2, "margin-bottom", "16px"], [1, "info-card-value", 2, "font-size", "16px"], ["cx", "12", "cy", "12", "r", "10"], ["points", "12 6 12 12 16 14"], [1, "info-card-icon", 2, "background", "rgba(239,68,68,0.1)", "color", "#ef4444"], ["x1", "12", "y1", "8", "x2", "12", "y2", "12"], ["x1", "12", "y1", "16", "x2", "12.01", "y2", "16"], [2, "padding", "14px 16px", "border-bottom", "1px solid var(--app-border)"], [1, "pagamentos-lista"], [1, "pagamento-row"], [2, "font-size", "12px", "color", "var(--app-text-3)", "margin-top", "2px"], [2, "display", "flex", "align-items", "center", "gap", "10px", "flex-shrink", "0"], [1, "badge-pag"], [2, "font-size", "14px", "font-weight", "700", "color", "var(--app-text-1)"], ["title", "Marcar como pago", 1, "btn-pagar-mini"], ["title", "Marcar como pago", 1, "btn-pagar-mini", 3, "click"], ["width", "13", "height", "13", "fill", "none", "stroke", "currentColor", "stroke-width", "2.5", "viewBox", "0 0 24 24"], ["points", "22 12 18 12 15 21 9 3 6 12 2 12"], [1, "info-card-icon", 2, "background", "rgba(59,130,246,0.1)", "color", "#3b82f6"], ["d", "M13 2L3 14h9l-1 8 10-12h-9l1-8z"], [1, "conquista-chip", 3, "title"], [2, "font-size", "11px"], [1, "contrato-inline"], [1, "contrato-inline-header"], ["width", "14", "height", "14", "fill", "none", "stroke", "currentColor", "stroke-width", "2", "viewBox", "0 0 24 24"], [2, "display", "flex", "gap", "8px", "flex-wrap", "wrap"], [1, "btn-secondary", 3, "btn-copiado"], ["width", "13", "height", "13", "fill", "none", "stroke", "currentColor", "stroke-width", "2", "viewBox", "0 0 24 24"], ["points", "6 9 6 2 18 2 18 9"], ["d", "M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2"], ["x", "6", "y", "14", "width", "12", "height", "8"], [1, "contrato-status-bar"], [1, "contrato-html", 3, "innerHTML"], [1, "btn-wpp"], [1, "btn-wpp", 3, "click"], ["width", "14", "height", "14", "viewBox", "0 0 24 24", "fill", "currentColor"], ["x", "9", "y", "9", "width", "13", "height", "13", "rx", "2", "ry", "2"], ["d", "M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"], [2, "display", "flex", "align-items", "center", "justify-content", "space-between", "margin-bottom", "16px", "flex-wrap", "wrap", "gap", "10px"], [1, "btn-primary", 2, "font-size", "13px", 3, "click"], [1, "alert-error"], [1, "skeleton-row", 2, "height", "56px"], [2, "color", "var(--app-text-3)", "font-size", "13px", "margin", "0"], [1, "table-wrapper"], [1, "data-table"], [1, "badge-ct", 3, "ngClass"], [2, "font-size", "13px"], [2, "text-align", "right"], [1, "btn-secondary", 2, "font-size", "12px", "padding", "5px 10px", 3, "click"], [1, "modal-backdrop", 3, "click"], [1, "modal"], [1, "modal-header"], [1, "modal-close", 3, "click"], [1, "alert-error", 2, "margin", "0 16px 0"], [1, "modal-body"], [1, "form-group"], [1, "form-input", 3, "ngModelChange", "ngModel"], ["value", ""], [3, "value"], [1, "alert-aviso", 2, "margin-top", "10px"], [1, "form-group", 2, "margin-top", "14px"], [1, "modal-actions"], [1, "btn-primary", 3, "click", "disabled"], [1, "alert-error", 2, "margin", "0 0 12px"], [1, "form-row"], [1, "form-input", 3, "ngModelChange", "ngModel", "disabled"], ["type", "date", 1, "form-input", 3, "ngModelChange", "ngModel"], ["rows", "2", "placeholder", "Opcional...", 1, "form-input", 3, "ngModelChange", "ngModel"], [1, "form-group", 2, "display", "flex", "align-items", "center", "gap", "10px", "padding", "10px 14px", "background", "var(--app-bg)", "border", "1px solid var(--app-border)", "border-radius", "8px"], [2, "flex", "1", "font-size", "13px", "color", "var(--app-text-1)", "cursor", "pointer", "margin", "0", 3, "for"], ["type", "checkbox", 2, "width", "16px", "height", "16px", "accent-color", "var(--app-primary)", "cursor", "pointer", 3, "change", "id", "checked"], ["type", "number", "min", "0", "step", "0.01", "placeholder", "Ex: 150.00", 1, "form-input", 3, "ngModelChange", "ngModel"]], template: function AlunoDetalheComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275template(0, AlunoDetalheComponent_Conditional_0_Template, 5, 1, "div", 0)(1, AlunoDetalheComponent_Conditional_1_Template, 6, 1)(2, AlunoDetalheComponent_Conditional_2_Template, 40, 28)(3, AlunoDetalheComponent_Conditional_3_Template, 31, 7)(4, AlunoDetalheComponent_Conditional_4_Template, 53, 15);
      }
      if (rf & 2) {
        \u0275\u0275conditional(0, ctx.carregando() ? 0 : ctx.erro() || !ctx.aluno() ? 1 : 2);
        \u0275\u0275advance(3);
        \u0275\u0275conditional(3, ctx.modalContratoAberto() ? 3 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(4, ctx.modalGraduacaoAberto() ? 4 : -1);
      }
    }, dependencies: [CommonModule, NgClass, FormsModule, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, NumberValueAccessor, SelectControlValueAccessor, NgControlStatus, MinValidator, NgModel, RouterLink, NivelBadgeComponent], styles: ["\n\n  .btn-ghost-back[_ngcontent-%COMP%] { display:inline-flex; align-items:center; gap:6px; background:none; border:none; cursor:pointer; font-size:13px; font-weight:500; color:var(--app-text-2); padding:6px 10px; border-radius:6px; transition:all 0.15s; }\n  .btn-ghost-back[_ngcontent-%COMP%]:hover { background:var(--app-border-light); color:var(--app-text-1); }\n\n  \n\n  .btn-wpp-contato[_ngcontent-%COMP%] { display:inline-flex; align-items:center; gap:7px; padding:7px 14px; border-radius:8px; background:rgba(37,211,102,0.12); color:#25d366; font-size:13px; font-weight:600; text-decoration:none; border:1px solid rgba(37,211,102,0.3); transition:all 0.15s; }\n  .btn-wpp-contato[_ngcontent-%COMP%]:hover { background:rgba(37,211,102,0.2); border-color:rgba(37,211,102,0.5); }\n\n  \n\n  .perfil-header[_ngcontent-%COMP%] { display:flex; align-items:flex-start; gap:20px; background:var(--app-surface); border:1px solid var(--app-border); border-radius:12px; padding:24px; flex-wrap:wrap; }\n  .perfil-avatar[_ngcontent-%COMP%] { width:72px; height:72px; border-radius:50%; background:linear-gradient(135deg,#6366f1,#a855f7); color:#fff; display:flex; align-items:center; justify-content:center; font-size:28px; font-weight:700; flex-shrink:0; }\n  .perfil-header-info[_ngcontent-%COMP%] { flex:1; min-width:0; }\n\n  \n\n  .status-badge[_ngcontent-%COMP%] { font-size:11px; font-weight:600; padding:3px 10px; border-radius:99px; }\n  .status-badge.ativo[_ngcontent-%COMP%] { background:rgba(34,197,94,0.15); color:#22c55e; }\n  .status-badge[_ngcontent-%COMP%]:not(.ativo) { background:rgba(148,163,184,0.15); color:#94a3b8; }\n  .faixa-chip[_ngcontent-%COMP%] { font-size:11px; font-weight:600; padding:3px 10px; border-radius:99px; }\n  .info-chip[_ngcontent-%COMP%] { font-size:12px; font-weight:500; padding:3px 10px; border-radius:99px; background:var(--app-bg); border:1px solid var(--app-border); color:var(--app-text-2); }\n\n  \n\n  .info-cards-row[_ngcontent-%COMP%] { display:grid; grid-template-columns:repeat(auto-fill,minmax(180px,1fr)); gap:12px; }\n  .info-card[_ngcontent-%COMP%] { display:flex; align-items:center; gap:14px; background:var(--app-surface); border:1px solid var(--app-border); border-radius:10px; padding:16px; }\n  .info-card-icon[_ngcontent-%COMP%] { width:40px; height:40px; border-radius:10px; display:flex; align-items:center; justify-content:center; flex-shrink:0; }\n  .info-card-label[_ngcontent-%COMP%] { font-size:11px; color:var(--app-text-3); font-weight:500; text-transform:uppercase; letter-spacing:0.04em; }\n  .info-card-value[_ngcontent-%COMP%] { font-size:20px; font-weight:700; color:var(--app-text-1); margin-top:2px; }\n\n  \n\n  .secao-card[_ngcontent-%COMP%] { background:var(--app-surface); border:1px solid var(--app-border); border-radius:10px; padding:20px; margin-top:16px; }\n  .secao-titulo[_ngcontent-%COMP%] { font-size:13px; font-weight:600; color:var(--app-text-1); margin:0 0 14px; text-transform:uppercase; letter-spacing:0.04em; }\n  .dados-grid[_ngcontent-%COMP%] { display:grid; grid-template-columns:repeat(auto-fill,minmax(220px,1fr)); gap:12px; }\n  .dado-item[_ngcontent-%COMP%] { display:flex; flex-direction:column; gap:2px; }\n  .dado-label[_ngcontent-%COMP%] { font-size:11px; color:var(--app-text-3); font-weight:500; }\n  .dado-valor[_ngcontent-%COMP%] { font-size:14px; color:var(--app-text-1); font-weight:500; }\n\n  \n\n  .presencas-lista-detalhe[_ngcontent-%COMP%] { display:flex; flex-direction:column; }\n  .presenca-row[_ngcontent-%COMP%] { display:flex; align-items:center; gap:12px; padding:12px 16px; border-bottom:1px solid var(--app-border); }\n  .presenca-row[_ngcontent-%COMP%]:last-child { border-bottom:none; }\n  .presenca-check-icon[_ngcontent-%COMP%] { width:28px; height:28px; border-radius:50%; background:rgba(34,197,94,0.12); display:flex; align-items:center; justify-content:center; flex-shrink:0; }\n\n  \n\n  .conquista-chip[_ngcontent-%COMP%] { display:flex; align-items:center; gap:6px; padding:6px 10px; border-radius:99px; background:var(--app-bg); border:1px solid var(--app-border); font-size:13px; }\n\n  \n\n  .pagamentos-lista[_ngcontent-%COMP%] { display:flex; flex-direction:column; }\n  .pagamento-row[_ngcontent-%COMP%] { display:flex; align-items:center; gap:12px; padding:12px 16px; border-bottom:1px solid var(--app-border); flex-wrap:wrap; }\n  .pagamento-row[_ngcontent-%COMP%]:last-child { border-bottom:none; }\n  .badge-pag[_ngcontent-%COMP%] { font-size:11px; font-weight:600; padding:2px 8px; border-radius:99px; white-space:nowrap; }\n  .badge-pag-pago[_ngcontent-%COMP%] { background:rgba(34,197,94,0.12); color:#16a34a; }\n  .badge-pag-pendente[_ngcontent-%COMP%] { background:rgba(245,158,11,0.15); color:#d97706; }\n  .badge-pag-atrasado[_ngcontent-%COMP%] { background:rgba(239,68,68,0.15); color:#dc2626; }\n  .badge-pag-cancelado[_ngcontent-%COMP%] { background:rgba(148,163,184,0.12); color:#94a3b8; }\n  .btn-pagar-mini[_ngcontent-%COMP%] { display:inline-flex; align-items:center; gap:4px; padding:4px 10px; border-radius:6px; border:1px solid rgba(34,197,94,0.4); background:rgba(34,197,94,0.08); color:#16a34a; font-size:12px; font-weight:600; cursor:pointer; transition:all 0.15s; white-space:nowrap; }\n  .btn-pagar-mini[_ngcontent-%COMP%]:hover { background:rgba(34,197,94,0.18); border-color:rgba(34,197,94,0.6); }\n  .badge-ct[_ngcontent-%COMP%] { font-size:11px; font-weight:600; padding:2px 8px; border-radius:99px; white-space:nowrap; }\n  .badge-ct-pendente[_ngcontent-%COMP%]  { background:rgba(245,158,11,0.12); color:#b45309; }\n  .badge-ct-assinado[_ngcontent-%COMP%]  { background:rgba(34,197,94,0.12);  color:#15803d; }\n  .badge-ct-cancelado[_ngcontent-%COMP%] { background:rgba(107,114,128,0.12); color:#6b7280; }\n\n  \n\n  .btn-grad-mini[_ngcontent-%COMP%] { display:inline-flex; align-items:center; gap:4px; padding:3px 10px; border-radius:6px; border:1px solid rgba(99,102,241,0.4); background:rgba(99,102,241,0.08); color:#6366f1; font-size:11px; font-weight:600; cursor:pointer; transition:all 0.15s; white-space:nowrap; }\n  .btn-grad-mini[_ngcontent-%COMP%]:hover { background:rgba(99,102,241,0.18); border-color:rgba(99,102,241,0.6); }\n\n  \n\n  .graduacoes-lista[_ngcontent-%COMP%] { display:flex; flex-direction:column; gap:0; }\n  .graduacao-row[_ngcontent-%COMP%] { display:flex; align-items:center; gap:12px; padding:12px 0; border-bottom:1px solid var(--app-border); }\n  .graduacao-row[_ngcontent-%COMP%]:last-child { border-bottom:none; }\n\n  \n\n  .contrato-inline[_ngcontent-%COMP%] { background:var(--app-surface); border:1px solid var(--app-border); border-radius:12px; overflow:hidden; }\n  .contrato-inline-header[_ngcontent-%COMP%] { display:flex; align-items:center; justify-content:space-between; padding:14px 16px; border-bottom:1px solid var(--app-border); flex-wrap:wrap; gap:10px; }\n  .contrato-status-bar[_ngcontent-%COMP%] { padding:10px 20px; font-size:13px; font-weight:500; background:rgba(245,158,11,0.1); color:#b45309; border-bottom:1px solid var(--app-border); }\n  .contrato-status-bar.status-assinado[_ngcontent-%COMP%] { background:rgba(34,197,94,0.1); color:#15803d; }\n  .contrato-status-bar.status-cancelado[_ngcontent-%COMP%] { background:rgba(107,114,128,0.1); color:#6b7280; }\n  .contrato-html[_ngcontent-%COMP%] { padding:32px 40px; font-size:14px; line-height:1.75; color:var(--app-text-1); max-height:600px; overflow-y:auto; }\n\n  \n\n  .btn-wpp[_ngcontent-%COMP%] { display:inline-flex; align-items:center; gap:6px; padding:6px 12px; border-radius:8px; border:1px solid rgba(37,211,102,0.4); background:rgba(37,211,102,0.1); color:#16a34a; font-size:12px; font-weight:600; cursor:pointer; transition:all 0.15s; }\n  .btn-wpp[_ngcontent-%COMP%]:hover { background:rgba(37,211,102,0.2); }\n\n  \n\n  .btn-copiado[_ngcontent-%COMP%] { background:rgba(34,197,94,0.1) !important; border-color:rgba(34,197,94,0.4) !important; color:#16a34a !important; }\n\n  \n\n  .alert-aviso[_ngcontent-%COMP%] { display:flex; align-items:flex-start; gap:8px; background:rgba(245,158,11,0.1); border:1px solid rgba(245,158,11,0.3); color:#b45309; padding:10px 14px; border-radius:8px; font-size:13px; }\n\n  \n\n  .alert-success[_ngcontent-%COMP%] { background:rgba(34,197,94,0.12); border:1px solid rgba(34,197,94,0.3); color:#16a34a; padding:10px 14px; border-radius:8px; font-size:13px; }"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AlunoDetalheComponent, { className: "AlunoDetalheComponent" });
})();
export {
  AlunoDetalheComponent
};
//# sourceMappingURL=chunk-KTGLKF6C.js.map
