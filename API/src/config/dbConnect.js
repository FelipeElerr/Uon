import mongoose from "mongoose"

mongoose.connect("mongodb+srv://Rafael:rafael123@devweb.zvroq.mongodb.net/?retryWrites=true&w=majority");

let db = mongoose.connection;

export default db;