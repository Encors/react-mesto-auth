import React from "react";
import { Link } from "react-router-dom";
import LoginAndRegisterForm from "./LoginAndRegisterForm";
import ValidationForm from "../hooks/ValidationForm";

export default function Register({ onRegister }) {
  const {
    handleChange,
    errorMessage,
    formValue,
    setErrorMessage,
    setFormValue,
  } = ValidationForm();

  function handleSubmit(e) {
    e.preventDefault();
    onRegister(formValue)
    .then(() => {
      setErrorMessage("");
      setFormValue({ password: "", email: "" });
    });
  }

  return (
    <main className="content">
      <h2 className="">Регистрация</h2>
      <LoginAndRegisterForm submitBtnText="Зарегистрироваться" onSubmit={handleSubmit}>
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
        <Link to="/sign-in" className="link">
          Уже зарегистрированы? Войти
        </Link>
      </LoginAndRegisterForm>
    </main>
  );
}
