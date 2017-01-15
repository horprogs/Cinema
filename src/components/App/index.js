import React from 'react';
import styles from './main.css';

const App = ({children}) => (
    <div className={styles.page}>
        {children}
    </div>
)

export default App;