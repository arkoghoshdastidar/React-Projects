import Cart from './components/Cart/Cart';
import Layout from './components/Layout/Layout';
import Products from './components/Shop/Products';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';

function App() {
  const isShoppingCartVisible = useSelector(state => state.ui.isShoppingCartVisible);
  const cart = useSelector(state => state.cart);

  useEffect(()=>{
    fetch('https://console.firebase.google.com/u/0/project/asynchronous-redux/database/asynchronous-redux-default-rtdb/data/~2F/shopping-cart.json', {
      method: 'PUT',
      body: JSON.stringify(cart)
    });
  }, [cart]);

  return (
    <Layout>
      {isShoppingCartVisible && <Cart />}
      <Products />
    </Layout>
  );
}

export default App;