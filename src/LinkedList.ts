import { Sortable } from "./Sortable";

class Node {
    next: Node | null = null;
    constructor(public data: number) {}
}

export class LinkedList implements Sortable {
    head: Node | null = null;
    tail: Node | null = null;
    length: number = 0;
    
    add(data: number): void {
        const node = new Node(data);
        if (!this.head) {
            this.head = node;
            this.tail = node;
        } else {
            this.tail!.next = node;
            this.tail = node;
        }
        this.length++;
    }

    at(index: number): Node {
        if (!this.head || index > this.length - 1) {
            throw new Error("Index out of bounds");
        }
        let node: Node | null = this.head;
        let counter = 0;
        while (node) {
            if (counter == index) return node;
            counter++;
            node = node.next;
        }
        // redundant statement for satisfying tsc
        throw new Error("Index out of bounds");
    }

    compare(leftIndex: number, rightIndex: number): boolean {
        if (!this.head) throw new Error("empty linked list");
        
        if (leftIndex < 0 || rightIndex > this.length - 1) {
            throw new Error("Index out of bounds");
        }

        return this.at(leftIndex).data > this.at(rightIndex).data;
    }

    // INFO: swapping node data only rather than swapping the nodes.
    swap(leftIndex: number, rightIndex: number): void {
        if (!this.head) throw new Error("empty linked list");
        
        if (leftIndex < 0 || rightIndex > this.length - 1) {
            throw new Error("Index out of bounds");
        }

        this.at(leftIndex).data ^= this.at(rightIndex).data;
        this.at(rightIndex).data ^= this.at(leftIndex).data;
        this.at(leftIndex).data ^= this.at(rightIndex).data;
    }

    print(): void {
        if (!this.head) return;
        let node: Node | null = this.head;
        let str = "";
        while(node) {
            str += String(node.data) + "->";
            node = node.next;
        }
        str += "NULL";
        console.log(str);
    }
}