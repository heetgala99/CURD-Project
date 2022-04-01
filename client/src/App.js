import './App.css';
import Home from './Components/Home.jsx';
import Form from './Components/Form.jsx';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavBar from './Components/Navbar.jsx';

function App() {
  return (
    <Router>
      <div className="App">
        <NavBar />
        <div className="content">
          <Routes>
            <Route exact path='/' element={ <Home /> } />
            <Route path='/create' element={ <Form /> } />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
