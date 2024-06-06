const express = require("express");
const authMiddleware = require("../middlewares/authMiddleware");
const {
  getDonorsListController,
  getHospitalListController,
  getOrgListController,
  deleteDonorController,
} = require("../controllers/adminController");
const adminMiddleware = require("../middlewares/adminMiddleware");

//router object
const router = express.Router();

//Routes

//get donor list using routes
router.get(
  "/donor-list",
  authMiddleware,
  adminMiddleware,
  getDonorsListController
);
//get hospital
router.get(
  "/hospital-list",
  authMiddleware,
  adminMiddleware,
  getHospitalListController
);

//get organization list
router.get("/org-list", authMiddleware, adminMiddleware, getOrgListController);

// delete donor - get
router.delete(
  "/delete-donor/:id",
  authMiddleware,
  adminMiddleware,
  deleteDonorController
);

//EXPORT
module.exports = router;