import React, { useContext, useState } from 'react';
import { CategoryContext } from '../../App';

const Header = (props) => {
    // const [count, setCount] = useState(0);
    const [category, setCategory] = useContext(CategoryContext);

    //const {setCount} = props;
    return (
        <div>
            <h1>This is header:{category}</h1>
            <button onClick={() => setCategory('laptop')}>Laptop</button>
            <button onClick={() => setCategory('mobile')}>Mobile</button>
            <button onClick={() => setCategory('camera')}>Camera</button>
        </div>
    );
};

export default Header; 