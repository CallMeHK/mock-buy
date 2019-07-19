const setCount = (dispatch: any) => (count: number) => {
  dispatch({
    type: "set-count",
    payload: { count }
  });
};

const setWord = (dispatch: any) => (word: string) => {
  dispatch({
    type: "set-word",
    payload: { word }
  });
};

export { setWord, setCount };