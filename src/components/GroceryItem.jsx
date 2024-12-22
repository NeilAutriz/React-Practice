import { FaBeer } from "react-icons/fa";
import '../styles/Content.css';


const GroceryItem = ({item, handleChecking, designChecked, handleDeleting}) => {
    return(
        <li className="grocery-item" key={item.id}>
            <input
                type="checkbox"
                checked={item.checked}
                onChange={() => handleChecking(item.id)}
            />
            <div className="grocery-name" 
            style={designChecked(item.checked)}onDoubleClick={() => handleChecking(item.id)}>
                {item.name}
            </div>
            <FaBeer
                className="delete-grocery-button"
                onClick={() => handleDeleting(item.id)}
            />
        </li>
    )

}

export default GroceryItem;