import { Sorter } from "./Sorter";
import { NumberCollection } from "./NumberCollection";
import { CharCollection } from "./CharCollection";
const nCol = new NumberCollection([-1, -4, 8, 1, 1, 3, 2, -9]);
let sorter = new Sorter(nCol);
sorter.sort();
console.log(nCol.data);

const cCol = new CharCollection('XxAabfedZZy');
sorter = new Sorter(cCol);
sorter.sort();
console.log(cCol.data);
