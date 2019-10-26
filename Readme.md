# What is state?

The heart of every React component is its “state”, an object that determines how that component renders & behaves. In other words, “state” is what allows you to create components that are dynamic and interactive.

If you’re not familiar with the idea of state machines (what React “state" is modeled after), this all might seem a bit abstract. However, this couldn’t be further from the truth. You’ve interacted with state-based systems your entire life — you just haven’t realized it!
## NamesApp

Web program by react to display member information GA
With this program we can use the state and understand how to use it, and also use the functions to get started!


Today the plan is to identify the app components,We first want to use the existing data so to display the data,
Now we want to add information to the state so that we can benefit from it . 

#![](https://ibb.co/jzwtzh9)

We create a file we call the ```LeftSide.jsx```
In this compound we pass the data we need so names in the data

Type inside this file as follows:
```
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

```
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
