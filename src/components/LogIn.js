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
      let res = await axios
        .post("http://194.87.239.231:55555/api/logon", { login, password })
        .then((res) => {
          res = res.data;
          console.log(res);

          navigate("vendors");
        });
      res = res.data;
      localStorage.setItem("login", res.user.login);
      localStorage.setItem("token", res.result);
      navigate("vendors");
    } catch (e) {
      console.log(e);
      setError(true);
    }
  };

  return (
    <form>
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
  );
}

export default LogIn;
