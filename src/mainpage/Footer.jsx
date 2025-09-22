import "./Footer.css"
import { FaFacebookF, FaInstagram, FaTiktok } from "react-icons/fa";
import { FiDownload } from "react-icons/fi";


const Footer = () => {
  return (
    <footer className="footer">
      <h1 className="footer-title">HVYN CLUB</h1>

      <div className="footer-info">
        <span className="footer-phone">+068 5681 96 96</span>

        <span className="footer-address">
          298 OCEAN AVE ST, BOSTON, MA 90028
          <br />
          9AM – 9PM EVERY DAY
        </span>
      </div>

      <hr className="footer-line" />

      <div className="footer-bottom">
        <div className="footer-download">
          <FiDownload className="download-icon" />
          <span>
            DOWNLOAD <br />
            BROCHURE (.PDF)
          </span>
        </div>

        <span className="footer-copy">
          © 2025 ARCHIN COMPLEX RESIDENCE
        </span>

        <div className="footer-social">
  <a href="#"><FaFacebookF /></a>
  <a href="#"><FaInstagram /></a>
  <a href="#"><FaTiktok /></a>

        </div>
      </div>
    </footer>
  );
};

export default Footer;
