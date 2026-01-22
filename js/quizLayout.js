
import { handleNextQuestionClick, handleAnswerClick, randomize } from "./quizLogic.js";


//skapa knapp för att navigera till nästa fråga
function createNextQuestionBtn(quiz, currentQuestionIndex) {

    const nextQuestionBtnContainer = document.createElement("div");
    nextQuestionBtnContainer.id = "next-question-btn-container";
    nextQuestionBtnContainer.classList.add("next-question-btn-container");
    const nextQuestionBtn = document.createElement("button");
    nextQuestionBtn.innerText = "Nästa fråga";
    nextQuestionBtn.id = "next-question-btn";
    nextQuestionBtn.classList.add("btn-locked");
    nextQuestionBtn.disabled = true;

    if (currentQuestionIndex === quiz.questions.length -1) {
        nextQuestionBtn.innerText="";
        nextQuestionBtn.innerText = "Se resultat";
        
    }

    nextQuestionBtn.addEventListener("click", () => {
    
    handleNextQuestionClick(quiz, currentQuestionIndex);
});
    nextQuestionBtnContainer.appendChild(nextQuestionBtn);

    return nextQuestionBtnContainer;

}



//skapa container för frågetext och frågetext element
 function createQuestionText(questionText) {
    const questionTextContainer = document.createElement("div");
    questionTextContainer.id = "question-text-container";
    questionTextContainer.classList.add("question-text-container");
    const questionTextElement = document.createElement("h2");
    questionTextElement.innerText = questionText;
    questionTextElement.id = "question-text";

    questionTextContainer.appendChild(questionTextElement);

    return questionTextContainer;
}

//Skapa svarsknappar
function createAnswerButtons(answers) {
    const answersContainer = document.createElement("div");
    answersContainer.id = "answers-container";
    answersContainer.classList.add("answers-container");

    const shuffledAnswers= randomize(answers);
    
    shuffledAnswers.forEach((answer) => {
        
        const answerBtn = document.createElement("button");
        answerBtn.innerText = answer.text;
        answerBtn.classList.add("answer-btn");
        answersContainer.appendChild(answerBtn);
        
           answerBtn.addEventListener("click", () => {
            let btn= document.querySelector("#next-question-btn")
            btn.disabled = false;
            btn.classList.remove("btn-locked");
             handleAnswerClick(answer, answerBtn, answersContainer);
           });   

    }); 

    return answersContainer;
}


    export function displayInfo(currentScore, questionIndex) {
    const scoreContainer = document.createElement("div");
    scoreContainer.id = "score-container";
    scoreContainer.classList.add("score-container");
    const scoreText = document.createElement("h2");
    scoreText.innerText = `Du har ${currentScore} av ${questionIndex} rätt!`;
    scoreText.id = "score-text";
    scoreContainer.appendChild(scoreText);


    document.querySelectorAll("#score-container").forEach(el => el.remove());   

    const container = document.querySelector("#answers-container");
    if (container) {
        container.insertAdjacentElement("afterend", scoreContainer);
    }



   

    return scoreContainer;
}

//Lägger till element i html
export function displayQuestion(quiz, questionIndex, currentScore) {
    const quizContainer = document.querySelector("#quiz-container");
    quizContainer.innerHTML = ""; 
    const questions = quiz.questions; 
    quizContainer.appendChild(createQuestionText(questions[questionIndex].questionText));
    quizContainer.appendChild(createAnswerButtons(questions[questionIndex].answers));
    quizContainer.appendChild(displayInfo(currentScore, questionIndex));
    quizContainer.appendChild(createNextQuestionBtn(quiz, questionIndex));
}





