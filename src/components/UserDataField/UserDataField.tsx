import './UserDataField.scss'
import React, { FC } from 'react'
import { TInputs } from '../../features/auth/validation/validation.types'
import { FormErrors } from '../FormErrors/FormErrors'

interface Props {
  setStates: (data: TInputs) => void
  error: string | null
  focus: string
  name: string
  autofocus?: boolean
  icon: any
  type: string
  placeholder: string
}

export const UserDataField: FC<Props> = ({ name, icon, type, placeholder, autofocus, setStates, error, focus }) => {
  const [data, setData] = React.useState<TInputs>({ [name]: '' })
  const errRef = React.useRef<HTMLInputElement>(null)
  React.useEffect(() => {
    setStates(data)
  }, [data])

  React.useEffect(() => {
    if (errRef.current !== null) errRef.current.focus()
  }, [focus])

  const onHandle = (e: React.ChangeEvent<HTMLInputElement>) => {
    setData({ [name]: e.target.value.trim() })
  }

  return (
    <div className="data-field-wrapper">
      <label className="data-field__label">
        <img src={icon} alt="icon" className="data-field__icon" />
        <input
          name={name}
          ref={name === focus ? errRef : null}
          value={data.value}
          type={type}
          autoComplete="off"
          placeholder={placeholder}
          className="data-field__input"
          autoFocus={autofocus}
          onChange={onHandle}
        />
      </label>
      {error && <FormErrors error={error} />}
    </div>
  )
}
