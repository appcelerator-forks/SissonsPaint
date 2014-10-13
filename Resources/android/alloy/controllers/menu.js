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
    var __alloyId55 = [];
    $.__views.__alloyId56 = Ti.UI.createTableViewRow({
        height: "50",
        id: "__alloyId56"
    });
    __alloyId55.push($.__views.__alloyId56);
    $.__views.__alloyId57 = Ti.UI.createLabel({
        text: "Home",
        width: Ti.UI.FILL,
        left: "10",
        id: "__alloyId57"
    });
    $.__views.__alloyId56.add($.__views.__alloyId57);
    $.__views.__alloyId58 = Ti.UI.createTableViewRow({
        height: "50",
        id: "__alloyId58"
    });
    __alloyId55.push($.__views.__alloyId58);
    $.__views.__alloyId59 = Ti.UI.createLabel({
        text: "DIY Paint",
        width: Ti.UI.FILL,
        left: "10",
        id: "__alloyId59"
    });
    $.__views.__alloyId58.add($.__views.__alloyId59);
    $.__views.__alloyId60 = Ti.UI.createTableViewRow({
        height: "50",
        id: "__alloyId60"
    });
    __alloyId55.push($.__views.__alloyId60);
    $.__views.__alloyId61 = Ti.UI.createLabel({
        text: "Colour Picker",
        width: Ti.UI.FILL,
        left: "10",
        id: "__alloyId61"
    });
    $.__views.__alloyId60.add($.__views.__alloyId61);
    $.__views.__alloyId62 = Ti.UI.createTableViewRow({
        height: "50",
        id: "__alloyId62"
    });
    __alloyId55.push($.__views.__alloyId62);
    $.__views.__alloyId63 = Ti.UI.createLabel({
        text: "Colour Swatches",
        width: Ti.UI.FILL,
        left: "10",
        id: "__alloyId63"
    });
    $.__views.__alloyId62.add($.__views.__alloyId63);
    $.__views.__alloyId64 = Ti.UI.createTableViewRow({
        height: "50",
        id: "__alloyId64"
    });
    __alloyId55.push($.__views.__alloyId64);
    $.__views.__alloyId65 = Ti.UI.createLabel({
        text: "Brochure",
        width: Ti.UI.FILL,
        left: "10",
        id: "__alloyId65"
    });
    $.__views.__alloyId64.add($.__views.__alloyId65);
    $.__views.__alloyId66 = Ti.UI.createTableViewRow({
        height: "50",
        id: "__alloyId66"
    });
    __alloyId55.push($.__views.__alloyId66);
    $.__views.__alloyId67 = Ti.UI.createLabel({
        text: "Store Locator",
        width: Ti.UI.FILL,
        left: "10",
        id: "__alloyId67"
    });
    $.__views.__alloyId66.add($.__views.__alloyId67);
    $.__views.__alloyId68 = Ti.UI.createTableViewRow({
        height: "50",
        id: "__alloyId68"
    });
    __alloyId55.push($.__views.__alloyId68);
    $.__views.__alloyId69 = Ti.UI.createLabel({
        text: "About Us",
        width: Ti.UI.FILL,
        left: "10",
        id: "__alloyId69"
    });
    $.__views.__alloyId68.add($.__views.__alloyId69);
    $.__views.menuTable = Ti.UI.createTableView({
        data: __alloyId55,
=======
<<<<<<< HEAD
    var __alloyId37 = [];
    $.__views.__alloyId38 = Ti.UI.createTableViewRow({
        height: "50",
        id: "__alloyId38"
    });
    __alloyId37.push($.__views.__alloyId38);
    $.__views.__alloyId39 = Ti.UI.createLabel({
        text: "Home",
        width: Ti.UI.FILL,
        left: "10",
        id: "__alloyId39"
    });
    $.__views.__alloyId38.add($.__views.__alloyId39);
    $.__views.__alloyId40 = Ti.UI.createTableViewRow({
        height: "50",
        id: "__alloyId40"
    });
    __alloyId37.push($.__views.__alloyId40);
    $.__views.__alloyId41 = Ti.UI.createLabel({
        text: "DIY Paint",
        width: Ti.UI.FILL,
        left: "10",
        id: "__alloyId41"
    });
    $.__views.__alloyId40.add($.__views.__alloyId41);
    $.__views.__alloyId42 = Ti.UI.createTableViewRow({
        height: "50",
        id: "__alloyId42"
    });
    __alloyId37.push($.__views.__alloyId42);
    $.__views.__alloyId43 = Ti.UI.createLabel({
        text: "Colour Picker",
        width: Ti.UI.FILL,
        left: "10",
        id: "__alloyId43"
    });
    $.__views.__alloyId42.add($.__views.__alloyId43);
    $.__views.__alloyId44 = Ti.UI.createTableViewRow({
        height: "50",
        id: "__alloyId44"
    });
    __alloyId37.push($.__views.__alloyId44);
    $.__views.__alloyId45 = Ti.UI.createLabel({
        text: "Colour Swatches",
        width: Ti.UI.FILL,
        left: "10",
        id: "__alloyId45"
    });
    $.__views.__alloyId44.add($.__views.__alloyId45);
    $.__views.__alloyId46 = Ti.UI.createTableViewRow({
        height: "50",
        id: "__alloyId46"
    });
    __alloyId37.push($.__views.__alloyId46);
    $.__views.__alloyId47 = Ti.UI.createLabel({
        text: "Brochure",
        width: Ti.UI.FILL,
        left: "10",
        id: "__alloyId47"
    });
    $.__views.__alloyId46.add($.__views.__alloyId47);
    $.__views.__alloyId48 = Ti.UI.createTableViewRow({
        height: "50",
        id: "__alloyId48"
    });
    __alloyId37.push($.__views.__alloyId48);
    $.__views.__alloyId49 = Ti.UI.createLabel({
        text: "Store Locator",
        width: Ti.UI.FILL,
        left: "10",
        id: "__alloyId49"
    });
    $.__views.__alloyId48.add($.__views.__alloyId49);
    $.__views.__alloyId50 = Ti.UI.createTableViewRow({
        height: "50",
        id: "__alloyId50"
    });
    __alloyId37.push($.__views.__alloyId50);
    $.__views.__alloyId51 = Ti.UI.createLabel({
        text: "About Us",
        width: Ti.UI.FILL,
        left: "10",
        id: "__alloyId51"
    });
    $.__views.__alloyId50.add($.__views.__alloyId51);
    $.__views.menuTable = Ti.UI.createTableView({
        data: __alloyId37,
=======
>>>>>>> FETCH_HEAD
    var __alloyId106 = [];
    $.__views.__alloyId107 = Ti.UI.createTableViewRow({
        height: "50",
        id: "__alloyId107"
    });
    __alloyId106.push($.__views.__alloyId107);
    $.__views.__alloyId108 = Ti.UI.createLabel({
        text: "Home",
        width: Ti.UI.FILL,
        left: "10",
        id: "__alloyId108"
    });
    $.__views.__alloyId107.add($.__views.__alloyId108);
    $.__views.__alloyId109 = Ti.UI.createTableViewRow({
        height: "50",
        id: "__alloyId109"
    });
    __alloyId106.push($.__views.__alloyId109);
    $.__views.__alloyId110 = Ti.UI.createLabel({
        text: "DIY Paint",
        width: Ti.UI.FILL,
        left: "10",
        id: "__alloyId110"
    });
    $.__views.__alloyId109.add($.__views.__alloyId110);
    $.__views.__alloyId111 = Ti.UI.createTableViewRow({
        height: "50",
        id: "__alloyId111"
    });
    __alloyId106.push($.__views.__alloyId111);
    $.__views.__alloyId112 = Ti.UI.createLabel({
        text: "Colour Picker",
        width: Ti.UI.FILL,
        left: "10",
        id: "__alloyId112"
    });
    $.__views.__alloyId111.add($.__views.__alloyId112);
    $.__views.__alloyId113 = Ti.UI.createTableViewRow({
        height: "50",
        id: "__alloyId113"
    });
    __alloyId106.push($.__views.__alloyId113);
    $.__views.__alloyId114 = Ti.UI.createLabel({
        text: "Colour Swatches",
        width: Ti.UI.FILL,
        left: "10",
        id: "__alloyId114"
    });
    $.__views.__alloyId113.add($.__views.__alloyId114);
    $.__views.__alloyId115 = Ti.UI.createTableViewRow({
        height: "50",
        id: "__alloyId115"
    });
    __alloyId106.push($.__views.__alloyId115);
    $.__views.__alloyId116 = Ti.UI.createLabel({
        text: "Brochure",
        width: Ti.UI.FILL,
        left: "10",
        id: "__alloyId116"
    });
    $.__views.__alloyId115.add($.__views.__alloyId116);
    $.__views.__alloyId117 = Ti.UI.createTableViewRow({
        height: "50",
        id: "__alloyId117"
    });
    __alloyId106.push($.__views.__alloyId117);
    $.__views.__alloyId118 = Ti.UI.createLabel({
        text: "Store Locator",
        width: Ti.UI.FILL,
        left: "10",
        id: "__alloyId118"
    });
    $.__views.__alloyId117.add($.__views.__alloyId118);
    $.__views.__alloyId119 = Ti.UI.createTableViewRow({
        height: "50",
        id: "__alloyId119"
    });
    __alloyId106.push($.__views.__alloyId119);
    $.__views.__alloyId120 = Ti.UI.createLabel({
        text: "About Us",
        width: Ti.UI.FILL,
        left: "10",
        id: "__alloyId120"
    });
    $.__views.__alloyId119.add($.__views.__alloyId120);
    $.__views.menuTable = Ti.UI.createTableView({
        data: __alloyId106,
<<<<<<< HEAD
=======
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