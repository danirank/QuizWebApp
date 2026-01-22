
import { intitHomePage } from "./home.js";
import { initQuizzes } from "./quizData.js";
import { initResultPage } from "./result.js";

export function initApp()  {
    console.log("App initialized");
    initQuizzes();
    intitHomePage();
    //initQuizPage();
    //initResultPage(); 
}

document.addEventListener("DOMContentLoaded", initApp);

//Appens entry point 
//Ska initiera en startsida med knapp för att starta quizzen