// import uuid from "uuid";
import database from "../firebase/firebase";

export const demoState = {
  expenses: [
    {
      id: "dafdsfdjfsdfo",
      description: "January Rent",
      note: "This is the final payment",
      amount: 54500,
      createdAt: 0
    }
  ],
  filters: {
    text: "rent",
    sortBy: "amount",
    startDate: undefined,
    endDate: undefined
  }
};

// ADD_EXPENSE
export const addExpense = expense => {
  return {
    type: "ADD_EXPENSE",
    payload: expense
  };
};

export const startAddExpense = (expenseData = {}) => {
  return dispatch => {
    const {
      description = "",
      note = "",
      amount = 0,
      createdAt = 0
    } = expenseData;
    const expense = { description, note, amount, createdAt };

    return database
      .ref("expenses")
      .push(expense)
      .then(ref => {
        dispatch(
          addExpense({
            id: ref.key,
            ...expense
          })
        );
      });
  };
};

// REMOVE_EXPENSE
export const removeExpense = id => {
  return {
    type: "REMOVE_EXPENSE",
    id: id
  };
};

export const startRemoveExpense = id => {
  return dispatch => {
    database
      .ref(`expenses/${id}`)
      .remove()
      .then(() => {
        dispatch(removeExpense(id));
      })
      .catch(e => {
        console.log("Failed not removed", e);
      });
  };
};

// EDIT_EXPENSE
export const editExpense = (id, updates) => {
  return {
    type: "EDIT_EXPENSE",
    id: id,
    updates: updates
  };
};

export const startEditExpense = (id, updates) => {
  return dispatch => {
    database
      .ref(`expenses/${id}`)
      .update({
        ...updates
      })
      .then(() => {
        dispatch(editExpense(id, updates));
      })
      .catch(e => {
        console.log("Failed to edit", e);
      });
  };
};

// SET_EXPENSE
export const setExpenses = expenses => ({
  type: "SET_EXPENSES",
  expenses: expenses
});

export const startSetExpenses = () => {
  return dispatch => {
    return database.ref("expenses").once("value", snapshot => {
      const expenses = [];

      snapshot.forEach(childSnapshot => {
        expenses.push({
          id: childSnapshot.key,
          ...childSnapshot.val()
        });
      });
      dispatch(setExpenses(expenses));
    });
  };
};
