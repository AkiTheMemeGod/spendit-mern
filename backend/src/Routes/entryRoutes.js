import express from 'express';
import { getAllEntries, insertEntry } from '../controllers/entryControllers.js';

const router = express.Router();

router.get("/", getAllEntries);
router.post("/insert", insertEntry);

export default router;
