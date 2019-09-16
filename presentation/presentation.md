<img src="assets/ts.png" width="128" height="128"/>

### TypeScript 101 <!--.element: class="fragment" -->

---

<div style="float: left; width: 45%;">
  <img src="assets/bjorn.jpg" width="100" style="border-radius:100%; display: inline-flex;">
  <h1 style="font-size: 0.9em;">Bjorn Schijff</h1>
  <small style="display: inline-flex;">Frontend Software Engineer @ Politie</small>
  <img src="assets/codestar.svg" height="30" style="border: 0; background-color: transparent;"><br /><br />
   <small>@Bjeaurn<br /> bjorn.schijff@ordina.nl</small>
</div>
<div style="float: right; width: 45%;">
  <img src="assets/martin.jpg" width="100" style="border-radius:100%; display: inline-flex;">
  <h1 style="font-size: 0.9em;">Martin van Dam</h1>
<small>Frontend Software Engineer @ BZK</small>
  <img src="assets/codestar.svg" height="30" style="border: 0; background-color: transparent; position: relative" /><br /
  <small>@MrtnvDam<br />martin.van.dam@ordina.nl</small>
</div>

---

### What is TypeScript?
Anyone?

----

* Superset of JavaScript
* Adds types to JavaScript
* Compiles back to JavaScript
* ESNext features
* Open source, maintained by Microsoft

---

### Why would you use TypeScript?

----

* Scalability
* Stricter programming
* Readability
* Less chance to write errors and bugs
* Easier to refactor

---

### Using TypeScript

* Angular
* Libraries such as RxJS
* Babel, ESLint
* Great support for other frameworks as well (React, Vue)
* ts-node for running directly in Node
* And many more!

---

### Typescript is your friend

* The compiler is there to help you!
* The errors can be a bit cryptic, but are usually not complex.

---

Let's look at the following scenario:

```js
// JavaScript ES6
const person = { name: 'Henk', age: 22 };
const person2 = { name: 'Piet' };

function multiplyAge(person) {
    return person.age * 2;
}

multiplyAge(person); // what would be the result?
multiplyAge(person2); // And here?
```

----

```ts
// TypeScript
type Person = {
    name: string
    age?: number
}

const person: Person = {
    name: 'Henk'
}

function multiplyAge(person: Person) {
    return person.age * 2 
    // Error! 'age' is possibly undefined
}
```
----

<img src="assets/error-1.png" />

This is there to help you!

----

### So what are the advantages here?

----

* **Readability** — Clear intention what the function expects.
* **Strictness** — You cannot do certain things until the compiler is certain something is possible.
* **Safety** — You can be certain when the compiler agrees, that you will not see anything weird in the runtime.

---

## ⚠️ Participation alert ⚠️

### Please join us from here on out!

---

Let's install TypeScript!

```sh
# npm
npm install typescript

# yarn
yarn add typescript
```

```sh
mkdir typescript-101
cd typescript-101
tsc --init
```

----

### tsc --init
- Creates a `tsconfig.json`
- Sets up the default configuration for your TypeScript project

----

```ts
{
  "compilerOptions": {
    /* Basic Options */
    "target": "es5",                          /* Specify ECMAScript target version: 'ES3' (default), 'ES5', 'ES2015', 'ES2016', 'ES2017', 'ES2018', 'ES2019' or 'ESNEXT'. */
    "module": "commonjs",                     /* Specify module code generation: 'none', 'commonjs', 'amd', 'system', 'umd', 'es2015', or 'ESNext'. */
    // "lib": ["dom"],                             /* Specify library files to be included in the compilation. */
    // "declaration": true,                   /* Generates corresponding '.d.ts' file. */
    // "declarationMap": true,                /* Generates a sourcemap for each corresponding '.d.ts' file. */
    // "sourceMap": true,                     /* Generates corresponding '.map' file. */
    // "outFile": "./",                       /* Concatenate and emit output to single file. */
    // "outDir": "./",                        /* Redirect output structure to the directory. */
    // "rootDir": "./",                       /* Specify the root directory of input files. Use to control the output directory structure with --outDir. */
    /* Strict Type-Checking Options */
    "strict": true,                           /* Enable all strict type-checking options. */
  }
}

```

