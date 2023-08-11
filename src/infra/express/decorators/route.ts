import { RequestHandler } from 'express'

export enum RouteMethod {
  GET = 'get',
  POST = 'post',
  PUT = 'put',
  DELETE = 'delete'
}

export interface RouteDefinition {
  method: RouteMethod
  path: string
  handler: RequestHandler
}

export const Route = (path: string, method: RouteMethod) => {
  return (target: any, _: string, descriptor: PropertyDescriptor) => {
    const routes = [
        ...new Set<RouteDefinition>(
        Reflect.getMetadata('route', target.constructor)
      )
    ]

    routes.push({ method, path, handler: descriptor.value })
    Reflect.defineMetadata('route', routes, target.constructor)
  }
}

export const Get = (path: string) => Route(path, RouteMethod.GET)
export const Post = (path: string) => Route(path, RouteMethod.POST)
export const Delete = (path: string) => Route(path, RouteMethod.DELETE)
export const Put = (path: string) => Route(path, RouteMethod.PUT)

export const Controller = (routePrefix: string) => {
  return (constructor: any) => {

    const routes = [
        ...new Set<RouteDefinition>(
        Reflect.getMetadata('route', constructor)
      )
    ]

    routes.map((route: RouteDefinition) => route.path = routePrefix + route.path)
    Reflect.defineMetadata('route', routes, constructor)
  }
}
