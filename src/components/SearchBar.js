import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

const SearchBar = ({allProducts}) => {
    const [search, setSearch] = useState("");
    return (
        <div>
            <input 
            className="filter-search"
            onChange={(event) => {
                setSearch(event.target.value);
            }}
            value={search}
            placeholder="Поиск"
            type="text" />
            <div className="search-results-container">
            {search
            ?   <div>
                    {allProducts.map((eachProduct) => {
                        if (eachProduct.name.toLowerCase().includes(search.toLowerCase())) {
                            return (
                                <p key={eachProduct.id} className="one-result">
                                    <Link to={`/cards/${eachProduct.id}`} className="one-result-link">{eachProduct.name}</Link>
                                </p>
                            )
                        }
                    })}
                </div>
            : null}
            </div>
        </div>
    )
}

export default SearchBar;