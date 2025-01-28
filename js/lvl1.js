import { loadLvl2 } from "./lvl1bis.js";
import { loadLvl3 } from "./lvl2.js";
import { playSteps } from "./functionMakeSteps.js";
import { setCookie } from "./cookieHandler.js";

export function loadLvl1() {
    // Liste des étapes du niveau 1
    const steps = [
        { background: 'assets/bg/fondEtape1.jpg', narration: "E1Narra", character: null },
        { background: 'assets/bg/fondEtape1.jpg', narration: "E1Berger", character: 'assets/personnages/berger V1 premier plan.png', name: 'E1Berger' },
        { background: 'assets/bg/fondEtape1.jpg', narration: "E1Narra1", character: null },
        { background: 'assets/bg/fondEtape1.jpg', narration: "E1Berger1", character: 'assets/personnages/berger V1 premier plan.png', name: 'E1Berger1' },
        { background: 'assets/bg/fondEtape1.jpg', narration: "E1Narra2", character: null },
        { background: 'assets/bg/fondEtape1.jpg', narration: "E1Berger2", character: 'assets/personnages/berger V1 premier plan.png', name: 'E1Berger2' },
        { background: 'assets/bg/fondEtape1.jpg', narration: "E1Narra3", character: null },
        { background: 'assets/bg/fondEtape1.jpg', narration: "E1Berger3", character: 'assets/personnages/berger V1 premier plan.png', name: 'E1Berger3' },
        { background: 'assets/bg/fondEtape1.jpg', narration: "E1Narra4", character: null },
        { background: 'assets/bg/fondEtape1.jpg', narration: "E1Berger4", character: 'assets/personnages/berger V1 premier plan.png', name: 'E1Berger4' },
        { background: 'assets/bg/fondEtape1.jpg', narration: "E1Narra5", character: null },
        { background: 'assets/bg/fondEtape1.jpg', narration: "E1Berger5", character: 'assets/personnages/berger V1 premier plan.png', name: 'E1Berger5' },
        { background: 'assets/bg/fondEtape1.jpg', narration: "E1Narra6", character: null },
        { background: 'assets/bg/fondEtape1.jpg', narration: "E1Berger6", character: 'assets/personnages/berger V1 premier plan.png', name: 'E1Berger6' },
        {
            background: 'assets/bg/fondEtape1.jpg',
            narration: "E1Narra7",
            character: null,
            choices: [
                { text: "E1Choix1", action: loadLvl1bis },
                { text: "E1Choix2", action: loadLvl2 }
            ]
        }
    ];

    playSteps(steps); // Démarrage des étapes
    
    // update screen cookie
    setCookie("level", "1", 7, "/");
  
}






