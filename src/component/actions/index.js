import dispatcher from '../Dispatcher';

export function createList(list){
    dispatcher.dispatch({
        type: "CREATE_LIST",
         list
    });
}

export function deleteList(id){
    dispatcher.dispatch({
        type: "DELETE_LIST",
        id
    });
}