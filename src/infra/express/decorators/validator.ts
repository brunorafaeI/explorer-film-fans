export const Controller = (className: string) => {
  return (constructor: any) => {
    // const routes = [
    //     ...new Set<RouteDefinition>(
    //     Reflect.getMetadata('route', constructor)
    //   )
    // ]

    // routes.map((route: RouteDefinition) => route.path = routePrefix + route.path)
    // Reflect.defineMetadata('route', routes, constructor)
    console.log(className, constructor)
  }
}
