import "./chunk-7G5TR5RR.js";

// src/app/features/turmas/turmas.routes.ts
var turmasRoutes = [
  {
    path: "",
    loadComponent: () => import("./chunk-ZUCGRLAW.js").then((m) => m.TurmasListaComponent),
    title: "Turmas \u2014 Academia Fight"
  },
  {
    path: "novo",
    loadComponent: () => import("./chunk-XSFSKD2N.js").then((m) => m.TurmaFormComponent),
    title: "Nova Turma \u2014 Academia Fight"
  },
  {
    path: ":id/editar",
    loadComponent: () => import("./chunk-XSFSKD2N.js").then((m) => m.TurmaFormComponent),
    title: "Editar Turma \u2014 Academia Fight"
  },
  {
    path: ":id",
    loadComponent: () => import("./chunk-AAY5FVRI.js").then((m) => m.TurmaDetalheComponent),
    title: "Detalhe da Turma \u2014 Academia Fight"
  }
];
export {
  turmasRoutes
};
//# sourceMappingURL=chunk-4B2DALCP.js.map
