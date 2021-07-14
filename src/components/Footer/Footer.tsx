import style from './Footer.module.scss';

const Footer = () => {
  return (
    <footer className={style.container}>
      <div style={{ textAlign: 'center' }}>
        <p>Coded with love and hunger by</p>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.linkedin.com/in/nadia-guarracino17/"
        >
          Nadia Guarracino
        </a>
      </div>
      <br />
      <p style={{ display: 'flex', alignItems: 'center' }}>
        Be kind, this is a{' '}
        <span
          style={{ fontWeight: 600, color: 'orangered', marginLeft: '5px' }}
        >
          pre-alpha version!
        </span>
      </p>
      <br />
      <p>All receipes and images are not mine</p>
      <p>Thanks to freepik for some icons</p>
    </footer>
  );
};

export default Footer;
