import {
  environment
} from "./chunk-RZVP4UO7.js";
import {
  HttpClient,
  inject,
  ɵɵdefineInjectable
} from "./chunk-7TD4H62Z.js";

// src/app/core/services/graduacao.service.ts
var GraduacaoService = class _GraduacaoService {
  constructor() {
    this.http = inject(HttpClient);
    this.apiGrad = `${environment.apiUrl}/api/graduacoes`;
    this.apiFaixa = `${environment.apiUrl}/api/faixas`;
  }
  getHistoricoAluno(alunoId) {
    return this.http.get(this.apiGrad, { params: { alunoId } });
  }
  registrar(data) {
    return this.http.post(this.apiGrad, data);
  }
  getAptos(faixaId) {
    return this.http.get(`${this.apiGrad}/aptos`, { params: { faixaId } });
  }
  getAllFaixas() {
    return this.http.get(this.apiFaixa);
  }
  getFaixasByModalidade(modalidadeId) {
    return this.http.get(this.apiFaixa, { params: { modalidadeId } });
  }
  criarFaixa(data) {
    return this.http.post(this.apiFaixa, data);
  }
  atualizarFaixa(id, data) {
    return this.http.put(`${this.apiFaixa}/${id}`, data);
  }
  deletarFaixa(id) {
    return this.http.delete(`${this.apiFaixa}/${id}`);
  }
  reordenarFaixas(modalidadeId, ids) {
    return this.http.patch(`${this.apiFaixa}/reordenar`, { modalidadeId, ids });
  }
  static {
    this.\u0275fac = function GraduacaoService_Factory(t) {
      return new (t || _GraduacaoService)();
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _GraduacaoService, factory: _GraduacaoService.\u0275fac, providedIn: "root" });
  }
};

export {
  GraduacaoService
};
//# sourceMappingURL=chunk-YRGTKKTY.js.map
