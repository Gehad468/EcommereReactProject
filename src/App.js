import './App.css';
import Login from './Pages/Login';
import Navbar from './Component/Navbar';
import Register from './Pages/Register';
import Home from './Pages/Home';
import Products from './Pages/Products';
import Cart from './Pages/Cart';
import ProductsByCategory from './Pages/ProductsByCategory';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';

import NotFound from './Pages/NotFound';
import ProductDetails from './Pages/ProductDetails';
import Footer from './Component/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import FavoriteProducts from './Pages/favoritProduct';

function App() {

    return (
      <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}> {/* Ensure the container fills the entire viewport height */}
        <BrowserRouter>
          <Navbar />
          <div className="container p-33px" style={{ flex: 1 }}> {/* Let the content area grow to fill available space */}
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/login" component={Login} />
              <Route exact path="/register" component={Register} />
              <Route exact path="/products" component={Products} />
              <Route exact path="/cart" component={Cart} />
              <Route exact path="/FavoriteProducts" component={FavoriteProducts} />
              <Route path="/category/:category" component={ProductsByCategory} />
              <Route exact path="/ProductDetails/:id" component={ProductDetails} />
              <Route exact path="*" component={NotFound} />
            </Switch>
          </div>
          <Footer/>
        </BrowserRouter>
      </div>
    );
  }

  export default App;