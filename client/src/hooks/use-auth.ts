import { ROUTES } from '@/constants/routes'
import { authService } from '@/services/auth.service'
import {
  ForgotPasswordDto,
  ResetPasswordDto,
  SignInDto,
  SignUpDto,
} from '@/types/api.types'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { useRouter } from 'next/navigation'
import { toast } from 'sonner'

type AuthToastMessages = {
  success?: string
  error?: string
}

export const useSignUp = (
  messages?: AuthToastMessages & {
    verifyEmail?: string
  },
) => {
  const router = useRouter()
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: (data: SignUpDto) => authService.signUp(data),
    onSuccess: (response) => {
      queryClient.setQueryData(['auth', 'session'], {
        user: response.user,
        isGuest: false,
        isAuthenticated: true,
      })

      if (response.token) {
        toast.success(messages?.success ?? 'Account created successfully')
        router.push(ROUTES.product.catalog)
        return
      }

      toast.info(
        messages?.verifyEmail ??
          messages?.success ??
          'Account created! Please check your email to verify your account',
      )

      router.push(ROUTES.auth.signin)
    },
    onError: (error: unknown) => {
      const message = (
        error as {
          response?: {
            data?: {
              message?: string
            }
          }
        }
      )?.response?.data?.message

      toast.error(
        typeof message === 'string'
          ? message
          : (messages?.error ?? 'Sign up failed'),
      )
    },
  })
}

export const useResendVerificationEmail = (messages?: AuthToastMessages) => {
  return useMutation({
    mutationFn: (email: string) => authService.resendVerificationEmail(email),

    onSuccess: () => {
      toast.success(
        messages?.success ??
          'Verification email sent! Please check your email.',
      )
    },

    onError: (error: unknown) => {
      const message = (
        error as {
          response?: {
            data?: {
              message?: string
            }
          }
        }
      )?.response?.data?.message

      toast.error(
        typeof message === 'string'
          ? message
          : (messages?.error ?? 'Failed to send verification email'),
      )
    },
  })
}

export const useSignIn = (
  messages?: AuthToastMessages,
  redirectTo?: string,
) => {
  const router = useRouter()
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: (data: SignInDto & { rememberMe?: boolean }) =>
      authService.signIn(data),

    onSuccess: (response) => {
      queryClient.setQueryData(['auth', 'session'], {
        user: response.user,
        isGuest: false,
        isAuthenticated: true,
      })

      toast.success(messages?.success ?? 'Sign in successful')

      router.push(redirectTo ?? ROUTES.product.catalog)
    },

    onError: (error: unknown) => {
      const message = (
        error as {
          response?: {
            data?: {
              message?: string
            }
          }
        }
      )?.response?.data?.message

      toast.error(
        typeof message === 'string'
          ? message
          : (messages?.error ?? 'Sign in failed'),
      )
    },
  })
}

export const useForgotPassword = (messages?: AuthToastMessages) => {
  return useMutation({
    mutationFn: (data: ForgotPasswordDto) => authService.forgotPassword(data),
    onSuccess: () => {
      toast.success(messages?.success ?? 'Password reset email sent')
    },
    onError: (error: unknown) => {
      const message = (error as { response?: { data?: { message?: string } } })
        ?.response?.data?.message

      toast.error(
        typeof message === 'string'
          ? message
          : (messages?.error ?? 'Failed to send reset email'),
      )
    },
  })
}

export const useResetPassword = (messages?: AuthToastMessages) => {
  const router = useRouter()
  return useMutation({
    mutationFn: (data: ResetPasswordDto) => authService.resetPassword(data),
    onSuccess: () => {
      toast.success(messages?.success ?? 'Password reset successful')
      router.push(ROUTES.auth.signin)
    },
    onError: (error: unknown) => {
      const message = (error as { response?: { data?: { message?: string } } })
        ?.response?.data?.message

      toast.error(
        typeof message === 'string'
          ? message
          : (messages?.error ?? 'Password reset failed'),
      )
    },
  })
}
