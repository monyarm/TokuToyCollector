import { Component, OnInit, OnChanges } from "@angular/core";
import { Inventory } from "~/item/items";
import { Item } from "~/item/item";
import { confirm } from "tns-core-modules/ui/dialogs/dialogs";
import { Page } from "tns-core-modules/ui/page/page";
import { RouterExtensions } from "nativescript-angular/router";
import { BarcodeScanner } from "nativescript-barcodescanner";
import { QrResolver } from "~/Qr-resolver";
import * as timer from "tns-core-modules/timer/timer";
import { RadListView } from "nativescript-ui-listview";
import * as appSettings from "tns-core-modules/application-settings/application-settings";

const Data = require("~/data/data.json");

const inventory = new Inventory();
@Component({
  selector: "ns-items",
  moduleId: module.id,
  templateUrl: "./items.component.html",
  styleUrls: ["items.component.css"]
})
export class ItemsComponent implements OnInit, OnChanges {
  barcodeScanner: BarcodeScanner = new BarcodeScanner();
  groupId: Number = 0;
  items: Item[] = [];
  buttonsHidden: Boolean = true;
  groupView: RadListView;
  private _myGroupingFunc: (item: any) => any;
  public constructor(
    private routerExtentions: RouterExtensions,
    private page: Page
  ) {
    this.myGroupingFunc = (item: Item) => {
      if (this.groupId == 1) {
        return item.franchise;
      } else if (this.groupId == 2) {
        return item.series;
      } else if (this.groupId == 3) {
        return item.toyLine;
      }
      return item.franchise;
    };
    this.groupId = appSettings.getNumber("lGroupId", 0);
    this.groupView = <RadListView>this.page.getViewById("groupView");
    if (this.groupView) {
      this.groupView._hasGroupingFunctionChanged = true;
      this.groupView.refresh();
      this.groupView._hasGroupingFunctionChanged = false;
    } else {
      this.groupView = <RadListView>this.page.getViewById("groupView");
    }
  }

  get myGroupingFunc(): (item: any) => any {
    return this._myGroupingFunc;
  }

  set myGroupingFunc(value: (item: any) => any) {
    this._myGroupingFunc = value;
  }
  public ngOnChanges() {}
  public ngOnInit() {
    timer.setTimeout(() => {
      this.fetch();
    }, 150);
  }

  public insert(item) {
    inventory.insert(item).then(result => {
      this.fetch();
    });
  }

  public fetch() {
    inventory.fetch().then(result => {
      this.items = result;
      console.log(this.items);
    });
  }

  public delete(id) {
    inventory.delete(id).then(result => {
      this.fetch();
    });
  }

  randomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  public tapPlus() {
    this.buttonsHidden = !this.buttonsHidden;
  }

  public tapDebug() {
    this.insert(Data[this.randomInt(0, Data.length)]);
    this.buttonsHidden = !this.buttonsHidden;
  }

  public tapQR() {
    this.buttonsHidden = !this.buttonsHidden;
    this.barcodeScanner.requestCameraPermission().then(value => {
      this.barcodeScanner
        .scan({
          formats: "QR_CODE",
          showFlipCameraButton: true,
          preferFrontCamera: false,
          showTorchButton: true,
          beepOnScan: true,
          torchOn: false,
          resultDisplayDuration: 500,
          orientation: "vertical",
          openSettingsIfPermissionWasPreviouslyDenied: true
        })
        .then(
          result => {
            var toy = QrResolver.resolve(result.text);
            this.insert(toy);
          },
          errorMessage => {
            console.log("Error when scanning " + errorMessage);
          }
        );
    });
  }

  public tapManual() {
    this.buttonsHidden = !this.buttonsHidden;
    this.routerExtentions.navigate(["/search"]);
  }

  public deleteItem(args) {
    confirm({
      title: "Delete this item ?",
      neutralButtonText: "No",
      okButtonText: "Yes"
    }).then((result: Boolean) => {
      if (result) {
        this.delete(args.object.itemId);
      }
    });
  }
}
