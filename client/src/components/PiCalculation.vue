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
              class="btn btn-sm mr-1"
              @click="reset"
            >
              Reset
            </button>
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
import { GET_PI, CALCULATE_PI, RESET_PI_CALCULATION } from '../store';

const initStartButton = {
  isStart: false,
  text: "Calculate",
  interval: 0,
  class: "btn-success"
};

@Component
export default class PiCalculation extends Vue {

  @State('pi') pi!: any
  @Action(GET_PI) getPi!: (param: any) => Promise<any>
  @Action(CALCULATE_PI) calculatePi!: (param: any) => Promise<any>
  @Action(RESET_PI_CALCULATION) resetPiCalculation!: (param: any) => Promise<any>

  startButton = Object.assign({}, initStartButton)

  get piLastUpdated() {
    return new Date(this.pi.lastUpdated).toString()
  }

  async mounted() {
    await this.calculatePi({ start: false })
    await this.getPi({});
  }

  async reset() {
    const isConfirmed= confirm('Are you sure to remove all calculations?');

    if (isConfirmed) {
      await this.stop();
      await this.resetPiCalculation({});
      await this.getPi({});
    }
  }

  async start() {
    this.startButton.isStart = !this.startButton.isStart;

    if (this.startButton.isStart) {
      await this.calculatePi({ start: true })

      this.startButton.text = "Stop";
      this.startButton.class = "btn-danger";
      this.startButton.interval = setInterval(() => {
        this.getPi({})
      }, 1000)
    } else {
      await this.stop()
    }
  }

  async stop() {
    await this.calculatePi({ start: false })
    await this.getPi({})

    clearInterval(this.startButton.interval)
    this.startButton = Object.assign({}, initStartButton)
  }
}
</script>

<style scoped></style>
