
// Componenet 

class ClientComponenet {

    constructor(url) {
        this.url = url;
    }

    async getData(){
        return await (await fetch(this.url)).json();

    }
}

// Base Decorator

class ClientDecorator {

    constructor(clientComponenet){
        this.clientComponenet = clientComponenet
    }

    async getData(){
        return await this.clientComponenet.getData();
    }
}

//Concrete Decorator A
class UpperCaseClientDecorator extends ClientDecorator{

    async getData() {
        const data = await super.getData();
        const res = data.map( elem =>{
            elem.title = elem.title.toUpperCase();
            return elem;
        });

        return res;
    }

}

//Concrete Decorator B
class HtmlClientDecorator extends ClientDecorator{

    async getData() {
        const data = await super.getData();
        const res = data.map( e =>{
            e.title = `<h2>${e.title}</h2>`;
            e.thumbnailUrl = `<img src='${e.thumbnailUrl}'>`;
            return e;
        });

        return res;
    }

}


( async ()=>{
    const url = "https://jsonplaceholder.typicode.com/photos";
    const client = new ClientComponenet( url );
    const data = await client.getData();
    //console.log(data);

    const upperClient = new UpperCaseClientDecorator( client );
    const dataWrapped = await upperClient.getData();
    //console.log(dataWrapped);

    const htmlClient = new HtmlClientDecorator( upperClient );
    const dataWrapperWrapped = await htmlClient.getData();
    console.log(dataWrapperWrapped);

    divContent1.innerHTML = dataWrapperWrapped.reduce((ac, e) =>{
        return ac + e.title + e.thumbnailUrl;
    },"" )

    const htmlClient2 = new HtmlClientDecorator( client);
    const dataWrapped2 = await htmlClient2.getData();
    
    divContent2.innerHTML = dataWrapped2.reduce((ac, e) =>{
        return ac + e.title + e.thumbnailUrl;
    },"" )

})();