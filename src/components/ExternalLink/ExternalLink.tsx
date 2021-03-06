import style from './ExternalLink.module.scss';

interface Props {
  link: string;
  linkName: string;
}
const ExternalLink: React.FC<Props> = ({ children, linkName, link }) => {
  return (
    <a
      href={link}
      className={style.link}
      target="_blank"
      rel="noopener noreferrer"
    >
      {children ? (
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <p>{linkName}</p>
          {children}
        </div>
      ) : (
        <p>{linkName}</p>
      )}
    </a>
  );
};

export default ExternalLink;
