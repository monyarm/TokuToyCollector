import { NgModule } from "@angular/core";
import { NativeScriptRouterModule } from "nativescript-angular/router";
import { Routes } from "@angular/router";
import { ItemsComponent } from "~/modules/items/components/items.component";

const routes: Routes = [{ path: "", component: ItemsComponent }];

@NgModule({
  imports: [NativeScriptRouterModule.forChild(routes)],
  exports: [NativeScriptRouterModule]
})
export class ItemsRoutingModule {}
