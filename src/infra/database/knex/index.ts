import Knex from "knex"
import knexConfig from './config'

const knexManager = Knex(knexConfig)

export default knexManager
