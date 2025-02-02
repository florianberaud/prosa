import { refreshPage } from "./refreshPage.js";
import { addBtnImg, addInvisibleBtn, ajouterBouton } from './button.js';

import { addForm } from './form.js';
import { addImgBackground, addImg } from './fonctionImg.js';
import { addTxt, addTxtWithBoldWord, addTxtNarration, addNameCharacter, addDiv, handleFormSubmit, addTxtNarrationAR, addNamePersoAR } from './texte.js';
import { addSVG } from './svg.js';
import { warningSvg } from '../assets/svgcode.js';
import { showStaticMap } from './map.js';
import { loadSound, suspendSound } from './Sound/sound.js';
import { lunchFight } from './fight.js';
//import { AREsterelle, ARAfata, ARBerger } from './js/ARFunction.js';
import { changeStyleBG, skin, selectAvatar, selectButton, changeStyleBGB } from './functionChangeStyle.js';
import { addOverlay } from './overlay.js';
import { addAutoPlayVideo } from './video.js';
import { step2, step6 } from './functionstep.js'
import { ARBerger } from './ARFunction.js';
import { popup } from './popup.js';
import { loadLvl12 } from "./lvl12.js";



export function loadLvl8() {

    const steps =[
        {character : "NarraChara", Txt : "E6Narra", name : "Narrateur"},
    ]
        if (Ruse) { 
            const steps = [
                { character : "NarraChara", Txt : "E8NarraRuseT"},
                { character : "MessChara", popup : "E8Mess" },
                { character : "NarraChara", Txt : "E8NarraRuseT2"},
                { character : "BergerChara", Txt : "E8BergerRuseT", name : "E8BergerRuseT" },
                { character : "NarraChara", Txt : "E8NarraRuseT3"},
                { character : "BergerChara", Txt : "E8BergerRuseT2", name : "E8BergerRuseT2" },
                { character : "NarraChara", Txt : "E8NarraRuseT4"},
                { character : "BergerChara", Txt : "E8BergerRuseT3", name : "E8BergerRuseT3" },
                { character : "NarraChara", Txt : "E8NarraRuseT5"},
               
            ];
            playSteps(steps); // Démarrage des étapes

            //mettre code pour étape suivante 
        }
       
        if (lion) { 
            const steps = [
                { character : "NarraChara", Txt : "E8NarraLeoT"},
                { character : "StregaChara", Txt : "E8StregaLeoT", name : "E8StregaLeoT" },
                { character : "NarraChara", Txt : "E8NarraLeoT2" },
                { character : "StregaChara", Txt : "E8StregaT2", name : "E8StregaT2" },
                { character : "NarraChara", Txt : "E8NarraLeoT3"},
                { character : "MessChara", popup : "E8MessLeoT" },
                { character : "NarraChara", Txt : "E8NarraLeoT4"},
                { character : "StregaChara", Txt : "E8StregaLeoT3", name : "E8StregaLeoT3" },
                { character : "NarraChara", Txt : "E8NarraLeoT5"},
                { character : "BergerChara", Txt : "E8BergerLeoT", name : "E8BergerLeoT" },
                { character : "NarraChara", Txt : "E8NarraLeoT6", nextLvl: loadLvl12},
            ];
            playSteps(steps); // Démarrage des étapes

            //mettre code pour étape suivante 
        }  


    refreshPage();
    console.log("loadLvl8 :  je suis là");

    localStorage.setItem("level", "8");
    
}