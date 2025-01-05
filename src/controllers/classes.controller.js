const DanceClass = require("../models/danceClass.model.js");

const viewAllClasses = async (req, res) => {
  try {
    const classView = await DanceClass.find().select({
      _id: 0,
      __v: 0,
    });

    res.status(200).json({
      status: 200,
      data: classView,
    });
  } catch (error) {
    res.status(500).json({
      status: 500,
      message: error.message,
    });
  }
};

const viewSpecificClass = async (req, res) => {
  try {
    const id = req.params.id;
    const classView = await DanceClass.findById({ _id: id }).select({
      _id: 0,
      __v: 0,
    });

    res.status(200).json({
      status: 200,
      data: classView,
    });
  } catch (error) {
    res.status(500).json({
      status: 500,
      message: error.message,
    });
  }
};

const createNewClass = async (req, res) => {
  try {
    const {
      classType,
      classDate,
      timeFrom,
      timeTo,
      ticketPrice,
      ticketQuantity,
    } = req.body;
    const newClass = new DanceClass({
      classType,
      classDate,
      timeFrom,
      timeTo,
      ticketPrice,
      ticketQuantity,
    });

    const saveClass = await newClass.save();
    res.status(201).json({
      status: 201,
      message: "Class Created Successfully!",
    });
  } catch (error) {
    res.status(500).json({
      status: 500,
      message: error.message,
    });
  }
};

const editExistingClass = async (req, res) => {
  try {
    const id = req.params.id;
    const { key, value } = req.body;

    if (!id) {
      return res.status(400).json({
        status: 400,
        message: "Enter id!",
      });
    } else if (!key || !value) {
      return res.status(400).json({
        status: 400,
        message: "Enter key and Updated Data!",
      });
    }

    const updateBusData = await DanceClass.findOneAndUpdate(
      { _id: id },
      { $set: { [key]: value } },
      { new: true }
    );
    res.status(200).json({
      status: 200,
      message: `${key} Updated`,
    });
  } catch (error) {
    res.status(500).json({
      status: 500,
      message: error.message,
    });
  }
};

const deleteExistingClass = async (req, res) => {
  try {
    const id = req.params.id;

    if (!id) {
      return res.status(400).json({
        status: 400,
        message: "Enter id!",
      });
    }

    const classDeletion = await DanceClass.findOneAndDelete({ _id: id });

    if (!classDeletion) {
      return res.status(404).json({
        status: 404,
        message: "No Class found",
      });
    }
    res.status(200).json({
      status: 200,
      message: "Class deleted",
    });
  } catch (error) {
    res.status(500).json({
      status: 500,
      message: error.message,
    });
  }
};

module.exports = {
  viewAllClasses,
  createNewClass,
  editExistingClass,
  deleteExistingClass,
  viewSpecificClass,
};
