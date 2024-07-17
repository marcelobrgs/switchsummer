

export const ReducerComponent = (state = initialState, action) => {
  switch (action.type) {
    case "ride":
      return { money: state.money + 100 };
    case "fuel":
      return { money: state.money - 150 };
    default:
      throw new Error("error");
  }
};
