var _a;
// So this must have name, startDate, and priviledges.
var e1 = {
    name: 'Chris',
    priviledges: ['create-server'],
    startDate: new Date()
};
console.log('e1', e1);
function add(a, b) {
    // TypeGuard:
    if (typeof a === 'string' || typeof b === 'string') {
        return a.toString() + b.toString();
    }
    return a + b;
}
function printEmployeeInformation(emp) {
    console.log("Name: " + emp.name);
    // Do typecheck/guard to ensure priviledges and startDate
    // exist before we have access to that property.
    if ('priviledges' in emp) {
        console.log("Privledges: " + emp.priviledges);
    }
    if ('startDate' in emp) {
        console.log("StartDate: " + emp.startDate);
    }
}
printEmployeeInformation(e1);
/********* Type Guards - More/Another example *********/
var Car = /** @class */ (function () {
    function Car() {
    }
    Car.prototype.drive = function () {
        console.log('Driving...');
    };
    return Car;
}());
var Truck = /** @class */ (function () {
    function Truck() {
    }
    Truck.prototype.drive = function () {
        console.log('The truck is driving...');
    };
    Truck.prototype.loadCargo = function (amount) {
        console.log('Load Cargo...' + amount);
    };
    return Truck;
}());
var v1 = new Car();
var v2 = new Truck();
function useVehicle(vehicle) {
    // Can call vehicle.drive() because it always exists:
    vehicle.drive();
    // We can't call loadCargo on a vehicle because only
    // a truck has that by default:
    //vehicle.loadCargo(1000)
    // If we do a typeGuard we can use loadCargo:
    if ('loadCargo' in vehicle) {
        // Alternative: if (vehicle isinstanceof Truck)
        vehicle.loadCargo(1000);
    }
}
useVehicle(v1);
useVehicle(v2);
function moveAnimal(animal) {
    var speed;
    switch (animal.type) {
        case 'bird':
            speed = animal.flyingSpeed;
            break;
        case 'horse':
            speed = animal.runningSpeed;
            break;
    }
    console.log("A " + animal.type + " is moving at the speed of " + speed + " mph.");
}
moveAnimal({ type: 'bird', flyingSpeed: 10 });
moveAnimal({ type: 'horse', runningSpeed: 20 });
var errorBag = {
    // These can only be strings, due to above ErrorContainer
    // You couldn't do email: 45 for example.
    email: 'Not a valid email!',
    username: 'Must start with cap'
};
/********* Optional Chaining *********/
// Check if something exist before you use it.
var fetchUserData = {
    id: 'u1',
    name: 'Max',
    job: { title: 'CEO' }
};
// In JS you would do something like this:
console.log(fetchUserData.job && fetchUserData.job.title);
// In Typescript you can use optional ?
console.log((_a = fetchUserData === null || fetchUserData === void 0 ? void 0 : fetchUserData.job) === null || _a === void 0 ? void 0 : _a.title);
/********* Nullish Coalescing *********/
// Double question mark means if data is
// null or undefined then set it as whatever
// is in the string after ?? in this case DEFAULT
// If its an empty string, that's not null or
// undef so we would keep it an empty string.
var userInput = '';
var storeData = userInput !== null && userInput !== void 0 ? userInput : 'DEFAULT'; // Empty string so store empty string
console.log("Stored data: " + storeData);
var userInput2 = undefined;
var storeData2 = userInput2 !== null && userInput2 !== void 0 ? userInput2 : 'DEFAULT'; // undef or null so store DEFAULT
console.log("Stored data: " + storeData2);
