import { NgModule } from "@angular/core";
import { NativeScriptRouterModule } from "nativescript-angular/router";
import { Routes } from "@angular/router";

const routes: Routes = [
  { path: "", redirectTo: "/items", pathMatch: "full" },
  { path: "items", loadChildren: "~/modules/items/items.module#ItemsModule" },
  {
    path: "item/:id",
    loadChildren: "~/modules/item-detail/item-detail.module#ItemDetailModule"
  },
  {
    path: "search",
    loadChildren: "~/modules/search/search.module#SearchModule"
  },
  {
    path: "settings",
    loadChildren: "~/modules/settings/settings.module#SettingsModule"
  }
];

@NgModule({
  imports: [NativeScriptRouterModule.forRoot(routes)],
  exports: [NativeScriptRouterModule]
})
export class AppRoutingModule {}
