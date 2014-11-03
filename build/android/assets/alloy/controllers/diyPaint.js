function __processArg(e,t){var i=null;return e&&(i=e[t]||null,delete e[t]),i}function Controller(){function e(e){return e/(Titanium.Platform.displayCaps.dpi/160)}function t(){var e=Ti.UI.createTableViewRow({title:"Bucket",width:150,left:10,touchEnabled:!0,height:60}),t=Ti.UI.createTableViewRow({title:"Brush",width:150,left:10,touchEnabled:!0,height:60}),i=Ti.UI.createTableViewRow({title:"Eraser",width:150,left:10,touchEnabled:!0,height:60}),a=[];a.push(e),a.push(t),a.push(i);var r=Titanium.UI.createTableView({separatorColor:"transparent",backgroundImage:"/images/pop_window.png",height:Ti.UI.SIZE,width:150,bottom:60,overScrollMode:Titanium.UI.Android.OVER_SCROLL_NEVER,data:a});o.diyPaint.add(r),r.addEventListener("click",function(e){console.log(e.index),0==e.index&&(Ti.App.fireEvent("web:changeTools",{tools:"bucket"}),o.tools.image="/images/icon_bucket.png"),1==e.index&&(Ti.App.fireEvent("web:changeTools",{tools:"brush"}),o.tools.image="/images/icon_brush.png"),2==e.index&&(o.tools.image="/images/icon_erase.png"),o.diyPaint.remove(r)})}function i(){var e=Titanium.UI.createOptionDialog({title:"Choose an image source...",options:["Camera","Photo Gallery","Cancel"],cancel:2});e.addEventListener("click",function(e){0==e.index?Titanium.Media.showCamera({success:function(e){var t=e.media;e.mediaType==Ti.Media.MEDIA_TYPE_PHOTO&&(Ti.App.Properties.setString("image",t.nativePath),Ti.App.fireEvent("web:loadImage",{image:"image.nativePath"}))},cancel:function(){},error:function(e){var t=Titanium.UI.createAlertDialog({title:"Camera"});t.setMessage(e.code==Titanium.Media.NO_CAMERA?"Device does not have camera":"Unexpected error: "+e.code),t.show()},allowImageEditing:!0,saveToPhotoGallery:!0}):1==e.index&&(Ti.App.fireEvent("foo",{name:"bar"}),Titanium.Media.openPhotoGallery({success:function(e){var t=e.media;e.mediaType==Ti.Media.MEDIA_TYPE_PHOTO&&(Ti.App.Properties.setString("image",t.nativePath),console.log(t.nativePath),Ti.App.fireEvent("web:loadImage",{image:t.nativePath}))},cancel:function(){}}))}),e.show()}require("alloy/controllers/BaseController").apply(this,Array.prototype.slice.call(arguments)),this.__controllerPath="diyPaint",arguments[0]&&(__processArg(arguments[0],"__parentSymbol"),__processArg(arguments[0],"$model"),__processArg(arguments[0],"__itemTemplate"));var o=this,a={},r={};o.__views.diyPaint=Ti.UI.createView({id:"diyPaint"}),o.__views.diyPaint&&o.addTopLevelView(o.__views.diyPaint),o.__views.__alloyId51=Ti.UI.createView({backgroundColor:"white",id:"__alloyId51"}),o.__views.diyPaint.add(o.__views.__alloyId51),o.__views.toggle=Ti.UI.createView({id:"toggle",layout:"horizontal",height:"80",top:"0"}),o.__views.__alloyId51.add(o.__views.toggle),o.__views.__alloyId52=Alloy.createController("toggle",{id:"__alloyId52",__parentSymbol:o.__views.toggle}),o.__views.__alloyId52.setParent(o.__views.toggle),o.__views.__alloyId53=Ti.UI.createLabel({width:"75%",height:Ti.UI.SIZE,color:"black",font:{fontSize:22},text:"DIY Paint",textAlign:Ti.UI.TEXT_ALIGNMENT_CENTER,id:"__alloyId53"}),o.__views.toggle.add(o.__views.__alloyId53),o.__views.canvas=Ti.UI.createWebView({id:"canvas",url:"/html/canvas-paint-bucket.html",enableZoomControls:"false",overScrollMode:Titanium.UI.Android.OVER_SCROLL_NEVER}),o.__views.__alloyId51.add(o.__views.canvas),o.__views.toolbar=Ti.UI.createView({height:"60",bottom:"0",id:"toolbar"}),o.__views.__alloyId51.add(o.__views.toolbar),o.__views.__alloyId54=Ti.UI.createImageView({image:"/images/tool_bar.jpg",height:"60",width:Titanium.UI.FILL,id:"__alloyId54"}),o.__views.toolbar.add(o.__views.__alloyId54),o.__views.photoButton=Ti.UI.createImageView({id:"photoButton",image:"/images/icon_photo.png",left:"5",height:"40",width:"50"}),o.__views.toolbar.add(o.__views.photoButton),i?o.__views.photoButton.addEventListener("click",i):r["$.__views.photoButton!click!photoPop"]=!0,o.__views.photoButton=Ti.UI.createImageView({id:"photoButton",image:"/images/icon_undo.png",left:"65",height:"40",width:"50"}),o.__views.toolbar.add(o.__views.photoButton),i?o.__views.photoButton.addEventListener("click",i):r["$.__views.photoButton!click!photoPop"]=!0,o.__views.tools=Ti.UI.createImageView({id:"tools",image:"/images/icon_bucket.png",left:"125",height:"40",width:"50"}),o.__views.toolbar.add(o.__views.tools),t?o.__views.tools.addEventListener("click",t):r["$.__views.tools!click!toolspop"]=!0,o.__views.photoButton=Ti.UI.createImageView({id:"photoButton",image:"/images/icon_size.png",left:"185",height:"40",width:"50"}),o.__views.toolbar.add(o.__views.photoButton),i?o.__views.photoButton.addEventListener("click",i):r["$.__views.photoButton!click!photoPop"]=!0,o.__views.photoButton=Ti.UI.createImageView({id:"photoButton",image:"/images/icon_color.png",left:"245",height:"40",width:"50"}),o.__views.toolbar.add(o.__views.photoButton),i?o.__views.photoButton.addEventListener("click",i):r["$.__views.photoButton!click!photoPop"]=!0,o.__views.photoButton=Ti.UI.createImageView({id:"photoButton",image:"/images/icon_share.png",left:"305",height:"40",width:"50"}),o.__views.toolbar.add(o.__views.photoButton),i?o.__views.photoButton.addEventListener("click",i):r["$.__views.photoButton!click!photoPop"]=!0,a.destroy=function(){},_.extend(o,o.__views),arguments[0]||{};var l=Ti.Platform.displayCaps.platformWidth,n=e(Ti.Platform.displayCaps.platformHeight),s=o.toolbar.rect.height,d=o.toggle.getHeight(),c=0;o.toolbar.addEventListener("postlayout",function(){s=o.toolbar.rect.height,c=n-s-25-d,console.log("page height: "+n+", toolbar:"+s+", toggle"+d+", canvas:"+c),o.canvas.setBottom(s),o.canvas.setHeight(c)}),o.canvas.addEventListener("load",function(){console.log(c),console.log(l),Ti.App.fireEvent("web:initCanvasSize",{height:c,width:l})}),r["$.__views.photoButton!click!photoPop"]&&o.__views.photoButton.addEventListener("click",i),r["$.__views.photoButton!click!photoPop"]&&o.__views.photoButton.addEventListener("click",i),r["$.__views.tools!click!toolspop"]&&o.__views.tools.addEventListener("click",t),r["$.__views.photoButton!click!photoPop"]&&o.__views.photoButton.addEventListener("click",i),r["$.__views.photoButton!click!photoPop"]&&o.__views.photoButton.addEventListener("click",i),r["$.__views.photoButton!click!photoPop"]&&o.__views.photoButton.addEventListener("click",i),_.extend(o,a)}var Alloy=require("alloy"),Backbone=Alloy.Backbone,_=Alloy._;module.exports=Controller;