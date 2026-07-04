// Script property of Cozymugg Software 2026
import { getCards } from './getCards.js'

const cards = await getCards();


// Panel Elements
const panel = document.getElementById('side-panel')
const closeBtn = document.getElementById('close-btn')
const panelName = document.getElementById("panel-name");
const panelImage = document.getElementById("panel-image");
const panelBio = document.getElementById("panel-bio");
const panelBreed = document.getElementById("panel-breed");
const panelColor = document.getElementById("panel-color");
const panelSex = document.getElementById("panel-sex");
const panelNeu = document.getElementById("panel-neutered");
const panelDOB = document.getElementById("panel-dob");
const panelVax1 = document.getElementById("panel-vax1");
const panelVax2 = document.getElementById("panel-vax2");
const panelRabies = document.getElementById("panel-rabies");
const panelChip = document.getElementById("panel-microchip");
const panelPass = document.getElementById("panel-passport");
const panelCat = document.getElementById("panel-cattest");
const panelDog = document.getElementById("panel-dogtest");
const panelChild = document.getElementById("panel-childtest");
const panelCategory = document.getElementById("panel-category")


// Template Elements
const template = document.getElementById("card-template");
const container = document.getElementById("card-container");
const secondContainer = document.getElementById("card-container-2");

closeBtn.addEventListener('click', () => {
    panel.classList.remove("open");
})


// function to populate side-panel
function openCardPanel(card) {
    panel.classList.add("open");
    panelName.innerHTML = card.Name;
    panelImage.src = `/pets/${card.ID}.png`;
    panelBio.textContent = card.Bio;  //"<b>Bio:</b> " + card.Bio;
    panelBreed.innerHTML = "<b>Breed:</b> " + card.Breed;
    panelColor.innerHTML = "<b>Colour:</b> " + card.Colour;
    panelSex.innerHTML = "<b>Sex:</b> " + card.Sex;
    panelNeu.innerHTML = "<b>Neutered:</b> " + card.Neutered;
    panelDOB.innerHTML = "<b>DOB:</b> " + card.DOB;
    panelVax1.innerHTML = "<b>1st Vax:</b> " + card['1st Vax'];
    panelVax2.innerHTML = "<b>2nd Vax:</b> " + card['2nd Vax'];
    panelRabies.innerHTML = "<b>Rabies:</b> " + card.Rabies;
    panelChip.innerHTML = "<b>Microchip:</b> " + card.Microchip;
    panelPass.innerHTML = "<b>Passport:</b> " + card.Passport;
    panelCat.innerHTML = "<b>Cat Tested:</b> " + card['Cat Tested'];
    panelDog.innerHTML = "<b>Dog Tested:</b> " + card['Dog Tested'];
    panelChild.innerHTML = "<b>Children Tested:</b> " + card['Child Tested'];

    if (card.Category === 'Adopted') {
        panelCategory.disabled = true;
        panelCategory.textContent = 'Adopted'

    }
}


// populating pets page
for (const card of cards.available) {
    const clone = template.content.cloneNode(true);

    clone.querySelector(".card-name").textContent = card.Name;
    clone.querySelector(".card-age").innerHTML = "<b>Age:</b> " + card.Age;
    clone.querySelector(".card-breed").innerHTML = "<b>Breed:</b> " + card.Breed;
    clone.querySelector(".card-description").textContent = card.Description;

    const image = clone.querySelector(".card-image");
    image.src = `/pet-thumbnails/${card.ID}t.png`;

	const meetButtonLink = clone.querySelector(".meet-btn-link");
	meetButtonLink.href = "mailto:cats@rescueteam.com?subject=" + card.Name +" Adoption Inquiry";

    const button = clone.querySelector(".open-panel-btn")
    button.addEventListener("click", () => {
        openCardPanel(card);
    });
    container.appendChild(clone);
}

// populating adopted pets
for (const card of cards.adopted) {
    const clone = template.content.cloneNode(true);

    clone.querySelector(".card-name").textContent = card.Name;
    clone.querySelector(".card-age").innerHTML = "<b>Age:</b> " + card.Age;
    clone.querySelector(".card-breed").innerHTML = "<b>Breed:</b> " + card.Breed;
    clone.querySelector(".card-description").textContent = card.Description;

    const image = clone.querySelector(".card-image");
    image.src = `/pet-thumbnails/${card.ID}t.png`;

    clone.querySelector("footer").remove();

    secondContainer.appendChild(clone);
}
