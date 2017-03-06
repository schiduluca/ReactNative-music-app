import SQLite from 'react-native-sqlite-storage';
import SQLScripts from './SQLScripts';

class SQLDatabaseUtils {


    constructor() {

    }


    errorCB(err) {
        console.log("SQL Error: " + err);
    }

    successCB() {
        console.log("SQL executed fine");
    }

    openCB() {
        console.log("Database OPENED");
    }

    insertData(song) {

        var db = SQLite.openDatabase("test.db", "1.0", "Test Database", 200000, this.openCB, this.errorCB);

        db.transaction((tx) => {
            tx.executeSql(SQLScripts.INSERT_INTO_TABLE
                .replace(':trackName', song.trackName)
                .replace(':trackPrice', song.trackPrice)
                .replace(':trackId', song.trackId)
                .replace(':artistName', song.artistName)
                .replace(':country', song.country)
                .replace(':artworkUrl100', song.image), [], (tx, results) => {
            });
        });
    }

    createTable() {
        var db = SQLite.openDatabase("test.db", "1.0", "Test Database", 200000, this.openCB, this.errorCB);

        db.transaction((tx) => {
            tx.executeSql(SQLScripts.CREATE_TABLE);
        });
    }

    getDB() {

        var db = SQLite.openDatabase("test.db", "1.0", "Test Database", 200000, this.openCB, this.errorCB);

        return db;
    }

    findAll() {

        var db = SQLite.openDatabase("test.db", "1.0", "Test Database", 200000, this.openCB, this.errorCB);
        return db;

    }

}

export default SQLDatabaseUtils;