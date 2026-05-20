import "./chunk-7G5TR5RR.js";

// src/app/features/funcionarios/funcionarios.routes.ts
var funcionariosRoutes = [
  {
    path: "",
    loadComponent: () => import("./chunk-IIQUCDBR.js").then((m) => m.FuncionariosListaComponent),
    title: "Funcion\xE1rios \u2014 Academia Fight"
  },
  {
    path: "novo",
    loadComponent: () => import("./chunk-ZDRNMIT4.js").then((m) => m.FuncionarioFormComponent),
    title: "Novo Funcion\xE1rio \u2014 Academia Fight"
  },
  {
    path: ":id/editar",
    loadComponent: () => import("./chunk-ZDRNMIT4.js").then((m) => m.FuncionarioFormComponent),
    title: "Editar Funcion\xE1rio \u2014 Academia Fight"
  },
  {
    path: ":id",
    loadComponent: () => import("./chunk-BGVDVUV5.js").then((m) => m.FuncionarioDetalheComponent),
    title: "Funcion\xE1rio \u2014 Academia Fight"
  }
];
export {
  funcionariosRoutes
};
//# sourceMappingURL=chunk-Y3JWNNW6.js.map
