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
    this.__controllerPath = "colourSwatches";
    if (arguments[0]) {
        __processArg(arguments[0], "__parentSymbol");
        __processArg(arguments[0], "$model");
        __processArg(arguments[0], "__itemTemplate");
    }
    var $ = this;
    var exports = {};
    $.__views.colourSwatches = Ti.UI.createView({
        backgroundColor: "white",
        id: "colourSwatches"
    });
    $.__views.colourSwatches && $.addTopLevelView($.__views.colourSwatches);
    $.__views.__alloyId14 = Ti.UI.createLabel({
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        color: "#000",
        text: "COLOR CATEGORIES",
        id: "__alloyId14"
    });
    $.__views.colourSwatches.add($.__views.__alloyId14);
    $.__views.__alloyId15 = Ti.UI.createLabel({
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        color: "#000",
        text: "ECOGLOS is base on long oilmodifield alkyd. It is fungus resistant high gloss architectural paint that\n			decorates and protects the interior and exterior of building. It has excellent coverage, good application and flow\n			properties. With the proper primer and undercoat, EcoGloss will dry to an attractive smooth finish\n			on wooden and metal substrates.",
        id: "__alloyId15"
    });
    $.__views.colourSwatches.add($.__views.__alloyId15);
    exports.destroy = function() {};
    _.extend($, $.__views);
    arguments[0] || {};
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;