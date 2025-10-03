import express from 'express';
import { chatbot, summarize } from '../Bot/spenditbot.js';

const router = express.Router();

router.post("/summarize", summarize)
router.post("/chat", chatbot)
router.post("/buildbudget", chatbot)

export default router;


