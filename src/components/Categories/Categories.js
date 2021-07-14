import React, { useContext, useEffect, useState } from 'react';
import { CategoryContext } from '../../App';
import CategoryDetails from '../CategoryDetails/CategoryDetails';

const allProducts = [{name: 'Lenovo', category:'laptop'}, {name: 'HP', category:'laptop'}, {name: 'Asus', category:'laptop'},
{name: 'samsung', category:'mobile'},{name: 'Nokia', category:'mobile'},{name: 'Xioami', category:'mobile'},
{name: 'Nikkon', category:'camera'},{name: 'Canon', category:'camera'},{name: 'Sony', category:'camera'}];
const Categories = () => {
    const [category] = useContext(CategoryContext);
    const [products, setProducts] = useState([]);
    useEffect(() => {
        console.log({category});
        const matchProducts = allProducts.filter(pd => pd.category.toLowerCase() === category.toLowerCase());
        setProducts(matchProducts);
    }, [category])
    return (
        <div>
            <h1>This is for category:{category}</h1>
             {
                 products.map(pd => <CategoryDetails product = {pd}></CategoryDetails>)
             }
        </div>
    );
};

export default Categories;