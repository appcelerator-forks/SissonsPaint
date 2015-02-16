var Alloy=require("alloy"),_=require("alloy/underscore")._,model,collection;exports.definition={config:{columns:{id:"INTEGER",name:"TEXT",type:"TEXT",position:"INTEGER",description:"TEXT",image:"TEXT"},adapter:{type:"sql",collection_name:"category"}},extendModel:function(e){return _.extend(e.prototype,{}),e},extendCollection:function(e){return _.extend(e.prototype,{getCategoryList:function(){var e=this,i="SELECT * FROM "+e.config.adapter.collection_name+" order by position , name";db=Ti.Database.open(e.config.adapter.db_name);for(var t=db.execute(i),o=[],a=0;t.isValidRow();)o[a]={id:t.fieldByName("id"),name:t.fieldByName("name"),type:t.fieldByName("type"),image:t.fieldByName("image"),description:t.fieldByName("description")},t.next(),a++;return t.close(),db.close(),e.trigger("sync"),o},getCategoryListByType:function(e,i){"undefined"==typeof i&&(i=0);var t=this,o="SELECT * FROM "+t.config.adapter.collection_name+" WHERE type='"+e+"' order by position, name LIMIT "+i+", 999";db=Ti.Database.open(t.config.adapter.db_name);for(var a=db.execute(o),r=[],l=0;a.isValidRow();)""!=a.fieldByName("id")&&(r[l]={id:a.fieldByName("id"),name:a.fieldByName("name"),type:a.fieldByName("type"),image:a.fieldByName("image"),description:a.fieldByName("description")}),a.next(),l++;return a.close(),db.close(),t.trigger("sync"),r},getCategoryByIdOnly:function(e){var i=this,t="SELECT * FROM "+i.config.adapter.collection_name+" WHERE id='"+e+"' order by position, name";db=Ti.Database.open(i.config.adapter.db_name);var o=db.execute(t),a=[];return o.isValidRow()&&(a={id:o.fieldByName("id"),name:o.fieldByName("name"),type:o.fieldByName("type"),image:o.fieldByName("image"),description:o.fieldByName("description")}),o.close(),db.close(),i.trigger("sync"),a},getCategoryById:function(e,i,t){"undefined"==typeof t&&(t=0);var o=this,a="SELECT * FROM "+o.config.adapter.collection_name+" WHERE id='"+e+"' AND `type` = '"+i+"' order by position, name LIMIT "+t+", 999";db=Ti.Database.open(o.config.adapter.db_name);var r=db.execute(a),l=[];return r.isValidRow()&&(l={id:r.fieldByName("id"),name:r.fieldByName("name"),type:r.fieldByName("type"),image:r.fieldByName("image"),description:r.fieldByName("description")}),r.close(),db.close(),o.trigger("sync"),l},resetCategory:function(){var e=this,i="DELETE FROM "+e.config.adapter.collection_name;db=Ti.Database.open(e.config.adapter.db_name),db.execute(i),db.close(),e.trigger("sync")},getCategoryByType:function(e){var i=this,t="SELECT * FROM "+i.config.adapter.collection_name+" WHERE type='"+e+"'";db=Ti.Database.open(i.config.adapter.db_name);var o=db.execute(t),a=[];return o.isValidRow()&&(a={id:o.fieldByName("id"),name:o.fieldByName("name"),type:o.fieldByName("type"),image:o.fieldByName("image"),description:o.fieldByName("description")}),o.close(),db.close(),i.trigger("sync"),a}}),e}},model=Alloy.M("category",exports.definition,[]),collection=Alloy.C("category",exports.definition,model),exports.Model=model,exports.Collection=collection;