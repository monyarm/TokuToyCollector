"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var Sqlite = require("nativescript-sqlite");
var Inventory = /** @class */ (function () {
    function Inventory() {
        var _this = this;
        if (!this.isInstantiated) {
            (new Sqlite("inventory.db")).then(function (db) {
                db.execSQL("CREATE TABLE IF NOT EXISTS items " +
                    "(id INTEGER PRIMARY KEY AUTOINCREMENT, name TEXT, franchise TEXT, series TEXT, productImage TEXT, packagingImage TEXT, toyLine TEXT, releaseDate TEXT, toyQuality TEXT)")
                    .then(function (id) {
                    _this.db = db;
                    _this.isInstantiated = true;
                }, function (error) {
                    console.log("CREATE TABLE ERROR", error);
                });
            }, function (error) {
                console.log("OPEN DB ERROR", error);
            });
        }
    }
    Inventory.prototype.insert = function (data) {
        return this.db.
            execSQL("INSERT INTO items (name, franchise, series, productImage, packagingImage, toyLine, releaseDate, toyQuality ) " +
            "VALUES (?, ?, ?, ?, ?, ?, ?, ?)", [data.name, data.franchise, data.series, data.productImage, data.packagingImage, data.toyLine, data.releaseDate, data.toyQuality]);
    };
    Inventory.prototype.delete = function (id) {
        return this.db.
            execSQL("DELETE FROM items WHERE id = " + id);
    };
    Inventory.prototype.getById = function (id) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.db.all("SELECT * FROM items where id = " + id).then(function (rows) {
                var item = {
                    "id": rows[0][0],
                    "name": rows[0][1],
                    "franchise": rows[0][2],
                    "series": rows[0][3],
                    "productImage": rows[0][4],
                    "packagingImage": rows[0][5],
                    "toyLine": rows[0][6],
                    "releaseDate": rows[0][7],
                    "toyQuality": rows[0][8]
                };
                resolve(item);
            }, function (error) {
                reject(error);
            });
        });
    };
    Inventory.prototype.fetch = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.db.all("SELECT * FROM items").then(function (rows) {
                var items = [];
                for (var row in rows) {
                    items.push({
                        "id": rows[row][0],
                        "name": rows[row][1],
                        "franchise": rows[row][2],
                        "series": rows[row][3],
                        "productImage": rows[row][4],
                        "packagingImage": rows[row][5],
                        "toyLine": rows[row][6],
                        "releaseDate": rows[row][7],
                        "toyQuality": rows[row][8]
                    });
                }
                resolve(items);
            }, function (error) {
                reject(error);
            });
        });
    };
    Inventory = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [])
    ], Inventory);
    return Inventory;
}());
exports.Inventory = Inventory;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaXRlbXMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpdGVtcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUEyQztBQUMzQyxJQUFJLE1BQU0sR0FBRyxPQUFPLENBQUMscUJBQXFCLENBQUMsQ0FBQztBQUc1QztJQUlJO1FBQUEsaUJBZUM7UUFkRyxFQUFFLENBQUEsQ0FBQyxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsQ0FBQyxDQUFDO1lBQzFCLENBQUMsSUFBSSxNQUFNLENBQUMsY0FBYyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBQSxFQUFFO2dCQUNoQyxFQUFFLENBQUMsT0FBTyxDQUFDLG1DQUFtQztvQkFDOUMseUtBQXlLLENBQUM7cUJBQ3pLLElBQUksQ0FBQyxVQUFBLEVBQUU7b0JBQ0osS0FBSSxDQUFDLEVBQUUsR0FBRyxFQUFFLENBQUM7b0JBQ2IsS0FBSSxDQUFDLGNBQWMsR0FBRyxJQUFJLENBQUM7Z0JBQy9CLENBQUMsRUFBRSxVQUFBLEtBQUs7b0JBQ0osT0FBTyxDQUFDLEdBQUcsQ0FBQyxvQkFBb0IsRUFBRSxLQUFLLENBQUMsQ0FBQztnQkFDN0MsQ0FBQyxDQUFDLENBQUM7WUFDUCxDQUFDLEVBQUUsVUFBQSxLQUFLO2dCQUNKLE9BQU8sQ0FBQyxHQUFHLENBQUMsZUFBZSxFQUFFLEtBQUssQ0FBQyxDQUFDO1lBQ3hDLENBQUMsQ0FBQyxDQUFDO1FBQ1AsQ0FBQztJQUNELENBQUM7SUFHTSwwQkFBTSxHQUFiLFVBQWMsSUFBUztRQUNuQixNQUFNLENBQUMsSUFBSSxDQUFDLEVBQUU7WUFDVixPQUFPLENBQ0gsK0dBQStHO1lBQy9HLGlDQUFpQyxFQUNoQyxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLFNBQVMsRUFBRSxJQUFJLENBQUMsTUFBTSxFQUFFLElBQUksQ0FBQyxZQUFZLEVBQUUsSUFBSSxDQUFDLGNBQWMsRUFBRSxJQUFJLENBQUMsT0FBTyxFQUFFLElBQUksQ0FB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QkFDSixNQUFNLENBQUMsS0FBSyxDQUFDLENBQUM7WUFDbEIsQ0FBQyxDQUFDLENBQUM7UUFDUCxDQUFDLENBQUMsQ0FBQztJQUNQLENBQUM7SUFoRlEsU0FBUztRQURyQixpQkFBVSxFQUFFOztPQUNBLFNBQVMsQ0FrRm5CO0lBQUQsZ0JBQUM7Q0FBQSxBQWxGSCxJQWtGRztBQWxGVSw4QkFBUyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xudmFyIFNxbGl0ZSA9IHJlcXVpcmUoXCJuYXRpdmVzY3JpcHQtc3FsaXRlXCIpO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgSW52ZW50b3J5IHtcbiAgICBwcml2YXRlIGRiOiBhbnk7XG4gICAgcHJpdmF0ZSBpc0luc3RhbnRpYXRlZDogYm9vbGVhbjtcblxuICAgIHB1YmxpYyBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgaWYoIXRoaXMuaXNJbnN0YW50aWF0ZWQpIHtcbiAgICAgICAgKG5ldyBTcWxpdGUoXCJpbnZlbnRvcnkuZGJcIikpLnRoZW4oZGIgPT4ge1xuICAgICAgICAgICAgZGIuZXhlY1NRTChcIkNSRUFURSBUQUJMRSBJRiBOT1QgRVhJU1RTIGl0ZW1zIFwiK1xuICAgICAgICAgICAgXCIoaWQgSU5URUdFUiBQUklNQVJZIEtFWSBBVVRPSU5DUkVNRU5ULCBuYW1lIFRFWFQsIGZyYW5jaGlzZSBURVhULCBzZXJpZXMgVEVYVCwgcHJvZHVjdEltYWdlIFRFWFQsIHBhY2thZ2luZ0ltYWdlIFRFWFQsIHRveUxpbmUgVEVYVCwgcmVsZWFzZURhdGUgVEVYVCwgdG95UXVhbGl0eSBURVhUKVwiKVxuICAgICAgICAgICAgLnRoZW4oaWQgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMuZGIgPSBkYjtcbiAgICAgICAgICAgICAgICB0aGlzLmlzSW5zdGFudGlhdGVkID0gdHJ1ZTtcbiAgICAgICAgICAgIH0sIGVycm9yID0+IHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIkNSRUFURSBUQUJMRSBFUlJPUlwiLCBlcnJvcik7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSwgZXJyb3IgPT4ge1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCJPUEVOIERCIEVSUk9SXCIsIGVycm9yKTtcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIH1cbiAgICBcblxuICAgIHB1YmxpYyBpbnNlcnQoZGF0YTogYW55KTogUHJvbWlzZTxhbnk+IHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZGIuXG4gICAgICAgICAgICBleGVjU1FMKFxuICAgICAgICAgICAgICAgIFwiSU5TRVJUIElOVE8gaXRlbXMgKG5hbWUsIGZyYW5jaGlzZSwgc2VyaWVzLCBwcm9kdWN0SW1hZ2UsIHBhY2thZ2luZ0ltYWdlLCB0b3lMaW5lLCByZWxlYXNlRGF0ZSwgdG95UXVhbGl0eSApIFwiK1xuICAgICAgICAgICAgICAgIFwiVkFMVUVTICg/LCA/LCA/LCA/LCA/LCA/LCA/LCA/KVwiLFxuICAgICAgICAgICAgICAgICBbZGF0YS5uYW1lLCBkYXRhLmZyYW5jaGlzZSwgZGF0YS5zZXJpZXMsIGRhdGEucHJvZHVjdEltYWdlLCBkYXRhLnBhY2thZ2luZ0ltYWdlLCBkYXRhLnRveUxpbmUsIGRhdGEucmVsZWFzZURhdGUsIGRhdGEudG95UXVhbGl0eV0pO1xuICAgIH1cblxuICAgIHB1YmxpYyBkZWxldGUoaWQ6IE51bWJlcik6IFByb21pc2U8YW55PiB7XG4gICAgICAgIHJldHVybiB0aGlzLmRiLlxuICAgICAgICAgICAgZXhlY1NRTChcbiAgICAgICAgICAgICAgICBcIkRFTEVURSBGUk9NIGl0ZW1zIFdIRVJFIGlkID0gXCIgKyBpZFxuICAgICAgICAgICAgKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgZ2V0QnlJZChpZDogTnVtYmVyKTogUHJvbWlzZTxhbnk+IHtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgICAgICAgIHRoaXMuZGIuYWxsKFwiU0VMRUNUICogRlJPTSBpdGVtcyB3aGVyZSBpZCA9IFwiICsgaWQpLnRoZW4ocm93cyA9PiB7XG4gICAgICAgICAgICAgICAgbGV0IGl0ZW0gPSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBcImlkXCI6IHJvd3NbMF1bMF0sXG4gICAgICAgICAgICAgICAgICAgICAgICBcIm5hbWVcIjogcm93c1swXVsxXSxcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiZnJhbmNoaXNlXCI6IHJvd3NbMF1bMl0sXG4gICAgICAgICAgICAgICAgICAgICAgICBcInNlcmllc1wiOiByb3dzWzBdWzNdLFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJwcm9kdWN0SW1hZ2VcIjogcm93c1swXVs0XSxcbiAgICAgICAgICAgICAgICAgICAgICAgIFwicGFja2FnaW5nSW1hZ2VcIjogcm93c1swXVs1XSxcbiAgICAgICAgICAgICAgICAgICAgICAgIFwidG95TGluZVwiOiByb3dzWzBdWzZdLFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJyZWxlYXNlRGF0ZVwiOiByb3dzWzBdWzddLFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJ0b3lRdWFsaXR5XCI6IHJvd3NbMF1bOF1cbiAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICByZXNvbHZlKGl0ZW0pO1xuICAgICAgICAgICAgfSwgZXJyb3IgPT4ge1xuICAgICAgICAgICAgICAgIHJlamVjdChlcnJvcik7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIHB1YmxpYyBmZXRjaCgpOiBQcm9taXNlPGFueT4ge1xuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5kYi5hbGwoXCJTRUxFQ1QgKiBGUk9NIGl0ZW1zXCIpLnRoZW4ocm93cyA9PiB7XG4gICAgICAgICAgICAgICAgbGV0IGl0ZW1zID0gW107XG4gICAgICAgICAgICAgICAgZm9yKHZhciByb3cgaW4gcm93cykge1xuICAgICAgICAgICAgICAgICAgICBpdGVtcy5wdXNoKHtcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiaWRcIjogcm93c1tyb3ddWzBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJuYW1lXCI6IHJvd3Nbcm93XVsxXSxcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiZnJhbmNoaXNlXCI6IHJvd3Nbcm93XVsyXSxcbiAgICAgICAgICAgICAgICAgICAgICAgIFwic2VyaWVzXCI6IHJvd3Nbcm93XVszXSxcbiAgICAgICAgICAgICAgICAgICAgICAgIFwicHJvZHVjdEltYWdlXCI6IHJvd3Nbcm93XVs0XSxcbiAgICAgICAgICAgICAgICAgICAgICAgIFwicGFja2FnaW5nSW1hZ2VcIjogcm93c1tyb3ddWzVdLFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJ0b3lMaW5lXCI6IHJvd3Nbcm93XVs2XSxcbiAgICAgICAgICAgICAgICAgICAgICAgIFwicmVsZWFzZURhdGVcIjogcm93c1tyb3ddWzddLFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJ0b3lRdWFsaXR5XCI6IHJvd3Nbcm93XVs4XVxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmVzb2x2ZShpdGVtcyk7XG4gICAgICAgICAgICB9LCBlcnJvciA9PiB7XG4gICAgICAgICAgICAgICAgcmVqZWN0KGVycm9yKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgXG4gIH1cblxuIl19