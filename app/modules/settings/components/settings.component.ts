import { Component, OnInit } from "@angular/core";
import { SelectedIndexChangedEventData } from "nativescript-drop-down";
import * as appSettings from "tns-core-modules/application-settings/application-settings";
import { RouterExtensions } from "nativescript-angular";
import * as application from "tns-core-modules/application";
import {
  AndroidApplication,
  AndroidActivityBackPressedEventData
} from "application";
import { isAndroid } from "tns-core-modules/platform";

@Component({
  selector: "my-modal",
  templateUrl: "./settings.component.html"
})
export class SettingsComponent implements OnInit {
  items = ["None", "Franchise", "Series", "Toyline"];
  selectedIndex = appSettings.getNumber("lGroupId", 0);
  checkYes = true;

  public constructor(private router: RouterExtensions) {}
  ngOnInit() {
    if (!isAndroid) {
      return;
    }
    application.android.on(
      AndroidApplication.activityBackPressedEvent,
      (data: AndroidActivityBackPressedEventData) => {
        if (this.router.router.isActive("/settings", false)) {
          data.cancel = true; // prevents default back button behavior
        }
      }
    );
  }
  public onChangeDropDown(args: SelectedIndexChangedEventData) {
    appSettings.setNumber("lGroupId", args.newIndex);
  }

  public applySettings() {
    this.router.navigateByUrl("/items");
  }
}
