import { RequestHandler } from "express"
import { HttpMethodType } from "../../lib/types/common.js"

export interface IRouteList {
  httpMethod: HttpMethodType
  url: string
  handlers: RequestHandler[]
}