import React, { useState } from 'react';
import ProductRow from '../components/ProductRow.js';             

function OrderPage({products}) {
    return(
        <>
            <h2>Order</h2>
            <article>
                <h3 className = "orderintro">
                    Welcome to our product page. Please make a selection below.
                </h3> 
                <p>Select the desired amount you would like to order for each product. Limit 10 per item.</p>
                <table id="prodTable" className='prodTable'>
                    <caption>Current products available</caption>
                    <thead>
                        <tr>
                            <th>Company, Product</th>
                            <th>Price</th>
                            <th>Desired Quantity</th>
                        </tr>
                    </thead>
                    <tbody>
                        {products.map((desiredProd, index) =>
                            <ProductRow
                                product={desiredProd}
                                key={index}
                            />
                        )}
                    </tbody>
                    <tfoot>
                    </tfoot>
                </table>
            </article>
        </>
    )
}

export default OrderPage;