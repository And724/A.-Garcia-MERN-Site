import React, { useState } from 'react';
import ProductQuantity from './ProductQuantity';      


function ProductRow({product}) {
    return(
        <tr>
            <td>
                {product.company}, {product.product}
            </td>
            <td>
                {product.price}
            </td>
            <td> <ProductQuantity /> </td>
        </tr>
    )
}

export default ProductRow;