export const FETCH_HEROES_LOADING = 'FETCH_HEROES_LOADING';
export const FETCH_HEROES_SUCCESS = 'FETCH_HERORES_SUCCESS';
export const FETCH_HEROES_FAILURE = 'FETCH_HEROES_FAILURE';

export const heroesLoading = () => ({ type: FETCH_HEROES_LOADING });

export const heroesSuccess = data => ({
   type: FETCH_HEROES_SUCCESS,
   payload: data
});

export const heroesFailure = error => ({
    type: FETCH_HEROES_FAILURE,
    payload: error
});

export function fetchHeroes() {
    return function(dispatch) {
        dispatch(heroesLoading());
       return fetch(`https://overwatch-api.net/api/v1/hero`)
       .then(res => res.json())
       .then(json =>
       dispatch(heroesSuccess(json.results)))
       .catch(err => dispatch(heroesFailure(err)));
    };
}