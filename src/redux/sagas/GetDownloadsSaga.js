import ActionTypes from '../../constants/ActionTypes';
import {takeLatest} from 'redux-saga';
import { call, put } from 'redux-saga/effects';
import SQLDatabaseUtils from '../../utils/SQLDatabaseUtils';

let sqlUtils = new SQLDatabaseUtils();

function* getDownloads({payload}) {
    yield call(sqlUtils.insertData, payload);
}

export default function* watchSong() {
    yield* takeLatest(ActionTypes.DOWNLOAD_SONG, getDownloads)
}

