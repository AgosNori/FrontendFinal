import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="containerF">
        <div className="footer-content">
          <div className="footer-logo">
            <img
              src="https://github.com/AgosNori/NoriegaAgostina--Goddesses/blob/master/img/logo.png?raw=true"
              alt="Logo del sitio"
            />
          </div>


        </div>
        <div className='mapa'>
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d73583.26043371817!2d-68.38520332320627!3d-54.806736305440246!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xbc4c22b5bad109bf%3A0x5498473dba43ebfc!2sUshuaia%2C%20Tierra%20del%20Fuego!5e0!3m2!1ses-419!2sar!4v1696297806578!5m2!1ses-419!2sar" width="400" height="300"  loading="lazy"/>
        </div>
        <div className="footer-social">
          <ul>
            <li>
              <a href="#" target="_blank" rel="noopener noreferrer">
                <img src='https://cdn.icon-icons.com/icons2/694/PNG/512/Instagram_Rounded_icon-icons.com_61576.png' width="40" />
              </a>
            </li>
            <li>
              <a href="#" target="_blank" rel="noopener noreferrer">
                <img src='https://cdn.icon-icons.com/icons2/694/PNG/512/Facebook_Rounded_icon-icons.com_61578.png' width="40" />
              </a>
            </li>
            <li>
              <a href="#" target="_blank" rel="noopener noreferrer">
                <img src='https://cdn.icon-icons.com/icons2/694/PNG/512/Twitter_Rounded_icon-icons.com_61577.png' width="40" />
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Tu Sitio Web. Todos los derechos reservados.</p>
      </div>
    </footer>
  );
}

export default Footer;
