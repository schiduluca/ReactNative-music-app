import ActionTypes from '../constants/ActionTypes';

export default function reducer(state={
    songs : [],
    fetching : false,
    fetch : false
}, action) {

    switch (action.type) {
        case ActionTypes.FETCH_SONGS : {
            console.log("Hey there");
            return {...state,  fetching : true}
        }
        case ActionTypes.FETCH_SONGS_DONE : {
            return {
                ...state,
                fetching : false,
                fetched : true,
                songs : action.payload
            }
        }
    }
  }