import { useReducer } from "react";
const inputInitialState = {
  value: "",
  isTouched: false,
};
const inputStateReducer = (state, action) => {
  if (action.type === "CHANGE") return { ...state, value: action.payload };
  if (action.type === "BLUR") return { ...state, isTouched: true };
  if (action.type === "RESET") return inputInitialState;
  return inputInitialState;
};
const useInput = (validateValue, errorMessage) => {
  const [inputState, dispatch] = useReducer(
    inputStateReducer,
    inputInitialState
  );
  const enterdedValueIsValid = validateValue(inputState.value);
  const hasError = !enterdedValueIsValid && inputState.isTouched;
  const inputValueChangeHandler = (e) =>
    dispatch({ type: "CHANGE", payload: e.target.value });
  const inputBlurHandler = () => dispatch({ type: "BLUR" });
  const reset = () => {
    dispatch({ type: "RESET" });
  };
  return {
    enterdedValue: inputState.value,
    inputIsTouched: inputState.isTouched,
    enterdedValueIsValid,
    hasError,
    errorMessage,
    inputValueChangeHandler,
    inputBlurHandler,
    reset,
  };
};
export default useInput;
