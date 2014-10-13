<<<<<<< HEAD
function __processArg(e,t){var i=null;return e&&(i=e[t]||null,delete e[t]),i}function Controller(){require("alloy/controllers/BaseController").apply(this,Array.prototype.slice.call(arguments)),this.__controllerPath="colourSwatches",arguments[0]&&(__processArg(arguments[0],"__parentSymbol"),__processArg(arguments[0],"$model"),__processArg(arguments[0],"__itemTemplate"));var e=this,t={};e.__views.colourSwatches=Ti.UI.createView({backgroundColor:"white",layout:"vertical",id:"colourSwatches"}),e.__views.colourSwatches&&e.addTopLevelView(e.__views.colourSwatches),e.__views.__alloyId23=Ti.UI.createView({layout:"horizontal",height:"80",id:"__alloyId23"}),e.__views.colourSwatches.add(e.__views.__alloyId23),e.__views.__alloyId24=Alloy.createController("toggle",{id:"__alloyId24",__parentSymbol:e.__views.__alloyId23}),e.__views.__alloyId24.setParent(e.__views.__alloyId23),e.__views.__alloyId25=Ti.UI.createLabel({width:"75%",height:Ti.UI.SIZE,color:"black",font:{fontSize:28},text:"Colour Swatches",textAlign:Ti.UI.TEXT_ALIGNMENT_CENTER,id:"__alloyId25"}),e.__views.__alloyId23.add(e.__views.__alloyId25),e.__views.__alloyId26=Ti.UI.createLabel({width:Ti.UI.SIZE,height:Ti.UI.SIZE,color:"#000",text:"This is Colour Swatches page",id:"__alloyId26"}),e.__views.colourSwatches.add(e.__views.__alloyId26),t.destroy=function(){},_.extend(e,e.__views),arguments[0]||{},_.extend(e,t)}var Alloy=require("alloy"),Backbone=Alloy.Backbone,_=Alloy._;module.exports=Controller;
=======
function Controller() {
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "colourSwatches";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.colourSwatches = Ti.UI.createView({
        backgroundColor: "white",
        id: "colourSwatches"
    });
    $.__views.colourSwatches && $.addTopLevelView($.__views.colourSwatches);
    $.__views.__alloyId14 = Ti.UI.createLabel({
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        color: "#000",
        text: "COLOR CATEGORIES",
        id: "__alloyId14"
    });
    $.__views.colourSwatches.add($.__views.__alloyId14);
    $.__views.__alloyId15 = Ti.UI.createLabel({
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        color: "#000",
        text: "ECOGLOS is base on long oilmodifield alkyd. It is fungus resistant high gloss architectural paint that\n			decorates and protects the interior and exterior of building. It has excellent coverage, good application and flow\n			properties. With the proper primer and undercoat, EcoGloss will dry to an attractive smooth finish\n			on wooden and metal substrates.",
        id: "__alloyId15"
    });
    $.__views.colourSwatches.add($.__views.__alloyId15);
    exports.destroy = function() {};
    _.extend($, $.__views);
    arguments[0] || {};
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;
>>>>>>> FETCH_HEAD
