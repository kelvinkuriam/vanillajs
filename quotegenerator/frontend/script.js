/******************************************************
 * STORE QUOTES
 ******************************************************/

const quoteContainer = document.getElementById('quote-container');
const quoteText = document.getElementById('quote');
const authorText = document.getElementById('author');
const twitterBtn = document.getElementById('twitter');
const newQuoteBtn = document.getElementById('new-quote');
const loader = document.getElementById('loader');












let apiQuotes = [];

function loading(){
    loader.hidden = false;
    quoteContainer.hidden = true;
}

function complete(){
quoteContainer.hidden = false;
loader.hidden = true;


}


function newQuote(){
    loading();
    const quote = apiQuotes[Math.floor(Math.random()*apiQuotes.length)];
    console.log(quote)
    if(!quote.author){
        authorText.textContent = '- Unknown';
    }else{
  authorText.textContent=quote.author;
    }

    if(quote.quote.length > 50){
        quoteText.classList.add('long-quote');
    }else{
        quoteText.classList.remove('long-quote');
    }
  
    quoteText.textContent=quote.quote;
    complete();
}
/******************************************************
 * FETCH QUOTES FROM YOUR BACKEND
 ******************************************************/
async function getQuotes() {
    loading();
    const apiUrl = 'http://localhost:8383/quotes';

    try {
        const response = await fetch(apiUrl);

        // Convert response to JS object
        const data = await response.json();

        apiQuotes = data;

        newQuote()

        // Example usage
       


    } catch (error) {
        console.error('FRONTEND ERROR:', error);
    }
}
function tweetQuote(){
   const twitterUrl=`https://x.com/intent/tweet?text=${quoteText.textContent} - ${authorText.textContent}`;
   window.open(twitterUrl,'_blank'); 
}
newQuoteBtn.addEventListener('click',newQuote);
twitterBtn.addEventListener('click',tweetQuote);





getQuotes();




