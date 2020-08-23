<template>
  <div>
    <h2>Solar System</h2>

    <div class="card col-md-6 offset-md-3">
      <div class="card-body">
        <table class="table">
          <thead>
            <td class="text-left">
              Name
            </td>
            <td>
              Diameter (Km)
            </td>
            <td>
              Circumference (Km)
            </td>
            <td>
              Orbit Radius (Km)
            </td>
          </thead>
          <tbody>
            <tr v-for="model in models" :key="model.name">
              <td class="text-left">
                {{ model.name }}
              </td>
              <td>
                {{ model.diameter }}
              </td>
              <td>
                {{ model.circumference }}
              </td>
              <td>
                {{ model.orbitRadius }}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Watch } from 'vue-property-decorator';
import { State } from 'vuex-class';

@Component
export default class SunCircumference extends Vue {
  models = [
    {
      name: 'Sun',
      diameter: 1391900,
      circumference: 0,
      orbitRadius: 0,
    },
    {
      name: 'Mercury',
      diameter: 4866,
      circumference: 0,
      orbitRadius: 57950000,
    },
    {
      name: 'Venus',
      diameter: 12106,
      circumference: 0,
      orbitRadius: 108110000,
    },
    {
      name: 'Earth',
      diameter: 12742,
      circumference: 0,
      orbitRadius: 149570000,
    },
    {
      name: '...',
      diameter: 0,
      circumference: 0,
      orbitRadius: 0,
    },
  ];

  @State('pi') pi!: any
  @Watch('pi')
  onPiUpdated () {
    this.setCircumference();
  }

  mounted () {
    this.setCircumference()
  }

  setCircumference () {
    this.models.map((item) => {
      item.circumference = parseFloat(this.pi.currentPi) * item.diameter
      return item
    })
  }

}
</script>

<style scoped>
table {
  text-align: right;
}
table> thead {
  font-weight: bold;
}
</style>
