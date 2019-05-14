<template>
  <div class="container">
    Hi, {{ title }}
    <h3>{{ info }} -> {{ from }}</h3>
    <h4>{{ busName }}</h4>
  </div>
</template>

<script>
export default {
  name: "firstSon",
  data() {
    return {
      title: "firstSon",
      info: "null",
      from: "self",
      busName: "I don't know."
    };
  },
  mounted() {
    this.$bus.$on("todoSth", params => {
      this.info = params.info;
      this.from = params.from;
    });
    this.busName = this.$bus.busName;
    console.log();
  }
};
</script>

<style lang="css"></style>
