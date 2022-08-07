"use strict"

let menuIcon = document.querySelector('.menu-icon');
let menu = document.querySelector('.denisnovik__navigation');
menuIcon.addEventListener('click', function() {
    menu.classList.toggle('_active');
    menuIcon.classList.toggle('menu-icon_active');
})
menuIcon.addEventListener('click', function() {
    if (menuIcon.classList.contains('menu-icon_active')){
        document.body.style.overflowY = "hidden"; 
    } else {
        document.body.style.overflowY = "visible"; 
    }
})


// let parRadioButtons = document.querySelectorAll(".skills-item__rating");
// for (let index in parRadioButtons) {
//     const element = parRadioButtons[index];
//     element.addEventListener("click", () => {
//         for (let index in element.children) {
//             const item = element.children[index];
//             if (item.checked) element.nextElementSibling.nextElementSibling.style.width = `${item.value * 20}%`;
//         }
//     });
// }


let parRadioButtons = document.querySelectorAll(".skills-item__rating");
let valuesRadioButns = [];

parRadioButtons.forEach(element => {
    element.addEventListener("click", onRadioClick);

    element.addEventListener("mouseover", onRadioMouseOver);
    element.addEventListener("mouseout", onRadioMouseOut);

    valuesRadioButns.push(getComputedStyle(element.nextElementSibling.nextElementSibling).width)
});

console.log(valuesRadioButns)

function onRadioClick(event) {
    let item = event.target;
    if (item.checked) {
        valuesRadioButns[`${item.parentNode.id}`] = `${item.value * 20}%`
        item.parentNode.nextElementSibling.nextElementSibling.style.width = valuesRadioButns[`${item.parentNode.id}`];
    }
}

function onRadioMouseOver(event) {
    let item = event.target;
    item.parentNode.nextElementSibling.nextElementSibling.style.width = `${item.value * 20}%`
}

function onRadioMouseOut(event) {
    let item = event.target;
    item.parentNode.nextElementSibling.nextElementSibling.style.width = `${valuesRadioButns[`${item.parentNode.id}`]}`
}

// let parRadioButtons = document.querySelectorAll(".skills-item__rating");
// for (let index = 0; index < parRadioButtons.length; index++) {
//     parRadioButtons[index].addEventListener("mouseover", () => {
//         for (let item of parRadioButtons[index].children) {
//             item.onmouseover(() => {parRadioButtons[index].nextElementSibling.nextElementSibling.style.width = `${item.value * 20}%`;})
//         }
//     });
// }
// console.log();