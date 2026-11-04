'use client'
import { ROUTES } from '@/constants/routes'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Checkbox } from '@/components/ui/checkbox'
import {
  Field,
  FieldGroup,
  FieldLabel,
  FieldError,
  FieldDescription,
  FieldSeparator,
} from '@/components/ui/field'
import { Input } from '@/components/ui/input'
import { useSignIn } from '@/hooks/use-auth'
import { cn } from '@/lib/utils'
import { SignInDto } from '@/types/api.types'
import { zodResolver } from '@hookform/resolvers/zod'
import { Eye, EyeOff } from 'lucide-react'
import Image from 'next/image'
import { useSearchParams } from 'next/navigation'
import React, { useMemo, useState } from 'react'
import { useForm } from 'react-hook-form'
import * as z from 'zod'

export default function SignInForm({
  className,
  ...props
}: React.ComponentProps<'div'>) {
  const [showPassword, setShowPassword] = useState(false)
  const searchParams = useSearchParams()
  const redirectTo = searchParams.get('redirect') ?? undefined

  const signInMutation = useSignIn(
    {
      success: 'Đăng nhập thành công!',
      error: 'Đăng nhập thất bại',
    },
    redirectTo,
  )

  type SignInFormValues = SignInDto & { rememberMe: boolean }

  const signInSchema = useMemo(
    () =>
      z.object({
        email: z.email('Email không hợp lệ'),
        password: z.string().min(6, 'Mật khẩu phải có ít nhất 6 ký tự'),
        rememberMe: z.boolean(),
      }),
    [],
  )

  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors },
  } = useForm<SignInFormValues>({
    resolver: zodResolver(signInSchema),
    defaultValues: {
      email: '',
      password: '',
      rememberMe: false,
    },
  })

  const onSubmit = async (data: SignInFormValues) => {
    await signInMutation.mutateAsync(data)
  }

  return (
    <div className={cn('flex flex-col gap-6', className)} {...props}>
      <Card className="overflow-hidden p-0">
        <CardContent className="grid p-0 md:grid-cols-2">
          <form onSubmit={handleSubmit(onSubmit)} className="p-6 md:p-8">
            <FieldGroup>
              <div className="flex flex-col items-center gap-2 text-center">
                <h1 className="text-2xl font-bold">Chào mừng trở lại</h1>
                <p className="text-muted-foreground text-balance">
                  Đăng nhập vào tài khoản Shopify
                </p>
              </div>

              <Field>
                <FieldLabel htmlFor="email">Email</FieldLabel>
                <Input
                  id="email"
                  type="email"
                  placeholder="m@example.com"
                  {...register('email')}
                  disabled={signInMutation.isPending}
                />
                {errors.email && (
                  <FieldError className="text-destructive">
                    {errors.email.message}
                  </FieldError>
                )}
              </Field>

              <Field>
                <div className="flex items-center">
                  <FieldLabel htmlFor="password">Mật khẩu</FieldLabel>
                  <a
                    href={ROUTES.auth.forgotPassword}
                    className="ml-auto text-sm underline-offset-2 hover:underline"
                  >
                    Quên mật khẩu?
                  </a>
                </div>
                <div className="relative">
                  <Input
                    id="password"
                    type={showPassword ? 'text' : 'password'}
                    className="pr-10"
                    {...register('password')}
                    disabled={signInMutation.isPending}
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword((prev) => !prev)}
                    aria-label={showPassword ? 'Ẩn mật khẩu' : 'Hiện mật khẩu'}
                    className="text-muted-foreground hover:text-foreground absolute inset-y-0 right-0 flex w-10 items-center justify-center"
                  >
                    {showPassword ? (
                      <EyeOff className="size-4" />
                    ) : (
                      <Eye className="size-4" />
                    )}
                  </button>
                </div>
                {errors.password && (
                  <FieldError className="text-destructive">
                    {errors.password.message}
                  </FieldError>
                )}
              </Field>

              <Field>
                <label className="flex items-center gap-2 text-sm">
                  <Checkbox
                    checked={watch('rememberMe')}
                    onCheckedChange={(v) => setValue('rememberMe', v === true)}
                    disabled={signInMutation.isPending}
                  />
                  Ghi nhớ đăng nhập
                </label>
              </Field>

              <Field>
                <Button
                  type="submit"
                  className="w-full"
                  disabled={signInMutation.isPending}
                >
                  {signInMutation.isPending ? 'Đang đăng nhập' : 'Đăng nhập'}
                </Button>
              </Field>

              <FieldSeparator>hoặc</FieldSeparator>

              <FieldDescription className="text-center">
                Chưa có tài khoản?{' '}
                <a
                  href={ROUTES.auth.signup}
                  className="font-medium text-primary hover:underline"
                >
                  Đăng ký
                </a>
              </FieldDescription>
            </FieldGroup>
          </form>

          <div className="bg-muted relative hidden md:block">
            <Image
              src="/login-thumbnail.jpg"
              alt="Image"
              className="absolute inset-0 h-full w-full object-cover dark:brightness-[0.2] dark:grayscale"
              fill
              priority
              sizes="(max-width: 768px) 0px, 50vw"
            />
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
