<template>
    <div :class="$style.chart">
        <div :class="$style.badge">Some Chart</div>
        <div :class="$style.chartWrapper">
            <GChart
                type="ColumnChart"
                :data="chartData"
                :options="chartOptions"
            /> 
        </div>
    </div>
</template>

<script>
import { GChart } from 'vue-google-charts/legacy'
export default {
    name: 'Chart',
    components: {
        GChart
    },
    data () {
    return {
      // Array will be automatically processed with visualization.arrayToDataTable function
      chartData: [
        ['Year', 'Sales', 'Expenses', 'Profit'],
        ['2014', 1000, 400, 200],
        ['2015', 1170, 460, 250],
        ['2016', 660, 1120, 300],
        ['2017', 1030, 540, 350]
      ],
      chartOptions: {
        height: 500,
        colors: ['#d50023', '#d55066', '#eb9aa7'],
        chart: {
          title: 'Company Performance',
          subtitle: 'Sales, Expenses, and Profit: 2014-2017',
        }
      }
    }
  }
}
</script>

<style module lang='scss'>
.chart {
    .badge {
        display: inline-block;
        background-color: #d50023;
        color: white;
        font-size: 12px;
        text-transform: uppercase;
        padding: 2px 5px;
        margin-right: 10px;
        margin-bottom: 10px;
    }
    .chartWrapper {
        height: 500px;
    }
}
</style>