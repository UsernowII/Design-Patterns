
// Context
class DocumentContext {

    constructor() {
        this.content = "";
        this.state = new BlankState();
    }

    setState(state){
        this.state = state;
    }

    write(text){
        this.state.write(this, text);
    }

}

class BlankState {
    write(documentContext, text){
        documentContext.content = text;
        documentContext.setState(new WithContentState())
    }
}

class WithContentState {
    write(documentContext, text){
        documentContext.content += " "+ text;
    }
}

class AprrovedState{
    write(documentContext, text){
        console.error("Documento aprobado ya no se modifica");
    }
}

// Execution
const doc = new DocumentContext();
console.log(doc.state); // initial state empty
doc.write("pato"); // change content change state 
console.log(doc.content) 
console.log(doc.state); 
doc.write("ALGO"); // change content 
doc.write("MAS"); // change content 
console.log(doc.content);

doc.setState(new AprrovedState()); // change state
console.log(doc.state); 
doc.write("texto nuevo"); 
console.log(doc.content); // text is not modify


doc.setState(new WithContentState());
console.log(doc.state);
doc.write("No que no se podia modificar?");
console.log(doc.content);