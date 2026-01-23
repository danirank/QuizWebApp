
const defaultQuizzes = [
{
    name: "JavaScript Quiz",
    image :"../images/javascriptLogo.webp",
    questions: [
        {
    questionText: "Hur deklarerar man en variabel i JavaScript?",
    answers: [
        { text: "int", isCorrect: false },
        { text: "string", isCorrect: false },
        { text: "variable", isCorrect: false },
        { text: "var, let eller const", isCorrect: true }
    ]
},
{
    questionText: "Vilket värde har uttrycket typeof null?",
    answers: [
        { text: "null", isCorrect: false },
        { text: "object", isCorrect: true },
        { text: "undefined", isCorrect: false },
        { text: "number", isCorrect: false }
    ]
},
{
    questionText: "Vad gör Array.map()?",
    answers: [
        { text: "Skapar en ny array baserad på varje element", isCorrect: true },
        { text: "Filtrerar bort element", isCorrect: false },
        { text: "Sorterar arrayen", isCorrect: false },
        { text: "Tar bort sista elementet", isCorrect: false }
    ]
},
{
    questionText: "Vad returnerar document.querySelector()?",
    answers: [
        { text: "Det första matchande elementet", isCorrect: true },
        { text: "Alla matchande element", isCorrect: false },
        { text: "En array", isCorrect: false },
        { text: "En textsträng", isCorrect: false }
    ]
},
{
    questionText: "Vad betyder === i JavaScript?",
    answers: [
        { text: "Jämför bara värde", isCorrect: false },
        { text: "Tilldelning", isCorrect: false },
        { text: "Negation", isCorrect: false },
        { text: "Jämför både värde och datatyp", isCorrect: true }
    ]
},
{
    questionText: "Vilket av följande är ett falsy värde?",
    answers: [
        { text: "[]", isCorrect: false },
        { text: "0", isCorrect: true },
        { text: "{}", isCorrect: false },
        { text: "'false'", isCorrect: false }
    ]
},
{
    questionText: "Vad gör addEventListener()?",
    answers: [
        { text: "Kör kod automatiskt", isCorrect: false },
        { text: "Skapar ett nytt element", isCorrect: false },
        { text: "Lyssnar på händelser som klick eller tangenttryck", isCorrect: true },
        { text: "Tar bort ett element", isCorrect: false }
    ]
},
{
    questionText: "Vad händer om man försöker läsa en variabel som inte finns?",
    answers: [
        { text: "Programmet kraschar direkt", isCorrect: false },
        { text: "Man får undefined", isCorrect: true },
        { text: "Man får null", isCorrect: false },
        { text: "Variabeln skapas automatiskt", isCorrect: false }
    ]
}

    ]
},

{
    name: "ASP.NET Quiz",
    image: "../images/aspnet.jpg",
    questions: [
        {
            questionText: "Vad är ASP.NET?",
            answers: [
                { text: "Ett JavaScript-bibliotek för UI", isCorrect: false },
                { text: "Ett ramverk för att bygga webbappar i .NET", isCorrect: true },
                { text: "En databas", isCorrect: false },
                { text: "Ett operativsystem", isCorrect: false }
            ]
        },
        {
            questionText: "Vilken fil innehåller vanligtvis appens konfiguration (t.ex. connection strings)?",
            answers: [
                { text: "package.json", isCorrect: false },
                { text: "web.config (alltid i .NET 8)", isCorrect: false },
                { text: "appsettings.json", isCorrect: true },
                { text: "docker-compose.yml", isCorrect: false }
            ]
        },
        {
            questionText: "Vad gör middleware i ASP.NET Core?",
            answers: [
                { text: "Skapar databastabeller automatiskt utan kod", isCorrect: false },
                { text: "Bygger upp request/response-pipelinen", isCorrect: true },
                { text: "Kompilerar C# till JavaScript", isCorrect: false },
                { text: "Hantera endast UI-komponenter", isCorrect: false }
            ]
        },
        {
            questionText: "Vad är syftet med Dependency Injection (DI) i ASP.NET Core?",
            answers: [
                { text: "Att hantera beroenden och livslängd för tjänster", isCorrect: true },
                { text: "Att göra CSS-responsiv automatiskt", isCorrect: false },
                { text: "Att lagra data i localStorage", isCorrect: false },
                { text: "Att kryptera alla HTTP-anrop", isCorrect: false }
            ]
        },
        {
            questionText: "Vilken DI-livstid skapar en ny instans per HTTP-request?",
            answers: [
                { text: "Singleton", isCorrect: false },
                { text: "Transient", isCorrect: false },
                { text: "Scoped", isCorrect: true },
                { text: "Static", isCorrect: false }
            ]
        },
        {
            questionText: "Vilken metod används oftast för att registrera controllers i ett Web API?",
            answers: [
                { text: "builder.Services.AddPages()", isCorrect: false },
                { text: "app.UseControllers()", isCorrect: false },
                { text: "app.MapPages()", isCorrect: false },
                { text: "builder.Services.AddControllers()", isCorrect: true }
            ]
        },
        {
            questionText: "Vad gör app.MapControllers() (i ett API-projekt)?",
            answers: [
                { text: "Startar databasmigreringar", isCorrect: false },
                { text: "Mappar controller-routes till endpoints", isCorrect: true },
                { text: "Skapar nya controllers vid runtime", isCorrect: false },
                { text: "Lägger till CORS-policy automatiskt", isCorrect: false }
            ]
        },
        {
            questionText: "Vilken HTTP-metod används typiskt för att hämta data (read) från ett API?",
            answers: [
                { text: "POST", isCorrect: false },
                { text: "PUT", isCorrect: false },
                { text: "GET", isCorrect: true },
                { text: "DELETE", isCorrect: false }
            ]
        },
        {
            questionText: "Vad är CORS?",
            answers: [
                { text: "En databasmodell i EF Core", isCorrect: false },
                { text: "Regler som styr vilka origins som får anropa ditt API", isCorrect: true },
                { text: "En typ av JSON-format", isCorrect: false },
                { text: "En cache-mekanism i webbläsaren", isCorrect: false }
            ]
        },
        {
            questionText: "Vad betyder 'Model Binding' i ASP.NET Core?",
            answers: [
                { text: "Att man binder CSS till HTML", isCorrect: false },
                { text: "Att man kopplar ihop två databaser", isCorrect: false },
                { text: "Att data från request (body/route/query) binds till C#-parametrar/modeller", isCorrect: true },
                { text: "Att man kör build automatiskt vid varje request", isCorrect: false }
            ]
        }
    ]
}



];

const STORAGE_KEY = "quizzes";

export function initQuizzes() {
    let quizzes = getQuizzes();
    
    if (quizzes.length == 0) {
        saveQuizzes(defaultQuizzes);
        console.log("Default Quizzes initialized in localStorage");
    } else {
        console.log("Quizzes already present in localStorage");
    }

   quizzes =  getQuizzes();
}



export function getQuizzes() {
    return JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];
}

export function saveQuizzes(quizzes) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(quizzes));
}

