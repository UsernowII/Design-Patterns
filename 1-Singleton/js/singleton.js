
class Singleton{

    constructor(){
       
        return Singleton.instance 
            ? Singleton.instance 
            : Singleton.instance = this;
    }

    static getInstance(){
        return Singleton.instance;
    }

}

const singleton1 = new Singleton();
const singleton2 = new Singleton();
const singleton3 = Singleton.getInstance();

console.log(singleton1 === singleton2)
console.log(singleton3 === singleton2)



class WeekDays {

    daysEs = ["Lunes", "Martes", "Miercoles", "Jueves", "Viernes", "Sabado", "Domingo"];
    daysEn = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];


    constructor(lang){
        this.lang = lang;

        if(WeekDays.instance){
            return WeekDays.instance;
        }

        WeekDays.instance = this;
    }

    getDays(){
        return this.lang === "es"
            ? this.daysEs
            : this.daysEn;
    }

}


const weekDays1 = new WeekDays("en");
const weekDays2 = new WeekDays("es");

console.log(weekDays1.getDays()); // English
console.log(weekDays2.getDays()); // English