

const data = [
    {
        name : "Erdinger Pikantus",
        country: "Alemania",
        info: "Erdinger Pikantus is a weizenbock style beer brewed in Baviera",
        img: "https://alternativebeer.com.co/wp-content/uploads/2018/10/Erdinger-Weisbier.png"
    },
    {
        name : "Corona",
        country: "Mexico",
        info: "Corona beer is a brand recognized worldwide",
        img: "https://distrilicoresdeltolima.com/wp-content/uploads/2020/06/589-5897300_corona-transparent-710ml-botella-de-corona-hd-png.png"
    },
    {
        name : "Poker",
        country: "Colombia",
        info: "Poker is the best selling beer in Colombia, is for the popular public",
        img: "https://www.bavaria.co/sites/g/files/phfypu1316/f/BOTELLA-550PX.png"
    },
    

]

class InfoContext {

    constructor(strategy, data, element){
        this.setStrategy(strategy);
        this.data = data;
        this.element = element;


    }

    setStrategy(strategy){
        this.strategy = strategy;
    }

    show(){
        this.strategy.show(this.data, this.element);
    }

}


class ListStrategy{

    show( data, element){
        console.log(element)
        element.innerHTML = data.reduce((acum, beer) =>{
            return acum + `<div>
                            <h2>${beer.name}</h2>
                            <p>${beer.country}<p/>
                        </div>
                        <hr>`;
        }, "");
    }

}

class ListDetailStrategy{

    show( data, element){
        console.log(element)
        element.innerHTML = data.reduce((acum, beer) =>{
            return acum + `<div>
                            <h2>${beer.name}</h2>
                            <p>${beer.country}<p/>
                            <p>${beer.info}<p/>
                        </div>
                        <hr>`;
        }, "");
    }

}

class ListWithImageStrategy{

    show( data, element){
        console.log(element)
        element.innerHTML = data.reduce((acum, beer) =>{
            return acum + `<div>
                            <h2>${beer.name}</h2>
                            <img width="20%" size="50px 50px" src="${beer.img}">
                        </div>
                        <hr>`;
        }, "");
    }

}


const strategies = [
    new ListStrategy(),
    new ListDetailStrategy(),
    new ListWithImageStrategy(),
]


const info = new InfoContext(
    new ListStrategy(), 
    data,
    content);


info.show();


slcOptions.addEventListener("change", (event)=>{
    const op = event.target.value; // 0 - 1 -2
    info.setStrategy(strategies[op]);
    info.show();
});