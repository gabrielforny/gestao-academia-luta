import {
  environment
} from "./chunk-RZVP4UO7.js";
import {
  HttpClient,
  inject,
  ɵɵdefineInjectable
} from "./chunk-7TD4H62Z.js";

// src/app/core/services/modelo-contrato.service.ts
var ModeloContratoService = class _ModeloContratoService {
  constructor() {
    this.http = inject(HttpClient);
    this.api = `${environment.apiUrl}/api/contratos/modelos`;
  }
  listar() {
    return this.http.get(this.api);
  }
  obter(id) {
    return this.http.get(`${this.api}/${id}`);
  }
  criar(data) {
    return this.http.post(this.api, data);
  }
  atualizar(id, data) {
    return this.http.put(`${this.api}/${id}`, data);
  }
  excluir(id) {
    return this.http.delete(`${this.api}/${id}`);
  }
  static {
    this.\u0275fac = function ModeloContratoService_Factory(t) {
      return new (t || _ModeloContratoService)();
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _ModeloContratoService, factory: _ModeloContratoService.\u0275fac, providedIn: "root" });
  }
};

export {
  ModeloContratoService
};
//# sourceMappingURL=chunk-WIR67AHK.js.map
