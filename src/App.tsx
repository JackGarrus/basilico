import Footer from 'components/Footer/Footer';
import Header from 'components/Header/Header';
import Main from 'components/Main/Main';
import style from './App.module.scss';

function App() {
  return (
    <div className={style.main}>
      <Header />
      <Main />
      <Footer />
    </div>
  );
}

export default App;