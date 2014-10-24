exports.definition = {
	config: {
		columns: {
		    "id": "INTEGER PRIMARY KEY AUTOINCREMENT",
		    "colour_id": "INTEGER"
		},
		adapter: {
			type: "sql",
			collection_name: "favourite"
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
			getFavouriteList: function(){
				var collection = this;
                var sql = "SELECT * FROM " + collection.config.adapter.collection_name +"  order by id DESC";
                
                db = Ti.Database.open(collection.config.adapter.db_name);
                var res = db.execute(sql);
                var listArr = []; 
                var count = 0;
                while (res.isValidRow()){
					listArr[count] = {
					    id: res.fieldByName('id'),
					    colour_id: res.fieldByName('colour_id'),
					};
					res.next();
					count++;
				} 
				res.close();
                db.close();
                collection.trigger('sync');
                return listArr;
			},
			checkFavouriteByColourId: function(colour_id){
				var collection = this;
                var sql = "SELECT * FROM " + collection.config.adapter.collection_name + " WHERE colour_id='"+ colour_id+ "'" ;
                
                db = Ti.Database.open(collection.config.adapter.db_name);
                var res = db.execute(sql);
                var result = []; 
               
                if (res.isValidRow()){
					result = {
					    id: res.fieldByName('id'),
					    colour_id: res.fieldByName('colour_id'),
					};
					
				} 
				res.close();
                db.close();
                collection.trigger('sync');
                return result;
			},
			removeFavouriteColour: function(colour_id){
				var collection = this;
                var sql = "DELETE FROM " + collection.config.adapter.collection_name + " WHERE colour_id="+colour_id;
                db = Ti.Database.open(collection.config.adapter.db_name);
                db.execute(sql);
                db.close();
                collection.trigger('sync');
			}
		});

		return Collection;
	}
};