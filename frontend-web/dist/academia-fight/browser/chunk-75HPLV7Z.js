import "./chunk-7G5TR5RR.js";

// src/app/features/turmas/turmas.routes.ts
var turmasRoutes = [
  {
    path: "",
    loadComponent: () => import("./chunk-RXIYFQLS.js").then((m) => m.TurmasListaComponent),
    title: "Turmas \u2014 Academia Fight"
  },
  {
    path: "novo",
    loadComponent: () => import("./chunk-S7CDM3BD.js").then((m) => m.TurmaFormComponent),
    title: "Nova Turma \u2014 Academia Fight"
  },
  {
    path: ":id/editar",
    loadComponent: () => import("./chunk-S7CDM3BD.js").then((m) => m.TurmaFormComponent),
    title: "Editar Turma \u2014 Academia Fight"
  },
  {
    path: ":id",
    loadComponent: () => import("./chunk-LXQANHCG.js").then((m) => m.TurmaDetalheComponent),
    title: "Detalhe da Turma \u2014 Academia Fight"
  }
];
export {
  turmasRoutes
};
//# sourceMappingURL=chunk-75HPLV7Z.js.map
