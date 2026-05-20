import {
  environment
} from "./chunk-RZVP4UO7.js";
import {
  HttpClient,
  inject,
  ɵɵdefineInjectable
} from "./chunk-YRJQ7ZE3.js";

// src/app/core/services/usuario.service.ts
var UsuarioService = class _UsuarioService {
  constructor() {
    this.http = inject(HttpClient);
    this.base = `${environment.apiUrl}/api/usuarios`;
  }
  getProfessores() {
    return this.http.get(`${this.base}/professores`);
  }
  getMeuPerfil() {
    return this.http.get(`${this.base}/me`);
  }
  atualizarMeuPerfil(data) {
    return this.http.put(`${this.base}/me`, data);
  }
  static {
    this.\u0275fac = function UsuarioService_Factory(t) {
      return new (t || _UsuarioService)();
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _UsuarioService, factory: _UsuarioService.\u0275fac, providedIn: "root" });
  }
};

export {
  UsuarioService
};
//# sourceMappingURL=chunk-UWHF5ZI4.js.map
