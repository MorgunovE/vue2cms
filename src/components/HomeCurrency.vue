<template>
  <div class="col s12 m6 l8">
    <div class="card orange darken-3 bill-card">
      <div class="card-content white-text">
        <div class="card-header">
          <span class="card-title">{{'Curs of currency'|localize}}</span>
        </div>
        <table>
          <thead>
          <tr>
            <th>{{'Currency'|localize}}</th>
            <th>{{'Curs'| localize}}</th>
            <th>{{'Date'|localize}}</th>
          </tr>
          </thead>
          
          <tbody>
          <tr v-for="cur of currencies" :key="cur">
            <td>{{cur}}</td>
            <td>{{rates[cur]}}</td>
            <td>{{date | date('date')}}</td>
          </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "HomeCurrency",
    props: ['rates', 'date'],
    data() {
      return {
        currencies: ['USD', 'GEL', 'EUR', 'RUB']
      }
    },
  }
</script>

<style scoped>

</style>
