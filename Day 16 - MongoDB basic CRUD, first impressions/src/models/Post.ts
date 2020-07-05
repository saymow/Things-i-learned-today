import moongose from "../database/index";

const UserSchema = new moongose.Schema({
  author: {
    type: String,
    required: true,
    maxlength: 60,
  },
  title: {
    type: String,
    required: true,
    maxlength: 60,
    unique: true,
  },
  data: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const User = moongose.model("Posts", UserSchema);

export default User;
