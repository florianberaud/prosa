import { refreshPage } from "./refreshPage.js";
import { addOverlay } from './overlay.js';
import { nextScreen } from './navigation.js';
import { playSteps } from './functionMakeSteps.js';
import { path_narration, path_personnages } from "./paths.js";
import { log } from "./trace.js";

export function loadLvl3() {

    log("Enter in L3", "blue");

    // Liste des étapes du niveau 1
    const steps = [
        { background: path_backgrounds + 'fondEtape3.mp4', narration: "E3Narra", character: null , sound: path_narration+'narrateur-E3/narrateurE3-001.mp3' },
        { background: path_backgrounds + 'fondEtape3.png', narration: "E3Berger", character: path_personnages+'Berger/berger.png', name: 'E3Berger' , sound: path_narration+'Berger-E3/Berger-E3-001mp3' },
        { background: path_backgrounds + 'fondEtape3.png', narration: "E3Narra2", character: null , sound: path_narration+'narrateur-E3/narrateurE3-002.mp3'},
        { background: path_backgrounds + 'fondEtape3.png', narration: "E3Berger2", character: path_personnages+'Berger/berger.png', name: 'E3Berger1' , sound: path_narration+'Berger-E3/Berger-E3-002mp3' },
        { background: path_backgrounds + 'fondEtape3.png', narration: "E3Narra3", character: null , sound: path_narration+'narrateur-E3/narrateurE3-003.mp3'},
        { background: path_backgrounds + 'fondEtape3.png', narration: "E3Overlay", character: null, action: addOverlay },// Appel de la fonction overlay ici
        { background: path_backgrounds + 'fondEtape3.png', narration: "E3Berger3", character: path_personnages+'Berger/berger.png', name: 'E3Berger6' , sound: path_narration+'Berger-E3/Berger-E3-003mp3',
            choices: [
                { text: "E3Choix1", action: nextScreen('5', '4') },
                { text: "E3Choix2", action: nextScreen('5', '10') }
            ]
        }
    ];

    refreshPage();

    playSteps(steps); // Démarrage des étapes
 
    localStorage.setItem("level", "3"); 
}