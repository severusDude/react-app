import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainLayout from "./MainLayout";
import Home from "./app/home/Home";
import About from "./app/about/About";

function App() {
	return (
		<>
			<Router>
				<Routes>
					<Route path="/" element={<MainLayout />}>
						<Route index element={<Home />} />
						<Route path="/about" element={<About />} />
					</Route>
				</Routes>
			</Router>
		</>
	);
}

export default App;
