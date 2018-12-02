import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import filtersReducer from "../reducers/filters";
import expensesReducer from "../reducers/expenses";
import thunk from "redux-thunk";

const composeEnhancers =
  window.__REDUX_DEVTOOLS_EXTENSION__COMPOSE__ || compose;

export default () => {
  const store = createStore(
    combineReducers({
      filters: filtersReducer,
      expenses: expensesReducer
    }),
    composeEnhancers(applyMiddleware(thunk))
  );

  return store;
};
