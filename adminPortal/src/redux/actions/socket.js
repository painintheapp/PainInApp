import store from '../store';

export const SocketResponseState = (type, payload) => {
    console.log("============= here ======= Socket Reducer",type,  payload, "store:", store);
    
    store.dispatch({
        type: `${type}_SUCCESS`,
        payload: payload
    });

}