----

### Writing your first TypeScript

```sh
touch index.ts 
code .        # for VSCode users
```

```ts
console.log('Hello TypeScript!');
```

```sh
tsc index.ts
node index.js

# or if you want with ts-node (npm install ts-node)
npx ts-node index.ts
```

```html
touch index.html

<!doctype hmtl>
<html>
<head>
  <script src="index.js"></script>
</head>
</html>
```

---

## TSLint or ESLint
Normally we would add a linter here, but with the current roadmap it's uncertain which one is the way forward.

You use a linter to enforce or disable certain "patterns" of coding. This enforces a team coding standard.<!--.element: class="fragment" -->

For advanced sessions or private studying. 😉<!--.element: class="fragment" -->

(We use it to disable semicolons, etc.)<!--.element: class="fragment" -->

---

### Basic types

----

### Types in Javascript

```js
typeof 'some string' // -> string
typeof 123 // -> number
typeof true // -> boolean
typeof undefined // -> undefined
typeof { key: 'value' } // -> object
typeof ['array', 'values'] // -> object
typeof function(){} // -> function
```
Types available in Javascript: `string`, `number`, `boolean`, `undefined`, `object`, `function`.

Basic typechecking is done in runtime.

----

### But we can do much better than this!

TypeScript offers a lot more options to make your code typesafe.

Typechecking is done during compile time and is removed from the compilation result.

----

- String
```ts
const myName: string = 'Martin'
const myLastName: string = 123 // Error! Type '123' is not assignable to type 'string'.
```

- Number
```ts
const myAge: number = 29
const daysLeftThisYear: number = '100' // Error! Type '"100"' is not assignable to type 'number'.
```

----

- String Literal
```ts
let myType: 'A' | 'B' = 'A'
myType = 'B' // Works!
myType = 'Z' // Error! Type '"Z"' is not assignable to type '"A" | "B"'.
```

- Number Literal
```ts
let myType: 1 | 2 = 1
myType = 2 // Works!
myType = 9 // Error! Type '9' is not assignable to type '1 | 2'.
```

----

```ts
export type TextFileTypes = 'pdf' | 'doc' | 'md'

function acceptTextFile(fileName: string, fileType: TextFileTypes) {
    // Do things
}

acceptTextFile('bla.jpg', 'jpg') // Error!
```

----

- Boolean

```ts
const hasChildren: boolean = true
const amountOfChildren: boolean = 22 // Error! Type '22' is not assignable to type 'boolean'.
```

- Null / Undefined
  
```ts
const u: undefined = undefined;
const n: null = null;
```

- Any

Avoid where possible! Removes your typesafety!

```ts
const myAge: number = 28
const yourAge: string = myAge // Error! Type 'number' is not assignable to type 'string'.
const yourAge: any = myAge // Works!
```

----

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

----

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

----

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

----

- Never
    
Should -never- happen
```ts
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

The compiler will let you know when you forgot adding a `case` for an expected value.

---

### Exercises basic types
Copy `exercises/1_js_toTypescript.js` and turn it into a Typescript file. 

Make it as typesafe as you can!

---

### `const` vs `let`

```ts
let myVar = 'my value'
// What will be the type of `myVar`?

const myOtherVar = 'my other value'
// What will be the type of `myOtherVar`?
```

---

### Interfaces & Type Aliases

 ```ts
    interface Person {
        name: string
        age: number
    }
```

Mainly used to define the expected shape of data coming from the outside.

----

 Optionals

  ```ts
  interface Person {
    name: string
    age?: number // this is optional
  }
  ```

Handy when a value is sometimes not available

----

Extending

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

----

Overriding

```ts
interface File {
  name: string
  icon: string
}

interface WordDocument extends File {
  icon: 'word'
}
```

This example narrows the `icon` `type` in a `WordDocument` object.

----

Readonly 

```ts
interface Person {
    readonly name: string
    age: number
}

