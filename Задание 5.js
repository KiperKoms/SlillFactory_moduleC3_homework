class ElectricalAppliance {
    constructor(name, maxPower, currentPower, type){
      this.name = name;
      this.maxPower = maxPower;
      this.currentPower = currentPower;
      this.type = type;
      this.isPlugged = false;
    }
    // метод, который определяет прибор как включенный в розетку
    plugIn() {
      console.log(`${this.name} is plugged!`);
      this.isPlugged = true;
    }
    
    // метод, который определяет прибор как выключеный из розетки
    unplug() {
      console.log(`${this.name} is unplugged!`);
      this.isPlugged = false;
    }
        
    // метод, с помощью которого можно получить текущюю мощность
    getCurrentPower() {
    console.log(`${this.name} consume ${this.currentPower}`);
    }
}
    
    // Прибор 1
    class Lamp extends ElectricalAppliance {
        constructor (name, brand, maxPower, currentPower, type, bulbType) {
          super(name, maxPower, currentPower, type);
          this.brand = brand;
          this.bulbType = bulbType;
          this.isPlugged = false;
          this.brightness = 100;
        }
    

    //Метод изменяющий яркость лампы
    setBrightnessLamp(brightness) {
        this.brightness = brightness;
        console.log(`brightness equals ${this.brightness}`)
    }
}
      // Прибор 2
      class Computer extends ElectricalAppliance {
        constructor(name, brand, maxPower, currentPower, type, functionality) {
          super(name, maxPower, currentPower, type); 
          this.brand = brand;
          this.functionality = functionality;
          this.isPlugged = false;
        }
      }
      
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