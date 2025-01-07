const express = require("express");
const {
  viewAllClasses,
  createNewClass,
  editExistingClass,
  deleteExistingClass,
  viewSpecificClass,
} = require("../controllers/classes.controller");
const checkAdmin = require("../middlewares/protect");

const router = express.Router();

router.get("/view", viewAllClasses);

router.get("/view/:id", viewSpecificClass);

router.post("/new", checkAdmin, createNewClass);

router.put("/edit/:id", checkAdmin, editExistingClass);

router.delete("/delete/:id", checkAdmin, deleteExistingClass);

module.exports = router;
