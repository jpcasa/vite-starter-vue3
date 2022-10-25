<script setup>
import { NInput, NSelect, NInputNumber } from 'naive-ui'

// import forms composable here
import { useFormValidation } from '~/composables/forms'

// use forms composable
const { errors, validate } = useFormValidation()

// check if submmited
const submitted = ref(false)

// define props
const props = defineProps({
  loading: {
    type: Boolean,
    default: false
  },
  button: {
    type: String,
    default: 'Ingresar'
  },
  fields: {
    type: Object,
    default: {
      email: {
        label: 'Correo electrónico',
        type: 'email',
        placeholder: 'Ingresa tu correo electrónico',
        required: true,
      },
      password: {
        label: 'Contraseña',
        type: 'password',
        placeholder: 'Ingresa tu contraseña',
        required: true,
      }
    }
  },
  data: {
    type: Object,
    default: { email: '', password: '' }
  },
  rules: {
    type: Object,
    default: {
      email: { required: true, minLength: 4, validEmail: true },
      password: { required: true, minLength: 6 }
    }
  }
})

// define emits as const
const emit = defineEmits(['submit', 'error'])

const inputTypes = ['textarea', 'text', 'email', 'password']

// call validate() in onSubmit hook
const onSubmit = () => {
  validate(props.data, props.rules)
  submitted.value = true
  if (Object.keys(errors.value).length != 0) {
    emit('error', { ...errors.value })
    return
  }
  emit('submit', { ...props.data })
}
</script>

<template lang="pug">
form.form(@submit.prevent="onSubmit")
  .form-row(
    v-for="(field, key) in fields"
    :key="key"
    :class="field.cols ? field.cols : 'col-span-6'"
  )
    .label
      label(for="username")
        | {{ field.label }}
        p(v-if="field.required") *
      span(v-if="field.sublabel") - {{ field.sublabel }}
    span.error(v-if="errors[key]") {{ errors[key] }}
    n-input(
      v-if="inputTypes.includes(field.type)"
      :type="field.type"
      :placeholder="field.placeholder"
      :required="field.required"
      v-model:value="data[key]"
    )
    n-select(
      v-if="field.type == 'select'"
      v-model:value="data[key]"
      :options="field.options"
      @update:value="onSubmit"
    )
    n-input-number(
      v-if="field.type == 'number'"
      v-model:value="data[key]"
      :placeholder="field.placeholder"
      :required="field.required"
      @update:value="onSubmit"
    )
    TextEditor(
      v-if="field.type == 'text-editor'"
      v-model:modelValue="data[key]"
    )
  .form-submit.col-span-6
    button(type="submit")
      span(v-if="!loading") {{ button }}
      img.spinner(v-else src="/gif/spinner.gif")
</template>

<style lang="scss" scoped>
.spinner {
  @apply w-8;
}

.form {
  @screen md {
    @apply grid gap-6 grid-cols-6;

    .form-row {
      @apply mb-0;
    }
  }
}
</style>