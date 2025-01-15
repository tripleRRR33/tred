const quiz1Questions = [
    { question: "Quel est le plus petit pays du monde en termes de superficie ?", answers: ["Monaco", "Vatican", "Malte", "Saint-Marin"], correct: 1 },
    { question: "Quel animal a donné son nom à une position de yoga ?", answers: ["Le chat", "Le chien", "Le cobra", "L’éléphant"], correct: 1 },
    { question: "Quel fruit peut flotter sur l’eau à cause de sa structure interne ?", answers: ["Pomme", "Noix de coco", "Pastèque", "Citron"], correct: 2 },
    { question: "Dans quelle ville peut-on trouver la Tour Penchée ?", answers: ["Florence", "Pise", "Rome", "Venise"], correct: 1 },
    { question: "Quel est le prénom du célèbre détective Sherlock Holmes ?", answers: ["John", "Edward", "Sherlock", "Henry"], correct: 2 },
    { question: "Quelle planète est connue comme la 'planète rouge' ?", answers: ["Mars", "Vénus", "Jupiter", "Saturne"], correct: 0 },
    { question: "Quel est le plus long fleuve du monde ?", answers: ["L’Amazone", "Le Nil", "Le Mississippi", "Le Yangtsé"], correct: 1 },
    { question: "Quel fromage est célèbre pour ses trous ?", answers: ["Gouda", "Roquefort", "Emmental", "Camembert"], correct: 2 },
    { question: "Quel animal est l'emblème national de l'Australie ?", answers: ["Kangourou", "Koala", "Émeu", "Dingo"], correct: 0 },
    { question: "Dans quelle ville peut-on voir le célèbre 'Big Ben' ?", answers: ["Paris", "New York", "Londres", "Berlin"], correct: 2 },
    { question: "Quel est le plus petit pays du monde ?", answers: ["Monaco", "Malte", "Vatican", "Liechtenstein"], correct: 2 },
    { question: "Qui a écrit 'Roméo et Juliette' ?", answers: ["Victor Hugo", "Shakespeare", "Molière", "Tolstoï"], correct: 1 },
    { question: "Quelle planète est surnommée la planète rouge ?", answers: ["Jupiter", "Mars", "Vénus", "Mercure"], correct: 1 },
    { question: "En quelle année l'homme a-t-il marché sur la Lune ?", answers: ["1969", "1972", "1965", "1959"], correct: 0 },
    { question: "Quel animal est connu pour son long cou ?", answers: ["Chameau", "Girafe", "Autruche", "Émeu"], correct: 1 },
    { question: "Quel est le symbole chimique de l'or ?", answers: ["Ag", "Au", "Go", "Gd"], correct: 1 },
    { question: "Quelle est la capitale de l'Allemagne ?", answers: ["Munich", "Francfort", "Berlin", "Hambourg"], correct: 2 },
    { question: "Quel est l'animal national de l'Australie ?", answers: ["Émeu", "Koala", "Kangourou", "Wombat"], correct: 2 },
    { question: "Combien y a-t-il de continents sur Terre ?", answers: ["5", "6", "7", "8"], correct: 2 },
    { question: "Quel est l'instrument principal utilisé pour mesurer la température ?", answers: ["Thermomètre", "Baromètre", "Altimètre", "Chronomètre"], correct: 0 }
];

