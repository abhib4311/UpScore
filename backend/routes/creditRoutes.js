const express = require("express");
const router = express.Router();
const { getCreditScore, getCreditReport } = require("../controllers/creditController");

// Route to fetch user's credit score (protected by authMiddleware)
router.get("/score", getCreditScore);

// Route to fetch user's credit report (protected by authMiddleware)
router.get("/report", getCreditReport);

module.exports = router;
