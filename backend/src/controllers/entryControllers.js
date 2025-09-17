import Entry from "../models/Entry.js";

export async function getAllEntries(req, res){
    try {
        const userId = req.body.userId;
        const entries = Entry.find({userId});
        res.status(200).json({message : "Entries Fetched", entries : entries});
    } catch (error) {
        console.log(error);
        res.status(500).json({message: "Server Side Error"})
    }
}

