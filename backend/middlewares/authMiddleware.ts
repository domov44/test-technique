import { Request, ResponseToolkit } from '@hapi/hapi'

const VALID_USERNAME = 'Luke'
const VALID_PASSWORD = 'DadSucks'

export async function basicAuth(request: Request, h: ResponseToolkit) {
  const auth = request.headers.authorization

  if (!auth || !auth.startsWith('Basic ')) {
    return h.response({ error: 'Unauthorized' }).code(401).takeover()
  }

  const base64Credentials = auth.slice(6)
  const credentials = Buffer.from(base64Credentials, 'base64').toString('utf-8')
  const [username, password] = credentials.split(':')

  if (username !== VALID_USERNAME || password !== VALID_PASSWORD) {
    return h.response({ error: 'Invalid credentials' }).code(401).takeover()
  }

  return h.continue
}
