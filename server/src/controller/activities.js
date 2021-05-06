const constant = require("../utils/constant"),
    generalService = require("../services/generalOperation");


const TableName = "SiteActivity";

const getRecord = async (req, res) => {
    try {
        const user = req.user;
        let condition = { };


        const Record = await generalService.getRecordAndSort(TableName, condition, {createdAt:-1});

        res.send({
            status: constant.SUCCESS,
            message: "activity fetch Successfully",
            Record
        });
    } catch (error) {
        res.send({
            status: constant.ERROR,
            message: "activity error try again"
        });
    }
};



module.exports = {
    getRecord,
};
