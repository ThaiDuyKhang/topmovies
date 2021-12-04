import "swiper/swiper.min.css";
import "./assets/boxicons-2.0.7/css/boxicons.min.css";
import "./App.scss";

import { BrowserRouter as Router} from "react-router-dom";

import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import RoutesMain from "./config/Routes";

function App() {
  return (
    <Router>
      <Header />
      <RoutesMain />
      <Footer />
    </Router>
  );
}

export default App;
