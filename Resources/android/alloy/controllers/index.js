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
<<<<<<< HEAD
    var __alloyId32 = [];
    $.__views.__alloyId33 = Ti.UI.createTableViewRow({
        height: "50",
        id: "__alloyId33"
    });
    __alloyId32.push($.__views.__alloyId33);
    $.__views.__alloyId34 = Ti.UI.createLabel({
=======
    var __alloyId31 = [];
    $.__views.__alloyId32 = Ti.UI.createTableViewRow({
        height: "50",
        id: "__alloyId32"
    });
    __alloyId31.push($.__views.__alloyId32);
    $.__views.__alloyId33 = Ti.UI.createLabel({
        width: Ti.UI.FILL,
        height: Ti.UI.SIZE,
        color: "white",
        text: "Home",
        left: "30",
        id: "__alloyId33"
    });
    $.__views.__alloyId32.add($.__views.__alloyId33);
    $.__views.__alloyId34 = Ti.UI.createTableViewRow({
        height: "50",
        id: "__alloyId34"
    });
    __alloyId31.push($.__views.__alloyId34);
    $.__views.__alloyId35 = Ti.UI.createLabel({
        width: Ti.UI.FILL,
        height: Ti.UI.SIZE,
        color: "white",
        text: "DIY Paint",
        left: "30",
        id: "__alloyId35"
    });
    $.__views.__alloyId34.add($.__views.__alloyId35);
    $.__views.__alloyId36 = Ti.UI.createTableViewRow({
        height: "50",
        id: "__alloyId36"
    });
    __alloyId31.push($.__views.__alloyId36);
    $.__views.__alloyId37 = Ti.UI.createLabel({
>>>>>>> FETCH_HEAD
        width: Ti.UI.FILL,
        height: Ti.UI.SIZE,
        color: "white",
        text: "Colour Picker",
        left: "30",
<<<<<<< HEAD
        id: "__alloyId34"
=======
        id: "__alloyId37"
>>>>>>> FETCH_HEAD
    });
    $.__views.__alloyId33.add($.__views.__alloyId34);
    $.__views.__alloyId35 = Ti.UI.createTableViewRow({
        height: "50",
        id: "__alloyId35"
    });
<<<<<<< HEAD
    __alloyId32.push($.__views.__alloyId35);
    $.__views.__alloyId36 = Ti.UI.createLabel({
=======
    __alloyId31.push($.__views.__alloyId38);
    $.__views.__alloyId39 = Ti.UI.createLabel({
>>>>>>> FETCH_HEAD
        width: Ti.UI.FILL,
        height: Ti.UI.SIZE,
        color: "white",
        text: "Colour Swatches",
        left: "30",
<<<<<<< HEAD
        id: "__alloyId36"
=======
        id: "__alloyId39"
>>>>>>> FETCH_HEAD
    });
    $.__views.__alloyId35.add($.__views.__alloyId36);
    $.__views.__alloyId37 = Ti.UI.createTableViewRow({
        height: "50",
        id: "__alloyId37"
    });
<<<<<<< HEAD
    __alloyId32.push($.__views.__alloyId37);
    $.__views.__alloyId38 = Ti.UI.createLabel({
=======
    __alloyId31.push($.__views.__alloyId40);
    $.__views.__alloyId41 = Ti.UI.createLabel({
>>>>>>> FETCH_HEAD
        width: Ti.UI.FILL,
        height: Ti.UI.SIZE,
        color: "white",
        text: "Brochure",
        left: "30",
<<<<<<< HEAD
        id: "__alloyId38"
=======
        id: "__alloyId41"
>>>>>>> FETCH_HEAD
    });
    $.__views.__alloyId37.add($.__views.__alloyId38);
    $.__views.__alloyId39 = Ti.UI.createTableViewRow({
        height: "50",
        id: "__alloyId39"
    });
<<<<<<< HEAD
    __alloyId32.push($.__views.__alloyId39);
    $.__views.__alloyId40 = Ti.UI.createLabel({
=======
    __alloyId31.push($.__views.__alloyId42);
    $.__views.__alloyId43 = Ti.UI.createLabel({
>>>>>>> FETCH_HEAD
        width: Ti.UI.FILL,
        height: Ti.UI.SIZE,
        color: "white",
        text: "Store Locator",
        left: "30",
<<<<<<< HEAD
        id: "__alloyId40"
=======
        id: "__alloyId43"
>>>>>>> FETCH_HEAD
    });
    $.__views.__alloyId39.add($.__views.__alloyId40);
    $.__views.__alloyId41 = Ti.UI.createTableViewRow({
        height: "50",
        id: "__alloyId41"
    });
<<<<<<< HEAD
    __alloyId32.push($.__views.__alloyId41);
    $.__views.__alloyId42 = Ti.UI.createLabel({
=======
    __alloyId31.push($.__views.__alloyId44);
    $.__views.__alloyId45 = Ti.UI.createLabel({
>>>>>>> FETCH_HEAD
        width: Ti.UI.FILL,
        height: Ti.UI.SIZE,
        color: "white",
        text: "About Us",
        left: "30",
<<<<<<< HEAD
        id: "__alloyId42"
    });
    $.__views.__alloyId41.add($.__views.__alloyId42);
    $.__views.__alloyId43 = Ti.UI.createTableViewRow({
        height: "50",
        id: "__alloyId43"
    });
    __alloyId32.push($.__views.__alloyId43);
    $.__views.__alloyId44 = Ti.UI.createLabel({
        width: Ti.UI.FILL,
        height: Ti.UI.SIZE,
        color: "white",
        text: "About Us",
        left: "30",
        id: "__alloyId44"
    });
    $.__views.__alloyId43.add($.__views.__alloyId44);
    $.__views.menuTable = Ti.UI.createTableView({
        data: __alloyId32,
=======
        id: "__alloyId45"
    });
    $.__views.__alloyId44.add($.__views.__alloyId45);
    $.__views.menuTable = Ti.UI.createTableView({
        data: __alloyId31,
>>>>>>> FETCH_HEAD
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
    $.__views.__alloyId45 = Alloy.createController("diyPaint", {
        id: "__alloyId45",
        __parentSymbol: $.__views.centerWindow
    });
<<<<<<< HEAD
    $.__views.__alloyId45.setParent($.__views.centerWindow);
=======
    $.__views.centerWindow.add($.__views.menu);
    $.__views.__alloyId46 = Ti.UI.createView({
        layout: "horizontal",
        height: "80",
        id: "__alloyId46"
    });
    $.__views.menu.add($.__views.__alloyId46);
    $.__views.__alloyId47 = Alloy.createController("toggle", {
        id: "__alloyId47",
        __parentSymbol: $.__views.__alloyId46
    });
    $.__views.__alloyId47.setParent($.__views.__alloyId46);
    $.__views.__alloyId48 = Ti.UI.createLabel({
        width: "75%",
        height: Ti.UI.SIZE,
        color: "black",
        font: {
            fontSize: 28
        },
        text: "Index",
        textAlign: Ti.UI.TEXT_ALIGNMENT_CENTER,
        id: "__alloyId48"
    });
    $.__views.__alloyId46.add($.__views.__alloyId48);
    $.__views.__alloyId49 = Ti.UI.createLabel({
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        color: "#000",
        text: "I am center",
        id: "__alloyId49"
    });
    $.__views.centerWindow.add($.__views.__alloyId49);
>>>>>>> FETCH_HEAD
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