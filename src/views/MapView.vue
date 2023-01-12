<template>
  <div id="app">
    <div class='wrapper'>
      <ejs-maps>
        <e-layers>
          <e-layer :urlTemplate='urlTemplate'>
          </e-layer>
        </e-layers>
      </ejs-maps>
    </div>
  </div>
</template>

<script>
import Vue from 'vue';
import {MapsPlugin} from '@syncfusion/ej2-vue-maps';

Vue.use(MapsPlugin);
export default {
  name: "MapView.vue",
  data() {
    return {
      urlTemplate: 'https://tile.openstreetmap.org/level/tileX/tileY.png'
    }
  }
}
</script>

<style scoped>

</style>