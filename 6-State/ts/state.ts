//state
interface IState {

    next(ticket: Ticket): number | null;
    add(ticket: Ticket, quantity: number):void;
}

interface entre {
    getPersona: (person: string) => string;
}

// context
class Ticket{
    private state: IState;
    quantity: number;
    readonly limit: number;
    private number: number;

    constructor(limit: number){
        this.limit = limit;
        this.quantity = 0;
        this.number = 0;
        this.state = new EmptyState();
    }


    get getNumber(): number{
        return this.number++;
    }

    set setState(state: IState){
        this.state = state;
    }

    get getState(): IState{
        return this.state;
    }

    next(): number | null {
        return this.state.next(this);
    }

    add(quantity: number): void{
        this.state.add(this, quantity)
    }
}

// States 
class EmptyState implements IState {
    next(ticket: Ticket): null {
        return null;
    }
    add(ticket: Ticket, quantity: number): void {
        if( quantity < ticket.limit){
            ticket.quantity+= quantity;
            ticket.setState = new WithDataState();
        }else if(quantity === ticket.limit){
            ticket.quantity = quantity;
            ticket.setState = new FullDataState()
        }
    }

}

class WithDataState implements IState{
    next(ticket: Ticket): number{
        ticket.quantity--;
        if(ticket.quantity <= 0){
            ticket.setState = new EmptyState();
        }
        return ticket.getNumber;
    }
    add(ticket: Ticket, quantity: number): void {
        if( (ticket.quantity + quantity) < ticket.limit){
            ticket.quantity+= quantity;
        }else if((ticket.quantity + quantity) === ticket.limit){
            ticket.quantity += quantity;
            ticket.setState = new FullDataState()
        }
    }
    
}

class FullDataState implements  IState{
    next(ticket: Ticket): number | null {
        ticket.quantity--;
        if(ticket.quantity <= 0){
            ticket.setState = new EmptyState();
        }else{
            ticket.setState = new WithDataState();
        }
        return ticket.getNumber;
    }
    add(ticket: Ticket, quantity: number): void {
        console.log("******** Ticket Lleno ******");
    }

}

// Ejecución
const ticket = new Ticket(5);
console.log(ticket.getState); // EmptyState {}
console.log(ticket.next()); // null
ticket.add(6);
console.log(ticket.getState); // dont exceed the limit
console.log(ticket.next()); 

ticket.add(4);
console.log(ticket.getState); // WithDataState {}
console.log(ticket.next()); // 0
console.log(ticket.next()); // 1

ticket.add(3);
console.log(ticket.getState); // FullDataState {}
ticket.add(1); // messaje is full
console.log(ticket.next());
console.log(ticket.getState);
console.log(ticket.next());
console.log(ticket.next());
console.log(ticket.next());
console.log(ticket.next());
console.log(ticket.getState);
console.log(ticket.next());