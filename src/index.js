// import Rx from 'rxjs';
//
// function greeter(person) {
//     return 'Hello, ' + person;
// }
//
// let user = 'Jane Use1';
//
// document.body.innerHTML = greeter(user);
//
// let subject = new Rx.Subject();
//
// subject.subscribe({
//     next: (v) => console.log('observerA: ' + v)
// });
// subject.subscribe({
//     next: (v) => console.log('observerB: ' + v)
// });
//
// subject.next(1);
// subject.next(2);

// import React from  'react';
// import ReactDOM from 'react-dom';
//
// ReactDOM.render(
//     <h1>Hello, world!</h1>,
//     document.getElementById('app')
// );

import * as React from "react";
import * as ReactDOM from "react-dom";

import { Hello } from "./components/Hello";

ReactDOM.render(
    <Hello compiler="TypeScript" framework="React" />,
    document.getElementById("app")
);