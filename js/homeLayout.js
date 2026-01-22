import { handleCreateQuestionsClick, handlePlayClick, state, addQuestionToQuiz, handleSaveNewQuizClick } from "./homeLogic.js";
import { getQuizzes } from "./quizData.js";
// First page to show when arriving to the quiz app

//Create page header with title and description
function createHeader() {
    const headerContainer = document.createElement("div"); 
    headerContainer.id  = "header-container";
    headerContainer.classList.add("header-container")
    
    const headerElement = document.createElement("h2"); 
    headerElement.id = "header-text"; 
    headerElement.innerText = "Quiz App by Daniel"; 

    const headerParagraf = document.createElement("p");
    headerParagraf.id = "header-text-small";
    headerParagraf.innerText = "Välkommen till denn quizAppen. Välj ett quiz och spela eller lägg till ett eget quiz.";

    headerContainer.appendChild(headerElement);
    headerContainer.appendChild(headerParagraf);


    return headerContainer;

}

function createQuizBody() {
    const container = document.createElement("div"); 
    container.id = "available-quizzes-container"; 

    const quizzes = getQuizzes(); 

    quizzes.forEach(quiz => {


        const q= quizCard(quiz); 
        container.appendChild(q);
        
    });

    return container; 
}

function quizCard(quiz) {
    const cardContainer = document.createElement("div"); 
    
    cardContainer.classList.add("quiz-card"); 
    
    const image = document.createElement("img"); 
    image.classList.add("quiz-img")
    image.src = quiz.image;
    image.alt ="QuizImage";  

    const quizName = document.createElement("h3"); 
    quizName.innerText = quiz.name; 

    const playButton = document.createElement("button"); 
    
    playButton.classList.add("btn", "btn-primary","button-play"); 
    playButton.innerText ="Play";
    
    playButton.addEventListener("click", () => {
        handlePlayClick(quiz);
    });


    cardContainer.appendChild(image);
    cardContainer.appendChild(quizName);
    cardContainer.appendChild(playButton); 


    


    return cardContainer;


}

function createNewQuizButton() {
    const btnContainer = document.createElement("div");
    btnContainer.id = "new-quiz-button-container"; 

    const newQuizButton = document.createElement("button"); 
    newQuizButton.id = "new-quiz-button"; 
    newQuizButton.classList.add("btn","btn-primary","mb-3"); 
    newQuizButton.innerText = "Skapa nytt quiz"; 

    btnContainer.appendChild(newQuizButton);

    btnContainer.addEventListener("click", () => {
        createNewQuizForm();
    });

    return btnContainer;
}


function createNewQuizForm() {

    document.querySelector("#new-quiz-button").classList.add("btn-locked");

    if(document.querySelector("#create-new-quiz")) return;
    
    // eventuellt skapa en div för att kunna lägga fråge form bredvid 


    const parentContainer = document.querySelector("#quiz-container");
    const newQuizContainer = document.createElement("div"); 
    newQuizContainer.id = "new-quiz-container"; 

    const formElement = document.createElement("form");
    formElement.id = "create-new-quiz"; 

    const formContainer = document.createElement("div");
    formContainer.classList.add("mb-3", "form-container");

    const quizNameLabel = document.createElement("label"); 
    quizNameLabel.innerText ="Namn på quiz";
    quizNameLabel.classList.add("form-label","m-2");
    
    const quizNameInput = document.createElement("input"); 
    quizNameInput.type = "text";
    quizNameInput.id = "new-quiz-name"
    quizNameInput.classList.add("form-control","m-2");



    const quizImageLabel = document.createElement("label"); 
    quizImageLabel.innerText ="Bildlänk";
    quizImageLabel.classList.add("form-label","m-2");
    
    
    const quizImageInput = document.createElement("input"); 
    quizImageInput.id= "new-quiz-image";
    quizImageInput.type = "text";
    quizImageInput.classList.add("form-control","m-2");
    quizImageInput.placeholder = "Lämna tomt för placeholderbild"; 


    const buttonContainer = document.createElement("div");
    buttonContainer.classList.add("buttons-container");

    const continueButton = document.createElement("button"); 
    continueButton.classList.add("btn", "btn-primary", "m-2");
    continueButton.type ="button";

    continueButton.innerText = "Skapa frågor"; 
    continueButton.addEventListener("click", ()=> {

        state.newQuiz = handleCreateQuestionsClick(); //returnerar nytt quiz
        displayNewQuizInfo(state.newQuiz);
        createNewQuestion(); //Öppnar skapa fråge container 
         
    });

const cancelButton = document.createElement("button"); 
    cancelButton.classList.add("btn", "btn-primary", "m-2");
    cancelButton.innerText = "Avbryt";
    cancelButton.addEventListener("click", ()=> {
        displayHomePage();
    });

   buttonContainer.appendChild(continueButton);
   buttonContainer.appendChild(cancelButton);

    formContainer.appendChild(quizNameLabel);
    formContainer.appendChild(quizNameInput);
    
    formContainer.appendChild(quizImageLabel);
    formContainer.appendChild(quizImageInput);
    formContainer.appendChild(buttonContainer);

    formElement.appendChild(formContainer); 

    newQuizContainer.appendChild(formElement);

    parentContainer.insertAdjacentElement("afterend", newQuizContainer); 


}

