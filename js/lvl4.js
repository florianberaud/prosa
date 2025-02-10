import { refreshPage } from "./refreshPage.js";
import { path_narration } from "./paths.js";
import { playSteps } from "./functionMakeSteps.js";
import { log } from "./trace.js";

export function loadLvl4() {


    let answear1 = true;
    let answear2 = true;

// Trace the entry in the console
log("Enter in L4", "blue");  

localStorage.setItem('level', '4');

let steps =[
        {character : "NarraChara", Txt : "E4Narra", name : "Narrateur" , sound: path_narration+'Narrateur-E4/narrateurE4-001.mp3'},
        {character : "BergerChara", Txt : "E4Berger", name : "Berger" , sound: path_narration+'Berger-E4/Berger-E4-001mp3'},
        {character : "NarraChara", Txt : "E4Narra2", name : "Narrateur" , sound: path_narration+'Narrateur-E4/narrateurE4-002.mp3'},
        {character : "FulettuChara", Txt : "E4Fulettu", name : "Fulettu" , sound: path_narration+'Fulettu-E4/Fulettu-E4-001mp3'},
        {character : "FuletounChara", Txt : "E4Fuletoun",name : "Fuletoun" , sound: path_narration+'Fuletoun-E4/Fuletoun-E4-001mp3'},
        {character : "FulettuChara", Txt : "E4Fulettu2", name : "Fuletu" , sound: path_narration+'Fulettu-E4/Fulettu-E4-002mp3'},
        {character : "FuletounChara", Txt : "E4Fuletoun2",name : "Fuletoun" , sound: path_narration+'Fuletoun-E4/Fuletoun-E4-002mp3'},
        {character : "NarraChara", Txt : "E4Narra3",name : "Narrateur" , sound: path_narration+'Narrateur-E4/narrateurE4-003.mp3'},
        {character : "FulettuChara", Txt : "E4Fulettu3", name : "Fuletu" , sound: path_narration+'Fulettu-E4/Fulettu-E4-003mp3'},
        {character : "FuletounChara", Txt : "E4Fuletoun3",name : "Fuletoun", sound: path_narration+'Fuletoun-E4/Fuletoun-E4-003mp3'},
        {character : "NarraChara", Txt : "E4Narra4",name : "Narrateur" , sound: path_narration+'Narrateur-E4/narrateurE4-004.mp3'},
        {character : "FulettuChara", Txt : "E4Fulettu4", name : "Fuletu" , sound: path_narration+'Fulettu-E4/Fulettu-E4-004mp3'},
        {character : "FuletounChara", Txt : "E4Fuletoun4",name : "Fuletoun" , sound: path_narration+'Fuletoun-E4/Fuletoun-E4-004mp3'},
        {character : "FulettuChara", Txt : "E4Fulettu5", name : "Fuletu" , sound: path_narration+'Fulettu-E4/Fulettu-E4-005mp3'},
        {character : "FuletounChara", Txt : "E4Fuletoun5",name : "Fuletoun", sound: path_narration+'Fuletoun-E4/Fuletoun-E4-005mp3'},
        {character:  "FulettuChara", Txt:"E4FulettuEC", name : "Fulettu", 
            choices: [
                { text: "E4EnigmeC1"},
                { text: "E4EnigmeC2", action : () => {answear1 = false;}}
            ]
        },
        {character: "FulettuChara", Txt:"E4FulettuEC", name: "Fulettu", sound: path_narration+'Fulettu-E4/Fulettu-E4-007.mp3',
            choices: [
                { text: "E4EnigmeT1", action : () => {answear2 = false;} },
                { text: "E4EnigmeT2"},
                { text: "E4EnigmeT3", action : () => {answear1 = false;} }
            ]

        }
    ]

    refreshPage();
    
    //Play the steps
    playSteps(steps, 0 , true , 2);

    if(steps.choices.answear1||steps.choices.answear2){
        steps =[
            {character : "FulettuChara", Txt : "E4FulettuTrue", name : "E4FulettuTrue"},
            {character : "FuletounChara", Txt : "E4FouletounTrue", name : "E4FouletounTrue" , sound: path_narration+'Fuletoun-E4/Fuletoun-E4-006mp3'},
            {character : "FulettuChara", Txt : "E4FouletounTrue2", name : "E4FouletounTrue2"},
            {character : "NarraChara", Txt : "E4NarrateurTrue" , sound: path_narration+'narrateur-E4/narrateurE4-005.mp3'},
        ]
        playSteps(steps, 0 , true , 2);
        
    }else{
        steps =[
            {character : "FulettuChara", Txt : "E4FulettuFalse", name : "E4FulettuFalse"},
            {character : "FuletounChara", Txt : "E4FouletounFalse", name : "E4FouletounFalse" , sound: path_narration+'Fuletoun-E4/Fuletoun-E4-007mp3'},
            {character : "FulettuChara", Txt : "E4FulettuFalse2", name : "E4FulettuFalse2"},
            {character : "FuletounChara", Txt : "E4FouletounFalse2", name : "E4FouletounFalse2", sound: path_narration+'Fuletoun-E4/Fuletoun-E4-008mp3'},
            {character : "FulettuChara", Txt : "E4FulettuFalse3", name : "E4FulettuFalse3"},
            {character : "FuletounChara", Txt : "E4FouletounFalse3", name : "E4FouletounFalse3" , sound: path_narration+'Fuletoun-E4/Fuletoun-E4-009mp3'},
            {character : "FulettuChara", Txt : "E4FulettuFalse4", name : "E4FulettuFalse4"},
            {nextLvl: () => { nextScreen("5", "5"); window.location.reload(false); }}
        ]
        
    }
    
    // Play the steps
    playSteps(steps , 0 , true , 2);
}