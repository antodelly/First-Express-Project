import mongoose from "mongoose";
const personaSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  age: {
    type: Number,
    required: true,
  },
});

export default mongoose.model("Persona", personaSchema);
