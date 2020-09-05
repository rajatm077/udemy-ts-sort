class Sorter {
    constructor(public collection: number[]) {}
    sort(): void {
        const { length } = this.collection;
        for (let i = 0; i < length; i++) {
            for (let j = 1; j < length - i; j++) {
                if (this.collection[j-1] > this.collection[j]) {
                    swap(this.collection, j-1, j);
                }
            }
        }  
    }
}

const sorter = new Sorter([5,10,4,1,2,-1]);
sorter.sort();
console.log(sorter.collection);

function swap(elems: number[], i: number, j: number): void {
    elems[i] ^= elems[j];
    elems[j] ^= elems[i];
    elems[i] ^= elems[j];
}