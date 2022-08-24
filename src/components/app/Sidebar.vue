<template>
  <ul class="sidenav app-sidenav" :class="{open: value}">
    <router-link
      v-for="link in links"
      :key="link.url"
      tag="li"
      active-class="active"
      :to="link.url"
      exact
    >
      <a href="#" class="waves-effect waves-orange pointer">{{link.title}}</a>
    </router-link>
  </ul>
</template>

<script>
  import localizeFilter from '@/filters/localize.filter'
  
  export default {
    name: "Sidebar",
    props: ['value'],
    data() {
      return {
        links: [
          {title: localizeFilter("Account"), url: '/'},
          {title: localizeFilter("History"), url: '/history'},
          {title: localizeFilter("Plan"), url: '/planning'},
          {title: localizeFilter("New record"), url: '/record'},
          {title: localizeFilter("Category"), url: '/categories'},
        ]
      }
    }
  }
</script>

<style scoped>

</style>
