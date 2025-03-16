import logo from './logo.svg';
import './App.css';
import Gretting from './lab1/Greeting';
import CurrentDateTime from './lab1/CurrentDateTime';
import Counter from './lab2/Counter';
import TextInput from './lab2/TextInput';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Gretting name="Мир" />
        <CurrentDateTime />
        <Counter />
        <TextInput />
      </header>
    </div>
  );
}

export default App;
