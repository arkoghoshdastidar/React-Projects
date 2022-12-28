import ProductItem from './ProductItem';
import classes from './Products.module.css';

const Products = (props) => {
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        <ProductItem
          id="p1"
          title='Product1'
          price={6}
          description='This is a first product - amazing!'
        />
        <ProductItem
          id="p2"
          title='Product2'
          price={3}
          description='This is a second product - amazing!'
        />
        <ProductItem
          id="p3"
          title='Product3'
          price={9}
          description='This is a third product - amazing!'
        />
        <ProductItem
          id="p4"
          title='Product4'
          price={6}
          description='This is a fourth product - amazing!'
        />
      </ul>
    </section>
  );
};

export default Products;