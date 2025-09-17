import mongoose from 'mongoose';

const entrySchema = mongoose.Schema({
   userId : {type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
    type: {type: String, required: true},
    category : {type: String, required: true},
    subCategory : {type: String , required: true},
    amount : {type: Number, required: true},
    description : {type: String, required: true}
},
{timestamps: true}
);


const Entry = mongoose.model("Entry", entrySchema);

export default Entry;