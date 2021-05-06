const constant = require("../utils/constant"),
    generalService = require("../services/generalOperation");


const TableName = "Blog";

const uploadBulkCsv = async (req, res) => {
    try {
        const tableName = req.body.requestFor;
        const data = req.data;
        console.log("====== data ====", tableName, data);

        const Record = await generalService.addManyRecord(tableName, data);

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

module.exports = {
    uploadBulkCsv,

};
