import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { SearchComponent } from "~/modules/search/components/search.component";
import { SearchRoutingModule } from "~/modules/search/search.routing";
import { Inventory } from "~/item/items";
import { NativeScriptCommonModule } from "nativescript-angular/common";

@NgModule({imports: [
        SearchRoutingModule,
        NativeScriptCommonModule
    ],
    declarations: [SearchComponent],
    providers: [Inventory],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})


/*
Pass your application module to the bootstrapModule function located in main.ts to start your app
*/
export class SearchModule { }
