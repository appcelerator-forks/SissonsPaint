function Controller() {
    function doMenuClick(e) {
        switch (e.index) {
          case 0:
            navigation("home");
            break;

          case 1:
            navigation("diyPaint");
            break;

          case 2:
            navigation("colourPicker");
            break;

          case 3:
            navigation("colourSwatches");
            break;

          case 4:
            navigation("brochure");
            break;

          case 5:
            navigation("storeLocator");
            break;

          case 6:
            navigation("aboutUs");
        }
    }
    function navigation(target) {
        var nav = Alloy.createController(target).getView();
        Alloy.CFG.contentView.add(nav);
        Alloy.CFG.drawer.toggleLeftWindow();
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "menu";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    var __defers = {};
    var __alloyId52 = [];
    $.__views.__alloyId53 = Ti.UI.createTableViewRow({
        height: "50",
        id: "__alloyId53"
    });
    __alloyId52.push($.__views.__alloyId53);
    $.__views.__alloyId54 = Ti.UI.createLabel({
        text: "Home",
        width: Ti.UI.FILL,
        left: "10",
        id: "__alloyId54"
    });
    $.__views.__alloyId53.add($.__views.__alloyId54);
    $.__views.__alloyId55 = Ti.UI.createTableViewRow({
        height: "50",
        id: "__alloyId55"
    });
    __alloyId52.push($.__views.__alloyId55);
    $.__views.__alloyId56 = Ti.UI.createLabel({
        text: "DIY Paint",
        width: Ti.UI.FILL,
        left: "10",
        id: "__alloyId56"
    });
    $.__views.__alloyId55.add($.__views.__alloyId56);
    $.__views.__alloyId57 = Ti.UI.createTableViewRow({
        height: "50",
        id: "__alloyId57"
    });
    __alloyId52.push($.__views.__alloyId57);
    $.__views.__alloyId58 = Ti.UI.createLabel({
        text: "Colour Picker",
        width: Ti.UI.FILL,
        left: "10",
        id: "__alloyId58"
    });
    $.__views.__alloyId57.add($.__views.__alloyId58);
    $.__views.__alloyId59 = Ti.UI.createTableViewRow({
        height: "50",
        id: "__alloyId59"
    });
    __alloyId52.push($.__views.__alloyId59);
    $.__views.__alloyId60 = Ti.UI.createLabel({
        text: "Colour Swatches",
        width: Ti.UI.FILL,
        left: "10",
        id: "__alloyId60"
    });
    $.__views.__alloyId59.add($.__views.__alloyId60);
    $.__views.__alloyId61 = Ti.UI.createTableViewRow({
        height: "50",
        id: "__alloyId61"
    });
    __alloyId52.push($.__views.__alloyId61);
    $.__views.__alloyId62 = Ti.UI.createLabel({
        text: "Brochure",
        width: Ti.UI.FILL,
        left: "10",
        id: "__alloyId62"
    });
    $.__views.__alloyId61.add($.__views.__alloyId62);
    $.__views.__alloyId63 = Ti.UI.createTableViewRow({
        height: "50",
        id: "__alloyId63"
    });
    __alloyId52.push($.__views.__alloyId63);
    $.__views.__alloyId64 = Ti.UI.createLabel({
        text: "Store Locator",
        width: Ti.UI.FILL,
        left: "10",
        id: "__alloyId64"
    });
    $.__views.__alloyId63.add($.__views.__alloyId64);
    $.__views.__alloyId65 = Ti.UI.createTableViewRow({
        height: "50",
        id: "__alloyId65"
    });
    __alloyId52.push($.__views.__alloyId65);
    $.__views.__alloyId66 = Ti.UI.createLabel({
        text: "About Us",
        width: Ti.UI.FILL,
        left: "10",
        id: "__alloyId66"
    });
    $.__views.__alloyId65.add($.__views.__alloyId66);
    $.__views.menuTable = Ti.UI.createTableView({
        data: __alloyId52,
        id: "menuTable",
        backgroundColor: "#3F3D3D"
    });
    $.__views.menuTable && $.addTopLevelView($.__views.menuTable);
    doMenuClick ? $.__views.menuTable.addEventListener("click", doMenuClick) : __defers["$.__views.menuTable!click!doMenuClick"] = true;
    exports.destroy = function() {};
    _.extend($, $.__views);
    arguments[0] || {};
    __defers["$.__views.menuTable!click!doMenuClick"] && $.__views.menuTable.addEventListener("click", doMenuClick);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;