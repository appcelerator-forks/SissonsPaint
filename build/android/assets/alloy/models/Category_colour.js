var Alloy=require("alloy"),_=require("alloy/underscore")._,model,collection;exports.definition={config:{columns:{id:"INTEGER PRIMARY KEY AUTOINCREMENT",cate_id:"TEXT",colour_id:"TEXT",type:"TEXT"},adapter:{type:"sql",collection_name:"category_colour"}},extendModel:function(e){return _.extend(e.prototype,{}),e},extendCollection:function(e){return _.extend(e.prototype,{getCategoryColourByCategory:function(e){var i=this,t="SELECT category_colour.*, colour.thumb, colour.rgb, colour.name, colour.code, colour.sample, colour.id AS cid FROM "+i.config.adapter.collection_name+" LEFT OUTER JOIN colour ON category_colour.colour_id = colour.id WHERE cate_id='"+e+"'";db=Ti.Database.open(i.config.adapter.db_name);for(var o=db.execute(t),a=[],l=0;o.isValidRow();)a[l]={id:o.fieldByName("id"),colour_id:o.fieldByName("colour_id"),thumb:o.fieldByName("thumb"),rgb:o.fieldByName("rgb"),name:o.fieldByName("name"),code:o.fieldByName("code"),sample:o.fieldByName("sample"),cid:o.fieldByName("cid")},o.next(),l++;return o.close(),db.close(),i.trigger("sync"),a},getCateByColourId:function(e,i){"undefined"==typeof i&&(i=2);var t=this,o="SELECT * FROM "+t.config.adapter.collection_name+" WHERE colour_id='"+e+"' and type ='"+i+"'";db=Ti.Database.open(t.config.adapter.db_name);var a=db.execute(o),l=[];return a.isValidRow()&&(l={id:a.fieldByName("id"),cate_id:a.fieldByName("cate_id")}),a.close(),db.close(),t.trigger("sync"),l},addStores:function(e,i,t){var o=this;db=Ti.Database.open(o.config.adapter.db_name),db.execute("BEGIN"),e.forEach(function(e){sql_query="INSERT INTO "+o.config.adapter.collection_name+"( cate_id, colour_id, type ) VALUES ('"+i+"', '"+e+"', '"+t+"')",db.execute(sql_query)}),db.execute("COMMIT"),db.close(),o.trigger("sync")},resetCategoryColour:function(){var e=this,i="DELETE FROM "+e.config.adapter.collection_name;db=Ti.Database.open(e.config.adapter.db_name),db.execute(i),db.close(),e.trigger("sync")}}),e}},model=Alloy.M("category_colour",exports.definition,[]),collection=Alloy.C("category_colour",exports.definition,model),exports.Model=model,exports.Collection=collection;