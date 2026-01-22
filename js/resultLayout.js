import { intitHomePage } from "./home.js";
import { initQuizPage } from "./quiz.js";

function createResultPage(quiz, currentScore) {
    const totalQuestions = quiz.questions.length; 

    const resultContainer = document.createElement("div"); 
    resultContainer.id = "result-container"; 

    const resultHeader = document.createElement("h2"); 
    resultHeader.innerText ="Resultat"; 

    const resultMessage = document.createElement("p"); 
    resultMessage.id = "result-message"; 
    resultMessage.innerText =`Quiz avslutad, Du fick ${currentScore} av ${totalQuestions} rätt!`;

    const buttonsContainer = document.createElement("div");
    buttonsContainer.id  = "buttons-container";
    buttonsContainer.classList.add("buttons-container");

    const backToHomeBtn = document.createElement("button"); 
    backToHomeBtn.classList.add("btn", "btn-primary", "m-3");
    backToHomeBtn.innerText = "Til startsida";

    backToHomeBtn.addEventListener("click", () => {
        intitHomePage(); 
    });
    
    const playAgainBtn = document.createElement("button"); 
    playAgainBtn.classList.add("btn", "btn-primary","m-3");
    playAgainBtn.innerText = "Gör om Quiz"; 

    playAgainBtn.addEventListener("click", () => {

        initQuizPage(quiz); 
    });

    buttonsContainer.appendChild(backToHomeBtn);
    buttonsContainer.appendChild(playAgainBtn);


    resultContainer.appendChild(resultHeader);
    resultContainer.appendChild(resultMessage);
    resultContainer.appendChild(buttonsContainer);

    return resultContainer;
}


export function displayResultPage(quiz, currentScore) {

    const container = document.querySelector("#quiz-container");
    container.innerHTML =""; 

    container.appendChild(createResultPage(quiz, currentScore));

    

}