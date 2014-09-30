function __processArg(obj, key) {
    var arg = null;
    if (obj) {
        arg = obj[key] || null;
        delete obj[key];
    }
    return arg;
}

function Controller() {
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "home";
    if (arguments[0]) {
        __processArg(arguments[0], "__parentSymbol");
        __processArg(arguments[0], "$model");
        __processArg(arguments[0], "__itemTemplate");
    }
    var $ = this;
    var exports = {};
    var __defers = {};
    $.__views.home = Ti.UI.createView({
        backgroundColor: "white",
        id: "home"
    });
    $.__views.home && $.addTopLevelView($.__views.home);
    $.__views.__alloyId11 = Ti.UI.createLabel({
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        color: "#000",
        text: "This is home page",
        id: "__alloyId11"
    });
    $.__views.home.add($.__views.__alloyId11);
    $.__views.__alloyId12 = Ti.UI.createView({
        right: 3,
        top: 48,
        width: "70%",
        height: 180,
        borderRadius: 5,
        borderColor: "#CE1D1C",
        borderWidth: 1,
        layout: "vertical",
        id: "__alloyId12"
    });
    $.__views.home.add($.__views.__alloyId12);
    $.__views.__alloyId13 = Ti.UI.createButton({
        title: "Menu",
        id: "__alloyId13"
    });
    $.__views.__alloyId12.add($.__views.__alloyId13);
    toggle ? $.__views.__alloyId13.addEventListener("click", toggle) : __defers["$.__views.__alloyId13!click!toggle"] = true;
    exports.destroy = function() {};
    _.extend($, $.__views);
    arguments[0] || {};
    __defers["$.__views.__alloyId13!click!toggle"] && $.__views.__alloyId13.addEventListener("click", toggle);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;