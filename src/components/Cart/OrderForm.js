import { useContext, Fragment } from "react";
import modalContext from "../../store/modalContext";
import cartContext from "../../store/cartContext";
import "./OrderForm.css";
import btnStyles from "./Cart.module.css";
import useInput from "../../hooks/user-input";
const OrderForm = ({ form, onApprove, approval }) => {
  const modalCtx = useContext(modalContext);
  const cartCtx = useContext(cartContext);
  const {
    enterdedValue: enterdedNameValue,
    enterdedValueIsValid: enterdedNameIsValid,
    hasError: nameHasError,
    errorMessage: nameErrorMessage,
    inputValueChangeHandler: inputNameChangeHandler,
    inputBlurHandler: inputNameBlurHandler,
    reset: nameReset,
  } = useInput((val) => val.trim() !== "", "Name must not be empty!");
  const {
    enterdedValue: enteredStreetValue,
    enterdedValueIsValid: enteredStreetIsValid,
    hasError: streetHasError,
    errorMessage: streetErrorMessage,
    inputValueChangeHandler: inputStreetChangeHandler,
    inputBlurHandler: inputStreetBlurHandler,
    reset: streetReset,
  } = useInput((val) => val.trim() !== "", "Street must not be empty!");
  const {
    enterdedValue: enteredCodeValue,
    enterdedValueIsValid: enteredCodeIsValid,
    hasError: codeHasError,
    errorMessage: codeErrorMessage,
    inputValueChangeHandler: inputCodeChangeHandler,
    inputBlurHandler: inputCodeBlurHandler,
    reset: codeReset,
  } = useInput((val) => val.trim() !== "", "Please enter a vaild postal code!");
  const {
    enterdedValue: enteredCityValue,
    enterdedValueIsValid: enteredCityIsValid,
    hasError: cityHasError,
    errorMessage: cityErrorMessage,
    inputValueChangeHandler: inputCityChangeHandler,
    inputBlurHandler: inputCityBlurHandler,
    reset: cityReset,
  } = useInput((val) => val.trim() !== "", "City must not be empty!");

  const formIsValid =
    enterdedNameIsValid &&
    enteredStreetIsValid &&
    enteredCodeIsValid &&
    enteredCityIsValid;

  const formSubmissionHandler = async (e) => {
    e.preventDefault();
    if (!formIsValid) return;
    const orderDetails = {
      orderedMeals: cartCtx.orderedMeals,
      total: cartCtx.total,
      name: enterdedNameValue,
      street: enteredStreetValue,
      code: enteredCodeValue,
      city: enteredCityValue,
    };
    await fetch(
      `https://react-http-a0e9b-default-rtdb.firebaseio.com/orders.json`,
      {
        method: "POST",
        body: JSON.stringify(orderDetails),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    cartCtx.reset();
    onApprove();
    nameReset();
    streetReset();
    codeReset();
    cityReset();
  };
  return !approval ? (
    <form onSubmit={formSubmissionHandler}>
      <div className={`form-control ${nameHasError ? "invalid" : ""}`}>
        <label htmlFor="name">Your Name</label>
        <input
          type="text"
          id="name"
          value={enterdedNameValue}
          onChange={inputNameChangeHandler}
          onBlur={inputNameBlurHandler}
        />
        {nameHasError && <p className="error-text">{nameErrorMessage}</p>}
      </div>
      <div className={`form-control ${streetHasError ? "invalid" : ""}`}>
        <label htmlFor="name">Street</label>
        <input
          type="text"
          id="name"
          value={enteredStreetValue}
          onChange={inputStreetChangeHandler}
          onBlur={inputStreetBlurHandler}
        />
        {streetHasError && <p className="error-text">{streetErrorMessage}</p>}
      </div>

      <div className={`form-control ${codeHasError ? "invalid" : ""}`}>
        <label htmlFor="code">Postal Code</label>
        <input
          type="number"
          id="code"
          value={enteredCodeValue}
          onChange={inputCodeChangeHandler}
          onBlur={inputCodeBlurHandler}
        />
        {codeHasError && <p className="error-text">{codeErrorMessage}</p>}
      </div>
      <div className={`form-control ${cityHasError ? "invalid" : ""}`}>
        <label htmlFor="city">City</label>
        <input
          type="text"
          id="city"
          value={enteredCityValue}
          onChange={inputCityChangeHandler}
          onBlur={inputCityBlurHandler}
        />
        {cityHasError && <p className="error-text">{cityErrorMessage}</p>}
      </div>

      {/* <div className="form-actions">
        <button disabled={!formIsValid}>Submit</button>
      </div> */}
      <div className={btnStyles.actions}>
        <button
          className={btnStyles["button--alt"]}
          onClick={modalCtx.closeModalHandler}
        >
          Close
        </button>
        {form ? (
          <button
            disabled={!formIsValid}
            className={btnStyles.button}
            onClick={formSubmissionHandler}
          >
            Confirm
          </button>
        ) : null}
      </div>
    </form>
  ) : (
    <Fragment>
      <p>Your request was sent successfully.</p>
      <div className={btnStyles.actions}>
        <button
          className={btnStyles["button--alt"]}
          onClick={modalCtx.closeModalHandler}
        >
          Close
        </button>
      </div>
    </Fragment>
  );
};

export default OrderForm;
