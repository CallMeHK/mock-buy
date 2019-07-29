import { h, FunctionComponent } from "preact";
import { useContext, useCallback } from "preact/hooks";
import { css, cx } from "emotion";

import Context, { IContext } from "../context/configureContext";
import { setWord } from "../context/actions";

const TestChild: FunctionComponent = () => {
  const { state, dispatch } = useContext(Context);
  const increaseCount = useCallback(
    () => dispatch({ type: "set-count", payload: state.count + 1 }),
    [dispatch, state.count]
  );
  const changeWord = useCallback(
    (e: any) => {
      setWord(dispatch)(e.target.value);
    },
    [dispatch]
  );
  return (
    <div>
      <p
        className={css`
          padding: 32px;
          background-color: hotpink;
          font-size: 24px;
          border-radius: 4px;
          &:hover {
            color: white;
          }
        `}
      >
        Count: {state.count}
      </p>
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
        <input value={state.word} onInput={changeWord} />
      </div>
    </div>
  );
};

export default TestChild;
