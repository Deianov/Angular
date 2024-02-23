import {Observable} from 'rxjs';

const observable = new Observable((subscriber) => {
    subscriber.next('Hello world');
    // print error and terminate the observable
    // subscriber.error('Error');
    subscriber.next('test');

    // disable pushing of more next functions
    subscriber.complete();
    subscriber.next('skip');
});

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

/* ->
Hello world
test
complete
*/
