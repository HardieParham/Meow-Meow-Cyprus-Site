// Script property of Cozymugg Software 2026
import Papa from "papaparse";

// Sheet must be shared and published to web in CSV format first!!
const SHEET_URL = "https://docs.google.com/spreadsheets/d/e/2PACX-1vRahYZZmCAe8h8rtp0kVuwljA0BRHmbCZ5VNFIcTcsxdbRmE6ou7rq7n7cURb4kgS3BRnNSDprh24r7/pub?gid=0&single=true&output=csv";


async function fetchCards() {
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


export async function getCards() {
    const cached = sessionStorage.getItem("cards");

    if (cached) {
        console.log("Loaded from cache");
        return JSON.parse(cached);

    } else {

        console.log("Fetching from API");
        const cards = await fetchCards();
        sessionStorage.setItem(
            "cards",
            JSON.stringify(cards)
        );
        return cards;
    }
}