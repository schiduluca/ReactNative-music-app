import ActionTypes from '../../constants/ActionTypes';

export default (payload) => ({
    type : ActionTypes.FETCH_SONGS,
    payload
});
