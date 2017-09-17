import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers from './src/reducers';
import App from './src/App';

class AppRoot extends Component {

    render() {
        return (
            <Provider store={createStore(reducers)}>
                <App />
            </Provider>
        );
    }

}

export default AppRoot;
