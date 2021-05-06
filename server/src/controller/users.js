const constant = require("../utils/constant"),
    generalService = require("../services/generalOperation");


const TableName = "User";

const addRecord = async (req, res) => {
    try {
        const user = req.user;
        const data = req.body;
        data.createdBy = user._id

        const Record = await generalService.addRecord(TableName, data);

        res.send({
            status: constant.SUCCESS,
            message: "add Record Successfully",
            Record
        });
    } catch (error) {
        res.send({
            status: constant.ERROR,
            message: "error try again"
        });
    }
};

const editRecord = async (req, res) => {
    try {
        const user = req.user;
        const data = req.body;

        let condition = { _id: data._id };


        const Record = await generalService.findAndModifyRecord(TableName, condition, data);

        res.send({
            status: constant.SUCCESS,
            message: "edit Record Successfully",
            Record
        });
    } catch (error) {
        res.send({
            status: constant.ERROR,
            message: "error try again"
        });
    }
};

const getRecord = async (req, res) => {
    try {

        const data = JSON.parse(req.params.query)
        let condition = {};

        if (data.name) {
            condition = {
                "$expr": {
                    "$regexMatch": {
                        "input": { "$concat": ["$fullName", "$email"] },
                        "regex": `.*${data.name}.*`,  //Your text search here
                        "options": "i"
                    }
                }
            }
        }

        condition.role = { '$nin': ["superAdmin","highSuperAdmin"] }
        const Record = await generalService.getRecordAndSort(TableName, condition, { createdAt: -1 });

        res.send({
            status: constant.SUCCESS,
            message: "fetch Successfully",
            Record
        });
    } catch (error) {
        res.send({
            status: constant.ERROR,
            message: "activity error try again"
        });
    }
};

const deleteRecord = async (req, res) => {
    try {
        const user = req.user;
        const data = req.body;
        let condition = { _id: data._id };
        const Record = await generalService.deleteRecord(TableName, condition);
        Record._id = data._id;

        res.send({
            status: constant.SUCCESS,
            message: "delete Successfully",
            Record
        });
    } catch (error) {
        res.send({
            status: constant.ERROR,
            message: "error try again"
        });
    }
};



module.exports = {
    addRecord,
    editRecord,
    getRecord,
    deleteRecord,
};
