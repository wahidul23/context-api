import React, { useContext } from 'react';
import { CategoryContext } from '../../App';

const CategoryDetails = (props) => {
    //const category = useContext(CategoryContext);
    const {name} = props.product;
    return (
        <div>
            <h6>This category Detail has:{name}</h6>
        </div>
    );
};

export default CategoryDetails;