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
    this.__controllerPath = "index";
    if (arguments[0]) {
        __processArg(arguments[0], "__parentSymbol");
        __processArg(arguments[0], "$model");
        __processArg(arguments[0], "__itemTemplate");
    }
    var $ = this;
    var exports = {};
    $.__views.mainWindow = Ti.UI.createWindow({
        id: "mainWindow",
        navBarHidden: "false",
        backgroundColor: "white",
        exitOnClose: "true"
    });
    $.__views.mainWindow && $.addTopLevelView($.__views.mainWindow);
    $.__views.__alloyId19 = Ti.UI.createView({
        id: "__alloyId19"
    });
    $.__views.mainWindow.add($.__views.__alloyId19);
    $.__views.__alloyId20 = Ti.UI.createLabel({
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        color: "#000",
        text: "GEOMILANO HERE",
        id: "__alloyId20"
    });
    $.__views.__alloyId19.add($.__views.__alloyId20);
    exports.destroy = function() {};
    _.extend($, $.__views);
    var TiDrawerLayout = require("com.tripvi.drawerlayout");
    var API = require("api");
    API.loadStoreLocator();
    var menuTable = Alloy.createController("menu").getView();
    var contentView = Alloy.createController("main").getView();
    var drawer = TiDrawerLayout.createDrawer({
        leftView: menuTable,
        centerView: contentView,
        leftDrawerWidth: "240",
        width: Ti.UI.FILL,
        height: Ti.UI.FILL
    });
    Alloy.CFG.drawer = drawer;
    Alloy.CFG.contentView = contentView;
    drawer.addEventListener("draweropen", function() {});
    drawer.addEventListener("drawerclose", function() {});
    drawer.addEventListener("drawerslide", function() {});
    $.mainWindow.addEventListener("open", function() {
        var activity = $.mainWindow.getActivity();
        if (activity) {
            var actionBar = activity.getActionBar();
            if (actionBar) {
                actionBar.displayHomeAsUp = true;
                actionBar.title = "Sissons Paint";
                actionBar.onHomeIconItemSelected = function() {
                    drawer.toggleLeftWindow();
                };
            }
        }
    });
    $.mainWindow.add(drawer);
    $.mainWindow.open();
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;