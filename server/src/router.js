//Constructors are defined below this section
const Router = require("express").Router;
const router = new Router();

const { authenticate } = require('./middleware/authenticate');
const { csvParser } = require('./middleware/csvParsing');


const multer = require('multer');
const uploadCSV = multer({ dest: 'tmp/csv/' });
const multerS3 = require('multer-s3');
const AWS = require('aws-sdk');

AWS.config.update({
    accessKeyId: process.env.ACCESS_KEY_ID,
    secretAccessKey: process.env.SECRET_ACCESS_KEY,
   
});

const s3 = new AWS.S3();

// =================== All Controllers ===========
const authController = require('./controller/auth')
const specialistController = require('./controller/specialist')
const UserController = require('./controller/users')
const settingController = require('./controller/setting')

//================= API Dropdown =========
const ExerciseCategoryController = require('./controller/exerciseCategory')
const ExerciseController = require('./controller/exercise')
const SymptomController = require('./controller/symptom')
const ConditionController = require('./controller/condition')
const SupplementController = require('./controller/supplement')
const VitaminController = require('./controller/vitamin')
const HealthCategoryController = require('./controller/healthCategory')
const OccupationController = require('./controller/occupation')
const csvController = require('./controller/csvController')




//=================== All validators ============
const authValidator = require('./utils/validation/user')
const settingValidator = require('./utils/validation/setting');



//=================== Auth Rout ============
router.post("/login", authController.signIn);
router.post("/signup", authValidator.signUp, authController.signUp);
router.put("/updateProfileInfo", authenticate, authController.updateProfileInfo);
router.post("/forgetPassword", authValidator.forgetPassword, authController.forgetPassword);
router.post("/setNewPassword", authValidator.setNewPassword, authController.setNewPassword);
router.post("/resetPassword", authenticate, authValidator.resetPassword, authController.resetPassword);

//==================== Specialist Info ==================
router.get("/getSpecialist/:query", authenticate, specialistController.getRecord);
router.post("/addSpecialist", authenticate, specialistController.addRecord);
router.put("/editSpecialist", authenticate, specialistController.editRecord);
router.put("/updateSpecialist", authenticate, specialistController.updateStatus);
router.delete("/deleteSpecialist", authenticate, specialistController.deleteRecord);


//================= Settings =====================
router.put("/updateProfile", authenticate, settingValidator.updateProfile, settingController.updateProfile);
router.get("/getProfile", authenticate, settingController.getProfile);

//==================== Users Info ==================
router.get("/getUsers/:query", authenticate, UserController.getRecord);
router.post("/addUsers", authenticate, UserController.addRecord);
router.put("/editUsers", authenticate, UserController.editRecord);
router.delete("/deleteUsers", authenticate, UserController.deleteRecord);


//==================== Exercise Category Info ==================
router.get("/getExerciseCategory/:query",  ExerciseCategoryController.getRecord);
router.post("/addExerciseCategory",  ExerciseCategoryController.addRecord);
router.put("/editExerciseCategory",  ExerciseCategoryController.editRecord);
router.delete("/deleteExerciseCatagory",  ExerciseCategoryController.deleteRecord);

//==================== Exercise Exercises Info ==================
router.get("/getExercises/:query",  ExerciseController.getRecord);
router.post("/addExercise",  ExerciseController.addRecord);
router.put("/editExercise",  ExerciseController.editRecord);
router.delete("/deleteExercise",  ExerciseController.deleteRecord);

//==================== Symptom Info ==================
router.get("/getSymptoms/:query",  SymptomController.getRecord);
router.post("/addSymptom",  SymptomController.addRecord);
router.put("/editSymptom",  SymptomController.editRecord);
router.delete("/deleteSymptom",  SymptomController.deleteRecord);

//==================== Conditions Info ==================
router.get("/getConditions/:query",  ConditionController.getRecord);
router.post("/addCondition",  ConditionController.addRecord);
router.put("/editCondition",  ConditionController.editRecord);
router.delete("/deleteCondition",  ConditionController.deleteRecord);

//==================== Supplement Info ==================
router.get("/getSupplements/:query",  SupplementController.getRecord);
router.post("/addSupplement",  SupplementController.addRecord);
router.put("/editSupplement",  SupplementController.editRecord);
router.delete("/deleteSupplement",  SupplementController.deleteRecord);

//==================== Vitamin Info ==================
router.get("/getVitamins/:query",  VitaminController.getRecord);
router.post("/addVitamin",  VitaminController.addRecord);
router.put("/editVitamin",  VitaminController.editRecord);
router.delete("/deleteVitamin",  VitaminController.deleteRecord);

//==================== Health Category Info ==================
router.get("/getHealthCategory/:query",  HealthCategoryController.getRecord);
router.post("/addHealthCategory",  HealthCategoryController.addRecord);
router.put("/editHealthCategory",  HealthCategoryController.editRecord);
router.delete("/deleteHealthCategory",  HealthCategoryController.deleteRecord);


//==================== Occupation Info ==================
router.get("/getOccupations/:query",  OccupationController.getRecord);
router.post("/addOccupation",  OccupationController.addRecord);
router.put("/editOccupation",  OccupationController.editRecord);
router.delete("/deleteOccupation",  OccupationController.deleteRecord);


//================== Bulk Import ==============
router.post("/bulkImportSkills", uploadCSV.single('file'), csvParser, csvController.uploadBulkCsv)



const uploadS3 = multer({
    storage: multerS3({
        s3: s3,
        ACL: 'public-read',
        bucket: process.env.BUCKET_NAME,
        metadata: (req, file, cb) => {
            cb(null, { fieldName: file.fieldname })
        },
        key: (req, file, cb) => {
            cb(null, Date.now().toString() + '-' + file.originalname)
        }
    })
});

router.post("/uploadProfileImage", uploadS3.single('file'), (req, res, next) => {
    const url = req.file.location;
    try {
        res.status(200).send({
            status: "SUCCESS",
            message: "file uploaded Successfully",
            url
        })

    } catch (error) {
        console.log("========= error =======", error);
        res.status(404).send({
            status: "ERROR",
            message: "Image uploading fail"
        });
    }
})


//================ Test API route ============
router.post("/sendEmail", authController.emailTest);

module.exports = router;