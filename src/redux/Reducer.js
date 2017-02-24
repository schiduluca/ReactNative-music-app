export default function reducer(state={
    songs : [],
    fetching : false,
    fetch : false
}, action) {

    switch (action.type) {
        case "FETCH_SONGS" : {
            return {...state,  fetching : true}
        }
        case "FETCH_SONGS_DONE" : {
            return {
                ...state,
                fetching : false,
                fetched : true,
                songs : action.payload
            }
        }
    }
  }