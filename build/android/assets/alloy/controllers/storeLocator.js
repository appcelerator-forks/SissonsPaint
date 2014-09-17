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
                height: 50,
                id: details[i].state,
                backgroundSelectedColor: "#FFE1E1",
                backgroundColor: "#ECF6CE"
            });
            var category_name = $.UI.create("Label", {
                text: details[i].state,
                id: details[i].state,
                color: "#848484",
                width: "auto",
                textAlign: "left",
                left: 20
            });
            var rightForwardBtn = Titanium.UI.createImageView({
                image: "/images/btn-forward.png",
                id: details[i].state,
                width: 15,
                height: 15,
                right: 20,
                top: 20
            });
            row.add(category_name);
            row.add(rightForwardBtn);
            data.push(row);
        }
        TheTable.setData(data);
        addClickEvent(TheTable);
        $.table2Container.add(TheTable);
    }
    function addClickEvent(table) {
        table.addEventListener("click", function(e) {
            var nav = Alloy.createController("storeLocatorByState", {
                state: e.source.id
            }).getView();
            nav.open();
        });
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "storeLocator";
    if (arguments[0]) {
        __processArg(arguments[0], "__parentSymbol");
        __processArg(arguments[0], "$model");
        __processArg(arguments[0], "__itemTemplate");
    }
    var $ = this;
    var exports = {};
    $.__views.storeLocator = Ti.UI.createWindow({
        id: "storeLocator"
    });
    $.__views.storeLocator && $.addTopLevelView($.__views.storeLocator);
    $.__views.table2Container = Ti.UI.createView({
        id: "table2Container",
        height: "auto"
    });
    $.__views.storeLocator.add($.__views.table2Container);
    exports.destroy = function() {};
    _.extend($, $.__views);
    arguments[0] || {};
    var library = Alloy.createCollection("storeLocator");
    var details = library.getStoreStateList();
    generateStoreTable(details);
    $.storeLocator.addEventListener("close", function() {
        $.storeLocator.close();
    });
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;