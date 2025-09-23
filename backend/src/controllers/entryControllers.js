import Entry from "../models/Entry.js";

export async function getAllEntries(req, res){
    try {
    const userId = req.query.userId;
        const entries = await Entry.find({userId}, {_id : 0, __v : 0, createdAt: 0});
        res.status(200).json({message : "Entries Fetched", entries : entries});
    } catch (error) {
        console.log(error);
        res.status(500).json({message: "Server Side Error"})
    }
}

export async function insertEntry(req, res) {
    try {                                                                                                                       
        const {userId, type, category, subCategory, amount, description} = req.body;
        const entry = new Entry({userId, type, category, subCategory, amount, description});
        await entry.save();
        res.status(200).json({message : "Successfully inserted", entry : entry});
    } catch (error) {
        console.log(error);
        res.status(500).json({message: "Server Side Error"}) 
    }
}

