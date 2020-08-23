<template>
  <div>
    <h2>Pi Calculation</h2>

    <div class="card col-md-4 offset-md-4">
      <div class="card-body">
        <form>
          <div class="form-group">
            <label for="">Last update: {{ piLastUpdated }}</label>
            <input v-model="pi.currentPi" type="text" class="form-control" readonly />
          </div>

          <div class="action">
            <button
              type="button"
              class="btn btn-sm"
              :class="startButton.class"
              @click="start"
            >
              {{ startButton.text }}
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { State, Action } from 'vuex-class';
import { GET_PI, CALCULATE_PI } from '@/store';

@Component
export default class PiCalculation extends Vue {

  @State('pi') pi!: any
  @Action(GET_PI) getPi!: (param: any) => Promise<any>
  @Action(CALCULATE_PI) calculatePi!: (param: any) => Promise<any>

  startButton = {
    isStart: false,
    text: "start",
    interval: 0,
    class: "btn-success"
  };

  get piLastUpdated() {
    return new Date(this.pi.lastUpdated).toString()
  }

  async mounted() {
    await this.getPi({});
  }

  start() {
    this.startButton.isStart = !this.startButton.isStart;

    if (this.startButton.isStart) {
      this.calculatePi({ start: true })
      this.startButton.text = "stop";
      this.startButton.class = "btn-danger";
      this.startButton.interval = setInterval(() => {
        this.getPi({})
      }, 1000);
    } else {
      this.calculatePi({ start: false })
      this.startButton.text = "start";
      this.startButton.class = "btn-success";
      this.getPi({})
      clearInterval(this.startButton.interval);
    }
  }
}
</script>

<style scoped></style>
