//calculatoraction.js
export const setLeftOperand = op => ({
  type: 'SET_LEFTOPERAND',
  payload: op,
});
export const setRightOperand = op => ({
  type: 'SET_RIGHTOPERAND',
  payload: op,
});
export const setOperator = op => ({
  type: 'SETOPERATOR',
  payload: op,
});
export const calculate = () => ({
  type: 'CALCULATE',
  payload: '',
});
export const clearLeft = () => ({
  type: 'CLEAR_LEFT',
  payload: '',
});
export const clearRight = () => ({
  type: 'CLEAR_RIGHT',
  payload: '',
});

export const clearInput = () => ({
  type: 'CLEAR_INPUT',
  payload: '',
});
