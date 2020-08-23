<template>
  <div class="home">
    <PiCalculation />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import PiCalculation from "@/components/PiCalculation.vue";

@Component({
  components: {
    PiCalculation
  }
})
export default class Home extends Vue {}
</script>
