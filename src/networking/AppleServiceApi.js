import axios from 'axios';


class AppleServiceApi {

    constructor() {
        this.data = null;
    }

    static fetchData(text, dispatch) {
        axios("https://itunes.apple.com/search?term=" + text)
            .then((result) => {
                this.data = result.data;
            })
            .then((res) => {
            console.log(res);
            dispatch({type : "FETCH_SONGS_DONE", data : res})
        });
    }


}

export default AppleServiceApi;
