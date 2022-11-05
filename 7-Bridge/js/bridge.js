
class EncodertextAbstraction {

    constructor(encoder){
        this.encoder = encoder;
    }

    encode(str){
        return this.encoder.encode(str);
    }

    decode(str){
        return this.encoder.decode(str);
    }

}


class Base64EncoderImplementor {

    encode(str){
        return window.btoa(unescape(encodeURIComponent(str))); 
    }

    decode(str){
        return decodeURIComponent(escape(window.atob(str)));
    }
}

class HtmlEcoderImplementor {

    encode(str) {
        return str.split(".").reduce((ac, e) => {
            return ac + `<p>${e.trim()}</p>`;
        }, "")
    }

    decode(str){
        return str.split("</p>").reduce((ac, e) =>{
            return e!== "" 
                ? ac + e.replace("<p>", "") + ". "
                : ac + "";
        },"");
    }

}


// Execution
const encoder1 = new EncodertextAbstraction( new Base64EncoderImplementor() );
console.log(encoder1.encode("pato")); 
console.log(encoder1.decode("cGF0bw==")); 


const encoder2 = new EncodertextAbstraction( new HtmlEcoderImplementor() );
console.log(encoder2.encode("pato. pato. pato. ganso")); 
console.log(encoder2.decode("<p>pato</p><p>pato</p><p>pato</p><p>ganso</p>")); 
