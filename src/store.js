import { applyMiddleware, compose, createStore, combineReducers} from 'redux';
import usersReduser from "./users/users.reducer";
import thunk from 'redux-thunk';

const appReducer = combineReducers({
  users: usersReduser,
});
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  appReducer,
  composeEnhancers(
      applyMiddleware(thunk)
  )
);

export default store;