import ActionTypes from '../../constants/ActionTypes';
import AppleServiceApi from '../../networking/AppleServiceApi';
import {takeLatest} from 'redux-saga';
import { call, put } from 'redux-saga/effects';
import fetchSongsSuccess from '../actions/fetchSongsSuccess';


function* fetchSongs({payload}) {
    const songs = yield call(AppleServiceApi.fetchData, payload);
    yield put(fetchSongsSuccess(songs));
}

export default function* watch() {
    yield* takeLatest(ActionTypes.FETCH_SONGS, fetchSongs);
}

