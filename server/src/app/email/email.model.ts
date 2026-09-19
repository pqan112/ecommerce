import z from 'zod'

export const SendAuthEmailSchema = z.object({
  to: z.email().max(320),
  name: z.string().min(1).max(255),
  url: z.url({ protocol: /^https?$/ }).max(2048),
})
