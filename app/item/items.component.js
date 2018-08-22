"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var items_1 = require("~/item/items");
var dialogs_1 = require("tns-core-modules/ui/dialogs/dialogs");
var page_1 = require("tns-core-modules/ui/page/page");
var router_1 = require("nativescript-angular/router");
var nativescript_barcodescanner_1 = require("nativescript-barcodescanner");
var Qr_resolver_1 = require("~/Qr-resolver");
var appSettings = require("tns-core-modules/application-settings/application-settings");
var timer = require("tns-core-modules/timer/timer");
var render3_1 = require("@angular/core/src/render3");
var nativescript_ui_listview_1 = require("nativescript-ui-listview");
var Data = require("~/data/data.json");
var inventory = new items_1.Inventory;
var ItemsComponent = /** @class */ (function () {
    function ItemsComponent(page, routerExtentions) {
        var _this = this;
        this.page = page;
        this.routerExtentions = routerExtentions;
        this.barcodeScanner = new nativescript_barcodescanner_1.BarcodeScanner();
        this.groupId = 0;
        this.items = [];
        this.buttonsHidden = true;
        this.page.on(page_1.Page.navigatingToEvent, function () {
            console.log("navigating to this page");
            nativescript_ui_listview_1.RadListView.groupingFunctionProperty = null;
            nativescript_ui_listview_1.RadListView.groupingFunctionProperty = this.myGroupingFunc;
        });
        timer.setInterval(function () {
            _this.groupId = appSettings.getNumber("lGroupId", 0);
        }, 1000);
        this.myGroupingFunc = function (item) {
            if (_this.groupId == 1) {
                return item.franchise;
            }
            else if (_this.groupId == 2) {
                return item.series;
            }
            else if (_this.groupId == 3) {
                return item.toyLine;
            }
            return item.franchise;
        };
    }
    Object.defineProperty(ItemsComponent.prototype, "myGroupingFunc", {
        get: function () {
            return this._myGroupingFunc;
        },
        set: function (value) {
            this._myGroupingFunc = value;
        },
        enumerable: true,
        configurable: true
    });
    ItemsComponent.prototype.ngOnInit = function () {
        var _this = this;
        setTimeout(function () {
            _this.fetch();
        }, 150);
    };
    ItemsComponent.prototype.insert = function (item) {
        var _this = this;
        inventory.insert(item).then(function (result) {
            _this.fetch();
        });
    };
    ItemsComponent.prototype.fetch = function () {
        var _this = this;
        inventory.fetch().then(function (result) {
            _this.items = result;
            console.log(_this.items);
        });
    };
    ItemsComponent.prototype.delete = function (id) {
        var _this = this;
        inventory.delete(id).then(function (result) {
            _this.fetch();
        });
    };
    ItemsComponent.prototype.randomInt = function (min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    };
    ItemsComponent.prototype.tapPlus = function () {
        this.buttonsHidden = !this.buttonsHidden;
    };
    ItemsComponent.prototype.tapDebug = function () {
        this.insert(Data[this.randomInt(0, Data.length)]);
        this.buttonsHidden = !this.buttonsHidden;
    };
    ItemsComponent.prototype.tapQR = function () {
        var _this = this;
        this.buttonsHidden = !this.buttonsHidden;
        this.barcodeScanner.requestCameraPermission().then(function (value) {
            _this.barcodeScanner.scan({
                formats: "QR_CODE",
                showFlipCameraButton: true,
                preferFrontCamera: false,
                showTorchButton: true,
                beepOnScan: true,
                torchOn: false,
                resultDisplayDuration: 500,
                orientation: "vertical",
                openSettingsIfPermissionWasPreviouslyDenied: true
            }).then(function (result) {
                var toy = Qr_resolver_1.QrResolver.resolve(result.text);
                _this.insert(toy);
            }, function (errorMessage) {
                console.log("Error when scanning " + errorMessage);
            });
        });
    };
    ItemsComponent.prototype.tapManual = function () {
        this.buttonsHidden = !this.buttonsHidden;
        this.routerExtentions.navigate(["/search"]);
    };
    ItemsComponent.prototype.deleteItem = function (args) {
        var _this = this;
        dialogs_1.confirm({
            title: "Delete this item ?",
            neutralButtonText: "No",
            okButtonText: "Yes"
        }).then(function (result) {
            if (result) {
                _this.delete(args.object.itemId);
            }
        });
    };
    __decorate([
        core_1.ViewChild("grouped"),
        __metadata("design:type", render3_1.ComponentRef)
    ], ItemsComponent.prototype, "groupView", void 0);
    ItemsComponent = __decorate([
        core_1.Component({
            selector: "ns-items",
            moduleId: module.id,
            templateUrl: "./items.component.html",
            styleUrls: ["items.component.css"]
        }),
        __metadata("design:paramtypes", [page_1.Page,
            router_1.RouterExtensions])
    ], ItemsComponent);
    return ItemsComponent;
}());
exports.ItemsComponent = ItemsComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaXRlbXMuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiaXRlbXMuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQTZEO0FBQzdELHNDQUF3QztBQUV4QywrREFBOEQ7QUFDOUQsc0RBQXFEO0FBQ3JELHNEQUErRDtBQUMvRCwyRUFBNkQ7QUFDN0QsNkNBQTJDO0FBQzNDLHdGQUEwRjtBQUMxRixvREFBc0Q7QUFDdEQscURBQXlEO0FBQ3pELHFFQUF1RDtBQUV2RCxJQUFNLElBQUksR0FBRyxPQUFPLENBQUMsa0JBQWtCLENBQUMsQ0FBQztBQUV6QyxJQUFNLFNBQVMsR0FBRyxJQUFJLGlCQUFTLENBQUM7QUFTaEM7SUFPSSx3QkFDWSxJQUFVLEVBQ1YsZ0JBQWtDO1FBRjlDLGlCQXFCQztRQXBCVyxTQUFJLEdBQUosSUFBSSxDQUFNO1FBQ1YscUJBQWdCLEdBQWhCLGdCQUFnQixDQUFrQjtRQVA5QyxtQkFBYyxHQUFtQixJQUFJLDRDQUFjLEVBQUUsQ0FBQztRQUN0RCxZQUFPLEdBQVcsQ0FBQyxDQUFDO1FBQ3BCLFVBQUssR0FBWSxFQUFFLENBQUM7UUFDcEIsa0JBQWEsR0FBWSxJQUFJLENBQUM7UUFPMUIsSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsV0FBSSxDQUFDLGlCQUFpQixFQUFFO1lBQ2pDLE9BQU8sQ0FBQyxHQUFHLENBQUMseUJBQXlCLENBQUMsQ0FBQztZQUN2QyxzQ0FBVyxDQUFDLHdCQUF3QixHQUFHLElBQUksQ0FBQztZQUM1QyxzQ0FBVyxDQUFDLHdCQUF3QixHQUFHLElBQUksQ0FBQyxjQUFjLENBQUM7UUFDL0QsQ0FBQyxDQUFDLENBQUE7UUFDRixLQUFLLENBQUMsV0FBVyxDQUFDO1lBQ2QsS0FBSSxDQUFDLE9BQU8sR0FBRyxXQUFXLENBQUMsU0FBUyxDQUFDLFVBQVUsRUFBRSxDQUFDLENBQUMsQ0FBQztRQUN4RCxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUM7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QUMsQ0FBQyxDQUFDO0lBQ1AsQ0FBQztJQXJIcUI7UUFBckIsZ0JBQVMsQ0FBQyxTQUFTLENBQUM7a0NBQVksc0JBQVk7cURBQWM7SUFEbEQsY0FBYztRQVIxQixnQkFBUyxDQUFDO1lBQ1AsUUFBUSxFQUFFLFVBQVU7WUFDcEIsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1lBQ25CLFdBQVcsRUFBRSx3QkFBd0I7WUFDckMsU0FBUyxFQUFFLENBQUMscUJBQXFCLENBQUM7U0FDckMsQ0FBQzt5Q0FXb0IsV0FBSTtZQUNRLHlCQUFnQjtPQVRyQyxjQUFjLENBMEgxQjtJQUFELHFCQUFDO0NBQUEsQUExSEQsSUEwSEM7QUExSFksd0NBQWMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgVmlld0NoaWxkIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IEludmVudG9yeX0gZnJvbSBcIn4vaXRlbS9pdGVtc1wiO1xuaW1wb3J0IHsgSXRlbSB9IGZyb20gXCJ+L2l0ZW0vaXRlbVwiO1xuaW1wb3J0IHsgY29uZmlybSB9IGZyb20gXCJ0bnMtY29yZS1tb2R1bGVzL3VpL2RpYWxvZ3MvZGlhbG9nc1wiO1xuaW1wb3J0IHsgUGFnZSB9IGZyb20gXCJ0bnMtY29yZS1tb2R1bGVzL3VpL3BhZ2UvcGFnZVwiO1xuaW1wb3J0IHsgUm91dGVyRXh0ZW5zaW9ucyB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9yb3V0ZXJcIjtcbmltcG9ydCB7IEJhcmNvZGVTY2FubmVyIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1iYXJjb2Rlc2Nhbm5lclwiO1xuaW1wb3J0IHsgUXJSZXNvbHZlciB9IGZyb20gXCJ+L1FyLXJlc29sdmVyXCI7XG5pbXBvcnQgKiBhcyBhcHBTZXR0aW5ncyBmcm9tIFwidG5zLWNvcmUtbW9kdWxlcy9hcHBsaWNhdGlvbi1zZXR0aW5ncy9hcHBsaWNhdGlvbi1zZXR0aW5nc1wiO1xuaW1wb3J0ICogYXMgdGltZXIgZnJvbSBcInRucy1jb3JlLW1vZHVsZXMvdGltZXIvdGltZXJcIjtcbmltcG9ydCB7IENvbXBvbmVudFJlZiB9IGZyb20gXCJAYW5ndWxhci9jb3JlL3NyYy9yZW5kZXIzXCI7XG5pbXBvcnQgeyBSYWRMaXN0VmlldyB9IGZyb20gXCJuYXRpdmVzY3JpcHQtdWktbGlzdHZpZXdcIjtcblxuY29uc3QgRGF0YSA9IHJlcXVpcmUoXCJ+L2RhdGEvZGF0YS5qc29uXCIpO1xuXG5jb25zdCBpbnZlbnRvcnkgPSBuZXcgSW52ZW50b3J5O1xuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6IFwibnMtaXRlbXNcIixcbiAgICBtb2R1bGVJZDogbW9kdWxlLmlkLFxuICAgIHRlbXBsYXRlVXJsOiBcIi4vaXRlbXMuY29tcG9uZW50Lmh0bWxcIixcbiAgICBzdHlsZVVybHM6IFtcIml0ZW1zLmNvbXBvbmVudC5jc3NcIl1cbn0pXG5cblxuZXhwb3J0IGNsYXNzIEl0ZW1zQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgICBAVmlld0NoaWxkKFwiZ3JvdXBlZFwiKSBncm91cFZpZXc6IENvbXBvbmVudFJlZjxSYWRMaXN0Vmlldz47XG4gICAgYmFyY29kZVNjYW5uZXI6IEJhcmNvZGVTY2FubmVyID0gbmV3IEJhcmNvZGVTY2FubmVyKCk7XG4gICAgZ3JvdXBJZDogTnVtYmVyID0gMDtcbiAgICBpdGVtcyA6IEl0ZW1bXSA9IFtdO1xuICAgIGJ1dHRvbnNIaWRkZW46IEJvb2xlYW4gPSB0cnVlO1xuICAgIHByaXZhdGUgX215R3JvdXBpbmdGdW5jOiAoaXRlbTogYW55KSA9PiBhbnk7XG4gICAgcHVibGljIGNvbnN0cnVjdG9yKFxuICAgICAgICBwcml2YXRlIHBhZ2U6IFBhZ2UsICBcbiAgICAgICAgcHJpdmF0ZSByb3V0ZXJFeHRlbnRpb25zOiBSb3V0ZXJFeHRlbnNpb25zXG4gICAgICAgIFxuICAgICkge1xuICAgICAgICB0aGlzLnBhZ2Uub24oUGFnZS5uYXZpZ2F0aW5nVG9FdmVudCwgZnVuY3Rpb24oKXtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwibmF2aWdhdGluZyB0byB0aGlzIHBhZ2VcIik7XG4gICAgICAgICAgICBSYWRMaXN0Vmlldy5ncm91cGluZ0Z1bmN0aW9uUHJvcGVydHkgPSBudWxsO1xuICAgICAgICAgICAgUmFkTGlzdFZpZXcuZ3JvdXBpbmdGdW5jdGlvblByb3BlcnR5ID0gdGhpcy5teUdyb3VwaW5nRnVuYztcbiAgICAgICAgfSlcbiAgICAgICAgdGltZXIuc2V0SW50ZXJ2YWwoKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5ncm91cElkID0gYXBwU2V0dGluZ3MuZ2V0TnVtYmVyKFwibEdyb3VwSWRcIiwgMCk7XG4gICAgICAgIH0sIDEwMDApO1xuXG4gICAgICAgIHRoaXMubXlHcm91cGluZ0Z1bmMgPSAoaXRlbTogSXRlbSkgPT4ge1xuICAgICAgICAgICAgICAgIGlmKHRoaXMuZ3JvdXBJZCA9PSAxKXtyZXR1cm4gaXRlbS5mcmFuY2hpc2V9XG4gICAgICAgICAgICAgICAgZWxzZSBpZiAodGhpcy5ncm91cElkID09IDIpe3JldHVybiBpdGVtLnNlcmllc31cbiAgICAgICAgICAgICAgICBlbHNlIGlmICh0aGlzLmdyb3VwSWQgPT0gMyl7cmV0dXJuIGl0ZW0udG95TGluZX1cbiAgICAgICAgICAgICAgICByZXR1cm4gaXRlbS5mcmFuY2hpc2U7XG4gICAgICAgIH1cblxuICAgIH1cblxuICAgIGdldCBteUdyb3VwaW5nRnVuYygpOiAoaXRlbTogYW55KSA9PiBhbnkge1xuICAgICAgICByZXR1cm4gdGhpcy5fbXlHcm91cGluZ0Z1bmM7XG4gICAgfVxuXG4gICAgc2V0IG15R3JvdXBpbmdGdW5jKHZhbHVlOiAoaXRlbTogYW55KSA9PiBhbnkpIHtcbiAgICAgICAgdGhpcy5fbXlHcm91cGluZ0Z1bmMgPSB2YWx1ZTtcbiAgICB9XG4gICAgXG4gICAgcHVibGljIG5nT25Jbml0KCkge1xuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgIHRoaXMuZmV0Y2goKTtcbiAgICAgICAgfSwgMTUwKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgaW5zZXJ0KGl0ZW0pIHtcbiAgICAgICAgaW52ZW50b3J5Lmluc2VydChpdGVtKS50aGVuKHJlc3VsdCA9PiB7XG4gICAgICAgICAgICB0aGlzLmZldGNoKCk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHB1YmxpYyBmZXRjaCgpIHtcbiAgICAgICAgaW52ZW50b3J5LmZldGNoKCkudGhlbihyZXN1bHQgPT4ge1xuICAgICAgICAgICAgdGhpcy5pdGVtcyA9IHJlc3VsdDtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHRoaXMuaXRlbXMpO1xuICAgICAgICB9KTtcbiAgICAgICAgXG4gICAgfVxuXG4gICAgcHVibGljIGRlbGV0ZShpZCkge1xuICAgICAgICBpbnZlbnRvcnkuZGVsZXRlKGlkKS50aGVuKHJlc3VsdCA9PiB7XG4gICAgICAgICAgICB0aGlzLmZldGNoKCk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHJhbmRvbUludChtaW4sIG1heCl7XG4gICAgICAgIHJldHVybiBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAobWF4IC0gbWluICsgMSkpICsgbWluO1xuICAgIH1cblxuICAgIHB1YmxpYyB0YXBQbHVzKCkge1xuICAgICAgICB0aGlzLmJ1dHRvbnNIaWRkZW4gPSAhdGhpcy5idXR0b25zSGlkZGVuO1xuICAgIH1cblxuICAgIHB1YmxpYyB0YXBEZWJ1ZygpIHtcbiAgICAgICAgdGhpcy5pbnNlcnQoRGF0YVt0aGlzLnJhbmRvbUludCgwLCBEYXRhLmxlbmd0aCldKTtcbiAgICAgICAgdGhpcy5idXR0b25zSGlkZGVuID0gIXRoaXMuYnV0dG9uc0hpZGRlbjtcbiAgICB9XG5cbiAgICBwdWJsaWMgdGFwUVIoKSB7XG4gICAgICAgIHRoaXMuYnV0dG9uc0hpZGRlbiA9ICF0aGlzLmJ1dHRvbnNIaWRkZW47XG4gICAgICAgICAgICB0aGlzLmJhcmNvZGVTY2FubmVyLnJlcXVlc3RDYW1lcmFQZXJtaXNzaW9uKCkudGhlbigodmFsdWUpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLmJhcmNvZGVTY2FubmVyLnNjYW4oe1xuICAgICAgICAgICAgICAgICAgICBmb3JtYXRzOiBcIlFSX0NPREVcIixcbiAgICAgICAgICAgICAgICAgICAgc2hvd0ZsaXBDYW1lcmFCdXR0b246IHRydWUsICAgXG4gICAgICAgICAgICAgICAgICAgIHByZWZlckZyb250Q2FtZXJhOiBmYWxzZSwgICAgIFxuICAgICAgICAgICAgICAgICAgICBzaG93VG9yY2hCdXR0b246IHRydWUsICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgYmVlcE9uU2NhbjogdHJ1ZSwgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIHRvcmNoT246IGZhbHNlLCAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICByZXN1bHREaXNwbGF5RHVyYXRpb246IDUwMCwgICBcbiAgICAgICAgICAgICAgICAgICAgb3JpZW50YXRpb246IFwidmVydGljYWxcIiwgICAgIFxuICAgICAgICAgICAgICAgICAgICBvcGVuU2V0dGluZ3NJZlBlcm1pc3Npb25XYXNQcmV2aW91c2x5RGVuaWVkOiB0cnVlXG4gICAgICAgICAgICAgICAgICAgIH0pLnRoZW4oKHJlc3VsdCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHRveSA9IFFyUmVzb2x2ZXIucmVzb2x2ZShyZXN1bHQudGV4dCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmluc2VydCh0b3kpO1xuICAgICAgICAgICAgICAgICAgICB9LCAoZXJyb3JNZXNzYWdlKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIkVycm9yIHdoZW4gc2Nhbm5pbmcgXCIgKyBlcnJvck1lc3NhZ2UpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgKVxuICAgICAgICBcbiAgICB9XG5cbiAgICBwdWJsaWMgdGFwTWFudWFsKCkge1xuICAgICAgICB0aGlzLmJ1dHRvbnNIaWRkZW4gPSAhdGhpcy5idXR0b25zSGlkZGVuO1xuICAgICAgICB0aGlzLnJvdXRlckV4dGVudGlvbnMubmF2aWdhdGUoW1wiL3NlYXJjaFwiXSk7XG4gICAgfVxuXG4gICAgcHVibGljIGRlbGV0ZUl0ZW0oYXJncykge1xuICAgICAgICBjb25maXJtKHtcbiAgICAgICAgICAgIHRpdGxlOiBcIkRlbGV0ZSB0aGlzIGl0ZW0gP1wiLFxuICAgICAgICAgICAgbmV1dHJhbEJ1dHRvblRleHQ6IFwiTm9cIixcbiAgICAgICAgICAgIG9rQnV0dG9uVGV4dDogXCJZZXNcIlxuICAgICAgICB9KS50aGVuKChyZXN1bHQ6IEJvb2xlYW4pID0+IHtcbiAgICAgICAgICAgIGlmKHJlc3VsdCl7XG4gICAgICAgICAgICAgICAgdGhpcy5kZWxldGUoYXJncy5vYmplY3QuaXRlbUlkKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgXG5cbn1cblxuIl19