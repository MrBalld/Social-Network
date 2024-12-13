import { Schema, Types, model, type Document } from "mongoose";

interface IReaction extends Document {
    reactionId: Schema.Types.ObjectId,
    reactionBody: String,
    username: String,
    createdAt: Schema.Types.Date
}

const ReactionSchema = new Schema<IReaction>(
    {
        reactionId: {
            type: Schema.Types.ObjectId,
            default: () => new Types.ObjectId()
        },
        reactionBody: {
            type: String,
            required: true,
            maxlength: 280,
        },
        username: {
            type: String,
            required: true,
        },
        createdAt: {
            type: Date,
            default: Date.now,
            // get: 
        }
    },
    {
        toJSON: {
            getters: true
        },
        id: false,
        timestamps: true
    }
);

export default ReactionSchema;