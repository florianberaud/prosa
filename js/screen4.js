import { addDiv, addH1, addTxt, addTxtWithBoldWord } from "./texte.js";
import { ajouterBouton , addBtnImg} from "./button.js";
import { setCookie} from "./cookieHandler.js";
import { refreshPage } from "./refreshPage.js";

import { selectAvatar } from "./functionChangeStyle.js";
import { loadScreen5 } from "./screen5.js";

export function loadScreen4() {
  console.log("loadScreen4 : je suis là.");

  refreshPage(); // Rafraîchit la page

  // Création des conteneurs pour les avatars
  addDiv("container", "containerAvatar", "divAvatar");
  addDiv("containerAvatar", "imgAvatarContainer", "imgAvatarContainer");

  // Liste des chemins des avatars
  const avatarPaths = [
    "./assets/avatar/AvatarT1.png",
    "./assets/avatar/AvatarT2.png",
    "./assets/avatar/AvatarT3.png",
    "./assets/avatar/AvatarT4.png",
  ];

  // Ajout des boutons d'avatars
  avatarPaths.forEach((path, index) => {
    addBtnImg("imgAvatarContainer", path, `a${index + 1}`);
  });

  // Récupération des éléments des avatars pour gestion de la sélection
  const avatars = avatarPaths.map((_, index) =>
    document.getElementById(`a${index + 1}`)
  );

  selectAvatar(avatars); // Gère la sélection des avatars

  
  // Ajout du bouton "Confirmer"
  ajouterBouton("containerAvatar", "Confirmer", "btnConfirm", "btn");

  const btnConfirm = document.getElementById("btnConfirm");
  btnConfirm.addEventListener("click", function (event) {
    event.preventDefault();

    const avatarContainer = document.getElementById("imgAvatarContainer");
    const selectedAvatar = avatarContainer.getAttribute("data-selected-avatar");

    // Vérifie si un avatar a été sélectionné
    if (!selectedAvatar) {
        console.log("Aucun avatar sélectionné !");
    }else{
      console.log("Avatar sélectionné :", selectedAvatar);
      // Passer à l'écran suivant
      loadScreen5();
    }
  });


  // update screen cookie 
  setCookie("screen", "4", 7, "/");
}
