import { initQuizPage } from "./quiz.js";
import { getQuizzes, saveQuizzes } from "./quizData.js";

export const state = {
    newQuiz: null 
}
export function handlePlayClick(quiz) {

    initQuizPage(quiz);
    
}


export function handleCreateQuestionsClick() {
    const quizName = document.querySelector("#new-quiz-name").value;
    const quizImage = document.querySelector("#new-quiz-image").value;

    let newQuiz = {
        name: quizName,
        questions: [], 
        image: quizImage
    }

    return newQuiz; 
}

export function saveNewQuestion() {

    
    const questionText = document.querySelector("#new-question-text").value;
    const answer1Text = document.querySelector("#answer-1-text").value; 
    const answer2Text = document.querySelector("#answer-2-text").value; 
    const answer3Text = document.querySelector("#answer-3-text").value; 
    const answer4Text = document.querySelector("#answer-4-text").value;
    
    
    const answer1IsCorrect = document.querySelector("#answer-1-check").checked;
    const answer2IsCorrect = document.querySelector("#answer-2-check").checked;
    const answer3IsCorrect = document.querySelector("#answer-3-check").checked;
    const answer4IsCorrect = document.querySelector("#answer-4-check").checked;

    const question = 
        {
            questionText: questionText,
            answers: [
                {
                    text: answer1Text,
                    isCorrect: answer1IsCorrect
                },
                {
                    text: answer2Text,
                    isCorrect: answer2IsCorrect
                },
                {
                    text: answer3Text,
                    isCorrect: answer3IsCorrect
                },
                {
                    text: answer4Text,
                    isCorrect: answer4IsCorrect
                }

            ]
        }

        document.querySelector("#new-question-form").reset();

        return question; 
    
}

export function handleSaveNewQuizClick() 
{
    state.newQuiz.image = document.querySelector("#new-quiz-image").src;

    let quizzes = getQuizzes();

    console.log(quizzes.length);

    quizzes.push(state.newQuiz);

    saveQuizzes(quizzes);
  
    quizzes = getQuizzes();

    console.log(quizzes.length);


}

export function addQuestionToQuiz(quiz) {

    const question = saveNewQuestion();
    quiz.questions.push(question);
}