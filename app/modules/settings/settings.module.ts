import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { SettingsRoutingModule } from "~/modules/settings/settings.routing";
import { DropDownModule } from "nativescript-drop-down/angular";
import { SettingsComponent } from "~/modules/settings/components/settings.component";
import { NativeScriptCommonModule } from "nativescript-angular/common";
import { NativeScriptFormsModule } from "nativescript-angular/forms";

@NgModule({
  imports: [
    SettingsRoutingModule,
    DropDownModule,
    NativeScriptCommonModule,
    NativeScriptFormsModule
  ],
  declarations: [SettingsComponent],
  providers: [],
  schemas: [NO_ERRORS_SCHEMA]
})

/*
Pass your application module to the bootstrapModule function located in main.ts to start your app
*/
export class SettingsModule {}
