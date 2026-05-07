import mongoose, { Document, HydratedDocument, Model, Schema } from "mongoose";
import { comparePassword, hashPassword } from "../../common/utils/bcrypt";

export interface UserDocument extends Document {
  name: string;
  email: string;
  password: string;
  avatar: string | null;

  createdAt: Date;
  updatedAt: Date;

  comparePassword(password: string): Promise<boolean>;
}

interface UserModel extends Model<UserDocument> {}

const userSchema = new Schema<UserDocument, UserModel>(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },

    email: {
      type: String,
      required: true,
      unique: true,
      trim: true,
      lowercase: true,
      index: true,
    },

    password: {
      type: String,
      required: true,
      select: false,
    },

    avatar: {
      type: String,
      default: null,
    },
  },
  {
    timestamps: true,
    versionKey: false,
    toJSON: {
      virtuals: true,

      transform: (_, ret) => {
        const { password, ...rest } = ret;
        return rest;
      },
    },

    toObject: {
      virtuals: true,
    },
  },
);

userSchema.pre("save", async function (next) {
  const user = this as HydratedDocument<UserDocument>;
  if (!user.isModified("password")) {
    return next();
  }

  user.password = await hashPassword(user.password);
  next();
});

userSchema.methods.comparePassword = async function (password: string): Promise<boolean> {
  return comparePassword(password, this.password);
};
const User = mongoose.models.User || mongoose.model<UserDocument, UserModel>("User", userSchema);
export default User;
