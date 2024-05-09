import { Coffee } from "./сoffee";

class CoffeeDirector {
    private coffeeBuilder: Coffee;

    constructor(coffeeBuilder: Coffee) {
        this.coffeeBuilder = coffeeBuilder;
    }

    buildCoffee(syrup: string, milk: string, size: string): Coffee {
        this.coffeeBuilder.addSyrup(syrup);
        this.coffeeBuilder.addMilk(milk);
        this.coffeeBuilder.setSize(size);
        return this.coffeeBuilder;
    }
}