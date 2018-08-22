"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var dialogs_1 = require("nativescript-angular/directives/dialogs");
var appSettings = require("application-settings");
var ItemModal = /** @class */ (function () {
    function ItemModal(params) {
        this.params = params;
        this.items = ["None", "Franchise", "Series", "Toyline"];
        this.selectedIndex = appSettings.getNumber("lGroupId", 0);
        this.checkYes = true;
    }
    ItemModal.prototype.close = function (res) {
        this.params.closeCallback(res);
    };
    ItemModal.prototype.onChange = function (args) {
        console.log(args.newIndex);
        appSettings.setNumber("lGroupId", args.newIndex);
    };
    ItemModal = __decorate([
        core_1.Component({
            selector: "my-modal",
            templateUrl: "./item/item.modal.html",
            styleUrls: ["./item/item.modal.css"]
        }),
        __metadata("design:paramtypes", [dialogs_1.ModalDialogParams])
    ], ItemModal);
    return ItemModal;
}());
exports.ItemModal = ItemModal;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaXRlbS5tb2RhbC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIml0ZW0ubW9kYWwudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBeUM7QUFDekMsbUVBQTRFO0FBRTVFLGtEQUFvRDtBQU9wRDtJQUlJLG1CQUEyQixNQUF5QjtRQUF6QixXQUFNLEdBQU4sTUFBTSxDQUFtQjtRQUhwRCxVQUFLLEdBQUcsQ0FBQyxNQUFNLEVBQUMsV0FBVyxFQUFDLFFBQVEsRUFBQyxTQUFTLENBQUMsQ0FBQztRQUNoRCxrQkFBYSxHQUFHLFdBQVcsQ0FBQyxTQUFTLENBQUMsVUFBVSxFQUFFLENBQUMsQ0FBQyxDQUFDO1FBQ3JELGFBQVEsR0FBRyxJQUFJLENBQUM7SUFFaEIsQ0FBQztJQUVNLHlCQUFLLEdBQVosVUFBYSxHQUFXO1FBQ3BCLElBQUksQ0FBQyxNQUFNLENBQUMsYUFBYSxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBQ25DLENBQUM7SUFFTSw0QkFBUSxHQUFmLFVBQWdCLElBQW1DO1FBQy9DLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBQzNCLFdBQVcsQ0FBQyxTQUFTLENBQUMsVUFBVSxFQUFFLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztJQUNyRCxDQUFDO0lBZFEsU0FBUztRQUxyQixnQkFBUyxDQUFDO1lBQ1AsUUFBUSxFQUFFLFVBQVU7WUFDcEIsV0FBVyxFQUFFLHdCQUF3QjtZQUNyQyxTQUFTLEVBQUUsQ0FBQyx1QkFBdUIsQ0FBQztTQUN2QyxDQUFDO3lDQUtxQywyQkFBaUI7T0FKM0MsU0FBUyxDQWdCckI7SUFBRCxnQkFBQztDQUFBLEFBaEJELElBZ0JDO0FBaEJZLDhCQUFTIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50fSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgTW9kYWxEaWFsb2dQYXJhbXMgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvZGlyZWN0aXZlcy9kaWFsb2dzXCI7XG5pbXBvcnQgeyBTZWxlY3RlZEluZGV4Q2hhbmdlZEV2ZW50RGF0YSB9IGZyb20gXCJuYXRpdmVzY3JpcHQtZHJvcC1kb3duXCI7XG5pbXBvcnQgKiBhcyBhcHBTZXR0aW5ncyBmcm9tIFwiYXBwbGljYXRpb24tc2V0dGluZ3NcIjtcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6IFwibXktbW9kYWxcIixcbiAgICB0ZW1wbGF0ZVVybDogXCIuL2l0ZW0vaXRlbS5tb2RhbC5odG1sXCIsXG4gICAgc3R5bGVVcmxzOiBbXCIuL2l0ZW0vaXRlbS5tb2RhbC5jc3NcIl1cbn0pXG5leHBvcnQgY2xhc3MgSXRlbU1vZGFsIHtcbiAgICBpdGVtcyA9IFtcIk5vbmVcIixcIkZyYW5jaGlzZVwiLFwiU2VyaWVzXCIsXCJUb3lsaW5lXCJdO1xuICAgIHNlbGVjdGVkSW5kZXggPSBhcHBTZXR0aW5ncy5nZXROdW1iZXIoXCJsR3JvdXBJZFwiLCAwKTtcbiAgICBjaGVja1llcyA9IHRydWU7XG4gICAgcHVibGljIGNvbnN0cnVjdG9yKHByaXZhdGUgcGFyYW1zOiBNb2RhbERpYWxvZ1BhcmFtcykge1xuICAgIH1cblxuICAgIHB1YmxpYyBjbG9zZShyZXM6IHN0cmluZykge1xuICAgICAgICB0aGlzLnBhcmFtcy5jbG9zZUNhbGxiYWNrKHJlcyk7XG4gICAgfVxuXG4gICAgcHVibGljIG9uQ2hhbmdlKGFyZ3M6IFNlbGVjdGVkSW5kZXhDaGFuZ2VkRXZlbnREYXRhKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKGFyZ3MubmV3SW5kZXgpO1xuICAgICAgICBhcHBTZXR0aW5ncy5zZXROdW1iZXIoXCJsR3JvdXBJZFwiLCBhcmdzLm5ld0luZGV4KTtcbiAgICB9XG5cbn0iXX0=