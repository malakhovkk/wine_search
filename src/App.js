import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <form>
        <label for="name">Ник:</label>
        <input type="text" id="name" name="name" required/>
        <br/>
        <label for="name">Пароль:</label>
        <input type="password" id="name" name="name" required/>
        <br/>
        <input type="submit" value="Отправить"/>
    </form>
    
  );
}

export default App;
