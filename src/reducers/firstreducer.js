// Firstrd.js

// const initialState = {
//     count: 0,
//   };

// const firstReducer = (state = 0, action) => {
//   switch (action.type) {
//     case 'INCREMENT':
//       return { ...state, count: state.count + 1 };
//     case 'DECREMENT':
//       return { ...state, count: state.count - 1 };
//     default:
//       return state;
//   }
// };

// export default firstReducer;


// const initialState = {
//     userData: { name: '', password: '' },
//   };

//   const firstReducer = (state = initialState, action) => {
//     switch (action.type) {
//       case 'SET_USER_DATA':
//         return { ...state, userData: action.payload };
//       default:
//         return state;
//     }
//   };

//   export default firstReducer;

// FirstrdReducer.js

// FirstrdReducer.js
// FirstrdReducer.js

const initialState = {
  dataList: [],
};

const firstReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_DATA':
      return {
        ...state, dataList: action.payload,
      };
    default:
      return state;
  }
};

export default firstReducer;
