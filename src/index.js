import Rx from 'rxjs';
import printMe from './components/printMe';

printMe();

function greeter(person) {
    return 'Hello, ' + person;
}

let user = 'Jane Use1';

document.body.innerHTML = greeter(user);

let subject = new Rx.Subject();

subject.subscribe({
    next: (v) => console.log('observerA: ' + v)
});
subject.subscribe({
    next: (v) => console.log('observerB: ' + v)
});

subject.next(1);
subject.next(2);
