import { GET_LIST_FILMS, GET_FILMS_REQUEST, GET_FILM, GET_FILM_REQUEST} from '../constants/index';

export default function (state = {}, action) {
    switch (action.type) {
        case GET_FILMS_REQUEST:
            return {isFetching: true};
        case GET_LIST_FILMS:
            return {data: action.payload.Search, isFetching: false};
        case GET_FILM_REQUEST:
            return {isFetching: true};
        case GET_FILM:
            return {data: action.payload, isFetching: false};
        default:
            return state;
    }
}