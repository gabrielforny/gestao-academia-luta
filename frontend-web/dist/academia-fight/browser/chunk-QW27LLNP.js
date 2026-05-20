import "./chunk-7G5TR5RR.js";

// src/app/features/contratos/contratos.routes.ts
var contratosRoutes = [
  {
    path: "",
    loadComponent: () => import("./chunk-IBH3234J.js").then((m) => m.ContratosListaComponent),
    title: "Contratos \u2014 Academia Fight"
  },
  {
    path: "modelos",
    loadComponent: () => import("./chunk-Y55HB2KO.js").then((m) => m.ContratosModelosComponent),
    title: "Modelos de Contrato \u2014 Academia Fight"
  },
  {
    path: ":id",
    loadComponent: () => import("./chunk-6QHLAJLA.js").then((m) => m.ContratoDetalheComponent),
    title: "Contrato \u2014 Academia Fight"
  }
];
export {
  contratosRoutes
};
//# sourceMappingURL=chunk-QW27LLNP.js.map
