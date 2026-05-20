import "./chunk-7G5TR5RR.js";

// src/app/features/alunos/alunos.routes.ts
var alunosRoutes = [
  {
    path: "",
    loadComponent: () => import("./chunk-5WNIA7AU.js").then((m) => m.AlunosListaComponent),
    title: "Alunos \u2014 Academia Fight"
  },
  {
    path: "novo",
    loadComponent: () => import("./chunk-JSJVAN2Z.js").then((m) => m.AlunoFormComponent),
    title: "Novo Aluno \u2014 Academia Fight"
  },
  {
    path: ":id/editar",
    loadComponent: () => import("./chunk-JSJVAN2Z.js").then((m) => m.AlunoFormComponent),
    title: "Editar Aluno \u2014 Academia Fight"
  },
  {
    path: ":id",
    loadComponent: () => import("./chunk-J3DX2W2S.js").then((m) => m.AlunoDetalheComponent),
    title: "Detalhe do Aluno \u2014 Academia Fight"
  }
];
export {
  alunosRoutes
};
//# sourceMappingURL=chunk-4PCL5TJ4.js.map
