import express from 'express';
import { getAccountAttributes, getAllEntries, insertEntry } from '../controllers/entryControllers.js';

const router = express.Router();

router.get("/", getAllEntries);
router.post("/insert", insertEntry);
//router.get("/:id", getAccountAttributes);

export default router;
