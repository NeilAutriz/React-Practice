import '../styles/Content.css';
import { useState, useEffect } from 'react';
import GroceryList from './GroceryList';
import AddItem from './AddItem';
import FilterItem from './FilterItem';
import ApiRequest from './ApiRequest';

const Content = ({ initialGrocery }) => {
    const handleLoading = () => {
        let loadedGrocery = JSON.parse(localStorage.getItem('groceryItems'));
        if(loadedGrocery.length === 0 && loadedGrocery){
            return [];
        } else {
            return loadedGrocery;
        }
    }

    const groceryItemsURL = 'http://localhost:1000/items'
    const [grocery, setGrocery] = useState(handleLoading());
    const [loadingError, setLoadingError] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const loadGroceryItems = async () => {
            try{
                const dataItemsLoaded = await fetch(groceryItemsURL);
                if(!(dataItemsLoaded.ok)){
                    throw new Error('Error in loading the data');
                }
                const groceryData = await dataItemsLoaded.json();
                console.log(groceryData);
                setGrocery(groceryData);
            }
            catch(error){
                console.log(error.message);
                setLoadingError(error.message);
            } finally{
                setIsLoading(false);
            }

        }
        
        setTimeout(() => {
            loadGroceryItems();
        }, 3000);


    }, []);

    useEffect(() => {
        localStorage.setItem('groceryItems', JSON.stringify(grocery));
        console.log('Item updated!');
    }, [grocery])

    // Handle checking/unchecking items
    const handleChecking = async (itemID) => {
        const updatedGrocery = grocery.map((item) =>
            item.id === itemID ? { ...item, checked: !item.checked } : item
        );
        setGrocery(updatedGrocery);

        const updatedItem = grocery.filter((item) => item.id === itemID)

        const apiOption = {
            method: "PATCH", 
            header: {
                "Content-Type" : "application/json"
            },
            body: JSON.stringify({checked: !updatedItem[0].checked})
        }

        const editRequestURL = `${groceryItemsURL}/${itemID}`;
        console.log(editRequestURL);
        const errorInAdding = await ApiRequest(editRequestURL, apiOption);
        console.log(errorInAdding);
        setLoadingError(errorInAdding);

    };

    // Handle deleting items
    const handleDeleting = async (itemID) => {
        const updatedGrocery = grocery.filter((item) => item.id !== itemID);
        setGrocery(updatedGrocery);

        const apiDeleteOption = {
            method: 'DELETE', 
        }
        const urlToDelete = `${groceryItemsURL}/${itemID}`
        const errorInDeleting = await ApiRequest(urlToDelete, apiDeleteOption);
        console.log(errorInDeleting);
        setLoadingError(errorInDeleting);
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
            <AddItem grocery={grocery} setGrocery={setGrocery} groceryItemsURL={groceryItemsURL} loadingError={loadingError} setLoadingError={setLoadingError}/>
            <FilterItem className="filter-section" grocery={grocery} setGrocery={setGrocery} initialGrocery={initialGrocery}/>
            {loadingError && <h1 className='loading-message'> ❌ Error detected in fetching the data ❌ </h1>}
            {isLoading && <h1 className='loading-message'> ⌛The items are still being loaded⌛ </h1>}
            {grocery.length === 0 ? (
                <h1 className='loading-message'>🛒There are no items yet🛒</h1>
            ) : (
                <>
                <GroceryList grocery={grocery} handleChecking={handleChecking} designChecked={designChecked} handleDeleting={handleDeleting}/>
                </>
            )}
        </div>
    );
};

export default Content;
