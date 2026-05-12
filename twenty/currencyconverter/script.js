/*
========================================
STEP 1: FIND HTML ELEMENTS
========================================

JavaScript needs to "grab" parts of your HTML
so it can read from them or change them.

Think of your webpage like a house.

HTML creates the rooms:
- dropdowns
- input boxes
- text labels

JavaScript walks into the house and says:

"Let me find that exact room so I can use it."

That is what these lines do.
*/


// "const" means:
// "Create a variable whose reference should not change."
//
// A variable is just a container for storing something.
//
// Here, we are storing a REFERENCE to an HTML element.
//
// Think:
//
// currencyFirstEl ---> points to first dropdown
//
const currencyFirstEl = document.getElementById('currency-first');

/*
Breakdown:

document
- Represents the whole webpage.

.getElementById(...)
- Means:
  "Find an HTML element whose id matches this."

'currency-first'
- This must match:

<select id="currency-first">

So JavaScript searches the page and finds that dropdown.
*/


const worthFirstEl = document.getElementById('worth-first');

/*
This finds:

<input id="worth-first">

This is the first amount input box.

For example:
1 USD

The "1" is here.
*/


const currencySecondEl = document.getElementById('currency-second');

/*
This finds the second currency dropdown.

Example:

JPY

JavaScript needs this so it knows
what currency to convert INTO.
*/


const worthSecondEl = document.getElementById('worth-second');

/*
This finds the second input field.

This is where the converted answer goes.

Example:

145.33

JavaScript will write the answer here.
*/


const exchangeRateEl = document.getElementById('exchange-rate');

/*
This finds:

<p id="exchange-rate">

That paragraph shows text like:

1 USD = 145.33 JPY

JavaScript will update this text.
*/



/*
========================================
STEP 2: RUN THE FUNCTION IMMEDIATELY
========================================
*/

updateRate();

/*
This says:

"Run updateRate() right now."

Why?

Without this, the page loads but nothing happens.

You would see empty values until user changes something.

Calling this immediately makes sure:

- exchange rate appears
- converted value appears

as soon as page loads.
*/



/*
========================================
STEP 3: DEFINE THE FUNCTION
========================================

A function is a reusable block of instructions.

Think:

"Recipe"

Whenever we call updateRate(),
JavaScript follows the recipe.
*/

