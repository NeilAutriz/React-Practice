import { FaPlus } from 'react-icons/fa';
import '../styles/AddItem.css'
import { useState } from 'react';

const AddItem = ({grocery, setGrocery}) => {
    const [newItem, setNewItem] = useState('')
    const [newType, setNewType] = useState('')
    const [newDesc, setNewDesc] = useState('')

    const handleName = (e) => {
        setNewItem(e.target.value)
    }

    const handleType = (e) => {
        setNewType(e.target.value)
    }

    const handleDesc = (e) => {
        setNewDesc(e.target.value)
    }

    const submitNewItem = (e) => {
        e.preventDefault();
        handleAdding(newItem, newType, newDesc);
        setNewItem('');
        setNewType('');
        setNewDesc('');
    }

    const handleAdding = (itemName, itemType, itemDesc) => {    
        const newId = Number(grocery.length + 1);
        const createdItem = {id: newId, name: itemName, type:itemType, description:itemDesc, checked: false}
        const updatedGrocery = [...grocery, createdItem];
        setGrocery(updatedGrocery);
    }

    return(
        <form className='add-form' onSubmit={(e) => submitNewItem(e)}>
            <input className="input-holder"type="text" required="true" placeholder='Add Item' value={newItem} onChange={(e) => handleName(e)} />
            <input className="type-holder"type="text" required="true" placeholder='Add Type' value={newType} onChange={(e) => handleType(e)} />
            <input className="desc-holder"type="text" required="true" placeholder='Add Description' value={newDesc} onChange={(e) => handleDesc(e)} />

            <button className="submit-button" type='submit'>
                <FaPlus className='submit-icon'/>
            </button>
        </form>
    )
}


export default AddItem;