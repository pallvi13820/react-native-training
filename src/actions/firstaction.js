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
  
export const setUserData = (name, password) => {
   
    return {
      type: 'SET_USER_DATA',
      payload: { name, password },
    };
  };
  
// firstaction.js


// export const ADD_DATA = 'ADD_DATA';

// export const addData = (payload) => {
//   return {
//     type: ADD_DATA,
//     payload: payload,
//   };
// };

// firstaction.js
// export const SET_DATA = 'SET_DATA';
// export const DELETE_ITEM = 'DELETE_ITEM';

// export const setData = (payload) => ({
//   type: SET_DATA,
//   payload: payload,
// });

// export const deleteItem = (itemId) => ({
//   type: DELETE_ITEM,
//   payload: itemId,
// });

