<<<<<<< HEAD
function __processArg(e,t){var i=null;return e&&(i=e[t]||null,delete e[t]),i}function Controller(){require("alloy/controllers/BaseController").apply(this,Array.prototype.slice.call(arguments)),this.__controllerPath="home",arguments[0]&&(__processArg(arguments[0],"__parentSymbol"),__processArg(arguments[0],"$model"),__processArg(arguments[0],"__itemTemplate"));var e=this,t={};e.__views.home=Ti.UI.createView({backgroundColor:"white",id:"home"}),e.__views.home&&e.addTopLevelView(e.__views.home),e.__views.__alloyId31=Ti.UI.createView({layout:"vertical",id:"__alloyId31"}),e.__views.home.add(e.__views.__alloyId31),e.__views.__alloyId32=Ti.UI.createView({layout:"horizontal",height:"80",id:"__alloyId32"}),e.__views.__alloyId31.add(e.__views.__alloyId32),e.__views.__alloyId33=Alloy.createController("toggle",{id:"__alloyId33",__parentSymbol:e.__views.__alloyId32}),e.__views.__alloyId33.setParent(e.__views.__alloyId32),e.__views.__alloyId34=Ti.UI.createLabel({width:"75%",height:Ti.UI.SIZE,color:"black",font:{fontSize:28},text:"Home",textAlign:Ti.UI.TEXT_ALIGNMENT_CENTER,id:"__alloyId34"}),e.__views.__alloyId32.add(e.__views.__alloyId34),t.destroy=function(){},_.extend(e,e.__views),arguments[0]||{},_.extend(e,t)}var Alloy=require("alloy"),Backbone=Alloy.Backbone,_=Alloy._;module.exports=Controller;
=======
function Controller() {
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "home";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    var __defers = {};
    $.__views.home = Ti.UI.createView({
        backgroundColor: "white",
        id: "home"
    });
    $.__views.home && $.addTopLevelView($.__views.home);
    $.__views.__alloyId17 = Ti.UI.createView({
        left: 3,
        top: 48,
        width: "20%",
        height: 50,
        borderWidth: 1,
        backgroundColor: "white",
        layout: "vertical",
        id: "__alloyId17"
    });
    $.__views.home.add($.__views.__alloyId17);
    $.__views.__alloyId18 = Ti.UI.createButton({
        title: "Menu",
        id: "__alloyId18"
    });
    $.__views.__alloyId17.add($.__views.__alloyId18);
    toggle ? $.__views.__alloyId18.addEventListener("click", toggle) : __defers["$.__views.__alloyId18!click!toggle"] = true;
    exports.destroy = function() {};
    _.extend($, $.__views);
    arguments[0] || {};
    __defers["$.__views.__alloyId18!click!toggle"] && $.__views.__alloyId18.addEventListener("click", toggle);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;
>>>>>>> FETCH_HEAD
