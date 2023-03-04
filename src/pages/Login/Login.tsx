import './Login.scss'
import React, { FC } from 'react'
import { Link } from 'react-router-dom'
import emailIco from '../../assets/images/email-ico.svg'
import githubIco from '../../assets/images/github-ico.svg'
import googleIco from '../../assets/images/google-ico.svg'
import passwordIco from '../../assets/images/password-ico.svg'
import { UserDataField } from '../../components/UserDataField/UserDataField'

export const Login: FC = () => {
  return (
    <>
      <form className="login-form" onSubmit={() => console.log('login form')}>
        <h1 className="login-form__title">Welcome back</h1>
        <span className="login-form__caption">Login to your account</span>
        <UserDataField icon={emailIco} type="text" placeholder="user@mail.ru" />
        <UserDataField icon={passwordIco} type="password" placeholder="&#8226;&#8226;&#8226;&#8226;&#8226;&#8226;" />
        <button className="login-form__btn">Login</button>
        <div className="oath-wrapper">
          <span className="oath__caption">Or continue with</span>
          <div className="oath-icons-wrapper">
            <a href="#" className="oath__link">
              <img src={googleIco} alt="google icon" className="oath__icon" />
            </a>
            <a href="#" className="oath__link">
              <img src={githubIco} alt="google icon" className="oath__icon" />
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