const quiz2Questions = [
    { question: "Quel est le pays d'origine de la pizza ?", answers: ["Espagne", "Italie", "Grèce", "France"], correct: 1 },
    { question: "Qui a peint la Joconde ?", answers: ["Vincent van Gogh", "Claude Monet", "Léonard de Vinci", "Pablo Picasso"], correct: 2 },
    { question: "Quel est le plus grand océan du monde ?", answers: ["Atlantique", "Pacifique", "Indien", "Arctique"], correct: 1 },
    { question: "Quelle est la capitale de l'Australie ?", answers: ["Sydney", "Melbourne", "Canberra", "Perth"], correct: 2 },
    { question: "Quel métal est extrait de la bauxite ?", answers: ["Fer", "Cuivre", "Aluminium", "Plomb"], correct: 2 },
    { question: "Quel sport est associé à Wimbledon ?", answers: ["Golf", "Tennis", "Cricket", "Rugby"], correct: 1 },
    { question: "Dans quel pays se trouve le Machu Picchu ?", answers: ["Bolivie", "Chili", "Équateur", "Pérou"], correct: 3 },
    { question: "Quel est le symbole chimique du fer ?", answers: ["Fe", "Ir", "Fr", "Fi"], correct: 0 },
    { question: "Quel est l'élément principal dans le verre ?", answers: ["Argile", "Sable", "Calcaire", "Eau"], correct: 1 },
    { question: "Dans quel pays peut-on visiter les Pyramides de Gizeh ?", answers: ["Maroc", "Tunisie", "Égypte", "Arabie Saoudite"], correct: 2 },
    { question: "Quelle est la mer la plus salée au monde ?", answers: ["Mer Morte", "Mer Rouge", "Méditerranée", "Mer Caspienne"], correct: 0 },
    { question: "Dans quelle ville se trouve le Colisée ?", answers: ["Venise", "Rome", "Milan", "Naples"], correct: 1 },
    { question: "Quel gaz forme la majeure partie de l'atmosphère terrestre ?", answers: ["Oxygène", "Azote", "Dioxyde de carbone", "Hydrogène"], correct: 1 },
    { question: "Qui a écrit 'L'Odyssée' ?", answers: ["Homère", "Socrate", "Virgile", "Platon"], correct: 0 },
    { question: "Combien de côtés a un hexagone ?", answers: ["6", "7", "8", "5"], correct: 0 },
    { question: "Quel est le sport le plus populaire au monde ?", answers: ["Basketball", "Cricket", "Football", "Rugby"], correct: 2 },
    { question: "Quelle est la capitale de la Russie ?", answers: ["Saint-Pétersbourg", "Moscou", "Kiev", "Vladivostok"], correct: 1 },
    { question: "Quel est l'élément chimique numéro 1 sur le tableau périodique ?", answers: ["Hélium", "Hydrogène", "Lithium", "Carbone"], correct: 1 },
    { question: "Quel est l'océan le plus petit ?", answers: ["Atlantique", "Arctique", "Indien", "Pacifique"], correct: 1 },
    { question: "Quel artiste est connu pour avoir coupé une partie de son oreille ?", answers: ["Van Gogh", "Picasso", "Monet", "Rembrandt"], correct: 0 }
];

