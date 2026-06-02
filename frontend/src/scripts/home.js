// Script property of Cozymugg Software 2026
import { fetchCards } from './main.js'


async function preloadCards() {
    // Don't fetch if already cached
    if (sessionStorage.getItem("cards")) {
        return;
    }

    const cards = await fetchCards();

    sessionStorage.setItem(
        "cards",
        JSON.stringify(cards)
    );
}

preloadCards();
