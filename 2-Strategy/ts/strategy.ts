
//=============== STRATEGY ================="

interface Strategy {

    login(user: string, password: string): boolean;

}


class LoginContext {

    private strategy: Strategy;

    constructor(strategy: Strategy) {
        this.strategy = strategy;
    }


    setStrategy(strategy: Strategy){
        this.strategy = strategy;
    }


    login(user: string, password: string): boolean {
        return this.strategy.login(user, password);
    }


}


class LoginDbStrategy implements Strategy {
    login(user: string, password: string): boolean {
        console.log(" -> consultar la db")
        if(user === "admin" && password === "1234") return true;
        return false;
    }
}

class LoginServiceStrategy implements Strategy {
    login(user: string, password: string): boolean {
        console.log(" -> consumir la api auth")
        if(user === "admin" && password === "1234") return true;
        return false;
    }
}

class LoginGoogleStrategy implements Strategy {
    login(user: string, password: string): boolean {
        console.log(" -> Servicio de Google")
        if(user === "admin" && password === "1234") return true;
        return false;
    }
}


const auth = new LoginContext(new LoginDbStrategy());
console.log(auth.login("admin", "1234"));

// Set strategy by external service
auth.setStrategy(new LoginServiceStrategy());
console.log(auth.login("admin", "1234"));

// Set strategy by external service
auth.setStrategy(new LoginGoogleStrategy());
console.log(auth.login("admin", "1234"));