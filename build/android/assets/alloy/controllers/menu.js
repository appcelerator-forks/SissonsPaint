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
    if (arguments[0]) {
        __processArg(arguments[0], "__parentSymbol");
        __processArg(arguments[0], "$model");
        __processArg(arguments[0], "__itemTemplate");
    }
    var $ = this;
    var exports = {};
    var __defers = {};
    var __alloyId15 = [];
    $.__views.__alloyId16 = Ti.UI.createTableViewRow({
        height: "50",
        id: "__alloyId16"
    });
    __alloyId15.push($.__views.__alloyId16);
    $.__views.__alloyId17 = Ti.UI.createLabel({
        text: "Home",
        width: Ti.UI.FILL,
        left: "10",
        id: "__alloyId17"
    });
    $.__views.__alloyId16.add($.__views.__alloyId17);
    $.__views.__alloyId18 = Ti.UI.createTableViewRow({
        height: "50",
        id: "__alloyId18"
    });
    __alloyId15.push($.__views.__alloyId18);
    $.__views.__alloyId19 = Ti.UI.createLabel({
        text: "DIY Paint",
        width: Ti.UI.FILL,
        left: "10",
        id: "__alloyId19"
    });
    $.__views.__alloyId18.add($.__views.__alloyId19);
    $.__views.__alloyId20 = Ti.UI.createTableViewRow({
        height: "50",
        id: "__alloyId20"
    });
    __alloyId15.push($.__views.__alloyId20);
    $.__views.__alloyId21 = Ti.UI.createLabel({
        text: "Colour Picker",
        width: Ti.UI.FILL,
        left: "10",
        id: "__alloyId21"
    });
    $.__views.__alloyId20.add($.__views.__alloyId21);
    $.__views.__alloyId22 = Ti.UI.createTableViewRow({
        height: "50",
        id: "__alloyId22"
    });
    __alloyId15.push($.__views.__alloyId22);
    $.__views.__alloyId23 = Ti.UI.createLabel({
        text: "Colour Swatches",
        width: Ti.UI.FILL,
        left: "10",
        id: "__alloyId23"
    });
    $.__views.__alloyId22.add($.__views.__alloyId23);
    $.__views.__alloyId24 = Ti.UI.createTableViewRow({
        height: "50",
        id: "__alloyId24"
    });
    __alloyId15.push($.__views.__alloyId24);
    $.__views.__alloyId25 = Ti.UI.createLabel({
        text: "Brochure",
        width: Ti.UI.FILL,
        left: "10",
        id: "__alloyId25"
    });
    $.__views.__alloyId24.add($.__views.__alloyId25);
    $.__views.__alloyId26 = Ti.UI.createTableViewRow({
        height: "50",
        id: "__alloyId26"
    });
    __alloyId15.push($.__views.__alloyId26);
    $.__views.__alloyId27 = Ti.UI.createLabel({
        text: "Store Locator",
        width: Ti.UI.FILL,
        left: "10",
        id: "__alloyId27"
    });
    $.__views.__alloyId26.add($.__views.__alloyId27);
    $.__views.__alloyId28 = Ti.UI.createTableViewRow({
        height: "50",
        id: "__alloyId28"
    });
    __alloyId15.push($.__views.__alloyId28);
    $.__views.__alloyId29 = Ti.UI.createLabel({
        text: "About Us",
        width: Ti.UI.FILL,
        left: "10",
        id: "__alloyId29"
    });
    $.__views.__alloyId28.add($.__views.__alloyId29);
    $.__views.menuTable = Ti.UI.createTableView({
        data: __alloyId15,
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