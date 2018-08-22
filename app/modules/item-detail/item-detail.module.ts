import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { Inventory } from "~/item/items";
import { NativeScriptUIListViewModule } from "nativescript-ui-listview/angular/listview-directives";
import { ItemDetailRoutingModule } from "~/modules/item-detail/item-detail.routing";
import { ItemDetailComponent } from "~/modules/item-detail/components/item-detail.component";
import { NativeScriptCommonModule } from "nativescript-angular/common";

@NgModule({
    imports: [
        NativeScriptUIListViewModule,
        ItemDetailRoutingModule,
        NativeScriptCommonModule

    ],
    declarations: [ItemDetailComponent],
    providers: [
        Inventory,

    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})


/*
Pass your application module to the bootstrapModule function located in main.ts to start your app
*/
export class ItemDetailModule { }
