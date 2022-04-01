import { createStore, applyMiddleware } from 'redux';
import { rootReducer } from './combinedReducer';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';


export const store = createStore(
    rootReducer,
   composeWithDevTools(applyMiddleware(thunk)) //to be able to use RN debugger
    
)