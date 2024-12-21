import '../styles/Content.css'
import { useState } from 'react'
import { FaBeer } from "react-icons/fa";



const Content = () => {
    const [grocery, setGrocery] = useState([
        {id: 1, name:"Cookie", type:"bake", description:"Cookie with oat meal raisins", checked: false},
        {id: 2, name:"Pomelo", type:"fruit", description:"Seedless pomelo fruit with riped chlorophyll", checked: true},
        {id: 3, name:"Menudo", type:"dish", description:"Menudo meat with potatoes and orange peanuts", checked: true}
    ])

    return (
        <div className='container-div'>
            <ul className='grocery-list'>
                {grocery.map((item) => (
                    <li className='grocery-item'>
                        <input type='checkbox' checked={grocery.checked}></input>
                        <div className='grocery-name'>{item.name}</div>
                        <FaBeer className='delete-grocery-button' />
                    </li>
                ))}
            </ul>

        </div>
    )
}


export default Content