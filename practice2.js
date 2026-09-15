const japanese = 100;
const math = 80;
const english = 75;
const science = 70;
const socialStudies = 80;

const totalScore = japanese + math + english + science + socialStudies;

console.log(totalScore);

//算術演算子2
const result = 100000 - 80000;
console.log(result);

//算術演算子3
const multiplication = 32 * 64;
console.log(multiplication);

//算術演算子4
const division = 10 / 2;
console.log(division);

//算術演算子5
let num = 3;
num++;
console.log(num);

//算術演算子6
let num2 = 0;
num2--;
console.log(num2);

//条件分岐1
const moneyA = 8000;
const moneyB = 12000;

if ( moneyA  >  moneyB ) {
    console.log("A君の所持金が多い");
} else {
    console.log("B君の所持金が多い");
}

//条件分岐2
const moneyC = 3000;

if( moneyA  > moneyB && moneyA  > moneyC ){
    console.log("A君の所持金が多い");
}else if( moneyB > moneyA && moneyB  > moneyC ){
    console.log("B君の所持金が多い");
}else{
    console.log("C君の所持金が多い");
}

//条件分岐3
const button = document.getElementById("myButton");
button.addEventListener("click", () => {
const score = Math.floor( Math.random() * 100 ) + 1 ;
console.log(score)
if ( score >=  100 ){
    alert( "満点！！" );
} else if ( score >= 80 ) {
    alert( "合格です" );
} else if ( score >= 30 )  {
    alert( "赤点です" );
} else {
    alert( "不合格です" );
}
})

//条件分岐4
const inputElement = document.getElementById("textbox");
inputElement.addEventListener( "blur" , () => {
switch ( inputElement . value ) {
case "saitama":
    console.log("埼玉");
    break;
case "tokyo":
    console.log("東京");
    break;
case "kanagawa":
    console.log("神奈川");
    break;
default:
    console.log("未確認");
}
});

//Math1
const date = Math.floor(Math.random() * 10 ) + 1 ;
console.log(date)

//Math2
const maxdate = Math.max( 1 , 4 , 6 );
console.log(maxdate)

//Math3
const mindate = Math.min( 1 , 4 , 6) ;
console.log(mindate)

//ループ処理1
for ( let i = 1 ; i <= 10; i++ ) {
console.log("実行");
}

//ループ処理2
const fruits = [ "apple", "banana", "cat" ];
for ( const fruit of fruits ) {
console.log(fruit);
}

//ループ処理3
const numbers = [ 1, 2, 3 ];
let sum = 0;

for ( let i = 0 ; i < numbers.length ; i++ ) {
sum += numbers[i];
}

console.log(sum);

//ループ処理4
const testArray = [ 1 , "hoge" , 2 , "huga" , 3 , "piyo" ]
const number = [];
const language = [];

for ( let i = 0 ; i < testArray.length ; i++ ) {
const item = testArray[i];
if ( typeof item === number ) {
    numbers.push(item);
} else if ( typeof item ===  "string" ) {
    language.push(item);
}
}

console.log("数値だけの配列:", numbers);
console.log("文字列だけの配列:", language);

//ループ処理5
let sum2 = 0;
for ( let i = 1 ; i <= 100 ; i++ ) {
if ( i % 2 !== 0 ){
continue;
}
sum2 += i;
}
console.log("1から100の奇数合計:", sum2);

//繰り返し1
const items = [ 'apple', 'banana', 'cat' ];

items.forEach( item => {
console.log(item);
});

//繰り返し２
let i = 0
while ( i < 10 ){
const enter = "実行";
i += 1
console.log(enter);
}

//繰り返し3
for ( let i = 0 ; i < 3 ; i++ ) {
console.log(i);
}

const foods = ['さくらんぼ', 'レモン', 'ラフランス'];
foods.forEach(( fruit ) => {
console.log(fruit);
});

let count = 0;
while ( count < 3 ) {
console.log(count);
count++;
}

//配列メソッド1(map)
const guusuu = [ 2, 4, 6, 8 ];
const doubled = guusuu.map( num => num * 2 );

console.log(doubled);

//配列メソッド2(some)
const guusuu2 = [ 2, 4, 6, 7 ];
const doubled2 = numbers.some( num => num % 2 !== 0 );

console.log(doubled2);

//配列メソッド3(every)
const bangou = [
{ id: 2, hasSubmitted: true },
{ id: 3, hasSubmitted: false },
{ id: 4, hasSubmitted: true },
];
const allSubmitted = bangou.every( item => item.hasSubmitted );

console.log(allSubmitted);

//配列メソッド4(filter)
const array = [
{ id: 2, hasSubmitted: true },
{ id: 3, hasSubmitted: false },
{ id: 4, hasSubmitted: true },
]
const newArray = array.filter( item => item.hasSubmitted );

console.log(newArray)

//配列メソッド5(sort)
const ids = [
{ id: 323, hasSubmitted: true },
{ id: 111, hasSubmitted: false },
{ id: 268, hasSubmitted: true },
]
ids.sort(( a , b ) => a.id - b.id );
console.log(ids);