function mysql_real_escape_string(e){return e.replace(/[\0\x08\x09\x1a\n\r"'\\\%]/g,function(e){switch(e){case"\x00":return"\\0";case"\b":return"\\b";case"	":return"\\t";case"":return"\\z";case"\n":return"\\n";case"\r":return"\\r";case'"':case"'":case"\\":case"%":return"\\"+e}})}var Alloy=require("alloy"),_=require("alloy/underscore")._,model,collection;exports.definition={config:{columns:{id:"INTEGER",outlet:"TEXT",area:"TEXT",state:"TEXT",address:"TEXT",mobile:"TEXT",fax:"TEXT",email:"TEXT",latitude:"TEXT",longitude:"TEXT",category:"INTEGER"},adapter:{type:"sql",collection_name:"storeLocator"}},extendModel:function(e){return _.extend(e.prototype,{}),e},extendCollection:function(e){return _.extend(e.prototype,{getStoreStateList:function(){var e=this,i="SELECT distinct(state) FROM "+e.config.adapter.collection_name+"  order by state";db=Ti.Database.open(e.config.adapter.db_name);for(var t=db.execute(i),o=[],a=0;t.isValidRow();)o[a]={state:t.fieldByName("state")},t.next(),a++;return t.close(),db.close(),e.trigger("sync"),o},getStoreList:function(){var e=this,i="SELECT * FROM "+e.config.adapter.collection_name;db=Ti.Database.open(e.config.adapter.db_name);for(var t=db.execute(i),o=[],a=0;t.isValidRow();)o[a]={id:t.fieldByName("id"),outlet:t.fieldByName("outlet"),area:t.fieldByName("area"),state:t.fieldByName("state"),address:t.fieldByName("address"),mobile:t.fieldByName("mobile"),fax:t.fieldByName("fax"),email:t.fieldByName("email"),latitude:t.fieldByName("latitude"),longitude:t.fieldByName("longitude"),category:t.fieldByName("category")},t.next(),a++;return t.close(),db.close(),e.trigger("sync"),o},getStoreByState:function(e){var i=this,t="SELECT * FROM "+i.config.adapter.collection_name+" WHERE state='"+e+"' ORDER BY outlet";db=Ti.Database.open(i.config.adapter.db_name);for(var o=db.execute(t),a=[],l=0;o.isValidRow();)a[l]={id:o.fieldByName("id"),outlet:o.fieldByName("outlet"),area:o.fieldByName("area"),state:o.fieldByName("state"),address:o.fieldByName("address"),mobile:o.fieldByName("mobile"),fax:o.fieldByName("fax"),email:o.fieldByName("email"),latitude:o.fieldByName("latitude"),longitude:o.fieldByName("longitude"),category:o.fieldByName("category")},o.next(),l++;return o.close(),db.close(),i.trigger("sync"),a},getStoreById:function(e){var i=this,t="SELECT * FROM "+i.config.adapter.collection_name+" WHERE id='"+e+"'";db=Ti.Database.open(i.config.adapter.db_name);var o=db.execute(t),a=[];return o.isValidRow()&&(a={outlet:o.fieldByName("outlet"),area:o.fieldByName("area"),state:o.fieldByName("state"),address:o.fieldByName("address"),mobile:o.fieldByName("mobile"),fax:o.fieldByName("fax"),email:o.fieldByName("email"),latitude:o.fieldByName("latitude"),longitude:o.fieldByName("longitude"),category:o.fieldByName("category")}),o.close(),db.close(),i.trigger("sync"),a},addStores:function(e){var i=this;db=Ti.Database.open(i.config.adapter.db_name),db.execute("BEGIN"),e.forEach(function(e){sql_query="INSERT INTO "+i.config.adapter.collection_name+"(id, outlet, area, state, address,mobile, fax, email, latitude, longitude, category ) VALUES ('"+e.f_id+"', '"+mysql_real_escape_string(e.f_outlet)+"', '"+e.f_area+"', '"+e.f_state+"', '"+mysql_real_escape_string(e.f_address)+"', '"+e.f_mobile+"', '"+e.f_fax+"', '"+e.f_email+"', '"+e.f_lat+"', '"+e.f_lng+"', '"+e.f_category+"')",db.execute(sql_query)}),db.execute("COMMIT"),db.close(),i.trigger("sync")},resetStore:function(){var e=this,i="DELETE FROM "+e.config.adapter.collection_name;db=Ti.Database.open(e.config.adapter.db_name),db.execute(i),db.close(),e.trigger("sync")},getStoreByName:function(e,i){var t=this,o="SELECT * FROM "+t.config.adapter.collection_name+" WHERE state='"+e+"' AND outlet LIKE '%"+i+"%' ORDER BY outlet";db=Ti.Database.open(t.config.adapter.db_name);for(var a=db.execute(o),l=[],r=0;a.isValidRow();)l[r]={id:a.fieldByName("id"),outlet:a.fieldByName("outlet"),area:a.fieldByName("area"),state:a.fieldByName("state"),address:a.fieldByName("address"),mobile:a.fieldByName("mobile"),fax:a.fieldByName("fax"),email:a.fieldByName("email"),latitude:a.fieldByName("latitude"),longitude:a.fieldByName("longitude"),category:a.fieldByName("category")},a.next(),r++;return a.close(),db.close(),t.trigger("sync"),l}}),e}},model=Alloy.M("storeLocator",exports.definition,[]),collection=Alloy.C("storeLocator",exports.definition,model),exports.Model=model,exports.Collection=collection;