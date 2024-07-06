import logo from './logo.svg';
import './App.css';
import Navbar from'./components/navbar';
import Footer from './components/footer';
import Catalog from './components/catalog';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Catalog></Catalog>
      <Footer/>
    </div>
  );
}

export default App;
