import { Link } from 'react-router-dom';

const Products = (props) => {
    return (
        <>
            <h1>The products page!</h1>
            <ul>
                <li><Link to="/products/p1">Books</Link></li>
                <li><Link to="/products/p2">Strippers</Link></li>
                <li><Link to="/products/p3">Mac</Link></li>
                <li><Link to="/products/p4">Laptops</Link></li>
            </ul>
        </>
    )
}

export default Products;