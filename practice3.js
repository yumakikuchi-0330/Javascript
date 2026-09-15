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

//フォームバリデーションを実装(名前)
const nameInput = document.getElementById("nameInput");
console.log(nameInput)

nameInput.addEventListener("blur", () => {
    const nameInputValue = document.getElementById("nameInput").value;
    const errorDiv = document.getElementById("nameError");
    const zenkakuOnly = /^[^\x01-\x7E\uFF61-\uFF9F]+$/;
    // 条件1: 未入力の場合
    if (nameInputValue === "") {
        errorDiv.textContent = "正しい名前を入力してください";
        errorDiv.style.display = "block";
    } else if (!zenkakuOnly.test(nameInputValue)) {
    // 条件2: 全角文字以外（半角文字など）が含まれている場合
        errorDiv.textContent = "正しい名前を入力してください";
        errorDiv.style.display = "block";
    } else {
    // エラーがない場合
        errorDiv.textContent = "";
        errorDiv.style.display = "none";
    }
});

//フォームバリデーションを実装(年齢)
const ageInput = document.getElementById("ageInput");
console.log(ageInput)

ageInput.addEventListener("blur", () => {
    const ageInputValue = document.getElementById("ageInput").value;
    const errorAge = document.getElementById("ageError");
    const numberOnly =/^\d+$/
    if (ageInputValue === "") {
    // 条件1: 未入力の場合
        errorAge.textContent = "正しい年齢を入力してください";
        errorAge.style.display = "block";
    } else if (!numberOnly.test(ageInputValue)) {
    // 条件2: 数値以外が入力された場合
        errorAge.textContent = "正しい年齢を入力してください";
        errorAge.style.display = "block";
    } else {
    // エラーがない場合
        errorAge.textContent = "";
        errorAge.style.display = "none";
    }
});

//フォームバリデーションを実装(メールアドレス)
const emailInput = document.getElementById("emailInput");
console.log(emailInput)

emailInput.addEventListener("blur", () => {
    const emailInputValue = document.getElementById("emailInput").value;
    const errorEmail = document.getElementById("emailError");
    const emailOnly = /^[a-zA-Z0-9_.+-]+@([a-zA-Z0-9][a-zA-Z0-9-]*[a-zA-Z0-9]*\.)+[a-zA-Z]{2,}$/
    if (emailInputValue === "") {
    // 条件1: 未入力の場合
        errorEmail.textContent = "正しいメールアドレスを入力してください";
        errorEmail.style.display = "block";
    } else if (!emailOnly.test(emailInputValue)) {
    // 条件2: メールアドレス以外が入力された場合
        errorEmail.textContent = "正しいメールアドレスを入力してください";
        errorEmail.style.display = "block";
    } else {
    // エラーがない場合
        errorEmail.textContent = "";
        errorEmail.style.display = "none";
    }
});

//フォームバリデーションを実装(電話番号)
const phoneInput = document.getElementById("phoneInput");
console.log(phoneInput)

phoneInput.addEventListener("blur", () => {
    const phoneInputValue = document.getElementById("phoneInput").value;
    const errorphone = document.getElementById("phoneError");
    const phoneOnly = /^\d{11}$/
    if (phoneInputValue === "") {
    // 条件1: 未入力の場合
        errorphone.textContent = "正しい電話番号を入力してください";
        errorphone.style.display = "block";
    } else if (!phoneOnly.test(phoneInputValue)) {
    // 条件2: メールアドレス以外が入力された場合
        errorphone.textContent = "正しい電話番号を入力してください";
        errorphone.style.display = "block";
    } else {
    // エラーがない場合
        errorphone.textContent = "";
        errorphone.style.display = "none";
    }
});