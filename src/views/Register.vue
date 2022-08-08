<template>
  <form class="card auth-card">
    <div class="card-content">
      <span class="card-title">Home Account</span>
      <div class="input-field">
        <input
            id="email"
            type="text"
        >
        <label for="email">Email</label>
        <small class="helper-text invalid">Email</small>
      </div>
      <div class="input-field">
        <input
            id="password"
            type="password"
            class="validate"
        >
        <label for="password">Password</label>
        <small class="helper-text invalid">Password</small>
      </div>
      <div class="input-field">
        <input
            id="name"
            type="text"
            class="validate"
        >
        <label for="name">Name</label>
        <small class="helper-text invalid">Name</small>
      </div>
      <p>
        <label>
          <input type="checkbox" />
          <span>Agree with rules</span>
        </label>
      </p>
    </div>
    <div class="card-action">
      <div>
        <button
            class="btn waves-effect waves-light auth-submit"
            type="submit"
        >
          Sing Up
          <i class="material-icons right">send</i>
        </button>
      </div>

      <p class="center">
        Do you have account?
        <a href="/">Sing In!</a>
      </p>
    </div>
  </form>
</template>
