<template>
  <div class="col s12 m6">
    <div>
      <div class="page-subtitle">
        <h4>{{'Edit'|localize}}</h4>
      </div>
      
      <form @submit.prevent="submitHandler">
        <div class="input-field">
          <select ref="select" v-model="current">
            <option v-for="category in categories" :key="category.id" :value="category.id">{{category.title}}</option>
          </select>
          <label>{{'Choose category'|localize}}</label>
        </div>
        
        <div class="input-field">
          <input
            id="name"
            type="text"
            v-model="title"
            :class="{invalid: $v.title.$dirty && !$v.title.required}"
          >
          <label for="name">{{'Name'|localize}}</label>
          <span
            v-if="$v.title.$dirty && !$v.title.required"
            class="helper-text invalid">{{'Enter name of category'|localize}}</span>
        </div>
        
        <div class="input-field">
          <input
            id="limit"
            type="number"
            v-model.number="limit"
            :class="{invalid: $v.limit.$dirty && !$v.limit.minValue}"
          >
          <label for="limit">{{'Limit'|localize}}</label>
          <span
            v-if="$v.limit.$dirty && !$v.limit.minValue"
            class="helper-text invalid">{{'Min value'|localize}} {{$v.limit.$params.minValue.min}}</span>
        </div>
        
        <button class="btn waves-effect waves-light" type="submit">
          {{'Update'|localize}}
          <i class="material-icons right">send</i>
        </button>
      </form>
    </div>
  </div>
</template>

<script>
  import {required, minValue} from 'vuelidate/lib/validators'
  
  export default {
    name: "CategoryEdit",
    props: ['categories'],
    data() {
      return {
        select: null,
        title: '',
        limit: 1,
        current: null
      }
    },
    methods: {
      async submitHandler() {
        if (this.$v.$invalid) {
          this.$v.$touch()
          return
        }
        try {
          const categoryData = {
            id: this.current,
            title: this.title,
            limit: this.limit
          }
          await this.$store.dispatch('updateCategory', categoryData)
          this.$message('Category updated')
          this.$emit('updated', categoryData)
        } catch (e) {
        
        }
      }
    },
    mounted() {
      M.updateTextFields()
      this.select = M.FormSelect.init(this.$refs.select);
    },
    watch: {
      current(categoryId) {
        const {title, limit} = this.categories.find(category => category.id === categoryId)
        this.title = title
        this.limit = limit
      }
    },
    created() {
      const {id, title, limit} = this.categories[0];
      this.current = id
      this.title = title
      this.limit = limit
    },
    validations: {
      title: {required},
      limit: {minValue: minValue(1)}
    },
    destroyed() {
      if (this.select && this.select.destroy) {
        this.select.destroy()
      }
    }
  }
</script>

<style scoped>

</style>
