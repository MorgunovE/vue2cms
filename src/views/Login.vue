<template>
  <form class="card auth-card" @submit.prevent="submitHandler">
    <div class="card-content">
      <span class="card-title">Home Account</span>
      <div class="input-field">
        <input
          id="email"
          type="text"
          v-model.trim="email"
          :class="{invalid: ($v.email.$dirty && !$v.email.required) || ($v.email.$dirty && !$v.email.email)}"
        >
        <label for="email">Email</label>
        <small
          v-if="$v.email.$dirty && !$v.email.required"
          class="helper-text invalid">Please enter your email</small>
        <small
          v-else-if="$v.email.$dirty && !$v.email.email"
          class="helper-text invalid">Please enter correct email</small>
      </div>
      <div class="input-field">
        <input
          id="password"
          type="password"
          v-model.trim="password"
          :class="{invalid: ($v.password.$dirty && !$v.password.required) || ($v.password.$dirty && !$v.password.minLength)}"
        >
        <label for="password">Password</label>
        <small
          v-if="$v.password.$dirty && !$v.password.required"
          class="helper-text invalid">Please enter your password</small>
        <small
          v-else-if="$v.password.$dirty && !$v.password.minLength"
          class="helper-text invalid">Password can't be lower {{$v.password.$params.minLength.min}} symbols</small>
      </div>
    </div>
    <div class="card-action">
      <div>
        <button
          class="btn waves-effect waves-light auth-submit"
          type="submit"
        >
          Sing In
          <i class="material-icons right">send</i>
        </button>
      </div>
      
      <p class="center">
        Haven't account?
        <router-link to="/register">Sing Up</router-link>
      </p>
    </div>
  </form>
</template>

<script>
  import {email, required, minLength} from 'vuelidate/lib/validators'
  
  export default {
    name: "Login",
    data() {
      return {
        email: '',
        password: ''
      }
    },
    validations: {
      email: {email, required},
      password: {required, minLength: minLength(7)}
    },
    methods: {
      submitHandler() {
        if (this.$v.$invalid) {
          this.$v.$touch()
          return
        }
        // 1-56
        const formData = {
          email: this.email,
          password: this.password
        }
        this.$router.push('/')
      }
    }
  }
</script>

<style scoped>

</style>
