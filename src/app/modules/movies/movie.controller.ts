import { Route, RouteMethod } from "@infra/express/decorators/route"
import { Request, Response } from "express"

export class MovieController {

  @Route("/movies", RouteMethod.GET)
  public movieIndex(_: Request, res: Response) {
    res.status(200).json({ message: "List of movies" })
  }

  @Route("/movies/:id", RouteMethod.GET)
  public movieOne(req: Request, res: Response) {
    const { id } = req.params
    res.status(200).json({ message: "Move to wathering " + id })
  }
}
