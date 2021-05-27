import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './components/UI/Header';
import HomePage from './pages/HomePage';
import ImageDetailPage from './pages/ImageDetailPage';

const App = () => {
  return (
    <Router>
      <Header title='Image Gallery'></Header>
      <main style={{ padding: '1.6rem 0rem' }} className='container'>
        <Switch>
          <Route exact path='/' component={HomePage}></Route>
          <Route exact path='/:id' component={ImageDetailPage}></Route>
        </Switch>
      </main>
    </Router>
  );
};

export default App;
