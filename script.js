
        const buttons = document.querySelectorAll("button");
        const etat = ["feuille", "pierre", "ciseaux"];
        const historique = [];

        for (let i = 0; i < buttons.length; i++) {
            buttons[i].addEventListener('click', function () {
                const joueur = etat[i];
                const robot = etat[Math.floor(Math.random() * etat.length)];
                let resultat;

                if (joueur === robot) {
                    resultat = "Egalité";
                } else if ((joueur === "pierre" && robot === "ciseaux") || (joueur === "ciseaux" && robot === "feuille") || (joueur === "feuille" && robot === "pierre")) {
                    resultat = "Gagné";
                } else {
                    resultat = "Perdu";
                }

                document.querySelector(".resultat").innerHTML = `
                Joueur : ${joueur} </br>
                Robot : ${robot} <br/>
                Résultat : ${resultat}
                `;

                historique.push({
                    joueur: joueur,
                    robot: robot,
                    resultat: resultat
                });
                displayHistory();
            });
        }

        function displayHistory() {
            const historyContainer = document.querySelector(".historique ul");
            historyContainer.innerHTML = "<h2>Historique</h2>";

            historique.forEach((round, index) => {
                const roundElement = document.createElement("li");
                roundElement.textContent = `Round ${index + 1}: Joueur ${round.joueur} vs Robot ${round.robot} - Résultat: ${round.resultat}`;
                historyContainer.appendChild(roundElement);
            });
        }