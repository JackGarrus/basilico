import style from './Subtitle.module.scss';

interface Props {
  text: string;
}

const Subtitle: React.FC<Props> = ({ text }) => (
  <p className={style.subtitle}>{text}</p>
);

export default Subtitle;
