import '../styles/Content.css'
import { useState } from 'react'

const Content = () => {
    const [grocery, setGrocery] = useState('')
    const [name, setName] = useState('')
    const [count, setCount] = useState(0)
    
    const nameChoices = ['Mark', 'Neil', 'Autriz', 'Guinday']
    const sampleGrocery = ['orange🍑', 'apple🍎', 'banana🍌', 'grapes🍇']

    const getGrocery = () => {
          const groceryIndex = Math.floor(Math.random() * 4)
          let selectedGrocery = sampleGrocery[groceryIndex]
          setGrocery(selectedGrocery)
    }

    const getUserName = () => {
        let newNameIndex = Math.floor(Math.random() * 4)
        let newName = nameChoices[newNameIndex]
        console.log('Name changed to: ', newName)
        setName(newName)
    }

    const handleClick = () => {
        setCount(count+1)
        getGrocery()
        console.log(grocery)
    }

    return (
        <div className='container-div'>
            <h2>Hello, {name}👤 </h2>
            <h2>{grocery}</h2>
            <button className='item-button' onClick={handleClick}>Get grocery Items</button>
            <button className='name-button' onClick={getUserName}>Change Name </button>
        </div>
    )
}


export default Content