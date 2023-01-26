const prev = document.querySelector('.prev');
const next = document.querySelector('.next');
const images = document.querySelector('.carousel').children;
const totalImages = images.length;
let index = 0;

prev.addEventListener('click', () => {
  nextImage('next');
})

next.addEventListener('click', () => {
  nextImage('prev');
})

function nextImage(direction) {
  if(direction == 'next') {
    index++;
    if(index == totalImages) {
      index = 0;
    }
  } else {
    if(index == 0) {
      index = totalImages - 1;
    } else {
      index--;
    }
  }
  for(let i = 0; i < images.length; i++) {
    images[i].classList.remove('main');
  }
  images[index].classList.add('main');
}

let amount = document.querySelector(".amount");
let button1 = document.querySelector("#button1");
let button2 = document.querySelector("#button2");
let amount1 = document.querySelector('#amount1');
const cost1 = document.querySelector("#cost1");
let currentAmount1 = 0;
let currentCost1 = 0;

function firstinc(){
    currentAmount1++;
    currentCost1 +=6500;
    amount.textContent = currentAmount1;
    cost1.textContent = currentCost1 + " AMD";
}

document.getElementById("button1").addEventListener("click", firstinc())

function firstdec(){
    if(currentAmount1 > 1){
    currentAmount1--;
    currentCost1 -=6500;
    amount.textContent = currentAmount1;
    cost1.textContent = currentCost1 + " AMD";
}}

document.getElementById("button2").addEventListener("click", firstdec());

let currentAmount2 = 0;
let currentCost2 = 0;
let button3 = document.querySelector('#button3');
let button4 = document.querySelector('#button4');
const cost2 = document.querySelector("#cost2");
let amount2 = document.querySelector("#amount2");

function secondinc(){
    currentAmount2 ++;
    currentCost2 +=1800;
    cost2.textContent = currentCost2 + " AMD";
    amount2.textContent = currentAmount2;
}
document.getElementById("button3").addEventListener("click", secondinc());

function seconddec(){
    if(currentAmount2 > 1){
        currentAmount2 --;
        currentCost2 -=1800;
        amount2.textContent = currentAmount2;
        cost2.textContent = currentCost2 + " AMD";
    }
}
document.getElementById("button4").addEventListener("click", seconddec());

let button5 = document.querySelector('#button5');
let button6 = document.querySelector('#button6');
const cost3 = document.querySelector('#cost3');
let amount3 = document.querySelector('#amount3');
let currentAmount3 = 0;
let currentCost3 = 0;

function thirdinc(){
    currentAmount3 ++;
    currentCost3 +=1400;
    amount3.textContent = currentAmount3;
    cost3.textContent = currentCost3 + " AMD";
}
document.getElementById("button5").addEventListener("click", thirdinc());

function thirddec(){
    if(currentAmount3>1){
        currentAmount3--;
        currentCost3 -=1400;
        amount3.textContent = currentAmount3;
        cost3.textContent = currentCost3 + " AMD"
    }
}
document.getElementById("button6").addEventListener("click", thirddec());



let button7 = document.querySelector('#button7');
let button8 = document.querySelector('#button8');
let cost4 = document.querySelector('#cost4');
let amount4 = document.querySelector('#amount4');
let currentAmount4 = 0;
let currentCost4 = 0;

function fourthinc(){
    currentAmount4++;
    currentCost4 +=1400;
    amount4.textContent = currentAmount4;
    cost4.textContent = currentCost4 + " AMD";
}
document.getElementById('button7').addEventListener("click", fourthinc());

function fourthdec(){
    if(currentAmount4>1){
        currentAmount4--;
        currentCost4 -=1400;
        amount4.textContent = currentAmount4;
        cost4.textContent = currentCost4 + " AMD";
    }
}
document.getElementById("button8").addEventListener("click", fourthdec());


let button9 = document.querySelector('#button9');
let button10 = document.querySelector('#button10');
const cost5 = document.querySelector('#cost5');
let amount5 = document.querySelector("#amount5");
let currentAmount5 = 0;
let currentCost5 = 0;

function fifthinc(){
    currentAmount5++;
    currentCost5 +=2200;
    cost5.textContent = currentCost5 + " AMD";
    amount5.textContent = currentAmount5;
}

document.getElementById("button9").addEventListener("click", fifthinc());

function fifthdec(){
    if(currentAmount5>1){
        currentAmount5--;
        currentCost5-=2200;
        amount5.textContent = currentAmount5;
        cost5.textContent = currentCost5 + " AMD";
    }
}
document.getElementById("button10").addEventListener("click", fifthdec());

// const items = [
//     { amount: document.querySelector("#amount1"), cost: document.querySelector("#cost1"), inc: 6500, dec: 6500 },
//     { amount: document.querySelector("#amount2"), cost: document.querySelector("#cost2"), inc: 1800, dec: 1800 },
//     { amount: document.querySelector("#amount3"), cost: document.querySelector("#cost3"), inc: 1400, dec: 1400 },
//     { amount: document.querySelector("#amount4"), cost: document.querySelector("#cost4"), inc: 1400, dec: 1400 },
//     { amount: document.querySelector("#amount5"), cost: document.querySelector("#cost5"), inc: 1400, dec: 1400 }
//   ];
  
//   for (let i = 0; i < items.length; i++) {
//     let currentAmount = 0;
//     let currentCost = 0;
//     let item = items[i];
//     let buttonInc = document.querySelector(`#button${i*2+1}`);
//     let buttonDec = document.querySelector(`#button${i*2+2}`);
  
//     buttonInc.addEventListener("click", () => {
//       currentAmount++;
//       currentCost += item.inc;
//       item.amount.textContent = currentAmount;
//       item.cost.textContent = currentCost + " AMD";
//     });
  
//     buttonDec.addEventListener("click", () => {
//       if (currentAmount > 1) {
//         currentAmount--;
//         currentCost -= item.dec;
//         item.amount.textContent = currentAmount;
//         item.cost.textContent = currentCost + " AMD";
//       }
//     });
//   }

let basketamount = document.querySelector("#basketamount");
let bask1 = document.querySelector("#bask1");
currentbasketamount.value=0
function first(){
    basketamount.value = Number(basketamount.value) + (+amount1.textContent);
}
bask1.addEventListener("click", first())

let bask2 = document.querySelector("#bask2");
function second(){
    basketamount.value = Number(basketamount.value) + (+amount2.textContent);
}
bask2.addEventListener("click", second());

let bask3 = document.querySelector("#bask3");
function third(){
    basketamount.value = Number(basketamount.value) + (+amount3.textContent);
}
bask3.addEventListener("click", third());

let bask4 = document.querySelector("#bask4");
function fourth(){
    basketamount.value = Number(basketamount.value) + (+amount4.textContent);
}
bask4.addEventListener("click", fourth());

let bask5 = document.querySelector("#bask5");
function fifth(){
    basketamount.value = Number(basketamount.value) + (+amount5.textContent);
}
bask5.addEventListener("click", fifth());

// let basketamount = document.querySelector("#basketamount");
// basketamount.value = 0;
// for (let i = 1; i <= 5; i++) {
//   let bask = document.querySelector(`#bask${i}`);
//   let amount = document.querySelector(`#amount${i}`);
//   bask.addEventListener("click", () => {
//     basketamount.value = Number(basketamount.value) + Number(amount.textContent);
//   });
// }








