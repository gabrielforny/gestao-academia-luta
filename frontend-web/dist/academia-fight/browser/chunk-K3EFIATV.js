import "./chunk-7G5TR5RR.js";

// src/app/features/modalidades/modalidades.routes.ts
var modalidadesRoutes = [
  {
    path: "",
    loadComponent: () => import("./chunk-6Y4G2FJR.js").then((m) => m.ModalidadesListaComponent),
    title: "Modalidades \u2014 Academia Fight"
  },
  {
    path: "novo",
    loadComponent: () => import("./chunk-L3DJ5KZF.js").then((m) => m.ModalidadeFormComponent),
    title: "Nova Modalidade \u2014 Academia Fight"
  },
  {
    path: ":id/editar",
    loadComponent: () => import("./chunk-L3DJ5KZF.js").then((m) => m.ModalidadeFormComponent),
    title: "Editar Modalidade \u2014 Academia Fight"
  },
  {
    path: ":id",
    loadComponent: () => import("./chunk-IJLROVNJ.js").then((m) => m.ModalidadeDetalheComponent),
    title: "Modalidade \u2014 Academia Fight"
  }
];
export {
  modalidadesRoutes
};
//# sourceMappingURL=chunk-K3EFIATV.js.map
