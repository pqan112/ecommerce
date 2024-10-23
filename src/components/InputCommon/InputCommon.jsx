import React, { useState } from 'react'
import { FiEye } from 'react-icons/fi'
import { FiEyeOff } from 'react-icons/fi'
import styles from './styles.module.scss'

function InputCommon({ label, type, ...props }) {
    const [showPassword, setShowPassword] = useState(false)

    const handleShowPassword = () => {
        setShowPassword((prev) => !prev)
    }
    const isPassword = type === 'password';
    const inputType = isPassword && showPassword ? 'text' : type; 
    console.log('inputType', inputType)


    const { container, labelInput, boxInput, boxIcon } = styles
    return (
        <div className={container}>
            <label className={labelInput} htmlFor={props.id}>
                {label}
            </label>
            <div className={boxInput}>
                <input id={props.id} type={inputType}/>


                {isPassword && (
                <div className={boxIcon} onClick={handleShowPassword}>
                    {showPassword ? <FiEyeOff /> : <FiEye />}
                </div>
                )}
            </div>
        </div>
    )
}

export default InputCommon
