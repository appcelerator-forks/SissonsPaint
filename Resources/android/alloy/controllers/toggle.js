function Controller() {
    function menuToggle() {
        Alloy.Globals.Drawer["toggleLeftWindow"]();
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "toggle";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    var __defers = {};
    $.__views.toggle = Ti.UI.createImageView({
        id: "toggle",
        image: "/images/menu_toggle.png",
        left: "0",
        top: "10",
        height: "60",
        width: "50"
    });
    $.__views.toggle && $.addTopLevelView($.__views.toggle);
    menuToggle ? $.__views.toggle.addEventListener("click", menuToggle) : __defers["$.__views.toggle!click!menuToggle"] = true;
    exports.destroy = function() {};
    _.extend($, $.__views);
    __defers["$.__views.toggle!click!menuToggle"] && $.__views.toggle.addEventListener("click", menuToggle);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;