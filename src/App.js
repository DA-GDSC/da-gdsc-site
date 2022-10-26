import 'bootstrap/dist/css/bootstrap.min.css';
import HomePage from "./pages/HomePage";
import MaterialMain from './pages/Materials';
import NavBar from './components/navbar';
import Example from './components/example';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useRoutes,
} from "react-router-dom";

function App() {
  return (
    <Router>
      <NavBar/>
      <Routes>
       <Route exact path="/" element={<HomePage/>}/>
       <Route exact path="/materials" element={<MaterialMain/>}/>
       </Routes>
    </Router>
  );
 
}

export default App;
