# expressreact

Redux

Actions
- plain objects containing the description of an event
- with type property

Action Creator
- convenience method for creating Action

Store
- let store = createStore(reducer);
- store.dispatch(action)
- store.subscribe(listener)
- store.getState()
- replaceReducer(nextReducer)

Immutability
- to change state, return a new object
- clarity
  - who changed the state? -> always the reducer
- performance
  - only need to do reference check difference to determine if there is a change
- amazing debugging experience
  - Redux DevTools
  - history of changes (play back, alter history, etc)
- to enforce
  - redux-immutable-state-invariant -> only for dev mode
  - or Immutable.js

Object copy
- Object.assign(target, ...sources)
- ex: Object.assign({}, currentState, {role: 'admin'}); // make a copy of current state and change role to 'admin' -> use babel-polyfill

Reducers
- function myReducer(state, action) {
    return newState;
  }
- (state, action) => newState
- must be pure functions -> no sideeffects, no mutation of arguments, no call to non-pure functions
- all reducers are called on each dispatch
- follow reducer composition

React-Redux
- mapStateToProps
  - what state should I expose as props?
  - Reselect -> library for memoization for performance
- mapDispatchToProps
  - what actions should I expose as props?

TODOs
1. Look at redux-saga for async as an alternative for redux-thunk

