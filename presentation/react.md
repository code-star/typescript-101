<img src="assets/react.png" width="128" height="128" style="border: 0; background: none;"/>

### React + TypeScript <!--.element: class="fragment" -->

---

<div>
  <img src="assets/martin.jpg" width="100" style="border-radius:100%; display: inline-flex;">
  <h1 style="font-size: 0.9em;">Martin van Dam</h1>
<small style="display: inline-flex;">Frontend Software Engineer @ BZK</small>
  <img src="assets/codestar.svg" height="30" style="border: 0; background-color: transparent; position: relative" /><br />
  <small>@MrtnvDam<br />martin.van.dam@ordina.nl</small>
</div>

---

### Expectation management

- Interactive + live coding exercises
- React + TypeScript
- TSX
- States, Effects, Props
- Component composition
- Containers vs. Presentational components

---

### ⚠️ Disclaimer

- React v16.8+ ️️️️️☣️
- Hooks instead of Classes 🏴‍☠️
- TSX 💯
- StackBlitz 🚀
- Contains some inline styling 🙀 YUK! 🤮

---

### What are we going to build?

☣️ ➡️ [⏱](https://typescript-react-stopwatch-result.stackblitz.io)

---

### ⚠️ But first: What is React?
Anyone?

---

> React is a declarative, efficient, and flexible JavaScript library for building user interfaces. It lets you compose complex UIs from small and isolated pieces of code called “components”.

---

- Alternative for Angular / Vue / etc etc
- Basic and compact
- Scales for bigger applications as well
- Works nicely with State Management solutions (Redux, MobX, GraphQL)

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

### Markup + JavaScript

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

### Native element properties

```jsx
const buttonDisabled = true
const App = () => (
  <input
    type={'button'}
    value={'Click me!'}
    disabled={buttonDisabled} />
)
```

---

### Styling using CSS stylesheet

Using normal CSS

```jsx
import classes from './styles.css'

const App = () => (
  <div className={classes.myClassName}>
      ...
  </div>
)
```

---

### Styling using inline styles

Using CSS-in-JS

```jsx
const App = () => (
  <div style={{
      fontSize: '18px',
      backgroundColor: 'green'
    }}>
      ...
  </div>
)
```

<small>(not recommended, but easy to start with)</small>

---

### Lets code!

Start your project here! ️

️➡️ https://stackblitz.com/fork/react-ts


---

### Exercise 1

- Time
- Start / stop button
- New lap button
<center>
  <img src="assets/stopwatch.png" height="100" style="text-align: center" />
</center>

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

### Additional JSX/TSX benefits

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

### State

- Store information inside your component
- Useful for forms, loading state and much more

---

### State example 0

```jsx
const App: FC = () => {
  const [username, setUsername] = useState('')
  return (
    <div>
      <input
        type={'text'}
        value={username}
        onChange={event => setUsername(event.target.value)}
      />
    </div>
  )
}
```

---

### State example 1

```jsx
const App = () => {
  const [isLoading, setIsLoading] = useState(true)

  setTimeout(() => setIsLoading(false), 5000)

  if (isLoading) {
    return <div>Loading...</div>
  }
  return <div>Loading complete!</div>
}
```

---

### State example 2

```jsx
const App = () => {
  const [user, setUser] = useState<User | false>(false)

  fetchUser()
    .then((user: User) => setUser(user))

  if (!user) {
    return <div>Loading user...</div>
  }
  return <div>Username: {user.name}</div>
}
```

---

### Exercise 2

Setup state:

- The seconds that have passed,
- The state of the stopwatch: started / stopped,
- The created laps (hint: this will be an array of numbers)

```ts

const [prop, setProp] = useState( ... )


```

---

### Exercise 3

Update the state:

- When the start/stop button is clicked
- When the New lap button is clicked
- The text of the start/stop button should depend on the state

---

### Effects

- Perform side effects
- Use the component lifecycle

---

### On mount

```jsx
const App = () => {

  useEffect(() => {
    alert('The component is mounted!')
  }, [])

  return <div>...</div>
}
```

---

### On props / state update

```jsx
const App = () => {

  useEffect(() => {
    alert('The props or state has changed!')
  })

  return <div>...</div>
}
```
---

### On specific prop / state update

```jsx
const App = props => {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    alert('The title prop or isLoading state has changed!')
  }, [props.title, isLoading])

  return <div>...</div>
}
```

---

### What happens here?

```jsx
let timer = 0

const App = () => {

  useEffect(() => {
    timer = setInterval(() => console.log('tick'), 1000)
  }, [])

  return <div>...</div>
}
```

---

### Effect with cleanup

```jsx
let timer = 0

const App = () => {

  useEffect(() => {
    timer = setInterval(() => console.log('tick'), 1000)

    return function cleanup() {
      clearInterval(timer)
    }
  }, [])

  return <div>...</div>
}
```

---

### Exercise 4

When the stopwatch start button is clicked:

- Start the timer and update the `seconds` state every second

Hint: use `setInterval` here

---

### Exercise 5

When the stopwatch stop button is clicked:

- Stop the timer

Hint: use `clearInterval` here

---

### Exercise 6

When the New lap button is clicked:

- Add the seconds that are currently in state to the laps state
- Reset the timer to 0 seconds

---

### Exercise 7

- Covert the seconds in state to minutes and seconds and display it on the screen

  Hint: `Math.floor(seconds / 60)` && `seconds % 60`

- Show all the laps on the screen

  Hint: use `.map()` here.

<center>
  <img src="assets/stopwatch2.png" height="150" style="text-align: center" />
</center>

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

### But wait... what is props.?

### I'm missing types here!

---

### Typesafe Props

Define the type of your props:

```ts
type AppProps = {
  title: string
  isloading: boolean
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

### Functions / callbacks as prop

```ts
type AppProps = {
  onLogin: () => void
}
```

```jsx
const App: FC<AppProps> = props => (
  <div>
    <button onClick={props.onLogin}>Login!</button>
  </div>
)
```

---

### Define the function and pass through

```jsx
const onLogin = () => {
  // some magic happens
}
```

```jsx
<App onLogin={onLogin} />
```

---

### Typesafe Props

```ts
type AppProps = {
  title: string
}
```

```
<App />
```

What will happen here?

---

```

Type '{}' is not assignable to type 'Readonly<AppProps>'.
  Property 'title' is missing in type '{}'.


```

---

### Exercise 7

Split your component up into smaller components and files.

Use props to send information to your components.

---

### Children

```jsx
const Page: FC = props => (
  <div>
    {props.children}
  </div>
)
```

```jsx
<Page>
  <div>
    I'm the child
  </div>
</Page>
```

---

### Composition example

```jsx
<App>
  <Header>
    <Navigation />
  </Header>
  <Content>
    <SearchForm />
  </Content>
</App>
```

---

### Container vs. Presentational Component

Or: smart vs. dumb

Or fat vs. skinny

Or statefull vs. pure

Or screens vs. components

https://medium.com/@dan_abramov/smart-and-dumb-components-7ca2f9a7c7d0

---

### Container Component

- Fetches data
- Keeps track of state
- Possibly connected to a State Store (Redux / MobX)
- Passes all the data to its children
- Does NOT contain styles

---

### Presentational Component

- Renders UI
- Contains styling
- Easily testable
- As dumb as possible

---

### Possible end result

[➡️ Click](https://stackblitz.com/edit/typescript-react-stopwatch-result)

---

### Function vs. Class

Props

```jsx
const App: FC<Props> = props => <div>{props.title}</div>
```

```jsx
class App extends React.Component<Props> {
  public render() {
    return <div>{this.props.title}</div>
  }
}
```

---

### Function Component

On mount & State

```jsx
const App: FC<Props> = props => {
  const [user, setUser] = useState(false)

  useEffect(() => {
    fetchUser()
      .then(user => setUser(user))
  }, [])
}
```

---

### Class Component

On mount & State

```jsx
class App extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props)
    this.state = {
      user: false
    }
  }

  public async componentDidMount() {
    const user = await fetchUser()
    this.setState({
      user
    })
  }
}
```

---

### React Hooks

- Recommended approach
- Class Components will be removed from the core

---

### Wrap-up

- React + TypeScript
- TSX
- States, Effects, Props
- Component composition
- Containers vs. Presentationals

---

### Resources

- create-react-app
- https://medium.com/@dan_abramov/smart-and-dumb-components-7ca2f9a7c7d0
- https://reactjs.org/docs/hooks-custom.html

---

### 🙌 Thanks 🙌


Questions anyone?

---

### Bonus exercise 1

Refactor your code to use a Container Component which handles all the state and passes it through presentational components

---

### Bonus exercise 2

Try to refactor a FunctionComponent into a ClassComponent.
