export function parseEnvOrigins(...value: (string | undefined)[]): string[] {
  const origins: string[] = []
  for (const item of value) {
    if (!item) continue

    for (const origin of item.split(',')) {
      const trimmed = origin.trim()
      if (trimmed) {
        origins.push(trimmed)
      }
    }
  }
  return [...new Set(origins)]
}
