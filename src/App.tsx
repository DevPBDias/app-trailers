import './App.css';
import { Route, Routes } from 'react-router-dom';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import Redefine from './pages/Redefine';
import { Home } from './pages/Home';
import Profile from './pages/Profile';
import EditProfile from './pages/EditProfile';
import AddMovie from './pages/AddMovie';
import Movies from './pages/Movies';
import Series from './pages/Series';
import Animes from './pages/Animes';
import Favorites from './pages/Favorites';
import Search from './pages/Search';
import MovieId from './pages/MovieId';

function App() {
  return (
    <Routes>
      <Route path="/" element={ <SignIn /> } />
      <Route path="/sign-up" element={ <SignUp /> } />
      <Route path="/redefine" element={ <Redefine /> } />
      <Route path="/home" element={ <Home /> } />
      <Route path="/profile/:id" element={ <Profile /> } />
      <Route path="/addMovie" element={ <AddMovie /> } />
      <Route path="/edit/:id" element={ <EditProfile /> } />

      <Route path="/movie/:id" element={ <MovieId /> } />
      <Route path="/movies" element={ <Movies /> } />
      <Route path="/series" element={ <Series /> } />
      <Route path="/animes" element={ <Animes /> } />
      <Route path="/favorites" element={ <Favorites /> } />
      <Route path="/search" element={ <Search /> } />
    </Routes>

  );
}

export default App;
