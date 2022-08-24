<template>
  <div>
    <div class="page-title">
      <h3>History</h3>
    </div>
    
    <div class="history-chart">
      <p class="center">Costs by category</p>
      <PieChart :chartData="chartData"/>
    </div>
    <Loader v-if="loading"/>
    <p class="center" v-else-if="!records.length">Haven't records
      <router-link to="/record">Add new record</router-link>
    </p>
    <section v-else>
      <HistoryTable :records="items"/>
      <Paginate
        v-model="page"
        :page-count="pageCount"
        :click-handler="pageChangeHandler"
        :prev-text="'Prev'"
        :next-text="'Next'"
        :container-class="'pagination'"
        :page-class="'waves-effect'"
      />
    </section>
  </div>
</template>
<!--2-56-->
<script>
  import HistoryTable from '@/components/HistoryTable'
  import paginationMixin from '@/mixins/pagination.mixin'
  import PieChart from '@/components/Pie'
  
  export default {
    name: 'history',
    mixins: [paginationMixin],
    data() {
      return {
        loading: true,
        records: [],
        chartData: {}
      }
    },
    async mounted() {
      this.records = await this.$store.dispatch('fetchRecords')
      const categories = await this.$store.dispatch('fetchCategories')
      this.setup(categories)
      this.loading = false
    },
    methods: {
      setup(categories) {
        this.setupPagination(this.records.map(record => {
          return {
            ...record,
            categoryName: categories.find(category => category.id === record.categoryId).title,
            typeClass: record.type === 'income' ? 'green' : 'red',
          }
        }))
        this.chartData = {
          labels: categories.map(category => category.title),
            datasets: [
            {
              backgroundColor: ['#41B883', '#E46651', '#00D8FF', '#DD1B16'],
              data: categories.map(category => {
                return this.records.reduce((total, record) => {
                  if(record.categoryId === category.id && record.type === 'outcome') {
                    total += +record.amount
                  }
                  return total
                }, 0)
              })
            }
          ]
        }
      }
    },
    components: {PieChart, HistoryTable},
  }
</script>
