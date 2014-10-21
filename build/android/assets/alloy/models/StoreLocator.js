var Alloy=require("alloy"),_=require("alloy/underscore")._,model,collection;exports.definition={config:{columns:{id:"INTEGER",outlet:"TEXT",area:"TEXT",state:"TEXT",address:"TEXT",mobile:"TEXT",fax:"TEXT",email:"TEXT",latitude:"TEXT",longitude:"TEXT",category:"INTEGER"},adapter:{type:"sql",collection_name:"storeLocator"}},extendModel:function(e){return _.extend(e.prototype,{}),e},extendCollection:function(e){return _.extend(e.prototype,{getStoreStateList:function(){var e=this,t="SELECT distinct(state) FROM "+e.config.adapter.collection_name+"  order by state";db=Ti.Database.open(e.config.adapter.db_name);for(var i=db.execute(t),o=[],a=0;i.isValidRow();)o[a]={state:i.fieldByName("state")},i.next(),a++;return i.close(),db.close(),e.trigger("sync"),o},getStoreList:function(){var e=this,t="SELECT * FROM "+e.config.adapter.collection_name;db=Ti.Database.open(e.config.adapter.db_name);for(var i=db.execute(t),o=[],a=0;i.isValidRow();)o[a]={id:i.fieldByName("id"),outlet:i.fieldByName("outlet"),area:i.fieldByName("area"),state:i.fieldByName("state"),address:i.fieldByName("address"),mobile:i.fieldByName("mobile"),fax:i.fieldByName("fax"),email:i.fieldByName("email"),latitude:i.fieldByName("latitude"),longitude:i.fieldByName("longitude"),category:i.fieldByName("category")},i.next(),a++;return i.close(),db.close(),e.trigger("sync"),o},getStoreByState:function(e){var t=this,i="SELECT * FROM "+t.config.adapter.collection_name+" WHERE state='"+e+"'";db=Ti.Database.open(t.config.adapter.db_name);for(var o=db.execute(i),a=[],r=0;o.isValidRow();)a[r]={id:o.fieldByName("id"),outlet:o.fieldByName("outlet"),area:o.fieldByName("area"),state:o.fieldByName("state"),address:o.fieldByName("address"),mobile:o.fieldByName("mobile"),fax:o.fieldByName("fax"),email:o.fieldByName("email"),latitude:o.fieldByName("latitude"),longitude:o.fieldByName("longitude"),category:o.fieldByName("category")},o.next(),r++;return o.close(),db.close(),t.trigger("sync"),a},getStoreById:function(e){var t=this,i="SELECT * FROM "+t.config.adapter.collection_name+" WHERE id='"+e+"'";db=Ti.Database.open(t.config.adapter.db_name);var o=db.execute(i),a=[];return o.isValidRow()&&(a={outlet:o.fieldByName("outlet"),area:o.fieldByName("area"),state:o.fieldByName("state"),address:o.fieldByName("address"),mobile:o.fieldByName("mobile"),fax:o.fieldByName("fax"),email:o.fieldByName("email"),latitude:o.fieldByName("latitude"),longitude:o.fieldByName("longitude"),category:o.fieldByName("category")}),o.close(),db.close(),t.trigger("sync"),a},resetStore:function(){var e=this,t="DELETE FROM "+e.config.adapter.collection_name;db=Ti.Database.open(e.config.adapter.db_name),db.execute(t),db.close(),e.trigger("sync")}}),e}},model=Alloy.M("storeLocator",exports.definition,[]),collection=Alloy.C("storeLocator",exports.definition,model),exports.Model=model,exports.Collection=collection;