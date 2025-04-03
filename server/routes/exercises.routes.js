const router = require('express').Router()

const Exercise = require('./../models/Exercise.model')

router.get('/getAllExercises', (req, res) => {
  Exercise.find()
    .then(response => res.json(response))
    .catch(err => res.status(500).json(err))
})

router.get('/getOneExercise/:exercise_id', (req, res) => {
  const { exercise_id } = req.params

  Exercise.findById(exercise_id)
    .then(response => res.json(response))
    .catch(err => res.status(500).json(err))
})

router.post('/saveExercise', (req, res) => {
  Exercise.create(req.body)
    .then(response => res.json(response))
    .catch(err => res.status(500).json(err))
})

module.exports = router
