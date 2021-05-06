const fs = require('fs');
const csv = require('fast-csv');



const csvParser = (req, res, next) => {
    try {

        const fileRows = []

        fs.createReadStream(req.file.path)
            .pipe(csv.parse({ headers: true }))
            .on('error', error => console.error(error))
            .on('data', row => {
                fileRows.push(row);
            })
            .on('end', (rowCount) => {
                console.log("======== fileRows",fileRows);
                req.data = fileRows;
                next();
            });



    } catch (error) {
        res.status(402).send();
    }
};

module.exports = { csvParser };