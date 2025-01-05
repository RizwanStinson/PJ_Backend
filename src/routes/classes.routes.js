const express = require("express");
const {
  viewAllClasses,
  createNewClass,
  editExistingClass,
  deleteExistingClass,
  viewSpecificClass,
} = require("../controllers/classes.controller");
const router = express.Router();

router.get("/view", viewAllClasses);

router.get("/view/:id", viewSpecificClass);

router.post("/new", createNewClass);

router.put("/edit/:id", editExistingClass);

router.delete("/delete/:id", deleteExistingClass);

module.exports = router;
