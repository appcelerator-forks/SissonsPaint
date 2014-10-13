<<<<<<< HEAD
function __processArg(e,t){var i=null;return e&&(i=e[t]||null,delete e[t]),i}function Controller(){require("alloy/controllers/BaseController").apply(this,Array.prototype.slice.call(arguments)),this.__controllerPath="colourPicker",arguments[0]&&(__processArg(arguments[0],"__parentSymbol"),__processArg(arguments[0],"$model"),__processArg(arguments[0],"__itemTemplate"));var e=this,t={};e.__views.colourPicker=Ti.UI.createView({backgroundColor:"white",layout:"vertical",id:"colourPicker"}),e.__views.colourPicker&&e.addTopLevelView(e.__views.colourPicker),e.__views.__alloyId19=Ti.UI.createView({layout:"horizontal",height:"80",id:"__alloyId19"}),e.__views.colourPicker.add(e.__views.__alloyId19),e.__views.__alloyId20=Alloy.createController("toggle",{id:"__alloyId20",__parentSymbol:e.__views.__alloyId19}),e.__views.__alloyId20.setParent(e.__views.__alloyId19),e.__views.__alloyId21=Ti.UI.createLabel({width:"75%",height:Ti.UI.SIZE,color:"black",font:{fontSize:28},text:"Colour Picker",textAlign:Ti.UI.TEXT_ALIGNMENT_CENTER,id:"__alloyId21"}),e.__views.__alloyId19.add(e.__views.__alloyId21),e.__views.__alloyId22=Ti.UI.createLabel({width:Ti.UI.SIZE,height:Ti.UI.SIZE,color:"#000",text:"This is Colour Picker",id:"__alloyId22"}),e.__views.colourPicker.add(e.__views.__alloyId22),t.destroy=function(){},_.extend(e,e.__views),arguments[0]||{};var i={sharer:{chooser:function(){var e=Ti.Android.createIntent({action:Ti.Android.ACTION_SEND,type:"image/*"});e.putExtra(Ti.Android.EXTRA_TEXT,"itten kontent"),Ti.Android.currentActivity.startActivity(e)}}},r="#sissons_paint",o=Ti.UI.createButton({title:"Media Share"});o.addEventListener("click",i.sharer.chooser.bind(null,r)),e.colourPicker.add(o),_.extend(e,t)}var Alloy=require("alloy"),Backbone=Alloy.Backbone,_=Alloy._;module.exports=Controller;
=======
function Controller() {
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "colourPicker";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.colourPicker = Ti.UI.createView({
        backgroundColor: "white",
        id: "colourPicker"
    });
    $.__views.colourPicker && $.addTopLevelView($.__views.colourPicker);
    $.__views.__alloyId13 = Ti.UI.createLabel({
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        color: "#000",
        text: "This is Colour Picker",
        id: "__alloyId13"
    });
    $.__views.colourPicker.add($.__views.__alloyId13);
    exports.destroy = function() {};
    _.extend($, $.__views);
    arguments[0] || {};
    var app = {
        sharer: {
            chooser: function() {
                var intShare = Ti.Android.createIntent({
                    action: Ti.Android.ACTION_SEND,
                    type: "image/*"
                });
                intShare.putExtra(Ti.Android.EXTRA_TEXT, "itten kontent");
                Ti.Android.currentActivity.startActivity(intShare);
            }
        }
    };
    var MESSAGE = "#sissons_paint";
    var btnShareChooser = Ti.UI.createButton({
        title: "Media Share"
    });
    btnShareChooser.addEventListener("click", app.sharer.chooser.bind(null, MESSAGE));
    $.colourPicker.add(btnShareChooser);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;
>>>>>>> FETCH_HEAD
