//Задание 2
const jsonData = {
    "list": [
     {
      "name": "Petr",
      "age": "20",
      "prof": "mechanic"
     },
     {
      "name": "Vova",
      "age": "60",
      "prof": "pilot"
     }
    ]
   };

const jsObject = {
    list: jsonData.list.map(item => ({
        name: item.name,
        age: parseInt(item.age),
        prof: item.prof
    }))
};

console.log(jsObject);
