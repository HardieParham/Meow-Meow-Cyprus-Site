// Script property of Cozymugg Software 2026
import Papa from "papaparse";

// Sheet must be shared and published to web in CSV format first!!
const SHEET_URL = "https://docs.google.com/spreadsheets/d/e/2PACX-1vQKqrzAw_hgOTMJxjLBAyxhoQMbqZctsEHCFbpwHrQgERn9WNOceq_VVz0nUR-q7MEcAZ1J6-j08Jo1/pub?gid=0&single=true&output=csv";


export async function fetchCards() {
    const response = await fetch(SHEET_URL);
    const csvText = await response.text();
    const result = Papa.parse(csvText, {
        header: true,
        skipEmptyLines: true,
        dynamicTyping: true
    });

    const cardData = {
        spotlight: [],
        available: [],
        unavailable: []
    };

    for (const card of result.data) {
        console.log(card)
        if (card['Spotlight'] === 'Yes') {
            cardData.spotlight.push(card)
        }
        if (card['Category'] === 'Available') {
            cardData.available.push(card)
        }
        if (card['Category'] === 'Unavailable') {
            cardData.unavailable.push(card)
        }
    }
    return cardData;
}

// export const cards = await fetchCards();



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