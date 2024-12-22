import { FaPlus } from 'react-icons/fa';
import '../styles/AddItem.css'
import { useState } from 'react';



const AddItem = ({grocery, setGrocery, saveToLocal}) => {
    
    const [newItem, setNewItem] = useState('')

    const handleType = (e) => {
        setNewItem(e.target.value)
    }

    const submitNewItem = (e) => {
        e.preventDefault();
        handleAdding(newItem);
        setNewItem('');
    }

    const handleAdding = (itemName) => {    
        const newId = Number(grocery.length + 1);
        const createdItem = {id: newId, name: itemName, type:null, description:null, checked: false}
        const updatedGrocery = [...grocery, createdItem];
        setGrocery(updatedGrocery);
        saveToLocal(updatedGrocery);
    }

    return(
        <form className='add-form' onSubmit={(e) => submitNewItem(e)}>
            <input className="input-holder"type="text" required="true" placeholder='Add Item' value={newItem} onChange={(e) => handleType(e)}>

            </input>
            <button className="submit-button" type='submit'>
                <FaPlus className='submit-icon'/>
            </button>
        </form>
    )
}


export default AddItem;