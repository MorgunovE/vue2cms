<template>
  <div>
    <div class="page-title">
      <h3>{{'Categories'|localize}}</h3>
    </div>
    <section>
      <Loader v-if="loading"/>
      <div v-else class="row">
        <CategoryCreate @created="addNewCategory"/>
        <CategoryEdit
          v-if="categories.length"
          :categories="categories"
          :key="categories.length + updateCount"
          @updated="updateCategories"
        />
        <p v-else class="center">{{"Haven't categories"|localize}}</p>
      </div>
    </section>
  </div>
<!--  0-36-->
</template>

<script>
  import CategoryCreate from '@/components/CategoryCreate'
  import CategoryEdit from '@/components/CategoryEdit'
  
  export default {
    name: "Categories",
    metaInfo() {
      return {
        title: this.$title('Categories')
      }
    },
    data() {
      return {
        categories: [],
        loading: true,
        updateCount: 0
      }
    },
    async mounted() {
      this.categories = await this.$store.dispatch('fetchCategories')
      this.loading = false
    },
    methods: {
      addNewCategory(category) {
        this.categories.push(category)
      },
      updateCategories(categoryData) {
        const idx = this.categories.findIndex(category => category.id === categoryData.id)
        this.categories[idx].title = categoryData.title
        this.categories[idx].limit = categoryData.limit
        this.updateCount++
      }
    },
    components: {CategoryEdit, CategoryCreate}
  }
</script>

<style scoped>

</style>
