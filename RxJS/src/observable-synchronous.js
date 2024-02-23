import {Observable} from 'rxjs';

const observable = new Observable((subscriber) => {
    subscriber.next('test');

    subscriber.complete();
});

console.log('before');

observable.subscribe({
    next: (value) => {
        console.log(value);
    },
    complete: () => {
        console.log('complete');
    },
    error: (err) => {
        console.log(err);
    },
});

console.log('after');

/* ->
before
test
complete
after
*/
