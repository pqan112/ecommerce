import { Suspense } from 'react'
import ResetPasswordContent from './reset-password-content'

export default function ResetPasswordPage() {
  return (
    <div className="bg-gradient-to-b from-primary/20 via-background to-primary/20 flex min-h-svh flex-col items-center justify-center p-6 md: p-10">
      <div className="w-full max-w-sm md:max-w-4xl">
        <Suspense
          fallback={
            <div className="bg-card rounded-lg p-6 md:p-8 text-center">
              <p className="text-muted-foreground">Đang tải...</p>
            </div>
          }
        >
          <ResetPasswordContent />
        </Suspense>
      </div>
    </div>
  )
}
