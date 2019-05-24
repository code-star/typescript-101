## TypeScript 101
Getting started with TypeScript for Javascript developers.

### Structure

#### What is TypeScript
* Superset of Javascript
    * Adds types to Javascript
    * ESNext features
* Open source; created and maintained by Microsoft


#### Why would you use it
* Scalability
* Stricter programming
* Less chance to write errors and bugs
* Easier to refactor

#### Support & Usages
* Angular
* Libraries (such as RxJS)
* Babel, ESLint
* Great support for other frameworks as well (React, Vue)
* `ts-node` for running directly in Node

#### Example JS (1)
```js
const person = { name: 'Henk', age: 22 }

function multiplyAge(person) {
    return person.age * 2
}

multiplyAge(person) // what would be the result?
```

#### Example JS (2)
```js
const person = { name: 'Piet' }

function multiplyAge(person) {
    return person.age * 2
}

multiplyAge(person) // what would be the result?
```

#### Example TS
```ts
type Person = {
    name: string
    age?: number
}

const person: Person = {
    name: 'Henk'
}

function multiplyAge(person: Person) {
    return person.age * 2 // Error! 'age' is possibly undefined
}
```

#### The language
* Basic types
  - String
    ```ts
    const myName: string = 'Martin'
    const myLastName: string = 123 // Error! Type '123' is not assignable to type 'string'.
    ```
  - Number
    ```ts
    const myAge: number = 28
    const daysLeftThisYear: number = '100' // Error! Type '"100"' is not assignable to type 'number'.
    ```
  - Boolean
    ```ts
    const hasChildren: boolean = true
    const amountOfChildren: boolean = 22 // Error! Type '22' is not assignable to type 'boolean'.
    ```
  - Array
    ```ts
    const days: string[] = [ 'Monday', 'Tuesday', 'Wednesday' ]
    const years: number[] = [ 2018, 2019, 2020 ]

    const dates: number[] = [ 1, 2, '3' ] // Error! Type 'string' is not assignable to type 'number'.
    const dates2: Array<string | number> = [ 1, 2, '3' ] // Works!
    ```
  - Tuple
    ```ts
    const tuple: [ string, number ] = [ 'age', 28 ]
    const otherTuple: [ string, string ] = [ 'a', 'b', 'c' ] // Error! Types of property 'length' are incompatible. Type '3' is not assignable to type '2'.
    ```
  - Enum
    ```ts
    enum ResponseCode {
        OK = 200,
        NOT_FOUND = 404
    }

    function getResponse(isOk: boolean): number {
        if (isOk) {
            return ResponseCode.OK
        }

        return ResponseCode.NOT_FOUND
    }
    ```
  - Any
    
    Avoid where possible! Removes your typesafety!
    ```ts
    const myAge: number = 28
    const yourAge: string = myAge // Error! Type 'number' is not assignable to type 'string'.
    const yourAge: any = myAge // Works!
    ```
  - Void
    ```ts
    function getNumber(): number {
        return 123
    }

    function getNothing(): void {
        console.log('test')
    }

    function shouldNotGetSomething(): void {
        return 'abc' // Error! Type '"abc"' is not assignable to type 'void'.
    }
    ```
  - Null / Undefined
    ```ts
        const u: undefined = undefined;
        const n: null = null;
    ```
  - Never
    
    Should -never- happen
    ```ts
    function error(message: string): never {
        throw new Error(message)
    }

    function isHenk(name: 'Henk' | 'Piet') {
        switch(name) {
            case 'Henk':
                return true
            case 'Piet':
                return false
            default:
                const exhaustive: never = name
                throw exhaustive
        }
    }
    ```
  - Object
    ```ts
    const myObject: object = { name: 'Henk' }
    const notAnObject: object = 1 // Error! Type '1' is not assignable to type 'object'.
    ```
  - Record
    
    Looks like an object but is more limited.
    ```ts
    const myRecord: Record<string, number> = { age: 22 }
    const myOtherRecord: Record<string, number[]> = { ages: [ 22, 65 ] }
    const faultyRecord: Record<boolean, string> = ... // Error! Type 'boolean' does not satisfy the constraint 'string | number | symbol'.
    ```

* Interfaces & Type aliases
  - Interfaces
    ```ts
    interface Person {
        name: string
        age: number
    }
    ```
  - Readonly
    ```ts
    interface Person {
        readonly name: string
        age: number
    }

    const person: Person = { name: 'Henk', age: 22 }
    person.name = 'Piet' // Error! Cannot assign to 'name' because it is a read-only property.
    ```

  - Extending
    ```ts
    interface Person {
      name: string
      age: number
    }

    interface ExtendedPerson extends Person {
      birthDate: Date
      gender: 'male' | 'female'
    }
    ```

  - Overriding
    ```ts
    interface File {
      name: string
      icon: string
    }

    interface WordDocument extends File {
      icon: 'word'
    }
    ```
    
  - Function types
    ```ts
    type NumberFunction = (input: number) => number

    const generateNumber: NumberFunction = (input) => {
        return input + 1
    }
    ```

    With function types; type declarations of arguments and return types are not required as shown above.

  - Indexable types
    ```ts
    interface Mapping {
      [index: string]: string
    }
    ```

  - Class types
    ```ts
    interface IPerson {
      name: string
      age: number
    }

    class Person implements IPerson {
      public name: 'Henk'
      public age: 22
    }
    ```
  - Type aliases
    
    Almost the same as `interface` but;
    * Is not extendable
    * Is not overridable
    * Different syntax
    ```ts
    type Person = {
        name: string
        age: number
    }
    ```
  - Arrays
    ```ts
    type Person = {
      name: string
    }

    const persons: Person[] = [{ name: 'Henk' }, { name: 'Marie' }]

    interface IPerson {
      name: string
    }

    const persons: IPerson[] = [{ name: 'Henk' }, { name: 'Marie' }]

    type Persons = Person[]
    const persons: Persons = [ ... ]
    ```

