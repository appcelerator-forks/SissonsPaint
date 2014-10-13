<<<<<<< HEAD
var Alloy=require("alloy"),_=require("alloy/underscore")._,model,collection;exports.definition={config:{columns:{id:"INTEGER",title:"TEXT",cover:"TEXT",content:"TEXT",status:"INTEGER",format:"TEXT"},adapter:{type:"sql",collection_name:"brochure"}},extendModel:function(e){return _.extend(e.prototype,{}),e},extendCollection:function(e){return _.extend(e.prototype,{getBrochureList:function(){var e=this,t="SELECT * FROM "+e.config.adapter.collection_name+"  order by id DESC";db=Ti.Database.open(e.config.adapter.db_name);for(var i=db.execute(t),o=[],r=0;i.isValidRow();)o[r]={id:i.fieldByName("id"),title:i.fieldByName("title"),cover:i.fieldByName("cover"),content:i.fieldByName("content"),status:i.fieldByName("status"),format:i.fieldByName("format")},i.next(),r++;return i.close(),db.close(),e.trigger("sync"),o},resetBrochure:function(){var e=this,t="DELETE FROM "+e.config.adapter.collection_name;db=Ti.Database.open(e.config.adapter.db_name),db.execute(t),db.close(),e.trigger("sync")}}),e}},model=Alloy.M("brochure",exports.definition,[]),collection=Alloy.C("brochure",exports.definition,model),exports.Model=model,exports.Collection=collection;
=======
exports.definition = {
    config: {
        columns: {
            id: "INTEGER",
            title: "TEXT",
            cover: "TEXT",
            content: "TEXT",
            status: "INTEGER",
            format: "TEXT"
        },
        adapter: {
            type: "sql",
            collection_name: "brochure"
        }
    },
    extendModel: function(Model) {
        _.extend(Model.prototype, {});
        return Model;
    },
    extendCollection: function(Collection) {
        _.extend(Collection.prototype, {
            getBrochureList: function() {
                var collection = this;
                var sql = "SELECT * FROM " + collection.config.adapter.collection_name + "  order by id DESC";
                db = Ti.Database.open(collection.config.adapter.db_name);
                var res = db.execute(sql);
                var listArr = [];
                var count = 0;
                while (res.isValidRow()) {
                    listArr[count] = {
                        id: res.fieldByName("id"),
                        title: res.fieldByName("title"),
                        cover: res.fieldByName("cover"),
                        content: res.fieldByName("content"),
                        status: res.fieldByName("status"),
                        format: res.fieldByName("format")
                    };
                    res.next();
                    count++;
                }
                res.close();
                db.close();
                collection.trigger("sync");
                return listArr;
            },
            resetBrochure: function() {
                var collection = this;
                var sql = "DELETE FROM " + collection.config.adapter.collection_name;
                db = Ti.Database.open(collection.config.adapter.db_name);
                db.execute(sql);
                db.close();
                collection.trigger("sync");
            }
        });
        return Collection;
    }
};

var Alloy = require("alloy"), _ = require("alloy/underscore")._, model, collection;

model = Alloy.M("brochure", exports.definition, []);

collection = Alloy.C("brochure", exports.definition, model);

exports.Model = model;

exports.Collection = collection;
>>>>>>> FETCH_HEAD
