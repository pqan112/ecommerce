import z from 'zod'

/**
 * `z.date()` itself cannot be converted to a JSON Schema, which breaks
 * Swagger generation wherever it's used in a `@ZodResponse` DTO. These
 * codecs describe the encode/decode boundary between the domain `Date`
 * TypeORM gives us and the string representation sent over the wire, so
 * schemas stay accurate at runtime, compile-time, and in the OpenAPI docs.
 */

const utcDateFormatter = new Intl.DateTimeFormat('en-CA', {
  timeZone: 'UTC',
  year: 'numeric',
  month: '2-digit',
  day: '2-digit',
})

/** For `timestamptz` columns: a point in time, encoded as a UTC ISO-8601 string. */
export const timestampSchema = () =>
  z.codec(z.date(), z.iso.datetime(), {
    decode: (date) => date.toISOString(),
    encode: (iso) => new Date(iso),
  })

/**
 * For `date` columns: a calendar date with no time-of-day or timezone,
 * encoded as `YYYY-MM-DD`. Formatted in the UTC calendar so the day never
 * shifts depending on the server's local timezone.
 */
export const dateOnlySchema = () =>
  z.codec(z.date(), z.iso.date(), {
    decode: (date) => utcDateFormatter.format(date),
    encode: (isoDate) => new Date(`${isoDate}T00:00:00.000Z`),
  })
