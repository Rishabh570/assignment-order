import React from 'react'
import ReactDOM from 'react-dom'
import App from './containers/App'

import {Provider} from "react-redux";
// import {createBrowserHistory} from "history"
import { createStore } from "redux"
import rootReducer from './reducers/index'

// React Router would be added here

// const hist = createBrowserHistory(); USEFUL FOR ROUTER
const store = createStore(rootReducer);

ReactDOM.render(
    <Provider store={store} >
        <App />
    </Provider>



, document.getElementById('root'))
