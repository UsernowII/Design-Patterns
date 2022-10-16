

class Subject {

    constructor(){
        this.observers = [];
    }

    subscribe(observer){
        this.observers.push(observer);
    }


    unsubscribe(observer){
        this.observers = this.observers.filter(obs => obs !== observer);
    }


    notify(data){
        this.observers.forEach(obs => obs.refresh(data));
    }
}


class Observer {

    constructor(fn){
        this.fn = fn;
    }

    refresh(data){
        this.fn(data);
    }

}


const sub = new Subject();
const o1 = new Observer( d => console.log("hola soy el observador 1 "+ d));
const o2 = new Observer( d => div1.innerHTML = d);
const o3 = new Observer( d => {
    div2.innerHTML = d.split("").reverse().join("");
});

sub.subscribe(o1);
sub.subscribe(o2);
sub.subscribe(o3);

sub.unsubscribe(o1);

function change(){
    sub.notify(myText.value);
}