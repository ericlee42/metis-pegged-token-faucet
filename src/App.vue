<template>
  <Faucet />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Faucet from "./components/Faucet.vue";

export default defineComponent({
  name: "App",
  components: {
    Faucet,
  },
});
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
