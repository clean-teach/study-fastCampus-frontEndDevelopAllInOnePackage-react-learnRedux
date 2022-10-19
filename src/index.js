import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
// import './exercise';
import { createStore } from 'redux';
import rootReducer from './modules';
import { Provider } from 'react-redux';

const store = createStore(rootReducer);
// console.log(store.getState());

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Provider store={store}>
        <App />
    </Provider>
);
