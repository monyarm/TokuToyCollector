import { Injectable } from "@angular/core";
var Sqlite = require("nativescript-sqlite");

@Injectable()
export class Inventory {
    private db: any;
    private isInstantiated: boolean;

    public constructor() {
        if(!this.isInstantiated) {
        (new Sqlite("inventory.db")).then(db => {
            db.execSQL("CREATE TABLE IF NOT EXISTS items "+
            "(id INTEGER PRIMARY KEY AUTOINCREMENT, name TEXT, franchise TEXT, series TEXT, productImage TEXT, packagingImage TEXT, toyLine TEXT, releaseDate TEXT, toyQuality TEXT)")
            .then(id => {
                this.db = db;
                this.isInstantiated = true;
            }, error => {
                console.log("CREATE TABLE ERROR", error);
            });
        }, error => {
            console.log("OPEN DB ERROR", error);
        });
    }
    }
    

    public insert(data: any): Promise<any> {
        return this.db.
            execSQL(
                "INSERT INTO items (name, franchise, series, productImage, packagingImage, toyLine, releaseDate, toyQuality ) "+
                "VALUES (?, ?, ?, ?, ?, ?, ?, ?)",
                 [data.name, data.franchise, data.series, data.productImage, data.packagingImage, data.toyLine, data.releaseDate, data.toyQuality]);
    }

    public delete(id: Number): Promise<any> {
        return this.db.
            execSQL(
                "DELETE FROM items WHERE id = " + id
            );
    }

    public getById(id: Number): Promise<any> {
        return new Promise((resolve, reject) => {
            this.db.all("SELECT * FROM items where id = " + id).then(rows => {
                let item = {
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
            }, error => {
                reject(error);
            });
        });
    }
    public fetch(): Promise<any> {
        return new Promise((resolve, reject) => {
            this.db.all("SELECT * FROM items").then(rows => {
                let items = [];
                for(var row in rows) {
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
            }, error => {
                reject(error);
            });
        });
    }
    
  }

