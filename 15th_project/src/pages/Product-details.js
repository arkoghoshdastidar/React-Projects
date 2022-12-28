import { useParams } from "react-router-dom";

const ProductDetails = () => {
    const params = useParams();
    const productId = params.productId;

    return (
        <>
            <h1> Product Details Page!</h1>
            <div>{productId}</div>
        </>
    )
}

export default ProductDetails;