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
  - Function types
  - Indexable types
  - Class types
  
  - Type aliases
    
    Almost the same as `interface` but;
    * Is not extendable
    * 
    ```ts
    type Person = {
        name: string
        age: number
    }
    ```
  - Arrays -> Type[] Interface[]

* Classes
  - Inheritance (implements, extends)
  - Public, Private, Protected
  - Readonly
  - Getters / Setters
  - Static
  - Abstract

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

* tsconfig.json
  - Lib
  - Strict
  - OutFile & Triple-slash references
  - 

Resources
* [TypeScript docs](https://www.typescriptlang.org/docs/home.html)
* [TypeScript playground](https://www.typescriptlang.org/play/index.html)
* [Interfaces vs Type Aliases](https://medium.com/@martin_hotell/interface-vs-type-alias-in-typescript-2-7-2a8f1777af4c)
