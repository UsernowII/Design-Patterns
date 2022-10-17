
// Component 

class ProductComponent {

    constructor(name) {
        this.name = name;
    }

    // operations
    getDetail(){ 
        return `${this.name}`;
    }

}

// Base Decorator
class ProductDecorator {
    // Recibe un componente del tipo interface Component

    constructor(productComponent) {
        this.productComponent = productComponent;
    };

    // operations
    getDetail(){
        return this.productComponent.getDetail();
    }
}

// Concrete Decortadot a
class ComercialInfoProductDecorator extends ProductDecorator {

    constructor(productComponent, tradename, brand) {
        super(productComponent);
        this.tradename = tradename;
        this.brand = brand;
    }

    getDetail(){
        return `${this.tradename} ${this.brand} ${super.getDetail()};`
    }
}


// Concrete Decortadot b
class StoreProductDecorator extends ProductDecorator {

    constructor(productComponent, price) {
        super(productComponent);
        this.price = price;
    }

    getDetail(){
        return `${super.getDetail()} ${this.price};`
    }
}


// Concrete Decortadot c
class HTMLProductDecorator extends ProductDecorator {

    getDetail(){
        return `<h2>Information about product</h2>
        <p>${super.getDetail()}</p>
        <p>Wrapper Wrapped</p>`;
    }
}


// Execution

// Component
const productComponent = new ProductComponent("Cerveza");
console.log("====Component====")
console.log(productComponent.getDetail());

// Decorator a
const comercialInfoProduct = 
    new ComercialInfoProductDecorator(productComponent, "London Porter", "Fuller's")
console.log("====Decorator A ====")
console.log(comercialInfoProduct.getDetail());

// Decortador b
const storeProduct = new StoreProductDecorator(productComponent, 15.5);
console.log("====Decorator B ====")
console.log(storeProduct.getDetail());

// Decorator b wth decorator 1
const storeProduct2 = new StoreProductDecorator(comercialInfoProduct, 14.8);
console.log("====Decorator B with decorator A ====")
console.log(storeProduct2.getDetail());

// Decorator c with decorator A and B
const htmlProduct = new HTMLProductDecorator(storeProduct2);
myDiv.innerHTML = htmlProduct.getDetail(); 
console.log("====Decorator C with decorator A and B====")
console.log(htmlProduct.getDetail());