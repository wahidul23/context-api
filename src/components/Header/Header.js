import React, { useContext, useState } from 'react';
import { CategoryContext } from '../../App';

const Header = (props) => {
    // const [count, setCount] = useState(0);
    const [category, setCategory] = useContext(CategoryContext);

    //const {setCount} = props;
    return (
        <div>
            <h1>This is header:{category}</h1>
            <button onClick={() => setCategory(category+1)}>Increase</button>
        </div>
    );
};

export default Header; 