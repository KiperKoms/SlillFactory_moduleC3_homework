function ElectricalAppliance(name, maxPower, currentPower, type) {
    this.name = name;
      this.maxPower = maxPower;
      this.currentPower = currentPower;
      this.type = type;
      this.isPlugged = false;
}

// метод, который определяет прибор как включенный в розетку
ElectricalAppliance.prototype.plugIn = function() {
    console.log(`${this.name} is plugged!`);
    this.isPlugged = true;
};

// метод, который определяет прибор как выключеный из розетки
ElectricalAppliance.prototype.unplug = function() {
    console.log(`${this.name} is unplugged!`);
    this.isPlugged = false;
};

// метод, с помощью которого можно получить текущюю мощность
ElectricalAppliance.prototype.getCurrentPower = function() {
    console.log(`${this.name} consume ${this.currentPower}`);
}

// Прибор 1
function Lamp(name, brand, maxPower, currentPower, type, bulbType) {
    this.name = name;
    this.brand = brand;
    this.maxPower = maxPower;
    this.currentPower = currentPower;
    this.type = type;
    this.bulbType = bulbType;
    this.isPlugged = true;
    this.brightness = 100;
}

Lamp.prototype = new ElectricalAppliance();

//Метод изменяющий цвет лампы
Lamp.prototype.setBrightnessLamp = function(brightness) {
    this.brightness = brightness;
    console.log(`brightness equals ${this.brightness}`)
}

// Прибор 2
function Computer(name, brand, maxPower, currentPower, type, functionality) {
    this.name = name;
    this.brand = brand;
    this.maxPower = maxPower;
    this.currentPower = currentPower;
    this.type = type;
    this.functionality = functionality;
    this.isPlugged = false;
}

Computer.prototype = new ElectricalAppliance();

// экземпляр лампы
const tableLamp = new Lamp("Table lamp", "Xiaomi", 5, 3, 'Lighting', "LED");
      
// экземпляр компьютера
const homePC = new Computer("Table PC", "Depo", 500, 200, "Computer Engineering", "for work");

// отключить лампу из розетки
tableLamp.unplug();

// включить homePC в розетку
homePC.plugIn();

// установить яркость tableLamp в 50
tableLamp.setBrightnessLamp(50);

// получить текущую мощность homePC
homePC.getCurrentPower()

// результат
console.log(homePC)
console.log(tableLamp)