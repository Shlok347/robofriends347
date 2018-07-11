import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './containers/App';
import registerServiceWorker from './registerServiceWorker';
import 'tachyons'; 

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();

//const promise1 = new Promise ((resolve,reject) => {
//    setTimeout(resolve,100,'Shlok')
//})
//
//const promise2 = new Promise ((resolve,reject) => {
//    setTimeout(resolve,1000,'Shibbu')
//})
//
//const promise3 = new Promise ((resolve,reject) => {
//    setTimeout(resolve,5000,'Kamal')
//})
//
//Promise.all([promise1, promise2, promise3])
//.then (values => {
//    console.log(values);
//})

fetch('https://jsonplaceholder.typicode.com/users')
.then(resp => resp.json())
.then(console.log)
