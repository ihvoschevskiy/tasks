import { TSchema } from './validation.types'

export const loginSchema: TSchema = {
  email: {
    isValid: value =>
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
        value,
      ),
    message: 'Поле должно содержать корректный адрес',
  },
  password: {
    isValid: value => /^((?=.*[a-z])(?=.*[A-Z])(?=.*[0-9]))(?=.{6,})/.test(value),
    message:
      'Пароль должен содержать как минимум одну строчную и одну прописную букву, одну цифру и его длина составлять не менее шести символов',
  },
}

export const registerSchema: TSchema = {
  name: {
    isValid: value => /^(?=[a-zA-Zа-яА-Я0-9._]{4,16}$)(?!.*[_.]{2})(?!^[0-9])[^_.].*[^_.]$/.test(value),
    message: 'Имя должно начинаться с буквы и не превышать 16 символов',
  },
  ...loginSchema,
}
