import { CharactersController } from './controllers/CharacterController.js';
import { router } from './router-config.js';

class App {

  router = router

  charactersController = new CharactersController()
}


const app = new App()
// @ts-ignore
window.app = app
