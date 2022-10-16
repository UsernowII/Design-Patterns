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

// Change state -- publisher concrete
class ItemSubject extends Subject{

    constructor(){
        super();
        this.data = [];
    }

    add(item){
        this.data.push(item);
        this.notify(this.data);
    }

}

// Oberserver
class HtmlElementObserver{

    constructor(element){
        this.element = element;
    }

    refresh(data){
        this.element.innerHTML = data.reduce((acc, e) =>{
            return acc + `<p>${e}</p>`;
        }, "")
    }

}

// Generic Observer
class Observer {

    constructor(fn){
        this.fn = fn;
    }

    refresh(data){
        this.fn(data);
    }

}


const publishItems = new ItemSubject();
const div1Observer = new HtmlElementObserver(div1);
const div2Observer = new HtmlElementObserver(div2);

const observer1 = new Observer( (data)=> {
    div3.innerHTML = data.length;
})

publishItems.subscribe(div1Observer);
publishItems.subscribe(div2Observer);
publishItems.subscribe(observer1);



function add(){
    const name = txtName.value;
    publishItems.add(name);
}