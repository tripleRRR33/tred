const games = {
    JAC1: {
        description: "Associez les artistes et écrivains avec leurs œuvres célèbres",
        pairs: [
            { left: "Le Louvre", right: "La Joconde" },
            { left: "Victor Hugo", right: "Les Misérables" },
            { left: "Claude Monet", right: "Les Nymphéas" },
            { left: "Émile Zola", right: "Germinal" },
            { left: "Auguste Renoir", right: "Le Bal du Moulin de la Galette" },
            { left: "Marcel Proust", right: "À la recherche du temps perdu" },
            { left: "Paul Cézanne", right: "La Montagne Sainte-Victoire" },
            { left: "Albert Camus", right: "L'Étranger" },
            { left: "Edgar Degas", right: "La Petite Danseuse" },
            { left: "Gustave Flaubert", right: "Madame Bovary" }
        ]
    },
    JAC2: {
        description: "Associez les scientifiques avec leurs découvertes majeures",
        pairs: [
            { left: "Louis Pasteur", right: "La Pasteurisation" },
            { left: "Marie Curie", right: "Le Radium" },
            { left: "Antoine Lavoisier", right: "Loi de Conservation de la Masse" },
            { left: "Henri Becquerel", right: "La Radioactivité" },
            { left: "Louis de Broglie", right: "La Dualité Onde-Corpuscule" },
            { left: "Pierre et Marie Curie", right: "Le Polonium" },
            { left: "Georges Charpak", right: "La Chambre Proportionnelle" },
            { left: "Claude Bernard", right: "La Médecine Expérimentale" },
            { left: "Paul Sabatier", right: "La Catalyse" },
            { left: "Jean Perrin", right: "Les Atomes" }
        ]
    },
    JAC3: {
        description: "Associez les lieux historiques avec les événements qui s'y sont déroulés",
        pairs: [
            { left: "Versailles", right: "Traité de 1919" },
            { left: "Reims", right: "Sacre des Rois de France" },
            { left: "Bastille", right: "14 juillet 1789" },
            { left: "Mont Saint-Michel", right: "Abbaye Médiévale" },
            { left: "Lascaux", right: "Peintures Rupestres" },
            { left: "Alésia", right: "Défaite de Vercingétorix" },
            { left: "Avignon", right: "Palais des Papes" },
            { left: "Normandie", right: "Débarquement 1944" },
            { left: "Carnac", right: "Menhirs Néolithiques" },
            { left: "Verdun", right: "Bataille de 1916" }
        ]
    },
    JAC4: {
        description: "Associez les musiciens et cinéastes avec leurs œuvres emblématiques",
        pairs: [
            { left: "Édith Piaf", right: "La Vie en Rose" },
            { left: "Jean Gabin", right: "La Grande Illusion" },
            { left: "Georges Brassens", right: "Les Copains d'Abord" },
            { left: "Jean-Luc Godard", right: "À Bout de Souffle" },
            { left: "Jacques Brel", right: "Ne Me Quitte Pas" },
            { left: "François Truffaut", right: "Les 400 Coups" },
            { left: "Charles Aznavour", right: "La Bohème" },
            { left: "Alain Delon", right: "Le Samouraï" },
            { left: "Serge Gainsbourg", right: "Je t'aime... moi non plus" },
            { left: "Louis de Funès", right: "La Grande Vadrouille" }
        ]
    },
    JAC5: {
        description: "Associez les sportifs avec leurs exploits légendaires",
        pairs: [
            { left: "Just Fontaine", right: "13 buts en Coupe du Monde 1958" },
            { left: "Michel Platini", right: "Ballon d'Or 1983-1985" },
            { left: "Zinédine Zidane", right: "Doublé finale 1998" },
            { left: "Marie-José Pérec", right: "Triple championne olympique" },
            { left: "Alain Prost", right: "4 titres en Formule 1" },
            { left: "Laure Manaudou", right: "Record du monde 400m nage libre" },
            { left: "Tony Parker", right: "4 titres NBA avec les Spurs" },
            { left: "Jean-Claude Killy", right: "Triple médaillé JO 1968" },
            { left: "Renaud Lavillenie", right: "Record du monde perche 6,16m" },
            { left: "Teddy Riner", right: "10 titres mondiaux judo" }
        ]
    },
    JAC6: {
        description: "Associez les spécialités gastronomiques avec leurs régions d'origine",
        pairs: [
            { left: "Cassoulet", right: "Toulouse" },
            { left: "Bouillabaisse", right: "Marseille" },
            { left: "Quiche", right: "Lorraine" },
            { left: "Choucroute", right: "Alsace" },
            { left: "Ratatouille", right: "Nice" },
            { left: "Bœuf Bourguignon", right: "Bourgogne" },
            { left: "Crêpe", right: "Bretagne" },
            { left: "Raclette", right: "Savoie" },
            { left: "Aligot", right: "Aveyron" },
            { left: "Pot-au-feu", right: "Île-de-France" }
        ]
    },
    JAC7: {
        description: "Associez les monuments avec leurs architectes ou constructeurs",
        pairs: [
            { left: "Tour Eiffel", right: "Gustave Eiffel" },
            { left: "Pyramide du Louvre", right: "Ieoh Ming Pei" },
            { left: "Centre Pompidou", right: "Renzo Piano" },
            { left: "Sacré-Cœur", right: "Paul Abadie" },
            { left: "Opéra Garnier", right: "Charles Garnier" },
            { left: "Fondation Louis Vuitton", right: "Frank Gehry" },
            { left: "Les Invalides", right: "Libéral Bruant" },
            { left: "Arc de Triomphe", right: "Jean-François Chalgrin" },
            { left: "Panthéon", right: "Jacques-Germain Soufflot" },
            { left: "Bibliothèque Nationale", right: "Dominique Perrault" }
        ]
    },
    JAC8: {
        description: "Associez les personnages mythologiques avec leurs attributs",
        pairs: [
            { left: "Zeus", right: "La Foudre" },
            { left: "Poséidon", right: "Le Trident" },
            { left: "Athéna", right: "La Chouette" },
            { left: "Hermès", right: "Le Caducée" },
            { left: "Apollon", right: "La Lyre" },
            { left: "Artémis", right: "L'Arc" },
            { left: "Arès", right: "La Lance" },
            { left: "Aphrodite", right: "La Colombe" },
            { left: "Héphaïstos", right: "Le Marteau" },
            { left: "Dionysos", right: "La Vigne" }
        ]
    }, 
    JAC9: {
        description: "Associez les espèces animales avec leurs caractéristiques uniques",
        pairs: [
            { left: "Guépard", right: "Animal terrestre le plus rapide" },
            { left: "Colibri", right: "Seul oiseau volant en arrière" },
            { left: "Manchot Empereur", right: "Plonge jusqu'à 500m" },
            { left: "Baleine Bleue", right: "Plus grand animal vivant" },
            { left: "Paresseux", right: "Dort 20 heures par jour" },
            { left: "Axolotl", right: "Régénère ses organes" },
            { left: "Toucan", right: "Bec thermorégulateur" },
            { left: "Caméléon", right: "Change de couleur selon l'humeur" },
            { left: "Narval", right: "Dent en forme de corne" },
            { left: "Tardigrade", right: "Survit dans l'espace" }
        ]
    },
    JAC10: {
        description: "Associez les innovations technologiques avec leurs créateurs",
        pairs: [
            { left: "World Wide Web", right: "Tim Berners-Lee" },
            { left: "Apple", right: "Steve Jobs" },
            { left: "Tesla", right: "Elon Musk" },
            { left: "Facebook", right: "Mark Zuckerberg" },
            { left: "Microsoft", right: "Bill Gates" },
            { left: "Amazon", right: "Jeff Bezos" },
            { left: "Google", right: "Larry Page" },
            { left: "Linux", right: "Linus Torvalds" },
            { left: "PlayStation", right: "Ken Kutaragi" },
            { left: "USB", right: "Ajay Bhatt" }
        ]
    },
    JAC11: {
        description: "Associez les créateurs de mode avec leurs innovations emblématiques",
        pairs: [
            { left: "Coco Chanel", right: "Petite Robe Noire" },
            { left: "Christian Dior", right: "New Look" },
            { left: "Yves Saint Laurent", right: "Le Smoking" },
            { left: "Jean Paul Gaultier", right: "Le Corset Conique" },
            { left: "Karl Lagerfeld", right: "Réinvention du Tweed" },
            { left: "Christian Louboutin", right: "Semelles Rouges" },
            { left: "Louis Vuitton", right: "Malle Plate" },
            { left: "Hermès", right: "Sac Birkin" },
            { left: "Pierre Cardin", right: "Mode Futuriste" },
            { left: "Sonia Rykiel", right: "Pull Poor Boy" }
        ]
    },
    JAC12: {
        description: "Associez les philosophes avec leurs concepts clés",
        pairs: [
            { left: "Socrate", right: "La Maïeutique" },
            { left: "Platon", right: "L'Allégorie de la Caverne" },
            { left: "Aristote", right: "Le Juste Milieu" },
            { left: "Descartes", right: "Je pense donc je suis" },
            { left: "Kant", right: "L'Impératif Catégorique" },
            { left: "Nietzsche", right: "Le Surhomme" },
            { left: "Sartre", right: "L'Existentialisme" },
            { left: "Voltaire", right: "La Tolérance" },
            { left: "Rousseau", right: "Le Contrat Social" },
            { left: "Pascal", right: "Le Pari" }
        ]
    },
    JAC13: {
        description: "Associez les expressions françaises avec leurs origines",
        pairs: [
            { left: "Passer l'arme à gauche", right: "Tradition militaire" },
            { left: "Être sur le pont d'Avignon", right: "Danse médiévale" },
            { left: "Coûter les yeux de la tête", right: "Rançon médiévale" },
            { left: "Être dans les choux", right: "Course cycliste" },
            { left: "Avoir le cafard", right: "Kafka" },
            { left: "Chercher midi à quatorze heures", right: "Horloges monastiques" },
            { left: "Faire le pont", right: "Fêtes religieuses" },
            { left: "Poser un lapin", right: "Argot du XIXe siècle" },
            { left: "Être tiré à quatre épingles", right: "Couture" },
            { left: "Faire chou blanc", right: "Jeu de quilles" }
        ]
    },
    JAC14: {
        description: "Associez les jeux vidéo avec leurs innovations majeures",
        pairs: [
            { left: "Pong", right: "Premier jeu d'arcade populaire" },
            { left: "Pac-Man", right: "Premier personnage iconique" },
            { left: "Super Mario 64", right: "3D libre" },
            { left: "Metal Gear Solid", right: "Cinématique narrative" },
            { left: "World of Warcraft", right: "MMORPG mainstream" },
            { left: "Minecraft", right: "Construction libre" },
            { left: "GTA III", right: "Monde ouvert moderne" },
            { left: "Doom", right: "FPS moderne" },
            { left: "The Legend of Zelda", right: "Sauvegarde sur cartouche" },
            { left: "Street Fighter II", right: "Combos" }
        ]
    },
    JAC15: {
        description: "Associez les théories sociales avec leurs implications",
        pairs: [
            { left: "Effet Pygmalion", right: "Prophétie auto-réalisatrice" },
            { left: "Expérience de Milgram", right: "Obéissance à l'autorité" },
            { left: "Effet Flynn", right: "Hausse du QI générationnel" },
            { left: "Paradoxe de Simpson", right: "Corrélation trompeuse" },
            { left: "Principe de Peter", right: "Niveau d'incompétence" },
            { left: "Loi de Murphy", right: "Pessimisme systématique" },
            { left: "Effet Dunning-Kruger", right: "Surconfiance des incompétents" },
            { left: "Théorie des jeux", right: "Dilemme du prisonnier" },
            { left: "Fenêtres brisées", right: "Criminalité progressive" },
            { left: "Effet Barnum", right: "Validation personnelle" }
        ]
    }
};

