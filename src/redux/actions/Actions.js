import ActionTypes from '../../constants/ActionTypes';

export const searchSongs = (payload) => ({
    type : ActionTypes.SEARCH_SONGS,
    payload
});

export const songsFetched = (songs) => ({
    type : ActionTypes.FETCH_SONGS_DONE,
    songs
});