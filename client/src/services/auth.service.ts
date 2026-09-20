import { getAuthClient } from '@/lib/auth/auth-client'
import { AuthResponse, SignUpDto, User } from '@/types/api.types'

function mapAuthUser(user: {
  id: string
  email: string
  name: string
  image?: string | null
  emailVerified: boolean
  createdAt: Date
  updatedAt: Date
}): User {
  return {
    id: user.id,
    email: user.email,
    name: user.name,
    image: user.image ?? undefined,
    emailVerified: user.emailVerified,
    createdAt:
      user.createdAt instanceof Date
        ? user.createdAt.toISOString()
        : String(user.createdAt),
    updatedAt:
      user.updatedAt instanceof Date
        ? user.updatedAt.toISOString()
        : String(user.updatedAt),
  }
}

async function readSessionToken(): Promise<string> {
  const res = await getAuthClient().getSession()
  return res.data?.session.token ?? ''
}

export const authService = {
  signUp: async (data: SignUpDto): Promise<AuthResponse> => {
    const res = await getAuthClient().signUp.email({
      email: data.email,
      password: data.password,
      name: data.name,
    })

    if (res.error) {
      throw Object.assign(new Error(res.error.message || 'Đăng ký thất bại'), {
        response: {
          data: {
            message: res.error.message,
          },
        },
      })
    }

    const raw = res.data?.user
    if (!raw) {
      throw Object.assign(new Error('Đăng ký thất bại'), {
        response: {
          data: {
            message: 'không lấy được thông tin user',
          },
        },
      })
    }
    const user = mapAuthUser(raw)
    const token = await readSessionToken()

    return {
      success: true,
      user,
      token,
    }
  },
}
