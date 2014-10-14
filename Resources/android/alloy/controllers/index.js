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
        var win = Alloy.createController(target).getView();
        Alloy.Globals.Drawer.setCenterWindow(win);
        Alloy.Globals.Drawer.closeLeftWindow();
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "index";
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
    $.__views.mainWindow = require("xp.ui").createWindow({
        backgroundColor: "black",
        fullscreen: "true",
        title: "test",
        role: "leftWindow",
        id: "mainWindow"
    });
    $.__views.logo = Ti.UI.createImageView({
        id: "logo",
        image: "/images/menu_logo.png",
        width: "150",
        top: "30"
    });
    $.__views.mainWindow.add($.__views.logo);
    var __alloyId103 = [];
    $.__views.__alloyId104 = Ti.UI.createTableViewRow({
        height: "50",
        id: "__alloyId104"
    });
    __alloyId103.push($.__views.__alloyId104);
    $.__views.__alloyId105 = Ti.UI.createLabel({
        width: Ti.UI.FILL,
        height: Ti.UI.SIZE,
        color: "white",
        text: "Home",
        left: "30",
        id: "__alloyId105"
    });
    $.__views.__alloyId104.add($.__views.__alloyId105);
    $.__views.__alloyId106 = Ti.UI.createTableViewRow({
        height: "50",
        id: "__alloyId106"
    });
    __alloyId103.push($.__views.__alloyId106);
    $.__views.__alloyId107 = Ti.UI.createLabel({
        width: Ti.UI.FILL,
        height: Ti.UI.SIZE,
        color: "white",
        text: "DIY Paint",
        left: "30",
        id: "__alloyId107"
    });
    $.__views.__alloyId106.add($.__views.__alloyId107);
    $.__views.__alloyId108 = Ti.UI.createTableViewRow({
        height: "50",
        id: "__alloyId108"
    });
    __alloyId103.push($.__views.__alloyId108);
    $.__views.__alloyId109 = Ti.UI.createLabel({
        width: Ti.UI.FILL,
        height: Ti.UI.SIZE,
        color: "white",
        text: "Colour Picker",
        left: "30",
        id: "__alloyId109"
    });
    $.__views.__alloyId108.add($.__views.__alloyId109);
    $.__views.__alloyId110 = Ti.UI.createTableViewRow({
        height: "50",
        id: "__alloyId110"
    });
    __alloyId103.push($.__views.__alloyId110);
    $.__views.__alloyId111 = Ti.UI.createLabel({
        width: Ti.UI.FILL,
        height: Ti.UI.SIZE,
        color: "white",
        text: "Colour Swatches",
        left: "30",
        id: "__alloyId111"
    });
    $.__views.__alloyId110.add($.__views.__alloyId111);
    $.__views.__alloyId112 = Ti.UI.createTableViewRow({
        height: "50",
        id: "__alloyId112"
    });
    __alloyId103.push($.__views.__alloyId112);
    $.__views.__alloyId113 = Ti.UI.createLabel({
        width: Ti.UI.FILL,
        height: Ti.UI.SIZE,
        color: "white",
        text: "Brochure",
        left: "30",
        id: "__alloyId113"
    });
    $.__views.__alloyId112.add($.__views.__alloyId113);
    $.__views.__alloyId114 = Ti.UI.createTableViewRow({
        height: "50",
        id: "__alloyId114"
    });
    __alloyId103.push($.__views.__alloyId114);
    $.__views.__alloyId115 = Ti.UI.createLabel({
        width: Ti.UI.FILL,
        height: Ti.UI.SIZE,
        color: "white",
        text: "Store Locator",
        left: "30",
        id: "__alloyId115"
    });
    $.__views.__alloyId114.add($.__views.__alloyId115);
    $.__views.__alloyId116 = Ti.UI.createTableViewRow({
        height: "50",
        id: "__alloyId116"
    });
    __alloyId103.push($.__views.__alloyId116);
    $.__views.__alloyId117 = Ti.UI.createLabel({
        width: Ti.UI.FILL,
        height: Ti.UI.SIZE,
        color: "white",
        text: "About Us",
        left: "30",
        id: "__alloyId117"
    });
    $.__views.__alloyId116.add($.__views.__alloyId117);
    $.__views.menuTable = Ti.UI.createTableView({
        data: __alloyId103,
        id: "menuTable",
        top: "100",
        separatorColor: "black"
    });
    $.__views.mainWindow.add($.__views.menuTable);
    doMenuClick ? $.__views.menuTable.addEventListener("click", doMenuClick) : __defers["$.__views.menuTable!click!doMenuClick"] = true;
    $.__views.tnc = Ti.UI.createLabel({
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        color: "white",
        font: {
            fontSize: 8
        },
        text: "TERM & CONDITIONS | 2014 COPYRIGHT",
        id: "tnc",
        bottom: "20"
    });
    $.__views.mainWindow.add($.__views.tnc);
    $.__views.centerWindow = require("xp.ui").createWindow({
        backgroundColor: "white",
        fullscreen: true,
        id: "centerWindow",
        role: "centerWindow"
    });
    $.__views.menu = Ti.UI.createView({
        layout: "vertical",
        id: "menu"
    });
    $.__views.centerWindow.add($.__views.menu);
    $.__views.__alloyId118 = Ti.UI.createView({
        layout: "horizontal",
        height: "80",
        id: "__alloyId118"
    });
    $.__views.menu.add($.__views.__alloyId118);
    $.__views.__alloyId119 = Alloy.createController("toggle", {
        id: "__alloyId119",
        __parentSymbol: $.__views.__alloyId118
    });
    $.__views.__alloyId119.setParent($.__views.__alloyId118);
    $.__views.__alloyId120 = Ti.UI.createLabel({
        width: "75%",
        height: Ti.UI.SIZE,
        color: "black",
        font: {
            fontSize: 28
        },
        text: "Index",
        textAlign: Ti.UI.TEXT_ALIGNMENT_CENTER,
        id: "__alloyId120"
    });
    $.__views.__alloyId118.add($.__views.__alloyId120);
    $.__views.__alloyId121 = Ti.UI.createLabel({
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        color: "#000",
        text: "I am center",
        id: "__alloyId121"
    });
    $.__views.centerWindow.add($.__views.__alloyId121);
    $.__views.drawer = Alloy.createWidget("nl.fokkezb.drawer", "widget", {
        openDrawerGestureMode: "OPEN_MODE_ALL",
        closeDrawerGestureMode: "CLOSE_MODE_MARGIN",
        leftDrawerWidth: 200,
        id: "drawer",
        children: [ $.__views.mainWindow, $.__views.centerWindow ]
    });
    $.__views.drawer && $.addTopLevelView($.__views.drawer);
    exports.destroy = function() {};
    _.extend($, $.__views);
    $.drawer.open({
        navBarHidden: true,
        fullscreen: true
    });
    Ti.App.Properties.setString("module", "index");
    var API = require("api");
    API.loadColour();
    API.loadStoreLocator();
    API.loadBrochure();
    API.loadCategory();
    Alloy.Globals.Drawer = $.drawer;
    $.drawer.addEventListener("android:back", function() {
        mod = Ti.App.Properties.getString("module");
        if ("storeLocator" == mod) {
            Ti.App.Properties.setString("module", "index");
            var nav = Alloy.createController("storeLocator").getView();
            Alloy.Globals.Drawer.setCenterWindow(nav);
        } else {
            var nav = Alloy.createController("home").getView();
            Alloy.Globals.Drawer.setCenterWindow(nav);
        }
    });
    require("dk.napp.drawer");
    __defers["$.__views.menuTable!click!doMenuClick"] && $.__views.menuTable.addEventListener("click", doMenuClick);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;