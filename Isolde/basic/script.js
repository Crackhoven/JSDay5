const cars = [{
    brand: "Mercedes",
    model: "Benz",
    color: "grey",
    built: 1990,
    calcAge() {
        let today = new Date();
        let age = today.getFullYear() - this.built;
        return age;
    }
},
{
    brand: "Ford",
    model: "Escort",
    color: "yellow",
    built: 1986,
    calcAge() {
        let today = new Date();
        let age = today.getFullYear() - this.built;
        return age;
    }
},

{
    brand: "Audi",
    model: "Quattro",
    color: "blue",
    built: 1995,
    calcAge() {
        let today = new Date();
        let age = today.getFullYear() - this.built;
        return age;
    }
}

];

console.log(`The ${cars[0].brand} is ${cars[0].calcAge()} years old.`);
console.log(`The ${cars[1].brand} is ${cars[1].calcAge()} years old.`);
console.log(`The ${cars[2].brand} is ${cars[2].calcAge()} years old.`);

const fauna = {
    animals: [{
        type: "cat",
        name: "Whiskey",
        color: "black",
        pet: true,
    },
    {
        type: "lion",
        name: "Vincent",
        color: "brown",
        pet: false,
    },
    {
        type: "bee",
        name: "Willy",
        color: "yellow",
        pet: false,
    }
    ],
    present() {
        var message = "";
        for (let i = 0; i < this.animals.length; i++) {
            message += `Hi, my name is ${this.animals[i].name}.\n`;
        }
        return message

    }
};

console.log(fauna.present());


const persons = {
    person1:
    {
        name: "Patricia",
        nickname: "Pat",
        location: "New Jersey",
        job: "singer",

    },
    person2: {
        name: "Daniel",
        nickname: "Dan",
        location: "London",
        job: "busdriver",
    },

    person3: {
        name: "Sebastian",
        nickname: "Sebi",
        location: "Innsbruck",
        job: "teacher",
    },
    present2: function() {
        let message = [];
        for (let i = 1; i < Object.keys(this).length; i++) {
            let text = "person" + i;
            message.push(this[text].nickname);

        }
        return message

    }

};

console.log(persons.present2());


//exercise 2

var sandwiches = `{
    "sandwich": "hamburger",
    "calories": "260" }`;

var fries = `{ 
    "fries_size": "Large French Fries",
    "calories": "570" }`;

let sandOb = JSON.parse(sandwiches);
let friesOb = JSON.parse(fries);

let printFood = document.getElementById("food");
printFood.innerHTML = `
    My favorite sandwich is a ${sandOb.sandwich} which has approximately ${sandOb.calories} calories, along with it I enjoy eating ${friesOb.fries_size} which have about ${friesOb.calories} calories.`



