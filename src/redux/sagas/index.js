import {fork} from 'redux-saga/effects';
import watch from './SongsSaga';
import watchDownload from './DownloadSongSaga';
import watchSong from './GetDownloadsSaga';

export default function* root() {
    yield [
        fork(watch),
        fork(watchDownload),
        fork(watchSong)
    ];
}