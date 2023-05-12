// Déclaration de l'objet
const objFicheArtsVisuels = {
  refPrenom: document.getElementById("prenom"),
  refNom: document.getElementById("nom"),
  refImagePersonnage: document.getElementById("url_image"),
  refTitreImage: document.getElementById("titre_image"),
  refCreditImage: document.getElementById("credit_image"),
  refNotesBiographiques: document.getElementById("notes_biographiques"),
  refGoogleMap: document.getElementById("carteZoom"),
  refArrondissement: document.getElementById("arrondissement"),
  refQuartier: document.getElementById("quartier"),
  refAdresse: document.getElementById("adresse"),
  refUrlPlaque: document.getElementById("url_plaque"),
  refTranscript: document.getElementById("transcript"),
  refDescriptionAudio: document.getElementById("audio_desc"),
  refUrlAudio: document.getElementById("audio_url"),
  refAudioPreambule: document.getElementById("audio_preambule"),
  refAudioTranscription: document.getElementById("audio_transcription"),
  refAudioCredit: document.getElementById("audio_credit"),

  // Méthode
  initialiser: function () {
    let intIdFicheCourante = obtenirValeurUrlParam("id");
    // console.log(intIdFicheCourante);

    this.refPrenom.innerText = objJSONepigraphes[intIdFicheCourante].PRENOM;
    this.refNom.innerText = objJSONepigraphes[intIdFicheCourante].NOM;

    //mis en commentaire pour ne pas avoir derreur dans la console
    // this.refImagePersonnage.src = `../images/${objJSONepigraphes[intIdFicheCourante].SUFFIXE_IMAGES}.jpg`;

    this.refTitreImage.innerText = objJSONepigraphes[intIdFicheCourante].IMAGE.TITRE;
    this.refCreditImage.innerText = objJSONepigraphes[intIdFicheCourante].IMAGE.CREDIT;
    this.refNotesBiographiques.innerHTML = `<p>${objJSONepigraphes[intIdFicheCourante].BIOGRAPHIE}</p>`;

    //Pas certain de savoir quoi faire avec la map sans avoir compris comment L'API fonctionne
    // this.refGoogleMap.src = `../images/${objJSONepigraphes[intIdFicheCourante].}`

    this.refArrondissement.innerText = objJSONepigraphes[intIdFicheCourante].ARRONDISSEMENT;
    this.refQuartier.innerText = objJSONepigraphes[intIdFicheCourante].QUARTIER;
    this.refAdresse.innerText = objJSONepigraphes[intIdFicheCourante].ADRESSE;

    //pour changer la photo de lepigraphe, meme genre de ligne de code que ceci
    // this.refImagePersonnage.src = `../images/${objJSONepigraphes[intIdFicheCourante].SUFFIXE_IMAGES}.jpg`;

    this.refTranscript.innerText = objJSONepigraphes[intIdFicheCourante].PLAQUE_TRANSCRIPTION;
    this.refDescriptionAudio.innerText = objJSONepigraphes[intIdFicheCourante].AUDIO.DESCRIPTION;
    this.refUrlAudio.src = objJSONepigraphes[intIdFicheCourante].AUDIO.URL;
    this.refUrlAudio.load();

    this.refAudioPreambule.innerText = objJSONepigraphes[intIdFicheCourante].PRENOM + objJSONepigraphes[intIdFicheCourante].NOM;
    this.refAudioTranscription.innerText = objJSONepigraphes[intIdFicheCourante].AUDIO.TRANSCRIPTION;

    this.refAudioCredit.innerText = objJSONepigraphes[intIdFicheCourante].AUDIO.CREDIT;
  },
};

/**
 * Obtenir la valeur d'un des parametres (QueryParam) dans l'URL
 * @param {string} strParam - Nom du parametre a rechercher dans l'URL
 * @returns {string} - Valeur correspondant au parametre
 *                   - Retourne null lorsqu'aucune valeur n'est trouvee
 */

function obtenirValeurUrlParam(strParam) {
  return new URLSearchParams(window.location.search).get(strParam);
}
// DOC MDN: https://developer.mozilla.org/en-US/docs/Web/API/URLSeachParams

function soumettreReponse() {
  //variable qui contient le nom de la page ouverte (ex: e0003)
  let intIdFicheCourante = obtenirValeurUrlParam("id");

  //console.log qui permet de voir si une chasse est active ou pas
  //chase inactive = undefined

  const btnRadio = document.querySelector('input[name="formChasse"]:checked');
  const btnRadioChecked = btnRadio.id;

  console.log(intIdFicheCourante);
  console.log(`localStorage.id_` + btnRadioChecked);

  if (localStorage.id_personnage === undefined) {
    document.getElementById("message").innerText = "Aucune chasse n'a ete debute";
  } else {
    if (btnRadio === null) {
      document.getElementById("message").innerText = "Choisir un element";
    } else {
      if (intIdFicheCourante === localStorage.getItem("id_" + btnRadioChecked)) {
        document.getElementById("message").innerText = "Bravo c'est la bonne reponse!";
      } else {
        document.getElementById("message").innerText = "Ce n'est pas la bonne reponse";
      }
    }
  }
}

document.getElementById("btnSoumettre").addEventListener("click", soumettreReponse);
objFicheArtsVisuels.initialiser();
