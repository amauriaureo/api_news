import mongoose from "mongoose";

const connectDatabase = () => {
    console.log("Wait connecting to the database...")

    mongoose
        .connect(
            "mongodb+srv://root:YLBO0jooU2W46BpJ@cluster0.u98jwyp.mongodb.net/?retryWrites=true&w=majority",
            { useNewUrlParser: true, useUnifiedTopology: true }
        )
        .then(() => console.log("MongoDB Atlas Connected."))
        .catch((error) => console.log(error));
};

export default connectDatabase;
