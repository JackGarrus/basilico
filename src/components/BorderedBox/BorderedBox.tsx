import style from './BorderedBox.module.scss';

const BorderedBox: React.FC = ({ children }) => {
  return <div className={style.container}>{children}</div>;
};

export default BorderedBox;
