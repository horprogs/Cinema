import { GET_ITEM_FILMS, GET_LIST_FILMS, GET_FILMS_REQUEST} from '../constants/index';

export default function (state = {}, action) {
    switch (action.type) {
        case GET_FILMS_REQUEST:
            return {isFetching: true};
        case GET_LIST_FILMS:
            return {data: action.payload.Search, isFetching: false};
        default:
            return state;
    }
}