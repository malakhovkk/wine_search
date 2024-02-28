import "./Login.css";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function LogIn() {
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();
  const [error, setError] = useState("");
  const send = async (e) => {
    e.preventDefault();
    try {
      let res = await axios.post("http://194.87.239.231:55555/api/logon", {
        login,
        password,
      });

      console.log(res);
      res = res.data;
      localStorage.setItem("login", res.user.login);
      localStorage.setItem("token", res.result);
      console.log(res);
      console.log(res.user.login, res.result);
      navigate("vendors");
    } catch (e) {
      console.log(e);
      setError(true);
    }
  };

  return (
    <div className="login-page">
      <form className="login-page__form">
        {error ? "Повторите ввод!" : ""}
        <label>Ник:</label>
        <input
          type="text"
          id="name"
          name="login"
          onChange={(e) => setLogin(e.target.value)}
          required
        />
        <br />
        <label>Пароль:</label>
        <input
          type="password"
          id="name"
          name="password"
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <br />

        <input type="submit" onClick={send} value="Отправить" />
      </form>
    </div>
  );
}

export default LogIn;
