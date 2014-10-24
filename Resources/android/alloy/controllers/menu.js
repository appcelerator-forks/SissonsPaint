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
=======
<<<<<<< HEAD
    var __alloyId73 = [];
=======
<<<<<<< HEAD
    var __alloyId51 = [];
    $.__views.__alloyId52 = Ti.UI.createTableViewRow({
=======
<<<<<<< HEAD
    var __alloyId68 = [];
    $.__views.__alloyId69 = Ti.UI.createTableViewRow({
        height: "50",
        id: "__alloyId69"
    });
    __alloyId68.push($.__views.__alloyId69);
    $.__views.__alloyId70 = Ti.UI.createLabel({
        text: "DIY Paint",
        width: Ti.UI.FILL,
        left: "10",
        id: "__alloyId70"
    });
    $.__views.__alloyId69.add($.__views.__alloyId70);
    $.__views.__alloyId71 = Ti.UI.createTableViewRow({
=======
>>>>>>> FETCH_HEAD
    var __alloyId69 = [];
    $.__views.__alloyId70 = Ti.UI.createTableViewRow({
        height: "50",
        id: "__alloyId70"
    });
    __alloyId69.push($.__views.__alloyId70);
    $.__views.__alloyId71 = Ti.UI.createLabel({
        text: "DIY Paint",
        width: Ti.UI.FILL,
        left: "10",
        id: "__alloyId71"
    });
    $.__views.__alloyId70.add($.__views.__alloyId71);
    $.__views.__alloyId72 = Ti.UI.createTableViewRow({
        height: "50",
        id: "__alloyId72"
    });
    __alloyId69.push($.__views.__alloyId72);
    $.__views.__alloyId73 = Ti.UI.createLabel({
        text: "Colour Picker",
        width: Ti.UI.FILL,
        left: "10",
        id: "__alloyId73"
    });
    $.__views.__alloyId72.add($.__views.__alloyId73);
<<<<<<< HEAD
=======
>>>>>>> FETCH_HEAD
>>>>>>> FETCH_HEAD
    $.__views.__alloyId74 = Ti.UI.createTableViewRow({
        height: "50",
        id: "__alloyId74"
    });
<<<<<<< HEAD
    __alloyId69.push($.__views.__alloyId74);
    $.__views.__alloyId75 = Ti.UI.createLabel({
=======
    __alloyId73.push($.__views.__alloyId74);
    $.__views.__alloyId75 = Ti.UI.createLabel({
<<<<<<< HEAD
        text: "DIY Paint",
=======
>>>>>>> FETCH_HEAD
>>>>>>> FETCH_HEAD
        text: "Colour Swatches",
>>>>>>> FETCH_HEAD
        width: Ti.UI.FILL,
        left: "10",
        id: "__alloyId75"
    });
    $.__views.__alloyId74.add($.__views.__alloyId75);
    $.__views.__alloyId76 = Ti.UI.createTableViewRow({
        height: "50",
        id: "__alloyId76"
    });
<<<<<<< HEAD
    __alloyId69.push($.__views.__alloyId76);
    $.__views.__alloyId77 = Ti.UI.createLabel({
=======
    __alloyId73.push($.__views.__alloyId76);
    $.__views.__alloyId77 = Ti.UI.createLabel({
<<<<<<< HEAD
        text: "Colour Picker",
=======
>>>>>>> FETCH_HEAD
>>>>>>> FETCH_HEAD
        text: "Brochure",
>>>>>>> FETCH_HEAD
        width: Ti.UI.FILL,
        left: "10",
        id: "__alloyId77"
    });
    $.__views.__alloyId76.add($.__views.__alloyId77);
    $.__views.__alloyId78 = Ti.UI.createTableViewRow({
        height: "50",
        id: "__alloyId78"
    });
<<<<<<< HEAD
    __alloyId69.push($.__views.__alloyId78);
    $.__views.__alloyId79 = Ti.UI.createLabel({
=======
    __alloyId73.push($.__views.__alloyId78);
    $.__views.__alloyId79 = Ti.UI.createLabel({
<<<<<<< HEAD
        text: "Colour Swatches",
=======
>>>>>>> FETCH_HEAD
>>>>>>> FETCH_HEAD
        text: "Store Locator",
>>>>>>> FETCH_HEAD
        width: Ti.UI.FILL,
        left: "10",
        id: "__alloyId79"
    });
    $.__views.__alloyId78.add($.__views.__alloyId79);
    $.__views.__alloyId80 = Ti.UI.createTableViewRow({
        height: "50",
        id: "__alloyId80"
    });
<<<<<<< HEAD
    __alloyId69.push($.__views.__alloyId80);
    $.__views.__alloyId81 = Ti.UI.createLabel({
=======
    __alloyId73.push($.__views.__alloyId80);
    $.__views.__alloyId81 = Ti.UI.createLabel({
<<<<<<< HEAD
        text: "Brochure",
=======
>>>>>>> FETCH_HEAD
>>>>>>> FETCH_HEAD
        text: "About Us",
>>>>>>> FETCH_HEAD
        width: Ti.UI.FILL,
        left: "10",
        id: "__alloyId81"
    });
    $.__views.__alloyId80.add($.__views.__alloyId81);
<<<<<<< HEAD
    $.__views.menuTable = Ti.UI.createTableView({
        data: __alloyId69,
=======
    $.__views.__alloyId82 = Ti.UI.createTableViewRow({
        height: "50",
        id: "__alloyId82"
    });
    __alloyId73.push($.__views.__alloyId82);
    $.__views.__alloyId83 = Ti.UI.createLabel({
        text: "Store Locator",
        width: Ti.UI.FILL,
        left: "10",
        id: "__alloyId83"
    });
    $.__views.__alloyId82.add($.__views.__alloyId83);
    $.__views.__alloyId84 = Ti.UI.createTableViewRow({
        height: "50",
        id: "__alloyId84"
    });
    __alloyId73.push($.__views.__alloyId84);
    $.__views.__alloyId85 = Ti.UI.createLabel({
        text: "About Us",
        width: Ti.UI.FILL,
        left: "10",
        id: "__alloyId85"
    });
    $.__views.__alloyId84.add($.__views.__alloyId85);
    $.__views.menuTable = Ti.UI.createTableView({
<<<<<<< HEAD
        data: __alloyId73,
=======
        data: __alloyId69,
>>>>>>> FETCH_HEAD
>>>>>>> FETCH_HEAD
>>>>>>> FETCH_HEAD
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