import {Observable} from 'rxjs';

const observable = new Observable((subscriber) => {
    const id = setInterval(() => {
        subscriber.next('test');
        console.log('leak');
    }, 1000);

    return () => {
        clearInterval(id);
    };
});

const subscription = observable.subscribe({
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

setTimeout(() => {
    subscription.unsubscribe();
}, 4000);

/*
before
complete
after
*/
