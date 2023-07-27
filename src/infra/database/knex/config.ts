import { getenv } from "@common/libs/dotenv"
import path from "node:path"

interface KnexConfig {
  [key: string]: object;
}

export const knexConfig: KnexConfig = {
  test: {
    client: 'sqlite3',
    connection: {
      filename: './src/infra/database/test.sqlite3'
    }
  },

  development: {
    client: 'postgresql',
    connection: getenv('POSTGRES_DB_URL')!,
    pool: { max: 15 },
    migrations: {
      tableName: 'knex_migrations',
      directory: path.resolve("..","..","infra","database","knex","migrations"),
    },
    debug: true,
    useNullAsDefault: true
  },

  production: {
    client: 'postgresql',
    connection: getenv('POSTGRES_DB_URL')!,
    pool: { max: 15 },
    migrations: {
      tableName: 'knex_migrations',
      directory: path.resolve("..","..","infra","database","knex","migrations"),
    },
    ssl: true
  }
};
