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
        var totalDetails = details.length;
        for (var i = 0; totalDetails > i; i++) if ("" != details[i]) {
            var separator = Titanium.UI.createImageView({
                width: Titanium.UI.FILL,
                height: 30,
                touchEnabled: false,
                image: "/images/scroll_up.png"
            });
            "1" == firstRecords ? firstRecords = "0" : $.TheScrollView.add(separator);
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
                    width: "25%",
                    top: 3,
                    height: Ti.UI.SIZE
                });
                var colour_details = colour_lib.getColourById(colour.colour_id);
                if ("" != colour_details.sample) var subViewColor = $.UI.create("ImageView", {
                    image: colour_details.sample,
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
                colourView.add(subView);
                counter++;
            });
            $.TheScrollView.add(colourView);
        } else totalDetails--;
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
    $.__views.__alloyId48 = Ti.UI.createView({
        layout: "vertical",
        id: "__alloyId48"
    });
    $.__views.mainViewContainer.add($.__views.__alloyId48);
    $.__views.__alloyId49 = Ti.UI.createView({
        layout: "horizontal",
        height: "80",
        id: "__alloyId49"
    });
    $.__views.__alloyId48.add($.__views.__alloyId49);
    $.__views.__alloyId50 = Alloy.createController("toggle", {
        id: "__alloyId50",
        __parentSymbol: $.__views.__alloyId49
    });
    $.__views.__alloyId50.setParent($.__views.__alloyId49);
    $.__views.titleLabel = Ti.UI.createLabel({
        width: "75%",
        height: Ti.UI.SIZE,
        color: "black",
        font: {
            fontSize: "22"
        },
        text: "Colour Swatches",
        id: "titleLabel",
        textAlign: Ti.UI.TEXT_ALIGNMENT_CENTER
    });
    $.__views.__alloyId49.add($.__views.titleLabel);
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
    $.__views.__alloyId48.add($.__views.TheScrollView);
    $.__views.toolbar = Ti.UI.createView({
        height: "60",
        bottom: "0",
        id: "toolbar",
        width: "100%",
        backgroundImage: "/images/tool_bar.jpg"
    });
    $.__views.__alloyId48.add($.__views.toolbar);
    $.__views.__alloyId51 = Ti.UI.createView({
        layout: "horizontal",
        width: "100%",
        id: "__alloyId51"
    });
    $.__views.toolbar.add($.__views.__alloyId51);
    $.__views.__alloyId52 = Ti.UI.createView({
        width: "30%",
        id: "__alloyId52"
    });
    $.__views.__alloyId51.add($.__views.__alloyId52);
    $.__views.__alloyId53 = Ti.UI.createView({
        width: "20%",
        id: "__alloyId53"
    });
    $.__views.__alloyId51.add($.__views.__alloyId53);
    $.__views.filterButton = Ti.UI.createImageView({
        id: "filterButton",
        image: "/images/icon_filter.png",
        height: "40",
        width: "50",
        top: "10",
        bottom: "10"
    });
    $.__views.__alloyId53.add($.__views.filterButton);
    filter ? $.__views.filterButton.addEventListener("click", filter) : __defers["$.__views.filterButton!click!filter"] = true;
    $.__views.__alloyId54 = Ti.UI.createView({
        width: "20%",
        id: "__alloyId54"
    });
    $.__views.__alloyId51.add($.__views.__alloyId54);
    $.__views.searchButton = Ti.UI.createImageView({
        id: "searchButton",
        image: "/images/icon_search.png",
        height: "40",
        width: "50",
        top: "10",
        bottom: "10"
    });
    $.__views.__alloyId54.add($.__views.searchButton);
    search ? $.__views.searchButton.addEventListener("click", search) : __defers["$.__views.searchButton!click!search"] = true;
    $.__views.__alloyId55 = Ti.UI.createView({
        width: "30%",
        id: "__alloyId55"
    });
    $.__views.__alloyId51.add($.__views.__alloyId55);
    exports.destroy = function() {};
    _.extend($, $.__views);
    arguments[0] || {};
    var library = Alloy.createCollection("category");
    var category_colour_lib = Alloy.createCollection("category_colour");
    var colour_lib = Alloy.createCollection("colour");
    var from = 0;
    var firstRecords = "1";
    var details = library.getCategoryListByType("2", from);
    Ti.Platform.displayCaps.platformHeight;
    var category_type_lib = Alloy.createCollection("category_type");
    var category_tag = category_type_lib.selectTypeByDistinct();
    var searchFlag = 0;
    var filterFlag = 0;
    var searchView = Titanium.UI.createView({
        layout: "composite",
        width: "100%",
        height: 80,
        bottom: 60,
        backgroundColor: "#A5A5A5"
    });
    var tableData = [];
    var row1 = Ti.UI.createTableViewRow({
        title: "All",
        width: 150,
        left: 10,
        touchEnabled: true,
        height: 60
    });
    tableData.push(row1);
    category_tag.forEach(function(tags) {
        var row_tag = Ti.UI.createTableViewRow({
            title: tags.tag,
            width: 150,
            left: 10,
            touchEnabled: true,
            height: 60
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
    generateTable();
    $.TheScrollView.height = PixelsToDPUnits(Ti.Platform.displayCaps.platformHeight) - 140;
    var tableListener = function(e) {
        filterFlag = 0;
        $.mainViewContainer.remove(table);
        removeAllChildren($.TheScrollView);
        if (0 == e.index) {
            details = library.getCategoryListByType("2", 3);
            generateTable();
        } else {
            var result = category_type_lib.getCategoryTypeByTag(e.rowData.title);
            var data = [];
            details = [];
            result.forEach(function(tags) {
                data = library.getCategoryById(tags.cate_id, "2");
                "" != data && details.push(data);
            });
            generateTable();
        }
    };
    var filter = function() {
        closeWindow();
        $.mainViewContainer.remove(searchView);
        searchFlag = 0;
        if (1 == filterFlag) {
            filterFlag = 0;
            $.mainViewContainer.remove(table);
        } else {
            filterFlag = 1;
            $.mainViewContainer.add(table);
            table.addEventListener("click", tableListener);
        }
    };
    var closeWindow = function() {
        table.removeEventListener("click", tableListener);
    };
    var search = function() {
        $.mainViewContainer.remove(table);
        filterFlag = 0;
        if (1 == searchFlag) {
            searchFlag = 0;
            $.mainViewContainer.remove(searchView);
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
            $.mainViewContainer.add(searchView);
            searchButton.addEventListener("click", function() {
                searchFlag = 0;
                Ti.UI.Android.hideSoftKeyboard();
                if (0 != textField.value.length) {
                    Ti.App.Properties.setString("query", textField.value);
                    var nav = Alloy.createController("search").getView();
                    Alloy.Globals.Drawer.setCenterWindow(nav);
                }
                $.mainViewContainer.remove(searchView);
            });
        }
<<<<<<< HEAD
    });
    var minHeight = 2997;
    Ti.App.Properties.setString("swatchMinHeight", minHeight);
    $.TheScrollView.addEventListener("scroll", function(e) {
        var swatchMinHeight = Ti.App.Properties.getString("swatchMinHeight");
        if (e.y >= swatchMinHeight) {
            swatchMinHeight = parseInt(swatchMinHeight) + parseInt(minHeight);
            console.log(e.y + "= " + swatchMinHeight);
            Ti.App.Properties.setString("swatchMinHeight", swatchMinHeight);
            from += 3;
            console.log(e.y + " <> " + swatchMinHeight);
            console.log(" from : " + from);
            details = library.getCategoryListByType("2", from);
            generateTable();
        }
    });
=======
    };
    __defers["$.__views.filterButton!click!filter"] && $.__views.filterButton.addEventListener("click", filter);
    __defers["$.__views.searchButton!click!search"] && $.__views.searchButton.addEventListener("click", search);
>>>>>>> FETCH_HEAD
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;