import {
  environment
} from "./chunk-RZVP4UO7.js";
import {
  Router
} from "./chunk-QYA4BMW3.js";
import {
  HttpClient,
  inject,
  signal,
  tap,
  ɵɵdefineInjectable
} from "./chunk-YRJQ7ZE3.js";

// src/app/core/services/auth.service.ts
var ACCESS_TOKEN_KEY = "af_access_token";
var REFRESH_TOKEN_KEY = "af_refresh_token";
var AuthService = class _AuthService {
  constructor() {
    this.http = inject(HttpClient);
    this.router = inject(Router);
    this.apiUrl = `${environment.apiUrl}/api/auth`;
    this.currentUser = signal(this.getUser());
  }
  register(request) {
    return this.http.post(`${this.apiUrl}/register`, request).pipe(tap((res) => {
      if (res.sucesso && res.dados) {
        this.salvarTokens(res.dados.accessToken, res.dados.refreshToken);
        this.currentUser.set(this.getUser());
      }
    }));
  }
  login(request) {
    return this.http.post(`${this.apiUrl}/login`, request).pipe(tap((res) => {
      if (res.sucesso && res.dados) {
        this.salvarTokens(res.dados.accessToken, res.dados.refreshToken);
        this.currentUser.set(this.getUser());
      }
    }));
  }
  logout() {
    const refreshToken = localStorage.getItem(REFRESH_TOKEN_KEY);
    if (refreshToken) {
      this.http.post(`${this.apiUrl}/logout`, JSON.stringify(refreshToken), {
        headers: { "Content-Type": "application/json" }
      }).subscribe({ error: () => {
      } });
    }
    this.limparTokens();
    this.currentUser.set(null);
    this.router.navigate(["/login"]);
  }
  alterarSenha(senhaAtual, novaSenha) {
    return this.http.post(`${this.apiUrl}/alterar-senha`, { senhaAtual, novaSenha });
  }
  forgotPassword(email) {
    return this.http.post(`${this.apiUrl}/forgot-password`, { email });
  }
  resetPassword(token, novaSenha) {
    return this.http.post(`${this.apiUrl}/reset-password`, { token, novaSenha });
  }
  refreshToken() {
    const accessToken = localStorage.getItem(ACCESS_TOKEN_KEY) ?? "";
    const refreshToken = localStorage.getItem(REFRESH_TOKEN_KEY) ?? "";
    const payload = { accessToken, refreshToken };
    return this.http.post(`${this.apiUrl}/refresh`, payload).pipe(tap((res) => {
      if (res.sucesso && res.dados) {
        this.salvarTokens(res.dados.accessToken, res.dados.refreshToken);
        this.currentUser.set(this.getUser());
      }
    }));
  }
  isAuthenticated() {
    const token = localStorage.getItem(ACCESS_TOKEN_KEY);
    if (!token)
      return false;
    const payload = this.decodificarToken(token);
    if (!payload)
      return false;
    return payload.exp * 1e3 > Date.now();
  }
  getUser() {
    const token = localStorage.getItem(ACCESS_TOKEN_KEY);
    if (!token)
      return null;
    return this.decodificarToken(token);
  }
  getAccessToken() {
    return localStorage.getItem(ACCESS_TOKEN_KEY);
  }
  getRefreshToken() {
    return localStorage.getItem(REFRESH_TOKEN_KEY);
  }
  salvarTokens(accessToken, refreshToken) {
    localStorage.setItem(ACCESS_TOKEN_KEY, accessToken);
    localStorage.setItem(REFRESH_TOKEN_KEY, refreshToken);
  }
  limparTokens() {
    localStorage.removeItem(ACCESS_TOKEN_KEY);
    localStorage.removeItem(REFRESH_TOKEN_KEY);
  }
  decodificarToken(token) {
    try {
      const partes = token.split(".");
      if (partes.length !== 3)
        return null;
      const base64 = partes[1].replace(/-/g, "+").replace(/_/g, "/");
      const padded = base64.padEnd(base64.length + (4 - base64.length % 4) % 4, "=");
      const raw = JSON.parse(atob(padded));
      if (typeof raw["permissoes"] === "string") {
        try {
          raw["permissoes"] = JSON.parse(raw["permissoes"]);
        } catch {
          raw["permissoes"] = {};
        }
      }
      return raw;
    } catch {
      return null;
    }
  }
  static {
    this.\u0275fac = function AuthService_Factory(t) {
      return new (t || _AuthService)();
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _AuthService, factory: _AuthService.\u0275fac, providedIn: "root" });
  }
};

export {
  AuthService
};
//# sourceMappingURL=chunk-64K7TRDC.js.map
