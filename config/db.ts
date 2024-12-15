import mongoose from "mongoose";
const  isConnected = false;
 const dbConnect = async () => {
    if (isConnected) {  
        return;
    }
    try {
        await mongoose.connect(process.env.MONGODB_URI!);
        console.log("Connected to MongoDB");
    } catch (error) {
        console.error("Error connecting to MongoDB:", error);
        process.exit(1);
    }
}

export default dbConnect