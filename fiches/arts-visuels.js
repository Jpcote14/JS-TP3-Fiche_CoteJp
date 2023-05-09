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
    this.refPrenom.innerText = objJSONepigraphes.e0001.PRENOM;
    this.refNom.innerText = objJSONepigraphes.e0001.NOM;
    this.refImagePersonnage.src = `../images/${objJSONepigraphes.e0001.SUFFIXE_IMAGES}.jpg`;
    this.refTitreImage.innerText = objJSONepigraphes.e0001.IMAGE.TITRE;
    this.refCreditImage.innerText = objJSONepigraphes.e0001.IMAGE.CREDIT;
    this.refNotesBiographiques.innerHTML = `<p>${objJSONepigraphes.e0001.BIOGRAPHIE}</p>`;

    //Pas certain de savoir quoi faire avec la map sans avoir compris comment L'API fonctionne
    // this.refGoogleMap.src = `../images/${objJSONepigraphes.e0001.}`

    this.refArrondissement.innerText = objJSONepigraphes.e0001.ARRONDISSEMENT;
    this.refQuartier.innerText = objJSONepigraphes.e0001.QUARTIER;
    this.refAdresse.innerText = objJSONepigraphes.e0001.ADRESSE;

    //pour changer la photo de lepigraphe, meme genre de ligne de code que ceci
    // this.refImagePersonnage.src = `../images/${objJSONepigraphes.e0001.SUFFIXE_IMAGES}.jpg`;

    this.refTranscript.innerText = objJSONepigraphes.e0001.PLAQUE_TRANSCRIPTION;
    this.refDescriptionAudio.innerText = objJSONepigraphes.e0001.AUDIO.DESCRIPTION;
    this.refUrlAudio.src = objJSONepigraphes.e0001.AUDIO.URL;

    this.refAudioPreambule.innerText = objJSONepigraphes.e0001.PRENOM + objJSONepigraphes.e0001.NOM;
    this.refAudioTranscription.innerText = objJSONepigraphes.e0001.AUDIO.TRANSCRIPTION;

    this.refAudioCredit.innerText = objJSONepigraphes.e0001.AUDIO.CREDIT;
  },
};

objFicheArtsVisuels.initialiser();
