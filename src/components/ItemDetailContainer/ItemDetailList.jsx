import React, { useEffect, useState } from 'react';
import Item from './ItemDetail';

const ItemDetailList = () => {

    const [localItems, setLocaItems] = useState([]);

    useEffect(() => {

        // const url = "http://localhost:3001/items";

        const items = [
            {   id: 1, 
                name: 'Remera', 
                detail: 'Estampado en calidad Fotográfica, no se borra con el uso. La tela no genera pelotitas, no se achica y no destiñe con el lavado.  Entalladas al cuerpo (para que luzca suelta recomendamos pedir un talle más)', 
                price: '$800', 
                stock: 5,
                img: 'https://d368r8jqz0fwvm.cloudfront.net/7573-product_lg/remera-de-mujer-pierce.jpg'
            },
            
            {   id: 2, 
                name: 'Pantalon', 
                detail: 4, 
                price: '$700', 
                stock: 4,
                img: 'https://d368r8jqz0fwvm.cloudfront.net/18714-product_lg/pantalon-deportivo-de-mujer-belkis.jpg'
            },

            {   id: 3, 
                name: 'Bolso', 
                detail: 3, 
                price: '$1000',
                stock: 3, 
                img: 'https://cyzone.tiendabelcorp.com/cdn-cgi/image/width=1200,fit=contain,f=auto/https://belc-bigdata-mdm-images-prd.s3.amazonaws.com/images/FotoProductoFondoBlancoWebRedes/210090649_fotofondoblanco.jpg'
            },
        ]

        // fetch(url)
        //     .then((response) => {
        //         if (response.ok) {
        //             return response.json();
        //         } else {
        //             throw response;
        //         }
        //     })
        //     .then((localItems) => setLocaItems(localItems))
        //     .catch((error) => console.log('Alto error bro${error.status}'));

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

export default ItemDetailList