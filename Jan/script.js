let cars = {
    cars1: {
        brand: "VW",
        model: "any",
        color: "brown",
        build: 1992
    },
    cars2: {
        brand: "Mercedes",
        model: "any",
        color: "green",
        build: 2012
    },
    cars3: {
        brand: "Ford",
        model: "any",
        color: "pink",
        build: 1975
    },
    getCarName: function() {
        let result = [];
        for (let i = 1; i < Object.keys(this).length; i++) {
            let placeholder = "cars" + i;
            result.push(this[placeholder].brand);
        }
        return result;
    }
}

let animals = {
    animals1: {
        type: "Cat",
        name: "Fluffy",
        color: "all of them",
        age: 4
    },
    animals2: {
        type: "Axolotl",
        name: "Mr. Lotl",
        color: "pink with black spots",
        age: 2
    },
    animals3: {
        type: "Dog",
        name: "Satansbraten",
        color: "black and brown",
        age: 8
    },
    getAnimal: function() {
        let result = [];
        for (let i = 1; i < Object.keys(this).length; i++) {
            let placeholder = "animals" + i;
            result.push(this[placeholder].name);
        }
        return result;
    }
}

let people = {
    people1: {
        name: "Jan",
        age: 24,
        job: "Geringverdiener",
        hairColour: "brown"
    },
    people2: {
        name: "Alex",
        age: 32,
        job: "Museumshackler",
        hairColour: "brown"
    },
    people3: {
        name: "Bianca",
        age: 25,
        job: "Verkäuferin",
        hairColour: "blond"
    },
    getPerson: function() {
        let result = [];
        for (let i = 1; i < Object.keys(this).length; i++) {
            let placeholder = "people" + i;
            result.push(this[placeholder].job);
            result.push(this[placeholder].age);
        }
        return result;
    }
}
console.log(cars.getCarName())
console.log(animals.getAnimal())
console.log(people.getPerson())

let sandwiches = `{ "sandwich": "hamburger", "calories": "260" }`;
let fries = `{ "fries_size": "Large French Fries", "calories": "570" }`;

let sandwiches1 = JSON.parse(sandwiches);
let fries1 = JSON.parse(fries);

console.log(`My favorite sandwich is a ${sandwiches1.sandwich} which has approximately ${sandwiches1.calories} calories, along with it I enjoy eating ${fries1.fries_size} which have about ${fries1.calories} calories.`)