import React, { useEffect, useState } from 'react';
import Item from './ItemDetail';

const ItemDetailList = ({product}) => {

    return(
        <div className='mt-4 d-flex justify-content-center'>
            
                    <div>
                        <Item product={product} productId={product.id}/>
                    </div>
                
        </div>
    )
}

export default ItemDetailList