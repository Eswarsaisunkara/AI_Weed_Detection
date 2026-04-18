import { Moon, Sun } from "lucide-react";

export default function Navbar({
  items,
  activePage,
  onNavigate,
  theme,
  onToggleTheme,
}) {
  return (
    <header className="site-nav">
      <div className="nav-left">
        <div className="brand-mark">🌿</div>
        <div className="brand-text">
          <h1>Weed Detection</h1>
          <span>AI Research</span>
        </div>
      </div>

      <nav className="nav-links">
        {Object.entries(items).map(([key, value]) => (
          <button
            key={key}
            className={`nav-chip ${activePage === key ? "active" : ""}`}
            onClick={() => onNavigate(key)}
          >
            {value.label}
          </button>
        ))}
      </nav>

      <div className="nav-right">
        <button
          className="theme-toggle"
          onClick={onToggleTheme}
          aria-label="Toggle theme"
        >
          {theme === "light" ? <Moon size={18} /> : <Sun size={18} />}
        </button>
      </div>
    </header>
  );
}