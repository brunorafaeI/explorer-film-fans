import { getenv } from '@common/libs/dotenv'
import path from "node:path"

interface KnexConfig {
  [key: string]: object;
}

const NODE_ENV = getenv('NODE_ENV') || 'development'

const knexConfig: KnexConfig = {
  test: {
    client: 'sqlite3',
    connection: {
      filename: path.resolve("..", "sqlite", "test.sqlite3")
    }
  },

  development: {
    client: 'postgresql',
    connection: getenv('POSTGRES_DB_URL')!,
    pool: { max: 15 },
    migrations: {
      directory: path.resolve(__dirname, "migrations"),
    },
    debug: true,
    useNullAsDefault: true
  },

  production: {
    client: 'postgresql',
    connection: getenv('POSTGRES_DB_URL')!,
    pool: { max: 15 },
    migrations: {
      directory: path.resolve(__dirname, "migrations"),
    },
    ssl: true
  }
}

export default knexConfig[NODE_ENV]
