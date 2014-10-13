<<<<<<< HEAD
function __processArg(e,t){var i=null;return e&&(i=e[t]||null,delete e[t]),i}function Controller(){function e(e){switch(e.index){case 0:t("home");break;case 1:t("diyPaint");break;case 2:t("colourPicker");break;case 3:t("colourSwatches");break;case 4:t("brochure");break;case 5:t("storeLocator");break;case 6:t("aboutUs")}}function t(e){var t=Alloy.createController(e).getView();Alloy.Globals.Drawer.setCenterWindow(t),Alloy.Globals.Drawer.closeLeftWindow()}require("alloy/controllers/BaseController").apply(this,Array.prototype.slice.call(arguments)),this.__controllerPath="index",arguments[0]&&(__processArg(arguments[0],"__parentSymbol"),__processArg(arguments[0],"$model"),__processArg(arguments[0],"__itemTemplate"));var i=this,o={},r={};i.__views.mainWindow=require("xp.ui").createWindow({backgroundColor:"black",fullscreen:"true",title:"test",role:"leftWindow",id:"mainWindow"}),i.__views.logo=Ti.UI.createImageView({id:"logo",image:"/images/menu_logo.png",width:"150",top:"30"}),i.__views.mainWindow.add(i.__views.logo);var a=[];i.__views.__alloyId36=Ti.UI.createTableViewRow({height:"50",id:"__alloyId36"}),a.push(i.__views.__alloyId36),i.__views.__alloyId37=Ti.UI.createLabel({width:Ti.UI.FILL,height:Ti.UI.SIZE,color:"white",text:"Home",left:"30",id:"__alloyId37"}),i.__views.__alloyId36.add(i.__views.__alloyId37),i.__views.__alloyId38=Ti.UI.createTableViewRow({height:"50",id:"__alloyId38"}),a.push(i.__views.__alloyId38),i.__views.__alloyId39=Ti.UI.createLabel({width:Ti.UI.FILL,height:Ti.UI.SIZE,color:"white",text:"DIY Paint",left:"30",id:"__alloyId39"}),i.__views.__alloyId38.add(i.__views.__alloyId39),i.__views.__alloyId40=Ti.UI.createTableViewRow({height:"50",id:"__alloyId40"}),a.push(i.__views.__alloyId40),i.__views.__alloyId41=Ti.UI.createLabel({width:Ti.UI.FILL,height:Ti.UI.SIZE,color:"white",text:"Colour Picker",left:"30",id:"__alloyId41"}),i.__views.__alloyId40.add(i.__views.__alloyId41),i.__views.__alloyId42=Ti.UI.createTableViewRow({height:"50",id:"__alloyId42"}),a.push(i.__views.__alloyId42),i.__views.__alloyId43=Ti.UI.createLabel({width:Ti.UI.FILL,height:Ti.UI.SIZE,color:"white",text:"Colour Swatches",left:"30",id:"__alloyId43"}),i.__views.__alloyId42.add(i.__views.__alloyId43),i.__views.__alloyId44=Ti.UI.createTableViewRow({height:"50",id:"__alloyId44"}),a.push(i.__views.__alloyId44),i.__views.__alloyId45=Ti.UI.createLabel({width:Ti.UI.FILL,height:Ti.UI.SIZE,color:"white",text:"Brochure",left:"30",id:"__alloyId45"}),i.__views.__alloyId44.add(i.__views.__alloyId45),i.__views.__alloyId46=Ti.UI.createTableViewRow({height:"50",id:"__alloyId46"}),a.push(i.__views.__alloyId46),i.__views.__alloyId47=Ti.UI.createLabel({width:Ti.UI.FILL,height:Ti.UI.SIZE,color:"white",text:"Store Locator",left:"30",id:"__alloyId47"}),i.__views.__alloyId46.add(i.__views.__alloyId47),i.__views.__alloyId48=Ti.UI.createTableViewRow({height:"50",id:"__alloyId48"}),a.push(i.__views.__alloyId48),i.__views.__alloyId49=Ti.UI.createLabel({width:Ti.UI.FILL,height:Ti.UI.SIZE,color:"white",text:"About Us",left:"30",id:"__alloyId49"}),i.__views.__alloyId48.add(i.__views.__alloyId49),i.__views.menuTable=Ti.UI.createTableView({data:a,id:"menuTable",top:"100",separatorColor:"black"}),i.__views.mainWindow.add(i.__views.menuTable),e?i.__views.menuTable.addEventListener("click",e):r["$.__views.menuTable!click!doMenuClick"]=!0,i.__views.tnc=Ti.UI.createLabel({width:Ti.UI.SIZE,height:Ti.UI.SIZE,color:"white",font:{fontSize:8},text:"TERM & CONDITIONS | 2014 COPYRIGHT",id:"tnc",bottom:"20"}),i.__views.mainWindow.add(i.__views.tnc),i.__views.centerWindow=require("xp.ui").createWindow({backgroundColor:"white",fullscreen:!0,id:"centerWindow",role:"centerWindow"}),i.__views.menu=Ti.UI.createView({layout:"vertical",id:"menu"}),i.__views.centerWindow.add(i.__views.menu),i.__views.__alloyId50=Ti.UI.createView({layout:"horizontal",height:"80",id:"__alloyId50"}),i.__views.menu.add(i.__views.__alloyId50),i.__views.__alloyId51=Alloy.createController("toggle",{id:"__alloyId51",__parentSymbol:i.__views.__alloyId50}),i.__views.__alloyId51.setParent(i.__views.__alloyId50),i.__views.__alloyId52=Ti.UI.createLabel({width:"75%",height:Ti.UI.SIZE,color:"black",font:{fontSize:28},text:"Index",textAlign:Ti.UI.TEXT_ALIGNMENT_CENTER,id:"__alloyId52"}),i.__views.__alloyId50.add(i.__views.__alloyId52),i.__views.__alloyId53=Ti.UI.createLabel({width:Ti.UI.SIZE,height:Ti.UI.SIZE,color:"#000",text:"I am center",id:"__alloyId53"}),i.__views.centerWindow.add(i.__views.__alloyId53),i.__views.drawer=Alloy.createWidget("nl.fokkezb.drawer","widget",{openDrawerGestureMode:"OPEN_MODE_ALL",closeDrawerGestureMode:"CLOSE_MODE_MARGIN",leftDrawerWidth:200,id:"drawer",children:[i.__views.mainWindow,i.__views.centerWindow]}),i.__views.drawer&&i.addTopLevelView(i.__views.drawer),o.destroy=function(){},_.extend(i,i.__views),i.drawer.open({navBarHidden:!0,fullscreen:!0});var l=require("api"),s=0;l.loadStoreLocator(),l.loadBrochure(),l.loadColour(),Alloy.Globals.Drawer=i.drawer,i.drawer.addEventListener("android:back",function(){if(1==s){var e=Alloy.createController("storeLocator").getView();Alloy.Globals.Drawer.setCenterWindow(e)}else{var e=Alloy.createController("home").getView();Alloy.Globals.Drawer.setCenterWindow(e)}}),r["$.__views.menuTable!click!doMenuClick"]&&i.__views.menuTable.addEventListener("click",e),_.extend(i,o)}var Alloy=require("alloy"),Backbone=Alloy.Backbone,_=Alloy._;module.exports=Controller;
=======
function Controller() {
    function doMenuClick(e) {
        switch (e.index) {
          case 0:
            navigation("home");
            break;

          case 1:
            navigation("diyPaint");
            break;

          case 2:
            navigation("colourPicker");
            break;

          case 3:
            navigation("colourSwatches");
            break;

          case 4:
            navigation("brochure");
            break;

          case 5:
            navigation("storeLocator");
            break;

          case 6:
            navigation("aboutUs");
        }
    }
    function navigation(target) {
        var win = Alloy.createController(target).getView();
        Alloy.Globals.Drawer.setCenterWindow(win);
        Alloy.Globals.Drawer.closeLeftWindow();
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "index";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    var __defers = {};
    $.__views.mainWindow = require("xp.ui").createWindow({
        backgroundColor: "black",
        fullscreen: "true",
        title: "test",
        role: "leftWindow",
        id: "mainWindow"
    });
    $.__views.logo = Ti.UI.createImageView({
        id: "logo",
        image: "/images/menu_logo.png",
        width: "150",
        top: "30"
    });
    $.__views.mainWindow.add($.__views.logo);
    var __alloyId19 = [];
    $.__views.__alloyId20 = Ti.UI.createTableViewRow({
        height: "50",
        id: "__alloyId20"
    });
    __alloyId19.push($.__views.__alloyId20);
    $.__views.__alloyId21 = Ti.UI.createLabel({
        width: Ti.UI.FILL,
        height: Ti.UI.SIZE,
        color: "white",
        text: "Home",
        left: "30",
        id: "__alloyId21"
    });
    $.__views.__alloyId20.add($.__views.__alloyId21);
    $.__views.__alloyId22 = Ti.UI.createTableViewRow({
        height: "50",
        id: "__alloyId22"
    });
    __alloyId19.push($.__views.__alloyId22);
    $.__views.__alloyId23 = Ti.UI.createLabel({
        width: Ti.UI.FILL,
        height: Ti.UI.SIZE,
        color: "white",
        text: "DIY Paint",
        left: "30",
        id: "__alloyId23"
    });
    $.__views.__alloyId22.add($.__views.__alloyId23);
    $.__views.__alloyId24 = Ti.UI.createTableViewRow({
        height: "50",
        id: "__alloyId24"
    });
    __alloyId19.push($.__views.__alloyId24);
    $.__views.__alloyId25 = Ti.UI.createLabel({
        width: Ti.UI.FILL,
        height: Ti.UI.SIZE,
        color: "white",
        text: "Colour Picker",
        left: "30",
        id: "__alloyId25"
    });
    $.__views.__alloyId24.add($.__views.__alloyId25);
    $.__views.__alloyId26 = Ti.UI.createTableViewRow({
        height: "50",
        id: "__alloyId26"
    });
    __alloyId19.push($.__views.__alloyId26);
    $.__views.__alloyId27 = Ti.UI.createLabel({
        width: Ti.UI.FILL,
        height: Ti.UI.SIZE,
        color: "white",
        text: "Colour Swatches",
        left: "30",
        id: "__alloyId27"
    });
    $.__views.__alloyId26.add($.__views.__alloyId27);
    $.__views.__alloyId28 = Ti.UI.createTableViewRow({
        height: "50",
        id: "__alloyId28"
    });
    __alloyId19.push($.__views.__alloyId28);
    $.__views.__alloyId29 = Ti.UI.createLabel({
        width: Ti.UI.FILL,
        height: Ti.UI.SIZE,
        color: "white",
        text: "Brochure",
        left: "30",
        id: "__alloyId29"
    });
    $.__views.__alloyId28.add($.__views.__alloyId29);
    $.__views.__alloyId30 = Ti.UI.createTableViewRow({
        height: "50",
        id: "__alloyId30"
    });
    __alloyId19.push($.__views.__alloyId30);
    $.__views.__alloyId31 = Ti.UI.createLabel({
        width: Ti.UI.FILL,
        height: Ti.UI.SIZE,
        color: "white",
        text: "Store Locator",
        left: "30",
        id: "__alloyId31"
    });
    $.__views.__alloyId30.add($.__views.__alloyId31);
    $.__views.__alloyId32 = Ti.UI.createTableViewRow({
        height: "50",
        id: "__alloyId32"
    });
    __alloyId19.push($.__views.__alloyId32);
    $.__views.__alloyId33 = Ti.UI.createLabel({
        width: Ti.UI.FILL,
        height: Ti.UI.SIZE,
        color: "white",
        text: "About Us",
        left: "30",
        id: "__alloyId33"
    });
    $.__views.__alloyId32.add($.__views.__alloyId33);
    $.__views.menuTable = Ti.UI.createTableView({
        data: __alloyId19,
        id: "menuTable",
        top: "100",
        separatorColor: "black"
    });
    $.__views.mainWindow.add($.__views.menuTable);
    doMenuClick ? $.__views.menuTable.addEventListener("click", doMenuClick) : __defers["$.__views.menuTable!click!doMenuClick"] = true;
    $.__views.tnc = Ti.UI.createLabel({
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        color: "white",
        font: {
            fontSize: 8
        },
        text: "TERM & CONDITIONS | 2014 COPYRIGHT",
        id: "tnc",
        bottom: "20"
    });
    $.__views.mainWindow.add($.__views.tnc);
    $.__views.centerWindow = require("xp.ui").createWindow({
        backgroundColor: "white",
        fullscreen: true,
        id: "centerWindow",
        role: "centerWindow"
    });
    $.__views.menu = Ti.UI.createView({
        layout: "vertical",
        id: "menu"
    });
    $.__views.centerWindow.add($.__views.menu);
    $.__views.__alloyId34 = Alloy.createController("toggle", {
        id: "__alloyId34",
        __parentSymbol: $.__views.menu
    });
    $.__views.__alloyId34.setParent($.__views.menu);
    $.__views.__alloyId35 = Ti.UI.createLabel({
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        color: "#000",
        text: "I am center",
        id: "__alloyId35"
    });
    $.__views.centerWindow.add($.__views.__alloyId35);
    $.__views.drawer = Alloy.createWidget("nl.fokkezb.drawer", "widget", {
        openDrawerGestureMode: "OPEN_MODE_ALL",
        closeDrawerGestureMode: "CLOSE_MODE_MARGIN",
        leftDrawerWidth: 200,
        id: "drawer",
        children: [ $.__views.mainWindow, $.__views.centerWindow ]
    });
    $.__views.drawer && $.addTopLevelView($.__views.drawer);
    exports.destroy = function() {};
    _.extend($, $.__views);
    $.drawer.open({
        navBarHidden: true,
        fullscreen: true
    });
    var API = require("api");
    var flag = 0;
    API.loadStoreLocator();
    API.loadBrochure();
    API.loadColour();
    Alloy.Globals.Drawer = $.drawer;
    $.drawer.addEventListener("android:back", function() {
        if (1 == flag) {
            var nav = Alloy.createController("storeLocator").getView();
            Alloy.Globals.Drawer.setCenterWindow(nav);
        } else {
            var nav = Alloy.createController("home").getView();
            Alloy.Globals.Drawer.setCenterWindow(nav);
        }
    });
    var module = require("dk.napp.drawer");
    Alloy.Globals.Drawer.setOpenDrawerGestureMode(module.OPEN_MODE_NONE);
    __defers["$.__views.menuTable!click!doMenuClick"] && $.__views.menuTable.addEventListener("click", doMenuClick);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;
>>>>>>> FETCH_HEAD
