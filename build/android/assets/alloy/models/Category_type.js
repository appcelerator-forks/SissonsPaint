var Alloy=require("alloy"),_=require("alloy/underscore")._,model,collection;exports.definition={config:{columns:{id:"INTEGER",cate_id:"TEXT",tag:"TEXT"},adapter:{type:"sql",collection_name:"category_type"}},extendModel:function(e){return _.extend(e.prototype,{}),e},extendCollection:function(e){return _.extend(e.prototype,{getCategoryTypeByCategory:function(e){var t=this,i="SELECT * FROM "+t.config.adapter.collection_name+" WHERE cate_id='"+e+"'";db=Ti.Database.open(t.config.adapter.db_name);for(var o=db.execute(i),a=[],r=0;o.isValidRow();)a[r]={id:o.fieldByName("id"),tag:o.fieldByName("tag")},o.next(),r++;return o.close(),db.close(),t.trigger("sync"),a},resetCategoryType:function(){var e=this,t="DELETE FROM "+e.config.adapter.collection_name;db=Ti.Database.open(e.config.adapter.db_name),db.execute(t),db.close(),e.trigger("sync")}}),e}},model=Alloy.M("category_type",exports.definition,[]),collection=Alloy.C("category_type",exports.definition,model),exports.Model=model,exports.Collection=collection;