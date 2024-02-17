// firstaction.js

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
  