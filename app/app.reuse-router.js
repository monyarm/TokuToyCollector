"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var ns_location_strategy_1 = require("nativescript-angular/router/ns-location-strategy");
var ns_route_reuse_strategy_1 = require("nativescript-angular/router/ns-route-reuse-strategy");
var CustomRouteReuseStrategy = /** @class */ (function (_super) {
    __extends(CustomRouteReuseStrategy, _super);
    function CustomRouteReuseStrategy(location) {
        return _super.call(this, location) || this;
    }
    CustomRouteReuseStrategy.prototype.shouldReuseRoute = function (future, curr) {
        return false;
    };
    CustomRouteReuseStrategy = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [ns_location_strategy_1.NSLocationStrategy])
    ], CustomRouteReuseStrategy);
    return CustomRouteReuseStrategy;
}(ns_route_reuse_strategy_1.NSRouteReuseStrategy));
exports.CustomRouteReuseStrategy = CustomRouteReuseStrategy;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLnJldXNlLXJvdXRlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImFwcC5yZXVzZS1yb3V0ZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBMkM7QUFFM0MseUZBQXNGO0FBQ3RGLCtGQUEyRjtBQUczRjtJQUE4Qyw0Q0FBb0I7SUFFOUQsa0NBQVksUUFBNEI7ZUFDcEMsa0JBQU0sUUFBUSxDQUFDO0lBQ2xCLENBQUM7SUFFRixtREFBZ0IsR0FBaEIsVUFBaUIsTUFBOEIsRUFBRSxJQUE0QjtRQUN6RSxNQUFNLENBQUMsS0FBSyxDQUFDO0lBQ2pCLENBQUM7SUFSUSx3QkFBd0I7UUFEcEMsaUJBQVUsRUFBRTt5Q0FHYSx5Q0FBa0I7T0FGL0Isd0JBQXdCLENBU3BDO0lBQUQsK0JBQUM7Q0FBQSxBQVRELENBQThDLDhDQUFvQixHQVNqRTtBQVRZLDREQUF3QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEFjdGl2YXRlZFJvdXRlU25hcHNob3QgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuaW1wb3J0IHsgTlNMb2NhdGlvblN0cmF0ZWd5IH0gZnJvbSAnbmF0aXZlc2NyaXB0LWFuZ3VsYXIvcm91dGVyL25zLWxvY2F0aW9uLXN0cmF0ZWd5JztcbmltcG9ydCB7IE5TUm91dGVSZXVzZVN0cmF0ZWd5IH0gZnJvbSAnbmF0aXZlc2NyaXB0LWFuZ3VsYXIvcm91dGVyL25zLXJvdXRlLXJldXNlLXN0cmF0ZWd5JztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIEN1c3RvbVJvdXRlUmV1c2VTdHJhdGVneSBleHRlbmRzIE5TUm91dGVSZXVzZVN0cmF0ZWd5IHtcblxuICAgIGNvbnN0cnVjdG9yKGxvY2F0aW9uOiBOU0xvY2F0aW9uU3RyYXRlZ3kpIHtcbiAgICAgICAgc3VwZXIobG9jYXRpb24pO1xuICAgICB9XG5cbiAgICBzaG91bGRSZXVzZVJvdXRlKGZ1dHVyZTogQWN0aXZhdGVkUm91dGVTbmFwc2hvdCwgY3VycjogQWN0aXZhdGVkUm91dGVTbmFwc2hvdCk6IGJvb2xlYW4ge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxufSJdfQ==