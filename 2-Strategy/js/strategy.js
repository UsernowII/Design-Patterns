// Context
class SaleContext {

    constructor(strategy) {
        this.strategy = strategy;
    
    }

    setStrategy(strategy) {
        this.strategy = strategy;
    }

    //Action
    calculate(amount){
        return this.strategy.calculate(amount);
    }

}

// STRATEGY
class RegularSaleStrategy {
    constructor(tax) {
        this.tax = tax;
    }

    calculate(amount){
        return amount + (this.tax * amount);
    }
}

// STRATEGY
class DiscountSaleStrategy {

    constructor(tax, discount){
        this.tax = tax;
        this.discount = discount;
    }

    calculate(amount){
        return amount + (amount * this.tax) - this.discount
    }
}

// STRATEGY
class ForeignSalesStrategy {

    calculate(amount){
        return amount * this.getDollarprice();
    }

    getDollarprice(){ // call api get TRM COP to dollar
        return 4500;
    }
}


const regularSale = new RegularSaleStrategy(0.19);
const discountSale = new DiscountSaleStrategy(0.19, 5000);
const foreingSale = new ForeignSalesStrategy();

const sale1 = new SaleContext(regularSale);
console.log(sale1.calculate(100000));

sale1.setStrategy(discountSale);
console.log(sale1.calculate(100000))

sale1.setStrategy(foreingSale);
console.log(sale1.calculate(25))