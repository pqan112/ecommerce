import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import Button from '@components/Button/Button'
import styles from './styles.module.scss'
import {
    Form,
    FormField,
    FormItem,
    InputCommon
} from '@components/InputCommon/InputCommon'
import { z } from 'zod'
import { useState } from 'react'

function Login() {
    const { container, title, lostPw } = styles

    const [isRegister, setIsRegister] = useState(false)

    const LoginBody = z
        .object({
            email: z.string().min(1, { message: 'required' }).email({
                message: 'Invalid email'
            }),
            password: z
                .string()
                .min(6, 'Password must be at least 6 characters')
                .max(100, 'Password must be at maximun 100 characters')
        })
        .strict()

    const RegisterBody = z
        .object({
            email: z.string().min(1, { message: 'required' }).email({
                message: 'Invalid email'
            }),
            password: z
                .string()
                .min(6, 'Password must be at least 6 characters')
                .max(100, 'Password must be at maximun 100 characters'),
            cfmPassword: z.string().min(6).max(100)
        })
        .strict()
        .superRefine(({ cfmPassword, password }, ctx) => {
            if (cfmPassword !== password) {
                ctx.addIssue({
                    code: 'custom',
                    message: 'Mật khẩu không khớp',
                    path: ['cfmPassword']
                })
            }
        })

    const form = useForm({
        resolver: zodResolver(isRegister ? RegisterBody : LoginBody),
        defaultValues: {
            email: '',
            password: ''
        }
    })

    const onSubmit = async (values) => {
        console.log(values)
    }

    const handleToggle = () => {
        setIsRegister((prev) => !prev)
        form.reset()
    }

    return (
        <div className={container}>
            <div className={title}>{isRegister ? 'SIGN UP' : 'SIGN IN'}</div>

            <Form {...form}>
                <form
                    noValidate
                    onSubmit={form.handleSubmit(onSubmit, (err) => {
                        console.log(err)
                    })}
                >
                    <FormField
                        control={form.control}
                        name='email'
                        render={({ field, formState: { errors } }) => (
                            <FormItem>
                                <InputCommon
                                    id='email'
                                    label='Email'
                                    type='text'
                                    errorMessage={
                                        Boolean(errors.email?.message) &&
                                        errors.email?.message
                                    }
                                    required
                                    {...field}
                                />
                            </FormItem>
                        )}
                    ></FormField>

                    <FormField
                        control={form.control}
                        name='password'
                        render={({ field, formState: { errors } }) => (
                            <FormItem>
                                <InputCommon
                                    id='password'
                                    label='Password'
                                    type='password'
                                    errorMessage={
                                        Boolean(errors.password?.message) &&
                                        errors.password?.message
                                    }
                                    required
                                    {...field}
                                />
                            </FormItem>
                        )}
                    ></FormField>

                    {isRegister && (
                        <FormField
                            control={form.control}
                            name='cfmPassword'
                            render={({ field, formState: { errors } }) => (
                                <FormItem>
                                    <InputCommon
                                        id='cfmPassword'
                                        label='Comfirm password'
                                        type='password'
                                        errorMessage={
                                            Boolean(
                                                errors.cfmPassword?.message
                                            ) && errors.cfmPassword?.message
                                        }
                                        required
                                        {...field}
                                    />
                                </FormItem>
                            )}
                        ></FormField>
                    )}

                    <Button
                        type='submit'
                        content={isRegister ? 'REGISTER' : 'LOGIN'}
                        isWithFull
                    />
                </form>
            </Form>
            <Button
                content={
                    isRegister
                        ? 'Already have an account?'
                        : `Don't have an account?`
                }
                type='button'
                isPrimary={false}
                isWithFull
                style={{ marginTop: '10px' }}
                onClick={handleToggle}
            />
            {!isRegister && <div className={lostPw}>Lost your password?</div>}
        </div>
    )
}

export default Login
