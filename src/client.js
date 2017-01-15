import React from 'react';
import ReactDOM from 'react-dom';
import {Router, browserHistory} from 'react-router';
import {syncHistoryWithStore} from 'react-router-redux';
import configureStore from './store/configureStore';
import {Provider} from 'react-redux';
import routes from './routes';
import styles from './components/App/main.css';

const store = configureStore();
const history = syncHistoryWithStore(browserHistory, store);

ReactDOM.render(
    <Provider store={store} className={styles.main}>
        <Router history={history}>
            {routes}
        </Router>
    </Provider>, document.getElementById('container'))
