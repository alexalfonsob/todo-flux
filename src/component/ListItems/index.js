import React from 'react';
import './index.css';

const ListItems = (props) => {
    
    const ListComponent = props.lists.map((lists) => {
        return <li key = {lists.id}>{lists.list} <span><i className="fas fa-times" onClick={() => props.Delete(lists.id)} ></i></span></li>;
    });

    return (
        <div className="result">

            <ul>
                {ListComponent}
            </ul>
         </div>

    )
}


export default ListItems
