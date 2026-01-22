import { displayQuestion, displayInfo } from "./quizLayout.js";
import { initResultPage } from "./result.js";



const state = { 
    currentScore: 0,
    currentQuestionIndex: 0,
    
 };

function updateScore(answer) {
    if (answer.isCorrect) {
        state.currentScore += 1;
    }
    return state.currentScore;
}



export function randomize(array){

    let shuffled= [...array]; 

    for (let oldIndex = shuffled.length-1; oldIndex> 0; oldIndex--) {
        const newIndex = Math.floor(Math.random()*(oldIndex+1));

        [shuffled[oldIndex], shuffled[newIndex]] = [shuffled[newIndex], shuffled[oldIndex]] 
    }

    return shuffled;

}

//Nästa fråga
 const nextQuestion = (quiz) => {
    if (state.currentQuestionIndex + 1 < quiz.questions.length) {
        return state.currentQuestionIndex + 1;
    } else {
        return -1; // Indikerar att quizzen är slut
    }
}

//Avsluta quizzen och visa resultat
export const endQuiz = () => {
    state.currentScore = 0;
    state.currentQuestionIndex = 0; 
    return;
}


//Handle next question click addera score och gå till nästa fråga
export function handleNextQuestionClick(quiz) {

    
    state.currentQuestionIndex = nextQuestion(quiz);

    if (state.currentQuestionIndex === -1) {
         
        initResultPage(quiz, state.currentScore);
        endQuiz();
        return; //ska returnera till resultatsidan    
    }

    displayQuestion(quiz, state.currentQuestionIndex, state.currentScore)
    console.log(`Gick till fråga index: ${state.currentQuestionIndex}`);
}

export function handleAnswerClick(answer, answerBtn, answersContainer) 
{
    
    
    if (answerBtn.disabled) {
        return; 
    }

    answersContainer = document.querySelector("#answers-container");
    const allAnswerButtons = answersContainer.querySelectorAll(".answer-btn");

    state.currentScore = updateScore(answer, state.currentScore);
    console.log(`Poäng uppdaterad: ${state.currentScore}`);
    displayInfo(state.currentScore, state.currentQuestionIndex +1);
    
    if (answer.isCorrect) {
        answerBtn.classList.add("answer-correct");
    } else {
        answerBtn.classList.add("answer-incorrect");
    }
    
    
    allAnswerButtons.forEach(btn => btn.disabled = true);
    return ;
}