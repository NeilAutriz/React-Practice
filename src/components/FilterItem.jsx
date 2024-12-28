import { FaSearch } from "react-icons/fa";
import { useState } from "react";
import "../styles/FilterItem.css";

const FilterItem = ({ grocery, setGrocery, initialGrocery }) => {
    const [search, setSearch] = useState("");

    const handleSearching = (e) => {
        setSearch(e.target.value)
    }

    const performSearch = (e) => {
        e.preventDefault();
        console.log(grocery);
        console.log(search);
        if(search === ''){
            setGrocery(initialGrocery);
        } else {
            const valueToSearchLower = search.toLowerCase();
            const searchedGrocery = initialGrocery.filter((item) => item.name.toLowerCase().includes(valueToSearchLower));
            setGrocery(searchedGrocery)
        }

    }

    return (
        <form className="search-form" onSubmit={performSearch}>
            <input
                className="search-input-holder"
                type="text"
                placeholder="Search Item"
                value={search}
                onChange={handleSearching} 
            />
            <button className="search-button" type="submit">
                <FaSearch className="search-icon" />
            </button>
        </form>
    );
};

export default FilterItem;
