<script setup>
const formFields = ref({
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
})

const formRules = ref({
  email: { required: true, minLength: 4, validEmail: true },
  password: { required: true, minLength: 6 }
})

const formValues = ref({ email: '', password: '' })

const onSubmit = formData => emit('submit', formData)
</script>

<template lang="pug">
.form-login
  p.form-title Ingresa aquí:
  Form(
    :fields="formFields"
    :data="formValues"
    :rules="formRules"
    :loading="false"
    @submit="onSubmit"
  )
</template>

<style lang="scss" scoped></style>