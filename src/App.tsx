import './App.css';
import { Route, Routes } from 'react-router-dom';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import Redefine from './pages/Redefine';
import { Home } from './pages/Home';
import Profile from './pages/Profile';
import EditProfile from './pages/EditProfile';
import AddMovie from './pages/AddMovie';

function App() {
  return (
    <Routes>
      <Route path="/" element={ <SignIn /> } />
      <Route path="/sign-up" element={ <SignUp /> } />
      <Route path="/redefine" element={ <Redefine /> } />
      <Route path="/home" element={ <Home /> } />
      <Route path="/profile" element={ <Profile /> } />
      <Route path="/edit" element={ <EditProfile /> } />
      <Route path="/addMovie" element={ <AddMovie /> } />
    </Routes>

  );
}

export default App;
