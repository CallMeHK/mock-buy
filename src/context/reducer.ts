import { IStore } from "./store";

export interface IAction {
  type: string;
  payload: any;
}

// set up reducer for action types
let reducer = (state: IStore, action: IAction): IStore => {
  switch (action.type) {
    case "set-account-details":
      return { ...state, accountDetails: {...state.accountDetails, ...action.payload} };
    default:
      return state;
  }
};

export default reducer;