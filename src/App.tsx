import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import Courses from "./pages/Courses";
import Faculty from "./pages/Faculty";
import Graduate from "./pages/Graduate";
import Home from "./pages/Home";
import Research from "./pages/Research";
import Resources from "./pages/Resources";
import Undergraduate from "./pages/Undergraduate";

function App() {
	return (
		<Router>
			<Layout>
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/undergraduate" element={<Undergraduate />} />
					<Route path="/graduate" element={<Graduate />} />
					<Route path="/courses" element={<Courses />} />
					<Route path="/research" element={<Research />} />
					<Route path="/people" element={<Faculty />} />
					<Route path="/resources" element={<Resources />} />
				</Routes>
			</Layout>
		</Router>
	);
}

export default App;
