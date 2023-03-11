const mongoose = require("mongoose");

const itemSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      get: (name) => name.toLowerCase(),
    },
    description: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
      get: (n) => (n / 100).toFixed(2),
      set: (n) => n * 100,
    },
    image: String,
    type: {
      type: String,
      required: true,
      get: (name) => name.toLowerCase(),
    },
    stock: Number,
  },
  {
    toJSON: { getters: true },
  }
);

mongoose.model("Item", itemSchema);
