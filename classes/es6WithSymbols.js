// NO NEW!
const CARCOLOR = Symbol();
console.log(CARCOLOR)
const CARMODEL = Symbol();
const CARYEAR = Symbol();

class Car{
  constructor(color, model, year){
    // requires bracket syntax
    this[CARCOLOR] = color
    this[CARMODEL] = model
    this[CARYEAR] = year
  }
  get color(){
    console.log("getting", this._color)
    return this[CARCOLOR]
  }
  set color(newColor){
    console.log("setting color", newColor)
    this[CARCOLOR] = newColor
  }
}

myCarDeets = ["red","Volvo",2018]
var myCar = new Car(...myCarDeets);
console.log(myCar[CARCOLOR])