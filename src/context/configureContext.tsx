import { h, createContext, FunctionComponent, JSX } from "preact";
import { useReducer } from "preact/hooks";
import reducer, { IAction } from "./reducer";
import store, { IStore } from "./store";

export interface IContext {
  state: IStore;
  dispatch: Function;
  dumbDispatch: Function;
}

export interface IProps {
  children?: JSX.Element | JSX.Element[];
}

// set up context, provider, consumer
const Context = createContext<Partial<IContext>>({});

// create a wrapper to provide context to react application
const ProviderComponent: FunctionComponent = ({ children }) => {
  let [state, dumbDispatch] = useReducer(reducer, store);

  const dispatch = (action: IAction | Function) => {
    if (typeof action === "function") {
      action(dumbDispatch, state);
    } else {
      dumbDispatch(action);
    }
  };

  let value: IContext = { state, dispatch, dumbDispatch };

  return <Context.Provider value={value}>{children}</Context.Provider>;
};

export { ProviderComponent };

export default Context;
