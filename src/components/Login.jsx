import React from "react";
import LoginAndRegisterForm from "./LoginAndRegisterForm";
import ValidationForm from "../hooks/ValidationForm";

export default function Login({ onLogin }) {
  const {
    handleChange,
    errorMessage,
    formValue,
    setErrorMessage,
    setFormValue,
  } = ValidationForm();

  function handleSubmit(e) {
    e.preventDefault();
    onLogin(formValue).then(() => {
      setFormValue({ password: "", email: "" });
      setErrorMessage("");
    });
  }

  return (
    <main className="content">
      <h2 className="">Вход</h2>
      <LoginAndRegisterForm submitBtnText="Войти" onSubmit={handleSubmit}>
        <input
          className="form__input"
          type="email"
          name="email"
          value={formValue.email || ""}
          placeholder="Email"
          onChange={handleChange}
          minLength="2"
          required
        ></input>
        {!errorMessage.email ? "" : <span className="error">{errorMessage.email}</span>}
        <input
          className="form__input"
          name="password"
          type="password"
          value={formValue.password || ""}
          placeholder="Пароль"
          onChange={handleChange}
          minLength="2"
          required
        ></input>
        {!errorMessage.password ? (
          ""
        ) : (
          <span className="error">{errorMessage.password}</span>
        )}
      </LoginAndRegisterForm>
    </main>
  );
}
