// calculatorreducer.js
const initialState = {
  answer: 0,
  leftoperand: 0,
  rightoperand: 0,
  operator:"",
};
console.log('first', initialState?.answer);
const calculatorreducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_LEFTOPERAND':
      return {
        ...state,
        leftoperand: state.leftoperand * 10 + Number(action.payload),
      };
    case 'CLEAR_LEFT':
      return {
        ...state,
        leftoperand: Math.floor(state.leftoperand / 10),
      };
    case 'CLEAR_RIGHT':
      return {
        ...state,
        rightoperand: Math.floor(state.rightoperand / 10),
      };
    case 'SET_RIGHTOPERAND':
      return {
        ...state,
        rightoperand: state.rightoperand * 10 + Number(action.payload),
      };
    case 'SETOPERATOR':
      return {
        ...state,
        operator: action.payload
      };
    case 'CALCULATE':
      return {
        ...state,
        answer: eval(`${state.leftoperand} ${state.operator} ${state.rightoperand}`),
        leftoperand: 0,
        rightoperand: 0,
        operator:""
      };
    case 'CLEAR_INPUT':
      return {
        ...state,
        answer: '0',
        leftoperand: 0,
        rightoperand: 0,
        operator: '',
      };

    default:
      return state;
  }
};

export default calculatorreducer;