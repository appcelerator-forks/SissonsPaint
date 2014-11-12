function __processArg(obj, key) {
    var arg = null;
    if (obj) {
        arg = obj[key] || null;
        delete obj[key];
    }
    return arg;
}

function Controller() {
    function generateStoreTable(details) {
        var data = [];
        var TheTable = Titanium.UI.createTableView({
            width: "100%",
            height: PixelsToDPUnits(Ti.Platform.displayCaps.platformHeight) - 160,
            separatorColor: "#ffffff",
            backgroundColor: "#FFFFFF",
            top: 0,
            overScrollMode: Titanium.UI.Android.OVER_SCROLL_NEVER
        });
        for (var i = 0; i < details.length; i++) {
            var row = Titanium.UI.createTableViewRow({
                layout: "vertical",
                touchEnabled: false,
                backgroundSelectedColor: "transparent",
                id: details[i].id,
                backgroundColor: "#FFFFFF"
            });
            var outlet_name = $.UI.create("Label", {
                text: details[i].outlet,
                id: details[i].id,
                color: "black",
                font: {
                    fontSize: 22
                },
                width: "auto",
                textAlign: "left",
                left: 20,
                bottom: 10
            });
            if ("" != details[i].address) var location = Titanium.UI.createLabel({
                text: details[i].address,
                id: details[i].id,
                width: "auto",
                color: "#848484",
                textAlign: "left",
                left: 20,
                bottom: 10
            });
            var infoViewContainer = Titanium.UI.createView({
                layout: "horizontal",
                width: "100%"
            });
            var infoView = Titanium.UI.createView({
                layout: "vertical",
                width: "80%"
            });
            "" == details[i].mobile && (details[i].mobile = "-");
            var mobile = Titanium.UI.createLabel({
                text: "TEL: " + details[i].mobile,
                id: details[i].id,
                width: "auto",
                color: "#848484",
                textAlign: "left",
                left: 20
            });
            if ("" == details[i].fax || null == details[i].fax) ; else var fax = Titanium.UI.createLabel({
                text: "FAX: " + details[i].fax,
                id: details[i].id,
                width: "auto",
                color: "#848484",
                textAlign: "left",
                left: 20
            });
            if ("" == details[i].email || null == details[i].email) ; else {
                console.log("email" + details[i].email);
                console.log("email length" + details[i].email.length);
                var email = Titanium.UI.createLabel({
                    text: "E-mail: " + details[i].email,
                    id: details[i].id,
                    width: "auto",
                    color: "#848484",
                    textAlign: "left",
                    left: 20
                });
            }
            switch (details[i].category) {
              case 1:
                var categoryName = "Branches";
                break;

              case 2:
                var categoryName = "Stockists";
                break;

              case 3:
                var categoryName = "Dealers";
            }
            {
                Titanium.UI.createLabel({
                    text: categoryName,
                    id: details[i].id,
                    width: "auto",
                    color: "#848484",
                    textAlign: "left",
                    left: 20
                });
            }
            var rightForwardBtn = Titanium.UI.createImageView({
                image: "/images/icon_store.png",
                width: 40,
                height: 40,
                right: 20,
                zIndex: i
            });
            rightForwardBtn.addEventListener("click", function(e) {
                "" == details[e.source.zIndex].latitude || "" == details[e.source.zIndex].longitude ? NavigateTo(0, 0, details[e.source.zIndex].outlet, details[e.source.zIndex].address) : NavigateTo(details[e.source.zIndex].latitude, details[e.source.zIndex].longitude, details[e.source.zIndex].outlet, details[e.source.zIndex].address);
            });
            var separator = Titanium.UI.createImageView({
                width: Titanium.UI.FILL,
                height: 30,
                touchEnabled: false,
                image: "/images/scroll_up.png"
            });
            i > 0 && row.add(separator);
            row.add(outlet_name);
            "" != details[i].address && infoView.add(location);
            infoView.add(mobile);
            "" == details[i].fax || null == details[i].fax || infoView.add(fax);
            "" == details[i].email || null == details[i].email || infoView.add(email);
            infoViewContainer.add(infoView);
            infoViewContainer.add(rightForwardBtn);
            row.add(infoViewContainer);
            data.push(row);
        }
        var searchView = Titanium.UI.createView({
            layout: "composite",
            width: "100%",
            height: 80,
            bottom: 0,
            backgroundColor: "#A5A5A5"
        });
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
            hintText: "Enter Search Query",
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
        TheTable.setData(data);
        $.tableContainer.add(TheTable);
        searchWrapper.add(textField);
        searchWrapper.add(searchButton);
        searchView.add(searchWrapper);
        $.tableContainer.add(searchView);
        searchButton.addEventListener("click", function() {
            Ti.UI.Android.hideSoftKeyboard();
            if (0 == textField.value.length) {
                details = library.getStoreByState(state);
                generateStoreTable(details);
            } else {
                details = library.getStoreByName(state, textField.value);
                generateStoreTable(details);
            }
        });
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "storeLocatorByState";
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
    $.__views.storeLocatorByState = Ti.UI.createView({
        layout: "vertical",
        backgroundColor: "white",
        id: "storeLocatorByState"
    });
    $.__views.storeLocatorByState && $.addTopLevelView($.__views.storeLocatorByState);
    $.__views.__alloyId107 = Ti.UI.createView({
        layout: "horizontal",
        height: "80",
        id: "__alloyId107"
    });
    $.__views.storeLocatorByState.add($.__views.__alloyId107);
    $.__views.__alloyId108 = Alloy.createController("toggle", {
        id: "__alloyId108",
        __parentSymbol: $.__views.__alloyId107
    });
    $.__views.__alloyId108.setParent($.__views.__alloyId107);
    $.__views.stateName = Ti.UI.createLabel({
        width: "75%",
        height: Ti.UI.SIZE,
        color: "black",
        font: {
            fontSize: 22
        },
        id: "stateName",
        textAlign: Ti.UI.TEXT_ALIGNMENT_CENTER
    });
    $.__views.__alloyId107.add($.__views.stateName);
    $.__views.tableContainer = Ti.UI.createView({
        backgroundColor: "white",
        id: "tableContainer",
        height: "auto"
    });
    $.__views.storeLocatorByState.add($.__views.tableContainer);
    exports.destroy = function() {};
    _.extend($, $.__views);
    var args = arguments[0] || {};
    var state = args.state;
    Ti.App.Properties.setString("module", "storeLocator");
    var library = Alloy.createCollection("storeLocator");
    var details = library.getStoreByState(state);
    generateStoreTable(details);
    $.stateName.text = state;
    NavigateTo = function(latitude, longitude, name, address) {
        var url = "geo:" + latitude + "," + longitude + "?q=" + name + " (" + address + ")";
        if (Ti.Android) try {
            Ti.API.info("Trying to Launch via Intent");
            var intent = Ti.Android.createIntent({
                action: Ti.Android.ACTION_VIEW,
                data: url
            });
            Ti.Android.currentActivity.startActivity(intent);
        } catch (e) {
            Ti.API.info("Caught Error launching intent: " + e);
            exports.Install();
        } else Ti.Platform.canOpenURL(url) ? Ti.Platform.openURL(url) : exports.Install();
    };
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;