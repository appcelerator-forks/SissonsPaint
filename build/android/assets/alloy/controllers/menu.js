<<<<<<< HEAD
function __processArg(e,t){var i=null;return e&&(i=e[t]||null,delete e[t]),i}function Controller(){function e(e){switch(e.index){case 0:t("home");break;case 1:t("diyPaint");break;case 2:t("colourPicker");break;case 3:t("colourSwatches");break;case 4:t("brochure");break;case 5:t("storeLocator");break;case 6:t("aboutUs")}}function t(e){var t=Alloy.createController(e).getView();Alloy.CFG.contentView.add(t),Alloy.CFG.drawer.toggleLeftWindow()}require("alloy/controllers/BaseController").apply(this,Array.prototype.slice.call(arguments)),this.__controllerPath="menu",arguments[0]&&(__processArg(arguments[0],"__parentSymbol"),__processArg(arguments[0],"$model"),__processArg(arguments[0],"__itemTemplate"));var i=this,o={},r={},l=[];i.__views.__alloyId56=Ti.UI.createTableViewRow({height:"50",id:"__alloyId56"}),l.push(i.__views.__alloyId56),i.__views.__alloyId57=Ti.UI.createLabel({text:"Home",width:Ti.UI.FILL,left:"10",id:"__alloyId57"}),i.__views.__alloyId56.add(i.__views.__alloyId57),i.__views.__alloyId58=Ti.UI.createTableViewRow({height:"50",id:"__alloyId58"}),l.push(i.__views.__alloyId58),i.__views.__alloyId59=Ti.UI.createLabel({text:"DIY Paint",width:Ti.UI.FILL,left:"10",id:"__alloyId59"}),i.__views.__alloyId58.add(i.__views.__alloyId59),i.__views.__alloyId60=Ti.UI.createTableViewRow({height:"50",id:"__alloyId60"}),l.push(i.__views.__alloyId60),i.__views.__alloyId61=Ti.UI.createLabel({text:"Colour Picker",width:Ti.UI.FILL,left:"10",id:"__alloyId61"}),i.__views.__alloyId60.add(i.__views.__alloyId61),i.__views.__alloyId62=Ti.UI.createTableViewRow({height:"50",id:"__alloyId62"}),l.push(i.__views.__alloyId62),i.__views.__alloyId63=Ti.UI.createLabel({text:"Colour Swatches",width:Ti.UI.FILL,left:"10",id:"__alloyId63"}),i.__views.__alloyId62.add(i.__views.__alloyId63),i.__views.__alloyId64=Ti.UI.createTableViewRow({height:"50",id:"__alloyId64"}),l.push(i.__views.__alloyId64),i.__views.__alloyId65=Ti.UI.createLabel({text:"Brochure",width:Ti.UI.FILL,left:"10",id:"__alloyId65"}),i.__views.__alloyId64.add(i.__views.__alloyId65),i.__views.__alloyId66=Ti.UI.createTableViewRow({height:"50",id:"__alloyId66"}),l.push(i.__views.__alloyId66),i.__views.__alloyId67=Ti.UI.createLabel({text:"Store Locator",width:Ti.UI.FILL,left:"10",id:"__alloyId67"}),i.__views.__alloyId66.add(i.__views.__alloyId67),i.__views.__alloyId68=Ti.UI.createTableViewRow({height:"50",id:"__alloyId68"}),l.push(i.__views.__alloyId68),i.__views.__alloyId69=Ti.UI.createLabel({text:"About Us",width:Ti.UI.FILL,left:"10",id:"__alloyId69"}),i.__views.__alloyId68.add(i.__views.__alloyId69),i.__views.menuTable=Ti.UI.createTableView({data:l,id:"menuTable",backgroundColor:"#3F3D3D"}),i.__views.menuTable&&i.addTopLevelView(i.__views.menuTable),e?i.__views.menuTable.addEventListener("click",e):r["$.__views.menuTable!click!doMenuClick"]=!0,o.destroy=function(){},_.extend(i,i.__views),arguments[0]||{},r["$.__views.menuTable!click!doMenuClick"]&&i.__views.menuTable.addEventListener("click",e),_.extend(i,o)}var Alloy=require("alloy"),Backbone=Alloy.Backbone,_=Alloy._;module.exports=Controller;
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
        var nav = Alloy.createController(target).getView();
        Alloy.CFG.contentView.add(nav);
        Alloy.CFG.drawer.toggleLeftWindow();
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "menu";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    var __defers = {};
    var __alloyId37 = [];
    $.__views.__alloyId38 = Ti.UI.createTableViewRow({
        height: "50",
        id: "__alloyId38"
    });
    __alloyId37.push($.__views.__alloyId38);
    $.__views.__alloyId39 = Ti.UI.createLabel({
        text: "Home",
        width: Ti.UI.FILL,
        left: "10",
        id: "__alloyId39"
    });
    $.__views.__alloyId38.add($.__views.__alloyId39);
    $.__views.__alloyId40 = Ti.UI.createTableViewRow({
        height: "50",
        id: "__alloyId40"
    });
    __alloyId37.push($.__views.__alloyId40);
    $.__views.__alloyId41 = Ti.UI.createLabel({
        text: "DIY Paint",
        width: Ti.UI.FILL,
        left: "10",
        id: "__alloyId41"
    });
    $.__views.__alloyId40.add($.__views.__alloyId41);
    $.__views.__alloyId42 = Ti.UI.createTableViewRow({
        height: "50",
        id: "__alloyId42"
    });
    __alloyId37.push($.__views.__alloyId42);
    $.__views.__alloyId43 = Ti.UI.createLabel({
        text: "Colour Picker",
        width: Ti.UI.FILL,
        left: "10",
        id: "__alloyId43"
    });
    $.__views.__alloyId42.add($.__views.__alloyId43);
    $.__views.__alloyId44 = Ti.UI.createTableViewRow({
        height: "50",
        id: "__alloyId44"
    });
    __alloyId37.push($.__views.__alloyId44);
    $.__views.__alloyId45 = Ti.UI.createLabel({
        text: "Colour Swatches",
        width: Ti.UI.FILL,
        left: "10",
        id: "__alloyId45"
    });
    $.__views.__alloyId44.add($.__views.__alloyId45);
    $.__views.__alloyId46 = Ti.UI.createTableViewRow({
        height: "50",
        id: "__alloyId46"
    });
    __alloyId37.push($.__views.__alloyId46);
    $.__views.__alloyId47 = Ti.UI.createLabel({
        text: "Brochure",
        width: Ti.UI.FILL,
        left: "10",
        id: "__alloyId47"
    });
    $.__views.__alloyId46.add($.__views.__alloyId47);
    $.__views.__alloyId48 = Ti.UI.createTableViewRow({
        height: "50",
        id: "__alloyId48"
    });
    __alloyId37.push($.__views.__alloyId48);
    $.__views.__alloyId49 = Ti.UI.createLabel({
        text: "Store Locator",
        width: Ti.UI.FILL,
        left: "10",
        id: "__alloyId49"
    });
    $.__views.__alloyId48.add($.__views.__alloyId49);
    $.__views.__alloyId50 = Ti.UI.createTableViewRow({
        height: "50",
        id: "__alloyId50"
    });
    __alloyId37.push($.__views.__alloyId50);
    $.__views.__alloyId51 = Ti.UI.createLabel({
        text: "About Us",
        width: Ti.UI.FILL,
        left: "10",
        id: "__alloyId51"
    });
    $.__views.__alloyId50.add($.__views.__alloyId51);
    $.__views.menuTable = Ti.UI.createTableView({
        data: __alloyId37,
        id: "menuTable",
        backgroundColor: "#3F3D3D"
    });
    $.__views.menuTable && $.addTopLevelView($.__views.menuTable);
    doMenuClick ? $.__views.menuTable.addEventListener("click", doMenuClick) : __defers["$.__views.menuTable!click!doMenuClick"] = true;
    exports.destroy = function() {};
    _.extend($, $.__views);
    arguments[0] || {};
    __defers["$.__views.menuTable!click!doMenuClick"] && $.__views.menuTable.addEventListener("click", doMenuClick);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;
>>>>>>> FETCH_HEAD
