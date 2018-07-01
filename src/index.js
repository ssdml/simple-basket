import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import rootReducer from './reducers'
import App from './App'
import registerServiceWorker from './registerServiceWorker'
import { addItem } from './actions/'

console.log();

const store = createStore(rootReducer)

store.dispatch(addItem(10, 'tovar 1', 400));
console.log(store.getState(rootReducer));
store.dispatch(addItem(11, 'tovar 2', 400));
console.log(store.getState(rootReducer));
store.dispatch(addItem(11, 'tovar 2', 400));
console.log(store.getState(rootReducer));

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>
        ,
    document.getElementById('root')
);
registerServiceWorker();
