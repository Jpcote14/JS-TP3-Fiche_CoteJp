// Déclaration de l'objet
const objChasse = {
  // Attributs
  arrIdsPersonnagesAPiger: ["e0001", "e0008", "e0015", "e0019"],
  arrIdsObjetsAPiger: ["e0002", "e0004", "e0007", "e0021"],
  arrIdsLieuxAPiger: ["e0005", "e0012", "e0016", "e0022"],

  // Méthodes
  demarrerChasse: function () {
    let personnage = this.arrIdsPersonnagesAPiger[Math.floor(Math.random() * this.arrIdsPersonnagesAPiger.length)];
    let objet = this.arrIdsObjetsAPiger[Math.floor(Math.random() * this.arrIdsObjetsAPiger.length)];
    let lieu = this.arrIdsLieuxAPiger[Math.floor(Math.random() * this.arrIdsLieuxAPiger.length)];

    console.log(`Personnage = ${personnage}`);
    console.log(`Objet = ${objet}`);
    console.log(`Lieu = ${lieu}`);

    //ligne qui empeche de retirer une chasse avec le btnCommencer.
    const btnCommencer = document.getElementById("btnDebuterChasse");
    btnCommencer.disabled = true;

    localStorage.id_personnage = personnage;
    localStorage.id_objet = objet;
    localStorage.id_lieu = lieu;
    localStorage.personnage_est_trouve = false;
    localStorage.objet_est_trouve = false;
    localStorage.lieu_est_trouve = false;

    document.getElementById("segmentPersonnage").innerHTML = objJSONepigraphes[personnage].CHASSE.INDICE;
    document.getElementById("segmentObjet").innerHTML = objJSONepigraphes[objet].CHASSE.INDICE;
    document.getElementById("segmentLieu").innerHTML = objJSONepigraphes[lieu].CHASSE.INDICE;
  },

  soumettreReponse: function () {
    console.log(`patate`);
  },
};

// Déclaration des écouteurs d'événements
document.getElementById("btnDebuterChasse").addEventListener("click", objChasse.demarrerChasse.bind(objChasse));
