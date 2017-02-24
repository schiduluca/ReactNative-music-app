import ServiceApi from '../../networking/AppleServiceApi';

export default function fetchSongs(text) {
    return function (dispatch) {
        ServiceApi.fetchData(text, dispatch);
    }
}