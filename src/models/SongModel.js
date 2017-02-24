
class SongModel {

    constructor(json) {
        this.json = json;
        this.jsonToObject = this.jsonToObject(this.json);
    }

    jsonToObject(json) {
        this.artistName = json.artistName;
        this.trackName = json.trackName;
        this.trackPrice = json.trackPrice;
        this.country = json.country;
        this.image = json.artworkUrl100;
    }



}

export default SongModel;