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
            separatorColor: "#ffffff",
            backgroundColor: "#FFFFFF"
        });
        for (var i = 0; i < details.length; i++) {
            var row = Titanium.UI.createTableViewRow({
                layout: "vertical",
                touchEnabled: true,
                id: details[i].id,
                backgroundColor: "#FFFFFF"
            });
            var outlet_name = $.UI.create("Label", {
                text: details[i].outlet,
                id: details[i].id,
                color: "#848484",
                font: {
                    fontSize: 18
                },
                width: "auto",
                textAlign: "left",
                left: 20
            });
            if ("" != details[i].address) var location = Titanium.UI.createLabel({
                text: details[i].address,
                id: details[i].id,
                font: {
                    fontSize: 12
                },
                width: "auto",
                color: "#848484",
                textAlign: "left",
                left: 20
            });
            var infoViewContainer = Titanium.UI.createView({
                layout: "horizontal",
                height: 80,
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
                font: {
                    fontSize: 12
                },
                width: "auto",
                color: "#848484",
                textAlign: "left",
                left: 20
            });
            "" == details[i].fax && (details[i].fax = "-");
            var fax = Titanium.UI.createLabel({
                text: "FAX: " + details[i].fax,
                id: details[i].id,
                font: {
                    fontSize: 12
                },
                width: "auto",
                color: "#848484",
                textAlign: "left",
                left: 20
            });
            ("" == details[i].email || null == details[i].email) && (details[i].email = "-");
            var email = Titanium.UI.createLabel({
                text: "E-mail: " + details[i].email,
                id: details[i].id,
                font: {
                    fontSize: 12
                },
                width: "auto",
                color: "#848484",
                textAlign: "left",
                left: 20
            });
            ("" == details[i].website || null == details[i].website) && (details[i].website = "-");
            var website = Titanium.UI.createLabel({
                text: "Website: " + details[i].website,
                id: details[i].id,
                font: {
                    fontSize: 12
                },
                width: "auto",
                color: "#848484",
                textAlign: "left",
                left: 20
            });
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
                    font: {
                        fontSize: 12
                    },
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
                right: 20
            });
            var separator = Titanium.UI.createImageView({
                width: Titanium.UI.FILL,
                height: 30,
                bottom: -1,
                touchEnabled: false,
                image: "/images/scroll_up.png"
            });
            row.add(outlet_name);
            "" != details[i].address && row.add(location);
            infoView.add(mobile);
            infoView.add(fax);
            infoView.add(email);
            infoView.add(website);
            infoViewContainer.add(infoView);
            infoViewContainer.add(rightForwardBtn);
            row.add(infoViewContainer);
            i < details.length - 1 && row.add(separator);
            data.push(row);
        }
        TheTable.setData(data);
        addClickEvent(TheTable);
        $.tableContainer.add(TheTable);
    }
    function addClickEvent(table) {
        table.addEventListener("click", function() {
            NavigateTo("3.100118", "101.686962");
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
    $.__views.__alloyId73 = Ti.UI.createView({
        layout: "horizontal",
        height: "80",
        id: "__alloyId73"
    });
    $.__views.storeLocatorByState.add($.__views.__alloyId73);
    $.__views.__alloyId74 = Alloy.createController("toggle", {
        id: "__alloyId74",
        __parentSymbol: $.__views.__alloyId73
    });
    $.__views.__alloyId74.setParent($.__views.__alloyId73);
    $.__views.stateName = Ti.UI.createLabel({
        width: "75%",
        height: Ti.UI.SIZE,
        color: "black",
        font: {
            fontSize: 28
        },
        id: "stateName",
        textAlign: Ti.UI.TEXT_ALIGNMENT_CENTER
    });
    $.__views.__alloyId73.add($.__views.stateName);
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
    var library = Alloy.createCollection("storeLocator");
    var details = library.getStoreByState(state);
    console.log(details);
    generateStoreTable(details);
    $.stateName.text = state;
    NavigateTo = function(latitude, longitude) {
        var url = "waze://?ll=" + latitude + "," + longitude + "&navigate=yes";
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