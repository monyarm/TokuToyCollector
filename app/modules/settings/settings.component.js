"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var appSettings = require("tns-core-modules/application-settings/application-settings");
var router_1 = require("nativescript-angular/router");
var SettingsComponent = /** @class */ (function () {
    function SettingsComponent(routerExtentions) {
        this.routerExtentions = routerExtentions;
        this.items = ["None", "Franchise", "Series", "Toyline"];
        this.selectedIndex = appSettings.getNumber("lGroupId", 0);
        this.checkYes = true;
    }
    SettingsComponent.prototype.onChangeDropDown = function (args) {
        appSettings.setNumber("lGroupId", args.newIndex);
    };
    SettingsComponent = __decorate([
        core_1.Component({
            selector: "my-modal",
            templateUrl: "./settings.component.html",
        }),
        __metadata("design:paramtypes", [router_1.RouterExtensions])
    ], SettingsComponent);
    return SettingsComponent;
}());
exports.SettingsComponent = SettingsComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2V0dGluZ3MuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsic2V0dGluZ3MuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQXlDO0FBR3pDLHdGQUEwRjtBQUMxRixzREFBK0Q7QUFRL0Q7SUFJSSwyQkFBMkIsZ0JBQWtDO1FBQWxDLHFCQUFnQixHQUFoQixnQkFBZ0IsQ0FBa0I7UUFIN0QsVUFBSyxHQUFHLENBQUMsTUFBTSxFQUFDLFdBQVcsRUFBQyxRQUFRLEVBQUMsU0FBUyxDQUFDLENBQUM7UUFDaEQsa0JBQWEsR0FBRyxXQUFXLENBQUMsU0FBUyxDQUFDLFVBQVUsRUFBRSxDQUFDLENBQUMsQ0FBQztRQUNyRCxhQUFRLEdBQUcsSUFBSSxDQUFDO0lBR2hCLENBQUM7SUFFTSw0Q0FBZ0IsR0FBdkIsVUFBd0IsSUFBbUM7UUFDdkQsV0FBVyxDQUFDLFNBQVMsQ0FBQyxVQUFVLEVBQUUsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO0lBQ3JELENBQUM7SUFWUSxpQkFBaUI7UUFKN0IsZ0JBQVMsQ0FBQztZQUNQLFFBQVEsRUFBRSxVQUFVO1lBQ3BCLFdBQVcsRUFBRSwyQkFBMkI7U0FDM0MsQ0FBQzt5Q0FLK0MseUJBQWdCO09BSnBELGlCQUFpQixDQVk3QjtJQUFELHdCQUFDO0NBQUEsQUFaRCxJQVlDO0FBWlksOENBQWlCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50fSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgU2VsZWN0ZWRJbmRleENoYW5nZWRFdmVudERhdGEgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWRyb3AtZG93blwiO1xuaW1wb3J0ICogYXMgYXBwbGljYXRpb24gZnJvbSBcInRucy1jb3JlLW1vZHVsZXMvYXBwbGljYXRpb25cIjtcbmltcG9ydCAqIGFzIGFwcFNldHRpbmdzIGZyb20gXCJ0bnMtY29yZS1tb2R1bGVzL2FwcGxpY2F0aW9uLXNldHRpbmdzL2FwcGxpY2F0aW9uLXNldHRpbmdzXCI7XG5pbXBvcnQgeyBSb3V0ZXJFeHRlbnNpb25zIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL3JvdXRlclwiO1xuXG5cblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6IFwibXktbW9kYWxcIixcbiAgICB0ZW1wbGF0ZVVybDogXCIuL3NldHRpbmdzLmNvbXBvbmVudC5odG1sXCIsXG59KVxuZXhwb3J0IGNsYXNzIFNldHRpbmdzQ29tcG9uZW50IHtcbiAgICBpdGVtcyA9IFtcIk5vbmVcIixcIkZyYW5jaGlzZVwiLFwiU2VyaWVzXCIsXCJUb3lsaW5lXCJdO1xuICAgIHNlbGVjdGVkSW5kZXggPSBhcHBTZXR0aW5ncy5nZXROdW1iZXIoXCJsR3JvdXBJZFwiLCAwKTtcbiAgICBjaGVja1llcyA9IHRydWU7XG4gICAgcHVibGljIGNvbnN0cnVjdG9yKHByaXZhdGUgcm91dGVyRXh0ZW50aW9uczogUm91dGVyRXh0ZW5zaW9ucykge1xuICAgICAgICBcbiAgICB9XG5cbiAgICBwdWJsaWMgb25DaGFuZ2VEcm9wRG93bihhcmdzOiBTZWxlY3RlZEluZGV4Q2hhbmdlZEV2ZW50RGF0YSkge1xuICAgICAgICBhcHBTZXR0aW5ncy5zZXROdW1iZXIoXCJsR3JvdXBJZFwiLCBhcmdzLm5ld0luZGV4KTtcbiAgICB9XG4gICAgXG59Il19