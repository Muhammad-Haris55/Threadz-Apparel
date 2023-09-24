// Store basically database hai
// Store ko create krny ka syntax(import krty hain redux sa)
import { createStore } from "redux";

// rootReducer ko import kryngy 
import rootReducer from "./Reducers(HTD)/Index";

// store create krty hain,Window wala part redux dev tools ma show krwany k li ehota h console ma
const store=createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
// App.js ma app ko data provide kryngy

export  default store;