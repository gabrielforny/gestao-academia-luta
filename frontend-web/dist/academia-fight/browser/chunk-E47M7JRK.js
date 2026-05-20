import {
  signal,
  ɵɵdefineInjectable
} from "./chunk-YRJQ7ZE3.js";

// src/app/core/services/toast.service.ts
var ToastService = class _ToastService {
  constructor() {
    this.toasts = signal([]);
    this._next = 0;
  }
  success(message, duration = 4e3) {
    this._add(message, "success", duration);
  }
  error(message, duration = 5e3) {
    this._add(message, "error", duration);
  }
  info(message, duration = 4e3) {
    this._add(message, "info", duration);
  }
  remove(id) {
    this.toasts.update((t) => t.filter((x) => x.id !== id));
  }
  _add(message, type, duration) {
    const id = ++this._next;
    this.toasts.update((t) => [...t, { id, message, type }]);
    setTimeout(() => this.remove(id), duration);
  }
  static {
    this.\u0275fac = function ToastService_Factory(t) {
      return new (t || _ToastService)();
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _ToastService, factory: _ToastService.\u0275fac, providedIn: "root" });
  }
};

export {
  ToastService
};
//# sourceMappingURL=chunk-E47M7JRK.js.map
