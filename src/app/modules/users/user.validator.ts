import { NextFunction, Request } from 'express'

export interface UserRequestBody extends Request {
  body: {
    name: string;
    email: string
  }
}

export const UserValidator = (
  req: UserRequestBody,
  res: Response,
  next: NextFunction
) => {
  const { name, email } = req.body

  if (!name || !email) {
    throw new Error("User form is not valid")
  }

  next()
}
