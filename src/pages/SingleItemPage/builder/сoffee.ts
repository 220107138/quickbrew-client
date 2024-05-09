export interface Coffee {
    addSyrup(syrup: string): void;
    addMilk(milk: string): void;
    setSize(size: string): void;
    getPrice(): number;
}
