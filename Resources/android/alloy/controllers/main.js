function Controller() {
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "main";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.main = Ti.UI.createView({
        backgroundColor: "white",
        id: "main"
    });
    $.__views.main && $.addTopLevelView($.__views.main);
<<<<<<< HEAD
    $.__views.__alloyId51 = Ti.UI.createLabel({
=======
    $.__views.__alloyId50 = Ti.UI.createLabel({
>>>>>>> FETCH_HEAD
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        color: "#000",
        text: "THIS IS MAIN",
<<<<<<< HEAD
        id: "__alloyId51"
    });
    $.__views.main.add($.__views.__alloyId51);
=======
        id: "__alloyId50"
    });
    $.__views.main.add($.__views.__alloyId50);
>>>>>>> FETCH_HEAD
    exports.destroy = function() {};
    _.extend($, $.__views);
    arguments[0] || {};
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;