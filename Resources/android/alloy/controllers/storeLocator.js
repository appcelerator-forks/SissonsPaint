function __processArg(obj, key) {
    var arg = null;
    if (obj) {
        arg = obj[key] || null;
        delete obj[key];
    }
    return arg;
}

function Controller() {
    function listState(e) {
        var nav = Alloy.createController("storeLocatorByState", {
            state: e.source.title
        }).getView();
        Alloy.Globals.Drawer.setCenterWindow(nav);
        Ti.API.info(e.source.title);
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "storeLocator";
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
    var __defers = {};
    $.__views.mainWindow = Ti.UI.createView({
        id: "mainWindow",
        layout: "vertical",
        backgroundColor: "white",
        width: "100%"
    });
    $.__views.mainWindow && $.addTopLevelView($.__views.mainWindow);
    $.__views.__alloyId142 = Ti.UI.createView({
        layout: "horizontal",
        height: "80",
        id: "__alloyId142"
    });
    $.__views.mainWindow.add($.__views.__alloyId142);
    $.__views.__alloyId143 = Alloy.createController("toggle", {
        id: "__alloyId143",
        __parentSymbol: $.__views.__alloyId142
    });
    $.__views.__alloyId143.setParent($.__views.__alloyId142);
    $.__views.__alloyId144 = Ti.UI.createLabel({
        width: "75%",
        height: Ti.UI.SIZE,
        color: "black",
        font: {
            fontSize: 28
        },
        text: "Store Locator",
        textAlign: Ti.UI.TEXT_ALIGNMENT_CENTER,
        id: "__alloyId144"
    });
    $.__views.__alloyId142.add($.__views.__alloyId144);
    $.__views.subWindow = Ti.UI.createView({
        id: "subWindow",
        layout: "vertical",
        width: "100%",
        backgroundColor: "white"
    });
    $.__views.mainWindow.add($.__views.subWindow);
    $.__views.row1 = Ti.UI.createView({
        id: "row1",
        layout: "horizontal",
        height: Ti.UI.SIZE,
        width: "100%"
    });
    $.__views.subWindow.add($.__views.row1);
    $.__views.zoneA = Ti.UI.createButton({
        color: "black",
        title: "Johor",
        id: "zoneA",
        width: "40%",
        left: "10%",
        top: "5%"
    });
    $.__views.row1.add($.__views.zoneA);
    listState ? $.__views.zoneA.addEventListener("click", listState) : __defers["$.__views.zoneA!click!listState"] = true;
    $.__views.zoneB = Ti.UI.createButton({
        color: "black",
        title: "Kedah",
        id: "zoneB",
        width: "40%",
        right: "10%",
        top: "5%"
    });
    $.__views.row1.add($.__views.zoneB);
    listState ? $.__views.zoneB.addEventListener("click", listState) : __defers["$.__views.zoneB!click!listState"] = true;
    $.__views.row2 = Ti.UI.createView({
        id: "row2",
        layout: "horizontal",
        height: Ti.UI.SIZE,
        width: "100%"
    });
    $.__views.subWindow.add($.__views.row2);
    $.__views.zoneC = Ti.UI.createButton({
        color: "black",
        title: "Melaka",
        id: "zoneC",
        width: "40%",
        left: "10%",
        top: "5%"
    });
    $.__views.row2.add($.__views.zoneC);
    listState ? $.__views.zoneC.addEventListener("click", listState) : __defers["$.__views.zoneC!click!listState"] = true;
    $.__views.zoneD = Ti.UI.createButton({
        color: "black",
        title: "Negeri Sembilan",
        id: "zoneD",
        width: "40%",
        right: "10%",
        top: "5%"
    });
    $.__views.row2.add($.__views.zoneD);
    listState ? $.__views.zoneD.addEventListener("click", listState) : __defers["$.__views.zoneD!click!listState"] = true;
    $.__views.row3 = Ti.UI.createView({
        id: "row3",
        layout: "horizontal",
        height: Ti.UI.SIZE,
        width: "100%"
    });
    $.__views.subWindow.add($.__views.row3);
    $.__views.zoneE = Ti.UI.createButton({
        color: "black",
        title: "Pahang",
        id: "zoneE",
        width: "40%",
        left: "10%",
        top: "5%"
    });
    $.__views.row3.add($.__views.zoneE);
    listState ? $.__views.zoneE.addEventListener("click", listState) : __defers["$.__views.zoneE!click!listState"] = true;
    $.__views.zoneF = Ti.UI.createButton({
        color: "black",
        title: "Penang",
        id: "zoneF",
        width: "40%",
        right: "10%",
        top: "5%"
    });
    $.__views.row3.add($.__views.zoneF);
    listState ? $.__views.zoneF.addEventListener("click", listState) : __defers["$.__views.zoneF!click!listState"] = true;
    $.__views.row4 = Ti.UI.createView({
        id: "row4",
        layout: "horizontal",
        height: Ti.UI.SIZE,
        width: "100%"
    });
    $.__views.subWindow.add($.__views.row4);
    $.__views.zoneG = Ti.UI.createButton({
        color: "black",
        title: "Selangor",
        id: "zoneG",
        width: "40%",
        left: "10%",
        top: "5%"
    });
    $.__views.row4.add($.__views.zoneG);
    listState ? $.__views.zoneG.addEventListener("click", listState) : __defers["$.__views.zoneG!click!listState"] = true;
    $.__views.zoneH = Ti.UI.createButton({
        color: "black",
        title: "Wilayah Persekutuan",
        id: "zoneH",
        width: "40%",
        right: "10%",
        top: "5%"
    });
    $.__views.row4.add($.__views.zoneH);
    listState ? $.__views.zoneH.addEventListener("click", listState) : __defers["$.__views.zoneH!click!listState"] = true;
    exports.destroy = function() {};
    _.extend($, $.__views);
    arguments[0] || {};
    var library = Alloy.createCollection("storeLocator");
    library.getStoreStateList();
    __defers["$.__views.zoneA!click!listState"] && $.__views.zoneA.addEventListener("click", listState);
    __defers["$.__views.zoneB!click!listState"] && $.__views.zoneB.addEventListener("click", listState);
    __defers["$.__views.zoneC!click!listState"] && $.__views.zoneC.addEventListener("click", listState);
    __defers["$.__views.zoneD!click!listState"] && $.__views.zoneD.addEventListener("click", listState);
    __defers["$.__views.zoneE!click!listState"] && $.__views.zoneE.addEventListener("click", listState);
    __defers["$.__views.zoneF!click!listState"] && $.__views.zoneF.addEventListener("click", listState);
    __defers["$.__views.zoneG!click!listState"] && $.__views.zoneG.addEventListener("click", listState);
    __defers["$.__views.zoneH!click!listState"] && $.__views.zoneH.addEventListener("click", listState);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;