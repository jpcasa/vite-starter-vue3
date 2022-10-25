// create form validation composable
export function useFormValidation() {
  const errors = ref({})

  const validateEmail = (email) => {
    const re = /\S+@\S+\.\S+/
    return re.test(email)
  }

  const validate = (data, rules) => {
    const newErrors = {}
    for (const [key, value] of Object.entries(data)) {
      const rule = rules[key]      
      if (rule) {        
        for (const [ruleKey, ruleValue] of Object.entries(rule)) {
          if (ruleKey == 'required' && ruleValue && !value) {
            newErrors[key] = 'Este campo es requerido'
            console.log(`${key} required`)
          }
          if (ruleKey == 'minLength' && value.length < ruleValue) {
            newErrors[key] = `Este campo debe tener al menos ${ruleValue} caracteres`
            console.error(`${key} must be at least ${ruleValue} characters`)
          }
          if (ruleKey == 'maxLength' && value.length > ruleValue) {
            newErrors[key] = `Este campo debe tener menos de ${ruleValue} caracteres`
            console.error(`${key} must be less than ${ruleValue} characters`)
          }
          if (ruleKey == 'pattern' && !ruleValue.test(value)) {
            newErrors[key] = 'Este campo no es válido'
            console.error(`${key} is invalid`)
          }
          if (ruleKey == 'validEmail' && !validateEmail(value)) {
            newErrors[key] = 'Este campo debe ser un correo electrónico válido'
            console.error(`${key} must be a valid email`)
          }
          if (ruleKey == 'sameAs' && value != data[ruleValue]) {
            newErrors[key] = `Este campo debe ser igual a ${ruleValue}`
            console.error(`${key} must match`)
          }
        }
      }
    }
    errors.value = newErrors
  }

  return { errors, validate }
}
