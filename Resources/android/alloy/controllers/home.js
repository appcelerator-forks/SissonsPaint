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
    $.__views.__alloyId11 = Ti.UI.createView({
        left: 3,
        top: 48,
        width: "20%",
        height: 50,
        borderWidth: 1,
        backgroundColor: "white",
        layout: "vertical",
        id: "__alloyId11"
    });
    $.__views.home.add($.__views.__alloyId11);
    $.__views.__alloyId12 = Ti.UI.createButton({
        title: "Menu",
        id: "__alloyId12"
    });
    $.__views.__alloyId11.add($.__views.__alloyId12);
    toggle ? $.__views.__alloyId12.addEventListener("click", toggle) : __defers["$.__views.__alloyId12!click!toggle"] = true;
    exports.destroy = function() {};
    _.extend($, $.__views);
    arguments[0] || {};
    __defers["$.__views.__alloyId12!click!toggle"] && $.__views.__alloyId12.addEventListener("click", toggle);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;