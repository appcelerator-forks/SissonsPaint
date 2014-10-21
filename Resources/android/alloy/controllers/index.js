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
    var __alloyId35 = [];
    $.__views.__alloyId36 = Ti.UI.createTableViewRow({
        height: "50",
        id: "__alloyId36"
    });
    __alloyId35.push($.__views.__alloyId36);
    $.__views.__alloyId37 = Ti.UI.createLabel({
        width: Ti.UI.FILL,
        height: Ti.UI.SIZE,
        color: "white",
        text: "DIY Paint",
        left: "30",
        id: "__alloyId37"
    });
    $.__views.__alloyId36.add($.__views.__alloyId37);
    $.__views.__alloyId38 = Ti.UI.createTableViewRow({
        height: "50",
        id: "__alloyId38"
    });
    __alloyId35.push($.__views.__alloyId38);
    $.__views.__alloyId39 = Ti.UI.createLabel({
        width: Ti.UI.FILL,
        height: Ti.UI.SIZE,
        color: "white",
        text: "Colour Picker",
        left: "30",
        id: "__alloyId39"
    });
    $.__views.__alloyId38.add($.__views.__alloyId39);
    $.__views.__alloyId40 = Ti.UI.createTableViewRow({
        height: "50",
        id: "__alloyId40"
    });
    __alloyId35.push($.__views.__alloyId40);
    $.__views.__alloyId41 = Ti.UI.createLabel({
        width: Ti.UI.FILL,
        height: Ti.UI.SIZE,
        color: "white",
        text: "Colour Swatches",
        left: "30",
        id: "__alloyId41"
    });
    $.__views.__alloyId40.add($.__views.__alloyId41);
    $.__views.__alloyId42 = Ti.UI.createTableViewRow({
        height: "50",
        id: "__alloyId42"
    });
    __alloyId35.push($.__views.__alloyId42);
    $.__views.__alloyId43 = Ti.UI.createLabel({
        width: Ti.UI.FILL,
        height: Ti.UI.SIZE,
        color: "white",
        text: "Brochure",
        left: "30",
        id: "__alloyId43"
    });
    $.__views.__alloyId42.add($.__views.__alloyId43);
    $.__views.__alloyId44 = Ti.UI.createTableViewRow({
        height: "50",
        id: "__alloyId44"
    });
    __alloyId35.push($.__views.__alloyId44);
    $.__views.__alloyId45 = Ti.UI.createLabel({
        width: Ti.UI.FILL,
        height: Ti.UI.SIZE,
        color: "white",
        text: "Store Locator",
        left: "30",
        id: "__alloyId45"
    });
    $.__views.__alloyId44.add($.__views.__alloyId45);
    $.__views.__alloyId46 = Ti.UI.createTableViewRow({
        height: "50",
        id: "__alloyId46"
    });
    __alloyId35.push($.__views.__alloyId46);
    $.__views.__alloyId47 = Ti.UI.createLabel({
        width: Ti.UI.FILL,
        height: Ti.UI.SIZE,
        color: "white",
        text: "About Us",
        left: "30",
        id: "__alloyId47"
    });
    $.__views.__alloyId46.add($.__views.__alloyId47);
    $.__views.menuTable = Ti.UI.createTableView({
        data: __alloyId35,
        id: "menuTable",
        top: "100",
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
        bottom: "20"
    });
    $.__views.mainWindow.add($.__views.tnc);
    $.__views.centerWindow = require("xp.ui").createWindow({
        backgroundColor: "white",
        fullscreen: true,
        id: "centerWindow",
        role: "centerWindow"
    });
    $.__views.toggle = Ti.UI.createView({
        id: "toggle",
        layout: "horizontal",
        height: "80",
        top: "0"
    });
    $.__views.centerWindow.add($.__views.toggle);
    $.__views.__alloyId48 = Alloy.createController("toggle", {
        id: "__alloyId48",
        __parentSymbol: $.__views.toggle
    });
    $.__views.__alloyId48.setParent($.__views.toggle);
    $.__views.__alloyId49 = Ti.UI.createLabel({
        width: "75%",
        height: Ti.UI.SIZE,
        color: "black",
        font: {
            fontSize: 28
        },
        text: "DIY Paint",
        textAlign: Ti.UI.TEXT_ALIGNMENT_CENTER,
        id: "__alloyId49"
    });
    $.__views.toggle.add($.__views.__alloyId49);
    $.__views.__alloyId50 = Alloy.createController("colourSwatches", {
        id: "__alloyId50",
        __parentSymbol: $.__views.centerWindow
    });
    $.__views.__alloyId50.setParent($.__views.centerWindow);
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
    setTimeout(function() {
        API.loadColour();
        API.loadStoreLocator();
        API.loadBrochure();
        API.loadCategory();
    }, 1500);
    Alloy.Globals.Drawer = $.drawer;
    $.drawer.addEventListener("android:back", function() {
        mod = Ti.App.Properties.getString("module");
        if ("storeLocator" == mod) {
            Ti.App.Properties.setString("module", "index");
            var nav = Alloy.createController("storeLocator").getView();
            Alloy.Globals.Drawer.setCenterWindow(nav);
        } else {
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
        }
    });
    require("dk.napp.drawer");
    __defers["$.__views.menuTable!click!doMenuClick"] && $.__views.menuTable.addEventListener("click", doMenuClick);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;