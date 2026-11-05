import { User } from './api.types'

export type AuthMeResponse = {
  success: boolean
  authenticated: boolean
  user: User | null
}
