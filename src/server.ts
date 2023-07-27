import { getenv } from '@common/libs/dotenv';
import app from '@infra/express/app';

const APP_PORT = getenv('APP_PORT', 8080)

app.listen({
  host: '0.0.0.0',
  port: APP_PORT
}, () => console.info(`Server listening on port ${APP_PORT}`))
 