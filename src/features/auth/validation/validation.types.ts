export type TInputs = { [key: string]: string }
export type TErrors = { [key: string]: string }
export type TSchema = {
  [key: string]: {
    isValid: (value: string) => boolean
    message: string
  }
}
