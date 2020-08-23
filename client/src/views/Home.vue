<template>
  <div class="home">
    <PiCalculation />
    <SunCircumference class="mt-3" />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import PiCalculation from '../components/PiCalculation.vue';
import SunCircumference from '../components/SunCircumference.vue';

@Component({
  components: {
    PiCalculation,
    SunCircumference
  }
})
export default class Home extends Vue {}
</script>
