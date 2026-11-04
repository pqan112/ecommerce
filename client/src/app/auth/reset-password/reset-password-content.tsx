'use client'

import { ResetPasswordForm } from '@/components/auth/reset-password-form'
import { ROUTES } from '@/constants/routes'
import Link from 'next/link'
import { useSearchParams } from 'next/navigation'

export default function ResetPasswordContent() {
  const searchParams = useSearchParams()
  const token = searchParams.get('token')

  if (!token) {
    return (
      <div className="bg-gradient-to-b from-primary/20 via-background to-primary/20 flex min-h-svh flex-col items-center justify-center p-6 md: p-10">
        <div className="w-full max-w-sm md:max-w-4xl">
          <div className="bg-card rounded-lg p-6 md:p-8 text-center">
            <h1 className="text-2xl font-bold mb-4">Lỗi</h1>
            <p className="text-muted-foreground mb-4">
              Token đặt lại mật khẩu không hợp lệ hoặc đã hết hạn.
            </p>
            <Link
              href={ROUTES.auth.forgotPassword}
              className="font-medium text-primary hover:underline"
            >
              Yêu cầu link đặt lại mật khẩu mới
            </Link>
          </div>
        </div>
      </div>
    )
  }

  return <ResetPasswordForm token={token} />
}
