import React, { useEffect, useState } from 'react';
import Item from './Item';

const ItemList = () => {

    const [localItems, setLocaItems] = useState([]);

    useEffect(() => {

        const items = [
            {id: 1, name: 'Remera', stock: 5, price: '$800', img: 'https://d368r8jqz0fwvm.cloudfront.net/7573-product_lg/remera-de-mujer-pierce.jpg'},
            {id: 2, name: 'Pantalon', stock: 4, price: '$700', img: 'https://d368r8jqz0fwvm.cloudfront.net/18714-product_lg/pantalon-deportivo-de-mujer-belkis.jpg'},
            {id: 3, name: 'Bolso', stock: 3, price: '$1000', img: 'https://cyzone.tiendabelcorp.com/cdn-cgi/image/width=1200,fit=contain,f=auto/https://belc-bigdata-mdm-images-prd.s3.amazonaws.com/images/FotoProductoFondoBlancoWebRedes/210090649_fotofondoblanco.jpg'},
        ]

        const filterProducts = items.filter(products => products.id === 1)

        const getItems = (products) => {
            return new Promise((resolve, reject) => {
                setTimeout(() => {
                    resolve(filterProducts)
                }, 2000)
            })
        }

        getItems(items)
            .then(result => setLocaItems(result))
            .catch(error => console.log(error))

    }, [])

    return(
        <div className='mt-4 d-flex justify-content-center'>
            {
                localItems !== [] && localItems.map((item) => (
                    <div>
                        <Item product={item}/>
                    </div>
                ))
            }
        </div>
    )
}

export default ItemList