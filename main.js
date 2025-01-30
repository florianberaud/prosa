import { refreshPage } from "./js/refreshPage.js";
import { addImg } from "./js/fonctionImg.js";
import {
  setCookie,
  getCookieValue,
  isCookiePresent,
} from "./js/cookieHandler.js";
import { setOnSound, setOffSound } from "./js/Sound/sound.js";

import { loadScreen0 } from "./js/screen0.js";
import { loadScreen1 } from "./js/screen1.js";
import { loadScreen2 } from "./js/screen2.js";
import { loadScreen5 } from "./js/screen5.js";
import { loadScreen4 } from "./js/screen4.js";
import { loadScreen3 } from "./js/screen3.js";
import { loadLvl1 } from "./js/lvl1.js";
import { loadLvl1bis } from "./js/lvl1bis.js";
import { loadLvl2 } from "./js/lvl2.js";
import { loadLvl3 } from "./js/lvl3.js";
import { loadLvl4 } from "./js/lvl4.js";
import { loadLvl5 } from "./js/lvl5.js";
import { loadLvl6 } from "./js/lvl6.js";
import { loadLvl6bis } from "./js/lvl6bis.js";
import { loadLvl7 } from "./js/lvl7.js";
import { loadLvl8 } from "./js/lvl8.js";
import { loadLvl9 } from "./js/lvl9.js";
import { loadLvl10 } from "./js/lvl10.js";
import { loadLvl11 } from "./js/lvl11.js";
import { loadLvl12 } from "./js/lvl12.js";
import { loadLvl3 } from "./js/lvl13.js";
import { loadLvl14 } from "./js/lvl4.js";
import { loadLvl15 } from "./js/lvl15.js";
import { loadLvl16 } from "./js/lvl16.js";
import { loadLvlfin } from "./js/lvlfin.js";
//import 

//Variable / Constante pour les combats
export let playerUserName = "";

const DEBUG = true;

let weapons = [
  {
    name: "Epée",
    damage: 10,
  },
  {
    name: "Grimoire",
    damage: 15,
  },
  {
    name: "Arc",
    damage: 20,
  },
];

const enemies = [
  {
    name: "Cerf",
    hp: 50,
    damage: 10,
  },
  {
    name: "Sylvain",
    hp: 80,
    damage: 15,
  },
  {
    name: "Basgialiscu",
    hp: 100,
    damage: 20,
  },
  {
    name: "Tarasque",
    hp: 100,
    damage: 20,
  },
];

let levelValue = 0;
let screenValue = 0;

// addOverlay ('audioId' , 'audioSrc')

// Resey Home btn
if (DEBUG) {
  const body = document.querySelector("body");
  body.id = "body";
  addImg("body", "assets/icons/home.png", "homeStyle", "resetGame");

  resetGame.addEventListener("click", () => {
    refreshPage();
    loadScreen0();
    setCookie("level", "0", 7, "/");
  });

  ////////////////////////////////////////////////////
  // uncomment to activate home button dynamic display
  ////////////////////////////////////////////////////

  // resetGame.style.display = "none"; // Caché par défaut

  // // Détecter la position de la souris
  // document.addEventListener("mousemove", (event) => {
  //     const seuil = 50; // Distance en pixels pour déclencher l'affichage
  //     if (event.clientX < seuil && event.clientY < seuil) {
  //         resetGame.style.display = "block";
  //         resetGame.style.opacity = "1"; // Affiche avec un fondu
  //     } else {
  //         resetGame.style.opacity = "0"; // Cache avec un fondu
  //         setTimeout(() => {
  //             if (resetGame.style.opacity === "0") {
  //                 resetGame.style.display = "none"; // Cache totalement après l'animation
  //             }
  //         }, 300);
  //     }
  // });
}

// Ajout du bouton pour activer/désactiver le son
const SoundBtn = document.createElement("div");
SoundBtn.id = "SoundBtn";
document.body.appendChild(SoundBtn);

const SoundIcon = document.createElement("img");
SoundIcon.src = "assets/icons/SonCoupe.png";
SoundIcon.style.width = "50px";
SoundBtn.appendChild(SoundIcon);

SoundBtn.addEventListener("click", function () {
  if (SoundIcon.src.includes("SonActif")) {
    SoundIcon.src = "assets/icons/sonCoupe.png";
    setOffSound();
  } else {
    SoundIcon.src = "assets/icons/SonActif.png";
    setOnSound();
  }
});

//---------------------------------------------
// logic du jeu
//---------------------------------------------

if (isCookiePresent("screen")) {
  // Récupérer la valeur de "level"
  screenValue = getCookieValue("screen");
  levelValue = getCookieValue("level");

  console.log(
    `Le cookie 'screen' est présent avec la valeur level à : ${screenValue}`
  );

  if (screenValue <= 5 && levelValue == 0) {
    switch (screenValue) {
      case "1":
        loadScreen1();
        break;
      case "2":
        loadScreen2();
        break;
      case "3":
        loadScreen3();
        break;
      case "4":
        loadScreen4();
        break;
      case "5":
        loadScreen5();
        break;
      case "6":
        loadLvl6();
        break;
      case "7":
        loadLvl6bis();
        break;
      case "8":
        loadLvl7();
        break;
      case "9":
        loadLvl8();
        break;
      case "10":
        loadLvl9();
        break;
      case "11":
        loadLvl10();
        break;
      case "12":
        loadLvl11();
        break;
      case "13":
        loadLvl12();
        break;
      case "14":
        loadLvl13();
        break;
      case "15":
        loadLvl14();
        break;
      case "16":
        loadLvl15();
        break;
      case "17":
        loadLvl16();
        break;
      case "18":
        loadLvlfin();
        break;
      case "19":
        loadLvlfinAlt();
        break;
     
      default:
        loadScreen0();
    }
  } else {
    console.log(isCookiePresent("level"), levelValue);
    if (isCookiePresent("level")) {
      switch (levelValue) {
        case "1":
          loadLvl1();
          break;
        case "2":
          loadLvl1bis();
          break;
        case "3":
          loadLvl2();
          break;
        case "4":
          loadLvl3();
          break;
        case "5":
          loadLvl4();
          break;
        case "2":
          loadLvl5();
          break;
      }
    }
  }
} else {
  console.log('Le cookie "screen" n\'est pas présent');

  // Créer un cookie
  document.cookie = "screen=0; level=0; path=/;";
  loadScreen0();
}
