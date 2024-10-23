import React from 'react'
import styles from './styles.module.scss'
import InputCommon from '@components/InputCommon/InputCommon'
import Button from '@components/Button/Button'

function Login() {
  const {container, title, lostPw} = styles
  return (
    <div className={container}>
      <div className={title}>SIGN IN</div>

      <form>
        <InputCommon id='email' label='Email' type='text' />
        <InputCommon id='password' label='Password' type='password' />

        <Button content={'LOGIN'} isWithFull/>

        <div className={lostPw}>Lost your password?</div>
      </form>
    </div>
  )
}

export default Login