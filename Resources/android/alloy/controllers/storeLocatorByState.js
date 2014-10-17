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
            backgroundColor: "#FFFFFF",
            overScrollMode: Titanium.UI.Android.OVER_SCROLL_NEVER
        });
        for (var i = 0; i < details.length; i++) {
            var row = Titanium.UI.createTableViewRow({
                layout: "vertical",
                touchEnabled: false,
                selectedBackgroundColor: "transparent",
                id: details[i].id,
                backgroundColor: "#FFFFFF"
            });
            var outlet_name = $.UI.create("Label", {
                text: details[i].outlet,
                id: details[i].id,
                color: "black",
                font: {
                    fontSize: 24
                },
                width: "auto",
                textAlign: "left",
                left: 20,
                bottom: 10
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
                text: "E-mail: -",
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
                text: "Website: -",
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
            rightForwardBtn.addEventListener("click", function() {
                NavigateTo("3.160146", "101.615076", "Menara UAC", "12, Jalan PJU 7/5 Mutiara Damansara 47820 Petaling Jaya, Selangor");
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
            infoView.add(fax);
            infoView.add(email);
            infoView.add(website);
            infoViewContainer.add(infoView);
            infoViewContainer.add(rightForwardBtn);
            row.add(infoViewContainer);
            data.push(row);
        }
        TheTable.setData(data);
        $.tableContainer.add(TheTable);
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
    $.__views.__alloyId64 = Ti.UI.createView({
        layout: "horizontal",
        height: "80",
        id: "__alloyId64"
    });
    $.__views.storeLocatorByState.add($.__views.__alloyId64);
    $.__views.__alloyId65 = Alloy.createController("toggle", {
        id: "__alloyId65",
        __parentSymbol: $.__views.__alloyId64
    });
    $.__views.__alloyId65.setParent($.__views.__alloyId64);
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
    $.__views.__alloyId64.add($.__views.stateName);
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