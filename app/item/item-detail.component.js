"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var items_1 = require("~/item/items");
var inventory = new items_1.Inventory;
var ItemDetailComponent = /** @class */ (function () {
    function ItemDetailComponent(route) {
        this.route = route;
    }
    ItemDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        var id = this.route.snapshot.params["id"];
        this.item;
        inventory.getById(id).then(function (result) {
            _this.item = result;
        });
    };
    ItemDetailComponent = __decorate([
        core_1.Component({
            selector: "ns-details",
            moduleId: module.id,
            templateUrl: "./item-detail.component.html",
            styleUrls: ["./item-detail.component.css"]
        }),
        __metadata("design:paramtypes", [router_1.ActivatedRoute])
    ], ItemDetailComponent);
    return ItemDetailComponent;
}());
exports.ItemDetailComponent = ItemDetailComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaXRlbS1kZXRhaWwuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiaXRlbS1kZXRhaWwuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQWtEO0FBQ2xELDBDQUFpRDtBQUVqRCxzQ0FBeUM7QUFDekMsSUFBTSxTQUFTLEdBQUcsSUFBSSxpQkFBUyxDQUFDO0FBUWhDO0lBRUksNkJBQ1ksS0FBcUI7UUFBckIsVUFBSyxHQUFMLEtBQUssQ0FBZ0I7SUFDN0IsQ0FBQztJQUVMLHNDQUFRLEdBQVI7UUFBQSxpQkFNQztRQUxHLElBQU0sRUFBRSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUM1QyxJQUFJLENBQUMsSUFBSSxDQUFDO1FBQ1YsU0FBUyxDQUFDLE9BQU8sQ0FBQyxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBQSxNQUFNO1lBQzdCLEtBQUksQ0FBQyxJQUFJLEdBQUcsTUFBTSxDQUFDO1FBQ3ZCLENBQUMsQ0FBQyxDQUFDO0lBQ1AsQ0FBQztJQVpRLG1CQUFtQjtRQU4vQixnQkFBUyxDQUFDO1lBQ1AsUUFBUSxFQUFFLFlBQVk7WUFDdEIsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1lBQ25CLFdBQVcsRUFBRSw4QkFBOEI7WUFDM0MsU0FBUyxFQUFFLENBQUMsNkJBQTZCLENBQUM7U0FDN0MsQ0FBQzt5Q0FJcUIsdUJBQWM7T0FIeEIsbUJBQW1CLENBYS9CO0lBQUQsMEJBQUM7Q0FBQSxBQWJELElBYUM7QUFiWSxrREFBbUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBBY3RpdmF0ZWRSb3V0ZSB9IGZyb20gXCJAYW5ndWxhci9yb3V0ZXJcIjtcbmltcG9ydCB7IEl0ZW0gfSBmcm9tIFwifi9pdGVtL2l0ZW1cIjtcbmltcG9ydCB7IEludmVudG9yeSB9IGZyb20gXCJ+L2l0ZW0vaXRlbXNcIjtcbmNvbnN0IGludmVudG9yeSA9IG5ldyBJbnZlbnRvcnk7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiBcIm5zLWRldGFpbHNcIixcbiAgICBtb2R1bGVJZDogbW9kdWxlLmlkLFxuICAgIHRlbXBsYXRlVXJsOiBcIi4vaXRlbS1kZXRhaWwuY29tcG9uZW50Lmh0bWxcIixcbiAgICBzdHlsZVVybHM6IFtcIi4vaXRlbS1kZXRhaWwuY29tcG9uZW50LmNzc1wiXVxufSlcbmV4cG9ydCBjbGFzcyBJdGVtRGV0YWlsQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgICBpdGVtOiBJdGVtO1xuICAgIGNvbnN0cnVjdG9yKFxuICAgICAgICBwcml2YXRlIHJvdXRlOiBBY3RpdmF0ZWRSb3V0ZVxuICAgICkgeyB9XG5cbiAgICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICAgICAgY29uc3QgaWQgPSB0aGlzLnJvdXRlLnNuYXBzaG90LnBhcmFtc1tcImlkXCJdO1xuICAgICAgICB0aGlzLml0ZW07XG4gICAgICAgIGludmVudG9yeS5nZXRCeUlkKGlkKS50aGVuKHJlc3VsdCA9PiB7XG4gICAgICAgICAgICB0aGlzLml0ZW0gPSByZXN1bHQ7XG4gICAgICAgIH0pO1xuICAgIH1cbn1cbiJdfQ==