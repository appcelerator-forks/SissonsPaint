function __processArg(e,t){var i=null;return e&&(i=e[t]||null,delete e[t]),i}function Controller(){require("alloy/controllers/BaseController").apply(this,Array.prototype.slice.call(arguments)),this.__controllerPath="home",arguments[0]&&(__processArg(arguments[0],"__parentSymbol"),__processArg(arguments[0],"$model"),__processArg(arguments[0],"__itemTemplate"));var e=this,t={};e.__views.home=Ti.UI.createView({backgroundColor:"white",id:"home"}),e.__views.home&&e.addTopLevelView(e.__views.home),e.__views.__alloyId103=Ti.UI.createView({layout:"vertical",id:"__alloyId103"}),e.__views.home.add(e.__views.__alloyId103),e.__views.__alloyId104=Ti.UI.createView({layout:"horizontal",height:"80",id:"__alloyId104"}),e.__views.__alloyId103.add(e.__views.__alloyId104),e.__views.__alloyId105=Alloy.createController("toggle",{id:"__alloyId105",__parentSymbol:e.__views.__alloyId104}),e.__views.__alloyId105.setParent(e.__views.__alloyId104),e.__views.__alloyId106=Ti.UI.createLabel({width:"75%",height:Ti.UI.SIZE,color:"black",font:{fontSize:28},text:"Home",textAlign:Ti.UI.TEXT_ALIGNMENT_CENTER,id:"__alloyId106"}),e.__views.__alloyId104.add(e.__views.__alloyId106),t.destroy=function(){},_.extend(e,e.__views),arguments[0]||{},_.extend(e,t)}var Alloy=require("alloy"),Backbone=Alloy.Backbone,_=Alloy._;module.exports=Controller;