let currentGame = 'JAC1';
let selectedLeft = null;
let selectedRight = null;
let matches = new Set();
let score = 0;

function shuffle(array) {
    return array.sort(() => Math.random() - 0.5);
}

function changeGame() {
    currentGame = document.getElementById('gameSelect').value;
    document.getElementById('gameDescription').textContent = games[currentGame].description;
    resetGame();
}

function createGame() {
    const leftColumn = document.getElementById('leftColumn');
    const rightColumn = document.getElementById('rightColumn');
    const currentPairs = games[currentGame].pairs;
    document.getElementById('totalPairs').textContent = currentPairs.length;
    document.getElementById('gameDescription').textContent = games[currentGame].description;
    
    leftColumn.innerHTML = '';
    rightColumn.innerHTML = '';
    
    const shuffledLeft = shuffle([...currentPairs]);
    const shuffledRight = shuffle([...currentPairs]);
    
    shuffledLeft.forEach((pair, index) => {
        const div = document.createElement('div');
        div.className = 'item';
        div.textContent = pair.left;
        div.setAttribute('data-index', index);
        div.onclick = () => selectLeft(div);
        leftColumn.appendChild(div);
    });
    
    shuffledRight.forEach((pair, index) => {
        const div = document.createElement('div');
        div.className = 'item';
        div.textContent = pair.right;
        div.setAttribute('data-index', index);
        div.onclick = () => selectRight(div);
        rightColumn.appendChild(div);
    });
}

