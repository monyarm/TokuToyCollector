import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Item } from "~/item/item";
import { Inventory } from "~/item/items";
const inventory = new Inventory;

@Component({
    selector: "ns-details",
    moduleId: module.id,
    templateUrl: "./item-detail.component.html",
    styleUrls: ["./item-detail.component.css"]
})
export class ItemDetailComponent implements OnInit {
    item: Item;
    constructor(
        private route: ActivatedRoute
    ) { }

    ngOnInit(): void {
        const id = this.route.snapshot.params["id"];
        this.item;
        inventory.getById(id).then(result => {
            this.item = result;
        });
    }
}
