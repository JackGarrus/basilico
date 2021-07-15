import React from 'react';
import style from './Subtitle.module.scss';

interface SubtitleProps {
  words: string;
}

const Subtitle: React.FC<SubtitleProps> = ({ words }) => {
  return <p className={style.subtitle}>{words}</p>;
};

export default Subtitle;
