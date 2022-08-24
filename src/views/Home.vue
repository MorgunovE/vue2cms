<template>
  <div>
    <div class="page-title">
      <h3>{{'Price'|localize}}</h3>
      
      <button class="btn waves-effect waves-light btn-small" @click="refresh">
        <i class="material-icons">refresh</i>
      </button>
    </div>
    
    <loader v-if="loading"/>
    
    <div v-else class="row">
      <HomeBill
        :rates="currency.rates"
      />
      <HomeCurrency
        :rates="currency.rates"
        :date="currency.date"
      />
    </div>
  </div>
</template>

<script>
  import HomeBill from '@/components/HomeBill'
  import HomeCurrency from '@/components/HomeCurrency'
  import localizeFilter from '@/filters/localize.filter'
  
  export default {
    name: 'home',
    metaInfo() {
      return {
        title: this.$title('Home')
      }
    },
    data() {
      return {
        loading: true,
        currency: null
      }
    },
    methods: {
      async refresh() {
        this.loading = true
        this.currency = await this.$store.dispatch('fetchCurrency') || {rates: {
            'USD': 1,
            'GEL': localizeFilter('not info or you need to add key to rates'),
            'EUR': localizeFilter('not info or you need to add key to rates'),
            'RUB': localizeFilter('not info or you need to add key to rates')
          }, date: new Date()}
        this.loading = false
      }
    },
    async mounted() {
      this.currency = await this.$store.dispatch('fetchCurrency') || {rates: {
          'USD': 1,
          'GEL': localizeFilter('not info or you need to add key to rates'),
          'EUR': localizeFilter('not info or you need to add key to rates'),
          'RUB': localizeFilter('not info or you need to add key to rates')
        }, date: new Date()}
      this.loading = false
    },
    components: {HomeCurrency, HomeBill}
  }
</script>
