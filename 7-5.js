class Electrodevice {
    constructor(name, power){
    this.name = name;
    this.guarantee = '2years';
    this.safetyClass = 'III'
  }
    
  getStatus(name, status){
    console.log(`${name} status: ${status}`)
  } 
  }
  
  class HouseholdDevice extends Electrodevice {
    constructor(size, name, power){
    super(name, power);
    this.size = size;
    this.power = power;
  }
    getStatus(name, status, size, power){
    console.log(`${name} status: ${status}`)
  } 
  }
  
  class ElectricTool extends Electrodevice {
    constructor(weight, name, power){
    super(name, power)
    this.weight = weight;
    this.power = power
  }
  }