function createNewQuestion (){

   // document.querySelector("#new-quiz-container").innerHTML ="";
    
    
    if(document.querySelector("#new-question-form")) {
        document.querySelector("#new-question-form").innerHTML= ""; 
    } 
    const newQuestionForm = document.createElement("form");
    newQuestionForm.id = "new-question-form"; 

    const questionContainer = document.createElement("div"); 

    const questionTextLabel = document.createElement("label"); 
    questionTextLabel.classList.add("form-label"); 
    questionTextLabel.innerText ="Frågetext";

    const questionTextInput = document.createElement("input"); 
    questionTextInput.type ="text";
    questionTextInput.id = "new-question-text";
    questionTextInput.classList.add("form-control","mb-3");

    const answerContainer = document.createElement("div");

    for (let i =1; i <= 4; i++){

        const answerDiv =document.createElement("div");
        const answerTextLabel = document.createElement("label");
        answerTextLabel.innerText = `Alternativ ${i}`; 
        answerTextLabel.classList.add("form-label");  

        const answerTextInput = document.createElement("input");
        answerTextInput.classList.add("form-control"); 
        answerTextInput.id = `answer-${i}-text`;

        const isCorrectLabel = document.createElement("label");
        isCorrectLabel.innerText ="Rätt svar"; 
        isCorrectLabel.classList.add("form-label"); 

        const isCorrectCheckbox = document.createElement("input");
        isCorrectCheckbox.type = "checkbox"; 
        isCorrectCheckbox.id = `answer-${i}-check`;
        isCorrectCheckbox.classList.add("m-2");
        
        
        answerDiv.appendChild(answerTextLabel);
        answerDiv.appendChild(answerTextInput);

        answerDiv.appendChild(isCorrectLabel);
        answerDiv.appendChild(isCorrectCheckbox);
        
        answerContainer.appendChild(answerDiv);
    }

    
    

    const nextButton = document.createElement("button");
    nextButton.type ="button";
    nextButton.innerText = "Spara fråga till Quiz";
    nextButton.classList.add("btn","btn-primary", "btn-sm"); 

    nextButton.addEventListener("click", ()=>  {
        addQuestionToQuiz(state.newQuiz);
       var numQuestions = document.querySelector("#number-of-question-text");
       numQuestions.innerText = state.newQuiz.questions.length;
    });
    

    
    questionContainer.appendChild(questionTextLabel);
    questionContainer.appendChild(questionTextInput);
    questionContainer.appendChild(answerContainer);
    questionContainer.appendChild(nextButton);
    newQuestionForm.appendChild(questionContainer);


    const newQuizContainer = document.querySelector("#new-quiz-container");

    newQuizContainer.insertAdjacentElement("beforeend", newQuestionForm); 

}

function displayNewQuizInfo (quiz) {

    const newQuizContainer = document.querySelector("#new-quiz-container"); 
    newQuizContainer.innerHTML="";


    const quizName = quiz.name; 
    const quizImg = quiz.image; 
    const quizNumberOfQuestions = quiz.questions.length; 

    const infoContainer = document.createElement("div");
    
    infoContainer.classList.add("quiz-card--info"); 

    const quizNameHeader = document.createElement("h3");
    quizNameHeader.innerText = quizName;

    const quizImageElement = document.createElement("img"); 
    quizImageElement.src = quizImg || "../images/quizimgPlaceholder.png";
    quizImageElement.alt = "quizbild"; 
    quizImageElement.classList.add("quiz-img");
    quizImageElement.id= "new-quiz-image";

    const saveNewQuizButton = document.createElement("button"); 
    saveNewQuizButton.innerText= "Spara quiz";
    saveNewQuizButton.classList.add("btn","btn-primary");

    saveNewQuizButton.addEventListener("click", ()=> {
        console.log("klickad")
        handleSaveNewQuizClick();
        const newQuizContainer = document.querySelector("#new-quiz-container"); 
        newQuizContainer.innerHTML="";
        displayHomePage();
    });

    const textElement= document.createElement("h4"); 
    textElement.innerText ="Antal frågor: "; 

    const paragraf = document.createElement("p"); 
    paragraf.id ="number-of-question-text";
    paragraf. innerText = quizNumberOfQuestions;


    infoContainer.appendChild(quizNameHeader);
    infoContainer.appendChild(quizImageElement);
    infoContainer.appendChild(saveNewQuizButton);
    infoContainer.appendChild(textElement);
    infoContainer.appendChild(paragraf);

    newQuizContainer.appendChild(infoContainer);
    


}

export function displayHomePage() {
    
    const container = document.querySelector("#quiz-container"); 
    container.innerHTML=""; 
    container.appendChild(createHeader()); 
    container.appendChild(createQuizBody());
    container.appendChild(createNewQuizButton());
    
}



