import { createStore, combineReducers } from "redux";
import filtersReducer from "../reducers/filters";
import expensesReducer from "../reducers/expenses";

export default () => {
  const store = createStore(
    combineReducers({
      filters: filtersReducer,
      expenses: expensesReducer
    }),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );

  return store;
};
