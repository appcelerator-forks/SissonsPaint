function __processArg(obj, key) {
    var arg = null;
    if (obj) {
        arg = obj[key] || null;
        delete obj[key];
    }
    return arg;
}

function Controller() {
    function toggle() {
        $.drawer["toggleLeftWindow"]();
    }
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
        var win = Alloy.createController(target).getView();
        Alloy.Globals.Drawer.setCenterWindow(win);
        Alloy.Globals.Drawer.closeLeftWindow();
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "index";
    if (arguments[0]) {
        __processArg(arguments[0], "__parentSymbol");
        __processArg(arguments[0], "$model");
        __processArg(arguments[0], "__itemTemplate");
    }
    var $ = this;
    var exports = {};
    var __defers = {};
    $.__views.mainWindow = require("xp.ui").createWindow({
        backgroundColor: "white",
        role: "leftWindow",
        id: "mainWindow"
    });
    var __alloyId14 = [];
    $.__views.__alloyId15 = Ti.UI.createTableViewRow({
        height: "50",
        id: "__alloyId15"
    });
    __alloyId14.push($.__views.__alloyId15);
    $.__views.__alloyId16 = Ti.UI.createLabel({
        width: Ti.UI.FILL,
        height: Ti.UI.SIZE,
        color: "#000",
        text: "Home",
        left: "10",
        id: "__alloyId16"
    });
    $.__views.__alloyId15.add($.__views.__alloyId16);
    $.__views.__alloyId17 = Ti.UI.createTableViewRow({
        height: "50",
        id: "__alloyId17"
    });
    __alloyId14.push($.__views.__alloyId17);
    $.__views.__alloyId18 = Ti.UI.createLabel({
        width: Ti.UI.FILL,
        height: Ti.UI.SIZE,
        color: "#000",
        text: "DIY Paint",
        left: "10",
        id: "__alloyId18"
    });
    $.__views.__alloyId17.add($.__views.__alloyId18);
    $.__views.__alloyId19 = Ti.UI.createTableViewRow({
        height: "50",
        id: "__alloyId19"
    });
    __alloyId14.push($.__views.__alloyId19);
    $.__views.__alloyId20 = Ti.UI.createLabel({
        width: Ti.UI.FILL,
        height: Ti.UI.SIZE,
        color: "#000",
        text: "Colour Picker",
        left: "10",
        id: "__alloyId20"
    });
    $.__views.__alloyId19.add($.__views.__alloyId20);
    $.__views.__alloyId21 = Ti.UI.createTableViewRow({
        height: "50",
        id: "__alloyId21"
    });
    __alloyId14.push($.__views.__alloyId21);
    $.__views.__alloyId22 = Ti.UI.createLabel({
        width: Ti.UI.FILL,
        height: Ti.UI.SIZE,
        color: "#000",
        text: "Colour Swatches",
        left: "10",
        id: "__alloyId22"
    });
    $.__views.__alloyId21.add($.__views.__alloyId22);
    $.__views.__alloyId23 = Ti.UI.createTableViewRow({
        height: "50",
        id: "__alloyId23"
    });
    __alloyId14.push($.__views.__alloyId23);
    $.__views.__alloyId24 = Ti.UI.createLabel({
        width: Ti.UI.FILL,
        height: Ti.UI.SIZE,
        color: "#000",
        text: "Brochure",
        left: "10",
        id: "__alloyId24"
    });
    $.__views.__alloyId23.add($.__views.__alloyId24);
    $.__views.__alloyId25 = Ti.UI.createTableViewRow({
        height: "50",
        id: "__alloyId25"
    });
    __alloyId14.push($.__views.__alloyId25);
    $.__views.__alloyId26 = Ti.UI.createLabel({
        width: Ti.UI.FILL,
        height: Ti.UI.SIZE,
        color: "#000",
        text: "Store Locator",
        left: "10",
        id: "__alloyId26"
    });
    $.__views.__alloyId25.add($.__views.__alloyId26);
    $.__views.__alloyId27 = Ti.UI.createTableViewRow({
        height: "50",
        id: "__alloyId27"
    });
    __alloyId14.push($.__views.__alloyId27);
    $.__views.__alloyId28 = Ti.UI.createLabel({
        width: Ti.UI.FILL,
        height: Ti.UI.SIZE,
        color: "#000",
        text: "About Us",
        left: "10",
        id: "__alloyId28"
    });
    $.__views.__alloyId27.add($.__views.__alloyId28);
    $.__views.menuTable = Ti.UI.createTableView({
        data: __alloyId14,
        id: "menuTable",
        backgroundColor: "#F7F8E0"
    });
    $.__views.mainWindow.add($.__views.menuTable);
    doMenuClick ? $.__views.menuTable.addEventListener("click", doMenuClick) : __defers["$.__views.menuTable!click!doMenuClick"] = true;
    $.__views.__alloyId30 = Ti.UI.createWindow({
        backgroundColor: "white",
        id: "__alloyId30"
    });
    $.__views.__alloyId31 = Ti.UI.createLabel({
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        color: "#000",
        text: "I am center",
        id: "__alloyId31"
    });
    $.__views.__alloyId30.add($.__views.__alloyId31);
    $.__views.__alloyId33 = Ti.UI.createButton({
        title: "Right",
        id: "__alloyId33"
    });
    toggle ? $.__views.__alloyId33.addEventListener("click", toggle) : __defers["$.__views.__alloyId33!click!toggle"] = true;
    $.__views.__alloyId30.rightNavButton = $.__views.__alloyId33;
    $.__views.menu = Ti.UI.createView({
        right: 3,
        top: 48,
        width: "70%",
        height: 180,
        borderRadius: 5,
        borderColor: "#CE1D1C",
        borderWidth: 1,
        layout: "vertical",
        id: "menu"
    });
    $.__views.__alloyId30.add($.__views.menu);
    $.__views.__alloyId34 = Ti.UI.createButton({
        title: "Left",
        id: "__alloyId34"
    });
    $.__views.menu.add($.__views.__alloyId34);
    toggle ? $.__views.__alloyId34.addEventListener("click", toggle) : __defers["$.__views.__alloyId34!click!toggle"] = true;
    $.__views.__alloyId29 = Ti.UI.iOS.createNavigationWindow({
        window: $.__views.__alloyId30,
        role: "centerWindow",
        id: "__alloyId29"
    });
    $.__views.drawer = Alloy.createWidget("nl.fokkezb.drawer", "widget", {
        openDrawerGestureMode: "OPEN_MODE_ALL",
        closeDrawerGestureMode: "CLOSE_MODE_MARGIN",
        leftDrawerWidth: 200,
        id: "drawer",
        children: [ $.__views.mainWindow, $.__views.__alloyId29 ]
    });
    $.__views.drawer && $.addTopLevelView($.__views.drawer);
    exports.destroy = function() {};
    _.extend($, $.__views);
    $.drawer.open();
    var API = require("api");
    var flag = 0;
    API.loadStoreLocator();
    API.loadBrochure();
    API.loadColour();
    Alloy.Globals.Drawer = $.drawer;
    $.drawer.addEventListener("android:back", function() {
        if (1 == flag) {
            var nav = Alloy.createController("storeLocator").getView();
            Alloy.Globals.Drawer.setCenterWindow(nav);
        } else {
            var nav = Alloy.createController("home").getView();
            Alloy.Globals.Drawer.setCenterWindow(nav);
        }
    });
    __defers["$.__views.menuTable!click!doMenuClick"] && $.__views.menuTable.addEventListener("click", doMenuClick);
    __defers["$.__views.__alloyId33!click!toggle"] && $.__views.__alloyId33.addEventListener("click", toggle);
    __defers["$.__views.__alloyId34!click!toggle"] && $.__views.__alloyId34.addEventListener("click", toggle);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;