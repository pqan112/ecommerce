import SignInForm from '@/components/auth/signin-form'
import { Suspense } from 'react'

export default function SignInPage() {
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
          <SignInForm />
        </Suspense>
      </div>
    </div>
  )
}
