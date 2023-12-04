import { characterService } from "../services/CharacterService.js"



export class CharactersController {
    constructor() {
        console.log('loaded character controller')
    }

    testFunction() {
        console.log('Test Success')
    }

    hurtCharacter(characterName) {
        console.log('ouch!', characterName)
    }
}

characterService.hurtCharacter()