var javaquiz = [
    {fraga: "Behandla och lagra information?",
    correct: 1,
    options: [ "Dela och lagra information ", "Spara och lagra information"]},
    
    {fraga: "Vad är en global variabel?",
    correct: 2,
    options: ["Variabel definerad inne i en metod", "Variabel definierad utanför en metod & som är tillgänglig igenom hela programmet","Inget av ovanstående"]},
    
    {fraga: "Vad är det för speciellt med main metoden?",
    correct: 2,
    options: ["Anropas bara på Linux datorer", "Det är där programkörningen startar ","Anropas endast när man kör från IntelliJ"]},

    {fraga: "Vad står JIT-kompilering för?",
        correct: 3,
        options: ["Java-Interpreter-Transpiling kompilering", "Java-Intermediate-Type kompilering","Just-In-Time kompilering"]},

    {fraga: "Vad är skillnaden på int och Integer?",
        correct: 1,
        options: ["int är en klass medans Integer är en primitiv typ", "Det är ingen skillnad ","Integer är en klass medans int är en primitiv typ"]},

    {fraga: "Vad gör en javakompilator?",
        correct: 1,
        options: ["Översätter Javakod till plattformsoberoende bytekod", "Översätter Javakod till JavaScript som sedan körs via Java runtime","Svartmagi tillämpas"]},
];

var databasequiz = [
    {fraga: "Vad SQL står för?",
        correct: 1,
        options: [ "Structured Query Language", "Structured Quality Language","Strategy Query Language"]},

    {fraga: "Vilken SQL-sats används för att extrahera data från en databas?",
        correct: 1,
        options: ["EXTRACT", "OPEN","DROP", "GETIT"]},

    {fraga: "Vilken SQL-sats används för att uppdatera data i en databas?",
        correct: 3,
        options: ["MODIFY", "SAVE","UPDATE"]},

    {fraga: "Med SQL, hur du väljer alla poster från en tabell med namnet PERSSON där 'förnamn' är PETER och 'Efternamn' är JACKSON?",
        correct: 2,
        options: ["SELECT * FROM Persons WHERE FirstName='Peter' AND LastName='Jackson", "SELECT * FROM Persons WHERE FirstName<>'Peter' AND LastName<>'Jackson'","SELECT FirstName='Peter', LastName='Jackson' FROM Persons"]},

    {fraga: "Vad används DISTINCT till?",
        correct: 2,
        options: ["Använda unik SQL-kod", "Få ut unika rader","Få ut unika kolumner"]},

    {fraga: "Vilken WHERE sats skulle du använda för att välja alla rader i en tabell där priskolumnen saknar värden?",
        correct: 3,
        options: ["WHEER Price IS NOT NULL", "WHERE Price != 0","WHERE Price IS NULL"]},

    {fraga: "Vilket värde får INTE finnas i en kolumn som är en Primary key?",
        correct: 1,
        options: ["NULL", "0","Ingen av dem"]},

    {fraga: "Vad måste varje databas innehålla?",
        correct: 1,
        options: ["Tabellreferenser", "Serverreferenser","Databasreferenser"]}
];

var javascriptquiz = [
    {fraga: "Arrays är helt enkelt objekt där nycklarna heter 0, 1, 2, ...?",
        correct: 1,
        options: [ "Japp, och dessutom har arrays lite specifika metoder och annat.", "Japp! Inga övriga skillnader!","Nej!"]},

    {fraga: "Kan du använda JavaScript för att göra onlinesystem available offline?",
        correct: 2,
        options: ["Nej", "Ja","Kanske"]},

    {fraga: "Vad kan man INTE göra med Javascript?",
        correct: 2,
        options: ["JavaScript fungerar på webben användarnas datorer - även när de är offline!", "JavaScript kan inte skriva till filer på servern utan hjälp av en server side script","JavaScript kan hjälpa problem fix webbläsare eller patch hål i webbläsare stöd"]},

    {fraga: "Vad heter den absolut senaste versionen av Javascript?",
        correct: 3,
        options: ["1.9", "1.7","1.8"]},

    {fraga: "Javascript är ett scriptspråk som är baserat på programspråket Java. Stämmer detta?",
        correct: 2,
        options: ["Ja", "Nej","Kanske"]},

    {fraga: "Vad används måsvingar till i JavaScript?",
        correct: 2,
        options: ["Kommentarer", "Objekt, kodblock","Listor"]},

    {fraga: "Varför har vi ofta ett byggsteg i JavaScript?",
        correct: 3,
        options: ["Det har vi inte, det är ju ett scriptspråk", "För att enklarare kunna förstå vilka metoder som hänger ihop","För att kunna göra ytterligare transformationer som tex uglifying och transpiling"]},

    {fraga: "Det finns inga typer i JavaScript!",
        correct: 2,
        options: ["Jo, det fungerar som i Java", "Jo, JavaScript castar själv om dynamiskt när det behövs ","Stämmer, inga typer!"]},
];

