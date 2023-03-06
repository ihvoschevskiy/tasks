import { TErrors, TInputs, TSchema } from './validation.types'

export const validate = (schema: TSchema, inputs: TInputs): TErrors | null => {
  const errors: TErrors = {}

  for (const p of Object.keys(schema)) {
    if (!schema[p].isValid(inputs[p])) errors[p] = schema[p].message
  }

  return Object.keys(errors).length ? errors : null
}
