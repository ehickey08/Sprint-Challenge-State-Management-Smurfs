1. What problem does the context API help solve?

Context provides a way to share state values between components without having to do prop drilling through each level of the node tree.

1. In your own words, describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?

The store is an object that contains the entire state for the application. The store is never mutated, just replaced. Since this is the only place where state can be updated, it is the 'single source of truth.'

A reducer is a pure function that takes in the current state and an action. It handles the changes and returns a new state. 

Actions are objects that are passed to the reducer and usually contain two pieces of information: type and payload. 

1. What is the difference between Application state and Component state? When would be a good time to use one over the other?

Application state is a global state that will contain information that is used by multiple components in different parts of the app. Component state is state unique and local to a component (i.e. the input fields of a form). 

1. Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?

Redux-thunk is middleware that will intercept the action creators before they dispatch actions to the reducer. It will test to see if the action creator is returning a function and if it is, it will allow for the async code to take place and dispatch from within the function. 

1. What is your favorite state management system you've learned and this sprint? Please explain why!

useReducer and useContext because it does not require as many libraries (react-redux, redux-thunk), the file structure is easier, and we can access what we need in each component. 