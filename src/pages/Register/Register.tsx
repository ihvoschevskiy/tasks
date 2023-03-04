import './Register.scss'
import React, { FC } from 'react'
import emailIco from '../../assets/images/email-ico.svg'
import githubIco from '../../assets/images/github-ico.svg'
import googleIco from '../../assets/images/google-ico.svg'
import passwordIco from '../../assets/images/password-ico.svg'
import personIco from '../../assets/images/person-ico.svg'
import { UserDataField } from '../../components/UserDataField/UserDataField'

export const Register: FC = () => {
  return (
    <>
      <form className="register-form" onSubmit={() => console.log('register form')}>
        <h1 className="register-form__title">Register</h1>
        <span className="register-form__caption">Create your new account</span>
        <UserDataField icon={personIco} type="text" placeholder="Name" />
        <UserDataField icon={emailIco} type="text" placeholder="user@mail.ru" />
        <UserDataField icon={passwordIco} type="password" placeholder="&#8226;&#8226;&#8226;&#8226;&#8226;&#8226;" />
        <button className="register-form__btn">Register</button>
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
      </form>
    </>
  )
}