const person: Person = { name: 'Henk', age: 22 }
person.name = 'Piet' // Error! Cannot assign to 'name' because it is a read-only property.
```

Doesn't actually enforce immutability, but makes sure that on compile time; we're not reassigning any readonly values.

---

Type aliases

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

----

```ts
export type FileId = string
export type FileTypes = 'pdf' | 'doc' | 'txt' | 'md'

export interface File {
  id: FileId
  type: FileTypes
  name: string
  // etc.
}
```

---

### Exercise 2
Take `exercises/2_json_to_types.ts`, create interfaces and types for the data. 

Make it as typesafe as you can of course!

---

### Classes

Comparable to what you see in Java, PHP, etc.

----

In ES5

```js
var MyClass = /** @class */ (function () {
    function MyClass(name) {
        this.name = name;
    }
    return MyClass;
}());
```

----

ES6 / ES2017

```js
class MyClass {
  constructor(name) {
    this.name = name
  }
}
```

----

### Auto assignment

```ts
class MyClass {
  constructor(public name: string) {}
}
```

```js
// Transpiles to
class MyClass {
    constructor(name) {
        this.name = name; // We get this assignment for free!
    }
}

```
<!--.element: class="fragment" -->

----

### Access modifiers

`private` vs. `protected` vs. `public`

Makes parts of a class accessible and visible to external implementation.

```ts
class Controller {
  constructor(private isActive: boolean) {}

  getIsActive() { // public is default on methods.
    return this.isActive
  }

  protected protectedIsActive {
    return this.getIsActive()
  }
}

const controller = new Controller(false)
controller.protectedIsActive()
controller.isActive 
// Error! Property 'isActive' is private and only accessible within class 'DroneController'.
```

----

```ts
class User {
  constructor(private id: string, public name: string) {}
}
```

```ts
const me = new User('12345-abcd', 'my.user.name')
console.log(me.id) 
// ERROR: Property 'id' is private and only accessible within class 'User'.
```

----

### Inheritance (implements)

```ts
interface IDroneController {
  isActive: boolean
}

class DroneController implements IDroneController {
  // ERROR:
  // Class 'DroneController' incorrectly implements interface 'IDroneController'.
  // Property 'isActive' is missing in type 'DroneController' but required in type
  // 'IDroneController'.
}
```

Useful when you have multiple implementations, but they need to adhere to a standard. Compiler prevents you from forgetting a method or variable. 

----

### Inheritence (extends)

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

Useful to create classes with the same basis, to prevent duplicate code and enforcing business rules.

----

### Inheritence (Abstract)

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

----

### Readonly
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

----

### Getters and Setters

```ts
// Meh
class Controller {
  isActive: boolean
}

const controller = new Controller()
controller.isActive = true

const controllerState = controller.isActive // true
```

----

### Getters and Setters

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
controller.isActive = false // Calls the `isActive()` function with set in front.

const controllerState = controller.isActive // false
```

Getters and Setters gives us more control about getting and setting state.

----

### Static
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

---

### Functions

---

[ ] Uitstapje naar geleverde types. HTMLElement of fs

Vervolg van de types die Martin heeft voorbereid. Groeperen?

Aandachtspuntjes:
- Imports / Exports

Opdracht ideeën:
- **Per categorie uit de README een opdracht**
- Een JS bestand refactoren naar TS
- Misschien een bestaande (of neppe) JS library voorzien een type definition (zonder sourcecode te editen)

---

** JS file bevat een bug, schrijf om naar TypeScript en fix de bug. (Compiler zou je moeten helpen als je het typesafe genoeg doet.)

## Opdrachten
- Schrijf een interface voor een given object
- Schrijf een function type voor een given function
- Refactor bestaande  (untyped) TS naar safe TS.
- Javascript to typesafe TS
- Spot and fix the bug
- Refactor TS naar betere TS? ipv bijvoorbeeld het specifieker maken van types: `'value1' | 'value2' ` ipv `string`
- 