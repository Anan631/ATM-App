import { Outlet, useNavigate } from "react-router-dom";
import { useAuth } from "./hooks/useAuth";
import Navbar from "./components/common/Navbar";

function App() {
  const { logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/", { replace: true });
  };

  return (
    <div style={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}>
      <Navbar onLogout={handleLogout} />
      <main style={{ flex: 1, padding: "1rem" }}>
        <Outlet />
      </main>
    </div>
  );
}

export default App;
