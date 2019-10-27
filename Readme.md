[![General Assembly Logo](https://camo.githubusercontent.com/1a91b05b8f4d44b5bbfb83abac2b0996d8e26c92/687474703a2f2f692e696d6775722e636f6d2f6b6538555354712e706e67)](https://generalassemb.ly/education/web-development-immersive)

# React Component State

## Objectives

By the end of this, developers should be able to:

-  Identify when a component needs to have internal state.
-  Set an initial state of a component in the constructor.
-  Alter the state of a component through invoking setState.

# What is state?

The heart of every React component is its “state”, an object that determines how that component renders & behaves. In other words, “state” is what allows you to create components that are dynamic and interactive.

If you’re not familiar with the idea of state machines (what React “state" is modeled after), this all might seem a bit abstract. However, this couldn’t be further from the truth. You’ve interacted with state-based systems your entire life — you just haven’t realized it!


At this point, we know that we can pass data into a React component by providing
props. This allows data to flow "downwards", from parent component to child
component. Where does this data originate from, though? What if we need to
frequently update that data?

So far, that data has just been an array or object in the global scope of
`App.js`. This is not ideal for dynamic data -- if the data changes, every
component needs to know that, so that it can decide whether it needs to
re-render anything that's changed. To achieve this, React components keep track
of data in an object called "state".

## State vs. Props

`state` and `props` have a lot in common:

-  Both are POJOs.
-  Changes to a component's props or state cause the component's `render`
   method to be called.
-  Neither should be modified directly. (e.g. no `this.props.foo = 'bar'`)
-  Both are optional. A React component doesn't need props or state to render
   markup to the DOM (it wouldn't be very useful with neither, though).

They are also different in a few key ways:

-  Props are passed into a component from its parent. State is determined
   _within_ a component.
-  Props are initalized by adding attributes in JSX, e.g. `<MyComponent coolProp="radical!" />`. State is declared in a component's [`constructor`](https://reactjs.org/docs/react-component.html#constructor) method.
-  Props can only be modified in the parent component. State is modified in
   the component itself, with a call to `this.setState`.


## Demo: A stateful component

Let's take a look at an example of a React component that keeps
track of its own state. 

```js
class Header extends Component {
  state = {
      text: 'Welcome to React!'
  }

  render () {
    return (
      <div>
        <h1>{this.state.text}</h1>
      </div>
    )
  }
}
```

The example doesn't quite highlight why state is useful, but we will eventually see how that data could come from an API or be altered by the user's input.

### Update State with Events

State should not be data that is static.  It should be data that changes and alters what our component should render.  Sometimes state is updated based on an API call and the response from an API will update the state with new data.  Another way to update the state of a component is based on user input or actions.

We can create a click event that alters the state of our application.
```js
class Header extends Component {
  state = {
      text: 'Welcome to React!'
  }

  changeHeading = () => {
    this.setState({ text: "I am the new welcome message!"})
  }
  render () {
    return (
      <div>
        <h1 onClick={this.changeHeading}>{this.state.text}</h1>
      </div>
    )
  }
}
```

Anytime we run the `setState` method, our component will update it's state and then re-run the `render` method.


## NamesApp

Web program by react to display member information GA
With this program we can use the state and understand how to use it, and also use the functions to get started!


Today the plan is to identify the app components,We first want to use the existing data so to display the data,
Now we want to add information to the state so that we can benefit from it . 

#![Bored](https://i.ibb.co/w7Qt7yZ/Blank.png)

We create a file we call the ```LeftSide.jsx```
In this compound we pass the data we need so names in the data

Type inside this file as follows:
```js
      <div className="left">
                    <div className="Instructors">
                        <h2 className="coror">Welcome to</h2>
                        <h4 className="coror">Instructors board</h4>
                    </div>
                    <div className="namebox" ><h5 className="coror" > name </h5></div>
        </div>
```


We know that we need a namespace, so we create a file named ```Names.jsx``` and pass the names

So we work for each special compound name in it

Now you create a file named ```RightSide.jsx```
You can print the following code inside:

```js
 <div className="rihgt">
         <div class="container">
                    <img src="https://via.placeholder.com/150" />
                    <div id="theBox" class="floatyBox">
                        <div id="name" class="nameIn">
                            <h3>name</h3>
                            <h4>mejore</h4>
                        </div>
                        <h3>Nationality :null </h3>
                        <h3>city : null</h3>
                          
                        <div> <h3>contact :
                           <br />012345
                        </h3></div>
                        <div><h3>email :
                        <br />0123456
                        </h3></div>
                    </div>
                </div>   
            </div>
```

Now we want to add EventSlecet in the state to display only one content on the right side.

We want this EventSlecet to change depending on the name click on the left side

We know in this case that we want to create a function to do that!
We want to do a function that causes a change in what happens on the left side, which is affected by the right side






## Additional Resources

-   [Understanding "state" in React Components](https://thinkster.io/tutorials/understanding-react-state)
