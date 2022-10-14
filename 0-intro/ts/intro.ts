

class Drink2 {

    private name: string;

    constructor(name: string){
        this.name = name;
    }

    info(): string{

        return this.name;
    }

}


interface Product {
    price: number;
    getPrice(): string;
}

const drink2 = new Drink("agua");
drink.info();

class Beer2 extends Drink implements Product {

    #alcohol: number;
    price: number;

    constructor(name: string, alcohol : number, price: number){
        super(name);
        this.#alcohol = alcohol;
        this.price = price;
    }

    getPrice(): string {
        return "Beer $" + this.price;
    }

}


class Snack implements Product {
    price: number;
    name: string;

    constructor(name: string, price: number){
        this.name = name;
        this.price = price;
    }

    getPrice(): string {
        return "Snack: $ " + this.price;
    }


}


const beer2 =  new Beer2("erdinger", 8.5, 100);
console.log(beer.info());

const products: Product[] = [
    new Beer2("corona", 4.5, 10),
    new Snack("papas", 0.5),
    new Beer2("Heineken", 5, 1.2)
];

function getPrices(items: Product[]){
    for (const item of items) { 
        console.log(item.getPrice())
    }
};

getPrices(products);