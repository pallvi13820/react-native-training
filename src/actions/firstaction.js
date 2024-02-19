// //firstaction.js

// export const increment = () => {
//     return {
//       type: 'INCREMENT',
//     };
//   };
  
//   export const decrement = () => {
//     return {
//       type: 'DECREMENT',
//     };
//   };
  
// export const setUserData = (name, password) => {
   
//     return {
//       type: 'SET_USER_DATA',
//       payload: { name, password },
//     };
//   };
  
// firstaction.js


export const ADD_DATA = 'ADD_DATA';

export const addData = (payload) => {
  return {
    type: ADD_DATA,
    payload: payload,
  };
};
