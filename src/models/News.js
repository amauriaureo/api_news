import mongoose from "mongoose";

const NewsSchema  = new mongoose.Scheema({
    title: {
        type: String,
        require: true
    },
    text: {
        type: String,
        require: true
    },
    banner: {
        type: String,
        require: true
    },
    createdAt: {
        type: Date,
        default: Date.now(),
    },
    user: {
        type: mongoose.Scheema.Types.ObjectId,
        ref: "User",
        required: true,
    },
    likes: {
        type: Array,
        require: true
    },
    comments: {
        type: Array,
        require: true

    },
});

const News = mongoose.model("News".NewSchema);

export default News;