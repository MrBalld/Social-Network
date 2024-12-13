import { Schema, model, type Document } from "mongoose";

interface IUser extends Document {
    username: string;
    email: string;
    thoughts:Schema.Types.ObjectId[];
    friends: Schema.Types.ObjectId[];
}

const UserSchema = new Schema<IUser>(
    {
        username: {
            type: String,
            unique: true,
            required: true,
            trim: true
        },
        email: {
            type: String,
            required: false,
            unique: true,
            match: [/.+@.+\..+/, 'Please fill a valid email address'], // Regex for email validation
        }, 
        thoughts: [{
            type: Schema.Types.ObjectId,
            ref: "Thought"
        }],
        friends: [{
            type: Schema.Types.ObjectId,
            ref: "User"
        }]
    },
    {
        toJSON: {
            virtuals: true
        },
        id: false
    }
);

UserSchema.virtual("friendCount").get(function(){
    return this.friends.length;
});



const User = model("User", UserSchema);
export default User;