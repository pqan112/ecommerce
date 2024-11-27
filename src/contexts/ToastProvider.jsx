import React, { createContext } from 'react'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

export const ToastContext = createContext()

function ToastProvider({ children }) {
    return (
        <ToastContext.Provider
            value={{
                toast
            }}
        >
            {children}
            <ToastContainer />
        </ToastContext.Provider>
    )
}

export default ToastProvider
