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
            backgroundColor: "#fffff6"
        });
        for (var i = 0; details.length > i; i++) {
            var row = Titanium.UI.createTableViewRow({
                touchEnabled: true,
                height: 120,
                id: details[i].id,
                backgroundSelectedColor: "#FFE1E1",
                backgroundColor: "#ECF6CE"
            });
            var outlet_name = $.UI.create("Label", {
                text: details[i].outlet,
                id: details[i].id,
                color: "#848484",
                width: "auto",
                textAlign: "left",
                top: 10,
                left: 20
            });
            if ("" != details[i].area) var location = Titanium.UI.createLabel({
                text: details[i].area,
                id: details[i].id,
                font: {
                    fontSize: 12
                },
                width: "auto",
                color: "#848484",
                textAlign: "left",
                top: 30,
                left: 20
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
                top: 50,
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
                top: 70,
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
            var cateType = Titanium.UI.createLabel({
                text: categoryName,
                id: details[i].id,
                font: {
                    fontSize: 12
                },
                width: "auto",
                color: "#848484",
                textAlign: "left",
                top: 90,
                left: 20
            });
            var rightForwardBtn = Titanium.UI.createImageView({
                image: "/images/btn-forward.png",
                width: 15,
                height: 15,
                right: 20,
                top: 20
            });
            row.add(outlet_name);
            "" != details[i].area && row.add(location);
            row.add(mobile);
            row.add(fax);
            row.add(cateType);
            row.add(rightForwardBtn);
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
        __processArg(arguments[0], "__parentSymbol");
        __processArg(arguments[0], "$model");
        __processArg(arguments[0], "__itemTemplate");
    }
    var $ = this;
    var exports = {};
    $.__views.tableContainer = Ti.UI.createView({
        backgroundColor: "white",
        id: "tableContainer",
        height: "auto"
    });
    $.__views.tableContainer && $.addTopLevelView($.__views.tableContainer);
    exports.destroy = function() {};
    _.extend($, $.__views);
    var args = arguments[0] || {};
    var state = args.state;
    var library = Alloy.createCollection("storeLocator");
    var details = library.getStoreByState(state);
    console.log(details);
    generateStoreTable(details);
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