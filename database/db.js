import mongoose from "mongoose";
const connectdb=async()=>{
    try{
        await mongoose.connect(process.env.MONGO_URL);
        console.log("✅ conected to database");
    }
    catch(err)
    {
        console.error("❎ error connecting to database",err);
        process.exit(1);
    }
};

export default connectdb ;