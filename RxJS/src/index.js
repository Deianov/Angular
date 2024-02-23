import {of, from} from 'rxjs';
import {map} from 'rxjs/operators';

// Operators

// from
// const observable = from(fetch('https://jsonplaceholder.typicode.com/todos/1'));

// of
const observable = of(1, 2, 3);

const numbersWithSymbol = observable.pipe(map((value) => `$${value}`));

// Marble Diagrams
// relationship between input and output

const subscription = observable.subscribe(console.log);

console.log('end');
