// Product | Object
class PersonTs {

    private name : string;
    private lastName : string;
    private age : number;
    private country: string;
    private city: string;
    private hobbies: string[]


    constructor(name: string, lastName: string, age: number, 
                country: string, city: string, hobbies: string[]) {

        this.name = name;
        this.lastName = lastName;
        this.age = age;
        this.country = country;
        this.city = city;
        this.hobbies = hobbies;
    }

    getFullName(): string {
        return `${this.name} ${this.lastName}`
    };
}


interface IPersonBuilder {
    name : string;
    lastName : string;
    age : number;
    country: string;
    city: string;
    hobbies: string[]

    setName(name: string): IPersonBuilder;
    setLastName(lastName: string): IPersonBuilder;
    setAge(age: number): IPersonBuilder;
    setCountry(country: string): IPersonBuilder;
    setCity(city: string): IPersonBuilder;
    addHooby(hobby: string): IPersonBuilder;
    build(): PersonTs;
}

class NormalPersonBuilder implements IPersonBuilder {
    name: string;
    lastName: string;
    age: number;
    country: string;
    city: string;
    hobbies: string[];

    constructor(){
        this.name = "";
        this.lastName = "",
        this.age = 0;
        this.country = "";
        this.city = "";
        this.hobbies = [];    
    }
    
    
    reset(): void{
        this.name = "";
        this.lastName = "",
        this.age = 0;
        this.country = "";
        this.city = "";
        this.hobbies = [];    
    }

    setName(name: string): IPersonBuilder {
        this.name = name;
        return this;
    }
    setLastName(lastName: string): IPersonBuilder {
        this.lastName = lastName;
        return this;
    }
    setAge(age: number): IPersonBuilder {
        this.age = age;
        return this;
    }
    setCountry(country: string): IPersonBuilder {
        this.country = country;
        return this;
    }
    setCity(city: string): IPersonBuilder {
        this.city = city;
        return this;
    }
    addHooby(hobby: string): IPersonBuilder {
        this.hobbies.push(hobby);
        return this;
    }
    build(): PersonTs {
        const newPerson = new PersonTs(this.name, this.lastName, this.age,
                    this.country, this.city, this.hobbies);
        this.reset();
        return newPerson;
    }

}

// Director
class PersonDirector{

    private personBuilder : IPersonBuilder;

    constructor(personBuilder: IPersonBuilder) {
        this.personBuilder = personBuilder;
    }

    setPersonBuilder(personBuilder: IPersonBuilder){
        this.personBuilder = personBuilder;
    }

    createSimplePerson(name: string, lastName: string){
        this.personBuilder.setName(name)
            .setLastName(lastName);   
    }

}

// Execution
const personBuilder = new NormalPersonBuilder();
const raniz = personBuilder
    .setName("Oscar")
    .setLastName("Raniz")
    .addHooby("Fedear")
    .addHooby("Vender Humo")
    .build();

console.log(raniz);

const director2 = new PersonDirector(personBuilder);
director2.createSimplePerson("Usernow", "God");
const user = personBuilder.build();
console.log(user);