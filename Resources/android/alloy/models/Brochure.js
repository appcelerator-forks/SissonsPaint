var Alloy = require("alloy"), _ = require("alloy/underscore")._, model, collection;

exports.definition = {
    config: {
        columns: {
            id: "INTEGER",
            title: "TEXT",
            cover: "TEXT",
            content: "TEXT",
            url: "TEXT",
            status: "INTEGER",
            isDownloaded: "INTEGER",
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
                var sql = "SELECT * FROM " + collection.config.adapter.collection_name + "  order by id";
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
                        url: res.fieldByName("url"),
                        isDownloaded: res.fieldByName("isDownloaded"),
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
            addBrochure: function(b_id, b_title, cover, attachment, b_url, b_status, b_format) {
                var collection = this;
                var sql = "SELECT * FROM " + collection.config.adapter.collection_name + " WHERE id=" + b_id;
                var sql_query = "";
                db = Ti.Database.open(collection.config.adapter.db_name);
                var res = db.execute(sql);
                sql_query = res.isValidRow() ? "UPDATE " + collection.config.adapter.collection_name + " SET title='" + b_title + "', cover='" + cover + "', content='" + attachment + "', status='" + b_status + "' WHERE id='" + b_id + "'" : "INSERT INTO " + collection.config.adapter.collection_name + " (id, title, cover,content, url,status, isDownloaded,format ) VALUES ('" + b_id + "','" + b_title + "','" + cover + "','" + attachment + "','" + b_url + "','" + b_status + "', 0, '" + b_format + "')";
                db.execute(sql_query);
                db.close();
                collection.trigger("sync");
            },
            updateDownloadedBrochure: function(b_id) {
                var collection = this;
                sql_query = "UPDATE " + collection.config.adapter.collection_name + " SET isDownloaded=1 WHERE id='" + b_id + "'";
                db = Ti.Database.open(collection.config.adapter.db_name);
                db.execute(sql_query);
                db.close();
                collection.trigger("sync");
            },
            resetBrochure: function() {
                var collection = this;
                var sql = "DELETE FROM " + collection.config.adapter.collection_name;
                db = Ti.Database.open(collection.config.adapter.db_name);
                db.execute(sql);
                db.close();
                collection.trigger("sync");
            },
            getDownloadedList: function() {
                var collection = this;
                var sql = "SELECT * FROM " + collection.config.adapter.collection_name + " WHERE isDownloaded=1 order by id DESC";
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
                        url: res.fieldByName("url"),
                        isDownloaded: res.fieldByName("isDownloaded"),
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
            getVideoList: function() {
                var collection = this;
                var sql = "SELECT * FROM " + collection.config.adapter.collection_name + " WHERE format!='pdf' order by id DESC";
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
                        url: res.fieldByName("url"),
                        isDownloaded: res.fieldByName("isDownloaded"),
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
            }
        });
        return Collection;
    }
};

model = Alloy.M("brochure", exports.definition, []);

collection = Alloy.C("brochure", exports.definition, model);

exports.Model = model;

exports.Collection = collection;