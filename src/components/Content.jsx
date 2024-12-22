import '../styles/Content.css';
import { useState } from 'react';
import GroceryList from './GroceryList';
import AddItem from './AddItem';

const Content = ({ initialGrocery }) => {
    const handleLoading = () => {
        let loadedGrocery = JSON.parse(localStorage.getItem('groceryItems'));
        if(loadedGrocery.length === 0 && loadedGrocery){
            localStorage.setItem('groceryItems', JSON.stringify(initialGrocery));
        } else {
            return loadedGrocery;
        }
    }
    const [grocery, setGrocery] = useState(handleLoading());
    
    // Save the updated grocery list to localStorage
    const saveToLocal = (updatedList) => {
        localStorage.setItem('groceryItems', JSON.stringify(updatedList));
    };

    // Handle checking/unchecking items
    const handleChecking = (itemID) => {
        const updatedGrocery = grocery.map((item) =>
            item.id === itemID ? { ...item, checked: !item.checked } : item
        );
        setGrocery(updatedGrocery);
        saveToLocal(updatedGrocery);
    };

    // Handle deleting items
    const handleDeleting = (itemID) => {
        const updatedGrocery = grocery.filter((item) => item.id !== itemID);
        setGrocery(updatedGrocery);
        saveToLocal(updatedGrocery);
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
            <AddItem grocery={grocery} setGrocery={setGrocery} saveToLocal={saveToLocal}/>
            {grocery.length === 0 ? (
                <h1 className='loading-message'>The items are still loading...⌚⌛</h1>
            ) : (
                <GroceryList grocery={grocery} handleChecking={handleChecking} designChecked={designChecked} handleDeleting={handleDeleting}/>
            )}
        </div>
    );
};

export default Content;
