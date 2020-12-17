import express from 'express'
import bodyParser from 'body-parser'
import mongoose from 'mongoose'
import cors from 'cors'

import postsRoutes from './routes/posts.js'
import alumniRoutes from './routes/alumni.js'
import eventsRoutes from './routes/events.js'
import partnersRoutes from './routes/partners.js'
import activitiesRoutes from './routes/activities.js'

const app = express()

app.use(bodyParser.json({ limit: '30mb', extended: true }))
app.use(bodyParser.urlencoded({ limit: '30mb', extended: true }))
app.use(cors())

app.use('/posts', postsRoutes)
app.use('/alumni', alumniRoutes)
app.use('/events', eventsRoutes)
app.use('/partners', partnersRoutes)
app.use('/drama-group', activitiesRoutes)


const PORT = process.env.PORT || 5000
const CONNECTION_URI = 'mongodb+srv://root:Soda3291!@cluster0.869i8.mongodb.net/<dbname>?retryWrites=true&w=majority'

mongoose.connect(CONNECTION_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => app.listen(PORT, () => console.log(`Server Running on Port: ${PORT}`)))
    .catch((error) => console.log(error.message))


mongoose.set('useFindAndModify', false)
