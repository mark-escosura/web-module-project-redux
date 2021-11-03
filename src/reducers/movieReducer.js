import { ADD_MOVIE, DELETE_MOVIE } from '../actions/movieActions.js';
import movies from './../data.js';

const initialState = {
    movies: movies,
    appTitle: "IMDB Movie Database"
}
                                    /** leaving state as it is, will give undefine */ 
const reducer = (state = initialState, action) => { /** set state = initialState */ 
    // console.log(state); 
    switch(action.type) {
        
        case DELETE_MOVIE:
            return {
                movies: state.movies.filter(item=>(action.payload !== item.id))
            }

        case ADD_MOVIE:
            return{
                ...state.movies,
                movies: state.movies.filter(item=>(action.payload !== item.id))
            }

        default:
            return state;
    }
}

export default reducer;