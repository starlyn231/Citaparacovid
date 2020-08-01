import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

// Este objeto de ruta se crea al crear el modulo enlazado a los componentes..
const routes: Routes = [
  {
    path: "home",
    loadChildren: () => import("./home/home.module").then((m) => m.HomeModule),
  },
  {
    path: "result",
    loadChildren: () =>
      import("./result/result.module").then((m) => m.ResultModule),
  },
  {
    path: "",
    pathMatch: "full",
    redirectTo: "home",
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
