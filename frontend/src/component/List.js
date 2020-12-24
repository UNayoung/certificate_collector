import React, {Component} from 'react';
import ListLink from "./ListLink";

const List = ({children}) => {
    return (
        <div>
            <ListLink/>
            {children}
        </div>
    )
}

export default List;