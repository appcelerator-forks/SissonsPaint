function Controller() {
    function checkLoadStatus() {
        var loadStoreLocator = Ti.App.Properties.getString("loadStoreLocator");
        var loadBrochure = Ti.App.Properties.getString("loadBrochure");
        var loadColour = Ti.App.Properties.getString("loadColour");
        var loadCategory = Ti.App.Properties.getString("loadCategory");
        if ("1" == loadStoreLocator && "1" == loadBrochure && "1" == loadColour && "1" == loadCategory) {
            $.loadingBar.opacity = "0";
            var nav = Alloy.createController("colourSwatches").getView();
            Alloy.Globals.Drawer.setCenterWindow(nav);
        } else setTimeout(function() {
            checkLoadStatus();
        }, 1500);
    }
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
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
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
<<<<<<< HEAD
    var __alloyId39 = [];
    $.__views.__alloyId40 = Ti.UI.createTableViewRow({
        height: "50",
        id: "__alloyId40"
    });
    __alloyId39.push($.__views.__alloyId40);
    $.__views.__alloyId41 = Ti.UI.createLabel({
=======
<<<<<<< HEAD
    var __alloyId32 = [];
    $.__views.__alloyId33 = Ti.UI.createTableViewRow({
        height: "50",
        id: "__alloyId33"
    });
    __alloyId32.push($.__views.__alloyId33);
    $.__views.__alloyId34 = Ti.UI.createLabel({
        width: Ti.UI.FILL,
        height: Ti.UI.SIZE,
        color: "white",
        text: "Home",
        left: "30",
        id: "__alloyId34"
    });
    $.__views.__alloyId33.add($.__views.__alloyId34);
=======
    var __alloyId34 = [];
>>>>>>> FETCH_HEAD
    $.__views.__alloyId35 = Ti.UI.createTableViewRow({
=======
    var __alloyId35 = [];
    $.__views.__alloyId36 = Ti.UI.createTableViewRow({
>>>>>>> 21/10/2014
        height: "50",
        id: "__alloyId36"
    });
<<<<<<< HEAD
<<<<<<< HEAD
    __alloyId32.push($.__views.__alloyId35);
=======
    __alloyId34.push($.__views.__alloyId35);
>>>>>>> FETCH_HEAD
    $.__views.__alloyId36 = Ti.UI.createLabel({
>>>>>>> FETCH_HEAD
=======
    __alloyId35.push($.__views.__alloyId36);
    $.__views.__alloyId37 = Ti.UI.createLabel({
>>>>>>> 21/10/2014
        width: Ti.UI.FILL,
        height: Ti.UI.SIZE,
        color: "white",
        text: "DIY Paint",
        left: "30",
<<<<<<< HEAD
<<<<<<< HEAD
        id: "__alloyId41"
    });
    $.__views.__alloyId40.add($.__views.__alloyId41);
    $.__views.__alloyId42 = Ti.UI.createTableViewRow({
        height: "50",
        id: "__alloyId42"
    });
    __alloyId39.push($.__views.__alloyId42);
    $.__views.__alloyId43 = Ti.UI.createLabel({
=======
        id: "__alloyId36"
=======
        id: "__alloyId37"
>>>>>>> 21/10/2014
    });
    $.__views.__alloyId36.add($.__views.__alloyId37);
    $.__views.__alloyId38 = Ti.UI.createTableViewRow({
        height: "50",
        id: "__alloyId38"
    });
<<<<<<< HEAD
<<<<<<< HEAD
    __alloyId32.push($.__views.__alloyId37);
=======
    __alloyId34.push($.__views.__alloyId37);
>>>>>>> FETCH_HEAD
    $.__views.__alloyId38 = Ti.UI.createLabel({
>>>>>>> FETCH_HEAD
=======
    __alloyId35.push($.__views.__alloyId38);
    $.__views.__alloyId39 = Ti.UI.createLabel({
>>>>>>> 21/10/2014
        width: Ti.UI.FILL,
        height: Ti.UI.SIZE,
        color: "white",
        text: "Colour Picker",
        left: "30",
<<<<<<< HEAD
<<<<<<< HEAD
        id: "__alloyId43"
    });
    $.__views.__alloyId42.add($.__views.__alloyId43);
    $.__views.__alloyId44 = Ti.UI.createTableViewRow({
        height: "50",
        id: "__alloyId44"
    });
    __alloyId39.push($.__views.__alloyId44);
    $.__views.__alloyId45 = Ti.UI.createLabel({
=======
        id: "__alloyId38"
=======
        id: "__alloyId39"
>>>>>>> 21/10/2014
    });
    $.__views.__alloyId38.add($.__views.__alloyId39);
    $.__views.__alloyId40 = Ti.UI.createTableViewRow({
        height: "50",
        id: "__alloyId40"
    });
<<<<<<< HEAD
<<<<<<< HEAD
    __alloyId32.push($.__views.__alloyId39);
=======
    __alloyId34.push($.__views.__alloyId39);
>>>>>>> FETCH_HEAD
    $.__views.__alloyId40 = Ti.UI.createLabel({
>>>>>>> FETCH_HEAD
=======
    __alloyId35.push($.__views.__alloyId40);
    $.__views.__alloyId41 = Ti.UI.createLabel({
>>>>>>> 21/10/2014
        width: Ti.UI.FILL,
        height: Ti.UI.SIZE,
        color: "white",
        text: "Colour Swatches",
        left: "30",
<<<<<<< HEAD
<<<<<<< HEAD
        id: "__alloyId45"
    });
    $.__views.__alloyId44.add($.__views.__alloyId45);
    $.__views.__alloyId46 = Ti.UI.createTableViewRow({
        height: "50",
        id: "__alloyId46"
    });
    __alloyId39.push($.__views.__alloyId46);
    $.__views.__alloyId47 = Ti.UI.createLabel({
=======
        id: "__alloyId40"
=======
        id: "__alloyId41"
>>>>>>> 21/10/2014
    });
    $.__views.__alloyId40.add($.__views.__alloyId41);
    $.__views.__alloyId42 = Ti.UI.createTableViewRow({
        height: "50",
        id: "__alloyId42"
    });
<<<<<<< HEAD
<<<<<<< HEAD
    __alloyId32.push($.__views.__alloyId41);
=======
    __alloyId34.push($.__views.__alloyId41);
>>>>>>> FETCH_HEAD
    $.__views.__alloyId42 = Ti.UI.createLabel({
>>>>>>> FETCH_HEAD
=======
    __alloyId35.push($.__views.__alloyId42);
    $.__views.__alloyId43 = Ti.UI.createLabel({
>>>>>>> 21/10/2014
        width: Ti.UI.FILL,
        height: Ti.UI.SIZE,
        color: "white",
        text: "Brochure",
        left: "30",
<<<<<<< HEAD
<<<<<<< HEAD
        id: "__alloyId47"
    });
    $.__views.__alloyId46.add($.__views.__alloyId47);
    $.__views.__alloyId48 = Ti.UI.createTableViewRow({
        height: "50",
        id: "__alloyId48"
    });
    __alloyId39.push($.__views.__alloyId48);
    $.__views.__alloyId49 = Ti.UI.createLabel({
=======
        id: "__alloyId42"
=======
        id: "__alloyId43"
>>>>>>> 21/10/2014
    });
    $.__views.__alloyId42.add($.__views.__alloyId43);
    $.__views.__alloyId44 = Ti.UI.createTableViewRow({
        height: "50",
        id: "__alloyId44"
    });
<<<<<<< HEAD
<<<<<<< HEAD
    __alloyId32.push($.__views.__alloyId43);
=======
    __alloyId34.push($.__views.__alloyId43);
>>>>>>> FETCH_HEAD
    $.__views.__alloyId44 = Ti.UI.createLabel({
>>>>>>> FETCH_HEAD
=======
    __alloyId35.push($.__views.__alloyId44);
    $.__views.__alloyId45 = Ti.UI.createLabel({
>>>>>>> 21/10/2014
        width: Ti.UI.FILL,
        height: Ti.UI.SIZE,
        color: "white",
        text: "Store Locator",
        left: "30",
<<<<<<< HEAD
<<<<<<< HEAD
        id: "__alloyId49"
    });
    $.__views.__alloyId48.add($.__views.__alloyId49);
    $.__views.__alloyId50 = Ti.UI.createTableViewRow({
        height: "50",
        id: "__alloyId50"
    });
    __alloyId39.push($.__views.__alloyId50);
    $.__views.__alloyId51 = Ti.UI.createLabel({
=======
        id: "__alloyId44"
=======
        id: "__alloyId45"
>>>>>>> 21/10/2014
    });
    $.__views.__alloyId44.add($.__views.__alloyId45);
    $.__views.__alloyId46 = Ti.UI.createTableViewRow({
        height: "50",
        id: "__alloyId46"
    });
<<<<<<< HEAD
<<<<<<< HEAD
    __alloyId32.push($.__views.__alloyId45);
=======
    __alloyId34.push($.__views.__alloyId45);
>>>>>>> FETCH_HEAD
    $.__views.__alloyId46 = Ti.UI.createLabel({
>>>>>>> FETCH_HEAD
=======
    __alloyId35.push($.__views.__alloyId46);
    $.__views.__alloyId47 = Ti.UI.createLabel({
>>>>>>> 21/10/2014
        width: Ti.UI.FILL,
        height: Ti.UI.SIZE,
        color: "white",
        text: "About Us",
        left: "30",
<<<<<<< HEAD
<<<<<<< HEAD
        id: "__alloyId51"
    });
    $.__views.__alloyId50.add($.__views.__alloyId51);
    $.__views.menuTable = Ti.UI.createTableView({
        data: __alloyId39,
=======
        id: "__alloyId46"
=======
        id: "__alloyId47"
>>>>>>> 21/10/2014
    });
    $.__views.__alloyId46.add($.__views.__alloyId47);
    $.__views.menuTable = Ti.UI.createTableView({
<<<<<<< HEAD
<<<<<<< HEAD
        data: __alloyId32,
=======
        data: __alloyId34,
>>>>>>> FETCH_HEAD
>>>>>>> FETCH_HEAD
=======
        data: __alloyId35,
>>>>>>> 21/10/2014
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
<<<<<<< HEAD
    $.__views.brochureView = Ti.UI.createView({
        backgroundColor: "white",
        id: "brochureView",
        layout: "vertical",
        backgroundImage: "/images/default.png"
    });
    $.__views.centerWindow.add($.__views.brochureView);
    $.__views.loadingBar = Ti.UI.createView({
        layout: "vertical",
        id: "loadingBar",
        height: "0",
        width: "120",
        borderRadius: "15",
        top: "0",
        opacity: "1",
        backgroundColor: "#2E2E2E"
    });
    $.__views.brochureView.add($.__views.loadingBar);
    $.__views.activityIndicator = Ti.UI.createActivityIndicator({
        style: Ti.UI.ActivityIndicatorStyle.BIG,
        top: 15,
        left: 30,
        width: 60,
        id: "activityIndicator"
    });
    $.__views.loadingBar.add($.__views.activityIndicator);
    $.__views.__alloyId52 = Ti.UI.createLabel({
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        color: "#ffffff",
        text: "Loading",
        id: "__alloyId52"
    });
    $.__views.loadingBar.add($.__views.__alloyId52);
=======
<<<<<<< HEAD
    $.__views.menu = Ti.UI.createView({
        layout: "vertical",
        id: "menu"
    });
    $.__views.centerWindow.add($.__views.menu);
    $.__views.__alloyId47 = Ti.UI.createView({
        layout: "horizontal",
        height: "80",
        id: "__alloyId47"
    });
    $.__views.menu.add($.__views.__alloyId47);
    $.__views.__alloyId48 = Alloy.createController("toggle", {
        id: "__alloyId48",
        __parentSymbol: $.__views.__alloyId47
    });
    $.__views.__alloyId48.setParent($.__views.__alloyId47);
    $.__views.__alloyId49 = Ti.UI.createLabel({
=======
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
<<<<<<< HEAD
    $.__views.__alloyId47.setParent($.__views.toggle);
    $.__views.__alloyId48 = Ti.UI.createLabel({
>>>>>>> FETCH_HEAD
=======
    $.__views.__alloyId48.setParent($.__views.toggle);
    $.__views.__alloyId49 = Ti.UI.createLabel({
>>>>>>> 21/10/2014
        width: "75%",
        height: Ti.UI.SIZE,
        color: "black",
        font: {
            fontSize: 28
        },
        text: "DIY Paint",
        textAlign: Ti.UI.TEXT_ALIGNMENT_CENTER,
<<<<<<< HEAD
<<<<<<< HEAD
        id: "__alloyId49"
    });
    $.__views.__alloyId47.add($.__views.__alloyId49);
    $.__views.__alloyId50 = Ti.UI.createLabel({
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        color: "#000",
        text: "I am center",
        id: "__alloyId50"
    });
    $.__views.centerWindow.add($.__views.__alloyId50);
=======
        id: "__alloyId48"
=======
        id: "__alloyId49"
>>>>>>> 21/10/2014
    });
    $.__views.toggle.add($.__views.__alloyId49);
    $.__views.__alloyId50 = Alloy.createController("colourSwatches", {
        id: "__alloyId50",
        __parentSymbol: $.__views.centerWindow
    });
<<<<<<< HEAD
    $.__views.__alloyId49.setParent($.__views.centerWindow);
>>>>>>> FETCH_HEAD
>>>>>>> FETCH_HEAD
=======
    $.__views.__alloyId50.setParent($.__views.centerWindow);
>>>>>>> 21/10/2014
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
    Ti.App.Properties.setString("from", "index");
    Ti.App.Properties.setString("loadStoreLocator", "0");
    Ti.App.Properties.setString("loadBrochure", "0");
    Ti.App.Properties.setString("loadColour", "0");
    Ti.App.Properties.setString("loadCategory", "0");
    var API = require("api");
    $.activityIndicator.show();
    $.loadingBar.opacity = "1";
    $.loadingBar.height = "120";
    $.loadingBar.top = "100";
    setTimeout(function() {
        API.loadStoreLocator();
        API.loadBrochure();
        API.loadColour();
        API.loadCategory();
        checkLoadStatus();
    }, 1500);
    Alloy.Globals.Drawer = $.drawer;
    $.drawer.addEventListener("android:back", function() {
        mod = Ti.App.Properties.getString("module");
        if ("storeLocator" == mod) {
            Ti.App.Properties.setString("module", "index");
            var nav = Alloy.createController("storeLocator").getView();
            Alloy.Globals.Drawer.setCenterWindow(nav);
        } else if ("colourDetails" == mod) {
            from = Ti.App.Properties.getString("from");
            Ti.App.Properties.setString("module", "index");
            var nav = Alloy.createController(from).getView();
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