/*
====================================================
STEP 1: FIND THE HTML ELEMENT
====================================================

JavaScript needs to find the HTML element
where the animated text will appear.

Think of the webpage like a whiteboard.

HTML creates the whiteboard.
JavaScript writes on the whiteboard.

This line finds the whiteboard section.
*/


// "const" creates a variable.
//
// A variable is like a labeled storage box.
//
// Here we are storing a reference to
// an HTML element.
const containerEl = document.querySelector('.container');

/*
document
- Represents the whole webpage.

.querySelector()
- Searches the webpage.

'.container'
- The dot means:
  "Find an element with class='container'"

Example HTML:

<div class="container"></div>

The FIRST matching element gets stored
inside containerEl.
*/



/*
====================================================
STEP 2: CREATE ARRAY OF CAREERS
====================================================

An array is a list.

Think of it like:

A shelf with many boxes.

Each box contains one career.
*/


const careers = [
    'Developer',
    'Designer',
    'Content Creator',
    'Freelancer',
    'Blogger',
    'Youtuber',
    'Influencer',
    'Entrepreneur',
    'Programmer',
    'Software Engineer'
];


/*
Array positions:

careers[0] -> "Developer"
careers[1] -> "Designer"
careers[2] -> "Content Creator"

JavaScript starts counting from 0,
NOT from 1.
*/



/*
====================================================
STEP 3: TRACK CURRENT CAREER
====================================================
*/


// "let" creates a variable whose value
// CAN change later.
let careerIndex = 0;

/*
careerIndex means:

"Which career are we currently typing?"

Initially:

careerIndex = 0

So current career is:

careers[0]

which is:

"Developer"
*/



/*
====================================================
STEP 4: TRACK CURRENT LETTER
====================================================
*/


let characterIndex = 0;

/*
characterIndex means:

"How many letters have been typed so far?"

Example:

Word = "Developer"

characterIndex = 1 -> "D"
characterIndex = 2 -> "De"
characterIndex = 3 -> "Dev"

This creates the typing effect.
*/



/*
====================================================
STEP 5: START THE ANIMATION
====================================================
*/


// Run the function immediately.
updateText();

/*
Without this line:

Nothing would happen.

The page would load
but no text would appear.

This starts the animation.
*/



/*
====================================================
STEP 6: CREATE THE FUNCTION
====================================================

A function is a reusable block of code.

Think of it like a recipe.

Whenever JavaScript calls updateText(),
it follows these instructions.
*/


function updateText(){

    /*
    ====================================================
    STEP 7: MOVE TO NEXT LETTER
    ====================================================
    */


    // ++ means:
    // Add 1
    characterIndex++;

    /*
    Example:

    Before:
    characterIndex = 2

    After:
    characterIndex = 3

    This means:
    "Show one more letter."
    */



    /*
    ====================================================
    STEP 8: WRITE HTML INTO CONTAINER
    ====================================================
    */


    containerEl.innerHTML =
    
    /*
    innerHTML means:

    "Replace everything inside this element."

    Example:

    <div class="container"></div>

    becomes:

    <div class="container">
        <h1>I am a Developer</h1>
    </div>
    */

    `<h1>
    
    I am

    ${
        /*
        ====================================================
        STEP 9: CHOOSE BETWEEN "A" OR "AN"
        ====================================================
        */


        careers[careerIndex].slice(0,1) === 'A' ||

        /*
        careers[careerIndex]
        --------------------
        Gets current career.

        Example:
        "Entrepreneur"

        .slice(0,1)
        --------------------
        Means:

        "Give me first character only"

        Example:

        "Entrepreneur".slice(0,1)

        returns:

        "E"
        */


        careers[careerIndex].slice(0,1) === 'E' ||

        careers[careerIndex].slice(0,1) === 'I' ||

        careers[careerIndex].slice(0,1) === 'O' ||

        careers[careerIndex].slice(0,1) === 'U'

        /*
        || means OR

        So this entire condition asks:

        Is first letter:
        A OR E OR I OR O OR U ?
        */


        ? 'An'

        /*
        If condition is TRUE,
        use "An"
        */

        : 'A'

        /*
        If condition is FALSE,
        use "A"
        */


        /*
        This structure is called
        a ternary operator.

        Syntax:

        condition ? valueIfTrue : valueIfFalse
        */
    }

    ${
        /*
        ====================================================
        STEP 10: TYPE ONLY PART OF WORD
        ====================================================
        */


        careers[careerIndex].slice(0, characterIndex)

        /*
        Example:

        Word = "Developer"

        If:
        characterIndex = 1

        Result:
        "D"

        -------------------

        If:
        characterIndex = 2

        Result:
        "De"

        -------------------

        If:
        characterIndex = 3

        Result:
        "Dev"

        -------------------

        This creates the typing animation.
        */
    }

    </h1>`;



    /*
    ====================================================
    STEP 11: CHECK IF WORD FINISHED
    ====================================================
    */


    if(characterIndex === careers[careerIndex].length){

        /*
        .length gives number of characters.

        Example:

        "Developer".length

        returns:

        9

        So this condition asks:

        "Have we typed the whole word?"
        */


        /*
        ====================================================
        STEP 12: MOVE TO NEXT CAREER
        ====================================================
        */


        // Move to next career.
        careerIndex++;

        /*
        Example:

        0 -> Developer
        1 -> Designer
        2 -> Content Creator
        */


        /*
        ====================================================
        STEP 13: RESET CHARACTER COUNT
        ====================================================
        */


        // Start typing new word from beginning.
        characterIndex = 0;
    }



    /*
    ====================================================
    STEP 14: RESTART CAREERS WHEN FINISHED
    ====================================================
    */


    if(careerIndex === careers.length){

        /*
        careers.length
        gives total number of careers.

        You have 10 careers.

        Their indexes are:

        0 to 9

        If careerIndex becomes 10,
        we passed the last item.
        */


        // Restart from first career.
        careerIndex = 0;
    }



    /*
    ====================================================
    STEP 15: REPEAT THE FUNCTION
    ====================================================
    */


    setTimeout(updateText, 200);

    /*
    setTimeout means:

    "Wait some time,
    then run code."

    --------------------------------

    updateText
    = function to run again

    --------------------------------

    200
    = milliseconds

    1000 milliseconds = 1 second

    So:

    200 milliseconds
    = 0.2 seconds

    --------------------------------

    This means:

    Every 0.2 seconds:

    - add another letter
    - update screen
    - repeat again

    This creates the animation loop.
    */
}



/*
====================================================
FULL PROGRAM FLOW
====================================================

1. Find container in HTML
2. Store careers in array
3. Start at first career
4. Start at first character
5. Run updateText()

updateText():
    - add one character
    - display partial word
    - if word finished:
        move to next career
    - if all careers finished:
        restart from beginning
    - wait 200ms
    - run again

This repeats forever.
====================================================
*/