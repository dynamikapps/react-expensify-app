import uuid from "uuid";

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
export const addExpense = ({
  description = "",
  note = "",
  amount = 0,
  createdAt = 0
}) => {
  return {
    type: "ADD_EXPENSE",
    payload: {
      id: uuid(),
      description: description,
      note: note,
      amount: amount,
      createdAt: createdAt
    }
  };
};

// REMOVE_EXPENSE
export const removeExpense = id => {
  return {
    type: "REMOVE_EXPENSE",
    id: id
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
