import Footer from 'components/Footer/Footer';
import Header from 'components/Header/Header';
import Main from 'components/Main/Main';
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import style from './App.module.scss';

function App() {
  return (
    <Router>
      <div className={style.main}>
        <Header />
        <Main />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
