//課題1
const message = "hope";
console.log(message);
//課題2
const number = 69;
console.log(number);
//課題3
const isOk = true;
const hasFinished = false;
console.log(hasFinished);
//課題4
let x;
console.log(x);
//課題5
const data = null;
console.log(data);
//課題6
const firstname = ["田中","佐藤","久保田","鈴木","河本"];
console.log(firstname[2]);
//課題7
const person = {
    id: 1,
    name: 'yourName',
    age: 20
};
console.log(person.id);
console.log(person.name);
console.log(person.age);

//関数1
function name () {
};

//関数2
const add = (a, b) =>{
return a * b
}
console.log(add(4, 25));

//関数3
function greet (fruits) {
    console.log(`${fruits}は赤いです`);
}
greet("りんご");
//関数4
function addnumber(c, d) {
    return c + d;
}
let result = addnumber(5, 5);
console.log(result);
//関数5
function plofile(name,age){
    console.log("私の名前は" + name + age +"歳です。");
}

plofile("田中" , 20 );

//DOM1
const myButton = document.getElementById("myButton");
console.log(myButton);

//DOM2
const text = document.querySelector(".text");
console.log(text)

//DOM3
const newItem = document.createElement("p");
newItem.textContent = "子要素を追加";

//DOM4
myButton.appendChild(newItem);

//event1
const button = document.getElementById("myButton");
button.addEventListener('click', () => {
  console.log('click');
});

//event2
window.addEventListener("scroll", () => {
  console.log("scroll");
});

//event3
const secondsbutton = document.getElementById("addBtn");
const div = document.getElementById("container");
secondsbutton.addEventListener('click', () => {
const addtext = document.createElement("p");
addtext.textContent = "子要素が追加されました！";
div.appendChild(addtext);
});
