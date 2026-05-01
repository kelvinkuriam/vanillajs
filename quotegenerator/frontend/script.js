// get quotes from api
let apiQuotes = [];


async function getQuotes() {
    const apiUrl = 'http://localhost:8383/quotes';
    try {
        const response = await fetch(apiUrl);
        apiQuotes = await response.json();
        console.log(apiQuotes);

    } catch (error) {
    
        //catch error here;

    }
}


getQuotes();