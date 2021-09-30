import React,  { useState }  from 'react';
import { useParams } from 'react-router';
import ItemDetailList from '../components//ItemDetailContainer/ItemDetailList.jsx';

const ItemDetailContainer = () => {
    
    const [localItems, setLocaItems] = useState([]);

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
            detail: 'Babucha Morley de mujer con bolsillos delanteros, cordón y elástico en la cintura', 
            price: '$700', 
            stock: 4,
            img: 'https://d368r8jqz0fwvm.cloudfront.net/18714-product_lg/pantalon-deportivo-de-mujer-belkis.jpg'
        },

        {   id: 3, 
            name: 'Bolso', 
            detail: 'Su cuero graneado y el detalle de tanzado y pompón de flecos crean un estilo único. La sofisticación está en la pureza y en el trabajo artesanal, sin perder su ocasión de uso diario.', 
            price: '$1000',
            stock: 3, 
            img: 'https://cyzone.tiendabelcorp.com/cdn-cgi/image/width=1200,fit=contain,f=auto/https://belc-bigdata-mdm-images-prd.s3.amazonaws.com/images/FotoProductoFondoBlancoWebRedes/210090649_fotofondoblanco.jpg'
        },
    ]


    const setProduct = React.useState({});
    const { id } = useParams();

    React.useState(() => {
        fetch(`http://localhost:3000/item/${id}`)
            .then((response) => response.json())
            .then((data) => setProduct(data))
            .catch((error) => console.log('Ups'))
    },[id])

    const filterProducts = items.filter(products => products.id === `http://localhost:3000/item/${id}`)
    
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

    return(
        <div>
            <section class="home-section">
                <div class="home-content">
                    <i class="fas fa-bars"></i>
                    <span class="text">Detalle de Producto</span>
                </div>
            </section>
            <ItemDetailList/>
        </div>
        )
}

export default ItemDetailContainer