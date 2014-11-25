exports.definition = {
	config: {
		columns: {
		    "id": "INTEGER",
		    "name": "TEXT",
		    "code": "TEXT",
		    "rgb": "TEXT",
		    "cmyk": "TEXT", 
		    "sample": "TEXT",
		    "thumb": "TEXT"
		},
		adapter: {
			type: "sql",
			collection_name: "colour"
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
			getColourList: function(){
				var collection = this;
                var sql = "SELECT * FROM " + collection.config.adapter.collection_name +"  order by id DESC";
                
                db = Ti.Database.open(collection.config.adapter.db_name);
                var res = db.execute(sql);
                var listArr = []; 
                var count = 0;
                while (res.isValidRow()){
                	var c = res.fieldByName('rgb').split(/,\s*/);
                	 
					listArr[count] = { 
							id: res.fieldByName('id'),
						    name: res.fieldByName('name'),
						    code: res.fieldByName('code'),
						    rgb: res.fieldByName('rgb'),
						    cmyk: res.fieldByName('cmyk'),
						    sample: res.fieldByName('sample'),
						    thumb: res.fieldByName('thumb'),
						    contrast: parseInt(c[0])+parseInt(c[1])+parseInt(c[2])
					};	
					 
					res.next();
					count++;
				} 
			 
				res.close();
                db.close();
                collection.trigger('sync');
                return listArr;
			},
			getColourById : function(id){
				var collection = this;
                var sql = "SELECT * FROM " + collection.config.adapter.collection_name + " WHERE id='"+ id+ "'" ;
                
                db = Ti.Database.open(collection.config.adapter.db_name);
                var res = db.execute(sql);
                var arr = []; 
               
                if (res.isValidRow()){
					arr = {
					    id: res.fieldByName('id'),
					    name: res.fieldByName('name'),
					    code: res.fieldByName('code'),
					    rgb: res.fieldByName('rgb'),
					    cmyk: res.fieldByName('cmyk'),
					    sample: res.fieldByName('sample'),
					    thumb: res.fieldByName('thumb')
					};
					
				} 
				res.close();
                db.close();
                collection.trigger('sync');
                return arr;
			},
			resetColour : function(){
				var collection = this;
                var sql = "DELETE FROM " + collection.config.adapter.collection_name;
                db = Ti.Database.open(collection.config.adapter.db_name);
                db.execute(sql);
                db.close();
                collection.trigger('sync');
			},
			getColourByQuery: function(query){
				var collection = this;
                var sql = "SELECT * FROM " + collection.config.adapter.collection_name + " WHERE name LIKE '%"+ query+ "%' OR code='%"+ query+"%'" ;
                
                db = Ti.Database.open(collection.config.adapter.db_name);
                var res = db.execute(sql);
                var listArr = []; 
                var count = 0;
                while (res.isValidRow()){
					listArr[count] = {
					    id: res.fieldByName('id'),
					    name: res.fieldByName('name'),
					    code: res.fieldByName('code'),
					    rgb: res.fieldByName('rgb'),
					    cmyk: res.fieldByName('cmyk'),
					    sample: res.fieldByName('sample'),
					    thumb: res.fieldByName('thumb')
					};
					res.next();
					count++;
				} 
				res.close();
                db.close();
                collection.trigger('sync');
                return listArr;
			},
			addColours : function(arr) {
				var collection = this;
                db = Ti.Database.open(collection.config.adapter.db_name);
	           
	            db.execute("BEGIN");
				arr.forEach(function(entry) {
		       		sql_query = "INSERT INTO "+ collection.config.adapter.collection_name + "(id, name, code,RGB, CMYK,sample, thumb ) VALUES ('"+entry.id+"', '"+entry.name+"', '"+entry.code+"', '"+entry.RGB+"', '"+entry.CMYK+"', '"+entry.sample+"', '"+entry.thumb+"')";
					/*var colour = Alloy.createModel('colour', {
				        id: entry.id,
					    name: entry.name,
					    code: entry.code,
					    rgb: entry.RGB,
					    cmyk: entry.CMYK,
					    sample: entry.sample,
					    thumb: entry.thumb
				    });
				    colour.save();*/
				    db.execute(sql_query);
				});
                db.execute("COMMIT");
	            db.close();
	            collection.trigger('sync');
            },
			getClosestColourList: function(closest_r, closest_g, closest_b){
				var collection = this;
                var sql = "SELECT * FROM " + collection.config.adapter.collection_name +"  order by id DESC";
                
                db = Ti.Database.open(collection.config.adapter.db_name);
                var res = db.execute(sql);
                var listArr = []; 
                while (res.isValidRow()){
                	var c = res.fieldByName('rgb').split(/,\s*/);
                	
                	var diff_min = 50;
                	var index = -1;
                	var diff_r = Math.abs(closest_r - c[0]);
                	var diff_g = Math.abs(closest_g - c[1]);
                	var diff_b = Math.abs(closest_b - c[2]);
                	// var diff = diff_r+diff_g+diff_b;
                	var diff = Math.max(diff_r, diff_g, diff_b);
                	
                	// if (diff_r<=diff_min && diff_g<=diff_min && diff_b<=diff_min)
                	if (diff<=diff_min) {
                			for (var i=0; i<listArr.length; i++) {
                				if (diff <= listArr[i].diff) {
                					index = i;
                					break;
                				}	
                			}
                			
							if (index < 0){
								index = listArr.length;
							}
							
							
								listArr.splice(index, 0,
        						{
								    id: res.fieldByName('id'),
								    name: res.fieldByName('name'),
								    code: res.fieldByName('code'),
								    rgb: res.fieldByName('rgb'),
								    cmyk: res.fieldByName('cmyk'),
								    sample: res.fieldByName('sample'),
					    			thumb: res.fieldByName('thumb'),
								    diff: diff
								} 
        					);
                		}
					res.next();
				} 
				
				 
				res.close();
                db.close();
                collection.trigger('sync');
                return listArr;
			}
		});

		return Collection;
	}
};