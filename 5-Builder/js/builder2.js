
// Product
class Form {

    constructor(controls, action) {
        this.controls = controls;
        this.action = action;
    };

    getContent(){
        return `<form method="post" action="${this.action}">
            ${this.controls.reduce( (acc, c)=>{
                return acc + `<div>
                    ${this.getLabel(c)}
                    ${this.getInput(c)}
                </div>`
            },"")}
            <button type="submit" class="btn btn-primary">Yeah ! </button>    
        </form>`;
    }

    getLabel(control){
        return `<label>${control.text}</label>`;
    }

    getInput(control){
        return `<input type="${control.type}" 
        id="${control.name}"
        name="${control.name}"/>`
    }
}

// Concrete Builder
class FormBuilder {

    constructor(){
       this.reset();
    }

    reset(){
        this.action = "",
        this.controls = [];
    }

    setAction(action){
        this.action = action;
        return this;
    }

    setText(name, text){
        this.controls.push({
            name, 
            text,
            type: "text"
        });
        return this;
    }

    setEmail(name, text){
        this.controls.push({
            name, 
            text,
            type: "email"
        });
        return this;
    }

    setCheckBox(name, text){
        this.controls.push({
            name, 
            text,
            type: "checkbox"
        });
        return this;
    }

    build(){
        const form =  new Form(this.controls, this.action);
        this.reset();
        return form;
    }

}

// Director
class FormDirector{

    constructor(formBuilder){
        this.setBuilder(formBuilder);
    }

    setBuilder(formBuilder){
        this.formBuilder = formBuilder;
    }

    createPeopleForm(){
        this.formBuilder.reset();
        this.formBuilder.setText("firstName", "Nombre2")
            .setText("lastName", "Apellido2");
    }

    createContactForm(){
        this.formBuilder.reset();
        this.formBuilder.setText("name", "Nombre Interesado")
            .setEmail("email", "Correo Electronico")
            .setText("text", "Mensaje");
    }

}


const formBuilder = new FormBuilder();
// Prodcut 1
const formPeople = formBuilder
    .setAction("add.php")
    .setText("firstName", "Nombre")
    .setText("lastName", "Apellidos")
    .setCheckBox("player", "Eres alto Manco ?")
    .build();

console.log(formPeople);
form1.innerHTML = formPeople.getContent();

// Product 2
const formEmail = formBuilder
    .setAction("send.php")
    .setText("firstName", "Nombre")
    .setEmail("email", "Correo Electronico")
    .build();

console.log(formPeople);
form2.innerHTML = formEmail.getContent();

// Product with Director
const director = new FormDirector(formBuilder);
director.createPeopleForm();
form3.innerHTML = formBuilder.build().getContent();

director.createContactForm();
form4.innerHTML = formBuilder.build().getContent();