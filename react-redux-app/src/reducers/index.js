import {
    FETCH_HEROES_LOADING,
    FETCH_HEROES_SUCCESS,
    FETCH_HEROES_FAILURE
} from '../actions';

const initialState = {
    heroes: [],
    error: null,
    isFetching: false
 };
 function reducer(state = initialState, action) {
    console.log('reducer', action);
    switch (action.type) {
        case FETCH_HEROES_LOADING:
            return {
                ...state,
                isFetching: true,
                error: null
            };
        case FETCH_HEROES_SUCCESS:
            return {
                ...state,
                heroes: action.payload,
                isFetching: false,
                error: null
            };
        case FETCH_HEROES_FAILURE:
            return {
                ...state,
                heroes: [],
                isFetching: false,
                error: action.payload
            };
        default:
            return state;
    }
 }
 export default reducer;