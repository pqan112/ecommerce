import React, { createContext, forwardRef, useId, useState } from 'react'
import { FiEye } from 'react-icons/fi'
import { FiEyeOff } from 'react-icons/fi'
import styles from './styles.module.scss'
import { Controller, FormProvider } from 'react-hook-form'

const InputCommon = forwardRef(({ label, type, ...props }, ref) => {
    const [showPassword, setShowPassword] = useState(false)

    const handleShowPassword = () => {
        setShowPassword((prev) => !prev)
    }
    const isPassword = type === 'password'
    const inputType = isPassword && showPassword ? 'text' : type

    const { container, labelInput, boxInput, boxIcon } = styles
    return (
        <div className={container}>
            <label className={labelInput} htmlFor={props.id}>
                {label}
            </label>
            <div className={boxInput}>
                <input id={props.id} type={inputType} ref={ref} {...props} />

                {isPassword && (
                    <div className={boxIcon} onClick={handleShowPassword}>
                        {showPassword ? <FiEyeOff /> : <FiEye />}
                    </div>
                )}
            </div>
        </div>
    )
})

const Form = FormProvider

const FormFieldContext = createContext({})

const FormField = ({ ...props }) => {
    return (
        <FormFieldContext.Provider value={{ name: props.name }}>
            <Controller {...props} />
        </FormFieldContext.Provider>
    )
}

const FormItemContext = createContext({})

const FormItem = forwardRef(({ className, ...props }, ref) => {
    const id = useId()

    return (
        <FormItemContext.Provider value={{ id }}>
            <div ref={ref} {...props} />
        </FormItemContext.Provider>
    )
})

export { InputCommon, Form, FormField, FormItem }
