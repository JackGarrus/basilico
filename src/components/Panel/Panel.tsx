import style from './Panel.module.scss';

const Panel: React.FC = ({ children }) => {
  return <div className={style.container}>{children}</div>;
};

export default Panel;
