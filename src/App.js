import { BrowserRouter } from "react-router-dom";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Main from "./components/Main";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Header>
        {(isOpen) => <Navbar isOpen={isOpen}/>}
      </Header>
      <Main />
      <Footer />
    </BrowserRouter>
  );
}

export default App;
