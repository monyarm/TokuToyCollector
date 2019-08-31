import { Component } from "@angular/core";
import { Inventory } from "~/item/items";
import { Item } from "~/item/item";
import { RouterExtensions } from "nativescript-angular/router";
import { SearchBar } from "tns-core-modules/ui/search-bar";

const Data: Item[] = require("~/data/data.json");

const inventory = new Inventory();

@Component({
  selector: "ns-app",
  moduleId: module.id,
  templateUrl: "./search.component.html"
})
export class SearchComponent {
  results: Item[];
  constructor(private routerExtentions: RouterExtensions) {}

  public onTextChanged(args) {
    var searchBar = <SearchBar>args.object;

    this.results = Data.filter(result => {
      var text =
        result.franchise +
        " " +
        result.series +
        " " +
        result.toyLine +
        " " +
        result.name;
      return text.toLowerCase().includes(searchBar.text.toLowerCase());
    });
  }

  public onSubmit(args) {
    args.object.dismissSoftInput();
    inventory.insert(args.object.item);
    this.routerExtentions.navigate(["/items"]);
  }
}
