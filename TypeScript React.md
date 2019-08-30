
## TypeScript React
1. TypeScript + React = 💓 (What is React)

    Who already knows React?

    > React is a declarative, efficient, and flexible JavaScript library for building user interfaces. It lets you compose complex UIs from small and isolated pieces of code called “components”.

    It's an alternative for Angular, Vue or other frontend frameworks. By default it's pretty basic and compact, but it scales nicely for bigger applications as well.

    Define your component:

    ```jsx
    class App extends React.Component {
      render() {
        return (
          <div>
            My App
          </div>
        )
      }
    }
    ```

    Use your component:

    ```jsx
    <App />
    ```

    As you might have noticed we use a XML-like syntax here. In React that is called JSX. It allows you to use both HTML and Javascript at the same time. Where you can use Javascript between curly braces `{` ... `}`:

    ```jsx
    const myVariable = 'Some value'
    const element = (
      <div>
        My variable uppercase: {myVariable.toUpperCase()}
      </div>
    )
    ```

    This also works with conditional renders:

    ```jsx
    const isEnabled = true
    const element = (
      <div>
        { isEnabled ? 'Enabled' : 'Disabled' }
      </div>
    )
    ```

    And we can still use the native element properties:

    ```jsx
    const element = (
      <div 
        style={{ textTransform: 'uppercase' }}
        className={'myClassName'}>
          ...
      </div>
    )
    ```

2. Props

    You often need to pass information to your components. In React you use Props for this. It looks like this:

    ```jsx
    <App title={'App title'} />
    ```

    Or using a variable:

    ```jsx
    <App title={appTitle} />
    ```

    Now we have a Prop called `title` available in our App component. We can access it via `this.props.title` in the Component Class:

    ```jsx
    class App extends React.Component {
      render() {
        return (
          <div>
            My app title is: {this.props.title}
          </div>
        )
      }
    }
    ```

    Next to variables we can also pass functions as props to our component. For example:
    
    ```jsx
    const onSubmit = () => { ... }
    const element = (
      <Form onSubmit={onSubmit} />
    )
    ```

    This exposes a function called `onSubmit` that we can access using `this.props.onSubmit()`. More about this later.

3. State

    By default all components are stateless. This means that with the same props we always get the same result. But this is not always what you want. Lets say we have a form that contains a checkbox. We need a place to keep track of the selected state of this checkbox. This is where State comes in:

    ```jsx
    class App extends React.Component {
      constructor(props) {
        super(props)
        this.state = {
          isChecked: false
        }
      }
      render() {
        return (
          <input type={'checkbox'} checked={this.state.isChecked} />
        )
      }
    }
    ```

    Lets split piece of code up. First we need to define the default component state. We do this inside the `constructor`. Because we're extending `React.Component` we need to initialize the super class using `super(props)`. After that we define our default component state.

    ```jsx
    class App extends React.Component {
      constructor(props) {
        super(props)
        this.state = {
          isChecked: false
        }
      }
      ...
    }
    ```

    And then in our `render` function we can access the state value to make the UI behave dynamically:

    ```jsx
    class App extends React.Component {
      ...
      render() {
        return (
          <input type={'checkbox'} checked={this.state.isChecked} />
        )
      }
    }
    ```

    But we're not there yet. This state is still static. We need to mutate the component state in order to check or uncheck the checkbox. This is where the `setState` method comes in:

    ```jsx
    class App extends React.Component {
      ...
      render() {
        return (
          <input type={'checkbox'} checked={this.state.isChecked} onChange={() => {
            this.setState({
              isChecked: !this.state.isChecked
            })
          }} />
        )
      }
    }
    ```

    Using `setState` allows us to mutate the component state. We need to pass an object to the `setState` which indicated the changes we want to make. In the previous example we inverse the boolean in our state using:

    ```jsx
    this.setState({
      isChecked: !this.state.isChecked
    })
    ```

    When either the `Props` or `State` changes, the component will re-render itself to reflect the new information in the UI. This could also be configured. We will come back to this later on.

4. Children and composing elements

    Previously we showed examples of only one component. But we can compose compenents as much as we like:


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

    In the previous example we `nest` components. This nesting means we're passing in `children` to our components.





    
3. JSX vs. TSX
4. PropTypes vs. TypeScript
5. Class Component vs. Function Component
6. Hooks
7. 

## Resources
* [TypeScript docs](https://www.typescriptlang.org/docs/home.html)
* [TypeScript playground](https://www.typescriptlang.org/play/index.html)
