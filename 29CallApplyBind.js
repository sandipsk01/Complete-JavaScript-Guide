const car = {
  name: 'car',
  color: 'black',
  getDetails(brand, seats) {
    console.log(
      `
      This is a ${this.color} ${this.name} of ${brand} company.
      It has ${seats} seats`
    );
  },
};

const bus = {
  name: 'bus',
  color: 'blue',
};

car.getDetails('Audi', 5);

//To bound "this" to specific object
car.getDetails.call(bus, 'Star', 50);   // seperate args
car.getDetails.apply(bus, ['Gold', 30]);   // array of args

const veh1 = car.getDetails.bind(bus);    // for reuse
veh1('silver', 20);
veh1('bronze', 45);
