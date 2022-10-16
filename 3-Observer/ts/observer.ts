interface IObserver <T> {

    refresh(value: T) : void;

}

interface ISubject<T> {

    observers: IObserver<T>[];

    subscribe(observer: IObserver<T>): void;
    unsubscribe(observer: IObserver<T>): void;
    notify(value: T): void;
}


class Subject<T> implements ISubject<T> {
    observers: IObserver<T>[];

    constructor(){
        this.observers = [];
    }

    public subscribe(observer: IObserver<T>): void {
        this.observers.push(observer);
    }
    public unsubscribe(observer: IObserver<T>): void {
        this.observers = this.observers.filter(obs => obs !== observer);
    }
    public notify(value: T): void {
        this.observers.forEach( e => e.refresh(value));
    }

}

class Observer <T> implements IObserver<T> {
    private fn: (value:T) => void;

    constructor(fn: (value: T) => void){
        this.fn = fn;
    }
    
    public refresh(value: T): void {
        this.fn(value);
    };

}

const subject = new Subject<number>();
const obs1 = new Observer<number>((n)=>{
    console.log("hola OBS1", n)
});

const obs2 = new Observer<number>((n)=>{
    console.log("hola OBS2", n)
});



subject.subscribe(obs1);
subject.subscribe(obs2);
subject.notify(1.2);
subject.notify(25);

const subjectString = new Subject<string>();
const obs3 = new Observer<string>((n)=>{
    console.log("hola OBS3", n.toUpperCase())
});
const obs4 = new Observer<string>((n)=>{
    console.log("hola OBS4", n.toLowerCase())
});

subjectString.subscribe(obs3);
subjectString.subscribe(obs4);
subjectString.notify("Yuri");
subjectString.notify("Jhon Erick");