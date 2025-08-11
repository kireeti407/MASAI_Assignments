const express = require("express");

const {
  addpublisher,
  getpublisher,
  getpublisherbyid,
  updatepublisher,
  deletepublisher,
} = require("../controller/publisher.controller");
const publishermiddle = require("../middleware/requestmiddleware");

const publishrouter = express.Router();

publishrouter.post("/api/publishers",publishermiddle, addpublisher);

publishrouter.get("/api/publishers", getpublisher);

publishrouter.get("/get/publishers/:id", getpublisherbyid);

publishrouter.patch("/api/publishers/:id", updatepublisher);

publishrouter.delete("/api/publishers/:id", deletepublisher);

module.exports = publishrouter;
