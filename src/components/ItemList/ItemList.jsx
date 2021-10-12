import React, { useEffect, useState } from 'react';
import Item from './Item';
import { Link } from 'react-router-dom';
import { getFirestore } from '../../firebase';

const ItemList = () => {

    const [localItems, setLocaItems] = useState([]);

    React.useEffect(() => {
        const db = getFirestore();
        const productsCollection = db.collection('items');
        // const productsCollection = db.collection('items').where('price', '>', 800);

       productsCollection
       .get()
       .then((querySnapshot) => {
           if(querySnapshot.empty){
               console.log('No hay productos')
           } else {
                setLocaItems(querySnapshot.docs.map((doc) => ({...doc.data() })));
           }
        })
       .catch(() => {});

    }, []);

    useEffect(() => {

        // const items = [
        //     {   
        //         id: 1, 
        //         name: 'Remera', 
        //         stock: 5, 
        //         price: 800, 
        //         img: 'https://d368r8jqz0fwvm.cloudfront.net/7573-product_lg/remera-de-mujer-pierce.jpg'
        //     },
        //     {
        //         id: 2, 
        //         name: 'Pantalon', 
        //         stock: 4, 
        //         price: 700, 
        //         img: 'https://d368r8jqz0fwvm.cloudfront.net/18714-product_lg/pantalon-deportivo-de-mujer-belkis.jpg'
        //     },
        //     {
        //         id: 3, 
        //         name: 'Bolso', 
        //         stock: 3, 
        //         price: 1000, 
        //         img: 'https://www.dexter.com.ar/on/demandware.static/-/Sites-dabra-catalog/default/dw25b35a61/products/TO_160885/TO_160885-1.JPG'
        //     },
        // ]

        //const filterProducts = items.filter(products => products.id === 1)

        const getItems = (products) => {
            return new Promise((resolve, reject) => {
                setTimeout(() => {
                    resolve(products)
                }, 2000)
            })
        }

        // getItems(items)
        //     .then(result => setLocaItems(result))
        //     .catch(error => console.log(error))

    }, [])

    return(
        <div className='mt-4 d-flex justify-content-center'>
            {
                localItems !== [] && localItems.map((item) => (
                    <div>
                        {/* <NavLink to={'/item/:id'}><Item product={item}/></NavLink> */}
                        <Item product={item} productId ={item.id}/>
                    </div>
                ))
            }
        </div>
    )
}

export default ItemList