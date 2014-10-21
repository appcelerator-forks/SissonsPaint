function Controller() {
    function listState(e) {
        var nav = Alloy.createController("storeLocatorByState", {
            state: e.source.title
        }).getView();
        Alloy.Globals.Drawer.setCenterWindow(nav);
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "storeLocator";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
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
<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> FETCH_HEAD
    $.__views.__alloyId67 = Ti.UI.createView({
        layout: "horizontal",
        height: "80",
        id: "__alloyId67"
    });
    $.__views.mainWindow.add($.__views.__alloyId67);
    $.__views.__alloyId68 = Alloy.createController("toggle", {
        id: "__alloyId68",
        __parentSymbol: $.__views.__alloyId67
    });
    $.__views.__alloyId68.setParent($.__views.__alloyId67);
    $.__views.__alloyId69 = Ti.UI.createLabel({
<<<<<<< HEAD
=======
=======
    $.__views.__alloyId64 = Ti.UI.createView({
=======
    $.__views.__alloyId65 = Ti.UI.createView({
>>>>>>> 21/10/2014
        layout: "horizontal",
        height: "80",
        id: "__alloyId65"
    });
    $.__views.mainWindow.add($.__views.__alloyId65);
    $.__views.__alloyId66 = Alloy.createController("toggle", {
        id: "__alloyId66",
        __parentSymbol: $.__views.__alloyId65
    });
<<<<<<< HEAD
    $.__views.__alloyId65.setParent($.__views.__alloyId64);
    $.__views.__alloyId66 = Ti.UI.createLabel({
>>>>>>> FETCH_HEAD
>>>>>>> FETCH_HEAD
=======
    $.__views.__alloyId66.setParent($.__views.__alloyId65);
    $.__views.__alloyId67 = Ti.UI.createLabel({
>>>>>>> 21/10/2014
        width: "75%",
        height: Ti.UI.SIZE,
        color: "black",
        font: {
            fontSize: 28
        },
        text: "Store Locator",
        textAlign: Ti.UI.TEXT_ALIGNMENT_CENTER,
<<<<<<< HEAD
<<<<<<< HEAD
        id: "__alloyId69"
    });
    $.__views.__alloyId67.add($.__views.__alloyId69);
=======
<<<<<<< HEAD
        id: "__alloyId69"
    });
    $.__views.__alloyId67.add($.__views.__alloyId69);
=======
        id: "__alloyId66"
    });
    $.__views.__alloyId64.add($.__views.__alloyId66);
>>>>>>> FETCH_HEAD
>>>>>>> FETCH_HEAD
=======
        id: "__alloyId67"
    });
    $.__views.__alloyId65.add($.__views.__alloyId67);
>>>>>>> 21/10/2014
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
        title: "Melaka",
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
        title: "Negeri Sembilan",
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
        title: "Pahang",
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
        title: "Penang",
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
        title: "Selangor",
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
        title: "Wilayah Persekutuan",
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