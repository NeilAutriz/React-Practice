import '../styles/Content.css';
import GroceryItem from './GroceryItem';

const GroceryList = ({grocery, handleChecking, designChecked, handleDeleting}) => {
    return (
        <ul className="grocery-list"> 
            {grocery.map((item) => (
                <GroceryItem key={item.id}
                item={item} handleChecking={handleChecking} designChecked={designChecked}
                handleDeleting={handleDeleting}/>
            ))}
        </ul>
    )
}

export default GroceryList;