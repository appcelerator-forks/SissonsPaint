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
    var __alloyId118 = [];
    $.__views.__alloyId119 = Ti.UI.createTableViewRow({
        height: "50",
        id: "__alloyId119"
    });
    __alloyId118.push($.__views.__alloyId119);
    $.__views.__alloyId120 = Ti.UI.createLabel({
        text: "About Us",
        width: Ti.UI.FILL,
        left: "10",
        id: "__alloyId120"
    });
    $.__views.__alloyId119.add($.__views.__alloyId120);
    $.__views.__alloyId121 = Ti.UI.createTableViewRow({
        height: "50",
        id: "__alloyId121"
    });
    __alloyId118.push($.__views.__alloyId121);
    $.__views.__alloyId122 = Ti.UI.createLabel({
        text: "DIY Paint",
        width: Ti.UI.FILL,
        left: "10",
        id: "__alloyId122"
    });
    $.__views.__alloyId121.add($.__views.__alloyId122);
    $.__views.__alloyId123 = Ti.UI.createTableViewRow({
        height: "50",
        id: "__alloyId123"
    });
    __alloyId118.push($.__views.__alloyId123);
    $.__views.__alloyId124 = Ti.UI.createLabel({
        text: "Colour Picker",
        width: Ti.UI.FILL,
        left: "10",
        id: "__alloyId124"
    });
    $.__views.__alloyId123.add($.__views.__alloyId124);
    $.__views.__alloyId125 = Ti.UI.createTableViewRow({
        height: "50",
        id: "__alloyId125"
    });
    __alloyId118.push($.__views.__alloyId125);
    $.__views.__alloyId126 = Ti.UI.createLabel({
        text: "Colour Swatches",
        width: Ti.UI.FILL,
        left: "10",
        id: "__alloyId126"
    });
    $.__views.__alloyId125.add($.__views.__alloyId126);
    $.__views.__alloyId127 = Ti.UI.createTableViewRow({
        height: "50",
        id: "__alloyId127"
    });
    __alloyId118.push($.__views.__alloyId127);
    $.__views.__alloyId128 = Ti.UI.createLabel({
        text: "Brochures",
        width: Ti.UI.FILL,
        left: "10",
        id: "__alloyId128"
    });
    $.__views.__alloyId127.add($.__views.__alloyId128);
    $.__views.__alloyId129 = Ti.UI.createTableViewRow({
        height: "50",
        id: "__alloyId129"
    });
    __alloyId118.push($.__views.__alloyId129);
    $.__views.__alloyId130 = Ti.UI.createLabel({
        text: "Store Locator",
        width: Ti.UI.FILL,
        left: "10",
        id: "__alloyId130"
    });
    $.__views.__alloyId129.add($.__views.__alloyId130);
    $.__views.__alloyId131 = Ti.UI.createTableViewRow({
        height: "50",
        id: "__alloyId131"
    });
    __alloyId118.push($.__views.__alloyId131);
    $.__views.__alloyId132 = Ti.UI.createLabel({
        text: "Contact Us",
        width: Ti.UI.FILL,
        left: "10",
        id: "__alloyId132"
    });
    $.__views.__alloyId131.add($.__views.__alloyId132);
    $.__views.menuTable = Ti.UI.createTableView({
        data: __alloyId118,
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