var dropQueries = [
	'DROP TABLE IF EXISTS GradingLevels',
	'DROP TABLE IF EXISTS Techniques',
	'DROP TABLE IF EXISTS GradingLevelTechniques'
];

var createQueries = [
	'CREATE TABLE IF NOT EXISTS GradingLevels (Id INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT, Title, Level, Priority INTEGER)',
	'CREATE TABLE IF NOT EXISTS Techniques (Id INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT, Title, YouTubeLink, Description)',
	'CREATE TABLE IF NOT EXISTS GradingLevelTechniques (Id INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT, GradingLevelId INTEGER, TechniqueId INTEGER, ExecOrder INTEGER)'
];

var insertQueries = [
	'INSERT INTO GradingLevels (Id, Title, Level, Priority) VALUES (1, "Kyu 10", "Basic", 1)',
    'INSERT INTO GradingLevels (Id, Title, Level, Priority) VALUES (2, "Kyu 9", "Basic", 2)',
    'INSERT INTO GradingLevels (Id, Title, Level, Priority) VALUES (3, "Kyu 8", "Basic", 3)',
    'INSERT INTO GradingLevels (Id, Title, Level, Priority) VALUES (4, "Kyu 7", "Basic", 4)',
    'INSERT INTO GradingLevels (Id, Title, Level, Priority) VALUES (5, "Kyu 6", "Basic", 5)',
    'INSERT INTO GradingLevels (Id, Title, Level, Priority) VALUES (6, "Kyu 5", "Basic", 6)',
    'INSERT INTO GradingLevels (Id, Title, Level, Priority) VALUES (7, "Kyu 4", "Basic", 7)',

	'INSERT INTO Techniques (Id, Title, YouTubeLink, Description) VALUES (1, "Migi-hanmi-Kamae", "", "")',
    'INSERT INTO Techniques (Id, Title, YouTubeLink, Description) VALUES (2, "Hidari-hanmi-Kamae", "", "")',
    'INSERT INTO Techniques (Id, Title, YouTubeLink, Description) VALUES (3, "Kamae-ni-yoru-Atemi – Sotai-dosa", "", "")',
    'INSERT INTO Techniques (Id, Title, YouTubeLink, Description) VALUES (4, "Tai-no-henko (1) – Sotai-dosa", "", "")',
    'INSERT INTO Techniques (Id, Title, YouTubeLink, Description) VALUES (5, "Tai-no-henko (2) – Sotai-dosa", "", "")',
    'INSERT INTO Techniques (Id, Title, YouTubeLink, Description) VALUES (6, "Hiriki-no-yosei (1) – Sotai-dosa", "", "")',
    'INSERT INTO Techniques (Id, Title, YouTubeLink, Description) VALUES (7, "Hiriki-no-yosei (2) – Sotai-dosa", "", "")',
    'INSERT INTO Techniques (Id, Title, YouTubeLink, Description) VALUES (8, "Suwari-waza Katate-mochi Nikajo-osae (2)", "", "")',
    'INSERT INTO Techniques (Id, Title, YouTubeLink, Description) VALUES (9, "Yokomen-uchi Yonkajo-osae (2)", "", "")',
    'INSERT INTO Techniques (Id, Title, YouTubeLink, Description) VALUES (10, "Mune-mochi Hiji-shime (2)", "", "")',
    'INSERT INTO Techniques (Id, Title, YouTubeLink, Description) VALUES (11, "Yokomen-uchi Shomen Irimi-nage (2)", "", "")',
    'INSERT INTO Techniques (Id, Title, YouTubeLink, Description) VALUES (12, "Shomen-uchi Kote-gaeshi (2)", "", "")',
    'INSERT INTO Techniques (Id, Title, YouTubeLink, Description) VALUES (13, "Ryote-mochi Hiji-ate Kokyu-nage (2)", "", "")',
    'INSERT INTO Techniques (Id, Title, YouTubeLink, Description) VALUES (14, "Suwari-waza Ryote-mochi Kokyu-ho (2)", "", "")',
    'INSERT INTO Techniques (Id, Title, YouTubeLink, Description) VALUES (15, "Shumatsu-dosa (1) – Sotai-dosa", "", "")',
    'INSERT INTO Techniques (Id, Title, YouTubeLink, Description) VALUES (16, "Shumatsu-dosa (2) – Sotai-dosa", "", "")',
    'INSERT INTO Techniques (Id, Title, YouTubeLink, Description) VALUES (17, "Shomen-zuki Renzoku-waza", "http://www.youtube.com/embed/Ck9KVD3jAQo", "(Shomen-zuki: Shihonage-kuzushi, Ikkajo-nage, Nikajo-nage, Sankajo-nage, Kote-gaeshi)")',
    'INSERT INTO Techniques (Id, Title, YouTubeLink, Description) VALUES (18, "Suwari-waza Shomen-uchi Ikkajo-osae (1)", "", "")',
    'INSERT INTO Techniques (Id, Title, YouTubeLink, Description) VALUES (19, "Yokomen-uchi Yonkajo-osae (1)", "", "")',
    'INSERT INTO Techniques (Id, Title, YouTubeLink, Description) VALUES (20, "Katate-mochi Sokumen Irimi-nage (1)", "", "")',
    'INSERT INTO Techniques (Id, Title, YouTubeLink, Description) VALUES (21, "Shomen-uchi Shomen Irimi-nage (1)", "", "")',
    'INSERT INTO Techniques (Id, Title, YouTubeLink, Description) VALUES (22, "Ryote-mochi Tenchi-nage (1)", "", "")',
    'INSERT INTO Techniques (Id, Title, YouTubeLink, Description) VALUES (23, "Katate-mochi Hiji-ate Kokyu-nage (1)", "", "")',
    'INSERT INTO Techniques (Id, Title, YouTubeLink, Description) VALUES (24, "Yokomen-uchi Kote-gaeshi Renzoku", "", "")',
    'INSERT INTO Techniques (Id, Title, YouTubeLink, Description) VALUES (25, "Yokomen-uchi Sankajo-osae (1)", "", "")',
    'INSERT INTO Techniques (Id, Title, YouTubeLink, Description) VALUES (26, "Shomen-uchi Sankajo-osae (2)", "", "")',
    'INSERT INTO Techniques (Id, Title, YouTubeLink, Description) VALUES (27, "Shomen-uchi Sankajo-nage Renzoku", "", "")',
    'INSERT INTO Techniques (Id, Title, YouTubeLink, Description) VALUES (28, "Seiza-ho", "", "")',
    'INSERT INTO Techniques (Id, Title, YouTubeLink, Description) VALUES (29, "Shikko-ho", "", "")',
    'INSERT INTO Techniques (Id, Title, YouTubeLink, Description) VALUES (30, "Zenpokaiten-Ukemi", "", "")',
    'INSERT INTO Techniques (Id, Title, YouTubeLink, Description) VALUES (31, "Koho-Ukemi", "", "")',
    'INSERT INTO Techniques (Id, Title, YouTubeLink, Description) VALUES (32, "Kata-mochi Nikajo-osae (1)", "", "")',
    'INSERT INTO Techniques (Id, Title, YouTubeLink, Description) VALUES (33, "Katate-mochi Nikajo-osae (2)", "", "")',
    'INSERT INTO Techniques (Id, Title, YouTubeLink, Description) VALUES (34, "Kata-mochi Nikajo-nage Renzoku", "", "")',
    'INSERT INTO Techniques (Id, Title, YouTubeLink, Description) VALUES (35, "Tai-no-henko (1) - tandoku-dosa", "", "")',
    'INSERT INTO Techniques (Id, Title, YouTubeLink, Description) VALUES (36, "Tai-no-henko (2) - tandoku-dosa", "", "")',
    'INSERT INTO Techniques (Id, Title, YouTubeLink, Description) VALUES (37, "Shomen-uchi Ikkajo-osae (1)", "", "")',
    'INSERT INTO Techniques (Id, Title, YouTubeLink, Description) VALUES (38, "Yokomen-uchi Ikkajo-osae (2)", "", "")',
    'INSERT INTO Techniques (Id, Title, YouTubeLink, Description) VALUES (39, "Katate-mochi Ikkajo-nage Renzoku", "", "")',
    'INSERT INTO Techniques (Id, Title, YouTubeLink, Description) VALUES (40, "Hiriki-no-yosei (1)", "", "")',
    'INSERT INTO Techniques (Id, Title, YouTubeLink, Description) VALUES (41, "Hiriki-no-yosei (2)", "", "")',
    'INSERT INTO Techniques (Id, Title, YouTubeLink, Description) VALUES (42, "Katate-mochi Shihonage (1)", "", "")',
    'INSERT INTO Techniques (Id, Title, YouTubeLink, Description) VALUES (43, "Ryote-mochi Shihonage (2)", "", "")',
    'INSERT INTO Techniques (Id, Title, YouTubeLink, Description) VALUES (44, "Shomen-zuki – Shihonage-kuzushi Renzoku", "", "")',
    'INSERT INTO Techniques (Id, Title, YouTubeLink, Description) VALUES (45, "Shumatsu-dosa (1)", "", "")',
    'INSERT INTO Techniques (Id, Title, YouTubeLink, Description) VALUES (46, "Shumatsu-dosa (2)", "", "")',
    'INSERT INTO Techniques (Id, Title, YouTubeLink, Description) VALUES (47, "Kamae-niyoru-Atemi", "", "(Shomen-uchi, Tandoku-dosa)")',
    'INSERT INTO Techniques (Id, Title, YouTubeLink, Description) VALUES (48, "Kamae-niyoru-Atemi", "", "(Tsuki, Tandoku-dosa)")',
    'INSERT INTO Techniques (Id, Title, YouTubeLink, Description) VALUES (49, "Kamae-niyoru-Atemi", "", "(Shomen-zuki, Tandoku-dosa)")',

	
	'INSERT INTO GradingLevelTechniques (GradingLevelId, TechniqueId, ExecOrder) VALUES (7, 1, 1)',
    'INSERT INTO GradingLevelTechniques (GradingLevelId, TechniqueId, ExecOrder) VALUES (7, 2, 2)',
    'INSERT INTO GradingLevelTechniques (GradingLevelId, TechniqueId, ExecOrder) VALUES (7, 3, 3)',
    'INSERT INTO GradingLevelTechniques (GradingLevelId, TechniqueId, ExecOrder) VALUES (7, 4, 4)',
    'INSERT INTO GradingLevelTechniques (GradingLevelId, TechniqueId, ExecOrder) VALUES (7, 5, 5)',
    'INSERT INTO GradingLevelTechniques (GradingLevelId, TechniqueId, ExecOrder) VALUES (7, 6, 6)',
    'INSERT INTO GradingLevelTechniques (GradingLevelId, TechniqueId, ExecOrder) VALUES (7, 7, 7)',
    'INSERT INTO GradingLevelTechniques (GradingLevelId, TechniqueId, ExecOrder) VALUES (7, 8, 8)',
    'INSERT INTO GradingLevelTechniques (GradingLevelId, TechniqueId, ExecOrder) VALUES (7, 9, 9)',
    'INSERT INTO GradingLevelTechniques (GradingLevelId, TechniqueId, ExecOrder) VALUES (7, 10, 10)',
    'INSERT INTO GradingLevelTechniques (GradingLevelId, TechniqueId, ExecOrder) VALUES (7, 11, 11)',
    'INSERT INTO GradingLevelTechniques (GradingLevelId, TechniqueId, ExecOrder) VALUES (7, 12, 12)',
    'INSERT INTO GradingLevelTechniques (GradingLevelId, TechniqueId, ExecOrder) VALUES (7, 13, 13)',
    'INSERT INTO GradingLevelTechniques (GradingLevelId, TechniqueId, ExecOrder) VALUES (7, 14, 14)',
    'INSERT INTO GradingLevelTechniques (GradingLevelId, TechniqueId, ExecOrder) VALUES (7, 15, 15)',
    'INSERT INTO GradingLevelTechniques (GradingLevelId, TechniqueId, ExecOrder) VALUES (7, 16, 16)',
    'INSERT INTO GradingLevelTechniques (GradingLevelId, TechniqueId, ExecOrder) VALUES (7, 17, 17)',
    'INSERT INTO GradingLevelTechniques (GradingLevelId, TechniqueId, ExecOrder) VALUES (6, 1, 1)',
    'INSERT INTO GradingLevelTechniques (GradingLevelId, TechniqueId, ExecOrder) VALUES (6, 2, 2)',
    'INSERT INTO GradingLevelTechniques (GradingLevelId, TechniqueId, ExecOrder) VALUES (6, 3, 3)',
    'INSERT INTO GradingLevelTechniques (GradingLevelId, TechniqueId, ExecOrder) VALUES (6, 4, 4)',
    'INSERT INTO GradingLevelTechniques (GradingLevelId, TechniqueId, ExecOrder) VALUES (6, 5, 5)',
    'INSERT INTO GradingLevelTechniques (GradingLevelId, TechniqueId, ExecOrder) VALUES (6, 6, 6)',
    'INSERT INTO GradingLevelTechniques (GradingLevelId, TechniqueId, ExecOrder) VALUES (6, 7, 7)',
    'INSERT INTO GradingLevelTechniques (GradingLevelId, TechniqueId, ExecOrder) VALUES (6, 18, 8)',
    'INSERT INTO GradingLevelTechniques (GradingLevelId, TechniqueId, ExecOrder) VALUES (6, 19, 9)',
    'INSERT INTO GradingLevelTechniques (GradingLevelId, TechniqueId, ExecOrder) VALUES (6, 20, 10)',
    'INSERT INTO GradingLevelTechniques (GradingLevelId, TechniqueId, ExecOrder) VALUES (6, 21, 11)',
    'INSERT INTO GradingLevelTechniques (GradingLevelId, TechniqueId, ExecOrder) VALUES (6, 22, 12)',
    'INSERT INTO GradingLevelTechniques (GradingLevelId, TechniqueId, ExecOrder) VALUES (6, 23, 13)',
    'INSERT INTO GradingLevelTechniques (GradingLevelId, TechniqueId, ExecOrder) VALUES (6, 15, 14)',
    'INSERT INTO GradingLevelTechniques (GradingLevelId, TechniqueId, ExecOrder) VALUES (6, 16, 15)',
    'INSERT INTO GradingLevelTechniques (GradingLevelId, TechniqueId, ExecOrder) VALUES (6, 24, 16)',
    'INSERT INTO GradingLevelTechniques (GradingLevelId, TechniqueId, ExecOrder) VALUES (5, 1, 1)',
    'INSERT INTO GradingLevelTechniques (GradingLevelId, TechniqueId, ExecOrder) VALUES (5, 2, 2)',
    'INSERT INTO GradingLevelTechniques (GradingLevelId, TechniqueId, ExecOrder) VALUES (5, 3, 3)',
    'INSERT INTO GradingLevelTechniques (GradingLevelId, TechniqueId, ExecOrder) VALUES (5, 4, 4)',
    'INSERT INTO GradingLevelTechniques (GradingLevelId, TechniqueId, ExecOrder) VALUES (5, 5, 5)',
    'INSERT INTO GradingLevelTechniques (GradingLevelId, TechniqueId, ExecOrder) VALUES (5, 6, 6)',
    'INSERT INTO GradingLevelTechniques (GradingLevelId, TechniqueId, ExecOrder) VALUES (5, 7, 7)',
    'INSERT INTO GradingLevelTechniques (GradingLevelId, TechniqueId, ExecOrder) VALUES (5, 15, 8)',
    'INSERT INTO GradingLevelTechniques (GradingLevelId, TechniqueId, ExecOrder) VALUES (5, 16, 9)',
    'INSERT INTO GradingLevelTechniques (GradingLevelId, TechniqueId, ExecOrder) VALUES (5, 25, 10)',
    'INSERT INTO GradingLevelTechniques (GradingLevelId, TechniqueId, ExecOrder) VALUES (5, 26, 11)',
    'INSERT INTO GradingLevelTechniques (GradingLevelId, TechniqueId, ExecOrder) VALUES (5, 27, 12)',
    'INSERT INTO GradingLevelTechniques (GradingLevelId, TechniqueId, ExecOrder) VALUES (4, 1, 1)',
    'INSERT INTO GradingLevelTechniques (GradingLevelId, TechniqueId, ExecOrder) VALUES (4, 2, 2)',
    'INSERT INTO GradingLevelTechniques (GradingLevelId, TechniqueId, ExecOrder) VALUES (4, 28, 3)',
    'INSERT INTO GradingLevelTechniques (GradingLevelId, TechniqueId, ExecOrder) VALUES (4, 29, 4)',
    'INSERT INTO GradingLevelTechniques (GradingLevelId, TechniqueId, ExecOrder) VALUES (4, 30, 5)',
    'INSERT INTO GradingLevelTechniques (GradingLevelId, TechniqueId, ExecOrder) VALUES (4, 31, 6)',
    'INSERT INTO GradingLevelTechniques (GradingLevelId, TechniqueId, ExecOrder) VALUES (4, 4, 7)',
    'INSERT INTO GradingLevelTechniques (GradingLevelId, TechniqueId, ExecOrder) VALUES (4, 5, 8)',
    'INSERT INTO GradingLevelTechniques (GradingLevelId, TechniqueId, ExecOrder) VALUES (4, 6, 9)',
    'INSERT INTO GradingLevelTechniques (GradingLevelId, TechniqueId, ExecOrder) VALUES (4, 7, 10)',
    'INSERT INTO GradingLevelTechniques (GradingLevelId, TechniqueId, ExecOrder) VALUES (4, 15, 11)',
    'INSERT INTO GradingLevelTechniques (GradingLevelId, TechniqueId, ExecOrder) VALUES (4, 16, 13)',
    'INSERT INTO GradingLevelTechniques (GradingLevelId, TechniqueId, ExecOrder) VALUES (4, 32, 13)',
    'INSERT INTO GradingLevelTechniques (GradingLevelId, TechniqueId, ExecOrder) VALUES (4, 33, 14)',
    'INSERT INTO GradingLevelTechniques (GradingLevelId, TechniqueId, ExecOrder) VALUES (4, 34, 15)',
    'INSERT INTO GradingLevelTechniques (GradingLevelId, TechniqueId, ExecOrder) VALUES (3, 1, 1)',
    'INSERT INTO GradingLevelTechniques (GradingLevelId, TechniqueId, ExecOrder) VALUES (3, 2, 2)',
    'INSERT INTO GradingLevelTechniques (GradingLevelId, TechniqueId, ExecOrder) VALUES (3, 28, 3)',
    'INSERT INTO GradingLevelTechniques (GradingLevelId, TechniqueId, ExecOrder) VALUES (3, 29, 4)',
    'INSERT INTO GradingLevelTechniques (GradingLevelId, TechniqueId, ExecOrder) VALUES (3, 30, 5)',
    'INSERT INTO GradingLevelTechniques (GradingLevelId, TechniqueId, ExecOrder) VALUES (3, 31, 6)',
    'INSERT INTO GradingLevelTechniques (GradingLevelId, TechniqueId, ExecOrder) VALUES (3, 35, 7)',
    'INSERT INTO GradingLevelTechniques (GradingLevelId, TechniqueId, ExecOrder) VALUES (3, 36, 8)',
    'INSERT INTO GradingLevelTechniques (GradingLevelId, TechniqueId, ExecOrder) VALUES (3, 6, 9)',
    'INSERT INTO GradingLevelTechniques (GradingLevelId, TechniqueId, ExecOrder) VALUES (3, 7, 10)',
    'INSERT INTO GradingLevelTechniques (GradingLevelId, TechniqueId, ExecOrder) VALUES (3, 15, 11)',
    'INSERT INTO GradingLevelTechniques (GradingLevelId, TechniqueId, ExecOrder) VALUES (3, 16, 12)',
    'INSERT INTO GradingLevelTechniques (GradingLevelId, TechniqueId, ExecOrder) VALUES (3, 37, 13)',
    'INSERT INTO GradingLevelTechniques (GradingLevelId, TechniqueId, ExecOrder) VALUES (3, 38, 14)',
    'INSERT INTO GradingLevelTechniques (GradingLevelId, TechniqueId, ExecOrder) VALUES (3, 39, 15)',
    'INSERT INTO GradingLevelTechniques (GradingLevelId, TechniqueId, ExecOrder) VALUES (2, 1, 1)',
    'INSERT INTO GradingLevelTechniques (GradingLevelId, TechniqueId, ExecOrder) VALUES (2, 2, 2)',
    'INSERT INTO GradingLevelTechniques (GradingLevelId, TechniqueId, ExecOrder) VALUES (2, 28, 3)',
    'INSERT INTO GradingLevelTechniques (GradingLevelId, TechniqueId, ExecOrder) VALUES (2, 29, 4)',
    'INSERT INTO GradingLevelTechniques (GradingLevelId, TechniqueId, ExecOrder) VALUES (2, 30, 5)',
    'INSERT INTO GradingLevelTechniques (GradingLevelId, TechniqueId, ExecOrder) VALUES (2, 31, 6)',
    'INSERT INTO GradingLevelTechniques (GradingLevelId, TechniqueId, ExecOrder) VALUES (2, 40, 7)',
    'INSERT INTO GradingLevelTechniques (GradingLevelId, TechniqueId, ExecOrder) VALUES (2, 41, 8)',
    'INSERT INTO GradingLevelTechniques (GradingLevelId, TechniqueId, ExecOrder) VALUES (2, 15, 9)',
    'INSERT INTO GradingLevelTechniques (GradingLevelId, TechniqueId, ExecOrder) VALUES (2, 16, 10)',
    'INSERT INTO GradingLevelTechniques (GradingLevelId, TechniqueId, ExecOrder) VALUES (2, 3, 11)',
    'INSERT INTO GradingLevelTechniques (GradingLevelId, TechniqueId, ExecOrder) VALUES (2, 42, 12)',
    'INSERT INTO GradingLevelTechniques (GradingLevelId, TechniqueId, ExecOrder) VALUES (2, 43, 13)',
    'INSERT INTO GradingLevelTechniques (GradingLevelId, TechniqueId, ExecOrder) VALUES (2, 44, 14)',
    'INSERT INTO GradingLevelTechniques (GradingLevelId, TechniqueId, ExecOrder) VALUES (1, 1, 1)',
    'INSERT INTO GradingLevelTechniques (GradingLevelId, TechniqueId, ExecOrder) VALUES (1, 2, 2)',
    'INSERT INTO GradingLevelTechniques (GradingLevelId, TechniqueId, ExecOrder) VALUES (1, 28, 3)',
    'INSERT INTO GradingLevelTechniques (GradingLevelId, TechniqueId, ExecOrder) VALUES (1, 29, 4)',
    'INSERT INTO GradingLevelTechniques (GradingLevelId, TechniqueId, ExecOrder) VALUES (1, 30, 5)',
    'INSERT INTO GradingLevelTechniques (GradingLevelId, TechniqueId, ExecOrder) VALUES (1, 31, 6)',
    'INSERT INTO GradingLevelTechniques (GradingLevelId, TechniqueId, ExecOrder) VALUES (1, 47, 7)',
    'INSERT INTO GradingLevelTechniques (GradingLevelId, TechniqueId, ExecOrder) VALUES (1, 48, 8)',
    'INSERT INTO GradingLevelTechniques (GradingLevelId, TechniqueId, ExecOrder) VALUES (1, 49, 9)',
    'INSERT INTO GradingLevelTechniques (GradingLevelId, TechniqueId, ExecOrder) VALUES (1, 3, 10)',
    'INSERT INTO GradingLevelTechniques (GradingLevelId, TechniqueId, ExecOrder) VALUES (1, 45, 11)',
    'INSERT INTO GradingLevelTechniques (GradingLevelId, TechniqueId, ExecOrder) VALUES (1, 46, 12)'
];

