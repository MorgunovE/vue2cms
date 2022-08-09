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
  export default {
    name: "Sidebar",
    props: ['value'],
    data() {
      return {
        links: [
          {title: 'Account', url: '/'},
          {title: 'History', url: '/history'},
          {title: 'Plan', url: '/planning'},
          {title: 'New item', url: '/record'},
          {title: 'Category', url: '/categories'},
        ]
      }
    }
  }
</script>

<style scoped>

</style>
