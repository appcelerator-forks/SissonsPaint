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
    $.__views.home = Ti.UI.createView({
        backgroundColor: "white",
        id: "home"
    });
    $.__views.home && $.addTopLevelView($.__views.home);
<<<<<<< HEAD
    $.__views.__alloyId42 = Ti.UI.createView({
        layout: "vertical",
        id: "__alloyId42"
    });
    $.__views.home.add($.__views.__alloyId42);
    $.__views.__alloyId43 = Ti.UI.createView({
        layout: "horizontal",
        height: "80",
        id: "__alloyId43"
    });
    $.__views.__alloyId42.add($.__views.__alloyId43);
    $.__views.__alloyId44 = Alloy.createController("toggle", {
        id: "__alloyId44",
        __parentSymbol: $.__views.__alloyId43
    });
    $.__views.__alloyId44.setParent($.__views.__alloyId43);
    $.__views.__alloyId45 = Ti.UI.createLabel({
=======
    $.__views.__alloyId47 = Ti.UI.createView({
        layout: "vertical",
        id: "__alloyId47"
    });
    $.__views.home.add($.__views.__alloyId47);
    $.__views.__alloyId48 = Ti.UI.createView({
        layout: "horizontal",
        height: "80",
        id: "__alloyId48"
    });
    $.__views.__alloyId47.add($.__views.__alloyId48);
    $.__views.__alloyId49 = Alloy.createController("toggle", {
        id: "__alloyId49",
        __parentSymbol: $.__views.__alloyId48
    });
    $.__views.__alloyId49.setParent($.__views.__alloyId48);
    $.__views.__alloyId50 = Ti.UI.createLabel({
>>>>>>> FETCH_HEAD
        width: "75%",
        height: Ti.UI.SIZE,
        color: "black",
        font: {
            fontSize: 28
        },
        text: "Home",
        textAlign: Ti.UI.TEXT_ALIGNMENT_CENTER,
<<<<<<< HEAD
        id: "__alloyId45"
    });
    $.__views.__alloyId43.add($.__views.__alloyId45);
=======
        id: "__alloyId50"
    });
    $.__views.__alloyId48.add($.__views.__alloyId50);
>>>>>>> FETCH_HEAD
    exports.destroy = function() {};
    _.extend($, $.__views);
    arguments[0] || {};
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;