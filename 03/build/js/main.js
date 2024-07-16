"use strict";
//Array
let stringArr = ['hehe', 'boiis'];
let colorArr = ['red', 'blue', 'green', 1234];
let mixedType = ['ABC', 1999, true];
stringArr[0] = 'Chakin';
stringArr.push('Patta');
colorArr[0] = 4321;
colorArr.unshift('pink');
// stringArr = colorArr //this can't do
// colorArr = stringArr //this can do because the type in colorArr > stringArr
let test = []; //any types
let bands = [];
bands.push("BMTH");
//Tuple
let myTuple = ['Chakin', 1234, false]; //This is tuple
let mixed = ['Patta', 1, false]; //This is array
// mixed = myTuple //this can do; mixed is union type of array and tuple (สามารถแทนที่กันได้ mixed จึง = myTuple ได้)
// myTuple = mixed //this can't do; แต่อันนี้ไม่สามารถเนื่องจาก myTuple ต้องการ 3 ตัวแปรของ types เนื่องจาก mixed อาจน้อยกว่า/มากกว่า 3 อย่าง
// myTuple[3] = 39 //this can't do; เพราะเหมือน slot ที่ 4 ไม่ได้เปิดไว้ว่าเป็น type อะไร
//Object
let myObj;
myObj = [];
console.log(typeof myObj); //this return object
const exampleObj = {
    prop1: "Chakin",
    prop2: 23,
    prop3: true
};
//also can use "interface" as the custom type
// interface Guitarist {
//     name: String,
//     active?: boolean,
//     albums: (string | number)[] 
// }
let evh = {
    name: "Eddie",
    active: false,
    albums: [1984, 5120, 'OU812']
};
let JP = {
    name: "Jimmy",
    active: true,
    albums: ["I", "II", 3]
};
evh = JP; // can do if the type is the same but if the type is not ; can't do (also if delete Guitarist but same type; can do)
//if you using props that have "?" you have to "?" in function where it use too! (like name? and if name? is value then uppercase it)
// const greetingGuitarist = (guitarist: Guitarist) => {
//     return `Hello ${guitarist.name?.toUpperCase()}`
// }
//if you dont want "name?" you must data validation
const greetingGuitarist = (guitarist) => {
    if (guitarist.name) {
        return `Hello ${guitarist.name.toUpperCase()}`;
    }
    return "Hello!";
};
console.log(greetingGuitarist(evh));
//enum
//the default start at "0" that mean U=0 then A=4
//can assing the value for each enum that mean U=1 then A=5
var Grade;
(function (Grade) {
    Grade[Grade["U"] = 1] = "U";
    Grade[Grade["D"] = 2] = "D";
    Grade[Grade["C"] = 3] = "C";
    Grade[Grade["B"] = 4] = "B";
    Grade[Grade["A"] = 5] = "A";
})(Grade || (Grade = {}));
console.log(Grade.U);
