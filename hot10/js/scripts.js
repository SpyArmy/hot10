
const hamBtn = document.querySelector('#hamBtn');
const pageWr = document.querySelector('#pageWrapper');

hamBtn.addEventListener('click', () => {
    pageWr.classList.toggle('moveOver');

});

const rightNow = new Date();
document.querySelector('#year').textContent = rightNow.getFullYear();


import { hotels } from "../data/hoteldata.js";

const hotelCards = document.querySelector("#cards");

hotels.forEach(hotel => {
    const mySection = document.createElement("section");

    const theImg = document.createElement("img");
    theImg.src = `images/${hotel.photo}`;
    theImg.alt = hotel.name;

    const theName = document.createElement("h2");
    theName.textContent = hotel.name;

    const theAddress = document.createElement("address");
    theAddress.innerHTML = `${hotel.address[0]}<br>${hotel.address[1]}`

    const thePhone = document.createElement("p");
    thePhone.textContent = hotel.phone;

    mySection.appendChild(theImg);
    mySection.appendChild(theName);
    mySection.appendChild(theAddress);
    mySection.appendChild(thePhone);

    hotelCards.appendChild(mySection);
});
