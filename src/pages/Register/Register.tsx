import './Register.scss'
import React, { FC } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import emailIco from '../../assets/images/email-ico.svg'
import passwordIco from '../../assets/images/password-ico.svg'
import personIco from '../../assets/images/person-ico.svg'
import { UserDataField } from '../../components/UserDataField/UserDataField'
import { useAuthContext } from '../../features/auth/AuthContextProvider'
import { registerSchema } from '../../features/auth/validation/validation.schema'
import { validate } from '../../features/auth/validation/validation.service'
import { TErrors, TInputs } from '../../features/auth/validation/validation.types'
import { createUserCollection } from '../../firebase/firebase.repository'

export const Register: FC = () => {
  const [form, setForm] = React.useState<TInputs>({ name: '', email: '', password: '' })
  const [errors, setErrors] = React.useState<TErrors | null>(null)
  const [errFocus, setErrFocus] = React.useState('')

  const { createWithEmailAndPassword } = useAuthContext()
  const navigate = useNavigate()

  const setStates = (data: TInputs) => {
    setForm({ ...form, ...data })
  }

  const onRegisterWithEmail = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    const validationErrors = validate(registerSchema, form)
    setErrors(validationErrors)
    if (validationErrors) {
      setErrFocus(Object.keys(validationErrors)[0])

      return
    }

    await createWithEmailAndPassword(form.email, form.password, form.name)
      .then(() => navigate('/all'))
      .catch(err => {
        if (err.code === 'auth/email-already-in-use') alert('Пользователь с указанным email уже существует')
      })
    await createUserCollection()
  }

  return (
    <>
      <form className="register-form" onSubmit={onRegisterWithEmail}>
        <h1 className="register-form__title">Register</h1>
        <span className="register-form__caption">Create your new account</span>
        <UserDataField
          error={errors?.name ? errors.name : null}
          focus={errFocus}
          setStates={setStates}
          name="name"
          icon={personIco}
          type="text"
          placeholder="Name"
          autofocus
        />
        <UserDataField
          error={errors?.email ? errors.email : null}
          focus={errFocus}
          setStates={setStates}
          name="email"
          icon={emailIco}
          type="text"
          placeholder="user@mail.ru"
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
        <button className="register-form__btn">Register</button>
        <p className="register-form__signin">
          Alredy have an account?{' '}
          <Link to="/login" className="register-form__signin-link">
            Sign in
          </Link>
        </p>
      </form>
    </>
  )
}
