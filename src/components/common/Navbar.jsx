import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";
import { useTheme } from "../../context/ThemeContext"; 
import Button from "./Button";
import "./Navbar.css";

export default function Navbar() {
  const { user, logout } = useAuth();
  const { isDark, toggleTheme } = useTheme();
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);

  const handleLogout = () => {
    logout();
    navigate("/", { replace: true });
  };

  const links = [
    { to: "/dashboard", label: "Dashboard" },
    { to: "/deposit", label: "Deposit" },
    { to: "/withdraw", label: "Withdraw" },
    { to: "/history", label: "History" },
    { to: "/watchlist", label: "Watchlist" },
    { to: "/settings", label: "Settings" },
  ];

  return (
    <nav className="navbar">
      <div className="navbar-container">
        
        <div className="navbar-brand">
          <span className="navbar-icon">🏦</span>
          <span className="navbar-name">Smart ATM</span>
        </div>

        <div className={`nav-links ${menuOpen ? "open" : ""}`}>
          {links.map((link) => (
            <Link key={link.to} to={link.to} onClick={() => setMenuOpen(false)}>
              {link.label}
            </Link>
          ))}
        </div>

        
        <div className="nav-actions">
          <button onClick={toggleTheme} className="theme-btn" title="Toggle theme">
            {isDark ? "☀️" : "🌙"}
          </button>

          {user && <span className="user-name">{user.first_name}</span>}

          <Button 
            onClick={handleLogout} 
            variant="danger"
            className="logout-btn"
          >
            Logout
          </Button>

          <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)}>
            ☰
          </button>
        </div>
      </div>
    </nav>
  );
}
