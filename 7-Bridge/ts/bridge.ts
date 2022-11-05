
// Implementor
interface ListImplementor {
    elements: number[];

    add(number: number): void;
    getElement(): number[];
}

class OrderedList implements ListImplementor{
    
    elements: number[] = [];

    add(number: number): void{
        this.elements.push(number);
        this.elements.sort();
    }

    getElement(): number[] {
        return this.elements;
    }
}

class UniqueList implements ListImplementor{
    elements: number[] = [];
    
    add(number: number): void {
        if(!this.elements.includes(number)) this.elements.push(number);
    }
    getElement(): number[] {
        return this.elements;
    }
    
}


// abstraction
interface DataAbstraction {
    implementor: ListImplementor;
    add(number: number): void;
    get(): number[];
    operation(fn: (n:number) => number): number[];
}

// Refine Abstraction
class DataRefineAbstraction implements DataAbstraction{
    implementor: ListImplementor;

    constructor(implementor: ListImplementor){
        this.implementor = implementor;
    }

    add(number: number): void {
       this.implementor.add(number);
    }

    get(): number[] {
        return this.implementor.getElement();
    }

    operation(fn: (n: number) => number): number[] {
        return this.implementor.getElement().map(fn);
    }
    
}


// Execution

const uniqueData = new DataRefineAbstraction(new UniqueList());

uniqueData.add(3);
uniqueData.add(3);
uniqueData.add(2);
uniqueData.add(2);
uniqueData.add(1);
uniqueData.add(1);
console.log(uniqueData.get()); // [3, 2, 1]

const uniqueItems = uniqueData.operation((e: number)=> e*2 );
console.log(uniqueItems); // [6, 4, 2]

// *****************************************************
const orderedData = new DataRefineAbstraction(new OrderedList());

orderedData.add(3);
orderedData.add(3);
orderedData.add(1);
orderedData.add(2);
orderedData.add(1);
console.log(orderedData.get()); // [1, 1, 2, 3, 3]

const orderedItems = orderedData.operation((e: number)=> e*2 );
console.log(orderedItems); // [2, 2, 4, 6, 6]