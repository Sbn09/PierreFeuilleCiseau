
describe("Jeu Pierre-Papier-Ciseaux", function () {
  let buttons;
  let historique;

  before(function () {
    buttons = document.querySelectorAll("button");
    historique = [];
  });

  it("devrait initialiser les boutons et l'historique correctement", function () {
    assert.isAbove(buttons.length, 0, "Des boutons devraient être présents");
    assert.isArray(historique, "L'historique devrait être un tableau");
  });

  it("devrait simuler un clic sur un bouton et mettre à jour l'historique", function () {
    const joueurChoisi = "pierre";
    simulateButtonClick(joueurChoisi);

    assert.equal(
      document.querySelector(".resultat").textContent,
      `Joueur : ${joueurChoisi}`,
      "Le résultat affiché devrait correspondre à la sélection du joueur"
    );

    assert.equal(
      historique.length,
      1,
      "Un élément devrait être ajouté à l'historique"
    );

    const dernierRound = historique[0];
    assert.equal(
      dernierRound.joueur,
      joueurChoisi,
      "Le joueur devrait être enregistré dans l'historique"
    );
  });

  it("devrait mettre à jour l'affichage de l'historique correctement", function () {
    historique = [
      { joueur: "pierre", robot: "ciseaux", resultat: "Gagné" },
      { joueur: "feuille", robot: "pierre", resultat: "Perdu" },
    ];

    displayHistory();

    const historyContainer = document.querySelector(".historique ul");
    const items = historyContainer.querySelectorAll("li");

    assert.equal(
      items.length,
      historique.length,
      "Le nombre d'éléments dans l'affichage de l'historique devrait correspondre au nombre d'éléments dans l'historique"
    );

    items.forEach((item, index) => {
      const round = historique[index];
      assert.include(
        item.textContent,
        `Round ${index + 1}: Joueur ${round.joueur} vs Robot ${round.robot} - Résultat: ${round.resultat}`,
        "Le texte de l'élément d'historique devrait correspondre à la valeur attendue"
      );
    });
  });

  function simulateButtonClick(joueur) {
    const etat = ["feuille", "pierre", "ciseaux"];
    const index = etat.indexOf(joueur);
    const robot = etat[Math.floor(Math.random() * etat.length)];

    const event = new Event("click");
    buttons[index].dispatchEvent(event);
  }
});