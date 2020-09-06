import Sorter from "./Sorter"

export class CharCollection extends Sorter {
    constructor(public data: string) {
        super();
    }

    get length(): number { return this.data.length; }

    compare(leftIndex: number, rightIndex: number): boolean {
        return this.data[leftIndex].toLowerCase() > this.data[rightIndex].toLowerCase();
    }
    swap(leftIndex: number, rightIndex: number): void {
        const character = this.data.split('');
        const left = character[leftIndex];
        character[leftIndex] = character[rightIndex];
        character[rightIndex] = left;
        this.data = character.join('');
    }
}