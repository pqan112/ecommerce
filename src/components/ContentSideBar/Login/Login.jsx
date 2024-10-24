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

function Login() {
    const { container, title, lostPw } = styles

    const LoginBody = z
        .object({
            email: z.string().min(1, { message: 'required' }).email({
                message: 'invalidEmail'
            }),
            password: z
                .string()
                .min(6, 'minmaxPassword')
                .max(100, 'minmaxPassword')
        })
        .strict()

    const form = useForm({
        resolver: zodResolver(LoginBody),
        defaultValues: {
            email: '',
            password: ''
        }
    })

    const onSubmit = async (data) => {
        console.log(data)
    }

    return (
        <div className={container}>
            <div className={title}>SIGN IN</div>

            <Form {...form}>
                <form
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
                                    {...field}
                                />
                            </FormItem>
                        )}
                    ></FormField>

                    <Button type='submit' content={'LOGIN'} isWithFull />

                    <div className={lostPw}>Lost your password?</div>
                </form>
            </Form>
        </div>
    )
}

export default Login
