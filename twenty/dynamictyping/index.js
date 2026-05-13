const containerEl = document.querySelector('.container');

const careers = ['Developer', 'Designer', 'Content Creator', 'Freelancer', 'Blogger','Youtuber', 'Influencer', 'Entrepreneur', 'Programmer', 'Software Engineer'];

let careerIndex = 0;
let characterIndex = 0;

updateText();
function updateText(){
    characterIndex++;
    containerEl.innerHTML = `<h1>I am ${careers[careerIndex].slice(0,1) === 'A' || careers[careerIndex].slice(0,1) === 'E' || careers[careerIndex].slice(0,1) === 'I' || careers[careerIndex].slice(0,1) === 'O' || careers[careerIndex].slice(0,1) === 'U' ? 'An' : 'A'} ${careers[careerIndex].slice(0,characterIndex)}</h1>`;
    
    if(characterIndex === careers[careerIndex].length){
        careerIndex++;
        characterIndex = 0;
    }
    if(careerIndex === careers.length){
        careerIndex = 0;
    }
    setTimeout(updateText, 200);
}
