function __processArg(obj, key) {
    var arg = null;
    if (obj) {
        arg = obj[key] || null;
        delete obj[key];
    }
    return arg;
}

function Controller() {
    function menuToggle() {
        Alloy.Globals.Drawer["toggleLeftWindow"]();
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "toggle";
    if (arguments[0]) {
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> FETCH_HEAD
        {
            __processArg(arguments[0], "__parentSymbol");
        }
        {
            __processArg(arguments[0], "$model");
        }
        {
            __processArg(arguments[0], "__itemTemplate");
        }
<<<<<<< HEAD
=======
=======
        __processArg(arguments[0], "__parentSymbol");
        __processArg(arguments[0], "$model");
        __processArg(arguments[0], "__itemTemplate");
>>>>>>> FETCH_HEAD
>>>>>>> FETCH_HEAD
    }
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