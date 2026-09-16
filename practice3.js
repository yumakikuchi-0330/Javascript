//JSON文字列をJavaScriptオブジェクトに変換
const jsonPerson = '{"name":"Taro", "age":42, "gender": "male"}';
const obj = JSON.parse(jsonPerson)
console.log(obj.gender);

//JavaScriptオブジェクトをJSON文字列に変換
const constuser = {
    name: "Taro",
    Age: 13,
    gender: "male"
};
const json = JSON.stringify(constuser);
console.log(json);


//フォーム課題
const buttonClick = document.getElementById("button")
const nameInput = document.getElementById("nameInput");
const ageInput = document.getElementById("ageInput");
const emailInput = document.getElementById("emailInput");
const phoneInput = document.getElementById("phoneInput");

const zenkakuOnly = /^[^\x01-\x7E\uFF61-\uFF9F]+$/;
const numberOnly =/^\d+$/
const emailOnly = /^[a-zA-Z0-9_.+-]+@([a-zA-Z0-9][a-zA-Z0-9-]*[a-zA-Z0-9]*\.)+[a-zA-Z]{2,}$/
const phoneOnly = /^\d{11}$/

const validationcheck = (inputID,errorID,regex)=>{
    const inputvalue = document.getElementById(inputID).value.trim();
    const errortext = document.getElementById(errorID);
    if(inputvalue === ""){
        errortext.style.display = "block";
    }else if (!regex.test(inputvalue)){
        errortext.style.display = "block";
    }else{
        errortext.style.display = "none";
    }
}

buttonClick.addEventListener("click", () => {
    validationcheck("nameInput","nameError", zenkakuOnly);
    validationcheck("ageInput","ageError", numberOnly);
    validationcheck("emailInput","emailError", emailOnly);
    validationcheck("phoneInput","phoneError", phoneOnly);
});