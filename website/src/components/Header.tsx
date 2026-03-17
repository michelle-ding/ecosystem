import { Link } from "react-router-dom";
function Header() {
  return (
    <header style={{display: "flex", gap: "20px", padding: "20px"}}>
      <Link to="/home" className="footer-link">
        AIG-NCII Ecosystem (v1.0)
      </Link>
    </header>
  );
}

export default Header;
