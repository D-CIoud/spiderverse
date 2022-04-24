class spiderman {
    constructor(name,age,actor,nummovies,production){
        this.name = name;
        this.age = age;
        this.actor = actor;
        this.nummovies = nummovies;
        this.production = production;
        this.getInfo = function (){
            return `Hey, I'm ${this.actor} from ${this.production}.`
        }
    }
}

//Exportamos la clase
module.exports = spiderman