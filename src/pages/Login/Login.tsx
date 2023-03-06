import './Login.scss'
import { ProviderId } from 'firebase/auth'
import React, { FC } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import emailIco from '../../assets/images/email-ico.svg'
import githubIco from '../../assets/images/github-ico.svg'
import googleIco from '../../assets/images/google-ico.svg'
import passwordIco from '../../assets/images/password-ico.svg'
import { UserDataField } from '../../components/UserDataField/UserDataField'
import { useAuthContext } from '../../features/auth/AuthContextProvider'
import { registerSchema } from '../../features/auth/validation/validation.schema'
import { validate } from '../../features/auth/validation/validation.service'
import { TInputs } from '../../features/auth/validation/validation.types'
import { TErrors } from '../../features/auth/validation/validation.types'
import { createUserCollection } from '../../firebase/firebase.repository'

export const Login: FC = () => {
  const [form, setForm] = React.useState<TInputs>({ email: '', password: '' })
  const [errors, setErrors] = React.useState<TErrors | null>(null)
  const [errFocus, setErrFocus] = React.useState('')

  const { loginWithOauthPopup, loginWithEmailAndPassword } = useAuthContext()
  const navigate = useNavigate()

  const setStates = (data: TInputs) => {
    setForm({ ...form, ...data })
  }

  const onLoginWithEmail = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    const validationErrors = validate(registerSchema, form)
    setErrors(validationErrors)
    if (validationErrors) {
      setErrFocus(Object.keys(validationErrors)[0])

      return
    }

    loginWithEmailAndPassword(form.email, form.password)
      .then(() => navigate('/all'))
      .catch(err => {
        if (err.code === 'auth/wrong-password') alert('Введен некорректный пароль')
        if (err.code === 'auth/user-not-found') alert('Пользователь с указанным email не найден')
      })
  }

  const onLoginWithOauth = async (e: React.FormEvent<HTMLElement>) => {
    e.preventDefault()
    const dataset = (e.target as HTMLElement)?.closest<HTMLLinkElement>('.oauth__link')?.dataset
    if (dataset?.provider) {
      await loginWithOauthPopup(dataset?.provider)
        .then(() => navigate('/all'))
        .catch(err => {
          throw err
        })
      await createUserCollection()
    }
  }

  return (
    <>
      <form className="login-form" onSubmit={onLoginWithEmail}>
        <h1 className="login-form__title">Welcome back</h1>
        <span className="login-form__caption">Login to your account</span>
        <UserDataField
          error={errors?.email ? errors.email : null}
          focus={errFocus}
          setStates={setStates}
          name="email"
          icon={emailIco}
          type="text"
          placeholder="user@mail.ru"
          autofocus
        />
        <UserDataField
          error={errors?.password ? errors.password : null}
          focus={errFocus}
          setStates={setStates}
          name="password"
          icon={passwordIco}
          type="password"
          placeholder="&#8226;&#8226;&#8226;&#8226;&#8226;&#8226;"
        />
        <button className="login-form__btn">Login</button>
        <div className="oauth-wrapper">
          <span className="oauth__caption">Or continue with</span>
          <div className="oauth-icons-wrapper">
            <a href="#" className="oauth__link" onClick={onLoginWithOauth} data-provider={ProviderId.GOOGLE}>
              <img src={googleIco} alt="google icon" className="oauth__icon" />
            </a>
            <a href="#" className="oauth__link" onClick={onLoginWithOauth} data-provider={ProviderId.GITHUB}>
              <img src={githubIco} alt="google icon" className="oauth__icon" />
            </a>
          </div>
        </div>
        <p className="login-form__signup">
          Don’t have account?{' '}
          <Link to="/register" className="login-form__signup-link">
            Sign up
          </Link>
        </p>
      </form>
    </>
  )
}
