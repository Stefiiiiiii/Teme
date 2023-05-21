let car = {
  make: "Toyota",
  model: "Auris",
  year: "2018",
  price: 5000,
  km: 100,
  fuel: "gas",
  horsePower: 126,
  lastRevision: 2020,
  nextRevision: 2023,
};

console.log(car);

delete car.lastRevision;

console.log(car);

car.horsePower = 130;
console.log(car);

car["firstDayRegistered"] = "20.05.2018";
console.log(car);

let currentDate = new Date();
let hoursMin =
  currentDate.getHours() +
  ":" +
  currentDate.getMinutes() +
  ":" +
  currentDate.getSeconds();
console.log(hoursMin);
