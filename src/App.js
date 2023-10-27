import MyNavbar from "./components/MyNavbar";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Myheader from "./components/MyHeader";
import MainContent from "./components/MainContent";

function App() {
  return (
    <div className="container-fluid p-0 bg-black">
      <MyNavbar />
      <Myheader />
      <MainContent />
    </div>
  );
}

export default App;
