import { GET_LIST_FILMS, GET_FILMS_REQUEST, GET_FILM_REQUEST, GET_FILM} from '../constants/index';
import {getJson} from '../utils/ajax';
import {browserHistory} from 'react-router';

export function getListFilms(films) {
    return {
        type: GET_LIST_FILMS,
        payload: films
    }
}

export function getFilmsRequest() {
    return {
        type: GET_FILMS_REQUEST
    }
}

export function getFilm(film) {
    return {
        type: GET_FILM,
        payload: film
    }
}

export function getFilmRequest() {
    return {
        type: GET_FILM_REQUEST
    }
}

export function fetchFilm(id) {
    return (dispatch) => {
        dispatch(getFilmRequest());
        return getJson(`http://www.omdbapi.com/?i=`, id)
            .then(response => {
                dispatch(getFilm(response));
                browserHistory.push(`/film/${id}`);
            });
    };
}


export function fetchFilms(filmTitle) {
    return (dispatch) => {
        dispatch(getFilmsRequest());
        return getJson(`http://www.omdbapi.com/?s=`, filmTitle)
            .then(response => {
                dispatch(getListFilms(response));
                browserHistory.push(`/search?s=${filmTitle}`);
            });
    };
}