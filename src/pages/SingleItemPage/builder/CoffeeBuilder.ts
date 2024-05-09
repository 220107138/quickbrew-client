import { Coffee } from "./сoffee";

class CoffeeBuilder implements Coffee {
    private syrup: string = '';
    private milk: string = '';
    private size: string = '';

    addSyrup(syrup: string): void {
        this.syrup = syrup;
    }

    addMilk(milk: string): void {
        this.milk = milk;
    }

    setSize(size: string): void {
        this.size = size;
    }

    getPrice(): number {
        let basePrice = 2;
        let price = basePrice;

        if (this.syrup === 'vanilla') {
            price += 1;
        } else if (this.syrup === 'caramel') {
            price += 1.5;
        }


        if (this.milk === 'soy') {
            price += 0.5;
        } else if (this.milk === 'almond') {
            price += 0.75;
        }


        if (this.size === 'medium') {
            price += 1;
        } else if (this.size === 'large') {
            price += 2;
        }

        return price;
    }
}