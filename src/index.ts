import { Sorter } from "./Sorter";
import { NumberCollection } from "./NumberCollection";
import { CharCollection } from "./CharCollection";
import { LinkedList } from "./LinkedList";

// const nCol = new NumberCollection([-1, -4, 8, 1, 1, 3, 2, -9]);
// let sorter = new Sorter(nCol);
// sorter.sort();
// console.log(nCol.data);

// const cCol = new CharCollection('XxAabfedZZy');
// sorter = new Sorter(cCol);
// sorter.sort();
// console.log(cCol.data);

let ll = new LinkedList();
ll.add(3);
ll.add(4);
ll.add(1);
ll.add(5);
ll.add(2);
console.log(ll.print());
let sorter = new Sorter(ll);
sorter.sort();
console.log(ll.print());
