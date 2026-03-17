import { Link } from "react-router-dom";

function Footer() {
  return (
    
    <footer className="footer">
      <Link to="/home" className="footer-link">
        Ecosystem
      </Link>
      
      <Link to="/about" className="footer-link">
        About
      </Link>

      

      
      {/* <Link to="/grok" className="footer-link">
        Grok Case Study
      </Link> */}
      {/* <Link to="/recs" className="footer-link">
        Recommendations
      </Link> */}

      {/* <a
        href="https://arxiv.org/abs/2602.04759"
        target="_blank"
        className="footer-link"
      >
        Research Paper
      </a> */}

      {/* <a
        href="https://arxiv.org/abs/2602.04759"
        target="_blank"
        className="footer-link"
      >
        Stay Updated
      </a>
       */}
    </footer>
  );
}

export default Footer;
