// Soldier
class Soldier {
    constructor(health, strength) {
        this.health = health;
        this.strength = strength;
    }
    attack(){
        return this.strength;
    }
     receiveDamage(damage){
        this.health -= damage;
        
     }
    
}

// Viking
class Viking extends Soldier {
    constructor(name, health, strength){
        super(health, strength);//only in constructor
        this.name = name;
       
    }
    receiveDamage(damage){
        this.health -= damage;
        if(this.health > 0){
            return `${this.name} has received ${damage} points of damage`;
        } 
        return `${this.name} has died in act of combat`; //could have also used else{}
    }
    battleCry(){
        return "Odin Owns You All!"
    }
}

//extends Soldier = Vikins inherits some or all of Soldier class

// Saxon
class Saxon extends Soldier {
    receiveDamage(damage){
        this.health -= damage;
        if(this.health > 0){
            return `A Saxon has received ${damage} points of damage`;
        } 
        return `A Saxon has died in combat`;

    }
}

// War 
class War extends Soldier {
    vikingArmy = []; //the War's viking army
    saxonArmy = []; //class objects - assign the variable; we're not setting up the key-value pair as we would with a classless object

    addViking(Viking){
        this.vikingArmy.push(Viking);
    }
    addSaxon(Saxon){
        this.saxonArmy.push(Saxon);
    }
    vikingAttack(){
        this.randomVikingIndex = Math.floor(Math.random()*this.vikingArmy.length); //index, e.g., 4th element of the vikingArmy array
        this.randomSaxonIndex = Math.floor(Math.random()*this.saxonArmy.length);//index, e.g., 2nd element of the saxonArmy array
        this.randomVikingDamage = this.vikingArmy[this.randomVikingIndex].attack(); //extract vikingArmy[4]'s strength (user[i].strength) 
        
        this.isSaxonAlive = this.saxonArmy[this.randomSaxonIndex].receiveDamage(this.randomVikingDamage);
        if(this.isSaxonAlive.includes('died')){
            this.saxonArmy.splice(this.randomSaxonIndex,1);
        }
        return this.isSaxonAlive;
        //random Saxon receiveDamage() equal to the strength of a random Viking
    }

    saxonAttack(){
        this.randomSaxonIndex = Math.floor(Math.random()*this.saxonArmy.length);
        this.randomVikingIndex = Math.floor(Math.random()*this.vikingArmy.length); //index, e.g., 4th element of the vikingArmy array
        this.randomSaxonDamage = this.saxonArmy[this.randomSaxonIndex].attack();

        this.isVikingAlive = this.vikingArmy[this.randomVikingIndex].receiveDamage(this.randomSaxonDamage);
        if(this.isVikingAlive.includes('died')){
            this.vikingArmy.splice(this.randomVikingIndex,1);
        }
        return this.isVikingAlive;
    }
    showStatus(){
        if(this.saxonArmy.length === 0){
            return "Vikings have won the war of the century!";
        }
        if (this.vikingArmy.length === 0){
            return "Saxons have fought for their lives and survived another day...";
        }
        return "Vikings and Saxons are still in the thick of battle.";
    }

}

