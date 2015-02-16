function __processArg(obj, key) {
    var arg = null;
    if (obj) {
        arg = obj[key] || null;
        delete obj[key];
    }
    return arg;
}

function Controller() {
    function generateTable() {
        $.TheScrollView.opacity = "1";
        var totalDetails = details.length;
        for (var i = 0; totalDetails > i; i++) if ("" != details[i]) {
            var separator = Titanium.UI.createImageView({
                width: Titanium.UI.FILL,
                height: 30,
                touchEnabled: false,
                image: "/images/scroll_up.png"
            });
            "1" == firstRecords ? firstRecords = "0" : $.TheScrollView.add(separator);
            separator = null;
            var cateView = Titanium.UI.createView({
                width: "100%",
                layout: "horizontal",
                height: Ti.UI.SIZE
            });
            var categoryHeader = Titanium.UI.createImageView({
                width: "85%",
                height: Ti.UI.SIZE,
                left: 15,
                top: 5,
                image: details[i]["image"]
            });
            var arrowLink = Titanium.UI.createImageView({
                width: "5%",
                height: Ti.UI.SIZE,
                top: 35,
                image: "/images/btn-forward.png"
            });
            cateView.add(categoryHeader);
            cateView.add(arrowLink);
            createCateEvent(categoryHeader, details[i]["id"]);
            $.TheScrollView.add(cateView);
        } else totalDetails--;
        details = null;
        $.activityIndicator.hide();
        $.loadingBar.opacity = "0";
        $.loadingBar.height = "0";
    }
    function createCateEvent(subView, cate_id) {
        subView.addEventListener("click", function() {
            var nav = Alloy.createController("categoryDetails", {
                cate_id: cate_id
            }).getView();
            Alloy.Globals.Drawer.setCenterWindow(nav);
        });
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "colourSwatches";
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
    $.__views.mainViewContainer = Ti.UI.createView({
        backgroundColor: "white",
        id: "mainViewContainer"
    });
    $.__views.mainViewContainer && $.addTopLevelView($.__views.mainViewContainer);
    $.__views.__alloyId44 = Ti.UI.createView({
        layout: "vertical",
        id: "__alloyId44"
    });
    $.__views.mainViewContainer.add($.__views.__alloyId44);
    $.__views.__alloyId45 = Ti.UI.createView({
        layout: "horizontal",
        height: "80",
        backgroundImage: "/images/banner_colour_swatches.jpg",
        id: "__alloyId45"
    });
    $.__views.__alloyId44.add($.__views.__alloyId45);
    $.__views.__alloyId46 = Alloy.createController("toggle", {
        id: "__alloyId46",
        __parentSymbol: $.__views.__alloyId45
    });
    $.__views.__alloyId46.setParent($.__views.__alloyId45);
    $.__views.TheScrollView = Ti.UI.createScrollView({
        id: "TheScrollView",
        backgroundColor: "white",
        width: "100%",
        layout: "vertical",
        contentHeight: Ti.UI.SIZE,
        height: "80%",
        top: "0",
        overScrollMode: Titanium.UI.Android.OVER_SCROLL_NEVER
    });
    $.__views.__alloyId44.add($.__views.TheScrollView);
    $.__views.__alloyId47 = Ti.UI.createView({
        width: "100%",
        height: "80",
        backgroundColor: "#A5A5A5",
        bottom: "0",
        id: "__alloyId47"
    });
    $.__views.__alloyId44.add($.__views.__alloyId47);
    $.__views.__alloyId48 = Ti.UI.createView({
        layout: "horizontal",
        id: "__alloyId48"
    });
    $.__views.__alloyId47.add($.__views.__alloyId48);
    $.__views.textField = Ti.UI.createTextField({
        id: "textField",
        borderStyle: Ti.UI.INPUT_BORDERSTYLE_ROUNDED,
        hintText: "Search Colour, Name or Colour Code",
        backgroundColor: "white",
        borderColor: "A5A5A5",
        borderRadius: "5",
        color: "#336699",
        width: "70%",
        height: "60",
        left: "10",
        top: "10"
    });
    $.__views.__alloyId48.add($.__views.textField);
    $.__views.__alloyId49 = Ti.UI.createButton({
        backgroundColor: "white",
        color: "#A5A5A5",
        textAlign: Titanium.UI.TEXT_ALIGNMENT_CENTER,
        title: "SEARCH",
        borderColor: "#A5A5A5",
        borderRadius: "5",
        left: "5",
        top: "10",
        height: "60",
        id: "__alloyId49"
    });
    $.__views.__alloyId48.add($.__views.__alloyId49);
    searchButton ? $.__views.__alloyId49.addEventListener("click", searchButton) : __defers["$.__views.__alloyId49!click!searchButton"] = true;
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
    $.__views.mainViewContainer.add($.__views.loadingBar);
    $.__views.activityIndicator = Ti.UI.createActivityIndicator({
        style: Ti.UI.ActivityIndicatorStyle.BIG,
        top: 15,
        left: 30,
        width: 60,
        id: "activityIndicator"
    });
    $.__views.loadingBar.add($.__views.activityIndicator);
    $.__views.__alloyId50 = Ti.UI.createLabel({
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        color: "#ffffff",
        text: "Loading",
        id: "__alloyId50"
    });
    $.__views.loadingBar.add($.__views.__alloyId50);
    $.__views.win = Ti.UI.createView({
        id: "win",
        height: "90%",
        width: "90%",
        backgroundColor: "transparent",
        theme: "Theme.NoActionBar",
        navBarHidden: "true",
        fullscreen: "true",
        borderColor: "#A5A5A5",
        borderWidth: "2",
        visible: "false"
    });
    $.__views.mainViewContainer.add($.__views.win);
    var __alloyId51 = [];
    $.__views.view1 = Ti.UI.createView({
        id: "view1",
        backgroundColor: "#FFFFFF"
    });
    __alloyId51.push($.__views.view1);
    $.__views.__alloyId52 = Ti.UI.createImageView({
        image: "/images/tutorial/colorSwatches/tutorial1.jpg",
        width: "100%",
        id: "__alloyId52"
    });
    $.__views.view1.add($.__views.__alloyId52);
    $.__views.view2 = Ti.UI.createView({
        id: "view2",
        backgroundColor: "#FFFFFF"
    });
    __alloyId51.push($.__views.view2);
    $.__views.__alloyId53 = Ti.UI.createImageView({
        image: "/images/tutorial/colorSwatches/tutorial2.jpg",
        width: "100%",
        id: "__alloyId53"
    });
    $.__views.view2.add($.__views.__alloyId53);
    $.__views.view3 = Ti.UI.createView({
        id: "view3",
        backgroundColor: "#FFFFFF"
    });
    __alloyId51.push($.__views.view3);
    $.__views.__alloyId54 = Ti.UI.createImageView({
        image: "/images/tutorial/colorSwatches/tutorial3.jpg",
        width: "100%",
        id: "__alloyId54"
    });
    $.__views.view3.add($.__views.__alloyId54);
    $.__views.view4 = Ti.UI.createView({
        id: "view4",
        backgroundColor: "#FFFFFF"
    });
    __alloyId51.push($.__views.view4);
    $.__views.__alloyId55 = Ti.UI.createImageView({
        image: "/images/tutorial/colorSwatches/tutorial4.jpg",
        width: "100%",
        id: "__alloyId55"
    });
    $.__views.view4.add($.__views.__alloyId55);
    $.__views.__alloyId56 = Ti.UI.createView({
        layout: "horizontal",
        bottom: "4",
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        id: "__alloyId56"
    });
    $.__views.view4.add($.__views.__alloyId56);
    $.__views.checkBox = Ti.UI.createSwitch({
        value: true,
        id: "checkBox",
        style: Ti.UI.Android.SWITCH_STYLE_CHECKBOX
    });
    $.__views.__alloyId56.add($.__views.checkBox);
    $.__views.showWindow = Ti.UI.createLabel({
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        color: "black",
        text: "Don't show next time",
        left: "10",
        id: "showWindow"
    });
    $.__views.__alloyId56.add($.__views.showWindow);
    $.__views.scrollableView = Ti.UI.createScrollableView({
        views: __alloyId51,
        id: "scrollableView",
        showPagingControl: "true",
        pagingControlTimeout: "0",
        overScrollMode: Titanium.UI.Android.OVER_SCROLL_NEVER
    });
    $.__views.win.add($.__views.scrollableView);
    exports.destroy = function() {};
    _.extend($, $.__views);
    arguments[0] || {};
    var library = Alloy.createCollection("category");
    Alloy.createCollection("category_colour");
    Alloy.createCollection("colour");
    Alloy.createCollection("type");
    var from = 0;
    var firstRecords = "1";
    var details = library.getCategoryListByType("2", from);
    $.TheScrollView.height = PixelsToDPUnits(Ti.Platform.displayCaps.platformHeight) - 160;
    Ti.App.Properties.setString("currentCategory", "All");
    $.activityIndicator.show();
    $.loadingBar.opacity = "1";
    $.loadingBar.height = "120";
    $.loadingBar.top = PixelsToDPUnits(Ti.Platform.displayCaps.platformHeight) / 2 - $.loadingBar.getHeight() / 2;
    setTimeout(function() {
        generateTable();
    }, 1e3);
    Ti.Platform.displayCaps.platformHeight;
    var removeIcon = Ti.UI.createImageView({
        image: "/images/icon_remove.png",
        width: 30,
        height: 30,
        top: 0,
        right: 0
    });
    $.view4.add(removeIcon);
    var searchButton = function() {
        $.activityIndicator.show();
        $.loadingBar.opacity = "1";
        $.loadingBar.height = "120";
        $.loadingBar.top = PixelsToDPUnits(Ti.Platform.displayCaps.platformHeight) / 2 - $.loadingBar.getHeight() / 2;
        Ti.UI.Android.hideSoftKeyboard();
        if (0 != $.textField.value.length) {
            Ti.App.Properties.setString("query", $.textField.value);
            var nav = Alloy.createController("search").getView();
            Alloy.Globals.Drawer.setCenterWindow(nav);
        }
    };
    removeIcon.addEventListener("click", function() {
        $.win.hide();
        removeIcon = null;
        1 == $.checkBox.value && Ti.App.Properties.setString("swatchesCheckBox", 1);
    });
    __defers["$.__views.__alloyId49!click!searchButton"] && $.__views.__alloyId49.addEventListener("click", searchButton);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;