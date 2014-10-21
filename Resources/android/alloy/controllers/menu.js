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
    var __alloyId61 = [];
    $.__views.__alloyId62 = Ti.UI.createTableViewRow({
        height: "50",
        id: "__alloyId62"
    });
    __alloyId61.push($.__views.__alloyId62);
    $.__views.__alloyId63 = Ti.UI.createLabel({
        text: "DIY Paint",
        width: Ti.UI.FILL,
        left: "10",
        id: "__alloyId63"
    });
    $.__views.__alloyId62.add($.__views.__alloyId63);
    $.__views.__alloyId64 = Ti.UI.createTableViewRow({
        height: "50",
        id: "__alloyId64"
    });
    __alloyId61.push($.__views.__alloyId64);
    $.__views.__alloyId65 = Ti.UI.createLabel({
        text: "Colour Picker",
        width: Ti.UI.FILL,
        left: "10",
        id: "__alloyId65"
    });
    $.__views.__alloyId64.add($.__views.__alloyId65);
    $.__views.__alloyId66 = Ti.UI.createTableViewRow({
        height: "50",
        id: "__alloyId66"
    });
    __alloyId61.push($.__views.__alloyId66);
    $.__views.__alloyId67 = Ti.UI.createLabel({
        text: "Colour Swatches",
        width: Ti.UI.FILL,
        left: "10",
        id: "__alloyId67"
    });
    $.__views.__alloyId66.add($.__views.__alloyId67);
    $.__views.__alloyId68 = Ti.UI.createTableViewRow({
        height: "50",
        id: "__alloyId68"
    });
    __alloyId61.push($.__views.__alloyId68);
    $.__views.__alloyId69 = Ti.UI.createLabel({
        text: "Brochure",
        width: Ti.UI.FILL,
        left: "10",
        id: "__alloyId69"
    });
    $.__views.__alloyId68.add($.__views.__alloyId69);
    $.__views.__alloyId70 = Ti.UI.createTableViewRow({
        height: "50",
        id: "__alloyId70"
    });
    __alloyId61.push($.__views.__alloyId70);
    $.__views.__alloyId71 = Ti.UI.createLabel({
        text: "Store Locator",
        width: Ti.UI.FILL,
        left: "10",
        id: "__alloyId71"
    });
    $.__views.__alloyId70.add($.__views.__alloyId71);
    $.__views.__alloyId72 = Ti.UI.createTableViewRow({
        height: "50",
        id: "__alloyId72"
    });
    __alloyId61.push($.__views.__alloyId72);
    $.__views.__alloyId73 = Ti.UI.createLabel({
        text: "About Us",
        width: Ti.UI.FILL,
        left: "10",
        id: "__alloyId73"
    });
    $.__views.__alloyId72.add($.__views.__alloyId73);
    $.__views.menuTable = Ti.UI.createTableView({
        data: __alloyId61,
=======
    var __alloyId66 = [];
    $.__views.__alloyId67 = Ti.UI.createTableViewRow({
        height: "50",
        id: "__alloyId67"
    });
    __alloyId66.push($.__views.__alloyId67);
    $.__views.__alloyId68 = Ti.UI.createLabel({
        text: "DIY Paint",
        width: Ti.UI.FILL,
        left: "10",
        id: "__alloyId68"
    });
    $.__views.__alloyId67.add($.__views.__alloyId68);
    $.__views.__alloyId69 = Ti.UI.createTableViewRow({
        height: "50",
        id: "__alloyId69"
    });
    __alloyId66.push($.__views.__alloyId69);
    $.__views.__alloyId70 = Ti.UI.createLabel({
        text: "Colour Picker",
        width: Ti.UI.FILL,
        left: "10",
        id: "__alloyId70"
    });
    $.__views.__alloyId69.add($.__views.__alloyId70);
    $.__views.__alloyId71 = Ti.UI.createTableViewRow({
        height: "50",
        id: "__alloyId71"
    });
    __alloyId66.push($.__views.__alloyId71);
    $.__views.__alloyId72 = Ti.UI.createLabel({
        text: "Colour Swatches",
        width: Ti.UI.FILL,
        left: "10",
        id: "__alloyId72"
    });
    $.__views.__alloyId71.add($.__views.__alloyId72);
    $.__views.__alloyId73 = Ti.UI.createTableViewRow({
        height: "50",
        id: "__alloyId73"
    });
    __alloyId66.push($.__views.__alloyId73);
    $.__views.__alloyId74 = Ti.UI.createLabel({
        text: "Brochure",
        width: Ti.UI.FILL,
        left: "10",
        id: "__alloyId74"
    });
    $.__views.__alloyId73.add($.__views.__alloyId74);
    $.__views.__alloyId75 = Ti.UI.createTableViewRow({
        height: "50",
        id: "__alloyId75"
    });
    __alloyId66.push($.__views.__alloyId75);
    $.__views.__alloyId76 = Ti.UI.createLabel({
        text: "Store Locator",
        width: Ti.UI.FILL,
        left: "10",
        id: "__alloyId76"
    });
    $.__views.__alloyId75.add($.__views.__alloyId76);
    $.__views.__alloyId77 = Ti.UI.createTableViewRow({
        height: "50",
        id: "__alloyId77"
    });
    __alloyId66.push($.__views.__alloyId77);
    $.__views.__alloyId78 = Ti.UI.createLabel({
        text: "About Us",
        width: Ti.UI.FILL,
        left: "10",
        id: "__alloyId78"
    });
    $.__views.__alloyId77.add($.__views.__alloyId78);
    $.__views.menuTable = Ti.UI.createTableView({
        data: __alloyId66,
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