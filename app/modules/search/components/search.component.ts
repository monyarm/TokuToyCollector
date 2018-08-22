import { Component } from "@angular/core";
import { Inventory } from "~/item/items";
import { Item } from "~/item/item";
import { RouterExtensions } from "nativescript-angular/router";
import * as timer from "tns-core-modules/timer/timer";

const Data: Item[] = require("~/data/data.json");

const inventory = new Inventory;

@Component({
    selector: "ns-app",
    moduleId: module.id,
    templateUrl: "./search.component.html"
})
export class SearchComponent {
    searchText: string = "";
    results: Item[];
    constructor(
        private routerExtentions: RouterExtensions
    ) {
        timer.setInterval(() => {
            this.update();
        }, 500);
     }

    public update() {
        this.results = Data.filter(result => {
            var text=`${result.franchise} ${result.series} ${result.toyLine} ${result.name}`
            return text.toLowerCase().includes(this.searchText.toLowerCase())
        });
    }

    public add(args) {
        inventory.insert(args.object.item);
        this.routerExtentions.navigate(["/items"]);
    }
 }
