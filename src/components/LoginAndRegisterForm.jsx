import React from "react";

export default function LoginAndRegisterForm({ children, submitBtnText, onSubmit }) {
  return (
    <form className="form" onSubmit={onSubmit}>
      {children}
      <button className="form__submit-btn button" type="submit">
        {submitBtnText}
      </button>
    </form>
  );
}
