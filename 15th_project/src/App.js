import { Route, Routes, Redirect } from 'react-router-dom';
import './App.css';
import Welcome from './pages/Welcome';
import Products from './pages/Products';
import MainHeader from './components/MainHeader';
import ProductDetails from './pages/Product-details';

function App() {
  return (
    <>
      <MainHeader></MainHeader>
      <Routes>
        <Route path="/welcome/*" element={<Welcome />} />
        <Route path="/products" exact element={<Products />} />
        <Route path="/products/:productId" element={<ProductDetails />}/>
      </Routes>
    </>
  );
}

export default App;

// our-domain.com/ --> loads component A
// our-domain.com/products --> loads component B