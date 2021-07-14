import Footer from 'components/Footer/Footer';
import Header from 'components/Header/Header';
import style from './App.module.scss';

function App() {
  return (
    <div className={style.main}>
      <Header />
      <Footer />
    </div>
  );
}

export default App;
