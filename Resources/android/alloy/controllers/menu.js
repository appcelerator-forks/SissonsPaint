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
    var __alloyId65 = [];
    $.__views.__alloyId66 = Ti.UI.createTableViewRow({
        height: "50",
        id: "__alloyId66"
=======
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
    var __alloyId54 = [];
    $.__views.__alloyId55 = Ti.UI.createTableViewRow({
=======
    var __alloyId54 = [];
    $.__views.__alloyId55 = Ti.UI.createTableViewRow({
        height: "50",
        id: "__alloyId55"
    });
    __alloyId54.push($.__views.__alloyId55);
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
    __alloyId54.push($.__views.__alloyId57);
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
    __alloyId54.push($.__views.__alloyId59);
    $.__views.__alloyId60 = Ti.UI.createLabel({
        text: "Colour Swatches",
        width: Ti.UI.FILL,
        left: "10",
        id: "__alloyId60"
    });
    $.__views.__alloyId59.add($.__views.__alloyId60);
    $.__views.__alloyId61 = Ti.UI.createTableViewRow({
=======
<<<<<<< HEAD
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
=======
    var __alloyId51 = [];
    $.__views.__alloyId52 = Ti.UI.createTableViewRow({
>>>>>>> FETCH_HEAD
        height: "50",
        id: "__alloyId55"
    });
    __alloyId54.push($.__views.__alloyId55);
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
    __alloyId54.push($.__views.__alloyId57);
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
    __alloyId54.push($.__views.__alloyId59);
    $.__views.__alloyId60 = Ti.UI.createLabel({
        text: "Colour Swatches",
        width: Ti.UI.FILL,
        left: "10",
        id: "__alloyId60"
    });
    $.__views.__alloyId59.add($.__views.__alloyId60);
    $.__views.__alloyId61 = Ti.UI.createTableViewRow({
=======
<<<<<<< HEAD
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
=======
    var __alloyId51 = [];
    $.__views.__alloyId52 = Ti.UI.createTableViewRow({
=======
    var __alloyId52 = [];
    $.__views.__alloyId53 = Ti.UI.createTableViewRow({
>>>>>>> 21/10/2014
        height: "50",
        id: "__alloyId53"
    });
    __alloyId52.push($.__views.__alloyId53);
    $.__views.__alloyId54 = Ti.UI.createLabel({
        text: "DIY Paint",
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
        text: "Colour Picker",
        width: Ti.UI.FILL,
        left: "10",
        id: "__alloyId56"
    });
<<<<<<< HEAD
    $.__views.__alloyId54.add($.__views.__alloyId55);
    $.__views.__alloyId56 = Ti.UI.createTableViewRow({
>>>>>>> FETCH_HEAD
>>>>>>> FETCH_HEAD
        height: "50",
        id: "__alloyId61"
>>>>>>> FETCH_HEAD
    });
    __alloyId65.push($.__views.__alloyId66);
    $.__views.__alloyId67 = Ti.UI.createLabel({
        text: "DIY Paint",
<<<<<<< HEAD
        width: Ti.UI.FILL,
        left: "10",
        id: "__alloyId67"
=======
=======
    __alloyId51.push($.__views.__alloyId56);
    $.__views.__alloyId57 = Ti.UI.createLabel({
=======
    $.__views.__alloyId55.add($.__views.__alloyId56);
    $.__views.__alloyId57 = Ti.UI.createTableViewRow({
        height: "50",
        id: "__alloyId57"
    });
    __alloyId52.push($.__views.__alloyId57);
    $.__views.__alloyId58 = Ti.UI.createLabel({
>>>>>>> 21/10/2014
        text: "Colour Swatches",
>>>>>>> FETCH_HEAD
>>>>>>> FETCH_HEAD
        width: Ti.UI.FILL,
        left: "10",
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> FETCH_HEAD
        id: "__alloyId62"
>>>>>>> FETCH_HEAD
    });
    $.__views.__alloyId66.add($.__views.__alloyId67);
    $.__views.__alloyId68 = Ti.UI.createTableViewRow({
        height: "50",
        id: "__alloyId68"
    });
    __alloyId65.push($.__views.__alloyId68);
    $.__views.__alloyId69 = Ti.UI.createLabel({
        text: "Colour Picker",
<<<<<<< HEAD
        width: Ti.UI.FILL,
        left: "10",
        id: "__alloyId69"
=======
=======
    __alloyId51.push($.__views.__alloyId58);
    $.__views.__alloyId59 = Ti.UI.createLabel({
=======
        id: "__alloyId58"
    });
    $.__views.__alloyId57.add($.__views.__alloyId58);
    $.__views.__alloyId59 = Ti.UI.createTableViewRow({
        height: "50",
        id: "__alloyId59"
    });
    __alloyId52.push($.__views.__alloyId59);
    $.__views.__alloyId60 = Ti.UI.createLabel({
>>>>>>> 21/10/2014
        text: "Brochure",
>>>>>>> FETCH_HEAD
>>>>>>> FETCH_HEAD
        width: Ti.UI.FILL,
        left: "10",
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> FETCH_HEAD
        id: "__alloyId64"
>>>>>>> FETCH_HEAD
    });
    $.__views.__alloyId68.add($.__views.__alloyId69);
    $.__views.__alloyId70 = Ti.UI.createTableViewRow({
        height: "50",
        id: "__alloyId70"
    });
    __alloyId65.push($.__views.__alloyId70);
    $.__views.__alloyId71 = Ti.UI.createLabel({
        text: "Colour Swatches",
<<<<<<< HEAD
        width: Ti.UI.FILL,
        left: "10",
        id: "__alloyId71"
=======
=======
    __alloyId51.push($.__views.__alloyId60);
    $.__views.__alloyId61 = Ti.UI.createLabel({
=======
        id: "__alloyId60"
    });
    $.__views.__alloyId59.add($.__views.__alloyId60);
    $.__views.__alloyId61 = Ti.UI.createTableViewRow({
        height: "50",
        id: "__alloyId61"
    });
    __alloyId52.push($.__views.__alloyId61);
    $.__views.__alloyId62 = Ti.UI.createLabel({
>>>>>>> 21/10/2014
        text: "Store Locator",
>>>>>>> FETCH_HEAD
>>>>>>> FETCH_HEAD
        width: Ti.UI.FILL,
        left: "10",
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> FETCH_HEAD
        id: "__alloyId66"
>>>>>>> FETCH_HEAD
    });
    $.__views.__alloyId70.add($.__views.__alloyId71);
    $.__views.__alloyId72 = Ti.UI.createTableViewRow({
        height: "50",
        id: "__alloyId72"
    });
    __alloyId65.push($.__views.__alloyId72);
    $.__views.__alloyId73 = Ti.UI.createLabel({
        text: "Brochure",
<<<<<<< HEAD
        width: Ti.UI.FILL,
        left: "10",
        id: "__alloyId73"
=======
=======
    __alloyId51.push($.__views.__alloyId62);
    $.__views.__alloyId63 = Ti.UI.createLabel({
=======
        id: "__alloyId62"
    });
    $.__views.__alloyId61.add($.__views.__alloyId62);
    $.__views.__alloyId63 = Ti.UI.createTableViewRow({
        height: "50",
        id: "__alloyId63"
    });
    __alloyId52.push($.__views.__alloyId63);
    $.__views.__alloyId64 = Ti.UI.createLabel({
>>>>>>> 21/10/2014
        text: "About Us",
>>>>>>> FETCH_HEAD
        width: Ti.UI.FILL,
        left: "10",
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> FETCH_HEAD
        id: "__alloyId62"
>>>>>>> FETCH_HEAD
    });
    $.__views.__alloyId72.add($.__views.__alloyId73);
    $.__views.__alloyId74 = Ti.UI.createTableViewRow({
        height: "50",
        id: "__alloyId74"
    });
    __alloyId65.push($.__views.__alloyId74);
    $.__views.__alloyId75 = Ti.UI.createLabel({
        text: "Store Locator",
        width: Ti.UI.FILL,
        left: "10",
        id: "__alloyId75"
    });
    $.__views.__alloyId74.add($.__views.__alloyId75);
    $.__views.__alloyId76 = Ti.UI.createTableViewRow({
        height: "50",
        id: "__alloyId76"
    });
    __alloyId65.push($.__views.__alloyId76);
    $.__views.__alloyId77 = Ti.UI.createLabel({
        text: "About Us",
        width: Ti.UI.FILL,
        left: "10",
        id: "__alloyId77"
    });
    $.__views.__alloyId76.add($.__views.__alloyId77);
    $.__views.menuTable = Ti.UI.createTableView({
<<<<<<< HEAD
        data: __alloyId65,
=======
        data: __alloyId51,
>>>>>>> FETCH_HEAD
>>>>>>> FETCH_HEAD
<<<<<<< HEAD
=======
        id: "__alloyId64"
    });
    $.__views.__alloyId63.add($.__views.__alloyId64);
    $.__views.menuTable = Ti.UI.createTableView({
        data: __alloyId52,
>>>>>>> 21/10/2014
=======
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