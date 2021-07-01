// let count = 0;
// function counter() {
//     count++
//     return count
// }

// counter();
// counter();
// console.log(counter());

// let arr = [1, [true], [[3], ['hello']]]

// let newArr = [];

// function someRec(arr, i = 0) {
//     if (i === arr.length)
//         return
//     if (typeof arr[i] == "object") {
//         someRec(arr[i])
//     } else {
//         newArr.push(arr[i])
//     }
//     return someRec(arr, i + 1)
// }
// arrToFloat(arr);
// console.log(newArr)

// let arr = [1, [true], [[3], ['hello']]]
// let newArr = []

// const arrToFloat = function (arr, i = 0) {
//     if (i === arr.length) return;
//     if (Array.isArray(arr[i])) {
//         arrToFloat(arr[i])
//     }
//     else newArr.push(arr[i])
//     arrToFloat(arr, i + 1)
// }

// Используя замыкание напишите функцию. Родительская функция должна принимать массив, а дочерняя принимает число.
// Функция должна возвращать true, если в массиве есть заданное число, иначе, возвращать false.
// Например, есть массив [4,5.6]
// func(7) //false
// func(6) //true

// function isCount(arr) {
//     return function (num) {
//         return arr.includes(num)
//     }
// }




// let student = {
//     kpi: 99,
//     name: "Kubat",
//     showKpi: () => {
//         let student2 = {
//             kpi: 50,
//             name: "Bera",
//             showKpi2: () => {
//             }
//             let student3 = {
//                 kpi: 15,
//                 name: "Baatyr",
//                 showKpi3: () => {
//                     console.log(this.kpi);
//                 }
//                 student3.showKpi3()
//             }
//         }
//         student2.showKpi2()
//     }
// }
// student.showKpi()


// function foo() {
//     let a = 5;
//     let b = 10;
//     {}
// }


// У вас есть массив   
// С помощью стрелочной функции отфильтруйте и 
//создайте новый массив с числами больше 70

// const numbers = [3, 62, 234, 7, 23, 74, 23, 76, 92];
// let newArr = [];
// let filter = () => {
//     for (let i = 0; i < numbers.length; i++) {
//         if (numbers[i] > 70) {
//             newArr.push(numbers[i]);
//         }
//     }
//     newArr.sort((a, b) => a - b);
// }

// filter();
// console.log(newArr);

// // Напишите стрелочную функцию, которая принимает в качестве параметра километры и возвращает метры.
// // 1. Функцию с начала напишите в несколько строк (тело функции в фигурных скобках). 
// // 2. Затем, функцию сократите до одной строки.
// const converter = (km) => {
//     let m = km * 1000;
//     return m
// };
// console.log(converter(12));

// const converter2 = km => km * 1000;
// console.log(converter2);



// let user = {
//     name: 'Sam',
//     age: 17,
//     balans: 800,
//     tickets: 0
// }
// user.buyTicket = function () {

// }

// let calculator = {
//     read() {
//         this.a = +prompt("a", 0)
//         this.b = +prompt("a", 0)
//     },
//     sum() {
//         return this.a + this.b;
//     },
//     mult() {
//         return this.a * this.b;
//     }
// }
// calculator.read
// console.log(calculator.sum());
// console.log(calculator.mult());


// let input = '23 + 35 =';
// let res = input.replace(/(\d+)\s\+\s(\d+)\s=\s/g, function (a, b, c) {
//     let res2 = parseInt(b) + parseInt(c)
//     return a +res2
// })
// console.log(res);


// let elevator = {
//     currentFloor: 1,
//     minFloor: 1,
//     maxFloor: 16,
//     printFloor() {
//         console.log(this.currentFloor);
//     },
//     upOneFloor() {
//         if (this.currentFloor < this.maxFloor) {
//             this.currentFloor++;
//             this.printFloor()
//         }
//         else {
//             alert("Максимальный этаж")
//         }
//     },
//     downOneFloor() {
//         if (this.currentFloor > this.minFloor) {
//             this.currentFloor--;
//             this.printFloor()
//         }
//         else {
//             alert("Минимальный этаж")
//         }
//     },
//     toFloor(getFloor) {
//         while (this.currentFloor !== getFloor) {
//             if (getFloor > this.currentFloor && getFloor <= this.maxFloor) {
//                 this.upOneFloor()
//             }
//             else if (getFloor < this.currentFloor && getFloor >= this.minFloor) {
//                 this.downOneFloor
//             }
//             else {
//                 alert("Нет такого этажа")
//                 return
//             }
//         }
//     }
// }

// // console.log(elevator.printFloor());
// // console.log(elevator.upOneFloor());
// elevator.printFloor();
// elevator.toFloor(13)
// elevator.downOneFloor();


// let limit = 1000;

// function funclimit(n) {
//     if (n <= 0) {
//         return
//     }
//     if (n > limit)
//         return

//     console.log(n);
//     funclimit(2 * n)
//     console.log(n);
// }
// funclimit(100)

// let n = +prompt("Enter your number")
// let nn = [];
// let isOdd = function (n) {
//     let even = 0;
//     if (n == even) {
//         console.log(nn);
//     }
//     else {
//         if (n % 2 !== 0) {
//             nn.unshift(n);
//         }
//         isOdd(n - 1)
//     }
// }
// isOdd(n)

// for (let i = 2; i <= 10; i++) {
//     if (i % 2 == 0) {
//         alert(i);
//     }
// }


