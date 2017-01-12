import { GET_FILMS_REQUEST } from '../constants/index';

export default function (state = {}, action) {
    switch (action.type) {
        case GET_FILMS_REQUEST:
            fetch(`http://www.omdbapi.com/?s=${action.payload.filmTitle}`)
                .then(function (response) {
                    console.log(response.json())
                });
            break;
        default:
            return state;
    }
}