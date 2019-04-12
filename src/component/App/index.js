import React from "react";
import './index.css';

import Header from '../Header';
import Main from '../Main';

class App extends React.Component {
    constructor(){
        super()
        
        this.state = {
            
        }
    }
    render() {
        return (
            <div className = "bodys">
    			<div className = "title">
    			    <Header />
    			 </div>
            <div className="container" >
    			    <Main />
        		</div>

    	    </div>
        );
    }
}

export default App
