import { useState } from "react";

export default function ValidationForm() {
  const [errorMessage, setErrorMessage] = useState({});
  const [formValue, setFormValue] = useState({ password: "", email: "" });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormValue({
      ...formValue,
      [name]: value,
    });

    setErrorMessage({
      ...errorMessage,
      [name]: e.target.validationMessage,
    });
  };

  return {
    handleChange,
    errorMessage,
    setErrorMessage,
    formValue,
    setFormValue,
  };
}
