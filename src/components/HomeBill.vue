<template>
  <div class="col s12 m6 l4">
    <div class="card light-blue bill-card">
      <div class="card-content white-text">
        <span class="card-title">Price in currency</span>
        
        <p v-for="cur of currencies" :key="cur" class="currency-line">
          <span>{{getCurrency(cur) | currency(cur)}}</span>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "HomeBill",
    props: ['rates'],
    data() {
      return {
        currencies: ['USD', 'GEL', 'EUR', 'RUB'],
        notInfoRates: {
          'USD': 1,
          'GEL': 0,
          'EUR': 0,
          'RUB': 0
        }
      }
    },
    methods: {
      getCurrency(currency) {
        return isNaN(Math.floor(this.$store.getters.info.bill * this.rates[currency])) ? Math.floor(this.$store.getters.info.bill * this.notInfoRates[currency]) : Math.floor(this.$store.getters.info.bill * this.rates[currency])
      }
    }
  }
</script>

<style scoped>

</style>
