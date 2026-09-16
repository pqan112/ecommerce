const MAX_COOKIES_CHUNKS = 8
const SESSION_COOKIE_NAMES = [
  'better-auth.session_token',
  '__Secure-better-auth.session_token',
]

export function extractBearerToken(
  headers: Record<string, string | string[] | undefined>,
): string | null {
  const raw = headers.authorization ?? headers.Authorization
  const value = Array.isArray(raw) ? raw[0] : raw
  if (!value || !value.toLowerCase().startsWith('bearer ')) return null

  const token = value.slice(String('bearer ').length).trim()
  if (!token) return null

  try {
    return decodeURIComponent(token)
  } catch {
    return token
  }
}

function cookieValue(header: string, name: string): string | null {
  const parts = header.split(';')

  for (const part of parts) {
    const idx = part.indexOf('=')
    if (idx === -1) continue

    const k = part.slice(0, idx).trim()

    if (k === name) {
      return part.slice(idx + 1).trim()
    }
  }

  return null
}

function readSessionCookieValue(
  header: string,
  baseName: string,
): string | null {
  const entire = cookieValue(header, baseName)
  if (entire) return entire

  const chunks: string[] = []
  for (let i = 0; i < MAX_COOKIES_CHUNKS; i++) {
    const chunk = cookieValue(header, `${baseName}.${i}`)
    if (chunk === null) break
    chunks.push(chunk)
  }
  return chunks.length > 0 ? chunks.join('') : null
}

function stripSignature(value: string): string {
  const lastDotIdx = value.lastIndexOf('.')
  return lastDotIdx > 0 ? value.slice(0, lastDotIdx) : value
}

export function extractSessionTokenFromHeaders(
  headers: Record<string, string | string[] | undefined>,
): string | null {
  const bearer = extractBearerToken(headers)
  if (bearer) {
    return stripSignature(bearer)
  }

  const rawCookie = headers.cookie ?? headers.Cookie
  const cookieHeader = Array.isArray(rawCookie) ? rawCookie[0] : rawCookie

  if (cookieHeader) {
    for (const name of SESSION_COOKIE_NAMES) {
      const value = readSessionCookieValue(cookieHeader, name)
      if (value) {
        return stripSignature(value)
      }
    }
  }

  return null
}
