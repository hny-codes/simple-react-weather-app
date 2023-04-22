import './footer.css';

const Footer = () => {
  return (
    <footer className='footer'>
      <a href='https://github.com/hny-codes' target='_blank'>
        <img
          className='github-logo'
          src='src\assets\logo-github.svg'
          alt='Github Logo'
        />
        <h3>hny-codes</h3>
      </a>
    </footer>
  );
};

export default Footer;
