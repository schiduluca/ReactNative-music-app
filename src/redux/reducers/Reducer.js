import {combineReducers} from 'redux';
import songReducer from './SongReducer';

export default combineReducers({
    songs : songReducer
});
