import React from 'react';
import ReactDOM from 'react-dom';
import App from './component/root/App';
import * as serviceWorker from './serviceWorker';
import { Provider } from 'react-redux';
import configureStore from './redux/reducers/configureStore'
import 'bootstrap/dist/css/bootstrap.min.css';



const store = configureStore()

ReactDOM.render(
   <Provider store={store}>
  <React.StrictMode>
    <App />
  </React.StrictMode>
</Provider>
  ,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
