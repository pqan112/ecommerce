import React, { createContext, forwardRef, useId, useState } from 'react'
import { FiEye } from 'react-icons/fi'
import { FiEyeOff } from 'react-icons/fi'
import styles from './styles.module.scss'
import { Controller, FormProvider } from 'react-hook-form'

const InputCommon = forwardRef(({ label, type, errorMessage, ...props }, ref) => {
    const [showPassword, setShowPassword] = useState(false)

    const handleShowPassword = () => {
        setShowPassword((prev) => !prev)
    }
    const isPassword = type === 'password'
    const inputType = isPassword && showPassword ? 'text' : type

    const { container, labelInput, boxInput, boxIcon, errMessage } = styles
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

                <span className={errMessage}>{errorMessage}</span>
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

const useFormField = () => {
  const fieldContext = useContext(FormFieldContext)
  const itemContext = useContext(FormItemContext)
  const { getFieldState, formState } = useFormContext()

  const fieldState = getFieldState(fieldContext.name, formState)

  if (!fieldContext) {
    throw new Error('useFormField should be used within <FormField>')
  }

  const { id } = itemContext

  return {
    id,
    name: fieldContext.name,
    formItemId: `${id}-form-item`,
    formDescriptionId: `${id}-form-item-description`,
    formMessageId: `${id}-form-item-message`,
    ...fieldState
  }
}

const FormMessage = forwardRef(({ className, children, ...props }, ref) => {
  const { error, formMessageId } = useFormField()
  const body = children
    ? children
    : error?.message
    ? String(error?.message)
    : null
  if (!body) {
    return null
  }

  return (
    <p
      ref={ref}
      id={formMessageId}
      className={cn('text-[0.8rem] font-medium text-destructive', className)}
      {...props}
    >
      {body}
    </p>
  )
})

export { InputCommon, Form, FormField, FormItem, FormMessage }
