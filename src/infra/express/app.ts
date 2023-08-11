import "reflect-metadata"
import "express-async-errors"

import express from "express"
import cors from "cors"
import routes from '@infra/express/routes'
import { AppError } from "./middlewares/error"

const app = express()

app.use(cors())
app.use(express.json())
app.use(AppError.handler)

app.use('/api/v1', routes, (_, res) => {
  res.status(200).json({ message: "Welcome to my Api REST" })
})

export default app
