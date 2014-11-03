<<<<<<< HEAD
function __processArg(e,t){var i=null;return e&&(i=e[t]||null,delete e[t]),i}function Controller(){function e(e){var t=Alloy.createController("storeLocatorByState",{state:e.source.title}).getView();Alloy.Globals.Drawer.setCenterWindow(t)}require("alloy/controllers/BaseController").apply(this,Array.prototype.slice.call(arguments)),this.__controllerPath="storeLocator",arguments[0]&&(__processArg(arguments[0],"__parentSymbol"),__processArg(arguments[0],"$model"),__processArg(arguments[0],"__itemTemplate"));var t=this,i={},o={};t.__views.mainWindow=Ti.UI.createView({id:"mainWindow",layout:"vertical",backgroundColor:"white",width:"100%"}),t.__views.mainWindow&&t.addTopLevelView(t.__views.mainWindow),t.__views.__alloyId93=Ti.UI.createView({layout:"horizontal",height:"80",id:"__alloyId93"}),t.__views.mainWindow.add(t.__views.__alloyId93),t.__views.__alloyId94=Alloy.createController("toggle",{id:"__alloyId94",__parentSymbol:t.__views.__alloyId93}),t.__views.__alloyId94.setParent(t.__views.__alloyId93),t.__views.__alloyId95=Ti.UI.createLabel({width:"75%",height:Ti.UI.SIZE,color:"black",font:{fontSize:22},text:"Store Locator",textAlign:Ti.UI.TEXT_ALIGNMENT_CENTER,id:"__alloyId95"}),t.__views.__alloyId93.add(t.__views.__alloyId95),t.__views.subWindow=Ti.UI.createView({id:"subWindow",layout:"vertical",width:"100%",backgroundColor:"white"}),t.__views.mainWindow.add(t.__views.subWindow),t.__views.row1=Ti.UI.createView({id:"row1",layout:"horizontal",height:Ti.UI.SIZE,width:"100%"}),t.__views.subWindow.add(t.__views.row1),t.__views.zoneA=Ti.UI.createButton({color:"white",title:"Johor",backgroundColor:"black",id:"zoneA",width:"40%",height:"65",left:"8%",right:"2%",top:"5%"}),t.__views.row1.add(t.__views.zoneA),e?t.__views.zoneA.addEventListener("click",e):o["$.__views.zoneA!click!listState"]=!0,t.__views.zoneB=Ti.UI.createButton({color:"white",title:"Kedah",backgroundColor:"black",id:"zoneB",width:"40%",height:"65",left:"2%",right:"8%",top:"5%"}),t.__views.row1.add(t.__views.zoneB),e?t.__views.zoneB.addEventListener("click",e):o["$.__views.zoneB!click!listState"]=!0,t.__views.row2=Ti.UI.createView({id:"row2",layout:"horizontal",height:Ti.UI.SIZE,width:"100%"}),t.__views.subWindow.add(t.__views.row2),t.__views.zoneC=Ti.UI.createButton({color:"white",title:"Kuala Terengganu",backgroundColor:"black",id:"zoneC",width:"40%",height:"65",left:"8%",right:"2%",top:"5%"}),t.__views.row2.add(t.__views.zoneC),e?t.__views.zoneC.addEventListener("click",e):o["$.__views.zoneC!click!listState"]=!0,t.__views.zoneD=Ti.UI.createButton({color:"white",title:"Melaka",backgroundColor:"black",id:"zoneD",width:"40%",height:"65",left:"2%",right:"8%",top:"5%"}),t.__views.row2.add(t.__views.zoneD),e?t.__views.zoneD.addEventListener("click",e):o["$.__views.zoneD!click!listState"]=!0,t.__views.row3=Ti.UI.createView({id:"row3",layout:"horizontal",height:Ti.UI.SIZE,width:"100%"}),t.__views.subWindow.add(t.__views.row3),t.__views.zoneE=Ti.UI.createButton({color:"white",title:"Negeri Sembilan",backgroundColor:"black",id:"zoneE",width:"40%",height:"65",left:"8%",right:"2%",top:"5%"}),t.__views.row3.add(t.__views.zoneE),e?t.__views.zoneE.addEventListener("click",e):o["$.__views.zoneE!click!listState"]=!0,t.__views.zoneF=Ti.UI.createButton({color:"white",title:"Pahang",backgroundColor:"black",id:"zoneF",width:"40%",height:"65",left:"2%",right:"8%",top:"5%"}),t.__views.row3.add(t.__views.zoneF),e?t.__views.zoneF.addEventListener("click",e):o["$.__views.zoneF!click!listState"]=!0,t.__views.row4=Ti.UI.createView({id:"row4",layout:"horizontal",height:Ti.UI.SIZE,width:"100%"}),t.__views.subWindow.add(t.__views.row4),t.__views.zoneG=Ti.UI.createButton({color:"white",title:"Penang",backgroundColor:"black",id:"zoneG",width:"40%",height:"65",left:"8%",right:"2%",top:"5%"}),t.__views.row4.add(t.__views.zoneG),e?t.__views.zoneG.addEventListener("click",e):o["$.__views.zoneG!click!listState"]=!0,t.__views.zoneH=Ti.UI.createButton({color:"white",title:"Perak",backgroundColor:"black",id:"zoneH",width:"40%",height:"65",left:"2%",right:"8%",top:"5%"}),t.__views.row4.add(t.__views.zoneH),e?t.__views.zoneH.addEventListener("click",e):o["$.__views.zoneH!click!listState"]=!0,t.__views.row5=Ti.UI.createView({id:"row5",layout:"horizontal",height:Ti.UI.SIZE,width:"100%"}),t.__views.subWindow.add(t.__views.row5),t.__views.zoneI=Ti.UI.createButton({color:"white",title:"Sabah",backgroundColor:"black",id:"zoneI",width:"40%",height:"65",left:"8%",right:"2%",top:"5%"}),t.__views.row5.add(t.__views.zoneI),e?t.__views.zoneI.addEventListener("click",e):o["$.__views.zoneI!click!listState"]=!0,t.__views.zoneJ=Ti.UI.createButton({color:"white",title:"Sarawak",backgroundColor:"black",id:"zoneJ",width:"40%",height:"65",left:"2%",right:"8%",top:"5%"}),t.__views.row5.add(t.__views.zoneJ),e?t.__views.zoneJ.addEventListener("click",e):o["$.__views.zoneJ!click!listState"]=!0,t.__views.row6=Ti.UI.createView({id:"row6",layout:"horizontal",height:Ti.UI.SIZE,width:"100%"}),t.__views.subWindow.add(t.__views.row6),t.__views.zoneK=Ti.UI.createButton({color:"white",title:"Selangor",backgroundColor:"black",id:"zoneK",width:"40%",height:"65",left:"8%",right:"2%",top:"5%"}),t.__views.row6.add(t.__views.zoneK),e?t.__views.zoneK.addEventListener("click",e):o["$.__views.zoneK!click!listState"]=!0,t.__views.zoneL=Ti.UI.createButton({color:"white",title:"Wilayah Persekutuan",backgroundColor:"black",id:"zoneL",width:"40%",height:"65",left:"2%",right:"8%",top:"5%"}),t.__views.row6.add(t.__views.zoneL),e?t.__views.zoneL.addEventListener("click",e):o["$.__views.zoneL!click!listState"]=!0,i.destroy=function(){},_.extend(t,t.__views),arguments[0]||{};var a=Alloy.createCollection("storeLocator");a.getStoreStateList(),o["$.__views.zoneA!click!listState"]&&t.__views.zoneA.addEventListener("click",e),o["$.__views.zoneB!click!listState"]&&t.__views.zoneB.addEventListener("click",e),o["$.__views.zoneC!click!listState"]&&t.__views.zoneC.addEventListener("click",e),o["$.__views.zoneD!click!listState"]&&t.__views.zoneD.addEventListener("click",e),o["$.__views.zoneE!click!listState"]&&t.__views.zoneE.addEventListener("click",e),o["$.__views.zoneF!click!listState"]&&t.__views.zoneF.addEventListener("click",e),o["$.__views.zoneG!click!listState"]&&t.__views.zoneG.addEventListener("click",e),o["$.__views.zoneH!click!listState"]&&t.__views.zoneH.addEventListener("click",e),o["$.__views.zoneI!click!listState"]&&t.__views.zoneI.addEventListener("click",e),o["$.__views.zoneJ!click!listState"]&&t.__views.zoneJ.addEventListener("click",e),o["$.__views.zoneK!click!listState"]&&t.__views.zoneK.addEventListener("click",e),o["$.__views.zoneL!click!listState"]&&t.__views.zoneL.addEventListener("click",e),_.extend(t,i)}var Alloy=require("alloy"),Backbone=Alloy.Backbone,_=Alloy._;module.exports=Controller;
=======
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
<<<<<<< HEAD
=======
<<<<<<< HEAD
    $.__views.__alloyId87 = Ti.UI.createView({
        layout: "horizontal",
        height: "80",
        id: "__alloyId87"
    });
    $.__views.mainWindow.add($.__views.__alloyId87);
    $.__views.__alloyId88 = Alloy.createController("toggle", {
        id: "__alloyId88",
        __parentSymbol: $.__views.__alloyId87
    });
    $.__views.__alloyId88.setParent($.__views.__alloyId87);
    $.__views.__alloyId89 = Ti.UI.createLabel({
=======
<<<<<<< HEAD
>>>>>>> FETCH_HEAD
    $.__views.__alloyId93 = Ti.UI.createView({
        layout: "horizontal",
        height: "80",
        id: "__alloyId93"
    });
    $.__views.mainWindow.add($.__views.__alloyId93);
    $.__views.__alloyId94 = Alloy.createController("toggle", {
        id: "__alloyId94",
        __parentSymbol: $.__views.__alloyId93
    });
    $.__views.__alloyId94.setParent($.__views.__alloyId93);
    $.__views.__alloyId95 = Ti.UI.createLabel({
<<<<<<< HEAD
=======
=======
<<<<<<< HEAD
    $.__views.__alloyId85 = Ti.UI.createView({
=======
<<<<<<< HEAD
    $.__views.__alloyId91 = Ti.UI.createView({
        layout: "horizontal",
        height: "80",
        id: "__alloyId91"
    });
    $.__views.mainWindow.add($.__views.__alloyId91);
    $.__views.__alloyId92 = Alloy.createController("toggle", {
        id: "__alloyId92",
        __parentSymbol: $.__views.__alloyId91
    });
    $.__views.__alloyId92.setParent($.__views.__alloyId91);
    $.__views.__alloyId93 = Ti.UI.createLabel({
=======
<<<<<<< HEAD
    $.__views.__alloyId84 = Ti.UI.createView({
=======
<<<<<<< HEAD
    $.__views.__alloyId83 = Ti.UI.createView({
>>>>>>> FETCH_HEAD
        layout: "horizontal",
        height: "80",
        id: "__alloyId85"
    });
    $.__views.mainWindow.add($.__views.__alloyId85);
    $.__views.__alloyId86 = Alloy.createController("toggle", {
        id: "__alloyId86",
        __parentSymbol: $.__views.__alloyId85
    });
<<<<<<< HEAD
    $.__views.__alloyId86.setParent($.__views.__alloyId85);
    $.__views.__alloyId87 = Ti.UI.createLabel({
=======
<<<<<<< HEAD
    $.__views.__alloyId85.setParent($.__views.__alloyId84);
    $.__views.__alloyId86 = Ti.UI.createLabel({
=======
    $.__views.__alloyId87.setParent($.__views.__alloyId86);
    $.__views.__alloyId88 = Ti.UI.createLabel({
>>>>>>> FETCH_HEAD
>>>>>>> FETCH_HEAD
>>>>>>> FETCH_HEAD
>>>>>>> FETCH_HEAD
>>>>>>> FETCH_HEAD
>>>>>>> FETCH_HEAD
>>>>>>> FETCH_HEAD
        width: "75%",
        height: Ti.UI.SIZE,
        color: "black",
        font: {
            fontSize: 22
        },
        text: "Store Locator",
        textAlign: Ti.UI.TEXT_ALIGNMENT_CENTER,
<<<<<<< HEAD
        id: "__alloyId95"
    });
    $.__views.__alloyId93.add($.__views.__alloyId95);
=======
<<<<<<< HEAD
        id: "__alloyId89"
    });
    $.__views.__alloyId87.add($.__views.__alloyId89);
=======
<<<<<<< HEAD
        id: "__alloyId95"
    });
    $.__views.__alloyId93.add($.__views.__alloyId95);
=======
<<<<<<< HEAD
        id: "__alloyId87"
    });
    $.__views.__alloyId85.add($.__views.__alloyId87);
=======
<<<<<<< HEAD
        id: "__alloyId93"
    });
    $.__views.__alloyId91.add($.__views.__alloyId93);
=======
<<<<<<< HEAD
        id: "__alloyId86"
    });
    $.__views.__alloyId84.add($.__views.__alloyId86);
=======
<<<<<<< HEAD
        id: "__alloyId85"
    });
    $.__views.__alloyId83.add($.__views.__alloyId85);
=======
        id: "__alloyId88"
    });
    $.__views.__alloyId86.add($.__views.__alloyId88);
>>>>>>> FETCH_HEAD
>>>>>>> FETCH_HEAD
>>>>>>> FETCH_HEAD
>>>>>>> FETCH_HEAD
>>>>>>> FETCH_HEAD
>>>>>>> FETCH_HEAD
>>>>>>> FETCH_HEAD
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
        title: "Kuala Terengganu",
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
        title: "Sabah",
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
        title: "Sarawak",
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
        title: "Selangor",
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
        title: "Wilayah Persekutuan",
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
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;
>>>>>>> FETCH_HEAD
