// calculatoraction.js
export const updateInput = (input) => ({
    type: "UPDATE_INPUT",
    payload: input,
  });
  
  export const clearInput = () => ({
    type: "CLEAR_INPUT",
  });
  
  export const deleteLastInput = () => ({
    type: "DELETE_LAST_INPUT",
  });
  
  export const calculateResult = () => ({
    type: "CALCULATE_RESULT",
  });
  