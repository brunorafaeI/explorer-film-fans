import { Controller, Get, Post } from "@infra/express/decorators/route"
import { Request, Response } from "express"

@Controller("/users")
export class UserController {

  @Get("/")
  public userIndex(_: Request, res: Response) {
    res.status(200).json({ message: "List of users" })
  }

  @Post("/")
  public userCreate(req: Request, res: Response) {
    const { email, name } = req.body
    res.status(200).json({ name, email })
  }

  @Get("/:id")
  public userOne(req: Request, res: Response) {
    const { id } = req.params
    res.status(200).json({ message: "User to get detail " + id })
  }
}
