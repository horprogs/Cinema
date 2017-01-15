import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, browserHistory, IndexRoute  } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';
import configureStore from './store/configureStore';
import { Provider } from 'react-redux';
import PageMain from './components/PageMain';
import PageSearch from './components/PageSearch';
import PageFilm from './components/PageFilm';
import App from './components/App';
import styles from './components/App/main.css';

const store = configureStore();
const history = syncHistoryWithStore(browserHistory, store);

ReactDOM.render(
    <Provider store={store} className={styles.main}>
        <Router history={history}>
            <Route path="/" component={App}>
                <IndexRoute component={PageMain}/>
                <Route path="search" component={PageSearch}/>
                <Route path="film/:id" component={PageFilm}/>
            </Route>
        </Router>
    </Provider>, document.getElementById('container'))

/*<Router history={history}>
 <Route path="/">
 <IndexRoute component={PageMain}/>
 <Route path="search" component={PageSearch}/>
 </Route>
 </Router>*/