const constant = require("../utils/constant"),
    generalService = require("../services/generalOperation");



const TableName = "User";


const updateProfile = async (req, res) => {
    try {
        const user = req.user;
        const data = req.body;

        let Record;

        Record = await generalService.findAndModifyRecord(TableName, { _id: user._id }, data);

        res.send({
            status: constant.SUCCESS,
            message: "Record updated Successfully",
            Record: data
        });
    } catch (error) {
        res.send({
            status: constant.ERROR,
            message: "activity error try again"
        });
    }
};
const getProfile = async (req, res) => {
    try {
        const user = req.user;

        let aggregateArr = [
            { $match: { _id: user._id } },
            {
                $project: {
                    email: 1,
                    phoneNumber: 1,
                    fullName: 1,
                    profileImageUrl: 1
                }
            }
        ]

        let Record = await generalService.getRecordAggregate(TableName, aggregateArr)
        res.send({
            status: constant.SUCCESS,
            message: "Record updated Successfully",
            Record: Record[0]
        });
    } catch (error) {
        res.send({
            status: constant.ERROR,
            message: "activity error try again"
        });
    }
};






module.exports = {
   
    updateProfile,
    getProfile,
 };
