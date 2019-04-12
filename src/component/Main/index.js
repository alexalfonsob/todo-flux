import React, { Component } from "react";
import ListItems from '../ListItems';
import Imput from '../ImputBar';
import Footer from '../Footer';
import * as ListAction from '../actions';
import ListStore from '../store';

class Main extends Component {
    constructor() {
        super()
        this.state = {
            newList: '',
            lists: ListStore.getAll()
        }
    }

    componentDidMount() {
        ListStore.on("change", () => {
            this.setState({
                lists: ListStore.getAll()
            });
        })
    }

    newListChanged = (e) => {
        this.setState({
            newList: e.target.value
        });

    }

    handleSend = (e) => {
        e.preventDefault();
        if (this.state.newList !== '') {
            this.setState({
                newList: ''
            })
            ListAction.createList(this.state.newList);
            e.target.reset();
        }
        else {
            return;
        }
    }

    Delete(id) {
        ListAction.deleteList(id);
    }

    render() {
        return (
            <div>
                <Imput 
                    newlist={this.state.newlist}
                    SendText = {this.handleSend}
                    newListChanged={this.newListChanged}
                />
                <div>
                <ListItems   
                    lists={this.state.lists} 
                    Delete= {this.Delete}    
                    />
                </div>
                 <div className="count">
        	    <Footer 
        	         lists={this.state.lists} 
        	    />
            	</div>
            </div>
        );
    }
}


export default Main
