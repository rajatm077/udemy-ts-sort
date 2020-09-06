export default abstract class Sorter {
    abstract compare(leftIndex: number, righIndex: number): boolean;
    abstract swap(leftIndex: number, righIndex: number): void;
    abstract length: number;
    
    sort(): void {
        for (let i = 0; i < this.length; i++) {
            for (let j = 1; j < this.length - i; j++) {
                if (this.compare(j-1, j)) {
                    this.swap(j-1, j);
                }
            }
        }  
    }
}