import Knex from "knex"
import { getenv } from '@common/libs/dotenv'
import { knexConfig } from './config'

const NODE_ENV = getenv('NODE_ENV', 'development')
export const knexConnector = Knex(knexConfig[NODE_ENV])

