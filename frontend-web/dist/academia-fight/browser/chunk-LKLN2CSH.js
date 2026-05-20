import {
  environment
} from "./chunk-RZVP4UO7.js";
import {
  HttpClient,
  inject,
  ɵɵdefineInjectable
} from "./chunk-7TD4H62Z.js";

// src/app/core/services/funcionario.service.ts
var FuncionarioService = class _FuncionarioService {
  constructor() {
    this.http = inject(HttpClient);
    this.api = `${environment.apiUrl}/api/funcionarios`;
  }
  getAll(filtros) {
    const params = {};
    if (filtros?.nome)
      params["nome"] = filtros.nome;
    if (filtros?.perfil)
      params["perfil"] = filtros.perfil;
    return this.http.get(this.api, { params });
  }
  getProfessores() {
    return this.http.get(`${environment.apiUrl}/api/usuarios/professores`);
  }
  getById(id) {
    return this.http.get(`${this.api}/${id}`);
  }
  create(data) {
    return this.http.post(this.api, data);
  }
  update(id, data) {
    return this.http.put(`${this.api}/${id}`, data);
  }
  delete(id) {
    return this.http.delete(`${this.api}/${id}`);
  }
  static {
    this.\u0275fac = function FuncionarioService_Factory(t) {
      return new (t || _FuncionarioService)();
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _FuncionarioService, factory: _FuncionarioService.\u0275fac, providedIn: "root" });
  }
};

export {
  FuncionarioService
};
//# sourceMappingURL=chunk-LKLN2CSH.js.map
