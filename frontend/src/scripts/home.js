// Script property of Cozymugg Software 2026
import { getCards } from './getCards.js'

const cards = await getCards();

// Template Elements
const template = document.getElementById("card-template");
const container = document.getElementById("card-container");

// populate pet showcase
for (const card of cards.spotlight) {
    const clone = template.content.cloneNode(true);

    clone.querySelector(".card-name").textContent = card.Name;
    clone.querySelector(".card-age").innerHTML = "<b>Age:</b> " + card.Age;
    clone.querySelector(".card-breed").innerHTML = "<b>Breed:</b> " + card.Breed;
    clone.querySelector(".card-description").textContent = card.Description;

    const image = clone.querySelector(".card-image");
    image.src = `/pet-thumbnails/${card.ID}t.png`;

    // const button = clone.querySelector(".open-panel-btn")
    // button.addEventListener("click", () => {
    //     openCardPanel(card);
    // });
    container.appendChild(clone);
}