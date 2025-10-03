import ollama from 'ollama'
import dotenv from 'dotenv';

dotenv.config("./")


export async function chatbot(req, res) {
    const prompt = req.body.prompt;
    const systemPrompt = { role: 'system', content: `Your Name is SpenditBOT. You help with managing budget with the expense/income context`};
    const userMessage = { role: 'user', content: prompt };
    const response = await ollama.chat({
        model: process.env.MODEL,
        messages: [systemPrompt, userMessage],
        stream: true,
    });
    res.setHeader('Content-Type', 'text/plain; charset=utf-8');
    res.setHeader('Transfer-Encoding', 'chunked');

    try {
        for await (const part of response) {
            if (part.message && part.message.content) {
                res.write(part.message.content);
            }
        }
        res.end();
    }
     catch (err) {
        res.status(500).end('Error streaming response');
    }
}

export async function summarize(req, res) {
    const prompt = req.body.prompt;
    const task_help = req.body.task;
    const payload = req.body.payload;
    const systemPrompt = { role: 'system', content: `Your Name is SpenditBOT you help manage and summarize expenses and incomes. ${task_help} this is my expense history ${payload}` };
    const userMessage = { role: 'user', content: prompt };
    const response = await ollama.chat({
        model: process.env.MODEL,
        messages: [systemPrompt, userMessage],
        stream: true,
    });
    res.setHeader('Content-Type', 'text/plain; charset=utf-8');
    res.setHeader('Transfer-Encoding', 'chunked');

    try {
        for await (const part of response) {
            if (part.message && part.message.content) {
                res.write(part.message.content);
            }
        }
        res.end();
    }
     catch (err) {
        res.status(500).end('Error streaming response');
    }
}

export async function buildbudget(req, res) {
    const prompt = req.body.prompt;
    const task_help = req.body.task;
    const payload = req.body.payload;
    const systemPrompt = { role: 'system', content: `Your Name is SpenditBOT you help building budget with the help of the previous expenses/income of the user within a set provided date.` };
    const userMessage = { role: 'user', content: prompt };
    const response = await ollama.chat({
        model: process.env.MODEL,
        messages: [systemPrompt, userMessage],
        stream: true,
    });
    res.setHeader('Content-Type', 'text/plain; charset=utf-8');
    res.setHeader('Transfer-Encoding', 'chunked');

    try {
        for await (const part of response) {
            if (part.message && part.message.content) {
                res.write(part.message.content);
            }
        }
        res.end();
    }
     catch (err) {
        res.status(500).end('Error streaming response');
    }
}