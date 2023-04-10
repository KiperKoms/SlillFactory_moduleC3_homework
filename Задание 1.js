function getValueKey(obj) {
    for (let key in obj) {
      if (obj.hasOwnProperty(key)) {
        console.log(`Ключ - ${key}, значение - ${obj[key]}`);
      }
    }
  }