import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import * as firebase from 'firebase';

var config = {
  apiKey: "AIzaSyAnZzUUZSK7nZPjbkMvmVOwpmx5L0CIP70",
  authDomain: "pat-scrum-poker.firebaseapp.com",
  databaseURL: "https://pat-scrum-poker.firebaseio.com",
  projectId: "pat-scrum-poker",
  storageBucket: "pat-scrum-poker.appspot.com",
  messagingSenderId: "296236030876"
};
firebase.initializeApp(config);

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
