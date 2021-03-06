import { ReactComponent as Leaf } from 'icons/recipe-type/leaf.svg';
import style from './Header.module.scss';
import { NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <header className={style.container}>
      <NavLink to="/" className={style.logo}>
        <div className={style.title}>
          <h1>Basilico </h1>
          <Leaf className={style.leaf} />
          <p className={style.subtitle}>
            - Italian recipes for italian food lovers
          </p>
        </div>
      </NavLink>
    </header>
  );
};

export default Header;
