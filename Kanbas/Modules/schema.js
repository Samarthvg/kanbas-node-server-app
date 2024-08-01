import mongoose from "mongoose";
const moduleSchema = new mongoose.Schema({
    name: String,
    deescription: String,
    course: String,
    lessons: [
        {
            id: String,
            name: String,
            deescription: String,
            module: String,
        }
    ]},
    {collection: "modules"}
);
export default moduleSchema;
