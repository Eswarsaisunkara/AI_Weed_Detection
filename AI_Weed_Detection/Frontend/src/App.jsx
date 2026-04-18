import { useState } from "react"

import "./App.css"
import Navbar from "../src/components/Navbar"
import Home from "../src/pages/Home"
import About from "../src/pages/About"
import Architecture from "./pages/Architecture"
import Plots from "../src/pages/Plots"
import Results from "../src/pages/Results"
import Demo from "../src/pages/Demo"

const pages = {
  home: { component: Home, label: "Home" },
  dataset: { component: About, label: "About" },
  architecture: { component: Architecture, label: "Architecture" },
  plots: { component: Plots, label: "Plots" },
  results: { component: Results, label: "Results" },
  demo: { component: Demo, label: "Demo Link" },
}

function App() {
  const [activePage, setActivePage] = useState("home")
  const [theme, setTheme] = useState("light")
  const ActivePage = pages[activePage].component

  return (
    <div className="app-shell" data-theme={theme}>
      <Navbar
        items={pages}
        activePage={activePage}
        onNavigate={setActivePage}
        theme={theme}
        onToggleTheme={() => setTheme((current) => current === "light" ? "dark" : "light")}
      />

      <main className="page-stage">
        <div className="page-view" key={activePage}>
          <ActivePage onNavigate={setActivePage} />
        </div>
      </main>
    </div>
  )
}

export default App
