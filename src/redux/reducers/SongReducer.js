import ActionTypes from '../../constants/ActionTypes';

export default function songReducer(state = {
    songs: [],
    downloadedSongs: [],
    showDownloaded : false,
    fetching: false,
    fetch: false
}, action) {
    switch (action.type) {
        case ActionTypes.FETCH_SONGS : {
            return {...state,  fetching: true, showDownloaded : false}
        }
        case ActionTypes.FETCH_SONGS_DONE : {
            return {
                ...state,
                fetching: false,
                fetched: true,
                showDownloaded : false,
                songs: action.payload.data.results
            }
        }
        case ActionTypes.DOWNLOAD_SONG : {
            return {
                ...state,
                showDownloaded : false
            }
        }
        case ActionTypes.GET_DOWNLOADED_SONGS : {
            return {
                ...state,
                downloadedSongs: action.payload
            }
        }
        case ActionTypes.GET_DOWNLOADED_SONGS_SUCCESS : {
            console.log("Songs downloaded", action.payload);
            return {
                ...state,
                showDownloaded: true,
                downloadedSongs: action.payload
            }
        }
        default :
            return state;
    }

}