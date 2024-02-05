import './App.css';
import { Route, Routes } from 'react-router-dom';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import Redefine from './pages/Redefine';
import { Home } from './pages/Home';

function App() {
  return (
    <Routes>
      <Route path="/" element={ <SignIn /> } />
      <Route path="/sign-up" element={ <SignUp /> } />
      <Route path="/redefine" element={ <Redefine /> } />
      <Route path="/home" element={ <Home /> } />
    </Routes>

  );
}

export default App;
