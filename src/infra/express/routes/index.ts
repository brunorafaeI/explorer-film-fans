import { Router } from 'express'

const router = Router()

router.get('/movies', (_, res) => {
  res.send('Hello World!')
})

export default router