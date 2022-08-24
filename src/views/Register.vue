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
      <div class="input-field">
        <input
          id="name"
          type="text"
          v-model.trim="name"
          :class="{invalid: $v.name.$dirty && !$v.name.required}"
        >
        <label for="name">{{'Name'|localize}}</label>
        <small
          class="helper-text invalid"
          v-if="$v.name.$dirty && !$v.name.required"
        >{{'Enter your name'|localize}}</small>
      </div>
      <p>
        <label>
          <input type="checkbox" v-model="agree"/>
          <span>{{'Agree with rules'|localize}}</span>
        </label>
      </p>
    </div>
    <div class="card-action">
      <div>
        <button
          class="btn waves-effect waves-light auth-submit"
          type="submit"
        >
          {{'Sing Up'|localize}}
          <i class="material-icons right">send</i>
        </button>
      </div>
      
      <p class="center">
        {{'Do you have account?'|localize}}
        <router-link to="/login">{{'Sing In'|localize}}!</router-link>
      </p>
    </div>
  </form>
</template>

<script>
  import {email, required, minLength} from 'vuelidate/lib/validators'
  
  export default {
    name: "register",
    metaInfo() {
      return {
        title: this.$title('Register')
      }
    },
    data() {
      return {
        email: '',
        password: '',
        name: '',
        agree: false
      }
    },
    validations: {
      email: {email, required},
      password: {required, minLength: minLength(7)},
      name: {required},
      agree: {checked: v => v}
    },
    methods: {
      async submitHandler() {
        if (this.$v.$invalid) {
          this.$v.$touch()
          return
        }
        const formData = {
          email: this.email,
          password: this.password,
          name: this.name
        }
        try {
          await this.$store.dispatch('register', formData)
          await this.$router.push('/')
        } catch (e) {
        
        }
      }
    }
  }
</script>
