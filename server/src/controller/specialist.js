const constant = require("../utils/constant"),
    generalService = require("../services/generalOperation");


const TableName = "Specialist";

const addRecord = async (req, res) => {
    try {
        const user = req.user;
        const data = req.body;
        data.createdBy = user._id

        const Record = await generalService.addRecord(TableName, data);
        const aggregateArr = [
            { $match: {_id: Record._id} },
            {
                $lookup: {
                    from: "occupations",
                    let: { "uId": "$speciality" },
                    pipeline: [
                        { $match: { "$expr": { "$eq": ["$_id", "$$uId"] } } },
                        { $project: { "occupationName": "$occupationName" } }
                    ],
                    as: "occupationInfo"
                }
            },
            {
                $lookup: {
                    from: "conditions",
                    let: { "uId": "$conditionKnowledgeBase" },
                    pipeline: [
                        { $match: { "$expr": { "$in": ["$_id", "$$uId"] } } },
                        { $project: { "conditionName": "$conditionName" } }
                    ],
                    as: "conditionInfo"
                }
            },
            {
                $sort: { createdAt: -1 }
            },
            {
                $project: {
                    specialistId:1,
                    fullName: 1,
                    phoneNumber: 1,
                    speciality: 1,
                    profess: "$speciality",
                    email: 1,
                    location: 1,
                    facebook: 1,
                    twitter: 1,
                    youtube: 1,
                    linkedIn: 1,
                    profileImageUrl: 1,
                    Drimage: { uri: "$profileImageUrl" },
                    createdBy: 1,
                    specialityName: { $arrayElemAt: ["$occupationInfo.occupationName", 0] },
                    status: 1,
                    conditionInfo : "$conditionInfo",
                    createdAt: 1
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
            { $match: {_id: Record._id} },
            {
                $lookup: {
                    from: "occupations",
                    let: { "uId": "$speciality" },
                    pipeline: [
                        { $match: { "$expr": { "$eq": ["$_id", "$$uId"] } } },
                        { $project: { "occupationName": "$occupationName" } }
                    ],
                    as: "occupationInfo"
                }
            },
            {
                $lookup: {
                    from: "conditions",
                    let: { "uId": "$conditionKnowledgeBase" },
                    pipeline: [
                        { $match: { "$expr": { "$in": ["$_id", "$$uId"] } } },
                        { $project: { "conditionName": "$conditionName" } }
                    ],
                    as: "conditionInfo"
                }
            },
            {
                $sort: { createdAt: -1 }
            },
            {
                $project: {
                    specialistId:1,
                    fullName: 1,
                    phoneNumber: 1,
                    speciality: 1,
                    profess: "$speciality",
                    email: 1,
                    location: 1,
                    facebook: 1,
                    twitter: 1,
                    youtube: 1,
                    linkedIn: 1,
                    profileImageUrl: 1,
                    Drimage: { uri: "$profileImageUrl" },
                    createdBy: 1,
                    specialityName: { $arrayElemAt: ["$occupationInfo.occupationName", 0] },
                    status: 1,
                    conditionInfo : "$conditionInfo",
                    createdAt: 1
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
        const data = JSON.parse(req.params.query);


        let condition = {status:'active'};


        if (data.query === "search" && data.key === "status") {
            condition.status = data.value
        }

        if (data.name) {
            condition = {
                "$expr": {
                    "$regexMatch": {
                        "input": { "$concat": ["$fullName", "$email", "$phoneNumber"] },
                        "regex": `.*${data.name}.*`,  //Your text search here
                        "options": "i"
                    }
                }
            }
        }

        const aggregateArr = [
            { $match: condition },
            {
                $lookup: {
                    from: "occupations",
                    let: { "uId": "$speciality" },
                    pipeline: [
                        { $match: { "$expr": { "$eq": ["$_id", "$$uId"] } } },
                        { $project: { "occupationName": "$occupationName" } }
                    ],
                    as: "occupationInfo"
                }
            },
            {
                $lookup: {
                    from: "conditions",
                    let: { "uId": "$conditionKnowledgeBase" },
                    pipeline: [
                        { $match: { "$expr": { "$in": ["$_id", "$$uId"] } } },
                        { $project: { "conditionName": "$conditionName" } }
                    ],
                    as: "conditionInfo"
                }
            },
            {
                $sort: { createdAt: -1 }
            },
            {
                $project: {
                    fullName: 1,
                    specialistId:1,
                    phoneNumber: 1,
                    speciality: 1,
                    profess: "$speciality",
                    email: 1,
                    location: 1,
                    facebook: 1,
                    twitter: 1,
                    youtube: 1,
                    linkedIn: 1,
                    profileImageUrl: 1,
                    Drimage: { uri: "$profileImageUrl" },
                    createdBy: 1,
                    specialityName: { $arrayElemAt: ["$occupationInfo.occupationName", 0] },
                    status: 1,
                    conditionInfo : "$conditionInfo",
                    createdAt: 1
                }
            }
        ]
        const Record = await generalService.getRecordAggregate(TableName, aggregateArr);
     

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
        const Record = await generalService.findAndModifyRecord(TableName, condition, { status: 'deleted' });

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

const updateStatus = async (req, res) => {
    try {
        const user = req.user;
        const data = req.body;
        let condition = { _id: data._id };
        const Record = await generalService.findAndModifyRecord(TableName, condition, { status: data.status });

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
    updateStatus
};
