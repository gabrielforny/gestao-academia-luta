import "./chunk-7G5TR5RR.js";

// src/app/features/modalidades/modalidades.routes.ts
var modalidadesRoutes = [
  {
    path: "",
    loadComponent: () => import("./chunk-BFXAMGVO.js").then((m) => m.ModalidadesListaComponent),
    title: "Modalidades \u2014 Academia Fight"
  },
  {
    path: "novo",
    loadComponent: () => import("./chunk-FFN7XNBG.js").then((m) => m.ModalidadeFormComponent),
    title: "Nova Modalidade \u2014 Academia Fight"
  },
  {
    path: ":id/editar",
    loadComponent: () => import("./chunk-FFN7XNBG.js").then((m) => m.ModalidadeFormComponent),
    title: "Editar Modalidade \u2014 Academia Fight"
  },
  {
    path: ":id",
    loadComponent: () => import("./chunk-T2UG5FBT.js").then((m) => m.ModalidadeDetalheComponent),
    title: "Modalidade \u2014 Academia Fight"
  }
];
export {
  modalidadesRoutes
};
//# sourceMappingURL=chunk-A7YO7EZG.js.map
