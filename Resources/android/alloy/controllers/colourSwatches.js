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
            var colours = category_colour_lib.getCategoryColourByCategory(details[i]["id"]);
            var categoryHeader = Titanium.UI.createImageView({
                width: "95%",
                height: Ti.UI.SIZE,
                touchEnabled: false,
                top: 15,
                image: details[i]["image"]
            });
            var description = $.UI.create("Label", {
                width: "95%",
                text: details[i].description,
                width: "95%",
                classes: [ "aboutContent" ],
                bottom: 30
            });
            $.TheScrollView.add(categoryHeader);
            $.TheScrollView.add(description);
            categoryHeader = null;
            description = null;
            var colourView = $.UI.create("View", {
                textAlign: Ti.UI.TEXT_ALIGNMENT_CENTER,
                layout: "horizontal",
                width: "95%",
                bottom: 10,
                height: Ti.UI.SIZE
            });
            var counter = 0;
            colours.forEach(function(colour) {
                var subView = $.UI.create("View", {
                    textAlign: Ti.UI.TEXT_ALIGNMENT_RIGHT,
                    layout: "vertical",
                    width: "24.5%",
                    top: 3,
                    height: Ti.UI.SIZE
                });
                var colour_details = colour_lib.getColourById(colour.colour_id);
                if ("" != colour_details.thumb) var subViewColor = $.UI.create("ImageView", {
                    image: colour_details.thumb,
                    borderColor: "#A5A5A5",
                    borderWidth: 1,
                    width: "97%",
                    height: "80"
                }); else var subViewColor = $.UI.create("View", {
                    backgroundColor: "rgb(" + colour_details.rgb + ")",
                    borderColor: "#A5A5A5",
                    borderWidth: 1,
                    width: "97%",
                    height: "80"
                });
                var subLabelName = $.UI.create("Label", {
                    text: colour_details.name,
                    classes: [ "colorDesc" ]
                });
                var subLabelCode = $.UI.create("Label", {
                    text: colour_details.code,
                    classes: [ "colorDesc" ],
                    bottom: 10
                });
                createColorEvent(subView, colour_details, details[i]);
                subView.add(subViewColor);
                subView.add(subLabelName);
                subView.add(subLabelCode);
                colour_details = null;
                subViewColor = null;
                subLabelName = null;
                subLabelCode = null;
                colourView.add(subView);
                subView = null;
                counter++;
            });
            $.TheScrollView.add(colourView);
            colourView = null;
        } else totalDetails--;
        details = null;
        $.activityIndicator.hide();
        $.loadingBar.opacity = "0";
        $.loadingBar.height = "0";
    }
    function createColorEvent(subView, colour_details, details) {
        subView.addEventListener("click", function() {
            var nav = Alloy.createController("colourDetails", {
                colour_details: colour_details,
                details: details
            }).getView();
            nav.open();
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
    $.__views.__alloyId38 = Ti.UI.createView({
        layout: "vertical",
        id: "__alloyId38"
    });
    $.__views.mainViewContainer.add($.__views.__alloyId38);
    $.__views.__alloyId39 = Ti.UI.createView({
        layout: "horizontal",
        height: "80",
        backgroundImage: "/images/banner_colour_swatches.jpg",
        id: "__alloyId39"
    });
    $.__views.__alloyId38.add($.__views.__alloyId39);
    $.__views.__alloyId40 = Alloy.createController("toggle", {
        id: "__alloyId40",
        __parentSymbol: $.__views.__alloyId39
    });
    $.__views.__alloyId40.setParent($.__views.__alloyId39);
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
    $.__views.__alloyId38.add($.__views.TheScrollView);
    $.__views.toolbar = Ti.UI.createView({
        height: "60",
        bottom: "0",
        id: "toolbar",
        width: "100%",
        backgroundImage: "/images/tool_bar.jpg"
    });
    $.__views.__alloyId38.add($.__views.toolbar);
    $.__views.__alloyId41 = Ti.UI.createView({
        layout: "horizontal",
        width: "100%",
        id: "__alloyId41"
    });
    $.__views.toolbar.add($.__views.__alloyId41);
    $.__views.__alloyId42 = Ti.UI.createView({
        width: "30%",
        id: "__alloyId42"
    });
    $.__views.__alloyId41.add($.__views.__alloyId42);
    $.__views.__alloyId43 = Ti.UI.createView({
        width: "20%",
        id: "__alloyId43"
    });
    $.__views.__alloyId41.add($.__views.__alloyId43);
    $.__views.filterButton = Ti.UI.createImageView({
        id: "filterButton",
        image: "/images/icon_filter.png",
        height: "40",
        width: "50",
        top: "10",
        bottom: "10"
    });
    $.__views.__alloyId43.add($.__views.filterButton);
    filter ? $.__views.filterButton.addEventListener("click", filter) : __defers["$.__views.filterButton!click!filter"] = true;
    $.__views.__alloyId44 = Ti.UI.createView({
        width: "20%",
        id: "__alloyId44"
    });
    $.__views.__alloyId41.add($.__views.__alloyId44);
    $.__views.searchButton = Ti.UI.createImageView({
        id: "searchButton",
        image: "/images/icon_search.png",
        height: "40",
        width: "50",
        top: "10",
        bottom: "10"
    });
    $.__views.__alloyId44.add($.__views.searchButton);
    search ? $.__views.searchButton.addEventListener("click", search) : __defers["$.__views.searchButton!click!search"] = true;
    $.__views.__alloyId45 = Ti.UI.createView({
        width: "30%",
        id: "__alloyId45"
    });
    $.__views.__alloyId41.add($.__views.__alloyId45);
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
    $.__views.__alloyId46 = Ti.UI.createLabel({
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        color: "#ffffff",
        text: "Loading",
        id: "__alloyId46"
    });
    $.__views.loadingBar.add($.__views.__alloyId46);
    $.__views.win = Ti.UI.createView({
        id: "win",
        height: "80%",
        width: "80%",
        backgroundColor: "transparent",
        theme: "Theme.NoActionBar",
        navBarHidden: "true",
        fullscreen: "true",
        borderColor: "#A5A5A5",
        borderWidth: "2",
        visible: "false"
    });
    $.__views.mainViewContainer.add($.__views.win);
    var __alloyId47 = [];
    $.__views.view1 = Ti.UI.createView({
        id: "view1",
        backgroundColor: "white"
    });
    __alloyId47.push($.__views.view1);
    $.__views.__alloyId48 = Ti.UI.createLabel({
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        color: "black",
        text: "View 1",
        id: "__alloyId48"
    });
    $.__views.view1.add($.__views.__alloyId48);
    $.__views.view2 = Ti.UI.createView({
        id: "view2",
        backgroundColor: "white"
    });
    __alloyId47.push($.__views.view2);
    $.__views.__alloyId49 = Ti.UI.createLabel({
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        color: "black",
        text: "View 2",
        id: "__alloyId49"
    });
    $.__views.view2.add($.__views.__alloyId49);
    $.__views.view3 = Ti.UI.createView({
        id: "view3",
        backgroundColor: "white"
    });
    __alloyId47.push($.__views.view3);
    $.__views.__alloyId50 = Ti.UI.createLabel({
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        color: "black",
        text: "View 3",
        id: "__alloyId50"
    });
    $.__views.view3.add($.__views.__alloyId50);
    $.__views.__alloyId51 = Ti.UI.createView({
        layout: "horizontal",
        bottom: "10",
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        id: "__alloyId51"
    });
    $.__views.view3.add($.__views.__alloyId51);
    $.__views.checkBox = Ti.UI.createSwitch({
        value: false,
        id: "checkBox",
        style: Ti.UI.Android.SWITCH_STYLE_CHECKBOX
    });
    $.__views.__alloyId51.add($.__views.checkBox);
    $.__views.showWindow = Ti.UI.createLabel({
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        color: "black",
        text: "Don't show next time",
        id: "showWindow"
    });
    $.__views.__alloyId51.add($.__views.showWindow);
    $.__views.scrollableView = Ti.UI.createScrollableView({
        views: __alloyId47,
        id: "scrollableView",
        showPagingControl: "true",
        pagingControlTimeout: "0"
    });
    $.__views.win.add($.__views.scrollableView);
    exports.destroy = function() {};
    _.extend($, $.__views);
    arguments[0] || {};
    var library = Alloy.createCollection("category");
    var category_colour_lib = Alloy.createCollection("category_colour");
    var colour_lib = Alloy.createCollection("colour");
    var type_lib = Alloy.createCollection("type");
    var from = 0;
    var firstRecords = "1";
    var minHeight = 2797;
    var tableData = [];
    var details = library.getCategoryListByType("2", from);
    $.TheScrollView.height = PixelsToDPUnits(Ti.Platform.displayCaps.platformHeight) - 140;
    Ti.App.Properties.setString("currentCategory", "All");
    $.activityIndicator.show();
    $.loadingBar.opacity = "1";
    $.loadingBar.height = "120";
    $.loadingBar.top = PixelsToDPUnits(Ti.Platform.displayCaps.platformHeight) / 2 - $.loadingBar.getHeight() / 2;
    setTimeout(function() {
        generateTable();
    }, 1e3);
    Ti.Platform.displayCaps.platformHeight;
    var category_type_lib = Alloy.createCollection("category_type");
    var category_tag = type_lib.getType();
    var searchFlag = 0;
    var filterFlag = 0;
    var searchView = Titanium.UI.createView({
        layout: "composite",
        width: "100%",
        height: 80,
        bottom: 60,
        backgroundColor: "#A5A5A5"
    });
    searchView.hide();
    $.mainViewContainer.add(searchView);
    var row1 = Ti.UI.createTableViewRow({
        title: "All",
        width: 150,
        left: 10,
        touchEnabled: true,
        top: 5,
        bottom: 10,
        height: 40,
        className: "DataRow"
    });
    tableData.push(row1);
    row1 = null;
    category_tag.forEach(function(tags) {
        var row_tag = Ti.UI.createTableViewRow({
            title: tags.ctype,
            width: 150,
            left: 10,
            touchEnabled: true,
            className: "DataRow",
            height: 40,
            bottom: 5
        });
        tableData.push(row_tag);
    });
    var table = Titanium.UI.createTableView({
        separatorColor: "transparent",
        backgroundImage: "/images/pop_window.png",
        height: Ti.UI.SIZE,
        width: 150,
        bottom: 60,
        zIndex: 999,
        left: "20%",
        data: tableData
    });
    $.mainViewContainer.add(table);
    setTimeout(function() {
        searchView.hide();
        table.hide();
    }, 10);
    var tableListener = function(e) {
        $.activityIndicator.show();
        $.loadingBar.opacity = "1";
        $.loadingBar.height = "120";
        $.loadingBar.top = PixelsToDPUnits(Ti.Platform.displayCaps.platformHeight) / 2 - $.loadingBar.getHeight() / 2;
        $.TheScrollView.opacity = "0";
        filterFlag = 0;
        table.hide();
        removeAllChildren($.TheScrollView);
        setTimeout(function() {
            Ti.App.Properties.setString("swatchMinHeight", 2797);
            Ti.App.Properties.getString("swatchMinHeight");
        }, 1e3);
        if ("All" == e.source.title) {
            details = library.getCategoryListByType("2", 0);
            generateTable();
        } else {
            Ti.App.Properties.setString("currentCategory", e.source.title);
            var result = category_type_lib.getCategoryTypeByTag(e.source.title);
            var data = [];
            details = [];
            result.forEach(function(tags) {
                data = library.getCategoryById(tags.cate_id, "2", 0);
                "" != data && details.push(data);
            });
            generateTable();
        }
        closeWindow();
    };
    var filter = function() {
        closeWindow();
        searchView.hide();
        searchFlag = 0;
        if (1 == filterFlag) {
            filterFlag = 0;
            table.hide();
        } else {
            filterFlag = 1;
            table.show();
            table.addEventListener("click", tableListener);
        }
    };
    var closeWindow = function() {
        table.removeEventListener("click", tableListener);
    };
    var search = function() {
        filterFlag = 0;
        table.hide();
        if (1 == searchFlag) {
            searchFlag = 0;
            searchView.hide();
        } else {
            searchFlag = 1;
            var hintTextLabel = Ti.UI.createLabel({
                text: "Enter Colour, Name or Colour Code",
                color: "#A5A5A5",
                font: {
                    fontSize: 14
                },
                backgroundColor: "transparent"
            });
            var textField = Ti.UI.createTextField({
                borderStyle: Ti.UI.INPUT_BORDERSTYLE_ROUNDED,
                color: "black",
                hintText: "Enter Colour, Name or Colour Code",
                backgroundColor: "white",
                borderColor: "#A5A5A5",
                borderRadius: 5,
                font: hintTextLabel.font,
                left: 10,
                top: 10,
                width: "70%",
                height: 60
            });
            var searchButton = Ti.UI.createButton({
                backgroundColor: "white",
                color: "#A5A5A5",
                textAlign: "Titanium.UI.TEXT_ALIGNMENT_CENTER",
                title: "SEARCH",
                borderColor: "#A5A5A5",
                borderRadius: 5,
                left: 5,
                top: 10,
                height: 60
            });
            var searchWrapper = Titanium.UI.createView({
                layout: "horizontal"
            });
            searchWrapper.add(textField);
            searchWrapper.add(searchButton);
            searchView.add(searchWrapper);
            searchView.show();
            var searchColours = function() {
                searchFlag = 0;
                Ti.UI.Android.hideSoftKeyboard();
                if (0 != textField.value.length) {
                    Ti.App.Properties.setString("query", textField.value);
                    var nav = Alloy.createController("search").getView();
                    Alloy.Globals.Drawer.setCenterWindow(nav);
                }
                $.mainViewContainer.remove(searchView);
                searchButton.removeEventListener("click", searchColours);
            };
            searchButton.addEventListener("click", searchColours);
        }
    };
    Ti.App.Properties.setString("swatchMinHeight", minHeight);
    $.TheScrollView.addEventListener("scroll", function(e) {
        var swatchMinHeight = Ti.App.Properties.getString("swatchMinHeight");
        if (e.y >= swatchMinHeight) {
            swatchMinHeight = parseInt(swatchMinHeight) + parseInt(minHeight);
            Ti.App.Properties.setString("swatchMinHeight", swatchMinHeight);
            from += 3;
            var currentCategory = Ti.App.Properties.getString("currentCategory");
            if ("All" != currentCategory) ; else {
                details = library.getCategoryListByType("2", from);
                generateTable();
            }
        }
    });
    $.win.hide();
    var removeIcon = Ti.UI.createImageView({
        image: "/images/icon_remove.png",
        width: 30,
        height: 30,
        top: 0,
        right: 0
    });
    $.view3.add(removeIcon);
    removeIcon.addEventListener("click", function() {
        $.win.hide();
    });
    __defers["$.__views.filterButton!click!filter"] && $.__views.filterButton.addEventListener("click", filter);
    __defers["$.__views.searchButton!click!search"] && $.__views.searchButton.addEventListener("click", search);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;