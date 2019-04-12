import { EventEmitter } from "events";
import dispatcher from '../Dispatcher';


class ListStore extends EventEmitter {
    constructor() {
        super()
        this.todoList = [{
                id: 0,
                list: "Learn more from react.js",
            },
            {
                id: 1,
                list: "Practice, practice and practice",
            }
        ];
    }

    createList(list) {
        const id = Date.now();
        this.todoList.push({
            id,
            list
        });
        this.emit("change");
    }

    deleteList(id) {

        const lists = this.todoList.filter(item => item.id !== id);

        this.todoList = [...lists];

        this.emit("change");

    }

    getAll() {
        return this.todoList;
    }
    
    handleActions(action) {

        switch (action.type) {
            case "CREATE_LIST":
                {
                    this.createList(action.list);
                    break;
                }
            case "DELETE_LIST":
                {
                    this.deleteList(action.id);
                    this.emit("change");
                    break;
                }
                 default:
        }
    }
}

const listStore = new ListStore();
dispatcher.register(listStore.handleActions.bind(listStore));

//window.dispatcher = dispatcher;
export default listStore;
