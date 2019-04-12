import React from 'react';
import './index.css';


const Imput =(props) =>{

        return (
            <form  onSubmit={props.SendText} >
                <input onChange={props.newListChanged}  placeholder="What needs to be done?"  value={props.newList} autoComplete="off"  />
            </form>
        )


}

export default Imput;

