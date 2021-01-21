import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import MovieState from './context/MovieState';
import './App.css';
import Home from './pages/Home';
import Detail from './pages/Detail';
import Footer from './components/Footer';
import Appbar from './components/Appbar';
import Search from './pages/Search';
import Pagination from './pages/Pagination';

function App() {
  return (
    <MovieState>
      <Router>
        <Appbar />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/search' exact component={Search} />
          <Route path='/detail/:id' exact component={Detail} />
          <Route path='/pagination' exact component={Pagination} />
        </Switch>
        <Footer />
      </Router>
    </MovieState>
  );
}

export default App;
