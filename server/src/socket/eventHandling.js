const generalService = require("../services/generalOperation");

const NewLeadReceived = async (socket, data) => {
    socket.emit('NewLeadReceived', data);
}



const newActivityCreated = async (socket, tfnName, data) => {
    try {
        const record = await generalService.addRecord('SiteActivity', data);
        socket.emit('newActivityCreated', data);
    } catch (error) {
        console.log("========= error ===========");
    }

}

module.exports = {
    NewLeadReceived,
    newActivityCreated
}