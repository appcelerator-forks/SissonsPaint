function __processArg(obj, key) {
    var arg = null;
    if (obj) {
        arg = obj[key] || null;
        delete obj[key];
    }
    return arg;
}

function Controller() {
    function doMenuClick(e) {
        switch (e.index) {
          case 0:
            navigation("diyPaint");
            break;

          case 1:
            navigation("colourPicker");
            break;

          case 2:
            navigation("colourSwatches");
            break;

          case 3:
            navigation("brochure");
            break;

          case 4:
            navigation("storeLocator");
            break;

          case 5:
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
    if (arguments[0]) {
        {
            __processArg(arguments[0], "__parentSymbol");
        }
        {
            __processArg(arguments[0], "$model");
        }
        {
            __processArg(arguments[0], "__itemTemplate");
        }
    }
    var $ = this;
    var exports = {};
    var __defers = {};
<<<<<<< HEAD
    var __alloyId47 = [];
    $.__views.__alloyId48 = Ti.UI.createTableViewRow({
        height: "50",
        id: "__alloyId48"
    });
    __alloyId47.push($.__views.__alloyId48);
    $.__views.__alloyId49 = Ti.UI.createLabel({
        text: "DIY Paint",
        width: Ti.UI.FILL,
        left: "10",
        id: "__alloyId49"
    });
    $.__views.__alloyId48.add($.__views.__alloyId49);
    $.__views.__alloyId50 = Ti.UI.createTableViewRow({
        height: "50",
        id: "__alloyId50"
    });
    __alloyId47.push($.__views.__alloyId50);
    $.__views.__alloyId51 = Ti.UI.createLabel({
        text: "Colour Picker",
        width: Ti.UI.FILL,
        left: "10",
        id: "__alloyId51"
    });
    $.__views.__alloyId50.add($.__views.__alloyId51);
=======
    var __alloyId51 = [];
>>>>>>> FETCH_HEAD
    $.__views.__alloyId52 = Ti.UI.createTableViewRow({
        height: "50",
        id: "__alloyId52"
    });
<<<<<<< HEAD
    __alloyId47.push($.__views.__alloyId52);
    $.__views.__alloyId53 = Ti.UI.createLabel({
        text: "Colour Swatches",
=======
    __alloyId51.push($.__views.__alloyId52);
    $.__views.__alloyId53 = Ti.UI.createLabel({
        text: "Home",
>>>>>>> FETCH_HEAD
        width: Ti.UI.FILL,
        left: "10",
        id: "__alloyId53"
    });
    $.__views.__alloyId52.add($.__views.__alloyId53);
    $.__views.__alloyId54 = Ti.UI.createTableViewRow({
        height: "50",
        id: "__alloyId54"
    });
<<<<<<< HEAD
    __alloyId47.push($.__views.__alloyId54);
    $.__views.__alloyId55 = Ti.UI.createLabel({
        text: "Brochure",
=======
    __alloyId51.push($.__views.__alloyId54);
    $.__views.__alloyId55 = Ti.UI.createLabel({
        text: "DIY Paint",
>>>>>>> FETCH_HEAD
        width: Ti.UI.FILL,
        left: "10",
        id: "__alloyId55"
    });
    $.__views.__alloyId54.add($.__views.__alloyId55);
    $.__views.__alloyId56 = Ti.UI.createTableViewRow({
        height: "50",
        id: "__alloyId56"
    });
<<<<<<< HEAD
    __alloyId47.push($.__views.__alloyId56);
    $.__views.__alloyId57 = Ti.UI.createLabel({
        text: "Store Locator",
=======
    __alloyId51.push($.__views.__alloyId56);
    $.__views.__alloyId57 = Ti.UI.createLabel({
        text: "Colour Picker",
>>>>>>> FETCH_HEAD
        width: Ti.UI.FILL,
        left: "10",
        id: "__alloyId57"
    });
    $.__views.__alloyId56.add($.__views.__alloyId57);
    $.__views.__alloyId58 = Ti.UI.createTableViewRow({
        height: "50",
        id: "__alloyId58"
    });
<<<<<<< HEAD
    __alloyId47.push($.__views.__alloyId58);
    $.__views.__alloyId59 = Ti.UI.createLabel({
        text: "About Us",
=======
    __alloyId51.push($.__views.__alloyId58);
    $.__views.__alloyId59 = Ti.UI.createLabel({
        text: "Colour Swatches",
>>>>>>> FETCH_HEAD
        width: Ti.UI.FILL,
        left: "10",
        id: "__alloyId59"
    });
    $.__views.__alloyId58.add($.__views.__alloyId59);
<<<<<<< HEAD
    $.__views.menuTable = Ti.UI.createTableView({
        data: __alloyId47,
=======
    $.__views.__alloyId60 = Ti.UI.createTableViewRow({
        height: "50",
        id: "__alloyId60"
    });
    __alloyId51.push($.__views.__alloyId60);
    $.__views.__alloyId61 = Ti.UI.createLabel({
        text: "Brochure",
        width: Ti.UI.FILL,
        left: "10",
        id: "__alloyId61"
    });
    $.__views.__alloyId60.add($.__views.__alloyId61);
    $.__views.__alloyId62 = Ti.UI.createTableViewRow({
        height: "50",
        id: "__alloyId62"
    });
    __alloyId51.push($.__views.__alloyId62);
    $.__views.__alloyId63 = Ti.UI.createLabel({
        text: "Store Locator",
        width: Ti.UI.FILL,
        left: "10",
        id: "__alloyId63"
    });
    $.__views.__alloyId62.add($.__views.__alloyId63);
    $.__views.__alloyId64 = Ti.UI.createTableViewRow({
        height: "50",
        id: "__alloyId64"
    });
    __alloyId51.push($.__views.__alloyId64);
    $.__views.__alloyId65 = Ti.UI.createLabel({
        text: "About Us",
        width: Ti.UI.FILL,
        left: "10",
        id: "__alloyId65"
    });
    $.__views.__alloyId64.add($.__views.__alloyId65);
    $.__views.menuTable = Ti.UI.createTableView({
        data: __alloyId51,
>>>>>>> FETCH_HEAD
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