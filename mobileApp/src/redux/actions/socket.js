import store from '../store';


export const SocketResponseState = (type, payload) => {
    

    store.dispatch({
        type: `${type}_SUCCESS`,
        payload: payload
    });

}
