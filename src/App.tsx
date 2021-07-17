import Footer from 'components/Footer/Footer';
import Header from 'components/Header/Header';
import Main from 'components/Main/Main';
import { QueryClientProvider } from 'react-query'
import { BrowserRouter as Router } from 'react-router-dom';
import { ReactQueryDevtools } from 'react-query/devtools';
import { queryClient } from 'state/cache';
import style from './App.module.scss';

const App: React.FC = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <div className={style.main}>
          <Header />
          <Main />
          <Footer />
        </div>
        <ReactQueryDevtools position="bottom-right" />
      </Router>
    </QueryClientProvider>
  );
}

export default App;
