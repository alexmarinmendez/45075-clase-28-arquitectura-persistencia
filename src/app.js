import express from 'express'
import usersRouter from './routers/usersRouter.js'

const app = express()

app.use(express.json())
// app.use(express.urlencoded({ extended: true })) 
app.use('/users', usersRouter)

app.listen(8080, () => console.log('Server Up'))