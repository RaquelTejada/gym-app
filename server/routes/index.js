module.exports = (app) => {
  const exercisesRoutes = require('./exercises.routes')
  app.use('/api/exercises', exercisesRoutes)
}
