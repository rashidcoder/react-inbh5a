const userReducer = (state, action) => {
  switch (action.type) {
    case "add":
      return [
        ...state,
        {
          name: action.name
        }
      ];
    default:
      break;
  }
};

export default userReducer;
