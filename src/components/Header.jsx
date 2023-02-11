import logo from "../images/logo.svg";
import React from "react";
import { Link, Route, Routes } from "react-router-dom";

export default function Header({ loggedIn, userEmail, onSignOut }) {
  return (
    <header className="header">
      <img className="header__logo" src={logo} alt="Логотип Место" />
      {loggedIn ? (
        <div className="">
          <p className="header__userElements-email">{userEmail}</p>
          <button className="links header__userElements-logout" onClick={onSignOut}>
            Выйти
          </button>
        </div>
      ) : (
        <div className="">
          <Routes>
            <Route
              path="/sign-up"
              element={
                <Link
                  to={"/sign-in"}
                  className="header__nav-link header__nav-link_active link"
                >
                  Войти
                </Link>
              }
            />
            <Route
              path="/sign-in"
              element={
                <Link
                  to={"/sign-up"}
                  className="header__nav-link header__nav-link_active link"
                >
                  Регистрация
                </Link>
              }
            />
          </Routes>
        </div>
      )}
    </header>
  );
}
