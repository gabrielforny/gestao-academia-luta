import "./chunk-7G5TR5RR.js";

// src/app/features/funcionarios/funcionarios.routes.ts
var funcionariosRoutes = [
  {
    path: "",
    loadComponent: () => import("./chunk-YOFBIV72.js").then((m) => m.FuncionariosListaComponent),
    title: "Funcion\xE1rios \u2014 Academia Fight"
  },
  {
    path: "novo",
    loadComponent: () => import("./chunk-636KJ6ZL.js").then((m) => m.FuncionarioFormComponent),
    title: "Novo Funcion\xE1rio \u2014 Academia Fight"
  },
  {
    path: ":id/editar",
    loadComponent: () => import("./chunk-636KJ6ZL.js").then((m) => m.FuncionarioFormComponent),
    title: "Editar Funcion\xE1rio \u2014 Academia Fight"
  },
  {
    path: ":id",
    loadComponent: () => import("./chunk-RHQVGUB7.js").then((m) => m.FuncionarioDetalheComponent),
    title: "Funcion\xE1rio \u2014 Academia Fight"
  }
];
export {
  funcionariosRoutes
};
//# sourceMappingURL=chunk-3XP4OIOI.js.map
