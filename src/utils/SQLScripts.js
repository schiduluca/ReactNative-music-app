export default SQLScripts = {
    CREATE_TABLE : "CREATE TABLE songs (" +
    "trackId PRIMARY KEY ASC," +
    "trackName TEXT," +
    "artistName TEXT," +
    "trackPrice INTEGER," +
    "country TEXT," +
    "artworkUrl100 TEXT);",

    INSERT_INTO_TABLE : 'INSERT INTO songs(trackId, trackName, artistName, trackPrice, country, artworkUrl100)' +
    'VALUES(:trackId, ":trackName", ":artistName", :trackPrice, ":country", ":artworkUrl100");',

    SELECT_BY_ID : "SELECT * FROM songs where trackId = :trackId;",

    SELECT_ALL : "SELECT * FROM songs;"

}