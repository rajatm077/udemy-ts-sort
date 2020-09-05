import { spawn } from "child_process";
let elems: number[] = [5,0,4,1,2,-1];
bubbleSort(elems);
console.log(elems);

function bubbleSort(elems: number[]): number[] {
    for (let i = 0; i < elems.length; i++) {
        for (let j = 1; j < elems.length - i; j++) {
            if (elems[j-1] > elems[j]) {
                swap(elems, j-1, j);
            }
        }
    }
    return elems;
}

function swap(elems: number[], i: number, j: number): void {
    elems[i] ^= elems[j];
    elems[j] ^= elems[i];
    elems[i] ^= elems[j];
}