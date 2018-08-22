"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var dialogs_1 = require("tns-core-modules/ui/dialogs/dialogs");
var Data = require("~/data/data.json");
var QrResolver = /** @class */ (function () {
    function QrResolver() {
    }
    QrResolver.resolve = function (url) {
        var items = Data.filter(function (x) { return (x.QRdata == url || url.includes(x.QRdata)); });
        console.log(items || "nothing found");
        if (items.length == 1) {
            return items[0];
        }
        else {
            dialogs_1.action({
                title: "Choose a toy",
                cancelButtonText: "Cancel",
                actions: items.map(function (y) { return y.name; })
            }).then(function (result) {
                return items.filter(function (x) { return x.name == result; });
            });
        }
    };
    return QrResolver;
}());
exports.QrResolver = QrResolver;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUXItcmVzb2x2ZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJRci1yZXNvbHZlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLCtEQUE2RDtBQUU3RCxJQUFNLElBQUksR0FBRyxPQUFPLENBQUMsa0JBQWtCLENBQUMsQ0FBQztBQUV6QztJQUFBO0lBaUJBLENBQUM7SUFmVSxrQkFBTyxHQUFkLFVBQWUsR0FBVztRQUN0QixJQUFJLEtBQUssR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLFVBQUEsQ0FBQyxJQUFJLE9BQUEsQ0FBQyxDQUFDLENBQUMsTUFBTSxJQUFJLEdBQUcsSUFBSSxHQUFHLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxFQUEzQyxDQUEyQyxDQUFDLENBQUM7UUFDMUUsT0FBTyxDQUFDLEdBQUcsQ0FBQyxLQUFLLElBQUksZUFBZSxDQUFDLENBQUM7UUFDdEMsRUFBRSxDQUFBLENBQUMsS0FBSyxDQUFDLE1BQU0sSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQUEsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQTtRQUFBLENBQUM7UUFDdkMsSUFBSSxDQUFDLENBQUM7WUFDRixnQkFBTSxDQUFDO2dCQUNILEtBQUssRUFBRSxjQUFjO2dCQUNyQixnQkFBZ0IsRUFBRSxRQUFRO2dCQUMxQixPQUFPLEVBQUUsS0FBSyxDQUFDLEdBQUcsQ0FBQyxVQUFBLENBQUMsSUFBSSxPQUFBLENBQUMsQ0FBQyxJQUFJLEVBQU4sQ0FBTSxDQUFDO2FBQ2xDLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBQyxNQUFNO2dCQUNYLE1BQU0sQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLFVBQUEsQ0FBQyxJQUFJLE9BQUEsQ0FBQyxDQUFDLElBQUksSUFBSSxNQUFNLEVBQWhCLENBQWdCLENBQUMsQ0FBQztZQUMvQyxDQUFDLENBQUMsQ0FBQztRQUVQLENBQUM7SUFDTCxDQUFDO0lBQ0wsaUJBQUM7QUFBRCxDQUFDLEFBakJELElBaUJDO0FBakJZLGdDQUFVIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgYWN0aW9uIH0gZnJvbSBcInRucy1jb3JlLW1vZHVsZXMvdWkvZGlhbG9ncy9kaWFsb2dzXCI7XG5cbmNvbnN0IERhdGEgPSByZXF1aXJlKFwifi9kYXRhL2RhdGEuanNvblwiKTtcblxuZXhwb3J0IGNsYXNzIFFyUmVzb2x2ZXIge1xuXG4gICAgc3RhdGljIHJlc29sdmUodXJsOiBTdHJpbmcpIHtcbiAgICAgICAgdmFyIGl0ZW1zID0gRGF0YS5maWx0ZXIoeCA9PiAoeC5RUmRhdGEgPT0gdXJsIHx8IHVybC5pbmNsdWRlcyh4LlFSZGF0YSkpKTtcbiAgICAgICAgY29uc29sZS5sb2coaXRlbXMgfHwgXCJub3RoaW5nIGZvdW5kXCIpO1xuICAgICAgICBpZihpdGVtcy5sZW5ndGggPT0gMSkge3JldHVybiBpdGVtc1swXX1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBhY3Rpb24oe1xuICAgICAgICAgICAgICAgIHRpdGxlOiBcIkNob29zZSBhIHRveVwiLFxuICAgICAgICAgICAgICAgIGNhbmNlbEJ1dHRvblRleHQ6IFwiQ2FuY2VsXCIsXG4gICAgICAgICAgICAgICAgYWN0aW9uczogaXRlbXMubWFwKHkgPT4geS5uYW1lKVxuICAgICAgICAgICAgfSkudGhlbigocmVzdWx0KSA9PiB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGl0ZW1zLmZpbHRlcih4ID0+IHgubmFtZSA9PSByZXN1bHQpO1xuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgfVxuICAgIH1cbn0iXX0=