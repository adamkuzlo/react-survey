// Import the express module and the result controller
const express = require("express");
const result = require("../controllers/result.controller.js");

// Create an instance of the express Router
const router = express.Router();

/**
 * GET request to retrieve all results
 *
 * @returns {Array} An array of all result objects
 */
router.get("/get-all", result.findAll);

/**
 * GET request to retrieve a single result by its ID
 *
 * @param {number} id - The ID of the result to retrieve
 *
 * @returns {Object} The result object with the matching ID
 */
router.get("/get-one/:id", result.findAllById);

/**
 * POST request to create a new result
 *
 * @param {Object} req.body - The result data to be stored
 *
 * @returns {Object} The newly created result object
 */
router.post("/create", result.create);

// Export the router to be used in the main application
app.use("/api/result", router);
