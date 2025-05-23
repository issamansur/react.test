import "./App.css";

import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";

// lab1
import Gretting from "./lab1/Greeting";
import CurrentDateTime from "./lab1/CurrentDateTime";
// lab2
import Counter from "./lab2/Counter";
import TextInput from "./lab2/TextInput";
// lab3
import DataFetcher from "./lab3/DataFetcher";
import UserList from "./lab3/UserList";
// lab4
import { MyProvider } from "./lab4/MyContext";
import DisplayValue from "./lab4/DisplayValue";
import UpdateValue from "./lab4/UpdateValue";
// lab5
import Home from "./lab5/Home";
import About from "./lab5/About";
import Profile from "./lab5/Profile";
import PrivateRoute from "./lab5/PrivateRoute";
// lab6
import JqueryExample from "./lab6/JqueryExample";
// lab7
import EventHandlers from "./lab7/EventHandlers";
// lab8
import Animations from "./lab8/Animations";
// lab9
import AjaxExample from "./lab9/AjaxExample";
// lab10
import LodashExample from "./lab10/LodashExample";
// lab11
import LodashObjectsCollections from "./lab11/LodashObjectsCollections";
// lab12
import LodashUtilities from "./lab12/LodashUtilities";
// lab13
import D3Example from "./lab13/D3Example";
// lab14
import ScalesAndAxes from "./lab14/ScalesAndAxes";
// lab15
import InteractiveChart from "./lab15/InteractiveChart";
// lab16
import BigDataVisualization from "./lab16/BigDataVisualization";
// lab17
import AxiosExample from "./lab17/AxiosExample";
import AxiosPostExample from "./lab17/AxiosPostExample";
// lab18
import FetchDataWithAxios from "./lab18/FetchDataWithAxios";
import UpdateDataWithAxios from "./lab18/UpdateDataWithAxios";
// lab19
import AxiosWithInterceptors from "./lab19/AxiosWithInterceptors";
// lab20
import JqueryInReact from "./lab20/JqueryInReact";
// lab21
import LodashInReact from "./lab21/LodashInReact";
// lab22
import DataVisualization from "./lab22/DataVisualization";
import LineChart from "./lab22/LineChart";
// lab23
import FetchDataAndVisualize from "./lab23/FetchDataAndVisualize";
// lab24
import Dashboard from "./lab24/Dashboard";
import ExtendedDashboard from "./lab24/ExtendedDashboard";

function App() {
	return (
		<MyProvider>
			<Router>
				<div className="App">
					{/* Блок навигации */}
					<nav>
						<ul>
							<li>
								<Link to="/">Главная</Link>
							</li>
							<li>
								<Link to="/about">О нас</Link>
							</li>
							<li>
								<Link to="/profile">Профиль</Link>
							</li>
						</ul>
					</nav>

					{/* Основной контент */}
					<header className="App-header">
						{/* Маршрутизация */}
						<Routes>
							<Route path="/" Component={Home} index />
							<Route path="/about" Component={About} />
							<Route
								path="/profile"
								Component={(props) => (
									<PrivateRoute
										{...props}
										component={Profile}
									/>
								)}
							/>
						</Routes>
					</header>

					<Gretting name="Мир" />
					<CurrentDateTime />
					<Counter />
					<TextInput />
					<DataFetcher />
					<UserList />
					<DisplayValue />
					<UpdateValue />
					<JqueryExample />
					<EventHandlers />
					<Animations />
					<AjaxExample />
					<LodashExample />
					<LodashObjectsCollections />
					<LodashUtilities />
					<D3Example />
					<ScalesAndAxes />
					<InteractiveChart />
					<BigDataVisualization />
					<AxiosExample />
					<AxiosPostExample />
					<FetchDataWithAxios />
					<UpdateDataWithAxios />
					<AxiosWithInterceptors />
					<JqueryInReact />
					<LodashInReact />
					<DataVisualization />
					<LineChart />
					<FetchDataAndVisualize />
					<Dashboard />
					<ExtendedDashboard />
				</div>
			</Router>
		</MyProvider>
	);
}

export default App;