function selectLeft(element) {
    if (selectedLeft) {
        selectedLeft.classList.remove('selected');
    }
    element.classList.add('selected');
    selectedLeft = element;
    tryMatch();
}

function selectRight(element) {
    if (selectedRight) {
        selectedRight.classList.remove('selected');
    }
    element.classList.add('selected');
    selectedRight = element;
    tryMatch();
}

function tryMatch() {
    if (selectedLeft && selectedRight) {
        const leftText = selectedLeft.textContent;
        const rightText = selectedRight.textContent;
        
        const match = games[currentGame].pairs.find(pair => 
            pair.left === leftText && pair.right === rightText
        );
        
        if (match) {
            selectedLeft.classList.add('correct');
            selectedRight.classList.add('correct');
            matches.add(leftText);
            score++;
            document.getElementById('score').textContent = score;
        } else {
            selectedLeft.classList.add('incorrect');
            selectedRight.classList.add('incorrect');
        }
        
        setTimeout(() => {
            selectedLeft.classList.remove('selected', 'incorrect');
            selectedRight.classList.remove('selected', 'incorrect');
            selectedLeft = null;
            selectedRight = null;
        }, 1000);
    }
}

function checkAnswers() {
    const totalPairs = games[currentGame].pairs.length;
    if (score === totalPairs) {
        alert('Félicitations ! Vous avez trouvé toutes les associations !');
    } else {
        alert(`Vous avez trouvé ${score} associations sur ${totalPairs}. Continuez !`);
    }
}

function resetGame() {
    matches.clear();
    score = 0;
    document.getElementById('score').textContent = score;
    createGame();
}

// Initialiser le jeu
createGame();