var githubquiz = [
    {fraga: "När du redigerar ett annat projekt i GitHub, bör en programmerare göra följande?",
        correct: 2,
        options: [ "Createa en fork och 'brancha' den", "Redigera baskoden","Gör en ny kopia och lägga till en länk i huvudkoden"]},

    {fraga: "GitHub supportar en textredigerare som heter _____?",
        correct: 2,
        options: [ "ANTOM", "ATOM","AROMO"]},

    {fraga: "Om du vill lägga till din kod branch till huvudprojektet, du skicka en _____ till GitHub",
        correct: 1,
        options: [ "Pull request", "Push request","Fork request"]},

    {fraga: "Github är ett webbhotell för mjukvaruutvecklingsprojekt",
        correct: 2,
        options: [ "Sant", "Falskt","Ibland"]},

    {fraga: "git checkout -b branchname",
        correct: 1,
        options: [ "Skapa en ny branch och byta till det", "Få ut unika rader ","Få ut unika kolumner"]},

    {fraga: "Vad är skillnaden på github och git?",
        correct: 2,
        options: [ "Det är samma sak.", "Git är ett verktyg för att hantera källkod","Git är commandotolken"]},

    {fraga: "Bör man använda git -force kommandot?",
        correct: 2,
        options: [ "Ja", "Nej","Det finns inget kommando som heter så"]},

    {fraga: "Skaparen bakom Git heter:",
        correct: 2,
        options: [ "John Richard", "Linus Torvalds","Rudolf Venice"]},
];

var htmlcssquiz = [
    {fraga: "Vilka tre olika saker kan man berätta om ett element i HTML?",
        correct: 3,
        options: [ "Innehåll, utseende, egenskaper", "Attribut, värden och taggar","Typ, attribut och barn "]},

    {fraga: "Fixar man teckensnitt i HTML eller CSS?",
        correct: 2,
        options: [ "HTML", "CSS","INGEN AV dem"]},

    {fraga: "Vad står CSS för?",
        correct: 3,
        options: [ "Creative Style Sheet", "Cascading Style Sheet","Circular Style Sheet"]},

    {fraga: "I HTML filen har vi skrivit en tag med en Class=hej i, vad bör det stå i Stylesheeten?",
        correct: 2,
        options: [ "#hej", ".hej","hej"]},

    {fraga: "Vilket av följande väljare matchar en del baserat på dess id?",
        correct: 1,
        options: [ "The Id Selector", "The Universal Selector","The Class Selector"]},

    {fraga: "Vilket av följande fastighet byter färg på top border?",
        correct: 2,
        options: [ "border-left-color", "border-top-color","border-right-color"]},

    {fraga: "Vad är META tags användbara för?",
        correct: 1,
        options: [ "Att lagra information vanligen relevant för webbläsare och sökmotorer.", "Om du bara vill lagra information om sökmotorer","För att lagra information om externa länkar"]},

    {fraga: "Vad är skillnaden mellan XML och HTML?",
        correct: 1,
        options: [ "XML används för utbyte av data, är inte HTML", "HTML kan ha användardefinierade taggar, XML kan inte","Båda dem överstående"]},
];

var angulajsquiz = [
    {fraga: "AngularJS direktiven används i ________.",
        correct: 3,
        options: [ "Model", "View","Controller"]},

    {fraga: "Är AngularJS lämplig att använda i små appar?",
        correct: 1,
        options: [ "Om vi redan kan AngularJS så tjänar vi på det, annars är det bättre att lösa det utan.", "Vi tjänar alltid på att använda ett ramverk.","Nej, komplexiteten blir inte befogad."]},

    {fraga: "Vad är ett direktiv i AngularJS?",
        correct: 2,
        options: [ "inparametrar till våra controllers", "HTML-attribut som har speciell betydelse i en AngularJS-app","metoderna som finns i en AngularJS-modul"]},

    {fraga: "Det är nästan alltid smidigare att använda dubbla måsvingar istället för `ng-bind`",
        correct: 1,
        options: [ "Ja", "Nej","Helmärklig fråga, det är två helt olika saker"]},

    {fraga: "Med AngularJS kan du utöka HTML ordförråd för din ansökan",
        correct: 1,
        options: [ "SANT", "FALSKT","Beror på"]},

    {fraga: "DSL står för",
        correct: 2,
        options: [ "Dynamic Style Library", "Domain Specific Language ","D*ick sucking lips"]},

  ];