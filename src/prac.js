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
    attack(){
        return this.strength;
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

  let mark = new Soldier(20,9);
  let sebastian = new Soldier(20, 8); 
  let jennifer = new Viking('Jennifer', 20, 9);

  console.log(jennifer.battleCry());

//   console.log('Sebastian ',sebastian);
//   console.log('Mark ',mark);
//   sebastian.receiveDamage(mark.attack());
//   console.log('Sebastian',sebastian);
