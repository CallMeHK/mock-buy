import { IStore } from "./store";

export interface IAction {
  type: string;
  payload: any;
}

// set up reducer for action types
let reducer = (state: IStore, action: IAction): IStore => {
  switch (action.type) {
    case "set-count":
      return { ...state, count: action.payload };
    case "set-word":
      return { ...state, ...action.payload };
    case "set-thing-good":
      return { ...state, thing: { ...state.thing, good: action.payload } };
    case "set-thing-subreddits":
      return {
        ...state,
        thing: { ...state.thing, subreddits: action.payload }
      };
    default:
      return state;
  }
};

export default reducer;