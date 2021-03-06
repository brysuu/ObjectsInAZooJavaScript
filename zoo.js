function sleep(name){
    console.log(name+" sleeps for 8 hours.")
}
var animalPopulation = 0;
function run(){
    sleep("tigger");
    eat("bacon","tigger");
    var tigger = new Tiger("Tigger");
    tigger.eat("meat");
    tigger.eat("kibble");
    var pooh = new Bear("Pooh");
    //pooh.eat("fish");
    //pooh.eat("meat");
    var rarity= new Unicorn("Rarity");
    //rarity.eat("marshmallows");
    //rarity.sleep();
    var gemma = new Giraffe("Gemma");
    //gemma.eat("meat");
    //gemma.eat("leaves");
    var stinger = new Bees("Stinger");
    //stinger.eat("ice cream");
    //stinger.eat("pollen");
    //stinger.sleep();
    var zoebot = new Zookeeper("Zoebot");
    zoebot.feedAnimals([tigger,pooh,rarity,gemma,stinger],"pollen");
    Animals.getPopulation();
    Tiger.getPopulation();
}
function eat(food) {
    console.log(this.name+" eats "+ food);
}
class Animals {
    constructor(name,favoriteFood){
        this.name= name;
        this.favoriteFood =favoriteFood;
        animalPopulation++;
    }
    sleep(){
        console.log(this.name+" sleeps for 8 hours.");
    }
    eat(food){
        console.log(this.name+" eats "+ food);
        food=== this.favoriteFood? console.log("YUM!!! "+this.name+" wants more "+food):this.sleep();
    }
    static getPopulation(){
        console.log(animalPopulation);
        return animalPopulation;
    }
}

class Tiger extends Animals{
    constructor(name){
        super(name,"meat");
    }

}
class Bear extends Animals {
    constructor(name) {
        super(name, "fish")
    }

    sleep() {
        console.log(this.name + " hibernates for 4 months")
    }
}
class Unicorn extends Animals{
    constructor(name){
        super(name,"marshmallows")
    }
    sleep(){
        console.log(name+" sleeps in a cloud.")
    }
}
class Giraffe extends Animals{
    constructor(name){
        super(name,"leaves")
    }
    eat(food){
        food=== "leaves"?super.eat("leaves"): console.log("YUCK!!! "+ this.name+ " will not eat "+ food);
    }
}

class Bees extends Animals{
    constructor(name){
        super(name,"pollen")
    }
    sleep(){
        console.log(this.name+ " never sleeps.")
    }
    eat(food){
        food==="pollen"? super.eat("pollen"): console.log("YUCK!!! "+ this.name+ " will not eat "+ food);
    }

}
class Zookeeper{
    constructor(name){
        this.name= name;
    }
    feedAnimals(animals,food){
        console.log(this.name +" is feeding "+food+" to "+ (animals.length)+" of "+animalPopulation+ "  total animals.");
        for(var i =0; i<animals.length; i++){
            animals[i].eat(food);
        }
    }
}