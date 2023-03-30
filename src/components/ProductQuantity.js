
import React, { useState } from 'react';
import { GoTriangleUp, GoTriangleDown } from "react-icons/go";

function ProductQuantity() {
    const [quantity, setQuantity] = useState(0);

    const increaseQuantity = () => setQuantity(quantity === 10 ? quantity : quantity + 1)
    const decreaseQuantity = () => setQuantity(quantity === 0 ? 0 : quantity - 1)

    return(
        <div className="prodQuantity">
            <GoTriangleUp onClick={increaseQuantity} className="add"/>
            <span className="quantity">{quantity}</span>
            <GoTriangleDown onClick={decreaseQuantity} className="add"/>
        </div>
    )
}

export default ProductQuantity;