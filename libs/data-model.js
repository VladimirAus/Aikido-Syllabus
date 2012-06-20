var GradingLevelQueries = {
	'SelectAll': 'SELECT Id, Title, Level, Priority FROM GradingLevels ORDER BY Priority',
	'Select' : 'SELECT * FROM GradingLevels WHERE Id=?',
	'Insert' : 'INSERT INTO GradingLevels (Title, Level, Priority) VALUES (?, ?, ?)',
	'Update' : 'UPDATE GradingLevels SET Title = ?, Level = ?, Priority = ? WHERE Id = ?',
	'Delete' : 'DELETE FROM GradingLevels WHERE Id = ?'
};

var TechniqueQueries = {
	'SelectAll' : 'SELECT Id, Title, YouTubeLink, Description FROM Techniques ORDER BY Title',
	'Select' : 'SELECT Id, Title, YouTubeLink, Description FROM Techniques WHERE Id=?',
	'Insert' : 'INSERT INTO Techniques (Title, YouTubeLink) VALUES (?, ?)',
	'Update' : 'UPDATE Techniques SET Title = ?, YouTubeLink = ? WHERE Id = ?',
	'Delete' : 'DELETE FROM Techniques WHERE Id = ?'
};

var GradeLevelTechQueries = {
	'Select' : 'SELECT Techniques.Id, Techniques.Title, Techniques.YouTubeLink, Techniques.Description FROM GradingLevelTechniques inner join Techniques on GradingLevelTechniques.TechniqueId = Techniques.Id WHERE GradingLevelTechniques.GradingLevelId=? ORDER BY GradingLevelTechniques.ExecOrder',
	'Insert' : 'INSERT INTO GradingLevelTechniques (GradingLevelId, TechniqueId, ExecOrder) VALUES (?, ?, ?)',
	'Update' : 'UPDATE GradingLevelTechniques SET ExecOrder = ? WHERE GradingLevelId = ? AND TechniqueId = ?',	
	'Delete' : 'DELETE FROM GradingLevelTechniques WHERE GradingLevelId = ? AND TechniqueId = ?'
};

var Technique = function() {
	this.Id = ko.observable();
	this.Title = ko.observable();
	this.YouTubeLink = ko.observable();
	this.Description = ko.observable();
	
	this.load = function(id) {
		return true;
	}
	
	this.copy = function(obj) {
		this.Id(obj.Id());
		this.Title(obj.Title());
		this.YouTubeLink(obj.YouTubeLink());
		this.Description(obj.Description());
	}
	
	this.save = function() {
		return true;
	}
	
	this.delete = function() {
		return true;
	}
	
}

var TechniqueList = function () {
	
	this.Techniques = ko.observableArray([]);
	
	this.isEditMode = ko.observable(false);
	this.isReadMode = ko.computed(function(){
			return !this.isEditMode();
		}, this);
		
	this.loadAll = function () {
		return true;
	};
	
	this.loadForGradingLevel = function (gradingLevelId) {
		var self = this;
		self.Techniques.removeAll();
		
		ReFuelDB.transaction(function(tx) {
			tx.executeSql(
				GradeLevelTechQueries.Select, 
				[gradingLevelId], 
				function (tx, results) {
						
					for(index = 0; index < results.rows.length; index++) {
						
						currentRow = results.rows.item(index);
						
						var technique = new Technique();
						technique.Id(currentRow.Id);
						technique.Title(currentRow.Title);
						technique.YouTubeLink(currentRow.YouTubeLink);
						technique.Description(currentRow.Description);
						
						self.Techniques.push(technique);
					}
				}, 
				databaseTransactionError);
			}, 
		databaseTransactionError);
	}
}

var GradingLevel = function () {
	var self = this;
	
	self.Id = ko.observable();
	self.Title = ko.observable();
	self.Level = ko.observable();
	self.Priority = ko.observable();
		
	// Copy data from passed vehicle to the current object
	self.copy = function (obj) {
		this.Id(obj.Id());
		this.Title(obj.Title());
		this.Level(obj.Level());
		this.Priority(obj.Priority());
	}
	
	self.reload = function () {
		if (self.Id() !== undefined) {
			ReFuelDB.transaction(function(tx) {
			tx.executeSql(
				GradingLevelQueries.Select, 
				[self.Id()], 
				function (tx, results) {
					if (results.rows.length > 0) {
						currentRow = results.rows.item(0);
						
						self.Title(currentRow.Title);
						self.Level(currentRow.Level);
						self.Priority(currentRow.Priority);
					}
				}, 
				databaseTransactionError);
			}, 
		databaseTransactionError);
			}
		}
	
	self.save = function () {
		var self = this;
		
		if (self.Id() === undefined) {
			
			//insert new item
			ReFuelDB.transaction(function(tx) {
				tx.executeSql(
					GradingLevelQueries.Insert,
					[self.Title(), self.Level(), self.Priority()],
					function (tx, results) {
						
						//update newly inserted vehicle id
						self.Id(results.Id);
						
						}
					); 
				}, databaseTransactionError);
			
		} else {
			//update existing item
			ReFuelDB.transaction(function(tx) {
			tx.executeSql(
				GradingLevelQueries.Update,
				[self.Title(), self.Level(), self.Priority(), self.Id()]
				); 
			}, 
			databaseTransactionError);
		}
		
		return true;
	}
	
	self.delete = function () {
		var self = this;
		
		if (self.Id() > -1) {
			
			ReFuelDB.transaction(function(tx) {
				tx.executeSql(
					GradingLevelQueries.Delete,
					[self.Id()]
					); 
				}, databaseTransactionError);
		} 
		
		return true;
	}
};

var GradingLevelList = function () {
	
	var self = this;
	
	self.GradingLevels = ko.observableArray([]);
	
	self.isEditMode = ko.observable(false);
	self.isReadMode = ko.computed(function(){
			return !this.isEditMode();
		}, this);
		
	self.loadData = function () {
		
		var self = this;
		self.GradingLevels.removeAll();
		
		ReFuelDB.transaction(function(tx) {
			tx.executeSql(
				GradingLevelQueries.SelectAll, 
				[], 
				function (tx, results) {
						
					for(index = 0; index < results.rows.length; index++) {
						
						currentRow = results.rows.item(index);
						
						var gradingLevel = new GradingLevel();
						gradingLevel.Id(currentRow.Id);
						gradingLevel.Title(currentRow.Title);
						gradingLevel.Level(currentRow.Level);
						gradingLevel.Priority(currentRow.Priority);
						
						self.GradingLevels.push(gradingLevel);
					}
				}, 
				databaseTransactionError);
			}, 
		databaseTransactionError);
		
		};
		
	self.delete = function(obj) {
		obj.delete();
		self.GradingLevels.remove(obj);
		};

	self.add = function(obj) {
			self.GradingLevels.push(obj);
		};
	};