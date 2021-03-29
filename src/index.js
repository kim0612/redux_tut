// import React from 'react';
// import ReactDOM from 'react-dom';
// import App from './App';
// import reportWebVitals from './reportWebVitals';

// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );

// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();



//Vanilla JS
/*
  const plus = document.getElementById("plus");
  const minus = document.getElementById("minus");
  const num = document.querySelector("span");
  let count = 7;


  const updateNum = () => {
    num.innerHTML = count;
  }
  const handlePlus = () => {
    console.log("plus");
    count = count+1;
    updateNum();
  }
  const handleMinus = () => {
    console.log("Minus");
    count = count-1;
    updateNum();
  }


  plus.addEventListener("click", handlePlus);
  minus.addEventListener("click", handleMinus);
  num.innerHTML = count;
*/




//Redux_Vanilla JS
import {createStore} from "redux";

const plus = document.getElementById("plus");
const minus = document.getElementById("minus");
const num = document.querySelector("span");

const PLUS = "PLUS";
const MINUS = "MINUS";
const reducer = (state=12, action) => {
  switch (action.type) {
    case PLUS:
      console.log("plus!!");
      return state + 1;
    case MINUS:
      console.log("minus!!");
      return state - 1;
    default:
      return state;
  }
}
const store = createStore(reducer);

const updateNum = () => {
  num.innerHTML = store.getState();
}
store.subscribe(updateNum);

updateNum();
plus.addEventListener("click", () => {store.dispatch({type : PLUS});});
minus.addEventListener("click", () => {store.dispatch({type : MINUS});});