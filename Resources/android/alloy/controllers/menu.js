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
    var __alloyId78 = [];
    $.__views.__alloyId79 = Ti.UI.createTableViewRow({
=======
<<<<<<< HEAD
    var __alloyId71 = [];
    $.__views.__alloyId72 = Ti.UI.createTableViewRow({
        height: "50",
        id: "__alloyId72"
    });
    __alloyId71.push($.__views.__alloyId72);
    $.__views.__alloyId73 = Ti.UI.createLabel({
        text: "DIY Paint",
        width: Ti.UI.FILL,
        left: "10",
        id: "__alloyId73"
    });
    $.__views.__alloyId72.add($.__views.__alloyId73);
=======
<<<<<<< HEAD
    var __alloyId70 = [];
    $.__views.__alloyId71 = Ti.UI.createTableViewRow({
        height: "50",
        id: "__alloyId71"
    });
    __alloyId70.push($.__views.__alloyId71);
    $.__views.__alloyId72 = Ti.UI.createLabel({
        text: "DIY Paint",
        width: Ti.UI.FILL,
        left: "10",
        id: "__alloyId72"
    });
    $.__views.__alloyId71.add($.__views.__alloyId72);
    $.__views.__alloyId73 = Ti.UI.createTableViewRow({
        height: "50",
        id: "__alloyId73"
    });
    __alloyId70.push($.__views.__alloyId73);
    $.__views.__alloyId74 = Ti.UI.createLabel({
        text: "Colour Picker",
        width: Ti.UI.FILL,
        left: "10",
        id: "__alloyId74"
    });
    $.__views.__alloyId73.add($.__views.__alloyId74);
    $.__views.__alloyId75 = Ti.UI.createTableViewRow({
        height: "50",
        id: "__alloyId75"
    });
    __alloyId70.push($.__views.__alloyId75);
    $.__views.__alloyId76 = Ti.UI.createLabel({
        text: "Colour Swatches",
        width: Ti.UI.FILL,
        left: "10",
        id: "__alloyId76"
    });
    $.__views.__alloyId75.add($.__views.__alloyId76);
    $.__views.__alloyId77 = Ti.UI.createTableViewRow({
        height: "50",
        id: "__alloyId77"
    });
    __alloyId70.push($.__views.__alloyId77);
    $.__views.__alloyId78 = Ti.UI.createLabel({
        text: "Brochure",
        width: Ti.UI.FILL,
        left: "10",
        id: "__alloyId78"
    });
    $.__views.__alloyId77.add($.__views.__alloyId78);
    $.__views.__alloyId79 = Ti.UI.createTableViewRow({
        height: "50",
        id: "__alloyId79"
    });
    __alloyId70.push($.__views.__alloyId79);
    $.__views.__alloyId80 = Ti.UI.createLabel({
        text: "Store Locator",
        width: Ti.UI.FILL,
        left: "10",
        id: "__alloyId80"
    });
    $.__views.__alloyId79.add($.__views.__alloyId80);
    $.__views.__alloyId81 = Ti.UI.createTableViewRow({
        height: "50",
        id: "__alloyId81"
    });
    __alloyId70.push($.__views.__alloyId81);
    $.__views.__alloyId82 = Ti.UI.createLabel({
        text: "About Us",
        width: Ti.UI.FILL,
        left: "10",
        id: "__alloyId82"
    });
    $.__views.__alloyId81.add($.__views.__alloyId82);
    $.__views.menuTable = Ti.UI.createTableView({
        data: __alloyId70,
=======
    var __alloyId73 = [];
>>>>>>> FETCH_HEAD
    $.__views.__alloyId74 = Ti.UI.createTableViewRow({
>>>>>>> FETCH_HEAD
        height: "50",
        id: "__alloyId79"
    });
<<<<<<< HEAD
    __alloyId78.push($.__views.__alloyId79);
    $.__views.__alloyId80 = Ti.UI.createLabel({
        text: "DIY Paint",
=======
    __alloyId71.push($.__views.__alloyId74);
    $.__views.__alloyId75 = Ti.UI.createLabel({
        text: "Colour Picker",
>>>>>>> FETCH_HEAD
        width: Ti.UI.FILL,
        left: "10",
        id: "__alloyId80"
    });
    $.__views.__alloyId79.add($.__views.__alloyId80);
    $.__views.__alloyId81 = Ti.UI.createTableViewRow({
        height: "50",
        id: "__alloyId81"
    });
<<<<<<< HEAD
    __alloyId78.push($.__views.__alloyId81);
    $.__views.__alloyId82 = Ti.UI.createLabel({
        text: "Colour Picker",
=======
    __alloyId71.push($.__views.__alloyId76);
    $.__views.__alloyId77 = Ti.UI.createLabel({
        text: "Colour Swatches",
>>>>>>> FETCH_HEAD
        width: Ti.UI.FILL,
        left: "10",
        id: "__alloyId82"
    });
    $.__views.__alloyId81.add($.__views.__alloyId82);
    $.__views.__alloyId83 = Ti.UI.createTableViewRow({
        height: "50",
        id: "__alloyId83"
    });
<<<<<<< HEAD
    __alloyId78.push($.__views.__alloyId83);
    $.__views.__alloyId84 = Ti.UI.createLabel({
        text: "Colour Swatches",
=======
    __alloyId71.push($.__views.__alloyId78);
    $.__views.__alloyId79 = Ti.UI.createLabel({
        text: "Brochure",
>>>>>>> FETCH_HEAD
        width: Ti.UI.FILL,
        left: "10",
        id: "__alloyId84"
    });
    $.__views.__alloyId83.add($.__views.__alloyId84);
    $.__views.__alloyId85 = Ti.UI.createTableViewRow({
        height: "50",
        id: "__alloyId85"
    });
<<<<<<< HEAD
    __alloyId78.push($.__views.__alloyId85);
    $.__views.__alloyId86 = Ti.UI.createLabel({
        text: "Brochure",
=======
    __alloyId71.push($.__views.__alloyId80);
    $.__views.__alloyId81 = Ti.UI.createLabel({
        text: "Store Locator",
>>>>>>> FETCH_HEAD
        width: Ti.UI.FILL,
        left: "10",
        id: "__alloyId86"
    });
    $.__views.__alloyId85.add($.__views.__alloyId86);
    $.__views.__alloyId87 = Ti.UI.createTableViewRow({
        height: "50",
        id: "__alloyId87"
    });
<<<<<<< HEAD
    __alloyId78.push($.__views.__alloyId87);
    $.__views.__alloyId88 = Ti.UI.createLabel({
        text: "Store Locator",
=======
    __alloyId71.push($.__views.__alloyId82);
    $.__views.__alloyId83 = Ti.UI.createLabel({
        text: "About Us",
>>>>>>> FETCH_HEAD
        width: Ti.UI.FILL,
        left: "10",
        id: "__alloyId88"
    });
<<<<<<< HEAD
    $.__views.__alloyId87.add($.__views.__alloyId88);
    $.__views.__alloyId89 = Ti.UI.createTableViewRow({
        height: "50",
        id: "__alloyId89"
    });
    __alloyId78.push($.__views.__alloyId89);
    $.__views.__alloyId90 = Ti.UI.createLabel({
        text: "About Us",
        width: Ti.UI.FILL,
        left: "10",
        id: "__alloyId90"
    });
    $.__views.__alloyId89.add($.__views.__alloyId90);
    $.__views.menuTable = Ti.UI.createTableView({
        data: __alloyId78,
=======
    $.__views.__alloyId82.add($.__views.__alloyId83);
    $.__views.menuTable = Ti.UI.createTableView({
<<<<<<< HEAD
        data: __alloyId71,
=======
        data: __alloyId73,
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