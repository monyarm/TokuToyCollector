import { Component, OnInit, ViewChild, ElementRef } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Item } from "~/item/item";
import { Inventory } from "~/item/items";
import { initializeOnAngular, WebImage } from "nativescript-web-image-cache";
import * as timer from "tns-core-modules/timer/timer";

const inventory = new Inventory();

@Component({
  selector: "ns-details",
  moduleId: module.id,
  templateUrl: "./item-detail.component.html",
  styleUrls: ["./item-detail.component.css"]
})
export class ItemDetailComponent implements OnInit {
  item: Item;
  @ViewChild("image1", {static: false})
  image1: ElementRef;
  @ViewChild("image2", {static: false})
  image2: ElementRef;

  constructor(private route: ActivatedRoute) {
    initializeOnAngular();
  }
  ngAfterViewInit(): void {
    var image1 = <WebImage>this.image1.nativeElement;
    var image2 = <WebImage>this.image2.nativeElement;
    timer.setInterval(function() {
      console.log(image1.isLoading);
      console.log(image2.isLoading);
    }, 500);
  }
  ngOnInit(): void {
    const id = this.route.snapshot.params["id"];
    this.item;
    inventory.getById(id).then(result => {
      this.item = result;
    });
  }
}
