import { NgModule, NO_ERRORS_SCHEMA, NgModuleFactoryLoader } from "@angular/core";
import { NativeScriptModule } from "nativescript-angular/nativescript.module";
import { AppRoutingModule } from "~/app.routing";
import { AppComponent } from "~/app.component";

import {NativeScriptFormsModule} from "nativescript-angular/forms"
import { NativeScriptCommonModule } from "nativescript-angular/common";

@NgModule({
    bootstrap: [
        AppComponent
    ],
    imports: [
        NativeScriptModule,
        AppRoutingModule,
        NativeScriptFormsModule,
        NativeScriptCommonModule
    ],
    declarations: [
        AppComponent,
    ],
    providers: [
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})


/*
Pass your application module to the bootstrapModule function located in main.ts to start your app
*/
export class AppModule { }