function initDB()
{
	//current version of data base
	var newVersion = 1.5;
	
	var db = window.openDatabase("TES.Syllabus", "", "TES.Syllabus", 1000000);
	var currentVersion = db.version;
	
	/*
	//run update scripts if required
	if (currentVersion == "1.0") {
		//update from 1.0
		
	} else if (currentVersion == "1.1") {
		//update from 1.1
	}
	*/
	
	if (currentVersion != newVersion){
		db.changeVersion(currentVersion, newVersion);
		db.transaction(populateDB, databaseTransactionError, databaseTransationSuccess);
	}
	
	return db;
}

//SQLite date is text in format: YYYY-MM-DD HH:MM:SS.SSS
function populateDB(tx) {

		 executeQueries(tx, dropQueries);

		 executeQueries(tx, createQueries);

		 executeQueries(tx, insertQueries);
}

function executeQueries(transaction, queries) {
	for (i=0; i<queries.length; i++) {
		transaction.executeSql(queries[i], null, databaseTransationSuccess, databaseTransactionError);
	}
}

function databaseTransactionError(err) {
	console.log("DB Error: " + err.code);
}

function databaseTransationSuccess(transaction, results) {
	if (results !== undefined) 
		console.log("DB Success: " + results.rowsAffected + " row affected");
	else
		console.log("DB Success");
}