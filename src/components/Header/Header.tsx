import { ReactComponent as Leaf } from 'assets/icons/recipe-type/leaf.svg';
import style from './Header.module.scss';
//import { NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <header className={style.container}>
      <h1>Basilico </h1>
      <Leaf className={style.leaf} />
      <p className={style.subtitle}>
        - Italian recipes for italian food lovers
      </p>
    </header>
  );
};

export default Header;
/*
<NavLink to="/" className={header.logo}>
          <h1>Basilico </h1>
          <Leaf className={header.Leaf} />
          <p className={header.subtitle}>
            {' '}
            - Italian recipes for italian food lovers
          </p>
        </NavLink>
 */