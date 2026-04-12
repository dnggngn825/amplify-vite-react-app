import { Outlet } from "react-router-dom";
import Header from "./components/Header";
import "./App.css";

function App() {
  return (
    <div className="site-layout">
      <Header />
      <main className="site-main">
        <Outlet />
      </main>
      <footer className="site-footer">
        <p className="site-footer__brand">Oda</p>
        <p className="site-footer__copy">&copy; 2026 Oda. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
