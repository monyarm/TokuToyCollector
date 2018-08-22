import { NgModule } from "@angular/core";
import { NativeScriptRouterModule } from "nativescript-angular/router";
import { Routes } from "@angular/router";
import { ItemDetailComponent } from "~/modules/item-detail/components/item-detail.component";

const routes: Routes = [
    { path: "", component: ItemDetailComponent },
];

@NgModule({
    imports: [NativeScriptRouterModule.forChild(routes)],
    exports: [NativeScriptRouterModule]
})
export class ItemDetailRoutingModule { }