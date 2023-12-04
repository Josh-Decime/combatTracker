import { character } from './models/characters.js'
import { EventEmitter } from './utils/EventEmitter.js'
import { createObservableProxy } from './utils/ObservableProxy.js'


class ObservableAppState extends EventEmitter {

  /**@type {import('./models/Example.js').Example[]} */
  examples = []

  // NOTE ours

  character = [
    new character('Wizzy Hattington', 'wizard', 10),
    new character('stephen', 'fighter', 25),
    new character('Jibber Jab', 'Rogue', 15),
    new character('Tom', 'warlock', 15),
  ]

















  // 

}
export const AppState = createObservableProxy(new ObservableAppState())
console.warn(AppState) //add this to see the appstate