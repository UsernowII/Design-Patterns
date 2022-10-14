
// TODO:Funciones primer Orden
// Toda funcion que pueda ser tratada como una variable

function sum(a, b){
    return a + b;
}

let res = sum(1, 2);
console.log(res);

const fsum = sum;

res = fsum(5,6);
console.log(res);


// TODO:Funcion de orden Superior
// Es toda funcion que puede recibir en parametros funciones

function operation(fn, a, b){
    console.log("proceso intermedio");
    console.log(fn(a, b));
}

operation(sum, 10, 20);


// TODO:Arrow Function

operation((a, b)=>  a * b, 5, 5)

operation( (a,b) =>{
    const x = a * b;
    return x*2;
}, 5, 6)

// TODO: forEach

const names = ["hector", "oscar", "juan"];
names.forEach( (name)=>  console.log(name));

// INMUTABLE
names.forEach( (name)=>  console.log(name.toUpperCase()));
// MUTABLE
names.sort();
console.log(names)


// TODO: map

const namesUpper = names.map( name => name.toUpperCase());
console.log(namesUpper);
console.log(names);

// TODO: Reduce

const numbers = [5,4,7,1,10];
const total = numbers.reduce((acc, num)=> acc + num, 0)

console.log(total);


// ORIENTED OBJECT PROGRAMMING

// TODO: clases

class Drink {

    constructor(name){
        this.name = name;
    }

    info(){
        return `La bebida es: ${this.name}`;
    }
}

const drink = new Drink("Aguardiente");
console.log(drink.info());


// TODO: Inheritance

class Beer extends Drink {

    constructor(name, alcohol){
        super(name);
        this.alcohol = alcohol;
    }

    info(){
        return super.info() + " " + this.alcohol;
    }

}


const beer = new Beer("erdinger", 8.5);
console.log(beer.info());