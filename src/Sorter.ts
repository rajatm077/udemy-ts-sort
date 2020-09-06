interface Sortable {
    length: number;
    compare(leftIndex: number, rightIndex: number): boolean;
    swap(leftIndex: number, rightIndex: number): void;
}

export class Sorter {
    constructor(public collection: Sortable) {}
    
    sort(): void {
        const length = this.collection.length;
        for (let i = 0; i < length; i++) {
            for (let j = 1; j < length - i; j++) {
                if (this.collection.compare(j-1, j)) {
                    this.collection.swap(j-1, j);
                }
            }
        }  
    }
}