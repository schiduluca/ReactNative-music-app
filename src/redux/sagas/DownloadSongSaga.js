import ActionTypes from '../../constants/ActionTypes';
import {takeLatest} from 'redux-saga';
import { call, put } from 'redux-saga/effects';
import SQLDatabaseUtils from '../../utils/SQLDatabaseUtils';
import getDownloadedSongsSuccess from '../actions/getDownloadedSongsSuccess';

let sqlUtils = new SQLDatabaseUtils();

function* downloadSong({payload}) {
    const data = yield call(sqlUtils.findAll, payload);
    yield put(getDownloadedSongsSuccess(data));
}

export default function* watchDownload() {
    yield* takeLatest(ActionTypes.GET_DOWNLOADED_SONGS, downloadSong)
}

