// Script property of Cozymugg Software 2026
import { cards } from './main.js'

// Panel Elements
const panel = document.getElementById('side-panel')
const panelName = document.getElementById("panel-name");
const panelDescription = document.getElementById("panel-description");
const panelImage = document.getElementById("panel-image");
const closeBtn = document.getElementById('close-btn')

// Template Elements
const template = document.getElementById("card-template");
const container = document.getElementById("card-container");


closeBtn.addEventListener('click', () => {
    panel.classList.remove("open");
    console.log("closed")
})


// function to populate side-panel
function openCardPanel(card) {
    panelName.textContent = card.Name;
    panelDescription.textContent = card.Description;
    panelImage.src = `/pets/${card.Name.toLowerCase()}.png`;
    panel.classList.add("open");
}


// function to populate pets page
for (const card of cards.available) {
    const clone = template.content.cloneNode(true);

    clone.querySelector(".card-name").textContent =
        card.Name;

    clone.querySelector(".card-description").textContent =
        card.Description;

    const image = clone.querySelector(".card-image");
    image.src = `/pet-thumbnails/${card.Name.toLowerCase()}_thumb.png`;

    const button = clone.querySelector(".open-panel-btn")
    button.addEventListener("click", () => {
        openCardPanel(card);
    });
    container.appendChild(clone);
}
