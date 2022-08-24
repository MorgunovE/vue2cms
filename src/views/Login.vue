<template>
  <form class="card auth-card" @submit.prevent="submitHandler">
    <div class="card-content">
      <span class="card-title">{{'Home Account'|localize}}</span>
      <div class="input-field">
        <input
          id="email"
          type="text"
          v-model.trim="email"
          :class="{invalid: ($v.email.$dirty && !$v.email.required) || ($v.email.$dirty && !$v.email.email)}"
        >
        <label for="email">{{'Email'|localize}}</label>
        <small
          v-if="$v.email.$dirty && !$v.email.required"
          class="helper-text invalid">{{'Please enter your email'|localize}}</small>
        <small
          v-else-if="$v.email.$dirty && !$v.email.email"
          class="helper-text invalid">{{'Please enter correct email'|localize}}</small>
      </div>
      <div class="input-field">
        <input
          id="password"
          type="password"
          v-model.trim="password"
          :class="{invalid: ($v.password.$dirty && !$v.password.required) || ($v.password.$dirty && !$v.password.minLength)}"
        >
        <label for="password">{{'Password'|localize}}</label>
        <small
          v-if="$v.password.$dirty && !$v.password.required"
          class="helper-text invalid">{{'Please enter your password'|localize}}</small>
        <small
          v-else-if="$v.password.$dirty && !$v.password.minLength"
          class="helper-text invalid">{{"Password can't be lower"|localize}} {{$v.password.$params.minLength.min}} {{'symbols'|localize}}</small>
      </div>
    </div>
    <div class="card-action">
      <div>
        <button
          class="btn waves-effect waves-light auth-submit"
          type="submit"
        >
          {{'Sing In'|localize}}
          <i class="material-icons right">send</i>
        </button>
      </div>
      
      <p class="center">
        {{"Haven't account?"|localize}}
        <router-link to="/register">{{'Sing Up'|localize}}</router-link>
      </p>
    </div>
  </form>
</template>

<script>
  import {email, required, minLength} from 'vuelidate/lib/validators'
  import messages from '@/utils/messages'
  
  export default {
    name: "Login",
    metaInfo() {
      return {
        title: this.$title('Login')
      }
    },
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
    mounted() {
      if (messages[this.$route.query.message]) {
        this.$message(messages[this.$route.query.message])
      }
    },
    methods: {
      async submitHandler() {
        if (this.$v.$invalid) {
          this.$v.$touch()
          return
        }
        const formData = {
          email: this.email,
          password: this.password
        }
        try {
          await this.$store.dispatch('login', formData)
          await this.$router.push('/')
        } catch (e) {
        
        }
      }
    }
  }
</script>

<style scoped>

</style>
