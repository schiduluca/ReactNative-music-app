import {Dimensions} from 'react-native';
let deviceWidth = Dimensions.get('window').width;

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
        this.image = json.artworkUrl100.replace('100', deviceWidth);
        this.image = this.image.replace('100', deviceWidth);
        this.trackId = json.trackId;
    }



}

export default SongModel;