"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var items_1 = require("~/item/items");
var router_1 = require("nativescript-angular/router");
var timer = require("tns-core-modules/timer/timer");
var Data = require("~/data/data.json");
var inventory = new items_1.Inventory;
var SearchComponent = /** @class */ (function () {
    function SearchComponent(routerExtentions) {
        var _this = this;
        this.routerExtentions = routerExtentions;
        this.searchText = "";
        timer.setInterval(function () {
            _this.update();
        }, 500);
    }
    SearchComponent.prototype.update = function () {
        var _this = this;
        this.results = Data.filter(function (result) {
            var text = result.franchise + " " + result.series + " " + result.toyLine + " " + result.name;
            return text.toLowerCase().includes(_this.searchText.toLowerCase());
        });
    };
    SearchComponent.prototype.add = function (args) {
        inventory.insert(args.object.item);
        this.routerExtentions.navigate(["/items"]);
    };
    SearchComponent = __decorate([
        core_1.Component({
            selector: "ns-app",
            moduleId: module.id,
            templateUrl: "./search.component.html"
        }),
        __metadata("design:paramtypes", [router_1.RouterExtensions])
    ], SearchComponent);
    return SearchComponent;
}());
exports.SearchComponent = SearchComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VhcmNoLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInNlYXJjaC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBMEM7QUFDMUMsc0NBQXlDO0FBRXpDLHNEQUErRDtBQUMvRCxvREFBc0Q7QUFFdEQsSUFBTSxJQUFJLEdBQVcsT0FBTyxDQUFDLGtCQUFrQixDQUFDLENBQUM7QUFFakQsSUFBTSxTQUFTLEdBQUcsSUFBSSxpQkFBUyxDQUFDO0FBT2hDO0lBR0kseUJBQ1ksZ0JBQWtDO1FBRDlDLGlCQU1FO1FBTFUscUJBQWdCLEdBQWhCLGdCQUFnQixDQUFrQjtRQUg5QyxlQUFVLEdBQVcsRUFBRSxDQUFDO1FBS3BCLEtBQUssQ0FBQyxXQUFXLENBQUM7WUFDZCxLQUFJLENBQUMsTUFBTSxFQUFFLENBQUM7UUFDbEIsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxDQUFDO0lBQ1gsQ0FBQztJQUVLLGdDQUFNLEdBQWI7UUFBQSxpQkFLQztRQUpHLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxVQUFBLE1BQU07WUFDN0IsSUFBSSxJQUFJLEdBQUksTUFBTSxDQUFDLFNBQVMsU0FBSSxNQUFNLENBQUMsTUFBTSxTQUFJLE1BQU0sQ0FBQyxPQUFPLFNBQUksTUFBTSxDQUFDLElBQU0sQ0FBQTtZQUNoRixNQUFNLENBQUMsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDLFFBQVEsQ0FBQyxLQUFJLENBQUMsVUFBVSxDQUFDLFdBQVcsRUFBRSxDQUFDLENBQUE7UUFDckUsQ0FBQyxDQUFDLENBQUM7SUFDUCxDQUFDO0lBRU0sNkJBQUcsR0FBVixVQUFXLElBQUk7UUFDWCxTQUFTLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDbkMsSUFBSSxDQUFDLGdCQUFnQixDQUFDLFFBQVEsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUM7SUFDL0MsQ0FBQztJQXJCUSxlQUFlO1FBTDNCLGdCQUFTLENBQUM7WUFDUCxRQUFRLEVBQUUsUUFBUTtZQUNsQixRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDbkIsV0FBVyxFQUFFLHlCQUF5QjtTQUN6QyxDQUFDO3lDQUtnQyx5QkFBZ0I7T0FKckMsZUFBZSxDQXNCMUI7SUFBRCxzQkFBQztDQUFBLEFBdEJGLElBc0JFO0FBdEJXLDBDQUFlIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IEludmVudG9yeSB9IGZyb20gXCJ+L2l0ZW0vaXRlbXNcIjtcbmltcG9ydCB7IEl0ZW0gfSBmcm9tIFwifi9pdGVtL2l0ZW1cIjtcbmltcG9ydCB7IFJvdXRlckV4dGVuc2lvbnMgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvcm91dGVyXCI7XG5pbXBvcnQgKiBhcyB0aW1lciBmcm9tIFwidG5zLWNvcmUtbW9kdWxlcy90aW1lci90aW1lclwiO1xuXG5jb25zdCBEYXRhOiBJdGVtW10gPSByZXF1aXJlKFwifi9kYXRhL2RhdGEuanNvblwiKTtcblxuY29uc3QgaW52ZW50b3J5ID0gbmV3IEludmVudG9yeTtcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6IFwibnMtYXBwXCIsXG4gICAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcbiAgICB0ZW1wbGF0ZVVybDogXCIuL3NlYXJjaC5jb21wb25lbnQuaHRtbFwiXG59KVxuZXhwb3J0IGNsYXNzIFNlYXJjaENvbXBvbmVudCB7XG4gICAgc2VhcmNoVGV4dDogc3RyaW5nID0gXCJcIjtcbiAgICByZXN1bHRzOiBJdGVtW107XG4gICAgY29uc3RydWN0b3IoXG4gICAgICAgIHByaXZhdGUgcm91dGVyRXh0ZW50aW9uczogUm91dGVyRXh0ZW5zaW9uc1xuICAgICkge1xuICAgICAgICB0aW1lci5zZXRJbnRlcnZhbCgoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLnVwZGF0ZSgpO1xuICAgICAgICB9LCA1MDApO1xuICAgICB9XG5cbiAgICBwdWJsaWMgdXBkYXRlKCkge1xuICAgICAgICB0aGlzLnJlc3VsdHMgPSBEYXRhLmZpbHRlcihyZXN1bHQgPT4ge1xuICAgICAgICAgICAgdmFyIHRleHQ9YCR7cmVzdWx0LmZyYW5jaGlzZX0gJHtyZXN1bHQuc2VyaWVzfSAke3Jlc3VsdC50b3lMaW5lfSAke3Jlc3VsdC5uYW1lfWBcbiAgICAgICAgICAgIHJldHVybiB0ZXh0LnRvTG93ZXJDYXNlKCkuaW5jbHVkZXModGhpcy5zZWFyY2hUZXh0LnRvTG93ZXJDYXNlKCkpXG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHB1YmxpYyBhZGQoYXJncykge1xuICAgICAgICBpbnZlbnRvcnkuaW5zZXJ0KGFyZ3Mub2JqZWN0Lml0ZW0pO1xuICAgICAgICB0aGlzLnJvdXRlckV4dGVudGlvbnMubmF2aWdhdGUoW1wiL2l0ZW1zXCJdKTtcbiAgICB9XG4gfVxuIl19