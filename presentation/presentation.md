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

Beginnen met TypeScript (install typescript etc.)

tsc --init
Eerste opdracht met tsc, in node / browser wat je wil. 
(evt. ts-node nogmaals noemen?)

Uitstapje naar de tsconfig.json, met compiler opties

Uitstapje naar geleverde types. HTMLElement of fs

opdracht?!

Vervolg van de types die Martin heeft voorbereid. Groeperen?

Opdracht ideeën:
- **Per categorie uit de README een opdracht**
- Een JS bestand refactoren naar TS
- Misschien een bestaande (of neppe) JS library voorzien een type definition (zonder sourcecode te editen)