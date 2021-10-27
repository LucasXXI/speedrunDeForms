import mongoose from "../../database/index.js";

const FormSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    items: {
      type: [Number],
      required: true,
    },
    createdAt: {
      type: Date,
      default: Date.now,
    },
  },
  { collection: 'forms' },
);

const Form = mongoose.model('Forms', FormSchema);

export default Form;