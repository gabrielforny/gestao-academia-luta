import {
  UsuarioService
} from "./chunk-VQGWIR3Q.js";
import {
  DefaultValueAccessor,
  FormBuilder,
  FormControlName,
  FormGroupDirective,
  FormsModule,
  NgControlStatus,
  NgControlStatusGroup,
  ReactiveFormsModule,
  Validators,
  ɵNgNoValidate
} from "./chunk-7HGCDVPZ.js";
import {
  AcademiaService
} from "./chunk-CBN6KQ7U.js";
import {
  AuthService
} from "./chunk-UDQ4RXGC.js";
import "./chunk-RZVP4UO7.js";
import "./chunk-CPMJ3O6H.js";
import {
  CommonModule,
  inject,
  signal,
  ɵsetClassDebugInfo,
  ɵɵStandaloneFeature,
  ɵɵadvance,
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

// src/app/features/configuracoes/pages/geral/configuracoes-geral.component.ts
var _c0 = () => [1, 2, 3];
function ConfiguracoesGeralComponent_Conditional_7_For_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "div", 5);
  }
}
function ConfiguracoesGeralComponent_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 4);
    \u0275\u0275repeaterCreate(1, ConfiguracoesGeralComponent_Conditional_7_For_2_Template, 1, 0, "div", 5, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275repeater(\u0275\u0275pureFunction0(0, _c0));
  }
}
function ConfiguracoesGeralComponent_Conditional_8_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 6);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.erro());
  }
}
function ConfiguracoesGeralComponent_Conditional_8_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 7);
    \u0275\u0275text(1, "\u2713 Dados salvos com sucesso!");
    \u0275\u0275elementEnd();
  }
}
function ConfiguracoesGeralComponent_Conditional_8_Conditional_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 21);
    \u0275\u0275text(1, "Nome \xE9 obrigat\xF3rio");
    \u0275\u0275elementEnd();
  }
}
function ConfiguracoesGeralComponent_Conditional_8_Conditional_29_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 21);
    \u0275\u0275text(1, "E-mail inv\xE1lido");
    \u0275\u0275elementEnd();
  }
}
function ConfiguracoesGeralComponent_Conditional_8_Conditional_83_Conditional_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 54);
    \u0275\u0275text(1, "\u2713 Perfil atualizado!");
    \u0275\u0275elementEnd();
  }
}
function ConfiguracoesGeralComponent_Conditional_8_Conditional_83_Conditional_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 55);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.erroPerfil());
  }
}
function ConfiguracoesGeralComponent_Conditional_8_Conditional_83_Conditional_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 21);
    \u0275\u0275text(1, "Nome \xE9 obrigat\xF3rio");
    \u0275\u0275elementEnd();
  }
}
function ConfiguracoesGeralComponent_Conditional_8_Conditional_83_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 8)(1, "div", 9)(2, "div", 10);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(3, "svg", 11);
    \u0275\u0275element(4, "path", 52)(5, "circle", 53);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(6, "div")(7, "h2", 14);
    \u0275\u0275text(8, "Meu Perfil");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "p", 15);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd()()();
    \u0275\u0275template(11, ConfiguracoesGeralComponent_Conditional_8_Conditional_83_Conditional_11_Template, 2, 0, "div", 54)(12, ConfiguracoesGeralComponent_Conditional_8_Conditional_83_Conditional_12_Template, 2, 1, "div", 55);
    \u0275\u0275elementStart(13, "form", 56);
    \u0275\u0275listener("ngSubmit", function ConfiguracoesGeralComponent_Conditional_8_Conditional_83_Template_form_ngSubmit_13_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.salvarPerfil());
    });
    \u0275\u0275elementStart(14, "div", 17)(15, "div", 18)(16, "label", 19);
    \u0275\u0275text(17, "Nome *");
    \u0275\u0275elementEnd();
    \u0275\u0275element(18, "input", 57);
    \u0275\u0275template(19, ConfiguracoesGeralComponent_Conditional_8_Conditional_83_Conditional_19_Template, 2, 0, "span", 21);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "div", 22)(21, "label", 19);
    \u0275\u0275text(22, "Telefone");
    \u0275\u0275elementEnd();
    \u0275\u0275element(23, "input", 23);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(24, "div", 27)(25, "button", 28);
    \u0275\u0275text(26);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    let tmp_2_0;
    let tmp_6_0;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(10);
    \u0275\u0275textInterpolate2("", ctx_r1.meuPerfil().perfil, " \u2014 ", (tmp_2_0 = ctx_r1.meuPerfil().email) !== null && tmp_2_0 !== void 0 ? tmp_2_0 : "sem e-mail", "");
    \u0275\u0275advance();
    \u0275\u0275conditional(11, ctx_r1.perfilOk() ? 11 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(12, ctx_r1.erroPerfil() ? 12 : -1);
    \u0275\u0275advance();
    \u0275\u0275property("formGroup", ctx_r1.formPerfil);
    \u0275\u0275advance(6);
    \u0275\u0275conditional(19, ((tmp_6_0 = ctx_r1.formPerfil.get("nome")) == null ? null : tmp_6_0.invalid) && ((tmp_6_0 = ctx_r1.formPerfil.get("nome")) == null ? null : tmp_6_0.touched) ? 19 : -1);
    \u0275\u0275advance(6);
    \u0275\u0275property("disabled", ctx_r1.salvandoPerfil());
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.salvandoPerfil() ? "Salvando..." : "Salvar meu perfil", " ");
  }
}
function ConfiguracoesGeralComponent_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275template(0, ConfiguracoesGeralComponent_Conditional_8_Conditional_0_Template, 2, 1, "div", 6)(1, ConfiguracoesGeralComponent_Conditional_8_Conditional_1_Template, 2, 0, "div", 7);
    \u0275\u0275elementStart(2, "div", 8)(3, "div", 9)(4, "div", 10);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(5, "svg", 11);
    \u0275\u0275element(6, "path", 12)(7, "polyline", 13);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(8, "div")(9, "h2", 14);
    \u0275\u0275text(10, "Informa\xE7\xF5es da Academia");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "p", 15);
    \u0275\u0275text(12, "Nome, contato e dados gerais");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(13, "form", 16);
    \u0275\u0275listener("ngSubmit", function ConfiguracoesGeralComponent_Conditional_8_Template_form_ngSubmit_13_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.salvarInfo());
    });
    \u0275\u0275elementStart(14, "div", 17)(15, "div", 18)(16, "label", 19);
    \u0275\u0275text(17, "Nome da academia *");
    \u0275\u0275elementEnd();
    \u0275\u0275element(18, "input", 20);
    \u0275\u0275template(19, ConfiguracoesGeralComponent_Conditional_8_Conditional_19_Template, 2, 0, "span", 21);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "div", 22)(21, "label", 19);
    \u0275\u0275text(22, "Telefone");
    \u0275\u0275elementEnd();
    \u0275\u0275element(23, "input", 23);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(24, "div", 17)(25, "div", 18)(26, "label", 19);
    \u0275\u0275text(27, "E-mail de contato *");
    \u0275\u0275elementEnd();
    \u0275\u0275element(28, "input", 24);
    \u0275\u0275template(29, ConfiguracoesGeralComponent_Conditional_8_Conditional_29_Template, 2, 0, "span", 21);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(30, "div", 22)(31, "label", 19);
    \u0275\u0275text(32, "Subdom\xEDnio");
    \u0275\u0275elementEnd();
    \u0275\u0275element(33, "input", 25);
    \u0275\u0275elementStart(34, "span", 26);
    \u0275\u0275text(35, "N\xE3o pode ser alterado");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(36, "div", 27)(37, "button", 28);
    \u0275\u0275text(38);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(39, "div", 8)(40, "div", 9)(41, "div", 10);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(42, "svg", 11);
    \u0275\u0275element(43, "rect", 29)(44, "path", 30);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(45, "div")(46, "h2", 14);
    \u0275\u0275text(47, "Acesso & Seguran\xE7a");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(48, "p", 15);
    \u0275\u0275text(49, "Credenciais e autentica\xE7\xE3o do administrador");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(50, "div", 31)(51, "div", 32)(52, "span", 33);
    \u0275\u0275text(53, "URL de acesso");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(54, "span", 34);
    \u0275\u0275text(55);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(56, "div", 32)(57, "span", 33);
    \u0275\u0275text(58, "E-mail do administrador");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(59, "span", 34);
    \u0275\u0275text(60);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(61, "div", 35)(62, "button", 36);
    \u0275\u0275listener("click", function ConfiguracoesGeralComponent_Conditional_8_Template_button_click_62_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.abrirModalSenha());
    });
    \u0275\u0275text(63, " Alterar senha ");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(64, "div", 8)(65, "div", 9)(66, "div", 10);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(67, "svg", 11);
    \u0275\u0275element(68, "circle", 37)(69, "path", 38);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(70, "div")(71, "h2", 14);
    \u0275\u0275text(72, "Identidade Visual");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(73, "p", 15);
    \u0275\u0275text(74, "Logo e cores da academia");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(75, "div", 39)(76, "div", 40);
    \u0275\u0275text(77);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(78, "div")(79, "p", 41);
    \u0275\u0275text(80, "Logo da academia");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(81, "p", 42);
    \u0275\u0275text(82, " Upload de imagem dispon\xEDvel em breve. O logo aparecer\xE1 no app e nos relat\xF3rios. ");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275template(83, ConfiguracoesGeralComponent_Conditional_8_Conditional_83_Template, 27, 8, "div", 8);
    \u0275\u0275elementStart(84, "div", 43)(85, "div", 9)(86, "div", 44);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(87, "svg", 11);
    \u0275\u0275element(88, "path", 45)(89, "line", 46)(90, "line", 47);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(91, "div")(92, "h2", 48);
    \u0275\u0275text(93, "Zona de Perigo");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(94, "p", 15);
    \u0275\u0275text(95, "A\xE7\xF5es irrevers\xEDveis");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(96, "div", 49)(97, "div")(98, "p", 50);
    \u0275\u0275text(99, "Exportar dados da academia");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(100, "p", 42);
    \u0275\u0275text(101, "Baixar todos os dados em formato JSON/CSV. (Em breve)");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(102, "button", 51);
    \u0275\u0275text(103, "Exportar dados");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    let tmp_4_0;
    let tmp_5_0;
    let tmp_6_0;
    let tmp_9_0;
    let tmp_10_0;
    let tmp_11_0;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275conditional(0, ctx_r1.erro() ? 0 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(1, ctx_r1.salvoOk() ? 1 : -1);
    \u0275\u0275advance(12);
    \u0275\u0275property("formGroup", ctx_r1.formInfo);
    \u0275\u0275advance(6);
    \u0275\u0275conditional(19, ((tmp_4_0 = ctx_r1.formInfo.get("nome")) == null ? null : tmp_4_0.invalid) && ((tmp_4_0 = ctx_r1.formInfo.get("nome")) == null ? null : tmp_4_0.touched) ? 19 : -1);
    \u0275\u0275advance(10);
    \u0275\u0275conditional(29, ((tmp_5_0 = ctx_r1.formInfo.get("email")) == null ? null : tmp_5_0.invalid) && ((tmp_5_0 = ctx_r1.formInfo.get("email")) == null ? null : tmp_5_0.touched) ? 29 : -1);
    \u0275\u0275advance(4);
    \u0275\u0275property("value", (tmp_6_0 = (tmp_6_0 = ctx_r1.academia()) == null ? null : tmp_6_0.subdominio) !== null && tmp_6_0 !== void 0 ? tmp_6_0 : "");
    \u0275\u0275advance(4);
    \u0275\u0275property("disabled", ctx_r1.salvando());
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.salvando() ? "Salvando..." : "Salvar informa\xE7\xF5es", " ");
    \u0275\u0275advance(17);
    \u0275\u0275textInterpolate1("", (tmp_9_0 = ctx_r1.academia()) == null ? null : tmp_9_0.subdominio, ".tatame.app");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate((tmp_10_0 = ctx_r1.academia()) == null ? null : tmp_10_0.email);
    \u0275\u0275advance(17);
    \u0275\u0275textInterpolate(ctx_r1.iniciais((tmp_11_0 = (tmp_11_0 = ctx_r1.academia()) == null ? null : tmp_11_0.nome) !== null && tmp_11_0 !== void 0 ? tmp_11_0 : "A"));
    \u0275\u0275advance(6);
    \u0275\u0275conditional(83, ctx_r1.meuPerfil() ? 83 : -1);
  }
}
function ConfiguracoesGeralComponent_Conditional_9_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 62);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.erroSenha());
  }
}
function ConfiguracoesGeralComponent_Conditional_9_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 63);
    \u0275\u0275text(1, "\u2713 Senha alterada com sucesso!");
    \u0275\u0275elementEnd();
  }
}
function ConfiguracoesGeralComponent_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 58);
    \u0275\u0275listener("click", function ConfiguracoesGeralComponent_Conditional_9_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.fecharModalSenha());
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(1, "div", 59)(2, "div", 60)(3, "h3");
    \u0275\u0275text(4, "Alterar Senha");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "button", 61);
    \u0275\u0275listener("click", function ConfiguracoesGeralComponent_Conditional_9_Template_button_click_5_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.fecharModalSenha());
    });
    \u0275\u0275text(6, "\u2715");
    \u0275\u0275elementEnd()();
    \u0275\u0275template(7, ConfiguracoesGeralComponent_Conditional_9_Conditional_7_Template, 2, 1, "div", 62)(8, ConfiguracoesGeralComponent_Conditional_9_Conditional_8_Template, 2, 0, "div", 63);
    \u0275\u0275elementStart(9, "form", 64);
    \u0275\u0275listener("ngSubmit", function ConfiguracoesGeralComponent_Conditional_9_Template_form_ngSubmit_9_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.salvarSenha());
    });
    \u0275\u0275elementStart(10, "div", 22)(11, "label", 19);
    \u0275\u0275text(12, "Senha atual");
    \u0275\u0275elementEnd();
    \u0275\u0275element(13, "input", 65);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "div", 22)(15, "label", 19);
    \u0275\u0275text(16, "Nova senha");
    \u0275\u0275elementEnd();
    \u0275\u0275element(17, "input", 66);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "div", 22)(19, "label", 19);
    \u0275\u0275text(20, "Confirmar nova senha");
    \u0275\u0275elementEnd();
    \u0275\u0275element(21, "input", 67);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "div", 68)(23, "button", 36);
    \u0275\u0275listener("click", function ConfiguracoesGeralComponent_Conditional_9_Template_button_click_23_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.fecharModalSenha());
    });
    \u0275\u0275text(24, "Cancelar");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(25, "button", 28);
    \u0275\u0275text(26, "Alterar senha");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(7);
    \u0275\u0275conditional(7, ctx_r1.erroSenha() ? 7 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(8, ctx_r1.senhaOk() ? 8 : -1);
    \u0275\u0275advance();
    \u0275\u0275property("formGroup", ctx_r1.formSenha);
    \u0275\u0275advance(16);
    \u0275\u0275property("disabled", ctx_r1.salvandoSenha());
  }
}
var ConfiguracoesGeralComponent = class _ConfiguracoesGeralComponent {
  constructor() {
    this.academiaService = inject(AcademiaService);
    this.authService = inject(AuthService);
    this.usuarioService = inject(UsuarioService);
    this.fb = inject(FormBuilder);
    this.academia = signal(null);
    this.carregando = signal(true);
    this.salvando = signal(false);
    this.salvoOk = signal(false);
    this.erro = signal("");
    this.modalSenhaAberto = signal(false);
    this.salvandoSenha = signal(false);
    this.erroSenha = signal("");
    this.senhaOk = signal(false);
    this.meuPerfil = signal(null);
    this.salvandoPerfil = signal(false);
    this.perfilOk = signal(false);
    this.erroPerfil = signal("");
    this.formInfo = this.fb.group({
      nome: ["", Validators.required],
      email: ["", [Validators.required, Validators.email]],
      telefone: [""]
    });
    this.formPerfil = this.fb.group({
      nome: ["", Validators.required],
      telefone: [""]
    });
    this.formSenha = this.fb.group({
      senhaAtual: ["", Validators.required],
      novaSenha: ["", [Validators.required, Validators.minLength(6)]],
      confirmarSenha: ["", Validators.required]
    });
  }
  ngOnInit() {
    this.academiaService.getCurrent().subscribe({
      next: (res) => {
        if (res.dados) {
          this.academia.set(res.dados);
          this.formInfo.patchValue({
            nome: res.dados.nome,
            email: res.dados.email,
            telefone: res.dados.telefone ?? ""
          });
        }
        this.carregando.set(false);
      },
      error: () => {
        this.erro.set("Erro ao carregar dados da academia.");
        this.carregando.set(false);
      }
    });
    this.usuarioService.getMeuPerfil().subscribe({
      next: (res) => {
        if (res.dados) {
          this.meuPerfil.set(res.dados);
          this.formPerfil.patchValue({ nome: res.dados.nome, telefone: res.dados.telefone ?? "" });
        }
      }
    });
  }
  salvarPerfil() {
    if (this.formPerfil.invalid) {
      this.formPerfil.markAllAsTouched();
      return;
    }
    this.salvandoPerfil.set(true);
    this.perfilOk.set(false);
    this.erroPerfil.set("");
    const v = this.formPerfil.value;
    this.usuarioService.atualizarMeuPerfil({ nome: v.nome, telefone: v.telefone || void 0 }).subscribe({
      next: (res) => {
        this.salvandoPerfil.set(false);
        if (res.sucesso) {
          this.meuPerfil.set(res.dados ?? null);
          this.perfilOk.set(true);
        } else {
          this.erroPerfil.set(res.mensagem ?? "Erro ao salvar.");
        }
      },
      error: (err) => {
        this.salvandoPerfil.set(false);
        this.erroPerfil.set(err.error?.mensagem ?? "Erro ao salvar.");
      }
    });
  }
  salvarInfo() {
    if (this.formInfo.invalid) {
      this.formInfo.markAllAsTouched();
      return;
    }
    this.salvando.set(true);
    this.salvoOk.set(false);
    this.erro.set("");
    const v = this.formInfo.value;
    this.academiaService.update({
      nome: v.nome,
      email: v.email,
      telefone: v.telefone || void 0
    }).subscribe({
      next: (res) => {
        if (res.sucesso) {
          this.academia.set(res.dados ?? null);
          this.salvoOk.set(true);
        } else {
          this.erro.set(res.mensagem ?? "Erro ao salvar.");
        }
        this.salvando.set(false);
      },
      error: (err) => {
        this.erro.set(err.error?.mensagem ?? "Erro ao salvar.");
        this.salvando.set(false);
      }
    });
  }
  abrirModalSenha() {
    this.formSenha.reset();
    this.erroSenha.set("");
    this.senhaOk.set(false);
    this.modalSenhaAberto.set(true);
  }
  fecharModalSenha() {
    this.modalSenhaAberto.set(false);
  }
  salvarSenha() {
    if (this.formSenha.invalid) {
      this.formSenha.markAllAsTouched();
      return;
    }
    const v = this.formSenha.value;
    if (v.novaSenha !== v.confirmarSenha) {
      this.erroSenha.set("As senhas n\xE3o coincidem.");
      return;
    }
    this.salvandoSenha.set(true);
    this.erroSenha.set("");
    this.authService.alterarSenha(v.senhaAtual, v.novaSenha).subscribe({
      next: (res) => {
        this.salvandoSenha.set(false);
        if (res.sucesso) {
          this.senhaOk.set(true);
          setTimeout(() => this.fecharModalSenha(), 1800);
        } else {
          this.erroSenha.set(res.mensagem ?? "Erro ao alterar senha.");
        }
      },
      error: (err) => {
        this.salvandoSenha.set(false);
        this.erroSenha.set(err.error?.mensagem ?? "Erro ao alterar senha.");
      }
    });
  }
  iniciais(nome) {
    return nome.split(" ").slice(0, 2).map((p) => p[0]).join("").toUpperCase();
  }
  static {
    this.\u0275fac = function ConfiguracoesGeralComponent_Factory(t) {
      return new (t || _ConfiguracoesGeralComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ConfiguracoesGeralComponent, selectors: [["app-configuracoes-geral"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 10, vars: 2, consts: [[1, "page-container", 2, "max-width", "760px"], [1, "page-header"], [1, "page-title"], [1, "page-subtitle"], [1, "skeleton-list"], [1, "skeleton-row", 2, "height", "80px"], [1, "alert-error", 2, "margin-bottom", "16px"], [1, "alert-success", 2, "margin-bottom", "16px"], [1, "config-card"], [1, "config-card-header"], [1, "config-icon"], ["width", "18", "height", "18", "fill", "none", "stroke", "currentColor", "stroke-width", "2", "viewBox", "0 0 24 24"], ["d", "M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"], ["points", "9 22 9 12 15 12 15 22"], [1, "config-card-title"], [1, "config-card-sub"], [2, "display", "flex", "flex-direction", "column", "gap", "16px", 3, "ngSubmit", "formGroup"], [1, "form-row"], [1, "form-group", 2, "flex", "2"], [1, "form-label"], ["formControlName", "nome", "placeholder", "Nome da academia", 1, "form-input"], [1, "form-error"], [1, "form-group"], ["formControlName", "telefone", "placeholder", "(11) 99999-9999", 1, "form-input"], ["formControlName", "email", "type", "email", "placeholder", "contato@academia.com", 1, "form-input"], ["readonly", "", 1, "form-input", 2, "opacity", "0.5", "cursor", "not-allowed", "background", "var(--app-bg)", 3, "value"], [2, "font-size", "11px", "color", "var(--app-text-2)", "margin-top", "3px", "display", "block"], [2, "display", "flex", "justify-content", "flex-end"], ["type", "submit", 1, "btn-primary", 3, "disabled"], ["x", "3", "y", "11", "width", "18", "height", "11", "rx", "2", "ry", "2"], ["d", "M7 11V7a5 5 0 0 1 10 0v4"], [1, "info-grid"], [1, "info-item"], [1, "info-label"], [1, "info-value"], [2, "margin-top", "16px"], ["type", "button", 1, "btn-secondary", 3, "click"], ["cx", "12", "cy", "12", "r", "10"], ["d", "M12 8v4l3 3"], [2, "display", "flex", "align-items", "center", "gap", "20px"], [1, "logo-placeholder"], [2, "font-size", "13px", "color", "var(--app-text-2)", "margin", "0 0 4px"], [2, "font-size", "12px", "color", "var(--app-text-2)", "margin", "0"], [1, "config-card", "danger-zone"], [1, "config-icon", "danger-icon"], ["d", "M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"], ["x1", "12", "y1", "9", "x2", "12", "y2", "13"], ["x1", "12", "y1", "17", "x2", "12.01", "y2", "17"], [1, "config-card-title", 2, "color", "#ef4444"], [2, "display", "flex", "align-items", "center", "justify-content", "space-between", "gap", "16px", "flex-wrap", "wrap"], [2, "font-size", "13px", "font-weight", "500", "margin", "0 0 3px"], ["disabled", "", 1, "btn-secondary", 2, "opacity", "0.5"], ["d", "M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"], ["cx", "12", "cy", "7", "r", "4"], [1, "alert-success", 2, "margin-bottom", "12px"], [1, "alert-error", 2, "margin-bottom", "12px"], [2, "display", "flex", "flex-direction", "column", "gap", "14px", 3, "ngSubmit", "formGroup"], ["formControlName", "nome", "placeholder", "Seu nome", 1, "form-input"], [1, "modal-backdrop", 3, "click"], [1, "modal"], [1, "modal-header"], [1, "modal-close", 3, "click"], [1, "alert-error", 2, "margin", "0 0 12px"], [1, "alert-success", 2, "margin", "0 0 12px"], [1, "modal-body", 3, "ngSubmit", "formGroup"], ["formControlName", "senhaAtual", "type", "password", 1, "form-input"], ["formControlName", "novaSenha", "type", "password", 1, "form-input"], ["formControlName", "confirmarSenha", "type", "password", 1, "form-input"], [1, "modal-actions"]], template: function ConfiguracoesGeralComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div")(3, "h1", 2);
        \u0275\u0275text(4, "Configura\xE7\xF5es");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(5, "p", 3);
        \u0275\u0275text(6, "Gerencie as informa\xE7\xF5es da sua academia");
        \u0275\u0275elementEnd()()();
        \u0275\u0275template(7, ConfiguracoesGeralComponent_Conditional_7_Template, 3, 1, "div", 4)(8, ConfiguracoesGeralComponent_Conditional_8_Template, 104, 12);
        \u0275\u0275elementEnd();
        \u0275\u0275template(9, ConfiguracoesGeralComponent_Conditional_9_Template, 27, 4);
      }
      if (rf & 2) {
        \u0275\u0275advance(7);
        \u0275\u0275conditional(7, ctx.carregando() ? 7 : 8);
        \u0275\u0275advance(2);
        \u0275\u0275conditional(9, ctx.modalSenhaAberto() ? 9 : -1);
      }
    }, dependencies: [CommonModule, ReactiveFormsModule, \u0275NgNoValidate, DefaultValueAccessor, NgControlStatus, NgControlStatusGroup, FormGroupDirective, FormControlName, FormsModule], styles: [".config-card[_ngcontent-%COMP%] { background: var(--app-surface); border: 1px solid var(--app-border); border-radius: 12px; padding: 20px 24px; margin-bottom: 14px; }\n  .config-card-header[_ngcontent-%COMP%] { display: flex; align-items: flex-start; gap: 14px; margin-bottom: 20px; }\n  .config-icon[_ngcontent-%COMP%] { width: 36px; height: 36px; border-radius: 8px; background: rgba(99,102,241,0.1); color: #6366f1; display: flex; align-items: center; justify-content: center; flex-shrink: 0; margin-top: 1px; }\n  .config-card-title[_ngcontent-%COMP%] { font-size: 15px; font-weight: 700; margin: 0 0 2px; color: var(--app-text-1); }\n  .config-card-sub[_ngcontent-%COMP%] { font-size: 12px; color: var(--app-text-2); margin: 0; }\n  .danger-zone[_ngcontent-%COMP%] { border-color: rgba(239,68,68,0.25); }\n  .danger-icon[_ngcontent-%COMP%] { background: rgba(239,68,68,0.1); color: #ef4444; }\n  .info-grid[_ngcontent-%COMP%] { display: flex; flex-direction: column; gap: 10px; }\n  .info-item[_ngcontent-%COMP%] { display: flex; align-items: center; gap: 0; font-size: 13px; }\n  .info-label[_ngcontent-%COMP%] { min-width: 200px; color: var(--app-text-2); font-weight: 500; }\n  .info-value[_ngcontent-%COMP%] { font-weight: 600; color: var(--app-text-1); }\n  .logo-placeholder[_ngcontent-%COMP%] { width: 68px; height: 68px; background: #6366f1; border-radius: 12px; display: flex; align-items: center; justify-content: center; font-size: 22px; font-weight: 700; color: white; flex-shrink: 0; }\n  .form-error[_ngcontent-%COMP%] { font-size: 12px; color: #ef4444; margin-top: 4px; display: block; }\n  .alert-success[_ngcontent-%COMP%] { background: rgba(34,197,94,0.12); border: 1px solid rgba(34,197,94,0.3); color: #22c55e; padding: 10px 14px; border-radius: 8px; font-size: 13px; }"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ConfiguracoesGeralComponent, { className: "ConfiguracoesGeralComponent" });
})();
export {
  ConfiguracoesGeralComponent
};
//# sourceMappingURL=chunk-2DMW2AKX.js.map
