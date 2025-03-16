import logo from './logo.svg';
import './App.css';
import Gretting from './Greeting';
import CurrentDateTime from './CurrentDateTime';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Gretting name="Мир" />
        <CurrentDateTime />
      </header>
    </div>
  );
}

export default App;
