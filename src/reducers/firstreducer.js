// Firstrd.js

import { DELETE_ITEM, SET_DATA } from "@/actions/firstaction";

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

// const initialState = {
//   dataList: [],
// };
// const firstReducer = (state = initialState, action) => {
//   switch (action.type) {
//     case 'ADD_DATA':
//       return {
//        // ...state, dataList:action.payload,
//         ...state,
//         dataList: [
//           ...state.dataList,
//           action.payload,
//         ],
//       };
//     default:
//       return state;
//   }
// };

// export default firstReducer;


// firstreducer.js

const initialState = {
  apidata: [],
  loader: false, 
};

const firstReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_DATA:
      return {
        ...state,
        apidata: action.payload,
      };
    case DELETE_ITEM:
      return {
        ...state,
        apidata: state.apidata.filter(item => item.id !== action.payload),
      };
    default:
      return state;
  }
};

export default firstReducer;

