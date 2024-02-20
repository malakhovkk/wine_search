import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
import axios from "axios";

createBrowserRouter([
  {
    path: "/",
    element: (
      <div>
        <h1>Hello World</h1>
        <Link to="about">About Us</Link>
      </div>
    ),
  },
  {
    path: "about",
    element: <div>About</div>,
  },
]);

// function App() {
//   const [login, setLogin] = useState("");
//   const [password, setPassword] = useState("");

//   const send = (e) => {
//     e.preventDefault();
//     try {
//       axios
//         .post("http://194.87.239.231:55555/api/logon", { login, password })
//         .then((res) => {
//           res = res.data;
//           console.log(res);
//           localStorage.setItem("login", res.user.login);
//           localStorage.setItem("token", res.result);
//         });
//     } catch (err) {
//       console.log(err);
//     }
//     console.log(1);
//   };

//   return (
//     <form>
//       <label>Ник:</label>
//       <input
//         type="text"
//         id="name"
//         name="login"
//         onChange={(e) => setLogin(e.target.value)}
//         required
//       />
//       <br />
//       <label>Пароль:</label>
//       <input
//         type="password"
//         id="name"
//         name="password"
//         onChange={(e) => setPassword(e.target.value)}
//         required
//       />
//       <br />

//       <input type="submit" onClick={send} value="Отправить" />
//     </form>
//   );
// }

// export default App;
