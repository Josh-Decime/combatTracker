


// class character {
//  name = 'Wizzy Hattington'
//  class = 'Wizard'
//  currentHp = 10
//  maxHp = 10
//  isDead = false

// //  you can store functionality inside class
//  greeting(){
//     console.log('Im alive')
//  }
// }

// builds the character so you can access them
// let Wizzy = new CharacterData()


class character {
    name
    role
    currentHp
    maxHp
    isDead

    // you can use a constructor to build in characters
    constructor(setName, setRole, setHealth) {
        console.log('building character', setName, setRole, setHealth)
        // this makes the object look at itself
        this.name = setName
        this.role = setRole
        // could add multiplier on these, example setHealth *1000
        this.maxHp = setHealth
        this.currentHp = this.maxHp
        this.isDead = false
        this.greeting()
    }

    //  you can store functionality inside class
    greeting() {
        console.log(`Hello, my name is ${this.name}`)
    }
}

let Wizzy = new character('Wizzy Hattington', 'Wizard', 10)