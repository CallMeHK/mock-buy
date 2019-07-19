import { h, FunctionComponent } from "preact";
import { useContext, useCallback } from "preact/hooks";

import Context, { IContext } from "../context/configureContext";
import { setWord } from "../context/actions";

const TestChild: FunctionComponent = () => {
  const { state, dispatch } = useContext(Context);
  const increaseCount = useCallback(
    () => dispatch({ type: "set-count", payload: state.count + 1 }),
    [dispatch, state.count]
  );
  const changeWord = useCallback(
    (e:any) => {console.log(e.target.value); setWord(dispatch)(e.target.value)},
    [dispatch]
  );
  return (
    <div>
      <p>Count: {state.count}</p>
      <p>Word: {state.word}</p>
      <div>
        {state.thing.subreddits.map((sub, i) => (
          <div key={"sub" + i}>{sub}</div>
        ))}
      </div>
      <div>
        <button onClick={increaseCount}>increase</button>
      </div>
      <div>
          <input value={state.word} onInput={changeWord}/>
      </div>
    </div>
  );
};

export default TestChild;
