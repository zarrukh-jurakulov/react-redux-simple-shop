import './styles.css'
import Navbar from './components/navbar'
import MenuItems from './components/menuItems'
import ProductList from './components/productList'

function App() {
  return (
    <div className="App">
      <div className="navbarContainer">
        <Navbar />
      </div>
      <div className="content">
        <MenuItems />
        <ProductList />
      </div>
     
    </div>
  );
}

export default App;
