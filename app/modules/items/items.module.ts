import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { ItemsComponent } from "~/modules/items/components/items.component";
import { Inventory } from "~/item/items";
import { registerElement } from "nativescript-angular/element-registry";
import { BarcodeScanner } from "nativescript-barcodescanner";
import { NativeScriptUIListViewModule } from "nativescript-ui-listview/angular/listview-directives";
import { ItemsRoutingModule } from "~/modules/items/items.routing";
import { CommonModule } from "@angular/common";
import { NativeScriptCommonModule } from "nativescript-angular/common";
import { NativeScriptFormsModule } from "nativescript-angular/forms";
registerElement("Fab", () => require("@nstudio/nativescript-floatingactionbutton").Fab);

@NgModule({
  imports: [
    NativeScriptUIListViewModule,
    ItemsRoutingModule,
    CommonModule,
    NativeScriptCommonModule,
    NativeScriptFormsModule
  ],
  declarations: [ItemsComponent],
  providers: [Inventory, BarcodeScanner],
  schemas: [NO_ERRORS_SCHEMA]
})

/*
Pass your application module to the bootstrapModule function located in main.ts to start your app
*/
export class ItemsModule {}
