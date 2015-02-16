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
    $.__views.__alloyId152 = Ti.UI.createView({
        layout: "horizontal",
        height: "80",
        backgroundImage: "/images/banner_store_locator.jpg",
        id: "__alloyId152"
    });
    $.__views.mainWindow.add($.__views.__alloyId152);
    $.__views.__alloyId153 = Alloy.createController("toggle", {
        id: "__alloyId153",
        __parentSymbol: $.__views.__alloyId152
    });
    $.__views.__alloyId153.setParent($.__views.__alloyId152);
    $.__views.subWindow = Ti.UI.createScrollView({
        id: "subWindow",
        layout: "vertical",
        width: "100%",
        backgroundColor: "white",
        overScrollMode: Titanium.UI.Android.OVER_SCROLL_NEVER
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
        color: "white",
        title: "Johor",
        backgroundColor: "black",
        id: "zoneA",
        width: "40%",
        height: "65",
        left: "8%",
        right: "2%",
        top: "5%"
    });
    $.__views.row1.add($.__views.zoneA);
    listState ? $.__views.zoneA.addEventListener("click", listState) : __defers["$.__views.zoneA!click!listState"] = true;
    $.__views.zoneB = Ti.UI.createButton({
        color: "white",
        title: "Kedah",
        backgroundColor: "black",
        id: "zoneB",
        width: "40%",
        height: "65",
        left: "2%",
        right: "8%",
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
        color: "white",
        title: "Kelantan",
        backgroundColor: "black",
        id: "zoneC",
        width: "40%",
        height: "65",
        left: "8%",
        right: "2%",
        top: "5%"
    });
    $.__views.row2.add($.__views.zoneC);
    listState ? $.__views.zoneC.addEventListener("click", listState) : __defers["$.__views.zoneC!click!listState"] = true;
    $.__views.zoneD = Ti.UI.createButton({
        color: "white",
        title: "Melaka",
        backgroundColor: "black",
        id: "zoneD",
        width: "40%",
        height: "65",
        left: "2%",
        right: "8%",
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
        color: "white",
        title: "Negeri Sembilan",
        backgroundColor: "black",
        id: "zoneE",
        width: "40%",
        height: "65",
        left: "8%",
        right: "2%",
        top: "5%"
    });
    $.__views.row3.add($.__views.zoneE);
    listState ? $.__views.zoneE.addEventListener("click", listState) : __defers["$.__views.zoneE!click!listState"] = true;
    $.__views.zoneF = Ti.UI.createButton({
        color: "white",
        title: "Pahang",
        backgroundColor: "black",
        id: "zoneF",
        width: "40%",
        height: "65",
        left: "2%",
        right: "8%",
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
        color: "white",
        title: "Penang",
        backgroundColor: "black",
        id: "zoneG",
        width: "40%",
        height: "65",
        left: "8%",
        right: "2%",
        top: "5%"
    });
    $.__views.row4.add($.__views.zoneG);
    listState ? $.__views.zoneG.addEventListener("click", listState) : __defers["$.__views.zoneG!click!listState"] = true;
    $.__views.zoneH = Ti.UI.createButton({
        color: "white",
        title: "Perak",
        backgroundColor: "black",
        id: "zoneH",
        width: "40%",
        height: "65",
        left: "2%",
        right: "8%",
        top: "5%"
    });
    $.__views.row4.add($.__views.zoneH);
    listState ? $.__views.zoneH.addEventListener("click", listState) : __defers["$.__views.zoneH!click!listState"] = true;
    $.__views.row5 = Ti.UI.createView({
        id: "row5",
        layout: "horizontal",
        height: Ti.UI.SIZE,
        width: "100%"
    });
    $.__views.subWindow.add($.__views.row5);
    $.__views.zoneI = Ti.UI.createButton({
        color: "white",
        title: "Perlis",
        backgroundColor: "black",
        id: "zoneI",
        width: "40%",
        height: "65",
        left: "8%",
        right: "2%",
        top: "5%"
    });
    $.__views.row5.add($.__views.zoneI);
    listState ? $.__views.zoneI.addEventListener("click", listState) : __defers["$.__views.zoneI!click!listState"] = true;
    $.__views.zoneJ = Ti.UI.createButton({
        color: "white",
        title: "Sabah",
        backgroundColor: "black",
        id: "zoneJ",
        width: "40%",
        height: "65",
        left: "2%",
        right: "8%",
        top: "5%"
    });
    $.__views.row5.add($.__views.zoneJ);
    listState ? $.__views.zoneJ.addEventListener("click", listState) : __defers["$.__views.zoneJ!click!listState"] = true;
    $.__views.row6 = Ti.UI.createView({
        id: "row6",
        layout: "horizontal",
        height: Ti.UI.SIZE,
        width: "100%"
    });
    $.__views.subWindow.add($.__views.row6);
    $.__views.zoneK = Ti.UI.createButton({
        color: "white",
        title: "Sarawak",
        backgroundColor: "black",
        id: "zoneK",
        width: "40%",
        height: "65",
        left: "8%",
        right: "2%",
        top: "5%"
    });
    $.__views.row6.add($.__views.zoneK);
    listState ? $.__views.zoneK.addEventListener("click", listState) : __defers["$.__views.zoneK!click!listState"] = true;
    $.__views.zoneL = Ti.UI.createButton({
        color: "white",
        title: "Selangor",
        backgroundColor: "black",
        id: "zoneL",
        width: "40%",
        height: "65",
        left: "2%",
        right: "8%",
        top: "5%"
    });
    $.__views.row6.add($.__views.zoneL);
    listState ? $.__views.zoneL.addEventListener("click", listState) : __defers["$.__views.zoneL!click!listState"] = true;
    $.__views.row7 = Ti.UI.createView({
        id: "row7",
        layout: "horizontal",
        height: Ti.UI.SIZE,
        width: "100%"
    });
    $.__views.subWindow.add($.__views.row7);
    $.__views.zoneM = Ti.UI.createButton({
        color: "white",
        title: "Terengganu",
        backgroundColor: "black",
        id: "zoneM",
        width: "40%",
        height: "65",
        left: "8%",
        right: "2%",
        top: "5%"
    });
    $.__views.row7.add($.__views.zoneM);
    listState ? $.__views.zoneM.addEventListener("click", listState) : __defers["$.__views.zoneM!click!listState"] = true;
    $.__views.zoneN = Ti.UI.createButton({
        color: "white",
        title: "Wilayah Persekutuan",
        backgroundColor: "black",
        id: "zoneN",
        width: "40%",
        height: "65",
        left: "2%",
        right: "8%",
        top: "5%"
    });
    $.__views.row7.add($.__views.zoneN);
    listState ? $.__views.zoneN.addEventListener("click", listState) : __defers["$.__views.zoneN!click!listState"] = true;
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
    __defers["$.__views.zoneI!click!listState"] && $.__views.zoneI.addEventListener("click", listState);
    __defers["$.__views.zoneJ!click!listState"] && $.__views.zoneJ.addEventListener("click", listState);
    __defers["$.__views.zoneK!click!listState"] && $.__views.zoneK.addEventListener("click", listState);
    __defers["$.__views.zoneL!click!listState"] && $.__views.zoneL.addEventListener("click", listState);
    __defers["$.__views.zoneM!click!listState"] && $.__views.zoneM.addEventListener("click", listState);
    __defers["$.__views.zoneN!click!listState"] && $.__views.zoneN.addEventListener("click", listState);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;