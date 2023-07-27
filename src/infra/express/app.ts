import "express-async-errors"

import express from "express"
import cors from "cors"
import routes from '@infra/express/routes'

const app = express()

app.use(cors())
app.use(express.json())

app.use('/api/v1', routes, (req, res) => {
    res.status(200).json({ message: "Welcome to my Api REST" })
})

export default app