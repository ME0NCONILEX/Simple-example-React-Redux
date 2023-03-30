const inititalState = { firstname: "Johan", lastname: "Johansson", age: 33, email: "nname@ppost.io",};
const addUserReducer = (state = inititalState, action) => {
  switch (action.type) {
    case "CHANGEFIRSTNAME": {
      return { ...state, firstname: action.payload };
    }
    case "CHANGELASTNAME": {
      return { ...state, lastname: action.payload };
    }
    case "CHANGEAGE": {
      return { ...state, age: action.payload };
    }
    case "CHANGEEMAIL": {
      return { ...state, email: action.payload };
    }
  }
  return state;
};
export default addUserReducer;
