import { useState } from "react";
import { useSearchStore } from "../store/search-store"
import { useCategoryStore } from "../store/category-store";
import { Link } from "react-router-dom";

export default function Header() {
    const addToSearch = useSearchStore((state) => state.addToSearch)
    const addToCategory = useCategoryStore((state) => state.addToCategory)
    const [ inputValue, setInputValue ] = useState("")

    function handleChange(event) {
        setInputValue(event.target.value);
    }

    function handleSubmit(event) {
        event.preventDefault();
        addToSearch(inputValue);
        setInputValue("");
    }

    function handleClick(event) {
        addToCategory(event.target.name)
        if (event.target.name === "") {
            addToCategory("")
        }
    }

    return (
        <header>
            <form className="heading" onSubmit={handleSubmit}>
                <h1 className="wb-name">
                    <Link to="/" className="header-link">
                        F<span className="changed-letters">oo</span>dy Z<span className="changed-letters">o</span>ne
                    </Link>
                </h1>
                <input type="text" placeholder="Search Food..." value={inputValue} onChange={handleChange}/>
            </form>
            <div className="categories">
                <button name="" onClick={handleClick}>All</button>
                <button name="Breakfast" onClick={handleClick}>Breakfast</button>
                <button name="Seafood" onClick={handleClick}>Seafood</button>
                <button name="Dessert" onClick={handleClick}>Dessert</button>
            </div>
        </header>
    )
}