const mongoose = require("mongoose");

const TaskSchema = new mongoose.Schema(
  {
    task: {
      type: String,
      required: [true, "Task description is required"],
      trim: true, // Removes extra spaces
      maxlength: [250, "Task description cannot exceed 200 characters"],
    },
    completed: {
      type: Boolean,
      default: false,
    },
    priority: {
      type: String,
      enum: ["Low", "Medium", "High"],
      default: "Medium",
    },
    starred: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true } // Automatically adds createdAt & updatedAt
);

// Add index for faster queries
TaskSchema.index({ completed: 1, priority: 1, starred: 1 });

module.exports = mongoose.model("Task", TaskSchema);
