function Controller() {
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "home";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.home = Ti.UI.createView({
        backgroundColor: "white",
        id: "home"
    });
    $.__views.home && $.addTopLevelView($.__views.home);
    $.__views.__alloyId28 = Ti.UI.createView({
        layout: "vertical",
        id: "__alloyId28"
    });
    $.__views.home.add($.__views.__alloyId28);
    $.__views.__alloyId29 = Ti.UI.createView({
        layout: "horizontal",
        height: "80",
        id: "__alloyId29"
    });
    $.__views.__alloyId28.add($.__views.__alloyId29);
    $.__views.__alloyId30 = Alloy.createController("toggle", {
        id: "__alloyId30",
        __parentSymbol: $.__views.__alloyId29
    });
    $.__views.__alloyId30.setParent($.__views.__alloyId29);
    $.__views.__alloyId31 = Ti.UI.createLabel({
        width: "75%",
        height: Ti.UI.SIZE,
        color: "black",
        font: {
            fontSize: 28
        },
        text: "Home",
        textAlign: Ti.UI.TEXT_ALIGNMENT_CENTER,
        id: "__alloyId31"
    });
    $.__views.__alloyId29.add($.__views.__alloyId31);
    exports.destroy = function() {};
    _.extend($, $.__views);
    arguments[0] || {};
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;