import '../styles/Content.css';
import { useState } from 'react';
import { FaBeer } from "react-icons/fa";

const Content = () => {
    const initialGrocery = [
        { id: 1, name: "Cookie", type: "bake", description: "Cookie with oat meal raisins", checked: false },
        { id: 2, name: "Pomelo", type: "fruit", description: "Seedless pomelo fruit with riped chlorophyll", checked: true },
        { id: 3, name: "Menudo", type: "dish", description: "Menudo meat with potatoes and orange peanuts", checked: true }
    ];

    const handleLoading = () => {
        let savedGrocery = JSON.parse(localStorage.getItem('groceryItems'));
        if((savedGrocery.length) === 0 ){
            localStorage.setItem('groceryItems', JSON.stringify(initialGrocery));
        } else {
            return savedGrocery;
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

    return (
        <div className="container-div">
            {grocery.length === 0 ? (
                <p>The items are still loading...</p>
            ) : (
                <ul className="grocery-list">
                    {grocery.map((item) => (
                        <li className="grocery-item" key={item.id}>
                            <input
                                type="checkbox"
                                checked={item.checked}
                                onChange={() => handleChecking(item.id)}
                            />
                            <div className="grocery-name">{item.name}</div>
                            <FaBeer
                                className="delete-grocery-button"
                                onClick={() => handleDeleting(item.id)}
                            />
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default Content;
