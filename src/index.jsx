import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import {Provider} from 'react-redux';
import store from './store';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  
    <Provider store={store} >
      console.log(" kuhc to hua ")
      <App />
    </Provider>
);
