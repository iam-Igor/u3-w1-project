import MyNavbar from "./components/MyNavbar";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import AccountPage from "./components/AccountPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MyNavbar />} />

        <Route path="/Account" element={<AccountPage />} />
      </Routes>
    </Router>
  );
}

export default App;
