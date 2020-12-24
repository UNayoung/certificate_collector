import React from 'react';
import SearchLink from "./SearchLink";
import './Search.css'

const Search = ({children}) => {
    return (
        <div>
            <p id="whdahr">국가자격 종목</p>
            <SearchLink/>
            {children}
        </div>
    )
}

export default Search;