import style from './Headline.module.scss';
import cn from 'classnames';

interface HeadlineProps {
  text: string;
  size?: string;
  bold?: boolean;
}

const Headline: React.FC<HeadlineProps> = ({ size, text, bold }) => {
  return (
    <p
      className={cn(style.title, {
        [style.xsmall]: size === 'xs',
        [style.small]: size === 'sm',
        [style.default]: size === 'default',
        [style.medium]: size === 'md',
        [style.large]: size === 'lg',
        [style.xlarge]: size === 'xl',
        [style.xxlarge]: size === 'xxl',
      })}
    >
      {text}
    </p>
  );
};

export default Headline;
