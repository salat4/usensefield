import React from "react";
import { useState } from "react";
import s from "./Field.module.css";

const Field = ({ setPassword, password }) => {
  const [isShown, setIsSHown] = useState(false);
  const togglePassword = () => {
    setIsSHown((isShown) => !isShown);
  };
  const handleInput = (e) => {
    e.preventDefault();
    const { value } = e.target;
    setPassword(value);
  };
  return (
    <div className={s.App}>
      <form className={s.form}>
        <input
          type={isShown ? "text" : "password"}
          placeholder="Password"
          className={s.input}
          onInput={handleInput}
          name="value"
        />

        <div className={s.checkbox_container}>
          <label htmlFor="checkbox">Show password?</label>
          <input
            id="checkbox"
            type="checkbox"
            checked={isShown}
            onChange={togglePassword}
          />
        </div>
      </form>
    </div>
  );
};

export default Field;
