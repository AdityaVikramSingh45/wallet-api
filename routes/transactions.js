import express from "express";
const router = express.Router();
import { sql } from "../config/db.js"; 
import deleteTransactions, { createTransaction, getSummaryByUserId, getTransactionsByUserId } from "../controllers/transactions.js"; // Adjust path correctly

router.get("/:userId", getTransactionsByUserId);

router.post("/", createTransaction);

router.delete("/:id", deleteTransactions);

// Amount > 0 and expense < 0
router.get("/summary/:userId", getSummaryByUserId);

export default router;
