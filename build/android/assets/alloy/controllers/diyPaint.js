function __processArg(e,t){var i=null;return e&&(i=e[t]||null,delete e[t]),i}function Controller(){require("alloy/controllers/BaseController").apply(this,Array.prototype.slice.call(arguments)),this.__controllerPath="diyPaint",arguments[0]&&(__processArg(arguments[0],"__parentSymbol"),__processArg(arguments[0],"$model"),__processArg(arguments[0],"__itemTemplate"));var e=this,t={};e.__views.diyPaint=Ti.UI.createView({id:"diyPaint"}),e.__views.diyPaint&&e.addTopLevelView(e.__views.diyPaint),e.__views.__alloyId52=Ti.UI.createView({backgroundColor:"white",id:"__alloyId52"}),e.__views.diyPaint.add(e.__views.__alloyId52),e.__views.toggle=Ti.UI.createView({backgroundColor:"yellow",id:"toggle",layout:"horizontal",height:"80",top:"0"}),e.__views.__alloyId52.add(e.__views.toggle),e.__views.__alloyId53=Alloy.createController("toggle",{id:"__alloyId53",__parentSymbol:e.__views.toggle}),e.__views.__alloyId53.setParent(e.__views.toggle),e.__views.__alloyId54=Ti.UI.createLabel({width:"75%",height:Ti.UI.SIZE,color:"black",font:{fontSize:22},text:"DIY Paint",textAlign:Ti.UI.TEXT_ALIGNMENT_CENTER,id:"__alloyId54"}),e.__views.toggle.add(e.__views.__alloyId54),e.__views.canvas=Ti.UI.createWebView({backgroundColor:"red",id:"canvas",url:"/html/canvas-paint-bucket.html",enableZoomControls:"false"}),e.__views.__alloyId52.add(e.__views.canvas),e.__views.toolbar=Ti.UI.createView({height:Ti.UI.SIZE,bottom:"0",backgroundColor:"orange",id:"toolbar"}),e.__views.__alloyId52.add(e.__views.toolbar),e.__views.settings=Ti.UI.createImageView({width:"16.6%",id:"settings",mod:"settings",left:"0",image:"/images/power-icons.png"}),e.__views.toolbar.add(e.__views.settings),e.__views.settings=Ti.UI.createImageView({width:"16.6%",id:"settings",mod:"settings",left:"16.6%",image:"/images/power-icons.png"}),e.__views.toolbar.add(e.__views.settings),e.__views.settings=Ti.UI.createImageView({width:"16.6%",id:"settings",mod:"settings",left:"33.2%",image:"/images/power-icons.png"}),e.__views.toolbar.add(e.__views.settings),e.__views.settings=Ti.UI.createImageView({width:"16.6%",id:"settings",mod:"settings",left:"49.8%",image:"/images/power-icons.png"}),e.__views.toolbar.add(e.__views.settings),e.__views.settings=Ti.UI.createImageView({width:"16.6%",id:"settings",mod:"settings",left:"66.4%",image:"/images/power-icons.png"}),e.__views.toolbar.add(e.__views.settings),e.__views.settings=Ti.UI.createImageView({width:"16.6%",id:"settings",mod:"settings",left:"83%",image:"/images/power-icons.png"}),e.__views.toolbar.add(e.__views.settings),t.destroy=function(){},_.extend(e,e.__views),arguments[0]||{};var i=Ti.Platform.displayCaps.platformWidth,o=PixelsToDPUnits(Ti.Platform.displayCaps.platformHeight),a=e.toolbar.rect.height,r=e.toggle.getHeight(),l=0;e.toolbar.addEventListener("postlayout",function(){a=e.toolbar.rect.height,l=o-a-25-r,console.log("page height: "+o+", toolbar:"+a+", toggle"+r+", canvas:"+l),e.canvas.setBottom(a),e.canvas.setHeight(l)}),e.canvas.addEventListener("load",function(){console.log(l),console.log(i),Ti.App.fireEvent("web:initCanvasSize",{height:l,width:i})});var n=Titanium.UI.createOptionDialog({title:"Choose an image source...",options:["Camera","Photo Gallery","Cancel"],cancel:2});n.addEventListener("click",function(e){0==e.index?Titanium.Media.showCamera({success:function(e){var t=e.media;e.mediaType==Ti.Media.MEDIA_TYPE_PHOTO&&Ti.App.Properties.setString("image",t.nativePath)},cancel:function(){},error:function(e){var t=Titanium.UI.createAlertDialog({title:"Camera"});t.setMessage(e.code==Titanium.Media.NO_CAMERA?"Device does not have camera":"Unexpected error: "+e.code),t.show()},allowImageEditing:!0,saveToPhotoGallery:!0}):1==e.index&&Titanium.Media.openPhotoGallery({success:function(e){var t=e.media;e.mediaType==Ti.Media.MEDIA_TYPE_PHOTO&&(Ti.App.Properties.setString("image",t.nativePath),Ti.App.fireEvent("web:loadImage",{image:t.nativePath}))},cancel:function(){}})}),n.show(),_.extend(e,t)}var Alloy=require("alloy"),Backbone=Alloy.Backbone,_=Alloy._;module.exports=Controller;