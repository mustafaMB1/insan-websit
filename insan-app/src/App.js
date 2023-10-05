import './App.css';
import {BrowserRouter as Router , Route , Routes} from 'react-router-dom'
import Home from './pages/Home/Home';
import Signup from './components/Signup/Signup';
import Book from './components/Book/Book';

function App() {
  return (
    <>
     <Router>
          <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/Signup' element={<Signup/>}/>
            <Route path='/Book' element={<Book/>}/>       
          </Routes>
     </Router>
    </>
  );
}

export default App;
