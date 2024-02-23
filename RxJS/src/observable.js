import {Observable} from 'rxjs';

const observable = new Observable((subscriber) => {
    const id = setInterval(() => {
        subscriber.next('test');
        console.log('leak');
    }, 1000);

    // remove: log 'test' and 'leak' forever
    subscriber.complete();

    // remove: log 'leak' forever
    return () => {
        clearInterval(id);
    };
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

/*
before
complete
after
*/
