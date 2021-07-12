import React, { useContext } from 'react';
import { CategoryContext } from '../../App';

const CategoryDetails = () => {
    const category = useContext(CategoryContext);
    return (
        <div>
            <h6>This category Detail has:{category}</h6>
        </div>
    );
};

export default CategoryDetails;