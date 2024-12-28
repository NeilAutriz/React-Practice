import '../styles/Content.css';
import { useState, useEffect } from 'react';
import GroceryList from './GroceryList';
import AddItem from './AddItem';
import FilterItem from './FilterItem';

const Content = ({ initialGrocery }) => {
    
    const handleLoading = () => {
        let loadedGrocery = JSON.parse(localStorage.getItem('groceryItems'));
        if(loadedGrocery.length === 0 && loadedGrocery){
            return [];
        } else {
            return loadedGrocery;
        }
    }

    const [grocery, setGrocery] = useState(handleLoading());
    
    useEffect(() => {
        localStorage.setItem('groceryItems', JSON.stringify(grocery));
        console.log('Item updated!');
    }, [grocery])

    // Handle checking/unchecking items
    const handleChecking = (itemID) => {
        const updatedGrocery = grocery.map((item) =>
            item.id === itemID ? { ...item, checked: !item.checked } : item
        );
        setGrocery(updatedGrocery);
    };

    // Handle deleting items
    const handleDeleting = (itemID) => {
        const updatedGrocery = grocery.filter((item) => item.id !== itemID);
        setGrocery(updatedGrocery);
    };

    const designChecked = (itemChecked) => {
        if(itemChecked){
            return {textDecoration: "line-through"};
        } else {
            return {textDecoration: "none"};
        }
    }

    return (
        <div className="container-div">
            <AddItem grocery={grocery} setGrocery={setGrocery}/>
            <FilterItem className="filter-section" grocery={grocery} setGrocery={setGrocery} initialGrocery={initialGrocery}/>
            {grocery.length === 0 ? (
                <h1 className='loading-message'>🛒There are no items yet🛒</h1>
            ) : (
                <GroceryList grocery={grocery} handleChecking={handleChecking} designChecked={designChecked} handleDeleting={handleDeleting}/>
            )}
        </div>
    );
};

export default Content;
