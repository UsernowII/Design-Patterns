
// Component
interface Component {

    getDetail() :string;

}

// Concrete Component
class ProductComponent implements Component{
    
    protected name :string;

    constructor(name :string) {
        this.name = name;
    }
    
    public getDetail(): string {
        return `${this.name}`
    }
    
}


// Base Decorator
abstract class ProductDecorator implements Component{

    protected component :Component;

    constructor(component :Component) {
        this.component = component;
    }

    public getDetail(): string {
        return this.component.getDetail();
    }
    
}

// Concrete Decorator 1
class ComercialInfoProductDecorator extends ProductDecorator {
    
    private tradename :string;
    private brand :string;

    constructor(component :Component, brand :string, tradename :string, ) {
        super(component);
        this.brand = brand;
        this.tradename = tradename;
    }


    public getDetail(): string {
        return `${this.tradename} ${this.brand} ${super.getDetail()}`;
    }

};

// Concrete Decorator 2
class StoreProductDecorator extends ProductDecorator {
    
    private price :number;

    constructor(component :Component, price :number) {
        super(component);
        this.price = price;
    }

    public getDetail(): string {
        return `${super.getDetail()} ${this.price}`;
    }

};

// Concrete Decorator 3
class HtmlProductDecorator extends ProductDecorator {
    
    public getDetail(): string {
        return `<h1>Information about product </h1>
        <p>${super.getDetail()}</p>`;
    }

};


// Execution
const productComponent = new ProductComponent("Cerveza");
console.log(productComponent.getDetail());

// wrapper 1
const comercialInfo = new ComercialInfoProductDecorator(productComponent, "Fuller's", "London Porter");
console.log(comercialInfo.getDetail());

// wrapper 2
const storeProduct = new StoreProductDecorator(productComponent, 15.5);
console.log(storeProduct.getDetail());

// wrapper 2 with decorator 1
const storeProduct2 = new StoreProductDecorator(comercialInfo, 25.2);
console.log(storeProduct2.getDetail());

// wrapper 3 with wrapper 2 with wrapper 1
const htmlProduct = new HtmlProductDecorator(storeProduct2);
console.log(htmlProduct.getDetail());