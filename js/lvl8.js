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



export function loadLvl8() {

    const steps =[
        {character : "NarraChara", Txt : "E6Narra", name : "Narrateur"},
        {character : "BergerChara", Txt : "E5Berger", name : "Berger"},
        {character : "BergerChara", Txt : "E2Narra2", name : "Narrateur"},
        {character : "MascoChara", Txt : "E5Masco", name : "Masco"},
        {character : "NarraChara", Txt : "E5Narra3",name : "Narrateur"},
        {character : "MascoChara", Txt : "E5Masco2", name : "Masco"},
        {character : "NarraChara", Txt : "E5Narra4", name : "Esterelle"},
        {character : "MascoChara", Txt : "E5Masco3", name : "Masco"},
        {character : "NarraChara", Txt : "E5Narra5", name : "Narrateur"},
        {character : "MascoChara", Txt : "E5Masco4", name : "Masco"},
        {character : "NarraChara", Txt : "E5Narra6",name : "Narrateur"},
        {character : "BergerChara", Txt : "E5Berger4", name : "Berger"},
        {character : "NarraChara", Txt : "E5Narra7", name : "Narrateur"},
        
    ]

    refreshPage();
    console.log("loadLvl8 :  je suis là");
    
}