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
    var __alloyId35 = [];
    $.__views.__alloyId36 = Ti.UI.createTableViewRow({
        height: "50",
        id: "__alloyId36"
    });
    __alloyId35.push($.__views.__alloyId36);
    $.__views.__alloyId37 = Ti.UI.createLabel({
=======
<<<<<<< HEAD
    var __alloyId19 = [];
    $.__views.__alloyId20 = Ti.UI.createTableViewRow({
        height: "50",
        id: "__alloyId20"
    });
    __alloyId19.push($.__views.__alloyId20);
    $.__views.__alloyId21 = Ti.UI.createLabel({
=======
    var __alloyId88 = [];
    $.__views.__alloyId89 = Ti.UI.createTableViewRow({
        height: "50",
        id: "__alloyId89"
    });
    __alloyId88.push($.__views.__alloyId89);
    $.__views.__alloyId90 = Ti.UI.createLabel({
>>>>>>> FETCH_HEAD
>>>>>>> FETCH_HEAD
        width: Ti.UI.FILL,
        height: Ti.UI.SIZE,
        color: "white",
        text: "Home",
        left: "30",
<<<<<<< HEAD
        id: "__alloyId37"
    });
    $.__views.__alloyId36.add($.__views.__alloyId37);
    $.__views.__alloyId38 = Ti.UI.createTableViewRow({
        height: "50",
        id: "__alloyId38"
    });
    __alloyId35.push($.__views.__alloyId38);
    $.__views.__alloyId39 = Ti.UI.createLabel({
=======
<<<<<<< HEAD
        id: "__alloyId21"
    });
    $.__views.__alloyId20.add($.__views.__alloyId21);
    $.__views.__alloyId22 = Ti.UI.createTableViewRow({
        height: "50",
        id: "__alloyId22"
    });
    __alloyId19.push($.__views.__alloyId22);
    $.__views.__alloyId23 = Ti.UI.createLabel({
=======
        id: "__alloyId90"
    });
    $.__views.__alloyId89.add($.__views.__alloyId90);
    $.__views.__alloyId91 = Ti.UI.createTableViewRow({
        height: "50",
        id: "__alloyId91"
    });
    __alloyId88.push($.__views.__alloyId91);
    $.__views.__alloyId92 = Ti.UI.createLabel({
>>>>>>> FETCH_HEAD
>>>>>>> FETCH_HEAD
        width: Ti.UI.FILL,
        height: Ti.UI.SIZE,
        color: "white",
        text: "DIY Paint",
        left: "30",
<<<<<<< HEAD
        id: "__alloyId39"
    });
    $.__views.__alloyId38.add($.__views.__alloyId39);
    $.__views.__alloyId40 = Ti.UI.createTableViewRow({
        height: "50",
        id: "__alloyId40"
    });
    __alloyId35.push($.__views.__alloyId40);
    $.__views.__alloyId41 = Ti.UI.createLabel({
=======
<<<<<<< HEAD
        id: "__alloyId23"
    });
    $.__views.__alloyId22.add($.__views.__alloyId23);
    $.__views.__alloyId24 = Ti.UI.createTableViewRow({
        height: "50",
        id: "__alloyId24"
    });
    __alloyId19.push($.__views.__alloyId24);
    $.__views.__alloyId25 = Ti.UI.createLabel({
=======
        id: "__alloyId92"
    });
    $.__views.__alloyId91.add($.__views.__alloyId92);
    $.__views.__alloyId93 = Ti.UI.createTableViewRow({
        height: "50",
        id: "__alloyId93"
    });
    __alloyId88.push($.__views.__alloyId93);
    $.__views.__alloyId94 = Ti.UI.createLabel({
>>>>>>> FETCH_HEAD
>>>>>>> FETCH_HEAD
        width: Ti.UI.FILL,
        height: Ti.UI.SIZE,
        color: "white",
        text: "Colour Picker",
        left: "30",
<<<<<<< HEAD
        id: "__alloyId41"
    });
    $.__views.__alloyId40.add($.__views.__alloyId41);
    $.__views.__alloyId42 = Ti.UI.createTableViewRow({
        height: "50",
        id: "__alloyId42"
    });
    __alloyId35.push($.__views.__alloyId42);
    $.__views.__alloyId43 = Ti.UI.createLabel({
=======
<<<<<<< HEAD
        id: "__alloyId25"
    });
    $.__views.__alloyId24.add($.__views.__alloyId25);
    $.__views.__alloyId26 = Ti.UI.createTableViewRow({
        height: "50",
        id: "__alloyId26"
    });
    __alloyId19.push($.__views.__alloyId26);
    $.__views.__alloyId27 = Ti.UI.createLabel({
=======
        id: "__alloyId94"
    });
    $.__views.__alloyId93.add($.__views.__alloyId94);
    $.__views.__alloyId95 = Ti.UI.createTableViewRow({
        height: "50",
        id: "__alloyId95"
    });
    __alloyId88.push($.__views.__alloyId95);
    $.__views.__alloyId96 = Ti.UI.createLabel({
>>>>>>> FETCH_HEAD
>>>>>>> FETCH_HEAD
        width: Ti.UI.FILL,
        height: Ti.UI.SIZE,
        color: "white",
        text: "Colour Swatches",
        left: "30",
<<<<<<< HEAD
        id: "__alloyId43"
    });
    $.__views.__alloyId42.add($.__views.__alloyId43);
    $.__views.__alloyId44 = Ti.UI.createTableViewRow({
        height: "50",
        id: "__alloyId44"
    });
    __alloyId35.push($.__views.__alloyId44);
    $.__views.__alloyId45 = Ti.UI.createLabel({
=======
<<<<<<< HEAD
        id: "__alloyId27"
    });
    $.__views.__alloyId26.add($.__views.__alloyId27);
    $.__views.__alloyId28 = Ti.UI.createTableViewRow({
        height: "50",
        id: "__alloyId28"
    });
    __alloyId19.push($.__views.__alloyId28);
    $.__views.__alloyId29 = Ti.UI.createLabel({
=======
        id: "__alloyId96"
    });
    $.__views.__alloyId95.add($.__views.__alloyId96);
    $.__views.__alloyId97 = Ti.UI.createTableViewRow({
        height: "50",
        id: "__alloyId97"
    });
    __alloyId88.push($.__views.__alloyId97);
    $.__views.__alloyId98 = Ti.UI.createLabel({
>>>>>>> FETCH_HEAD
>>>>>>> FETCH_HEAD
        width: Ti.UI.FILL,
        height: Ti.UI.SIZE,
        color: "white",
        text: "Brochure",
        left: "30",
<<<<<<< HEAD
        id: "__alloyId45"
    });
    $.__views.__alloyId44.add($.__views.__alloyId45);
    $.__views.__alloyId46 = Ti.UI.createTableViewRow({
        height: "50",
        id: "__alloyId46"
    });
    __alloyId35.push($.__views.__alloyId46);
    $.__views.__alloyId47 = Ti.UI.createLabel({
=======
<<<<<<< HEAD
        id: "__alloyId29"
    });
    $.__views.__alloyId28.add($.__views.__alloyId29);
    $.__views.__alloyId30 = Ti.UI.createTableViewRow({
        height: "50",
        id: "__alloyId30"
    });
    __alloyId19.push($.__views.__alloyId30);
    $.__views.__alloyId31 = Ti.UI.createLabel({
=======
        id: "__alloyId98"
    });
    $.__views.__alloyId97.add($.__views.__alloyId98);
    $.__views.__alloyId99 = Ti.UI.createTableViewRow({
        height: "50",
        id: "__alloyId99"
    });
    __alloyId88.push($.__views.__alloyId99);
    $.__views.__alloyId100 = Ti.UI.createLabel({
>>>>>>> FETCH_HEAD
>>>>>>> FETCH_HEAD
        width: Ti.UI.FILL,
        height: Ti.UI.SIZE,
        color: "white",
        text: "Store Locator",
        left: "30",
<<<<<<< HEAD
        id: "__alloyId47"
    });
    $.__views.__alloyId46.add($.__views.__alloyId47);
    $.__views.__alloyId48 = Ti.UI.createTableViewRow({
        height: "50",
        id: "__alloyId48"
    });
    __alloyId35.push($.__views.__alloyId48);
    $.__views.__alloyId49 = Ti.UI.createLabel({
=======
<<<<<<< HEAD
        id: "__alloyId31"
    });
    $.__views.__alloyId30.add($.__views.__alloyId31);
    $.__views.__alloyId32 = Ti.UI.createTableViewRow({
        height: "50",
        id: "__alloyId32"
    });
    __alloyId19.push($.__views.__alloyId32);
    $.__views.__alloyId33 = Ti.UI.createLabel({
=======
        id: "__alloyId100"
    });
    $.__views.__alloyId99.add($.__views.__alloyId100);
    $.__views.__alloyId101 = Ti.UI.createTableViewRow({
        height: "50",
        id: "__alloyId101"
    });
    __alloyId88.push($.__views.__alloyId101);
    $.__views.__alloyId102 = Ti.UI.createLabel({
>>>>>>> FETCH_HEAD
>>>>>>> FETCH_HEAD
        width: Ti.UI.FILL,
        height: Ti.UI.SIZE,
        color: "white",
        text: "About Us",
        left: "30",
<<<<<<< HEAD
        id: "__alloyId49"
    });
    $.__views.__alloyId48.add($.__views.__alloyId49);
    $.__views.menuTable = Ti.UI.createTableView({
        data: __alloyId35,
=======
<<<<<<< HEAD
        id: "__alloyId33"
    });
    $.__views.__alloyId32.add($.__views.__alloyId33);
    $.__views.menuTable = Ti.UI.createTableView({
        data: __alloyId19,
=======
        id: "__alloyId102"
    });
    $.__views.__alloyId101.add($.__views.__alloyId102);
    $.__views.menuTable = Ti.UI.createTableView({
        data: __alloyId88,
>>>>>>> FETCH_HEAD
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
    $.__views.menu = Ti.UI.createView({
        layout: "vertical",
        id: "menu"
    });
    $.__views.centerWindow.add($.__views.menu);
<<<<<<< HEAD
    $.__views.__alloyId50 = Ti.UI.createView({
        layout: "horizontal",
        height: "80",
        id: "__alloyId50"
    });
    $.__views.menu.add($.__views.__alloyId50);
    $.__views.__alloyId51 = Alloy.createController("toggle", {
        id: "__alloyId51",
        __parentSymbol: $.__views.__alloyId50
    });
    $.__views.__alloyId51.setParent($.__views.__alloyId50);
    $.__views.__alloyId52 = Ti.UI.createLabel({
        width: "75%",
        height: Ti.UI.SIZE,
        color: "black",
        font: {
            fontSize: 28
        },
        text: "Index",
        textAlign: Ti.UI.TEXT_ALIGNMENT_CENTER,
        id: "__alloyId52"
    });
    $.__views.__alloyId50.add($.__views.__alloyId52);
    $.__views.__alloyId53 = Ti.UI.createLabel({
=======
<<<<<<< HEAD
    $.__views.__alloyId34 = Alloy.createController("toggle", {
        id: "__alloyId34",
        __parentSymbol: $.__views.menu
    });
    $.__views.__alloyId34.setParent($.__views.menu);
    $.__views.__alloyId35 = Ti.UI.createLabel({
=======
    $.__views.__alloyId103 = Alloy.createController("toggle", {
        id: "__alloyId103",
        __parentSymbol: $.__views.menu
    });
    $.__views.__alloyId103.setParent($.__views.menu);
    $.__views.__alloyId104 = Ti.UI.createLabel({
>>>>>>> FETCH_HEAD
>>>>>>> FETCH_HEAD
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        color: "#000",
        text: "I am center",
<<<<<<< HEAD
        id: "__alloyId53"
    });
    $.__views.centerWindow.add($.__views.__alloyId53);
=======
<<<<<<< HEAD
        id: "__alloyId35"
    });
    $.__views.centerWindow.add($.__views.__alloyId35);
=======
        id: "__alloyId104"
    });
    $.__views.centerWindow.add($.__views.__alloyId104);
>>>>>>> FETCH_HEAD
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
    var module = require("dk.napp.drawer");
    Alloy.Globals.Drawer.setOpenDrawerGestureMode(module.OPEN_MODE_NONE);
    __defers["$.__views.menuTable!click!doMenuClick"] && $.__views.menuTable.addEventListener("click", doMenuClick);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;