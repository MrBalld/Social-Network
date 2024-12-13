import { Schema, model, type Document } from "mongoose";
import ReactionSchema from "./Reaction.js";

interface Ithought extends Document {
    thoughtText: String,
    createdAt: Schema.Types.Date,
    username: String,
    reaction: Schema.Types.ObjectId[]
}

const ThoughtsSchema = new Schema<Ithought>(
    {
        thoughtText: {
            type: String,
            required: true,
            minlength: 1,
            maxlength: 280
        },
        createdAt: {
            type: Date,
            default: Date.now,
            //get: (timestamp:any) => {}
        },
        username: {
            type: String,
            required: true
        },
        reaction: ReactionSchema
    },
    {
        toJSON: {
            virtuals: true,
            getters: true
        },
        id: false,
        timestamps: true
    }
)

ThoughtsSchema.virtual("reactionCount").get(function(){
    return this.reaction.length;
});


const Thought = model("User", ThoughtsSchema);
export default Thought;