function updateRate(){

/*
Inside this function we will:

1. Ask exchange rate API for latest currency data
2. Extract the correct conversion rate
3. Display the exchange rate
4. Calculate converted amount
5. Put answer into second input
*/



/*
========================================
STEP 4: FETCH DATA FROM INTERNET
========================================
*/

fetch(
  `https://v6.exchangerate-api.com/v6/8a106240022439a947ac882f/latest/${currencyFirstEl.value}`
)

/*
fetch(...)
means:

"Go to this internet address and bring me data."

Think:

JavaScript sends a message:

"Hello exchange rate website,
please give me latest currency data."

------------------------------------------------

What is this weird string?

`https://.../${currencyFirstEl.value}`

Those backticks (` `) create a TEMPLATE LITERAL.

Template literals allow variables inside strings.

${ ... }

means:

"Insert value here."

Example:

If user selected:

USD

Then:

currencyFirstEl.value

becomes:

"USD"

So final URL becomes:

https://v6.exchangerate-api.com/v6/KEY/latest/USD

That tells the API:

"Give me rates based on USD."
*/



.then((res) => res.json())

/*
IMPORTANT:
fetch does not immediately give usable data.

It gives a RESPONSE object.

Think:

A sealed package arrives.

You cannot use contents yet.

Need to open package.

That is what:

res.json()

does.

--------------------------------

.then(...)

means:

"When previous step finishes,
do this next."

JavaScript does not like waiting.

fetch is asynchronous.

That means:

"Start internet request,
keep doing other things,
come back when finished."

.then() says:

"When finished, continue."

--------------------------------

(res)

This is the response package.

Could name it anything:

(dataPackage)
(response)
(x)

"res" is just shorthand for "response."

--------------------------------

=>

This is arrow function syntax.

This:

(res) => res.json()

means same as:

function(res){
   return res.json();
}

Shorter writing.
*/



.then((data) => {

/*
After JSON is opened,
we finally have actual data.

Example:

{
   "conversion_rates": {
      "USD": 1,
      "JPY": 145.23,
      "EUR": 0.92
   }
}

That entire object is stored in:

data
*/



/*
========================================
STEP 5: GET CORRECT RATE
========================================
*/

const rate = data.conversion_rates[currencySecondEl.value];

/*
Break into pieces.

--------------------------------
data
--------------------------------

Entire API object.

--------------------------------
data.conversion_rates
--------------------------------

Access conversion_rates section:

{
   "USD": 1,
   "JPY": 145.23,
   "EUR": 0.92
}

--------------------------------
currencySecondEl.value
--------------------------------

Second dropdown selected value.

Example:

"JPY"

--------------------------------
data.conversion_rates["JPY"]
--------------------------------

Equivalent to:

145.23

--------------------------------

So:

rate = 145.23

Now we know:

1 USD = 145.23 JPY
*/



/*
========================================
STEP 6: SHOW EXCHANGE RATE TEXT
========================================
*/

exchangeRateEl.innerText =
`1 ${currencyFirstEl.value} = ${rate} ${currencySecondEl.value}`;

/*
innerText means:

"Change visible text inside HTML element."

Example:

<p id="exchange-rate"></p>

becomes:

<p id="exchange-rate">
   1 USD = 145.23 JPY
</p>

--------------------------------

Again:

${ ... }

inserts values.

Example:

currencyFirstEl.value = "USD"
rate = 145.23
currencySecondEl.value = "JPY"

Final text:

1 USD = 145.23 JPY
*/
});


/*
========================================
STEP 7: CALCULATE CONVERTED AMOUNT
========================================
*/

worthSecondEl.value =
(
   worthFirstEl.value *
   exchangeRateEl.innerText.split('=')[1].split(' ')[1]
).toFixed(2);

/*
This line works,
but it is unnecessarily complicated.

Let's decode it.

--------------------------------
worthFirstEl.value
--------------------------------

User input amount.

Example:

5

Meaning:

5 USD

--------------------------------
exchangeRateEl.innerText
--------------------------------

Text currently says:

"1 USD = 145.23 JPY"

--------------------------------
.split('=')
--------------------------------

split cuts string into pieces.

Result:

[
 "1 USD ",
 " 145.23 JPY"
]

--------------------------------
[1]
--------------------------------

Take second piece:

" 145.23 JPY"

--------------------------------
.split(' ')
--------------------------------

Split again by spaces:

[
 "",
 "145.23",
 "JPY"
]

--------------------------------
[1]
--------------------------------

Take:

"145.23"

Now JavaScript has the rate.

--------------------------------
Multiply:
--------------------------------

5 * 145.23

Result:

726.15

--------------------------------
.toFixed(2)
--------------------------------

Round to 2 decimal places.

Example:

726.154789

becomes:

726.15
*/




/*
========================================
END FUNCTION
========================================
*/
}



/*
========================================
STEP 8: LISTEN FOR USER CHANGES
========================================

Event listeners wait for things to happen.

Think:

"Stay alert.
If user changes something,
run updateRate()."
*/


currencyFirstEl.addEventListener('change', updateRate);

/*
Listen for:

change

on first dropdown.

If user changes:

USD -> EUR

Run updateRate()
*/


currencySecondEl.addEventListener('change', updateRate);

/*
Listen for changes
on second dropdown.

Example:

JPY -> GBP

Run updateRate()
*/


worthFirstEl.addEventListener('input', updateRate);

/*
Listen for typing.

"input" means:

Whenever user types,
deletes,
or changes number.

Example:

1
12
123

Every keystroke triggers updateRate().

This makes converter update live.
*/



/*
========================================
IMPORTANT IMPROVEMENT
========================================

You already have:

const rate = ...

Use it directly!

Instead of:

exchangeRateEl.innerText.split(...)

Do:

worthSecondEl.value =
   (worthFirstEl.value * rate).toFixed(2);

Much cleaner.
Much faster.
Much easier to understand.
*/