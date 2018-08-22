import { Component} from "@angular/core";
import { SelectedIndexChangedEventData } from "nativescript-drop-down";
import * as appSettings from "tns-core-modules/application-settings/application-settings";



@Component({
    selector: "my-modal",
    templateUrl: "./settings.component.html",
})
export class SettingsComponent {
    items = ["None","Franchise","Series","Toyline"];
    selectedIndex = appSettings.getNumber("lGroupId", 0);
    checkYes = true;
    public constructor() {
        
    }

    public onChangeDropDown(args: SelectedIndexChangedEventData) {
        appSettings.setNumber("lGroupId", args.newIndex);
        
    }
    
}