import logo from './logo.svg';
import './App.css';
import { Link, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import ReactQueryPage from './pages/ReactQueryPage';
import NormalPage from './pages/NormalPage';

function App() {
  return (
    <div className='container'>
      <nav>
        <Link to="/">Homepage</Link>
        <Link to="/normal">NormalPage</Link>
        <Link to="/reactquery">React Query</Link>
      </nav>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/normal' element={<NormalPage />} />
        <Route path='/reactQuery' element={<ReactQueryPage />} />
      </Routes>
    </div>
  );
}

export default App;