//  Задание №8
//  Дана строка; нужно написать функцию, которая позволяет
//  вернуть значение true, если строка является палиндромом,
//  и false — если нет. При этом нужно учитывать пробелы и
//  знаки препинания.
//  К примеру:
//  palindrom('tenet') === true
//  palindrom('nolan') === false

// function palindrome(str) {
//     str = str.toLowerCase().replace(/\s/g, "");
//     return str === str.split("").reverse().join("");
// }


// let task5 = [4, 5, 5, 5, 3, 5, 2, 3, 1, 3, 4];
// let obj = {};
// let maxRepeat = task5.forEach((item) => {
//     if (obj[item]) {
//         obj[item]++
//     }
//     else {
//         obj[item] = 1
//     }
// })
// console.log(obj);


// let arr = [
//     436450905757958151n,
//     11258783099996076460563n,
//     4271648547630677847351n,
//     618958267230480336590096n,
//     8758497946868448n,
//     522605576771949556944035n,
//     85066202249185099169760853n,
//     3086832757126n,
//     996521n,
//     927960635227601913n,
//     70078548120507149395588131n,
//     860837n,
//     358019731380917077399530102n,
//     62039800138267504261751603735n,
//     9750891479584997n,
//     918662n,
//     65327012964727042243717157n,
//     232087621279086322105118092n,
//     5211980170217154619622689642n,
//     6124973n,
//     86411816655484980296n,
//     91315560975533164408650219064n,
//     622020778302918273675482n,
//     810589171448852275032504861n,
//     444121583n,
//     33430239609682594751236n,
//     185623925354270032483460275221n,
//     7868767990756882313n,
//     4657463770033462099583n,
//     242033234081n,
//     522740644841373392917114n,
//     406008262691140304161593616100211362n,
//     568510122451787635388154655n,
//     5578397767326623013150481034n,
//     555640745510125078573784n,
//     406901355248415157672497n,
//     88558845201718547978n,
//     68574135720461824293161323n,
//     3676244n,
//     5042122205391979386680691n,
//     73395510612321053412266453664n,
//     24406073369262079776782n,
//     7422295137177317668814n,
//     158882n,
//     372566226366055183434756092n,
//     217801045092586396416854n,
//     387064459629162985218n,
//     27921983810840242015693511824n,
//     1644125056804n,
//     5379171082171129383n,
//     6750612981549243200995103n,
//     32412900856868128268020217613n,
//     479858287n,
//     6096272n,
//     454320294201191419460256n,
//     293398766039677586n,
//     30652983692459763541n,
//     82882672765594704813185n,
//     92583381n,
//     43343754351489585033783532n,
//     1299335n,
//     254078966874894178015532n,
//     129278851477373713752221n,
//     1324382354724457193161741158451n,
//     341401685n,
//     5457110999302082592077217n,
//     95066071456345657725316571n,
//     743409212n,
//     988517320507018868694n,
//     190928581430131876371881026012n,
//     8690621n,
//     9915740590818375796n,
//     13374845638424941804172067n,
//     4729159847810460863472n,
//     4416521647100742520187956283n,
//     29941458499424421700564n,
//     7523244131n,
//     224344126317666108716556700814n,
//     529253721025532996042429751n,
//     867344n,
//     11654415332705915327940693482n,
//     48018003472901929981390383n,
//     2866645196951814499551n,
//     20726910437738542761337334n,
// ];

// let res = arr.map elem=> {
//     elem = elem.toString().split('')
//     return elem.reduce((total, num) => {
//         return total + Number(num)
//     }, 0)
// })
// console.log(res);

// res = res.map(elem => {
//     return String.fromCharCode(elem)
// })


// 1. Скопируйте все элементы arr1 в arr2
// const arr1 = ['JAN', 'FEB', 'MAR', 'APR', 'MAY'];
// let arr2 = [...arr1];
// console.log(arr2);

// 2. С помощью деструктуризации выведете в новые перменные каждый элемент массива(previous, current, next) и напишите функцию высчитывающую среднюю температуру за три дня
// const bish = {
//     yesterday: 32,
//     today: 37,
//     tomorrow: 27
// };

// const { yesterday: previous, today: current, tomorrow: next } = bish;

// function getAvg(a, b, c) {
//     return ((a + b + c) / 3)
// }

// console.log(getAvg(previous, current, next));

// 4. Вам дан объект с информацией о книге. С помощью деструктуризации выведите
// серийный номер книжки ISBN в консоль

// const courseCatalogMetadata = [
//     {
//         title: 'The Hobbit, or There and Back Again',
//         description: 'The hobbit tells a fantastic story of adventure, danger, friendship, and courage',
//         texts: [{
//             author: 'J. R. R. Tolkien',
//             price: 120,
//             ISBN: '912-6-44-578441-0'
//         }]
//     }
// ];
// let [{ texts: [{ ISBN }] }] = courseCatalogMetadata;
// console.log(ISBN);



// Создайте массив объектов, где хранятся данные о браузерах.
// Поочередно, с интервалом в 2 секунды, отобразите на странице информацию о браузерах.
// Для отображения текста на странице создайте функцию, где нужно деструктуризовать аргументы.
// Пример вывода: Mozilla developed Firefox which holds 8.01% of the Market Share
// 
// Исходные данные
// Firefox - Mozilla - 8.01%
// Chrome - Google - 68.26%
// Edge - Microsoft - 6.67%
// Opera - Opera Software - 1.31%

console.log("Hello world!");