const SocketResponseState = require('../redux/actions/socket').SocketResponseState;
const io = require("socket.io-client");
const Socket = (function () {
    let instance;
    function createInstance(userId) {
        const socket = io(process.env.REACT_APP_ROOT_URL, { query: `clientId=${userId}` });
        socket.on("connect", function (err, data) {
            console.log("========= socket ============ Connection Created", err, data);
        });

        
        socket.on("newActivityCreated", function (data) {
            console.log("======== Front Socket work ============", data)
            SocketResponseState('newActivityCreated', data)
        })

        socket.on("NewLeadReceived", function (data) {
            SocketResponseState('NewLeadReceived', data)
        })
       
        function onConnect(userId) {
            return new Promise((resolve, reject) => {
                socket.emit("connect", { "id": userId });
                resolve();
            });
        }
        function socketDisconnet() {
            return new Promise((resolve, reject) => {
                socket.emit("disconnect", {});
                resolve();
            });
        }
        return {
            onConnect,
            socketDisconnet,
        };
    }
    return {
        getInstance: function (userId) {
            if (!instance) {
                instance = createInstance(userId);
            }
            return instance;
        }
    };
})();
module.exports = {
    Socket: Socket
};