* Classes
  - Basics
    ```ts
    class DroneController {
      isActive: boolean

      constructor(isActive: boolean) {
        this.isActive = isActive
      }

      getIsActive(): boolean {
        return this.isActive
      }
    }

    const drone = new DroneController(true)
    ```

  - Inheritance (implements)
    ```ts
    interface IDroneController {
      isActive: boolean
    }

    class DroneController implements IDroneController {
      ...
    }
    ```

  - Inheritance (extends)
    ```ts
    class Controller {
      isActive: boolean

      constructor(isActive: boolean) {
        this.isActive = isActive
      }

      getIsActive(): boolean {
        return this.isActive
      }
    }

    class DroneController extends Controller {
      altitude: number

      constructor(isActive: boolean, altitude: number) {
        super(isActive)
        this.altitude = altitude
      }

      getState() {
        return {
          isActive: super.getIsActive(),
          altitude: this.altitude
        }
      }
    }

    const drone = new DroneController(true, 0)
    ```

  - Public
    ```ts
    class DroneController {
      public isActive: boolean

      constructor(isActive: boolean) {
        this.isActive = isActive
      }
    }

    new DroneController(false).isActive // Works!
    ```

  - Private
    ```ts
    class DroneController {
      private isActive: boolean

      constructor(isActive: boolean) {
        this.isActive = isActive
      }

      // this will only work within the class
      private getIsActive(): boolean {
        return this.isActive
      }

      // because this is a public method we can use it from the outside
      public getIsActiveAsPublic(): boolean {
        return this.isActive
      }
    }

    const controller = new DroneController(false)

    controller.isActive // Error! Property 'isActive' is private and only accessible within class 'DroneController'.

    controller.getIsActive() // Error! Property 'getIsActive' is private and only accessible within class 'DroneController'.

    controller.getIsActiveAsPublic() // Works!
    ```
  - Protected
    ```ts
    class Controller {
      protected isActive: boolean

      constructor(isActive: boolean) {
        this.isActive = isActive
      }
    }

    class DroneController extends Controller {
      public altitude: number

      constructor(isActive: boolean, altitude: number) {
        super(isActive)
        this.altitude = altitude
      }

      getState() {
        return {
          // we can access the protected isActive here because this class derives from Controller
          isActive: this.isActive,
          altitude: this.altitude
        }
      }
    }

    const controller = new DroneController(false, 1)
    
    controller.altitude // Works! Because it's a public property

    controller.isActive // Error! Property 'isActive' is protected and only accessible within class 'Controller' and its subclasses.
    ```
  - Readonly
    ```ts
    class Controller {
      readonly isActive: boolean

      constructor(isActive: boolean) {
        // we can only assign readonlys in the constructor
        this.isActive = isActive
      }

      someFunction() {
        this.isActive = false // Error! Cannot assign to 'isActive' because it is a read-only property.
      }
    }

    const controller = new Controller(true)
    controller.isActive = // Error! Cannot assign to 'isActive' because it is a read-only 
    ```

  - Getters / Setters
    ```ts
    // Meh
    class Controller {
      isActive: boolean
    }

    const controller = new Controller()
    controller.isActive = true

    const controllerState = controller.isActive // true
    ```

    ```ts
    // Yeah!
    class Controller {
      private _isActive: boolean

      get isActive(): boolean {
        return this._isActive
      }

      set isActive(isActive: boolean) {
        this._isActive = isActive
      }
    }

    const controller = new Controller()
    controller.isActive = false

    const controllerState = controller.isActive // false
    ```

    Getters and Setters gives us more control about getting and setting the state.

  - Static
    ```ts
    class Controller {
      static type: string = 'drone'

      static blieb() {
        // make some noise
      }
    }

    const controllerType = Controller.type // 'drone'
    
    Controller.blieb() // makes noise!
    ```

    Static properties or methods are available without constructing the class.

  - Abstract
    ```ts
    abstract class Controller {
      private isActive: boolean

      constructor(isActive: boolean) {
        this.isActive = isActive
      }

      protected abstract blieb(): void // must be implemented in derived classes
    }

    class DroneController extends Controller {
      constructor(isActive: boolean) {
        super(isActive)
      }

      protected blieb() {
        MOTORS.zoom()
      }
    }
    ```

  - Shorthands for private and public
    ```ts
    class Controller {
      private isActive: boolean
      public type: string

      constructor(isActive: boolean, type: string) {
        this.isActive = isActive
        this.type = type
      }
    }

    const controller = new Controller(true, 'drone')
    controller.type // 'drone'
    ```

    Shorter version could be as follows;

    ```ts
    class Controller {
      constructor(private isActive: boolean, public type: string) {}
    }

    const controller = new Controller(true, 'drone')
    controller.type // 'drone'
    ```

    When declaring the parameters of the contructor `private` or `public` they will we set automatically.

* Functions
  - Function types
  - Optional / default parameters
  - Rest parameters
  - This & Arrow functions
  - Overloads

* Generics
  - Generic types
  - Generic classes
  - Generic constraints

#### The compiler
...

-- refer to playground and show compiled JS result

* tsconfig.json
  - Lib
  - Strict
  - OutFile & Triple-slash references
  - 

Resources
* [TypeScript docs](https://www.typescriptlang.org/docs/home.html)
* [TypeScript playground](https://www.typescriptlang.org/play/index.html)
* [Interfaces vs Type Aliases](https://medium.com/@martin_hotell/interface-vs-type-alias-in-typescript-2-7-2a8f1777af4c)
