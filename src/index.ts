import { Sorter } from "./Sorter";
import { NumberCollection } from "./NumberCollection";

const nCol = new NumberCollection([-1, -4, 8, 1, 1, 3, 2, -9]);
const sorter = new Sorter(nCol);
sorter.sort();
console.log(nCol.data);