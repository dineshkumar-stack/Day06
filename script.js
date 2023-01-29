class biodetails {
    constructor(firstname, lastname, age, hobby1, hobby2, country) {
        this.firstname = firstname;
        this.lastname = lastname;
        this.country = country;
        this.age = age;
        this.hobby1 = hobby1;
        this.hobby2 = hobby2;
    }
    greet = () => {
        return `Name ${this.firstname} ${this.lastname}, Age ${this.age}, Nationality: ${this.country}, Hobbies: ${this.hobby1}, ${this.hobby2}.`;
    };
}

var bio = new biodetails("Dinesh", "kumar", 25, "coding", "editing", "India");
console.log(bio.greet());


//Uber calculates trip fare.

//Base fare - Amount charge for each trip.
//Time fare - Amount charge for every minutes spent on the trip.
//Distance fare - Amount charged for every KM on the trip.

let baseFare = 80;
let distanceFare = 80;//per kilometer
let timeFare = 38/60;//per min

let Estimate = (distance, duration) => {

    let kmfare = (distance /1000 * distanceFare);

    let minsfare = duration * timeFare;

    let tamount = kmfare + minsfare + baseFare;

    let fares = Math.floor(tamount / 10) * 10;

    return fares;

}

console.log(Estimate(12, 40))

//TotalFare = baseFare + timeFare + distanceFare


