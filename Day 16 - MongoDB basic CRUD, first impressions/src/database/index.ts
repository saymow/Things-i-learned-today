import dotenv from "dotenv";
dotenv.config();
import mongoose from "mongoose";

const uri = `mongodb+srv://Gustavo:${process.env.DB_PASSWORD}@cluster0-kzpox.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority`;

mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true });

export default mongoose;
