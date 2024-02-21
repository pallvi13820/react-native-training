// calculatorreducer.js
const initialState = {
    data: "0",
    operatorCount: 0,
  };
  console.log('first', initialState?.data)
  const calculatorReducer = (state = initialState, action) => {
    switch (action.type) {
      case "UPDATE_INPUT":
        // Implement logic to handle input updates
        return {
          ...state,
          data: state.data === "0" ? action.payload : state.data + action.payload,
        };
  
      case "CLEAR_INPUT":
        // Implement logic to handle input clearing
        return {
          ...state,
          data: "0",
          operatorCount: 0,
        };
  
      case "DELETE_LAST_INPUT":
        // Implement logic to handle deleting last input
        return {
          ...state,
          data: state.data.length > 1 ? state.data.slice(0, -1) : "0",
        };
  
      case "CALCULATE_RESULT":
        // Implement logic to calculate result using your existing calculate function
        const result = calculate(state.data);
        return {
          ...state,
          data: result.toString(),
          operatorCount: 0,
        };
  
      default:
        return state;
    }
  };
  
  export default calculatorReducer;
  