import './App.css';
import Gretting from './lab1/Greeting';
import CurrentDateTime from './lab1/CurrentDateTime';
import Counter from './lab2/Counter';
import TextInput from './lab2/TextInput';
import DataFetcher from './lab3/DataFetcher';
import UserList from './lab3/UserList';
import { MyProvider } from './lab4/MyContext';
import DisplayValue from './lab4/DisplayValue';
import UpdateValue from './lab4/UpdateValue';

import {
  BrowserRouter as Router,
  Route,
  Link,
  Routes
} from 'react-router-dom';

import Home from './lab5/Home';
import About from './lab5/About';
import Profile from './lab5/Profile';
import PrivateRoute from './lab5/PrivateRoute';

function App() {
  return (
    <MyProvider>
      <Router>
        <div className="App">
          { /* Блок навигации */}
          <nav>
            <ul>
              <li><Link to="/">Главная</Link></li>
              <li><Link to="/about">О нас</Link></li>
              <li><Link to="/profile">Профиль</Link></li>
            </ul>
          </nav>

          { /* Основной контент */}
          <header className="App-header">
            { /* Маршрутизация */}
            <Routes>
              <Route path="/" Component={Home} index />
              <Route path="/about" Component={About} />
              <Route path="/profile" Component={
                (props) => (
                  <PrivateRoute {...props} component={Profile} />
                )
              } />
            </Routes>

            <Gretting name="Мир" />
            <CurrentDateTime />
            <Counter />
            <TextInput />
            <DataFetcher />
            <UserList />
            <DisplayValue />
            <UpdateValue />
          </header>
        </div>
      </Router>
    </MyProvider>
  );
}

export default App;
