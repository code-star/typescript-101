<img src="assets/react.png" width="128" height="128" style="border: 0; background: none;"/>

### React + TypeScript <!--.element: class="fragment" -->

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

### What is React?
Anyone?

---

> React is a declarative, efficient, and flexible JavaScript library for building user interfaces. It lets you compose complex UIs from small and isolated pieces of code called “components”.

---

- Alternative for Angular / Vue / etc etc
- Basic and compact
- Scales for bigger applications as well

---

### What does it look like?

```jsx
const App = () => (
  <div>
    My App
  </div>
)
```

---

### Use your component

```jsx
<App />
```

---

- XML-like syntax
- Like a regular function
- Returns JSX / TSX

---

### What is JSX?

- Syntax extention to JavaScript
- Like a template language, but for client side
- Produces React `Nodes`

---

### JavaScript + Markup

Use regular JavaScript between `{` ... `}`:

```jsx
const myVariable = 'Some value'
const App = () => (
  <div>
    My variable uppercase: {myVariable.toUpperCase()}
  </div>
)
```

---

### Conditionals

```jsx
const isEnabled = true
const App = () => (
  <div>
    { isEnabled ? 'Enabled' : 'Disabled' }
  </div>
)
```

---

### Native element properties

```jsx
const App = () => (
  <div 
    style={{ textTransform: 'uppercase' }}
    className={'myClassName'}>
      ...
  </div>
)
```

---

### Iterations

```jsx
const animals = ['cat', 'dog']
const App = () => (
  <div>
      {
        animals.map((animal, index) => (
          <div key={index}>{animal}</div>
        ))
      }
  </div>
)
```

---

### Additional benefits

- Prevents injection attacks
- Composable using `children`
- You can use TypeScript instead of JavaScript

---

### JSX + TypeScript = TSX

```jsx
const animals: string[] = ['cat', 'dog']
const App = () => (
  <div>
      {
        animals.map((animal: string, index: number) => (
          <div key={index}>{animal}</div>
        ))
      }
  </div>
)
```

---

### Benefits of TSX

- Typesafety inside your views
- Definitions of your `props` and `state`
- No need of `PropTypes`

---

### ⚠️ TSX only from now on!

---

### Props

Pass information to your components:

```jsx
<App title={'App title'} />
```

---

Or using a variable:

```jsx
<App title={appTitle} />
```

---

Access Props inside the receiving component:

```jsx
const App = props => (
  <div>
    {props.title}
  </div>
)
```

---

### Typesafe Props

Define the type of your props:

```ts
type AppProps = {
  title: string
}
```

---

And use inside your component:

```jsx
const App: FC<AppProps> = props => (
  <div>
    <div>{props.title}</div>
    <div>{props.username}</div> /* Error! */
  </div>
)
```

`FC === FunctionComponent`

More about this later!

---

### Functions as prop

```ts
type AppProps = {
  onLogin: () => void
}
```

```jsx
const App: FC<AppProps> = props => (
  <div>
    <button onClick={props.onLogin()}>Login!</div>
  </div>
)
```

---

```jsx
```

---

Todo:

create-react-app