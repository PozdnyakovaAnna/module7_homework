// создаем родительскую функцию Электроприборы
function Electrodevice(name, power){
    this.name = name;
    this.guarantee = '2years';
    this.safetyClass = 'III'
  }
  
  //метод, которыq включает/выключает прибор из розетки
  Electrodevice.prototype.getStatus = function(name, status){
    console.log(`${name} status: ${status}`)
  }
  

  function HouseholdDevice(name, size, power){
    this.name = name;
    this.size = size;
    this.power = power
  }
  
  function ElectricTool(name, weight, power){
    this.name = name;
    this.weight = weight;
    this.power = power
  }
  
  // cоздаем делегирующую связь [[Prototype]] для бытовых электроприборов и электроинструментов.
  HouseholdDevice.prototype = new Electrodevice()
  ElectricTool.prototype = new Electrodevice()
  
  // создаем экземпляры приборов
  const teapot = new HouseholdDevice('teapot', '20x24.5x20sm', '1200VA');
  const microwaveOven = new HouseholdDevice('microwaveOven', '60×60×45sm', '1150VA');
  const drill = new ElectricTool('drill', '5kg', '400VA');
  const screwdriver = new ElectricTool('screwdriver', '3kg', '1000VA'); 
  
  //вызываем метод getStatus для созданных электроприборов
  teapot.getStatus('teapot', 'on')
  microwaveOven.getStatus('microwaveOven', 'off')
  drill.getStatus('drill', 'on')
  screwdriver.getStatus('screwdriver', 'off')

  // выводим все свойства электроприборов
  console.log(teapot)
  console.log(microwaveOven)
  console.log(drill)
  console.log(teapot)