import 'dotenv/config'

type EnvTypeRaw = string | boolean | number

export function getenv<T extends EnvTypeRaw = string>(key: string, fallback?: EnvTypeRaw): EnvTypeRaw | undefined {
    return process.env[key] || fallback || undefined
}