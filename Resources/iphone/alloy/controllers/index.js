function __processArg(obj, key) {
    var arg = null;
    if (obj) {
        arg = obj[key] || null;
        delete obj[key];
    }
    return arg;
}

function Controller() {
    function checkLoadStatus() {
        var loadStoreLocator = Ti.App.Properties.getString("loadStoreLocator");
        var loadBrochure = Ti.App.Properties.getString("loadBrochure");
        var loadColour = Ti.App.Properties.getString("loadColour");
        var loadCategory = Ti.App.Properties.getString("loadCategory");
        if ("1" == loadStoreLocator && "1" == loadBrochure && "1" == loadColour && "1" == loadCategory) {
            $.loadingBar.opacity = "0";
            var nav = Alloy.createController("aboutUs").getView();
            Alloy.Globals.Drawer.setCenterWindow(nav);
            Alloy.Globals.Drawer.setOpenDrawerGestureMode(module.OPEN_MODE_ALL);
        } else setTimeout(function() {
            checkLoadStatus();
        }, 500);
    }
    function toggle() {
        $.drawer["toggleLeftWindow"]();
    }
    function doMenuClick(e) {
        switch (e.index) {
          case 0:
            navigation("aboutUs");
            Alloy.Globals.Drawer.setOpenDrawerGestureMode(module.OPEN_MODE_ALL);
            break;

          case 1:
            navigation("diyPaint");
            Alloy.Globals.Drawer.setOpenDrawerGestureMode(module.OPEN_MODE_NONE);
            break;

          case 2:
            navigation("colourPicker");
            Alloy.Globals.Drawer.setOpenDrawerGestureMode(module.OPEN_MODE_ALL);
            break;

          case 3:
            navigation("colourSwatches");
            Alloy.Globals.Drawer.setOpenDrawerGestureMode(module.OPEN_MODE_ALL);
            break;

          case 4:
            navigation("favourite");
            Alloy.Globals.Drawer.setOpenDrawerGestureMode(module.OPEN_MODE_ALL);
            break;

          case 5:
            navigation("brochure");
            Alloy.Globals.Drawer.setOpenDrawerGestureMode(module.OPEN_MODE_ALL);
            break;

          case 6:
            navigation("storeLocator");
            Alloy.Globals.Drawer.setOpenDrawerGestureMode(module.OPEN_MODE_ALL);
            break;

          case 7:
            navigation("contactUs");
            Alloy.Globals.Drawer.setOpenDrawerGestureMode(module.OPEN_MODE_ALL);
        }
    }
    function navigation(target) {
        var win = Alloy.createController(target).getView();
        Alloy.Globals.Drawer.setCenterWindow(win);
        Alloy.Globals.Drawer.closeLeftWindow();
    }
    function tnc() {
        var nav = Alloy.createController("tnc").getView();
        nav.open();
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
    var __alloyId109 = [];
    $.__views.__alloyId110 = Ti.UI.createTableViewRow({
        height: "50",
        id: "__alloyId110"
    });
    __alloyId109.push($.__views.__alloyId110);
    $.__views.__alloyId111 = Ti.UI.createLabel({
        width: Ti.UI.FILL,
        height: Ti.UI.SIZE,
        color: "white",
        text: "About Us",
        left: "30",
        id: "__alloyId111"
    });
    $.__views.__alloyId110.add($.__views.__alloyId111);
    $.__views.__alloyId112 = Ti.UI.createTableViewRow({
        height: "50",
        id: "__alloyId112"
    });
    __alloyId109.push($.__views.__alloyId112);
    $.__views.__alloyId113 = Ti.UI.createLabel({
        width: Ti.UI.FILL,
        height: Ti.UI.SIZE,
        color: "white",
        text: "Paint DIY",
        left: "30",
        id: "__alloyId113"
    });
    $.__views.__alloyId112.add($.__views.__alloyId113);
    $.__views.__alloyId114 = Ti.UI.createTableViewRow({
        height: "50",
        id: "__alloyId114"
    });
    __alloyId109.push($.__views.__alloyId114);
    $.__views.__alloyId115 = Ti.UI.createLabel({
        width: Ti.UI.FILL,
        height: Ti.UI.SIZE,
        color: "white",
        text: "Colour Picker",
        left: "30",
        id: "__alloyId115"
    });
    $.__views.__alloyId114.add($.__views.__alloyId115);
    $.__views.__alloyId116 = Ti.UI.createTableViewRow({
        height: "50",
        id: "__alloyId116"
    });
    __alloyId109.push($.__views.__alloyId116);
    $.__views.__alloyId117 = Ti.UI.createLabel({
        width: Ti.UI.FILL,
        height: Ti.UI.SIZE,
        color: "white",
        text: "Colour Swatches",
        left: "30",
        id: "__alloyId117"
    });
    $.__views.__alloyId116.add($.__views.__alloyId117);
    $.__views.__alloyId118 = Ti.UI.createTableViewRow({
        height: "50",
        id: "__alloyId118"
    });
    __alloyId109.push($.__views.__alloyId118);
    $.__views.__alloyId119 = Ti.UI.createLabel({
        width: Ti.UI.FILL,
        height: Ti.UI.SIZE,
        color: "white",
        text: "Favourite Colours",
        left: "30",
        id: "__alloyId119"
    });
    $.__views.__alloyId118.add($.__views.__alloyId119);
    $.__views.__alloyId120 = Ti.UI.createTableViewRow({
        height: "50",
        id: "__alloyId120"
    });
    __alloyId109.push($.__views.__alloyId120);
    $.__views.__alloyId121 = Ti.UI.createLabel({
        width: Ti.UI.FILL,
        height: Ti.UI.SIZE,
        color: "white",
        text: "Brochures",
        left: "30",
        id: "__alloyId121"
    });
    $.__views.__alloyId120.add($.__views.__alloyId121);
    $.__views.__alloyId122 = Ti.UI.createTableViewRow({
        height: "50",
        id: "__alloyId122"
    });
    __alloyId109.push($.__views.__alloyId122);
    $.__views.__alloyId123 = Ti.UI.createLabel({
        width: Ti.UI.FILL,
        height: Ti.UI.SIZE,
        color: "white",
        text: "Store Locator",
        left: "30",
        id: "__alloyId123"
    });
    $.__views.__alloyId122.add($.__views.__alloyId123);
    $.__views.__alloyId124 = Ti.UI.createTableViewRow({
        height: "50",
        id: "__alloyId124"
    });
    __alloyId109.push($.__views.__alloyId124);
    $.__views.__alloyId125 = Ti.UI.createLabel({
        width: Ti.UI.FILL,
        height: Ti.UI.SIZE,
        color: "white",
        text: "Contact Us",
        left: "30",
        id: "__alloyId125"
    });
    $.__views.__alloyId124.add($.__views.__alloyId125);
    $.__views.menuTable = Ti.UI.createTableView({
        data: __alloyId109,
        id: "menuTable",
        top: "80",
        separatorColor: "black",
        overScrollMode: Titanium.UI.Android.OVER_SCROLL_NEVER
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
        bottom: "10"
    });
    $.__views.mainWindow.add($.__views.tnc);
    tnc ? $.__views.tnc.addEventListener("click", tnc) : __defers["$.__views.tnc!click!tnc"] = true;
    $.__views.drawer = Alloy.createWidget("nl.fokkezb.drawer", "widget", {
        openDrawerGestureMode: "OPEN_MODE_ALL",
        closeDrawerGestureMode: "CLOSE_MODE_MARGIN",
        leftDrawerWidth: 200,
        id: "drawer",
        children: [ $.__views.mainWindow ]
    });
    $.__views.drawer && $.addTopLevelView($.__views.drawer);
    exports.destroy = function() {};
    _.extend($, $.__views);
    var pWidth = Ti.Platform.displayCaps.platformWidth;
    $.whiteLogo.setOpacity(pWidth > 800 ? 1 : 0);
    $.drawer.open({
        navBarHidden: true,
        fullscreen: true
    });
    Ti.App.Properties.setString("module", "index");
    Ti.App.Properties.setString("from", "index");
    Ti.App.Properties.setString("loadStoreLocator", "0");
    Ti.App.Properties.setString("loadBrochure", "0");
    Ti.App.Properties.setString("loadColour", "0");
    Ti.App.Properties.setString("loadCategory", "0");
    var API = require("api");
    var drawerFlag = 0;
    $.activityIndicator.show();
    $.loadingBar.opacity = "1";
    $.loadingBar.height = "120";
    $.loadingBar.top = PixelsToDPUnits(Ti.Platform.displayCaps.platformHeight) / 2 - $.loadingBar.getHeight() / 2;
    setTimeout(function() {
        API.loadStoreLocator();
        API.loadBrochure();
        API.loadColour();
        API.loadCategory();
        Alloy.Globals.Drawer.setOpenDrawerGestureMode(module.OPEN_MODE_NONE);
        checkLoadStatus();
    }, 500);
    Alloy.Globals.Drawer = $.drawer;
    $.drawer.addEventListener("android:back", function() {
        mod = Ti.App.Properties.getString("module");
        if ("storeLocator" == mod) {
            Ti.App.Properties.setString("module", "index");
            var nav = Alloy.createController("storeLocator").getView();
            Alloy.Globals.Drawer.setCenterWindow(nav);
        } else if ("search" == mod) {
            from = Ti.App.Properties.getString("from");
            Ti.App.Properties.setString("module", "index");
            var nav = Alloy.createController(from).getView();
            Alloy.Globals.Drawer.setCenterWindow(nav);
        } else if (1 == drawerFlag) {
            var dialog = Ti.UI.createAlertDialog({
                cancel: 1,
                buttonNames: [ "Cancel", "Confirm" ],
                message: "Would you like to exit Sissons Paint?",
                title: "Exit app"
            });
            dialog.addEventListener("click", function(e) {
                e.index === e.source.cancel;
                if (1 === e.index) {
                    var activity = Titanium.Android.currentActivity;
                    activity.finish();
                }
            });
            dialog.show();
        } else toggle();
    });
    $.drawer.addEventListener("windowDidOpen", function() {
        drawerFlag = 1;
    });
    $.drawer.addEventListener("windowDidClose", function() {
        $.destroy();
        drawerFlag = 0;
    });
    var module = require("dk.napp.drawer");
    __defers["$.__views.menuTable!click!doMenuClick"] && $.__views.menuTable.addEventListener("click", doMenuClick);
    __defers["$.__views.tnc!click!tnc"] && $.__views.tnc.addEventListener("click", tnc);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;