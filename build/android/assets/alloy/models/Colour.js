exports.definition = {
    config: {
        columns: {
            id: "INTEGER",
            name: "TEXT",
            code: "TEXT",
            rgb: "TEXT",
            cmyk: "TEXT",
            sample: "TEXT"
        },
        adapter: {
            type: "sql",
            collection_name: "colour"
        }
    },
    extendModel: function(Model) {
        _.extend(Model.prototype, {});
        return Model;
    },
    extendCollection: function(Collection) {
        _.extend(Collection.prototype, {
            getColourList: function() {
                var collection = this;
                var sql = "SELECT * FROM " + collection.config.adapter.collection_name + "  order by id DESC";
                db = Ti.Database.open(collection.config.adapter.db_name);
                var res = db.execute(sql);
                var listArr = [];
                var count = 0;
                while (res.isValidRow()) {
                    listArr[count] = {
                        id: res.fieldByName("id"),
                        name: res.fieldByName("name"),
                        code: res.fieldByName("code"),
                        rgb: res.fieldByName("rgb"),
                        cmyk: res.fieldByName("cmyk"),
                        sample: res.fieldByName("sample")
                    };
                    res.next();
                    count++;
                }
                res.close();
                db.close();
                collection.trigger("sync");
                return listArr;
            },
            getColourById: function(id) {
                var collection = this;
                var sql = "SELECT * FROM " + collection.config.adapter.collection_name + " WHERE id='" + id + "'";
                db = Ti.Database.open(collection.config.adapter.db_name);
                var res = db.execute(sql);
                var arr = [];
                res.isValidRow() && (arr = {
                    id: res.fieldByName("id"),
                    name: res.fieldByName("name"),
                    code: res.fieldByName("code"),
                    rgb: res.fieldByName("rgb"),
                    cmyk: res.fieldByName("cmyk"),
                    sample: res.fieldByName("sample")
                });
                res.close();
                db.close();
                collection.trigger("sync");
                return arr;
            },
            resetColour: function() {
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

model = Alloy.M("colour", exports.definition, []);

collection = Alloy.C("colour", exports.definition, model);

exports.Model = model;

exports.Collection = collection;