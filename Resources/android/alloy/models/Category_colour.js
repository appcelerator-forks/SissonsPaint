var Alloy = require("alloy"), _ = require("alloy/underscore")._, model, collection;

exports.definition = {
    config: {
        columns: {
            id: "INTEGER PRIMARY KEY AUTOINCREMENT",
            cate_id: "TEXT",
            colour_id: "TEXT"
        },
        adapter: {
            type: "sql",
            collection_name: "category_colour"
        }
    },
    extendModel: function(Model) {
        _.extend(Model.prototype, {});
        return Model;
    },
    extendCollection: function(Collection) {
        _.extend(Collection.prototype, {
            getCategoryColourByCategory: function(cate_id) {
                var collection = this;
                var sql = "SELECT * FROM " + collection.config.adapter.collection_name + " WHERE cate_id='" + cate_id + "'";
                db = Ti.Database.open(collection.config.adapter.db_name);
                var res = db.execute(sql);
                var listArr = [];
                var count = 0;
                while (res.isValidRow()) {
                    listArr[count] = {
                        id: res.fieldByName("id"),
                        colour_id: res.fieldByName("colour_id")
                    };
                    res.next();
                    count++;
                }
                res.close();
                db.close();
                collection.trigger("sync");
                return listArr;
            },
            getCateByColourId: function(colour_id) {
                var collection = this;
                var sql = "SELECT * FROM " + collection.config.adapter.collection_name + " WHERE colour_id='" + colour_id + "'";
                db = Ti.Database.open(collection.config.adapter.db_name);
                var res = db.execute(sql);
                var result = [];
                res.isValidRow() && (result = {
                    id: res.fieldByName("id"),
                    cate_id: res.fieldByName("cate_id")
                });
                res.close();
                db.close();
                collection.trigger("sync");
                return result;
            },
            resetCategoryColour: function() {
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

model = Alloy.M("category_colour", exports.definition, []);

collection = Alloy.C("category_colour", exports.definition, model);

exports.Model = model;

exports.Collection = collection;