const { Schema, model } = require('mongoose')

const exerciseSchema = new Schema(
  {
    title: {
      type: String,
      required: [true, 'Title is required.'],
    },
    type: {
      type: [String],
      enum: ['machine', 'dumbbell', 'barbell'],
      required: [true, 'Exercise type is required.'],
    },
    muscles: {
      type: [String],
      required: [true, 'At least one muscle is required.'],
    },
    weight: {
      type: Number,
      required: [true, 'Weight is required.'],
      min: [1, 'Weight must be greater than or equal to 1.'],
    },
  },
  {
    timestamps: true,
  }
)

const Exercise = model('Exercise', exerciseSchema)

module.exports = Exercise
