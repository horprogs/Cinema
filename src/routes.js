import React from 'react';
import {Route, IndexRoute} from 'react-router';
import PageMain from './components/PageMain';
import PageSearch from './components/PageSearch';
import PageFilm from './components/PageFilm';
import App from './components/App';

export default (
    <Route path="/" component={App}>
        <IndexRoute component={PageMain}/>
        <Route path="search" component={PageSearch}/>
        <Route path="film/:id" component={PageFilm}/>
    </Route>
);

