import { Controller, Get } from "@infra/express/decorators/route"
import { Request, Response } from "express"

@Controller("/users/access")
export class UserAccessController {

  @Get("/")
  public userAccessIndex(req: Request, res: Response) {
    res.status(200).json({ message: "Access granted!" })
  }
}
