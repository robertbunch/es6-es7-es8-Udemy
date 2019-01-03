// Replace the constuctor with the "class" keyword
class SuperHero{
	constructor(name, strength, speed, weapon, cape){
		// add _ and it makes it a pseudo private property
		this._name = name;
		this._strength = strength;
		this._speed = speed;
		this._weapon = weapon;
		this._cape = cape; 

	}
	powerUp(){
		this.strength += 5;		
	}
	get name(){
		console.log("Getting Name");
	}
	set name(newName){
		console.log("Setting name");
		this._name = newName;
	}
	static goodHero(){
		return true;
	}
}

const hankDetails = ["Hank", 10,5,"Fist",true];
const philDetails = ["Phil", 15,1,"Fist2",false];
let hero1 = new SuperHero(...hankDetails);
let hero2 = new SuperHero(...philDetails);
hero1.name = "George";

console.log(hero1.name);
console.log(hero2);

hero1.powerUp();
hero1.speed = 2;
console.log(hero1)
console.log(hero2);
console.log("Is hero good?",SuperHero.goodHero());