const quiz3Questions = [
    { question: "Quel est le plus haut sommet du monde ?", answers: ["K2", "Mont Everest", "Mont Blanc", "Kilimandjaro"], correct: 1 },
    { question: "Quelle est la monnaie officielle du Japon ?", answers: ["Won", "Yen", "Baht", "Dollar"], correct: 1 },
    { question: "Quel est le nom du héros de 'Les Misérables' ?", answers: ["Jean Valjean", "Javert", "Cosette", "Marius"], correct: 0 },
    { question: "Quel pays a accueilli les Jeux olympiques en 2016 ?", answers: ["Brésil", "Chine", "Japon", "Canada"], correct: 0 },
    { question: "Quel organe est responsable du pompage du sang ?", answers: ["Poumons", "Reins", "Foie", "Cœur"], correct: 3 },
    { question: "Quel gaz les plantes absorbent-elles pour la photosynthèse ?", answers: ["Oxygène", "Dioxyde de carbone", "Azote", "Hydrogène"], correct: 1 },
    { question: "Quelle couleur se trouve sur le drapeau de l'Italie ?", answers: ["Rouge", "Jaune", "Bleu", "Noir"], correct: 0 },
    { question: "Quel est l'auteur de 'Harry Potter' ?", answers: ["J.K. Rowling", "Tolkien", "George R.R. Martin", "Stephen King"], correct: 0 },
    { question: "Quelle est la capitale de l'Espagne ?", answers: ["Barcelone", "Séville", "Madrid", "Valence"], correct: 2 },
    { question: "Quelle étoile est la plus proche de la Terre ?", answers: ["Sirius", "Alpha Centauri", "Soleil", "Polaris"], correct: 2 },
    { question: "Quel est le pays d'origine du sushi ?", answers: ["Corée", "Chine", "Japon", "Thaïlande"], correct: 2 },
    { question: "Combien de couleurs y a-t-il dans un arc-en-ciel ?", answers: ["5", "6", "7", "8"], correct: 2 },
    { question: "Dans quelle ville se trouve la Tour Eiffel ?", answers: ["Marseille", "Paris", "Lyon", "Nice"], correct: 1 },
    { question: "Qui a écrit 'Les Fleurs du Mal' ?", answers: ["Victor Hugo", "Baudelaire", "Rimbaud", "Zola"], correct: 1 },
    { question: "Quel est le plus grand pays du monde par superficie ?", answers: ["Canada", "Russie", "Chine", "États-Unis"], correct: 1 },
    { question: "Quelle planète est la plus proche du Soleil ?", answers: ["Mercure", "Vénus", "Mars", "Terre"], correct: 0 },
    { question: "Qui a inventé l'imprimerie ?", answers: ["Galilée", "Gutenberg", "Newton", "Pascal"], correct: 1 },
    { question: "Quel est le pays connu pour les pyramides mayas ?", answers: ["Brésil", "Mexique", "Colombie", "Pérou"], correct: 1 },
    { question: "Quel est le fleuve qui traverse l'Égypte ?", answers: ["Nil", "Tigre", "Euphrate", "Jourdain"], correct: 0 },
    { question: "Quel est l'auteur de '1984' ?", answers: ["George Orwell", "Aldous Huxley", "Ray Bradbury", "Jules Verne"], correct: 0 }
];

let currentQuestion = 0;
let score = 0;
let currentQuiz = [];

function startQuiz(quiz) {
    currentQuiz = quiz;
    currentQuestion = 0;
    score = 0;
    document.getElementById("result").style.display = "none";
    loadQuestion();
}

function loadQuestion() {
    const quizDiv = document.getElementById("quiz");
    quizDiv.innerHTML = "";

    if (currentQuestion < currentQuiz.length) {
        const q = currentQuiz[currentQuestion];

        const questionElement = document.createElement("div");
        questionElement.classList.add("question");
        questionElement.innerHTML = `<h3>${currentQuestion + 1}. ${q.question}</h3>`;
        quizDiv.appendChild(questionElement);

        const answersDiv = document.createElement("div");
        answersDiv.classList.add("answers");
        q.answers.forEach((answer, index) => {
            const button = document.createElement("button");
            button.textContent = answer;
            button.onclick = () => checkAnswer(index);
            answersDiv.appendChild(button);
        });
        quizDiv.appendChild(answersDiv);

        const counterDiv = document.createElement("div");
        counterDiv.classList.add("counter");
        counterDiv.textContent = `Question ${currentQuestion + 1} sur ${currentQuiz.length}`;
        quizDiv.appendChild(counterDiv);
    } else {
        showResult();
    }
}

function checkAnswer(index) {
    if (index === currentQuiz[currentQuestion].correct) {
        score++;
    }
    currentQuestion++;
    loadQuestion();
}

function showResult() {
    const quizDiv = document.getElementById("quiz");
    const resultDiv = document.getElementById("result");

    quizDiv.style.display = "none";
    resultDiv.style.display = "block";
    resultDiv.textContent = `Quiz terminé ! Vous avez obtenu ${score} / ${currentQuiz.length} bonnes réponses.`;
}
