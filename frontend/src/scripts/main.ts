import Papa from "papaparse";

// Sheet must be shared and published to web in CSV format first!!
const SHEET_URL: string = "https://docs.google.com/spreadsheets/d/e/2PACX-1vQKqrzAw_hgOTMJxjLBAyxhoQMbqZctsEHCFbpwHrQgERn9WNOceq_VVz0nUR-q7MEcAZ1J6-j08Jo1/pub?gid=0&single=true&output=csv"


export interface Card {
    ID: number;
    Name: string;
    Description: string;
    Type: string;
}


export async function fetchCards(): Promise<Card[]> {
    const response = await fetch(SHEET_URL);

    const csvText = await response.text();

    const result = Papa.parse<Card>(csvText, {
        header: true,
        skipEmptyLines: true,
        dynamicTyping: true
    });

    return result.data;
}


const cards = await fetchCards();

for (const card of cards) {
    console.log(card.Name);

}