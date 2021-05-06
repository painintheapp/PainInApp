const constant = require("../utils/constant"),
    generalService = require("../services/generalOperation");


const TableName = "Symptom";

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
        let condition = {};
        const aggregateArr = [
            { $match: condition },
            
            {
                $sort: { symptomId: -1 }
            },
            {
                $project: {

                    _id: 1,
                    id : "$_id",
                    symptomName : 1,
                    name : "$symptomName",
                    symptomId : 1,
                }
            }
        ]
        const Record = await generalService.getRecordAggregate(TableName, aggregateArr);
        // const Record = await generalService.getRecordAndSort(TableName, condition, { createdAt: -1 });

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
