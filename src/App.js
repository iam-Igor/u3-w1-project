import MyNavbar from "./components/MyNavbar";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Myheader from "./components/MyHeader";
import MainContent from "./components/MainContent";
import MyFooter from "./components/MyFooter";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import AccountPage from "./components/AccountPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MyNavbar />} />
        {/* Altri componenti come <MyHeader /> e <MainContent /> */}
        <Route path="/Account" element={<AccountPage />} />
      </Routes>
    </Router>
  );
}

export default App;
