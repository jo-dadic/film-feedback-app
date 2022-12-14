import { Routes, Route } from "react-router-dom";
import StartPage from "./pages/StartPage";
import SuccessPage from "./pages/SuccessPage";
import ErrorPage from "./pages/ErrorPage";

import "./App.css";

const App: React.FC = () => {
	return (
		<div className="App">
			<Routes>
				<Route path="/" element={<StartPage />} />
				<Route path="/success" element={<SuccessPage />} />
				<Route path="/*" element={<ErrorPage />} />
			</Routes>
		</div>
	);
};

export default App;
