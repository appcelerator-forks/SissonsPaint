<<<<<<< HEAD
function __processArg(e,t){var i=null;return e&&(i=e[t]||null,delete e[t]),i}function Controller(){require("alloy/controllers/BaseController").apply(this,Array.prototype.slice.call(arguments)),this.__controllerPath="main",arguments[0]&&(__processArg(arguments[0],"__parentSymbol"),__processArg(arguments[0],"$model"),__processArg(arguments[0],"__itemTemplate"));var e=this,t={};e.__views.main=Ti.UI.createView({backgroundColor:"white",id:"main"}),e.__views.main&&e.addTopLevelView(e.__views.main),e.__views.__alloyId77=Ti.UI.createLabel({width:Ti.UI.SIZE,height:Ti.UI.SIZE,color:"#000",text:"THIS IS MAIN",id:"__alloyId77"}),e.__views.main.add(e.__views.__alloyId77),t.destroy=function(){},_.extend(e,e.__views),arguments[0]||{},_.extend(e,t)}var Alloy=require("alloy"),Backbone=Alloy.Backbone,_=Alloy._;module.exports=Controller;
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
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "main";
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
    $.__views.main = Ti.UI.createView({
        backgroundColor: "white",
        id: "main"
    });
    $.__views.main && $.addTopLevelView($.__views.main);
<<<<<<< HEAD
    $.__views.__alloyId77 = Ti.UI.createLabel({
=======
<<<<<<< HEAD
    $.__views.__alloyId73 = Ti.UI.createLabel({
=======
<<<<<<< HEAD
    $.__views.__alloyId77 = Ti.UI.createLabel({
=======
<<<<<<< HEAD
    $.__views.__alloyId71 = Ti.UI.createLabel({
=======
<<<<<<< HEAD
    $.__views.__alloyId77 = Ti.UI.createLabel({
=======
<<<<<<< HEAD
    $.__views.__alloyId70 = Ti.UI.createLabel({
=======
<<<<<<< HEAD
    $.__views.__alloyId69 = Ti.UI.createLabel({
=======
    $.__views.__alloyId72 = Ti.UI.createLabel({
>>>>>>> FETCH_HEAD
>>>>>>> FETCH_HEAD
>>>>>>> FETCH_HEAD
>>>>>>> FETCH_HEAD
>>>>>>> FETCH_HEAD
>>>>>>> FETCH_HEAD
>>>>>>> FETCH_HEAD
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        color: "#000",
        text: "THIS IS MAIN",
<<<<<<< HEAD
        id: "__alloyId77"
    });
    $.__views.main.add($.__views.__alloyId77);
=======
<<<<<<< HEAD
        id: "__alloyId73"
    });
    $.__views.main.add($.__views.__alloyId73);
=======
<<<<<<< HEAD
        id: "__alloyId77"
    });
    $.__views.main.add($.__views.__alloyId77);
=======
<<<<<<< HEAD
        id: "__alloyId71"
    });
    $.__views.main.add($.__views.__alloyId71);
=======
<<<<<<< HEAD
        id: "__alloyId77"
    });
    $.__views.main.add($.__views.__alloyId77);
=======
<<<<<<< HEAD
        id: "__alloyId70"
    });
    $.__views.main.add($.__views.__alloyId70);
=======
<<<<<<< HEAD
        id: "__alloyId69"
    });
    $.__views.main.add($.__views.__alloyId69);
=======
        id: "__alloyId72"
    });
    $.__views.main.add($.__views.__alloyId72);
>>>>>>> FETCH_HEAD
>>>>>>> FETCH_HEAD
>>>>>>> FETCH_HEAD
>>>>>>> FETCH_HEAD
>>>>>>> FETCH_HEAD
>>>>>>> FETCH_HEAD
>>>>>>> FETCH_HEAD
    exports.destroy = function() {};
    _.extend($, $.__views);
    arguments[0] || {};
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;
>>>>>>> FETCH_HEAD
