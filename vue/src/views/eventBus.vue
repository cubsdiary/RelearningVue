<template>
  <div id="parent">
    <h1>{{ title }}</h1>

    <p>
      <firstSon></firstSon>
      <secondSon></secondSon>
      <thirdSon></thirdSon>
    </p>
    <p>
      <button type="button" name="button" @click="change">
        {{ busName ? busName : "get bus" }}
      </button>
    </p>
  </div>
</template>

<script type="text/javascript">
import firstSon from "./bus/son_1";
import secondSon from "./bus/son_2";
import thirdSon from "./bus/son_3";
export default {
  name: "parent",
  data() {
    return {
      title: "父组件",
      busName: null,
      son: {
        first: "first son",
        second: "second son"
      }
    };
  },
  methods: {
    change() {
      console.log(this.$bus._data);
      this.busName = this.$bus.busName;
    }
  },
  components: {
    firstSon,
    secondSon,
    thirdSon
  }
};
</script>

<style lang="stylus"></style>
