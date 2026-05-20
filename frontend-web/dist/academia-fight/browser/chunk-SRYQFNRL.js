import "./chunk-7G5TR5RR.js";

// src/app/features/contratos/contratos.routes.ts
var contratosRoutes = [
  {
    path: "",
    loadComponent: () => import("./chunk-KABQNJJ3.js").then((m) => m.ContratosListaComponent),
    title: "Contratos \u2014 Academia Fight"
  },
  {
    path: "modelos",
    loadComponent: () => import("./chunk-MNJDUMFS.js").then((m) => m.ContratosModelosComponent),
    title: "Modelos de Contrato \u2014 Academia Fight"
  },
  {
    path: ":id",
    loadComponent: () => import("./chunk-MDBYMBGG.js").then((m) => m.ContratoDetalheComponent),
    title: "Contrato \u2014 Academia Fight"
  }
];
export {
  contratosRoutes
};
//# sourceMappingURL=chunk-SRYQFNRL.js.map
