import "./App.css";
import BootstrapMultiCarousel from "./BootstrapMulti";
import Checkout from "./Cartcheckout/Checkout.jsx";
import Footer from "./Footer/Footer.jsx";
import ProductDetail from "./ProductDetail/ProductDetail.jsx";


function App() {
  return (
    <div className="App">
      <div>
        <ProductDetail />
      </div>
      <div>
        <Checkout />
      </div>
      <div className="slider">
        <BootstrapMultiCarousel />
      </div>
      <div className="footer">
        <Footer />
      </div>
    </div>
  );
}

export default App;
