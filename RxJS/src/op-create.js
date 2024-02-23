import {of, from} from 'rxjs';

// declarative with operators

/*
from
arr -> ...
'str' -> 's', 't', 'r'

*/
const observable = from(fetch('https://jsonplaceholder.typicode.com/todos/1'));
const subscription = observable.subscribe(console.log);
