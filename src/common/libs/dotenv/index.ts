import dotenv from 'dotenv'
import path from 'node:path'
import { KERNEL } from '@infra/config'

dotenv.config({ path: path.resolve(KERNEL.project_dir, ".env") })

type EnvTypeRaw = string | boolean | number

export function getenv<T extends EnvTypeRaw = string>(key: string, fallback?: T): T | string | undefined {
  return process.env[key] || fallback || undefined
}
