import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Expense Tracker</h1>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;

function ADDtext (e) {
  var text = e.target.value;
  console.log("addtext",text)
  localStorage.setItem('current_text', text);
  setText(text);
};
function ADDamount (e) {
  var amount = e.target.value;
  console.log("addamount",amount)
  localStorage.setItem('current_text', amount);
  setText(amount);
}
