const constant = require("../utils/constant"),
    generalService = require("../services/generalOperation");


const TableName = "Exercise";

const addRecord = async (req, res) => {
    try {
        const user = req.user;
        const data = req.body;
        data.createdBy = user._id

        const Record = await generalService.addRecord(TableName, data);
        const aggregateArr = [
            { $match: { _id: Record._id } },
            {
                $lookup: {
                    from: "exercisecategories",
                    let: { "uId": "$categoryId" },
                    pipeline: [
                        { $match: { "$expr": { "$eq": ["$_id", "$$uId"] } } },
                        { $project: { "categoryName": "$categoryName" } }
                    ],
                    as: "categoryInfo"
                }
            },
            {
                $sort: { createdAt: -1 }
            },
            {
                $project: {
                    exerciseName: 1,
                    categoryId: 1,
                    exerciseId: 1,
                    categoryName: { $arrayElemAt: ["$categoryInfo.categoryName", 0] }
                }
            }
        ]
        const RecordFinal = await generalService.getRecordAggregate(TableName, aggregateArr);

        res.send({
            status: constant.SUCCESS,
            message: "add Record Successfully",
            Record: RecordFinal[0]
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
        const aggregateArr = [
            { $match: { _id: Record._id } },
            {
                $lookup: {
                    from: "exercisecategories",
                    let: { "uId": "$categoryId" },
                    pipeline: [
                        { $match: { "$expr": { "$eq": ["$_id", "$$uId"] } } },
                        { $project: { "categoryName": "$categoryName" } }
                    ],
                    as: "categoryInfo"
                }
            },
            {
                $sort: { createdAt: -1 }
            },
            {
                $project: {
                    exerciseName: 1,
                    categoryId: 1,
                    exerciseId: 1,
                    categoryName: { $arrayElemAt: ["$categoryInfo.categoryName", 0] }
                }
            }
        ]
        const RecordFinal = await generalService.getRecordAggregate(TableName, aggregateArr);

        res.send({
            status: constant.SUCCESS,
            message: "edit Record Successfully",
            Record: RecordFinal[0]
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
                $lookup: {
                    from: "exercisecategories",
                    let: { "uId": "$categoryId" },
                    pipeline: [
                        { $match: { "$expr": { "$eq": ["$_id", "$$uId"] } } },
                        { $project: { "categoryName": "$categoryName" } }
                    ],
                    as: "categoryInfo"
                }
            },
            {
                $sort: { createdAt: -1 }
            },
            {
                $project: {
                    id: "$_id",
                    name: "$exerciseName",
                    exerciseName: 1,
                    categoryId: 1,
                    exerciseId: 1,
                    categoryName: { $arrayElemAt: ["$categoryInfo.categoryName", 0] }
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
