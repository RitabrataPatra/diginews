import mongoose, { Schema } from "mongoose";
// import dbConnect from "../config/db";

const postItemSchema = new Schema({
  img: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
  title: {
    type: String,
    required: true,
  },
  brief: {
    type: String,
    required: true,
    default: null,
  },
  avatar: {
    type: String,
    default: null,
  },
  author: {
    type: String,
    default: null,
  },
  topNews: {
    type: Boolean,
    default: false,
  },
  trending: {
    type: Boolean,
    default: false,
  },
},{
    timestamps: true, //will add createdAt and updatedAt
});

const PostItem = mongoose.models.postItem || mongoose.model("postItem",
  postItemSchema
)

export default PostItem