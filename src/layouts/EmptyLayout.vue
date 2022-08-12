<template>
  <div class="grey darken-1 empty-layout">
    <router-view/>
  </div>
</template>

<script>
  import messages from '@/utils/messages'
  
  export default {
    name: "EmptyLayout",
    computed: {
      error() {
        return this.$store.getters.error
      }
    },
    watch: {
      error(fbError) {
        // 2-58
        this.$error(messages[fbError.code] || 'Unknown error')
      }
    }
  }
</script>

<style scoped>

</style>
