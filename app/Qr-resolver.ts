import { action } from "tns-core-modules/ui/dialogs/dialogs";

const Data = require("~/data/data.json");

export class QrResolver {
  static resolve(url: String) {
    var items = Data.filter(x => x.QRdata == url || url.includes(x.QRdata));
    console.log(items || "nothing found");
    if (items.length == 1) {
      return items[0];
    } else {
      action({
        title: "Choose a toy",
        cancelButtonText: "Cancel",
        actions: items.map(y => y.name)
      }).then(result => {
        return items.filter(x => x.name == result);
      });
    }
  }
}
