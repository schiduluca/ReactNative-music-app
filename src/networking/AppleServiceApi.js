import axios from 'axios';


class AppleServiceApi {

    constructor() {
        this.data = null;
    }

    static fetchData(text) {
        return axios.get("https://itunes.apple.com/search?term=" + text + "&limit=15");
    }

    static async fetchDataAsync(text) {
        return await axios.get("https://itunes.apple.com/search?term=" + text);
    }

}

export default AppleServiceApi;
