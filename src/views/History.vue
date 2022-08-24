<template>
  <div>
    <div class="page-title">
      <h3>{{'History'|localize}}</h3>
    </div>
    
    <div class="history-chart">
      <p class="center">{{'Costs by category'|localize}}</p>
      <PieChart :chartData="chartData"/>
    </div>
    <Loader v-if="loading"/>
    <p class="center" v-else-if="!records.length">{{"Haven't records"|localize}}
      <router-link to="/record">{{'Add new record'|localize}}</router-link>
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
    metaInfo() {
      return {
        title: this.$title('History')
      }
    },
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
              backgroundColor: ['#FF6633', '#FFB399', '#FF33FF', '#FFFF99', '#00B3E6',
                '#E6B333', '#3366E6', '#999966', '#99FF99', '#B34D4D',
                '#80B300', '#809900', '#E6B3B3', '#6680B3', '#66991A',
                '#FF99E6', '#CCFF1A', '#FF1A66', '#E6331A', '#33FFCC',
                '#66994D', '#B366CC', '#4D8000', '#B33300', '#CC80CC',
                '#66664D', '#991AFF', '#E666FF', '#4DB3FF', '#1AB399',
                '#E666B3', '#33991A', '#CC9999', '#B3B31A', '#00E680',
                '#4D8066', '#809980', '#E6FF80', '#1AFF33', '#999933',
                '#FF3380', '#CCCC00', '#66E64D', '#4D80CC', '#9900B3',
                '#E64D66', '#4DB380', '#FF4D4D', '#99E6E6', '#6666FF'],
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
