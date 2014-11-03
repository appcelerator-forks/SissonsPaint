<<<<<<< HEAD
function __processArg(e,t){var i=null;return e&&(i=e[t]||null,delete e[t]),i}function Controller(){function e(){console.log(w.length);for(var e=Titanium.UI.createView({layout:"horizontal",bottom:10,height:40,width:"100%"}),t=0;t<w.length;t++){console.log(w[t]);for(var i=Math.floor(Math.random()*w.length),a=u.getCategoryColourByCategory(w[i].id),l=0;l<a.length;l++){var n=I.getColourById(a[l].colour_id),s=r.UI.create("View",{backgroundColor:"rgb("+n.rgb+")",width:"40",height:"40",left:"5",right:"5"}),_=u.getCateByColourId(n.id),d=v.getCategoryById(_.cate_id);o(s,n,d),console.log("listColour: "+n.rgb),e.add(s)}}r.recommendView.add(e)}function t(){console.log(g.length);for(var e=Titanium.UI.createView({layout:"horizontal",bottom:10,height:40,width:"100%"}),t=Titanium.UI.createView({layout:"horizontal",height:40,width:"100%"}),i=0;i<g.length;i++){console.log(g[i]);var a=r.UI.create("View",{backgroundColor:"rgb("+g[i].rgb+")",width:"40",height:"40",left:"5",right:"5"});i%2==1?e.add(a):t.add(a);var l=u.getCateByColourId(g[i].id),n=v.getCategoryById(l.cate_id);o(a,g[i],n)}r.scrollView.add(e),r.scrollView.add(t)}function i(){var e=Ti.Filesystem.getFile("file:///storage/sdcard0/Pictures/Survival Wallpaper/1380785291867.jpg"),t=e.read(),i={message:"Sissons Paints Omnicolor",picture:t};l.requestWithGraphPath("me/photos",i,"POST",function(e){alert(e.success&&e.result?"Success : "+e.result:e.error?e.error:"cancel")})}function o(e,t,i){e.addEventListener("click",function(){Ti.App.Properties.setString("from","colourPicker");var e=Alloy.createController("colourDetails",{colour_details:t,details:i}).getView();Alloy.Globals.Drawer.setCenterWindow(e)})}require("alloy/controllers/BaseController").apply(this,Array.prototype.slice.call(arguments)),this.__controllerPath="colourPicker",arguments[0]&&(__processArg(arguments[0],"__parentSymbol"),__processArg(arguments[0],"$model"),__processArg(arguments[0],"__itemTemplate"));var r=this,a={};r.__views.mainView=Ti.UI.createView({backgroundColor:"white",id:"mainView",layout:"vertical"}),r.__views.mainView&&r.addTopLevelView(r.__views.mainView),r.__views.toggle=Ti.UI.createView({layout:"horizontal",id:"toggle",height:"80"}),r.__views.mainView.add(r.__views.toggle),r.__views.__alloyId41=Alloy.createController("toggle",{id:"__alloyId41",__parentSymbol:r.__views.toggle}),r.__views.__alloyId41.setParent(r.__views.toggle),r.__views.__alloyId42=Ti.UI.createLabel({font:{fontSize:22},text:"Colour Picker",color:"black",width:"75%",textAlign:Ti.UI.TEXT_ALIGNMENT_CENTER,id:"__alloyId42"}),r.__views.toggle.add(r.__views.__alloyId42),r.__views.canvas=Ti.UI.createWebView({id:"canvas",url:"/html/colour_picker.html",height:"40%",enableZoomControls:"false",overScrollMode:Titanium.UI.Android.OVER_SCROLL_NEVER}),r.__views.mainView.add(r.__views.canvas),r.__views.__alloyId43=Ti.UI.createView({height:"50%",bottom:"0",id:"__alloyId43"}),r.__views.mainView.add(r.__views.__alloyId43),r.__views.bottomColorBar=Ti.UI.createView({id:"bottomColorBar",layout:"vertical"}),r.__views.__alloyId43.add(r.__views.bottomColorBar),r.__views.__alloyId44=Ti.UI.createImageView({image:"/images/scroll_up.png",backgroundColor:"transparent",width:Titanium.UI.FILL,bottom:"10",id:"__alloyId44"}),r.__views.bottomColorBar.add(r.__views.__alloyId44),r.__views.__alloyId45=Ti.UI.createLabel({text:"RECOMMEND COLOURS",color:"black",width:"90%",textAlign:Ti.UI.TEXT_ALIGNMENT_LEFT,bottom:"10",id:"__alloyId45"}),r.__views.bottomColorBar.add(r.__views.__alloyId45),r.__views.recommendView=Ti.UI.createScrollView({id:"recommendView",backgroundColor:"white",layout:"horizontal",scrollType:"horizontal",height:"50",overScrollMode:Titanium.UI.Android.OVER_SCROLL_NEVER}),r.__views.bottomColorBar.add(r.__views.recommendView),r.__views.__alloyId46=Ti.UI.createImageView({image:"/images/scroll_up.png",backgroundColor:"transparent",width:Titanium.UI.FILL,bottom:"10",id:"__alloyId46"}),r.__views.bottomColorBar.add(r.__views.__alloyId46),r.__views.__alloyId47=Ti.UI.createLabel({text:"COLOUR LIBRARY",color:"black",width:"90%",textAlign:Ti.UI.TEXT_ALIGNMENT_LEFT,bottom:"10",id:"__alloyId47"}),r.__views.bottomColorBar.add(r.__views.__alloyId47),r.__views.scrollView=Ti.UI.createScrollView({id:"scrollView",backgroundColor:"white",layout:"vertical",scrollType:"horizontal",height:"100",overScrollMode:Titanium.UI.Android.OVER_SCROLL_NEVER}),r.__views.bottomColorBar.add(r.__views.scrollView),a.destroy=function(){},_.extend(r,r.__views),arguments[0]||{};var l=require("facebook");l.appid=752094718209236;var n=Ti.Platform.displayCaps.platformHeight,s=Ti.Platform.displayCaps.platformWidth,d=PixelsToDPUnits(Ti.Platform.displayCaps.platformHeight),c=r.toggle.getHeight(),h=d-c,u=Alloy.createCollection("category_colour"),I=Alloy.createCollection("colour"),g=I.getClosestColourList("100","100","100"),v=Alloy.createCollection("category"),w=v.getCategoryListByType(1);r.mainView.setHeight(n);var y=Titanium.UI.createOptionDialog({title:"Choose an image source...",options:["Camera","Photo Gallery","Cancel"],cancel:2});r.canvas.addEventListener("load",function(){Ti.App.fireEvent("web:initCanvasSize",{height:h,width:s})}),y.addEventListener("click",function(e){0==e.index?Titanium.Media.showCamera({success:function(e){var t=e.media;e.mediaType==Ti.Media.MEDIA_TYPE_PHOTO&&Ti.App.Properties.setString("colour_picker_image",t.nativePath)},cancel:function(){},error:function(e){var t=Titanium.UI.createAlertDialog({title:"Camera"});t.setMessage(e.code==Titanium.Media.NO_CAMERA?"Device does not have camera":"Unexpected error: "+e.code),t.show()},allowImageEditing:!0,saveToPhotoGallery:!0}):1==e.index&&Titanium.Media.openPhotoGallery({success:function(e){var t=e.media;e.mediaType==Ti.Media.MEDIA_TYPE_PHOTO&&(console.log(t.nativePath),Ti.App.Properties.setString("colour_picker_image",t.nativePath),Ti.App.fireEvent("web:loadImage",{image:t.nativePath}))},cancel:function(){}})}),1==Ti.App.Properties.getString("back")?Ti.App.Properties.setString("back",0):y.show(),e(),t();var p={sharer:{chooser:function(){l.loggedIn?i():(l.permissions=["publish_actions"],l.addEventListener("login",function(e){e.success&&shareFaceboo()}),l.authorize())}}},m="#sissons_paint",T=Ti.UI.createButton({title:"Media Share"});T.addEventListener("click",p.sharer.chooser.bind(null,m)),r.recommendView.add(T),_.extend(r,a)}var Alloy=require("alloy"),Backbone=Alloy.Backbone,_=Alloy._;module.exports=Controller;
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
    function generateRecommended() {
        console.log(recommended.length);
        var recommendedRow = Titanium.UI.createView({
            layout: "horizontal",
            bottom: 10,
            height: 40,
            width: "100%"
        });
        for (var i = 0; i < recommended.length; i++) {
            console.log(recommended[i]);
            var random = Math.floor(Math.random() * recommended.length);
            var list_colours = category_colour_lib.getCategoryColourByCategory(recommended[random].id);
            for (var j = 0; j < list_colours.length; j++) {
                var colour_details = colour_lib.getColourById(list_colours[j].colour_id);
                var colours = $.UI.create("View", {
                    backgroundColor: "rgb(" + colour_details.rgb + ")",
                    width: "40",
                    height: "40",
                    left: "5",
                    right: "5"
                });
                var cat_colour = category_colour_lib.getCateByColourId(colour_details.id);
                var cat_details = library.getCategoryById(cat_colour.cate_id);
                createColorEvent(colours, colour_details, cat_details);
                console.log("listColour: " + colour_details.rgb);
                recommendedRow.add(colours);
            }
        }
        $.recommendView.add(recommendedRow);
    }
    function generateColour() {
        console.log(details.length);
        var topRow = Titanium.UI.createView({
            layout: "horizontal",
            bottom: 10,
            height: 40,
            width: "100%"
        });
        var bottomRow = Titanium.UI.createView({
            layout: "horizontal",
            height: 40,
            width: "100%"
        });
        for (var i = 0; i < details.length; i++) {
            console.log(details[i]);
            var colours = $.UI.create("View", {
                backgroundColor: "rgb(" + details[i].rgb + ")",
                width: "40",
                height: "40",
                left: "5",
                right: "5"
            });
            i % 2 == 1 ? topRow.add(colours) : bottomRow.add(colours);
            var cat_colour = category_colour_lib.getCateByColourId(details[i].id);
            var cat_details = library.getCategoryById(cat_colour.cate_id);
            createColorEvent(colours, details[i], cat_details);
        }
        $.scrollView.add(topRow);
        $.scrollView.add(bottomRow);
    }
    function shareFacebook() {
        var f = Ti.Filesystem.getFile("file:///storage/sdcard0/Pictures/Survival Wallpaper/1380785291867.jpg");
        var blob = f.read();
        var data = {
            message: "Sissons Paints Omnicolor",
            picture: blob
        };
        fb.requestWithGraphPath("me/photos", data, "POST", function(e) {
            alert(e.success && e.result ? "Success : " + e.result : e.error ? e.error : "cancel");
        });
    }
    function createColorEvent(colours, colour_details, details) {
        colours.addEventListener("click", function() {
            Ti.App.Properties.setString("from", "colourPicker");
            var nav = Alloy.createController("colourDetails", {
                colour_details: colour_details,
                details: details
            }).getView();
            Alloy.Globals.Drawer.setCenterWindow(nav);
        });
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "colourPicker";
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
    $.__views.colourPicker = Ti.UI.createView({
        backgroundColor: "white",
        layout: "vertical",
        id: "colourPicker"
    });
    $.__views.colourPicker && $.addTopLevelView($.__views.colourPicker);
    $.__views.toggle = Ti.UI.createView({
        layout: "horizontal",
        id: "toggle",
        height: "80"
    });
    $.__views.colourPicker.add($.__views.toggle);
    $.__views.__alloyId41 = Alloy.createController("toggle", {
        id: "__alloyId41",
        __parentSymbol: $.__views.toggle
    });
    $.__views.__alloyId41.setParent($.__views.toggle);
    $.__views.__alloyId42 = Ti.UI.createLabel({
        font: {
            fontSize: 22
        },
        text: "Colour Picker",
        color: "black",
        width: "75%",
        textAlign: Ti.UI.TEXT_ALIGNMENT_CENTER,
        id: "__alloyId42"
    });
    $.__views.toggle.add($.__views.__alloyId42);
    $.__views.canvas = Ti.UI.createWebView({
        id: "canvas",
        url: "/html/colour_picker.html",
        height: "40%",
        enableZoomControls: "false",
        overScrollMode: Titanium.UI.Android.OVER_SCROLL_NEVER
    });
    $.__views.colourPicker.add($.__views.canvas);
    $.__views.__alloyId43 = Ti.UI.createView({
        height: "50%",
        bottom: "0",
        id: "__alloyId43"
    });
    $.__views.colourPicker.add($.__views.__alloyId43);
    $.__views.bottomColorBar = Ti.UI.createView({
        id: "bottomColorBar",
        layout: "vertical"
    });
    $.__views.__alloyId43.add($.__views.bottomColorBar);
    $.__views.__alloyId44 = Ti.UI.createImageView({
        image: "/images/scroll_up.png",
        backgroundColor: "transparent",
        width: Titanium.UI.FILL,
        bottom: "10",
        id: "__alloyId44"
    });
    $.__views.bottomColorBar.add($.__views.__alloyId44);
    $.__views.__alloyId45 = Ti.UI.createLabel({
        text: "RECOMMEND COLOURS",
        color: "black",
        width: "90%",
        textAlign: Ti.UI.TEXT_ALIGNMENT_LEFT,
        bottom: "10",
        id: "__alloyId45"
    });
    $.__views.bottomColorBar.add($.__views.__alloyId45);
    $.__views.recommendView = Ti.UI.createScrollView({
        id: "recommendView",
        backgroundColor: "white",
        layout: "horizontal",
        scrollType: "horizontal",
        height: "50",
        overScrollMode: Titanium.UI.Android.OVER_SCROLL_NEVER
    });
    $.__views.bottomColorBar.add($.__views.recommendView);
    $.__views.__alloyId46 = Ti.UI.createImageView({
        image: "/images/scroll_up.png",
        backgroundColor: "transparent",
        width: Titanium.UI.FILL,
        bottom: "10",
        id: "__alloyId46"
    });
    $.__views.bottomColorBar.add($.__views.__alloyId46);
    $.__views.__alloyId47 = Ti.UI.createLabel({
        text: "COLOUR LIBRARY",
        color: "black",
        width: "90%",
        textAlign: Ti.UI.TEXT_ALIGNMENT_LEFT,
        bottom: "10",
        id: "__alloyId47"
    });
<<<<<<< HEAD
    $.__views.bottomColorBar.add($.__views.__alloyId47);
=======
    $.__views.colourPicker.add($.__views.canvas);
<<<<<<< HEAD
=======
=======
    $.__views.colourPicker.add($.__views.__alloyId43);
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
>>>>>>> FETCH_HEAD
>>>>>>> FETCH_HEAD
>>>>>>> FETCH_HEAD
    $.__views.scrollView = Ti.UI.createScrollView({
        id: "scrollView",
        backgroundColor: "white",
        layout: "vertical",
        scrollType: "horizontal",
        height: "100",
        overScrollMode: Titanium.UI.Android.OVER_SCROLL_NEVER
    });
<<<<<<< HEAD
=======
<<<<<<< HEAD
    $.__views.colourPicker.add($.__views.scrollView);
=======
<<<<<<< HEAD
>>>>>>> FETCH_HEAD
    $.__views.bottomColorBar.add($.__views.scrollView);
>>>>>>> FETCH_HEAD
    exports.destroy = function() {};
    _.extend($, $.__views);
    arguments[0] || {};
    var fb = require("facebook");
    fb.appid = 752094718209236;
    Ti.Platform.displayCaps.platformHeight;
    var pWidth = Ti.Platform.displayCaps.platformWidth;
    var pHeight = PixelsToDPUnits(Ti.Platform.displayCaps.platformHeight);
    var toggleHeight = $.toggle.getHeight();
    var canvasHeight = pHeight - toggleHeight;
    var category_colour_lib = Alloy.createCollection("category_colour");
    var colour_lib = Alloy.createCollection("colour");
    var details = colour_lib.getClosestColourList("100", "100", "100");
    var library = Alloy.createCollection("category");
    var recommended = library.getCategoryListByType(1);
    var dialog = Titanium.UI.createOptionDialog({
        title: "Choose an image source...",
        options: [ "Camera", "Photo Gallery", "Cancel" ],
        cancel: 2
    });
    $.canvas.addEventListener("load", function() {
        Ti.App.fireEvent("web:initCanvasSize", {
            height: canvasHeight,
            width: pWidth
        });
    });
    dialog.addEventListener("click", function(e) {
        0 == e.index ? Titanium.Media.showCamera({
            success: function(event) {
                var image = event.media;
                event.mediaType == Ti.Media.MEDIA_TYPE_PHOTO && Ti.App.Properties.setString("colour_picker_image", image.nativePath);
            },
            cancel: function() {},
            error: function(error) {
                var a = Titanium.UI.createAlertDialog({
                    title: "Camera"
                });
                a.setMessage(error.code == Titanium.Media.NO_CAMERA ? "Device does not have camera" : "Unexpected error: " + error.code);
                a.show();
            },
            allowImageEditing: true,
            saveToPhotoGallery: true
        }) : 1 == e.index && Titanium.Media.openPhotoGallery({
            success: function(event) {
                var image = event.media;
                if (event.mediaType == Ti.Media.MEDIA_TYPE_PHOTO) {
                    console.log(image.nativePath);
                    Ti.App.Properties.setString("colour_picker_image", image.nativePath);
                    Ti.App.fireEvent("web:loadImage", {
                        image: image.nativePath
                    });
                }
            },
            cancel: function() {}
        });
    });
    1 == Ti.App.Properties.getString("back") ? Ti.App.Properties.setString("back", 0) : dialog.show();
    generateRecommended();
    var getColor = function(e) {
        $.colourPicker.backgroundColor = "rgba(" + e.r + "," + e.g + "," + e.b + "," + e.a + ")";
    };
    Ti.App.addEventListener("app:getColour", getColor);
    generateColour();
    var app = {
        sharer: {
            chooser: function() {
                if (fb.loggedIn) shareFacebook(); else {
                    fb.permissions = [ "publish_actions" ];
                    fb.addEventListener("login", function(e) {
                        e.success && shareFaceboo();
                    });
                    fb.authorize();
                }
            }
        }
    };
    var MESSAGE = "#sissons_paint";
    var btnShareChooser = Ti.UI.createButton({
        title: "Media Share"
    });
    btnShareChooser.addEventListener("click", app.sharer.chooser.bind(null, MESSAGE));
    $.recommendView.add(btnShareChooser);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;
>>>>>>> FETCH_HEAD
