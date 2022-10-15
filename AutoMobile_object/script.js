class Automobile {
  constructor(vehicleName, model, color, type) {
    this.vehicleName = vehicleName;
    this.model = model;
    this.color = color;
    this.type = type;
    this.start = function start(){
        console.log('The car is ready to Drive');
    };
    this.openDoor = function openDoor(){
        console.log ('The door of the car has been opened')
    };
  };
};

class Car extends Automobile {
    constructor(vehicleName, model, color, type ,maxSpeed ,doorProperties) {
        super(vehicleName, model, color, type);
        this.maxSpeed = maxSpeed;
        this.doorProperties = doorProperties;
}}  
class Truck extends Automobile {
    constructor(vehicleName, model, color, type ,maxSpeed ,doorProperties) {
        super(vehicleName, model, color, type);
        this.maxSpeed = maxSpeed;
        this.doorProperties = doorProperties;
}}  
class Bus extends Automobile {
    constructor(vehicleName, model, color, type ,maxSpeed ,doorProperties) {
        super(vehicleName, model, color, type);
        this.maxSpeed = maxSpeed;
        this.doorProperties = doorProperties;
}}  

var car = new Car(
    'Honda Civic',
    '2022',
    'Black',
    'Auto',
    '220 km/h',
    '4 Door',
)
var truck = new Truck(
    'The Roadrunner',
    '2022',
    'Red',
    'Manual',
    '100 km/h',
    '2',
)
var bus = new Bus (
    'Green',
    '2022',
    'Green',
    'Auto',
    '80 km/h',
    '6',
)
console.log (car);
console.log(truck)
console.log(bus)
car.start();
car.openDoor();