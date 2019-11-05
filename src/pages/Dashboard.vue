<template>
  <div>
    <!-- <splitpanes class="default-theme" horizontal style="height: 400px">
        <pane min-size="20" max-size="70">
            <span>1</span>
        </pane>
        <pane>
            <span>2</span>
        </pane>
        <pane max-size="70">
            <span>3</span>
        </pane>
    </splitpanes>-->
    <vue-resizable minHeight="200px" height="200px" :active="handlers">
      <div class="resizable-content"></div>
    </vue-resizable>
  </div>
</template>
<script>
// import { Splitpanes, Pane } from "splitpanes";
import "splitpanes/dist/splitpanes.css";
import VueResizable from "vue-resizable";

export default {
  components: {
    // Splitpanes,
    // Pane,
    VueResizable
  },
  data() {
    // const tW = 150;
    // const tH = 150;
    return {
      handlers: ["t"],
      left: `0`
    };
  }
};
</script>
<style>
.splitpanes__pane {
  justify-content: center;
  align-items: center;
  display: flex;
}

.splitpanes__pane span {
  font-family: Helvetica, Arial, sans-serif;
  color: #fff;
  font-size: 5em;
  opacity: 0.6;
}
.resizable-content {
  height: 100%;
  width: 100%;
  background-color: aqua;
}
</style>