import "./App.css";
import Home from "./pages/Home/Home";
import LvlOne from "./pages/LvlOne/LvlOne";
import LvlTwo from "./pages/LvlTwo/LvlTwo";
import LvlThree from "./pages/LvlThree/LvlThree";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
	return (
		<div className="App">
			Hello
			<BrowserRouter>
				<Routes>
					<Route path="/home" element={<Home />} />
					<Route path="/One" element={<LvlOne />} />
					<Route path="/Two" element={<LvlTwo />} />
					<Route path="/Three" element={<LvlThree />} />
				</Routes>
			</BrowserRouter>
		</div>
	);
}

export default App;
