exports.definition = {
	config: {
		columns: {
		    "id": "INTEGER",
		    "title": "TEXT",
		    "cover": "TEXT",
		    "content": "TEXT",
		    "status": "INTEGER",
		    "format": "TEXT"
		},
		adapter: {
			type: "sql",
			collection_name: "brochure"
		}
	},
	extendModel: function(Model) {
		_.extend(Model.prototype, {
			// extended functions and properties go here
		});

		return Model;
	},
	extendCollection: function(Collection) {
		_.extend(Collection.prototype, {
			// extended functions and properties go here
			getBrochureList: function(){
				var collection = this;
                var sql = "SELECT * FROM " + collection.config.adapter.collection_name +"  order by id DESC";
                
                db = Ti.Database.open(collection.config.adapter.db_name);
                var res = db.execute(sql);
                var listArr = []; 
                var count = 0;
                while (res.isValidRow()){
					listArr[count] = {
					    id: res.fieldByName('id'),
					    title: res.fieldByName('title'),
					    cover: res.fieldByName('cover'),
					    content: res.fieldByName('content'),
					    status: res.fieldByName('status'),
					    format: res.fieldByName('format')
					};
					res.next();
					count++;
				} 
				res.close();
                db.close();
                collection.trigger('sync');
                return listArr;
			},
			resetBrochure : function(){
				var collection = this;
                var sql = "DELETE FROM " + collection.config.adapter.collection_name;
                db = Ti.Database.open(collection.config.adapter.db_name);
                db.execute(sql);
                db.close();
                collection.trigger('sync');
			}
		});

		return Collection;
	}
};

var Alloy = require('alloy'),
    _ = require("alloy/underscore")._,
	model, collection;

model = Alloy.M('brochure',
	 exports.definition,
	[]
);

collection = Alloy.C('brochure',
	 exports.definition,
	 model
);

exports.Model = model;
exports.Collection = collection;